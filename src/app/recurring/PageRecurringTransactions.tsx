import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiArrowLeftCircle, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

import { Page, PageBottomBar, PageContent, PageTopBar } from '@/app/layout';
import { TransactionDialog } from '@/app/transactions/transaction-dialog';
import { ActionsButton } from '@/components/ActionsButton';
import { ConfirmMenuItem } from '@/components/ConfirmMenuItem';
import {
  DataList,
  DataListCell,
  DataListHeader,
  DataListPaginationFooter,
  DataListRow
} from '@/components/DataList';
import { TextCurrency } from '@/components/TextCurrency';
import { useToastError, useToastSuccess } from '@/components/Toast';
import {
  Transactions,
  useDeleteTransactionByIdMutation,
  useRecurringTransactionsQuery
} from '@/generated/graphql';
import { useEditMode } from '@/hooks/useEditMode';
import {
  Button,
  Flex,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Text
} from '@chakra-ui/react';

import { ResponsiveIconButton } from '../../components/ResponsiveIconButton';
import { TransactionType } from '../../types/types';

export const PageRecurringTransactions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toastSuccess = useToastSuccess();
  const toastError = useToastError();
  const { dataContext, isEditing, onEdit, onFinish } = useEditMode<
    number,
    Transactions
  >();

  const { id } = useParams();

  const { data, loading } = useRecurringTransactionsQuery({
    variables: { recurringId: id },
  });

  const [deleteTransaction, { loading: deleteFetching }] =
    useDeleteTransactionByIdMutation();

  const onDelete = async (id: number) => {
    deleteTransaction({
      variables: {
        id,
      },
      refetchQueries: 'active',
    })
      .then(() => {
        toastSuccess({
          title: t('common:feedbacks.deletedSuccess.title'),
        });
      })
      .catch((error) => toastError(error));
  };

  return (
    <Page>
      <PageContent
        loading={loading}
        title={t('recurring:recurring.title')}
        actions={[
          <ResponsiveIconButton
            key="goBack"
            icon={<FiArrowLeft />}
            variant="@primary"
            onClick={() => navigate(-1)}
          >
            {t('common:actions.back')}
          </ResponsiveIconButton>,
        ]}
      >
        <DataList>
          <DataListHeader isVisible={{ base: false, md: true }}>
            <DataListCell colName="date">
              {t('recurring:recurring.table.header.date')}
            </DataListCell>
            <DataListCell colName="amount">
              {t('recurring:recurring.table.header.amount')}
            </DataListCell>
            <DataListCell colName="actions" colWidth="4rem" align="flex-end" />
          </DataListHeader>
          {data &&
            data.transactions.map((item) => (
              <DataListRow as={LinkBox} key={item.id}>
                <DataListCell colName="title">
                  <Text noOfLines={0} maxW="full" fontSize="sm">
                    <LinkOverlay href="#">{item.transaction_date}</LinkOverlay>
                  </Text>
                </DataListCell>
                <DataListCell colName="amount">
                  <TextCurrency
                    value={item.amount}
                    locale="de"
                    currency="EUR"
                    fontSize="sm"
                  />
                </DataListCell>
                <DataListCell colName="actions">
                  <Menu isLazy>
                    <MenuButton as={ActionsButton} size="xs" />
                    <Portal>
                      <MenuList>
                        <MenuItem
                          onClick={() => onEdit(item.id, item)}
                          icon={<FiEdit />}
                        >
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
            setPage={(p) => {
              return null;
            }}
            isLoadingPage={loading || deleteFetching}
            pageSize={data?.transactions_aggregate?.aggregate?.count}
            page={1}
            totalItems={data?.transactions_aggregate?.aggregate?.count}
          ></DataListPaginationFooter>
        </DataList>
        <TransactionDialog
          isOpen={isEditing}
          onClose={onFinish}
          transactionType={TransactionType.Expense}
        />
      </PageContent>
    </Page>
  );
};
