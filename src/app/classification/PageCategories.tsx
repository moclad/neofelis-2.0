import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import { ClassificationNav } from '@/app/classification/ClassificationNav';
import { Page, PageContent } from '@/app/layout';
import { ActionsButton } from '@/components/ActionsButton';
import { ConfirmMenuItem } from '@/components/ConfirmMenuItem';
import { FieldInput } from '@/components/FieldInput';
import { ModalDialog } from '@/components/ModalDialog';
import { ResponsiveIconButton } from '@/components/ResponsiveIconButton';
import { useToastError, useToastSuccess } from '@/components/Toast';
import { Categories, useAllCategoriesQuery, useDeleteCategoryMutation, useInsertCategoryMutation, useUpdateCategoryMutation } from '@/generated/graphql';
import { useEditMode } from '@/hooks/useEditMode';
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList, Tag, TagLabel, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';

export const PageCategories = () => {
  const { t } = useTranslation('classification');
  const { loading, data } = useAllCategoriesQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } = useEditMode<number, Categories>();
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const [deleteCategory, { loading: deleteFetching }] = useDeleteCategoryMutation();

  const [updateCategory, { loading: updateLoading }] = useUpdateCategoryMutation({
    onError: (error) => {
      toastError({
        title: t('feedbacks.updateError.title', { ns: 'common' }),
        description: error.message,
      });
    },
    onCompleted: () => {
      toastSuccess({
        title: t('feedbacks.updateSuccess.title', { ns: 'common' }),
      });
    },
  });

  const [insertCategory, { loading: insertLoading }] = useInsertCategoryMutation({
    onError: (error) => {
      toastError({
        title: t('feedbacks.createdError.title', { ns: 'common' }),
        description: error.message,
      });
    },
    onCompleted: () => {
      toastSuccess({
        title: t('feedbacks.createdSuccess.title', { ns: 'common' }),
      });
    },
  });

  const onConfirmCreate = async (values: any) => {
    const newData = {
      ...values,
    };

    await insertCategory({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    });
  };

  const onConfirmEdit = async (values: any) => {
    const newData = {
      ...values,
    };

    await updateCategory({
      variables: {
        id: dataKey,
        changes: newData,
      },
      refetchQueries: 'active',
    });
  };

  const onDelete = async (id: number) => {
    deleteCategory({
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

  return (
    <>
      <Page nav={<ClassificationNav />}>
        <PageContent
          loading={loading || deleteFetching || insertLoading}
          title={t('categories.title').toString()}
          actions={[
            <ResponsiveIconButton key="createCategory" icon={<FiPlus />} variant="@primary" onClick={() => onOpen()}>
              {t('categories.actions.create').toString()}
            </ResponsiveIconButton>,
          ]}
        >
          <Wrap spacing="8px">
            {data &&
              data.categories.map((data) => (
                <WrapItem key={data.id}>
                  <Tag size={'md'} variant="outline" key={data.id}>
                    <TagLabel>{data.name}</TagLabel>
                    <Menu isLazy>
                      <MenuButton as={ActionsButton} size="sm" ml="8px" />
                      <MenuList>
                        <MenuItem
                          icon={<FiEdit />}
                          onClick={() => {
                            onEdit(data.id, data);
                          }}
                        >
                          {t('categories.actions.edit').toString()}
                        </MenuItem>
                        <MenuDivider />
                        <ConfirmMenuItem
                          icon={<FiTrash2 />}
                          onClick={() => {
                            onDelete(data.id);
                          }}
                        >
                          {t('categories.actions.delete').toString()}
                        </ConfirmMenuItem>
                      </MenuList>
                    </Menu>
                  </Tag>
                </WrapItem>
              ))}
          </Wrap>
        </PageContent>
      </Page>
      <ModalDialog
        title={isEditing ? t('categories.actions.edit').toString() : t('categories.actions.create').toString()}
        isOpen={isOpen || isEditing}
        onCancel={() => {
          onFinish();
          onClose();
        }}
        onConfirm={isEditing ? onConfirmEdit : onConfirmCreate}
        loading={loading || insertLoading || updateLoading}
        formId="category-form-id"
        initialValues={dataContext}
      >
        <FieldInput name="name" label={t('categories.data.name').toString()} required={t('categories.data.nameRequired').toString()} />
      </ModalDialog>
    </>
  );
};
