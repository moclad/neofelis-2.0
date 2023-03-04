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
import { FieldCurrency } from '@/components/FieldCurrency';
import { FieldDayPicker } from '@/components/FieldDayPicker';
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
import { TextCurrency } from '@/components/TextCurrency';
import { useToastSuccess } from '@/components/Toast';
import {
  useAllAssetsQuery,
  useDeleteAssetMutation,
  useInsertAssetMutation,
  useUpdateAssetMutation,
  useUpdateAssetStandardMutation,
  useUpdateAssetStateMutation,
} from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useEditMode } from '@/hooks/useEditMode';
import { useMutationOptions } from '@/hooks/useMutationOptions';
import {
  Badge,
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
  useDisclosure,
} from '@chakra-ui/react';

export const PageAssets = () => {
  const { t } = useTranslation(['accounts', 'common']);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } = useEditMode<number, any>();
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

  const [updateAsset, { loading: updateLoading }] = useUpdateAssetMutation(mutationOptions);
  const [insertAsset, { loading: insertLoading }] = useInsertAssetMutation(mutationOptions);
  const [updateAssetState] = useUpdateAssetStateMutation(mutationOptions);
  const [updateAssetStandard] = useUpdateAssetStandardMutation(mutationOptions);

  const onConfirmCreate = async (values: any) => {
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

  const setStandard = async (item: any) => {
    await updateAssetStandard({
      variables: {
        id: item.id,
      },
      refetchQueries: 'active',
    });
  };

  const deactivate = async (item: any) => {
    await updateAssetState({
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
        title: t('feedbacks.deletedSuccess.title'),
      });
    });
  };

  return (
    <>
      <Page nav={<AccountsNav />}>
        <PageContent
          loading={loading || deleteFetching || insertLoading || updateLoading}
          title={t('assets.title').toString()}
          actions={[
            <ResponsiveIconButton key="createAsset" icon={<FiPlus />} variant="@primary" onClick={() => onOpen()}>
              {t('assets.actions.create').toString()}
            </ResponsiveIconButton>,
          ]}
        >
          <DataList>
            <DataListHeader isVisible={{ base: false, md: true }}>
              <DataListCell colName="name" colWidth="1.5">
                {t('assets.header.name').toString()}
              </DataListCell>
              <DataListCell colName="balance" colWidth="0.5">
                {t('assets.header.currentBalance').toString()}
              </DataListCell>
              <DataListCell colName="status" colWidth="0.5" isVisible={{ base: false, md: true }}>
                {t('assets.header.status').toString()}
              </DataListCell>
              <DataListCell colName="actions" colWidth="4rem" align="flex-end" />
            </DataListHeader>
            {data &&
              data.assets.map((item, index) => (
                <DataListRow as={LinkBox} key={index} isDisabled={!item.active}>
                  <DataListCell colName="name">
                    <HStack maxW="100%">
                      <Avvvatars value={item.name} />

                      <Box minW="0">
                        <Text noOfLines={0} maxW="full">
                          {item.active ? <LinkOverlay href="#">{item.name}</LinkOverlay> : item.name}
                        </Text>
                        <Text noOfLines={0} maxW="full" fontSize="sm" color={colorModeValue('gray.600', 'gray.300')}>
                          {item.account_no}
                        </Text>
                      </Box>
                    </HStack>
                  </DataListCell>
                  <DataListCell colName="balance">
                    <TextCurrency value={0} locale="de" currency="EUR" />
                  </DataListCell>
                  <DataListCell colName="status">
                    <HStack maxW="100%">
                      <Badge size="sm" colorScheme={item.active ? 'success' : 'gray'}>
                        {item.active ? t('assets.data.active').toString() : t('assets.data.inactive').toString()}
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
                            {t('common:actions.edit').toString()}
                          </MenuItem>
                          <MenuItem onClick={() => deactivate(item)} icon={<FiEdit />}>
                            {t('common:actions.deactivate').toString()}
                          </MenuItem>
                          <MenuItem onClick={() => setStandard(item)} icon={<FiEdit />}>
                            {t('common:actions.setAsStandard').toString()}
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
        title={isEditing ? t('assets.actions.edit').toString() : t('assets.actions.create').toString()}
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
        <FieldInput name="name" label={t('assets.data.name').toString()} required={t('assets.data.nameRequired').toString()} />
        <FieldInput name="account_no" label={t('assets.data.accountNo').toString()} />
        <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
          <FieldCurrency name="balance" label={t('assets.data.balance').toString()} placeholder={0} currency="EUR" />
          <FieldDayPicker name="balance_date" label={t('assets.data.balanceDate').toString()} />
        </Stack>
      </ModalDialog>
    </>
  );
};
