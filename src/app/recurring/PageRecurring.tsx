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
  DataListFooter,
  DataListHeader,
  DataListRow,
  FieldCurrency,
  FieldDayPicker,
  FieldInput,
  Icon,
  ModalDialog,
  Pagination,
  PaginationButtonFirstPage,
  PaginationButtonLastPage,
  PaginationButtonNextPage,
  PaginationButtonPrevPage,
  PaginationInfo,
  ResponsiveIconButton,
  useToastSuccess
} from '@/components';
import {
  useAllAssetsQuery,
  useDeleteAssetMutation,
  useInsertAssetMutation,
  useUpdateAssetMutation,
  useUpdateAssetStandardMutation,
  useUpdateAssetStateMutation
} from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useEditMode } from '@/hooks/useEditMode';
import { useMutationOptions } from '@/hooks/useMutationOptions';
import {
  Avatar,
  Box,
  HStack,
  LinkBox,
  LinkOverlay,
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

import { RecurringNav } from './RecurringNav';

export const PageRecurring = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } =
    useEditMode<number>();
  const toastSuccess = useToastSuccess();
  const { colorModeValue } = useDarkMode();
  const { page, setPage } = usePaginationFromUrl();
  const pageSize = 15;

  const { mutationOptions } = useMutationOptions();

  const { loading, data } = useAllAssetsQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });

  const [deleteAsset, { loading: deleteFetching }] = useDeleteAssetMutation();

  const [updateAsset, { loading: updateLoading }] =
    useUpdateAssetMutation(mutationOptions);
  const [insertAsset, { loading: insertLoading }] =
    useInsertAssetMutation(mutationOptions);
  const [updateAssetState] = useUpdateAssetStateMutation(mutationOptions);
  const [updateAssetStandard] = useUpdateAssetStandardMutation(mutationOptions);

  const onConfirmCreate = async (values) => {
    const { name } = values;
    const newData = {
      ...values,
      name: name,
      account_info: { data: { type: 'A', name: name } },
    };

    insertAsset({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    });
  };

  const setStandard = async (item) => {
    await updateAssetStandard({
      variables: {
        id: item.id,
      },
      refetchQueries: 'active',
    });
  };

  const deactivate = async (item) => {
    await updateAssetState({
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

    await updateAsset({
      variables: {
        id: dataKey,
        changes: newData,
        name: newData.name,
      },
      refetchQueries: 'active',
    });
  };

  const onDelete = async (id: number) => {
    deleteAsset({
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
      <Page nav={<RecurringNav />}>
        <PageContent
          loading={loading || deleteFetching || insertLoading || updateLoading}
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
              <DataListCell colName="name" colWidth="1.5">
                {t('recurring.table.header.title')}
              </DataListCell>
              <DataListCell
                colName="actions"
                colWidth="4rem"
                align="flex-end"
              />
            </DataListHeader>
            {data &&
              data.assets.map((item, index) => (
                <DataListRow as={LinkBox} key={index}>
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
                        <Text
                          isTruncated
                          maxW="full"
                          fontSize="sm"
                          color={colorModeValue('gray.600', 'gray.300')}
                        >
                          {item.account_no}
                        </Text>
                      </Box>
                    </HStack>
                  </DataListCell>
                  <DataListCell colName="actions">
                    <Menu isLazy>
                      <MenuButton as={ActionsButton} />
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
                totalItems={data?.assets_aggregate?.aggregate?.count}
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
            ? t('recurring:recurring.actions.edit')
            : t('recurring:recurring.actions.create')
        }
        isOpen={isOpen || isEditing}
        onCancel={() => {
          onFinish();
          onClose();
        }}
        onConfirm={isEditing ? onConfirmEdit : onConfirmCreate}
        loading={loading || insertLoading || updateLoading}
        formId="asset-form-id"
        initialValues={dataContext}
      >
        <FieldInput
          name="name"
          label={t('recurring:recurring.data.name')}
          required={t('recurring:recurring.data.nameRequired') as string}
        />
        <FieldInput
          name="account_no"
          label={t('recurring:recurring.data.accountNo')}
        />
        <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
          <FieldCurrency
            name="balance"
            label={t('recurring:recurring.data.balance')}
            placeholder={0}
            currency="EUR"
          />
          <FieldDayPicker
            name="balance_date"
            label={t('recurring:recurring.data.balanceDate')}
          />
        </Stack>
      </ModalDialog>
    </>
  );
};
