import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

import { Page, PageContent } from '@/app/layout';
import { TransactionDialog } from '@/app/transactions/transaction-dialog';
import { ActionsButton } from '@/components/ActionsButton';
import { ConfirmMenuItem } from '@/components/ConfirmMenuItem';
import { DataList, DataListCell, DataListHeader, DataListPaginationFooter, DataListRow } from '@/components/DataList';
import { TextCurrency } from '@/components/TextCurrency';
import { useToastError, useToastSuccess } from '@/components/Toast';
import { Transactions, useDeleteTransactionByIdMutation, useRecurringTransactionsQuery } from '@/generated/graphql';
import { useEditMode } from '@/hooks/useEditMode';
import { Badge, Box, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Portal, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import { NoData } from '../../components/no-data';
import { ResponsiveIconButton } from '../../components/ResponsiveIconButton';
import { TransactionType } from '../../types/types';

export const PageRecurringTransactions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['recurring', 'common']);

  const toastSuccess = useToastSuccess();
  const toastError = useToastError();
  const { dataContext, isEditing, onEdit, onFinish } = useEditMode<number, Transactions>();

  const { id } = useParams();

  const { data, loading } = useRecurringTransactionsQuery({
    variables: { recurringId: id },
  });

  const [deleteTransaction, { loading: deleteFetching }] = useDeleteTransactionByIdMutation();

  const onDelete = async (id: number) => {
    deleteTransaction({
      variables: {
        id,
      },
      refetchQueries: 'active',
    })
      .then(() => {
        toastSuccess({
          title: t('feedbacks.deletedSuccess.title'),
        });
      })
      .catch((error) => toastError(error));
  };

  const showRecurringDetails = () => {
    if (!data || !data.recurring_by_pk) {
      return <></>;
    }

    const recurring = data.recurring_by_pk;

    return (
      <VStack align={'flex-start'} spacing={1} pb={5}>
        <HStack spacing="5px">
          <Text as="b">{t('recurring.fields.data.title').toString()}:</Text>
          <Text>{recurring.title}</Text>
          <Badge size="sm" colorScheme={recurring.active ? 'success' : 'red'}>
            {recurring.active ? t('recurring.status.active').toString() : t('recurring.status.inactive').toString()}
          </Badge>
        </HStack>
        <Wrap spacingX="30px">
          <WrapItem>
            <HStack>
              <Text as="b" fontSize={'sm'}>
                {t('recurring.fields.data.startOn').toString()}:
              </Text>
              <Text fontSize={'sm'}>{dayjs(recurring.start_on).format('DD MMM YYYY')}</Text>
            </HStack>
          </WrapItem>
          <WrapItem>
            <HStack>
              <Text as="b" fontSize={'sm'}>
                {t('recurring.fields.data.cycleType').toString()}:
              </Text>
              <Text fontSize={'sm'}>{t(`recurring.cycleType.${recurring.cycle_type}`).toString()}</Text>
            </HStack>
          </WrapItem>
          <WrapItem>
            <HStack>
              <Text as="b" fontSize={'sm'}>
                {t('recurring.fields.data.durationType').toString()}:
              </Text>
              <Text fontSize={'sm'}>{t(`recurring.durationType.${recurring.duration_type}`).toString()}</Text>
              {recurring.duration_type != 1 ? (
                <Text fontSize={'sm'}>{recurring.duration_type === 3 ? `(${recurring.no_of_times})` : recurring.until_date}</Text>
              ) : (
                <></>
              )}
            </HStack>
          </WrapItem>
          <WrapItem>
            <HStack>
              <Text as="b" fontSize={'sm'}>
                {t('recurring.fields.data.transactionType').toString()}:
              </Text>
              <Text fontSize={'sm'}>{t(`recurring.transactionType.${recurring.transaction_type}`).toString()}</Text>
            </HStack>
          </WrapItem>
          <WrapItem>
            <HStack>
              <Text as="b" fontSize={'sm'}>
                {t('recurring.transactions.totalPaid').toString()}:
              </Text>
              <TextCurrency value={data?.transactions_aggregate?.aggregate?.sum?.amount ?? 0} locale="de" currency="EUR" />
            </HStack>
          </WrapItem>
        </Wrap>
      </VStack>
    );
  };

  const showTransactionItems = () => {
    if (!data || !data.recurring_by_pk || data?.transactions?.length === 0) {
      return <NoData />;
    }

    return (
      <DataList>
        <DataListHeader isVisible={{ base: false, md: true }}>
          <DataListCell colName="date">{t('recurring.table.header.date').toString()}</DataListCell>
          <DataListCell colName="amount">{t('recurring.table.header.amount').toString()}</DataListCell>
          <DataListCell colName="actions" colWidth="4rem" align="flex-end" />
        </DataListHeader>
        {data &&
          data.transactions.map((item) => (
            <DataListRow key={item.id}>
              <DataListCell colName="title">
                <Text noOfLines={0} maxW="full" fontSize="sm">
                  {dayjs(item.transaction_date).format('DD MMM YYYY')}
                </Text>
              </DataListCell>
              <DataListCell colName="amount">
                <TextCurrency value={item.amount} locale="de" currency="EUR" fontSize="sm" />
              </DataListCell>
              <DataListCell colName="actions">
                <Menu isLazy>
                  <MenuButton as={ActionsButton} size="xs" />
                  <Portal>
                    <MenuList>
                      <MenuItem onClick={() => onEdit(item.id, item)} icon={<FiEdit />}>
                        {t('common:actions.edit')}
                      </MenuItem>
                      <MenuDivider />
                      <ConfirmMenuItem
                        icon={<FiTrash2 />}
                        onClick={() => {
                          onDelete(item.id);
                        }}
                      >
                        {t('common:actions.delete')}
                      </ConfirmMenuItem>
                    </MenuList>
                  </Portal>
                </Menu>
              </DataListCell>
            </DataListRow>
          ))}
        <DataListPaginationFooter
          setPage={() => {
            return null;
          }}
          isLoadingPage={loading || deleteFetching}
          pageSize={data?.transactions_aggregate?.aggregate?.count}
          page={1}
          totalItems={data?.transactions_aggregate?.aggregate?.count}
        ></DataListPaginationFooter>
      </DataList>
    );
  };

  return (
    <Page>
      <PageContent
        loading={loading}
        title={t('recurring.title').toString()}
        actions={[
          <ResponsiveIconButton key="goBack" icon={<FiArrowLeft />} variant="@primary" onClick={() => navigate('/recurring')}>
            {t('common:actions.back')}
          </ResponsiveIconButton>,
        ]}
      >
        <Box>
          {showRecurringDetails()}
          {showTransactionItems()}
        </Box>
        <TransactionDialog
          isOpen={isEditing}
          onClose={onFinish}
          transactionType={dataContext?.transaction_type as TransactionType}
          editing
          dataContext={dataContext}
        />
      </PageContent>
    </Page>
  );
};
