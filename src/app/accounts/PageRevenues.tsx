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
  ModalDialog,
  Pagination,
  PaginationButtonFirstPage,
  PaginationButtonLastPage,
  PaginationButtonNextPage,
  PaginationButtonPrevPage,
  PaginationInfo,
  useToastError,
  useToastSuccess
} from '@/components';
import {
  useAllRevenueAccountsQuery,
  useDeleteRevenueAccMutation,
  useInsertRevenueAccMutation,
  useUpdateRevenueAccMutation,
  useUpdateRevenueStandardMutation,
  useUpdateRevenueStateMutation
} from '@/generated/graphql';
import { useEditMode } from '@/hooks/useEditMode';
import {
  Avatar,
  Badge,
  Box,
  Button,
  HStack,
  LinkBox,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useDisclosure
} from '@chakra-ui/react';

export const PageRevenues = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } =
    useEditMode<number>();
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();
  const { page, setPage } = usePaginationFromUrl();
  const pageSize = 15;

  const { loading, data } = useAllRevenueAccountsQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });

  const [deleteRevenue, { loading: deleteFetching }] =
    useDeleteRevenueAccMutation();

  const [updateRevenue, { loading: updateLoading }] =
    useUpdateRevenueAccMutation({
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

  const [updateRevenueState, { loading: updateStateLoading }] =
    useUpdateRevenueStateMutation({
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

  const [updateRevenueStandard, { loading: updateStandardLoading }] =
    useUpdateRevenueStandardMutation({
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

  const [insertRevenue, { loading: insertLoading }] =
    useInsertRevenueAccMutation({
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
      account_info: { data: { type: 'R' } },
    };

    insertRevenue({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    });
  };

  const deactivate = async (item) => {
    await updateRevenueState({
      variables: {
        id: item.id,
        state: !item.active,
      },
    });
  };

  const setStandard = async (item) => {
    await updateRevenueStandard({
      variables: {
        id: item.id,
      },
      refetchQueries: 'active',
    });
  };

  const onConfirmEdit = async (values) => {
    const newData = {
      ...values,
    };

    await updateRevenue({
      variables: {
        id: dataKey,
        changes: newData,
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
        title: t('common:feedbacks.deletedSuccess.title'),
      });
    });
  };

  return (
    <>
      <Page nav={<AccountsNav />}>
        <PageContent
          loading={loading || deleteFetching || insertLoading || updateLoading}
          title={t('accounts:revenues.title')}
          actions={[
            <Button
              key="createRevenue"
              leftIcon={<FiPlus />}
              variant="@primary"
              onClick={() => onOpen()}
            >
              {t('accounts:revenues.actions.create')}
            </Button>,
          ]}
        >
          <DataList>
            <DataListHeader isVisible={{ base: false, md: true }}>
              <DataListCell colName="name" colWidth="1.5">
                {t('accounts:revenues.header.name')}
              </DataListCell>
              <DataListCell
                colName="status"
                colWidth="0.5"
                isVisible={{ base: false, md: true }}
              >
                {t('accounts:revenues.header.status')}
              </DataListCell>
              <DataListCell
                colName="actions"
                colWidth="4rem"
                align="flex-end"
              />
            </DataListHeader>
            {data &&
              data.revenues.map((item, index) => (
                <DataListRow as={LinkBox} key={index} isDisabled={!item.active}>
                  <DataListCell colName="name">
                    <HStack maxW="100%">
                      <Avatar size="sm" name={item.name} mx="2" />
                      <Box minW="0">
                        <Text isTruncated maxW="full" fontWeight="bold">
                          {item.name}
                        </Text>

                        {item.default ? (
                          <Text isTruncated maxW="full" fontSize="sm">
                            {t('accounts:revenues.standard')}
                          </Text>
                        ) : null}
                      </Box>
                    </HStack>
                  </DataListCell>
                  <DataListCell colName="status">
                    <Badge
                      size="sm"
                      colorScheme={item.active ? 'success' : 'gray'}
                    >
                      {item.active
                        ? t('accounts:revenues.data.active')
                        : t('accounts:revenues.data.inactive')}
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
                          <MenuItem
                            onClick={() => setStandard(item)}
                            icon={<Icon icon={FiEdit} color="gray.400" />}
                          >
                            {t('common:actions.setAsStandard')}
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
        title={
          isEditing
            ? t('accounts:revenues.actions.edit')
            : t('accounts:revenues.actions.create')
        }
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
        <FieldInput
          name="name"
          label={t('accounts:revenues.data.name')}
          required={t('accounts:revenues.data.nameRequired') as string}
        />
      </ModalDialog>
    </>
  );
};
