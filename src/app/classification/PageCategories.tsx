import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import { ClassificationNav } from '@/app/classification/ClassificationNav';
import { Page, PageContent } from '@/app/layout';
import {
  ActionsButton,
  ConfirmMenuItem,
  FieldInput,
  ModalDialog,
  ResponsiveIconButton,
  useToastError,
  useToastSuccess
} from '@/components';
import {
  useAllCategoriesQuery,
  useDeleteCategoryMutation,
  useInsertCategoryMutation,
  useUpdateCategoryMutation
} from '@/generated/graphql';
import { useEditMode } from '@/hooks/useEditMode';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tag,
  TagLabel,
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react';

export const PageCategories = () => {
  const { t } = useTranslation();
  const { loading, data } = useAllCategoriesQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } =
    useEditMode<number>();
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const [deleteCategory, { loading: deleteFetching }] =
    useDeleteCategoryMutation();

  const [updateCategory, { loading: updateLoading }] =
    useUpdateCategoryMutation({
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

  const [insertCategory, { loading: insertLoading }] =
    useInsertCategoryMutation({
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
    };

    await insertCategory({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    });
  };

  const onConfirmEdit = async (values) => {
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
        title: t('common:feedbacks.deletedSuccess.title'),
      });
    });
  };

  return (
    <>
      <Page nav={<ClassificationNav />}>
        <PageContent
          loading={loading || deleteFetching || insertLoading}
          title={t('classification:categories.title')}
          actions={[
            <ResponsiveIconButton
              key="createCategory"
              icon={<FiPlus />}
              variant="@primary"
              onClick={() => onOpen()}
            >
              {t('classification:categories.actions.create')}
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
                          {t('classification:categories.actions.edit')}
                        </MenuItem>
                        <MenuDivider />
                        <ConfirmMenuItem
                          icon={<FiTrash2 />}
                          onClick={() => {
                            onDelete(data.id);
                          }}
                        >
                          {t('classification:categories.actions.delete')}
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
        title={
          isEditing
            ? t('classification:categories.actions.edit')
            : t('classification:categories.actions.create')
        }
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
        <FieldInput
          name="name"
          label={t('classification:categories.data.name')}
          required={t('classification:categories.data.nameRequired') as string}
        />
      </ModalDialog>
    </>
  );
};
