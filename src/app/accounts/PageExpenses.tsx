import Avvvatars from 'avvvatars-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import { AccountsNav } from '@/app/accounts/AccountsNav';
import { Page, PageContent } from '@/app/layout';
import { usePaginationFromUrl } from '@/app/router';
import { ActionsButton } from '@/components/ActionsButton';
import { ConfirmMenuItem } from '@/components/ConfirmMenuItem';
import {
  DataList,
  DataListCell,
  DataListFooter,
  DataListHeader,
  DataListRow
} from '@/components/DataList';
import { FieldInput } from '@/components/FieldInput';
import { FieldSelect } from '@/components/FieldSelect';
import { ModalDialog } from '@/components/ModalDialog';
import {
  Pagination,
  PaginationButtonFirstPage,
  PaginationButtonLastPage,
  PaginationButtonNextPage,
  PaginationButtonPrevPage,
  PaginationInfo
} from '@/components/Pagination';
import { ResponsiveIconButton } from '@/components/ResponsiveIconButton';
import {
  ActiveCategoriesDocument,
  Expenses,
  useAllExpenseAccountsQuery,
  useDeleteExpenseAccMutation,
  useInsertCategoryMutation,
  useInsertExpenseAccMutation,
  useUpdateExpenseAccMutation,
  useUpdateExpenseStateMutation
} from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useDataToSelectorConverter } from '@/hooks/useDataToSelectorConverter';
import { useEditMode } from '@/hooks/useEditMode';
import { useMutationOptions } from '@/hooks/useMutationOptions';
import {
  Badge,
  Box,
  HStack,
  LinkBox,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';

export const PageExpenses = () => {
  const { t } = useTranslation('accounts');
  const { t: tCommon } = useTranslation('common');
  const { mutationOptions } = useMutationOptions();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorModeValue } = useDarkMode();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } = useEditMode<number, Expenses>();
  const { page, setPage } = usePaginationFromUrl();
  const pageSize = 15;

  const { loading, data } = useAllExpenseAccountsQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });

  const [deleteExpense, { loading: deleteFetching }] = useDeleteExpenseAccMutation(mutationOptions);
  const [updateExpense, { loading: updateLoading }] = useUpdateExpenseAccMutation(mutationOptions);
  const [updateExpenseState, { loading: updateStateLoading }] = useUpdateExpenseStateMutation(mutationOptions);
  const [insertExpense, { loading: insertLoading }] = useInsertExpenseAccMutation(mutationOptions);
  const [insertCategory] = useInsertCategoryMutation(mutationOptions);

  const { selectOptions: categories } = useDataToSelectorConverter({
    entity: 'categories',
    query: ActiveCategoriesDocument,
  });

  const onCreateCategory = async (value: string) => {
    const newData = {
      name: value,
    };

    return insertCategory({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    }).then((x) => x.data?.insert_categories_one?.id);
  };

  const onConfirmCreate = async (values: any) => {
    const { name } = values;
    const newData = {
      ...values,
      name: name,
      account_info: { data: { type: 'E', name: name } },
    };

    await insertExpense({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    });
  };

  const deactivate = async (item: any) => {
    await updateExpenseState({
      variables: {
        id: item.id,
        state: !item.active,
      },
      refetchQueries: 'active',
    });
  };

  const onConfirmEdit = async (values: any) => {
    const newData = {
      ...values,
    };

    await updateExpense({
      variables: {
        id: dataKey,
        changes: newData,
        name: newData.name,
      },
      refetchQueries: 'active',
    });
  };

  const onDelete = (id: number) => {
    deleteExpense({
      variables: {
        id,
      },
      refetchQueries: 'active',
    });
  };

  return (
    <>
      <Page nav={<AccountsNav />}>
        <PageContent
          loading={loading || deleteFetching || insertLoading || updateLoading}
          title={t('expenses.title').toString()}
          actions={[
            <ResponsiveIconButton key="createExpense" icon={<FiPlus />} variant="@primary" onClick={() => onOpen()}>
              {t('expenses.actions.create').toString()}
            </ResponsiveIconButton>,
          ]}
        >
          <DataList>
            <DataListHeader isVisible={{ base: false, md: true }}>
              <DataListCell colName="name" colWidth="1.5">
                {t('expenses.header.name').toString()}
              </DataListCell>
              <DataListCell colName="category" colWidth="0.5" isVisible={{ base: false, md: true }}>
                {t('expenses.header.category').toString()}
              </DataListCell>
              <DataListCell colName="status" colWidth="0.3" isVisible={{ base: false, md: true }}>
                {t('expenses.header.status').toString()}
              </DataListCell>
              <DataListCell colName="actions" colWidth="4rem" align="flex-end" />
            </DataListHeader>
            {data?.expenses.map((item) => (
              <DataListRow as={LinkBox} key={item.id} isDisabled={!item.active}>
                <DataListCell colName="name">
                  <HStack maxW="100%">
                    <Avvvatars value={item.name} />
                    <Box minW="0">
                      <Text noOfLines={0} maxW="full" fontWeight="bold">
                        {item.name}
                      </Text>
                      <Text noOfLines={0} maxW="full" fontSize="xs" color={colorModeValue('gray.600', 'gray.300')}>
                        {item.account_no}
                      </Text>
                    </Box>
                  </HStack>
                </DataListCell>
                <DataListCell colName="category">
                  <Text fontSize="small">{item.category?.name}</Text>
                </DataListCell>
                <DataListCell colName="status">
                  <Badge size="sm" colorScheme={item.active ? 'success' : 'gray'}>
                    {item.active ? t('expenses.data.active').toString() : t('expenses.data.inactive').toString()}
                  </Badge>
                </DataListCell>
                <DataListCell colName="actions">
                  <Menu isLazy>
                    <MenuButton as={ActionsButton} isDisabled={!item.active} />
                    <Portal>
                      <MenuList>
                        <MenuItem onClick={() => onEdit(item.id, item)} icon={<FiEdit />}>
                          {tCommon('actions.edit').toString()}
                        </MenuItem>
                        <MenuItem onClick={() => deactivate(item)} icon={<FiEdit />}>
                          {tCommon('actions.deactivate').toString()}
                        </MenuItem>
                        <MenuDivider />
                        <ConfirmMenuItem
                          icon={<FiTrash2 />}
                          onClick={() => {
                            onDelete(item.id);
                          }}
                        >
                          {tCommon('actions.delete').toString()}
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
        title={isEditing ? t('expenses.actions.edit').toString() : t('expenses.actions.create').toString()}
        isOpen={isOpen || isEditing}
        onCancel={() => {
          onFinish();
          onClose();
        }}
        onConfirm={isEditing ? onConfirmEdit : onConfirmCreate}
        loading={loading || insertLoading || updateLoading || updateStateLoading}
        formId="expense-form-id"
        initialValues={dataContext}
      >
        <FieldInput name="name" label={t('expenses.data.name').toString()} required={t('expenses.data.nameRequired').toString()} />
        <FieldInput name="alternate_name" label={t('expenses.data.alternateName').toString()} />
        <FieldInput name="account_no" label={t('expenses.data.account_no').toString()} />
        <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
          <FieldSelect name="category_id" label={t('assets.data.category')} options={categories} isCreatable={true} onCreateOption={onCreateCategory} />
        </Stack>
      </ModalDialog>
    </>
  );
};
