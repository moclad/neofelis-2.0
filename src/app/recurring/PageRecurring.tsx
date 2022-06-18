import Avvvatars from 'avvvatars-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import { Page, PageContent } from '@/app/layout';
import { usePaginationFromUrl } from '@/app/router';
import {
  ActionsButton,
  ConfirmMenuItem,
  DataList,
  DataListCell,
  DataListHeader,
  DataListPaginationFooter,
  DataListRow,
  ResponsiveIconButton,
  TextCurrency,
  useToastSuccess
} from '@/components';
import {
  Recurring,
  useAllRecurringQuery,
  useDeleteRecurringMutation,
  useUpdateAssetMutation
} from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useEditMode } from '@/hooks/useEditMode';
import { useMutationOptions } from '@/hooks/useMutationOptions';
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
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react';

import { RecurringDialog } from './dialogs/recurring-dialog';
import { RecurringNav } from './RecurringNav';

export const PageRecurring = () => {
  const { colorModeValue } = useDarkMode();
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } = useEditMode<
    number,
    Recurring
  >();
  const toastSuccess = useToastSuccess();
  const { page, setPage } = usePaginationFromUrl();
  const pageSize = 15;

  const { mutationOptions } = useMutationOptions();

  const { loading, data, refetch } = useAllRecurringQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });

  const [deleteRecurring, { loading: deleteFetching }] =
    useDeleteRecurringMutation();

  const onDelete = async (id: number) => {
    deleteRecurring({
      variables: {
        id,
      },
      refetchQueries: 'active',
    }).then(() => {
      toastSuccess({
        title: t('common:feedbacks.deletedSuccess.title'),
      });
    });
  };

  const onCloseDialog = () => {
    onClose();
    refetch();
  };

  return (
    <>
      <Page nav={<RecurringNav />}>
        <PageContent
          loading={loading || deleteFetching}
          title={t('recurring:recurring.title')}
          actions={[
            <ResponsiveIconButton
              key="createRecurring"
              icon={<FiPlus />}
              variant="@primary"
              onClick={() => onOpen()}
            >
              {t('recurring:recurring.actions.create')}
            </ResponsiveIconButton>,
          ]}
        >
          <DataList>
            <DataListHeader isVisible={{ base: false, md: true }}>
              <DataListCell colName="name" colWidth={1.5}>
                {t('recurring:recurring.table.header.title')}
              </DataListCell>
              <DataListCell
                colName="accounts"
                isVisible={{ base: false, lg: true }}
              >
                {t('recurring:recurring.table.header.accounts')}
              </DataListCell>
              <DataListCell
                colName="cycle"
                isVisible={{ base: false, lg: true }}
              >
                {t('recurring:recurring.table.header.cycle')}
              </DataListCell>
              <DataListCell colName="amount">
                {t('recurring:recurring.table.header.amount')}
              </DataListCell>
              <DataListCell colName="total">
                {t('recurring:recurring.table.header.totalPaid')}
              </DataListCell>
              <DataListCell
                colName="actions"
                colWidth="4rem"
                align="flex-end"
              />
            </DataListHeader>
            {data &&
              data.recurring.map((item, index) => (
                <DataListRow as={LinkBox} key={index}>
                  <DataListCell colName="title" colWidth={1.5}>
                    <HStack maxW="100%">
                      <Avvvatars value={item.title} />
                      <Text noOfLines={0} maxW="full" fontWeight="bold">
                        <LinkOverlay href="#">{item.title}</LinkOverlay>
                      </Text>
                    </HStack>
                  </DataListCell>
                  <DataListCell colName="accounts">
                    <Wrap>
                      <WrapItem>
                        <Text
                          noOfLines={0}
                          maxW="full"
                          fontSize="sm"
                          color={colorModeValue('gray.600', 'gray.300')}
                        >
                          {item?.account_info?.name}
                        </Text>
                      </WrapItem>
                      <WrapItem>
                        <Text
                          noOfLines={0}
                          maxW="full"
                          fontSize="sm"
                          color={colorModeValue('gray.600', 'gray.300')}
                        >
                          {item?.accountInfoByAccountTo?.name}
                        </Text>
                      </WrapItem>
                    </Wrap>
                  </DataListCell>
                  <DataListCell colName="cycle">
                    <Wrap>
                      <WrapItem>
                        <Badge size="sm" colorScheme="success">
                          {t(
                            `recurring:recurring.cycleType.${item.cycle_type}`
                          )}
                        </Badge>
                      </WrapItem>
                      <WrapItem>
                        <Badge size="sm" colorScheme="gray">
                          {t(
                            `recurring:recurring.durationType.${item.duration_type}`
                          )}
                        </Badge>
                      </WrapItem>
                    </Wrap>
                  </DataListCell>

                  <DataListCell colName="amount">
                    <TextCurrency
                      value={item.amount}
                      locale="de"
                      currency="EUR"
                    />
                  </DataListCell>
                  <DataListCell colName="total">
                    <TextCurrency
                      value={
                        item.transactions_aggregate.aggregate?.sum?.amount ?? 0
                      }
                      locale="de"
                      currency="EUR"
                    />
                  </DataListCell>
                  <DataListCell colName="actions">
                    <Menu isLazy>
                      <MenuButton as={ActionsButton} />
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
              isLoadingPage={loading || deleteFetching}
              setPage={setPage}
              page={page}
              pageSize={pageSize}
              totalItems={data?.recurring_aggregate?.aggregate?.count}
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
