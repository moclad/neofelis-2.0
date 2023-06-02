import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiFilePlus, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Page, PageContent } from '@/app/layout';
import { usePaginationFromUrl } from '@/app/router';
import { ActionsButton } from '@/components/ActionsButton';
import { ConfirmMenuItem } from '@/components/ConfirmMenuItem';
import { DataList, DataListCell, DataListFooter, DataListHeader, DataListRow } from '@/components/DataList';
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
import { useDeleteTransactionByIdMutation, useInsertTransactionsImportMutation, useTransactions_ImportQuery } from '@/generated/graphql';
import { useMutationOptions } from '@/hooks/useMutationOptions';
import { Badge, LinkBox, LinkOverlay, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Portal, Text } from '@chakra-ui/react';

import { ToolsNav } from './ToolsNav';

export const PageImporter = () => {
  const { t } = useTranslation('tools');

  const navigate = useNavigate();
  const toastSuccess = useToastSuccess();
  const { page, setPage } = usePaginationFromUrl();
  const pageSize = 15;

  const { mutationOptions } = useMutationOptions();

  const { loading, data } = useTransactions_ImportQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });

  const [deleteTransactionsImport, { loading: deleteLoading }] = useDeleteTransactionByIdMutation();

  const onDelete = async (id: number) => {
    deleteTransactionsImport({
      variables: {
        id,
      },
      refetchQueries: 'active',
    }).then(() => {
      toastSuccess({
        title: t('feedbacks.deletedSuccess.title', { ns: 'common' }),
      });
    });
  };

  /*

  table to register import operations
  - asset, file name, date, imported or discaded state
  - option to review data read from file
  - data read from file, available in DB


  */

  return (
    <>
      <Page nav={<ToolsNav />}>
        <PageContent
          title={t('importer.title').toString()}
          loading={loading || deleteLoading}
          actions={[
            <ResponsiveIconButton key="importNewFile" icon={<FiFilePlus />} variant="@primary" onClick={() => navigate(`/tools/import/new`)}>
              {t('importer.actions.import').toString()}
            </ResponsiveIconButton>,
          ]}
        >
          <DataList>
            <DataListHeader isVisible={{ base: false, md: true }}>
              <DataListCell colName="name" colWidth="1.5">
                {t('importer.header.fileName').toString()}
              </DataListCell>
              <DataListCell colName="status" colWidth="0.5" isVisible={{ base: false, md: true }}>
                {t('importer.header.status').toString()}
              </DataListCell>
              <DataListCell colName="asset" colWidth="1.5">
                {t('importer.header.asset').toString()}
              </DataListCell>
              <DataListCell colName="created" colWidth="0.5">
                {t('importer.header.created').toString()}
              </DataListCell>
              <DataListCell colName="updated" colWidth="0.5">
                {t('importer.header.updated').toString()}
              </DataListCell>
              <DataListCell colName="actions" colWidth="4rem" align="flex-end" />
            </DataListHeader>
            {data &&
              data.transactions_import.map((item, index) => (
                <DataListRow as={LinkBox} key={index}>
                  <DataListCell colName="name">
                    <Text noOfLines={0} maxW="full">
                      <LinkOverlay href="#">{item.file_name}</LinkOverlay>
                    </Text>
                  </DataListCell>
                  <DataListCell colName="status">
                    <Badge size="sm" colorScheme={item.status ? 'success' : 'gray'}>
                      {item.status ? t('tools.data.success').toString() : t('tools.data.error').toString()}
                    </Badge>
                  </DataListCell>
                  <DataListCell colName="actions">
                    <Menu isLazy>
                      <MenuButton as={ActionsButton} />
                      <Portal>
                        <MenuList>
                          <MenuItem icon={<FiEdit />}>{t('actions.edit', { ns: 'common' })}</MenuItem>
                          <MenuDivider />
                          <ConfirmMenuItem
                            icon={<FiTrash2 />}
                            onClick={() => {
                              onDelete(item.id);
                            }}
                          >
                            {t('actions.delete', { ns: 'common' })}
                          </ConfirmMenuItem>
                        </MenuList>
                      </Portal>
                    </Menu>
                  </DataListCell>
                </DataListRow>
              ))}
            <DataListFooter>
              <Pagination
                isLoadingPage={loading || deleteLoading}
                setPage={setPage}
                page={page}
                pageSize={pageSize}
                totalItems={data?.transactions_import_aggregate?.aggregate?.count}
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
    </>
  );
};
