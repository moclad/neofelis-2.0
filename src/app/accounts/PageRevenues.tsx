import Avvvatars from 'avvvatars-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import { AccountsNav } from '@/app/accounts/AccountsNav';
import { Page, PageContent } from '@/app/layout';
import { usePaginationFromUrl } from '@/app/router';
import { ActionsButton } from '@/components/ActionsButton';
import { ConfirmMenuItem } from '@/components/ConfirmMenuItem';
import { DataList, DataListCell, DataListFooter, DataListHeader, DataListRow } from '@/components/DataList';
import { FieldInput } from '@/components/FieldInput';
import { ModalDialog } from '@/components/ModalDialog';
import {
  Pagination,
  PaginationButtonFirstPage,
  PaginationButtonLastPage,
  PaginationButtonNextPage,
  PaginationButtonPrevPage,
  PaginationInfo,
} from '@/components/Pagination';
import { ResponsiveIconButton } from '@/components/ResponsiveIconButton';
import { useToastSuccess } from '@/components/Toast';
import {
  Revenues,
  useAllRevenueAccountsQuery,
  useDeleteRevenueAccMutation,
  useInsertRevenueAccMutation,
  useUpdateRevenueAccMutation,
  useUpdateRevenueStandardMutation,
  useUpdateRevenueStateMutation,
} from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useEditMode } from '@/hooks/useEditMode';
import { useMutationOptions } from '@/hooks/useMutationOptions';
import { Badge, Box, HStack, LinkBox, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Portal, Text, useDisclosure } from '@chakra-ui/react';

export const PageRevenues = () => {
  const { t } = useTranslation(['accounts', 'common']);
  const { colorModeValue } = useDarkMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } = useEditMode<number, Revenues>();
  const toastSuccess = useToastSuccess();
  const { page, setPage } = usePaginationFromUrl();
  const pageSize = 15;

  const { mutationOptions } = useMutationOptions();

  const { loading, data } = useAllRevenueAccountsQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });

  const [deleteRevenue, { loading: deleteFetching }] = useDeleteRevenueAccMutation();

  const [updateRevenue, { loading: updateLoading }] = useUpdateRevenueAccMutation(mutationOptions);

  const [updateRevenueState, { loading: updateStateLoading }] = useUpdateRevenueStateMutation(mutationOptions);

  const [updateRevenueStandard, { loading: updateStandardLoading }] = useUpdateRevenueStandardMutation(mutationOptions);

  const [insertRevenue, { loading: insertLoading }] = useInsertRevenueAccMutation(mutationOptions);

  const onConfirmCreate = async (values: any) => {
    const { name } = values;
    const newData = {
      ...values,
      name: name,
      account_info: { data: { type: 'R', name: name } },
    };

    insertRevenue({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    });
  };

  const deactivate = async (item: any) => {
    await updateRevenueState({
      variables: {
        id: item.id,
        state: !item.active,
      },
    });
  };

  const setStandard = async (item: any) => {
    await updateRevenueStandard({
      variables: {
        id: item.id,
      },
      refetchQueries: 'active',
    });
  };

  const onConfirmEdit = async (values: any) => {
    const newData = {
      ...values,
    };

    await updateRevenue({
      variables: {
        id: dataKey,
        changes: newData,
        name: newData.name,
      },
      refetchQueries: 'active',
    });
  };

  const onDelete = async (id: number) => {
    deleteRevenue({
      variables: {
        id,
      },
      refetchQueries: 'active',
    }).then(() => {
      toastSuccess({
        title: t('feedbacks.deletedSuccess.title').toString(),
      });
    });
  };

  return (
    <>
      <Page nav={<AccountsNav />}>
        <PageContent
          loading={loading || deleteFetching || insertLoading || updateLoading}
          title={t('revenues.title').toString()}
          actions={[
            <ResponsiveIconButton key="createRevenue" icon={<FiPlus />} variant="@primary" onClick={() => onOpen()}>
              {t('revenues.actions.create').toString()}
            </ResponsiveIconButton>,
          ]}
        >
          <DataList>
            <DataListHeader isVisible={{ base: false, md: true }}>
              <DataListCell colName="name" colWidth="1.5">
                {t('revenues.header.name').toString()}
              </DataListCell>
              <DataListCell colName="status" colWidth="0.5" isVisible={{ base: false, md: true }}>
                {t('revenues.header.status').toString()}
              </DataListCell>
              <DataListCell colName="actions" colWidth="4rem" align="flex-end" />
            </DataListHeader>
            {data &&
              data.revenues.map((item, index) => (
                <DataListRow as={LinkBox} key={index} isDisabled={!item.active}>
                  <DataListCell colName="name">
                    <HStack maxW="100%">
                      <Avvvatars value={item.name} />
                      <Box minW="0">
                        <Text noOfLines={0} maxW="full" fontWeight="bold">
                          {item.name}
                        </Text>
                      </Box>
                    </HStack>
                  </DataListCell>
                  <DataListCell colName="status">
                    <HStack>
                      <Badge size="sm" colorScheme={item.active ? 'success' : 'gray'}>
                        {item.active ? t('revenues.data.active').toString() : t('revenues.data.inactive').toString()}
                      </Badge>
                      {item.default ? (
                        <Badge size="sm" colorScheme="green" color={colorModeValue('brand.500', 'brand.500')}>
                          {t('assets.data.defaultAsset').toString()}
                        </Badge>
                      ) : (
                        <></>
                      )}
                    </HStack>
                  </DataListCell>
                  <DataListCell colName="actions">
                    <Menu isLazy>
                      <MenuButton as={ActionsButton} isDisabled={!item.active} />
                      <Portal>
                        <MenuList>
                          <MenuItem onClick={() => onEdit(item.id, item)} icon={<FiEdit />}>
                            {t('actions.edit').toString()}
                          </MenuItem>
                          <MenuItem onClick={() => deactivate(item)} icon={<FiEdit />}>
                            {t('actions.deactivate').toString()}
                          </MenuItem>
                          <MenuItem onClick={() => setStandard(item)} icon={<FiEdit />}>
                            {t('actions.setAsStandard').toString()}
                          </MenuItem>
                          <MenuDivider />
                          <ConfirmMenuItem
                            icon={<FiTrash2 />}
                            onClick={() => {
                              onDelete(item.id);
                            }}
                          >
                            {t('actions.delete').toString()}
                          </ConfirmMenuItem>
                        </MenuList>
                      </Portal>
                    </Menu>
                  </DataListCell>
                </DataListRow>
              ))}
            <DataListFooter>
              <Pagination
                isLoadingPage={loading || insertLoading || updateLoading || updateStateLoading || updateStandardLoading}
                setPage={setPage}
                page={page}
                pageSize={pageSize}
                totalItems={data?.revenues_aggregate?.aggregate?.count}
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
        title={isEditing ? t('revenues.actions.edit').toString() : t('revenues.actions.create').toString()}
        isOpen={isOpen || isEditing}
        onCancel={() => {
          onFinish();
          onClose();
        }}
        onConfirm={isEditing ? onConfirmEdit : onConfirmCreate}
        loading={loading || insertLoading || updateLoading}
        formId="revenue-form-id"
        initialValues={dataContext}
      >
        <FieldInput name="name" label={t('revenues.data.name').toString()} required={t('revenues.data.nameRequired').toString()} />
      </ModalDialog>
    </>
  );
};
