import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiFilePlus, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Page, PageContent } from '@/app/layout';
import { usePaginationFromUrl } from '@/app/router';
import { ActionsButton } from '@/components/ActionsButton';
import { ConfirmMenuItem } from '@/components/ConfirmMenuItem';
import { DataList, DataListCell, DataListFooter, DataListHeader, DataListRow } from '@/components/DataList';
import { DateAgo } from '@/components/DateAgo';
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
import { useDeleteImportAssetMutation, useImport_AssetQuery } from '@/generated/graphql';
import { Badge, LinkBox, LinkOverlay, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Portal, Text } from '@chakra-ui/react';

import { ToolsNav } from './ToolsNav';

export const PageImporter = () => {
  const { t } = useTranslation('tools');

  const navigate = useNavigate();
  const toastSuccess = useToastSuccess();
  const { page, setPage } = usePaginationFromUrl();
  const pageSize = 15;

  const { loading, data } = useImport_AssetQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });

  const [deleteImportAsset, { loading: deleteLoading }] = useDeleteImportAssetMutation();

  const onDelete = async (id: number) => {
    await deleteImportAsset({
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
              <DataListCell colName="asset">{t('importer.header.asset').toString()}</DataListCell>
              <DataListCell colName="created">{t('importer.header.created').toString()}</DataListCell>
              <DataListCell colName="updated">{t('importer.header.updated').toString()}</DataListCell>
              <DataListCell colName="actions" colWidth="4rem" align="flex-end" />
            </DataListHeader>
            {data?.import_asset_file.map((item) => (
              <DataListRow as={LinkBox} key={item.id}>
                <DataListCell colName="name">
                  <Text noOfLines={0} maxW="full">
                    {item.asset.name}
                  </Text>
                </DataListCell>
                <DataListCell colName="created">
                  <DateAgo date={dayjs(item.created_at)}></DateAgo>
                </DataListCell>
                <DataListCell colName="updated">
                  <DateAgo date={dayjs(item.updated_at)}></DateAgo>
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
                totalItems={data?.import_asset_file_aggregate?.aggregate?.count}
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
