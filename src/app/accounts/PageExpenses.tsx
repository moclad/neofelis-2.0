import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import { AccountsNav } from '@/app/accounts/AccountsNav';
import { Page, PageContent } from '@/app/layout';
import { usePaginationFromUrl } from '@/app/router';
import {
  ActionsButton,
  ConfirmMenuItem,
  DataList,
  DataListCell,
  DataListFooter,
  DataListHeader,
  DataListRow,
  FieldInput,
  Icon,
  Pagination,
  PaginationButtonFirstPage,
  PaginationButtonLastPage,
  PaginationButtonNextPage,
  PaginationButtonPrevPage,
  PaginationInfo,
  TextCurrency,
  useToastError,
  useToastSuccess
} from '@/components';
import ModalDialog from '@/components/ModalDialog/ModalDialog';
import {
  useAllExpenseAccountsQuery,
  useDeleteExpenseAccMutation,
  useInsertExpenseAccMutation,
  useUpdateExpenseAccMutation,
  useUpdateExpenseStateMutation
} from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useEditMode } from '@/hooks/useEditMode';
import {
  Avatar,
  Badge,
  Box,
  Button,
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
  useDisclosure
} from '@chakra-ui/react';

export const PageExpenses = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } =
    useEditMode<number>();
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();
  const { colorModeValue } = useDarkMode();
  const { page, setPage } = usePaginationFromUrl();
  const pageSize = 15;

  const { loading, data } = useAllExpenseAccountsQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });

  const [deleteExpense, { loading: deleteFetching }] =
    useDeleteExpenseAccMutation();

  const [updateExpense, { loading: updateLoading }] =
    useUpdateExpenseAccMutation({
      onError: (error) => {
        toastError({
          title: t('common:feedbacks.updateError.title'),
          description: error.message,
        });
      },
      onCompleted: () => {
        toastSuccess({
          title: t('common:feedbacks.updateSuccess.title'),
        });
      },
    });

  const [updateExpenseState, { loading: updateStateLoading }] =
    useUpdateExpenseStateMutation({
      onError: (error) => {
        toastError({
          title: t('common:feedbacks.updateError.title'),
          description: error.message,
        });
      },
      onCompleted: () => {
        toastSuccess({
          title: t('common:feedbacks.updateSuccess.title'),
        });
      },
    });

  const [insertExpense, { loading: insertLoading }] =
    useInsertExpenseAccMutation({
      onError: (error) => {
        toastError({
          title: t('common:feedbacks.createdError.title'),
          description: error.message,
        });
      },
      onCompleted: () => {
        toastSuccess({
          title: t('common:feedbacks.createdSuccess.title'),
        });
      },
    });

  const onConfirmCreate = async (values) => {
    const newData = {
      ...values,
      account_info: { data: { type: 'E' } },
    };

    insertExpense({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    });
  };

  const deactivate = async (item) => {
    await updateExpenseState({
      variables: {
        id: item.id,
        state: !item.active,
      },
      refetchQueries: 'active',
    });
  };

  const onConfirmEdit = async (values) => {
    const newData = {
      ...values,
    };

    await updateExpense({
      variables: {
        id: dataKey,
        changes: newData,
      },
      refetchQueries: 'active',
    });
  };

  const onDelete = async (id: number) => {
    deleteExpense({
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

  return (
    <>
      <Page nav={<AccountsNav />}>
        <PageContent
          loading={loading || deleteFetching || insertLoading || updateLoading}
          title={t('accounts:expenses.title')}
          actions={[
            <Button
              key="createExpense"
              leftIcon={<FiPlus />}
              variant="@primary"
              onClick={() => onOpen()}
            >
              {t('accounts:expenses.actions.create')}
            </Button>,
          ]}
        >
          <DataList>
            <DataListHeader isVisible={{ base: false, md: true }}>
              <DataListCell colName="name" colWidth="1.5">
                {t('accounts:expenses.header.name')}
              </DataListCell>
              <DataListCell
                colName="status"
                colWidth="0.5"
                isVisible={{ base: false, md: true }}
              >
                {t('accounts:expenses.header.status')}
              </DataListCell>
              <DataListCell
                colName="actions"
                colWidth="4rem"
                align="flex-end"
              />
            </DataListHeader>
            {data &&
              data.expenses.map((item, index) => (
                <DataListRow as={LinkBox} key={index} isDisabled={!item.active}>
                  <DataListCell colName="name">
                    <HStack maxW="100%">
                      <Avatar size="sm" name={item.name} mx="2" />
                      <Box minW="0">
                        <Text isTruncated maxW="full" fontWeight="bold">
                          {item.active ? (
                            <LinkOverlay href="#">{item.name}</LinkOverlay>
                          ) : (
                            item.name
                          )}
                        </Text>
                      </Box>
                    </HStack>
                  </DataListCell>
                  <DataListCell colName="status">
                    <Badge
                      size="sm"
                      colorScheme={item.active ? 'success' : 'gray'}
                    >
                      {item.active
                        ? t('accounts:expenses.data.active')
                        : t('accounts:expenses.data.inactive')}
                    </Badge>
                  </DataListCell>
                  <DataListCell colName="actions">
                    <Menu isLazy>
                      <MenuButton
                        as={ActionsButton}
                        isDisabled={!item.active}
                      />
                      <Portal>
                        <MenuList>
                          <MenuItem
                            onClick={() => onEdit(item.id, item)}
                            icon={<Icon icon={FiEdit} color="gray.400" />}
                          >
                            {t('common:actions.edit')}
                          </MenuItem>
                          <MenuItem
                            onClick={() => deactivate(item)}
                            icon={<Icon icon={FiEdit} color="gray.400" />}
                          >
                            {t('common:actions.deactivate')}
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
            <DataListFooter>
              <Pagination
                isLoadingPage={loading || insertLoading || updateLoading}
                setPage={setPage}
                page={page}
                pageSize={pageSize}
                totalItems={data?.expenses_aggregate?.aggregate?.count}
              >
                <PaginationButtonFirstPage />
                <PaginationButtonPrevPage />
                <PaginationInfo flex="1" />
                <PaginationButtonNextPage />
                <PaginationButtonLastPage />
              </Pagination>
            </DataListFooter>
          </DataList>
        </PageContent>
      </Page>
      <ModalDialog
        title={
          isEditing
            ? t('accounts:expenses.actions.edit')
            : t('accounts:expenses.actions.create')
        }
        isOpen={isOpen || isEditing}
        onCancel={() => {
          onFinish();
          onClose();
        }}
        onConfirm={isEditing ? onConfirmEdit : onConfirmCreate}
        loading={loading || insertLoading || updateLoading}
        formId="expense-form-id"
        initialValues={dataContext}
      >
        <FieldInput
          name="name"
          label={t('accounts:expenses.data.name')}
          required={t('accounts:expenses.data.nameRequired') as string}
        />
      </ModalDialog>
    </>
  );
};
