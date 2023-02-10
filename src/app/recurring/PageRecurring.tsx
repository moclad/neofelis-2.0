import Avvvatars from 'avvvatars-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiEye, FiPlus, FiTrash2, FiXCircle } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { Page, PageContent } from '@/app/layout';
import { usePaginationFromUrl } from '@/app/router';
import { ActionsButton } from '@/components/ActionsButton';
import { ConfirmMenuItem } from '@/components/ConfirmMenuItem';
import { DataList, DataListCell, DataListHeader, DataListPaginationFooter, DataListRow } from '@/components/DataList';
import { ResponsiveIconButton } from '@/components/ResponsiveIconButton';
import { TextCurrency } from '@/components/TextCurrency';
import { useToastSuccess } from '@/components/Toast';
import {
  Recurring,
  useDeleteRecurringMutation,
  useInactivateRecurringMutation,
  useRecurringAggregateSubscription,
  useRecurringSubscription,
} from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useEditMode } from '@/hooks/useEditMode';
import {
  Badge,
  HStack,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Text,
  Tooltip,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import { RecurringDialog } from './dialogs/recurring-dialog';
import { RecurringNav } from './RecurringNav';

export const PageRecurring = () => {
  const { colorModeValue } = useDarkMode();
  const { t } = useTranslation(['recurring', 'common']);
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataContext, isEditing, onEdit, onFinish } = useEditMode<number, Recurring>();
  const toastSuccess = useToastSuccess();
  const { page, setPage } = usePaginationFromUrl();
  const pageSize = 15;

  const { loading, data } = useRecurringSubscription({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });

  const { data: aggregateData } = useRecurringAggregateSubscription();

  const [deleteRecurring, { loading: deleteFetching }] = useDeleteRecurringMutation();

  const [inactivateRecurring, { loading: inactivateFetching }] = useInactivateRecurringMutation();

  const onDeactivate = async (id: number) => {
    inactivateRecurring({
      variables: {
        id,
      },
    }).then(() => {
      toastSuccess({
        title: t('common:feedbacks.inactivate.title'),
      });
    });
  };

  const onDelete = async (id: number) => {
    deleteRecurring({
      variables: {
        id,
      },
    }).then(() => {
      toastSuccess({
        title: t('common:feedbacks.deletedSuccess.title'),
      });
    });
  };

  const onCloseDialog = () => {
    onClose();
  };

  return (
    <>
      <Page nav={<RecurringNav />}>
        <PageContent
          loading={loading || deleteFetching || inactivateFetching}
          title={t('recurring:recurring.title')}
          actions={[
            <ResponsiveIconButton key="createRecurring" icon={<FiPlus />} variant="@primary" onClick={() => onOpen()}>
              {t('recurring:recurring.actions.create')}
            </ResponsiveIconButton>,
          ]}
        >
          <DataList>
            <DataListHeader>
              <DataListCell colName="name" colWidth={1.5}>
                {t('recurring:recurring.table.header.title')}
              </DataListCell>
              <DataListCell colName="accounts" isVisible={{ base: false, lg: true }}>
                {t('recurring:recurring.table.header.accounts')}
              </DataListCell>
              <DataListCell colName="cycle" isVisible={{ base: false, lg: true }}>
                {t('recurring:recurring.table.header.cycle')}
              </DataListCell>
              <DataListCell colName="status">{t('recurring:recurring.table.header.status')}</DataListCell>
              <DataListCell colName="amount">{t('recurring:recurring.table.header.amount')}</DataListCell>
              <DataListCell colName="total" isVisible={{ base: false, lg: true }}>
                {t('recurring:recurring.table.header.totalPaid')}
              </DataListCell>
              <DataListCell colName="actions" colWidth="4rem" align="flex-end" />
            </DataListHeader>
            {data &&
              data.recurring.map((item) => (
                <DataListRow as={LinkBox} key={item.id}>
                  <DataListCell colName="title" colWidth={1.5}>
                    <HStack maxW="100%">
                      <Avvvatars value={item.title} />
                      <Text noOfLines={0} maxW="full">
                        <LinkOverlay href="#">{item.title}</LinkOverlay>
                      </Text>
                    </HStack>
                  </DataListCell>
                  <DataListCell colName="accounts">
                    <Wrap>
                      <WrapItem>
                        <Text noOfLines={0} maxW="full" fontSize="sm" color={colorModeValue('gray.600', 'gray.300')}>
                          {item?.account_info?.name}
                        </Text>
                      </WrapItem>
                      <WrapItem>
                        <Text noOfLines={0} maxW="full" fontSize="sm" color={colorModeValue('gray.600', 'gray.300')}>
                          {item?.accountInfoByAccountTo?.name}
                        </Text>
                      </WrapItem>
                    </Wrap>
                  </DataListCell>
                  <DataListCell colName="cycle">
                    <Wrap>
                      <WrapItem>
                        <Badge size="sm" colorScheme="success">
                          {t(`recurring:recurring.cycleType.${item.cycle_type}`)}
                        </Badge>
                      </WrapItem>
                      <WrapItem>
                        <Badge size="sm" colorScheme="gray">
                          {t(`recurring:recurring.durationType.${item.duration_type}`)}
                        </Badge>
                      </WrapItem>
                    </Wrap>
                  </DataListCell>
                  <DataListCell colName="status">
                    <Badge size="sm" colorScheme={item.active ? 'success' : 'red'}>
                      {item.active ? t('recurring:recurring.status.active') : t('recurring:recurring.status.inactive')}
                    </Badge>
                  </DataListCell>
                  <DataListCell colName="amount">
                    <TextCurrency value={item.amount} locale="de" currency="EUR" />
                  </DataListCell>
                  <DataListCell colName="total">
                    <TextCurrency value={item?.transactions_aggregate?.aggregate?.sum?.amount ?? 0} locale="de" currency="EUR" />
                  </DataListCell>
                  <DataListCell colName="actions">
                    <HStack>
                      <Tooltip hasArrow label={t('common:actions.view')}>
                        <ActionsButton icon={<FiEye />} onClick={() => navigate(`/recurring/transactions/${item.id}`)} />
                      </Tooltip>
                      <Menu isLazy>
                        <MenuButton as={ActionsButton} disabled={!item.active} />
                        <Portal>
                          <MenuList>
                            <MenuItem onClick={() => onEdit(item.id, item)} icon={<FiEdit />}>
                              {t('common:actions.edit')}
                            </MenuItem>
                            <ConfirmMenuItem icon={<FiXCircle />} onClick={() => onDeactivate(item.id)}>
                              {t('common:actions.deactivate')}
                            </ConfirmMenuItem>
                            <MenuDivider />
                            <ConfirmMenuItem
                              isDisabled={item?.transactions_aggregate?.aggregate?.sum?.amount > 0}
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
                    </HStack>
                  </DataListCell>
                </DataListRow>
              ))}
            <DataListPaginationFooter
              isLoadingPage={loading || deleteFetching}
              setPage={setPage}
              page={page}
              pageSize={pageSize}
              totalItems={aggregateData?.recurring_aggregate?.aggregate?.count}
            ></DataListPaginationFooter>
          </DataList>
        </PageContent>
      </Page>
      <RecurringDialog
        id={dataContext?.id}
        isOpen={isOpen || isEditing}
        isEditing={isEditing}
        initialValues={dataContext}
        onClose={() => {
          onFinish();
          onClose();
          onCloseDialog();
        }}
      />
    </>
  );
};
