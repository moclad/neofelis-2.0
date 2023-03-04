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
import { Labels, useAllLabelsQuery, useDeleteLabelMutation, useInsertLabelMutation, useUpdateLabelMutation } from '@/generated/graphql';
import { useEditMode } from '@/hooks/useEditMode';
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList, Tag, TagLabel, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';

export const PageLabels = () => {
  const { t } = useTranslation(['common', 'classification']);
  const { loading, data } = useAllLabelsQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } = useEditMode<number, Labels>();
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const [deleteLabel, { loading: deleteLabelFetching }] = useDeleteLabelMutation();

  const [updateLabel, { loading: updateLoading }] = useUpdateLabelMutation({
    onError: (error) => {
      toastError({
        title: t('feedbacks.updateError.title').toString(),
        description: error.message,
      });
    },
    onCompleted: () => {
      toastSuccess({
        title: t('feedbacks.updateSuccess.title').toString(),
      });
    },
  });

  const [insertLabel, { loading: insertLoading }] = useInsertLabelMutation({
    onError: (error) => {
      toastError({
        title: t('feedbacks.createdError.title').toString(),
        description: error.message,
      });
    },
    onCompleted: () => {
      toastSuccess({
        title: t('feedbacks.createdSuccess.title').toString(),
      });
    },
  });

  const onConfirmCreate = async (values: any) => {
    const newData = {
      ...values,
    };

    await insertLabel({
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

    await updateLabel({
      variables: {
        id: dataKey,
        changes: newData,
      },
      refetchQueries: 'active',
    });
  };

  const onDelete = async (id: number) => {
    deleteLabel({
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
      <Page nav={<ClassificationNav />}>
        <PageContent
          loading={loading || deleteLabelFetching || insertLoading}
          title={t('labels.title').toString()}
          actions={[
            <ResponsiveIconButton key="createLabel" icon={<FiPlus />} variant="@primary" onClick={() => onOpen()}>
              {t('labels.actions.create').toString()}
            </ResponsiveIconButton>,
          ]}
        >
          <Wrap spacing="8px">
            {data &&
              data.labels.map((label) => (
                <WrapItem key={label.id}>
                  <Tag size={'md'} variant="outline" key={label.id}>
                    <TagLabel>{label.name}</TagLabel>
                    <Menu isLazy>
                      <MenuButton as={ActionsButton} size="sm" ml="8px" />
                      <MenuList>
                        <MenuItem
                          icon={<FiEdit />}
                          onClick={() => {
                            onEdit(label.id, label);
                          }}
                        >
                          {t('common:actions.edit').toString()}
                        </MenuItem>
                        <MenuDivider />
                        <ConfirmMenuItem
                          icon={<FiTrash2 />}
                          onClick={() => {
                            onDelete(label.id);
                          }}
                        >
                          {t('common:actions.delete').toString()}
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
        title={isEditing ? t('common:actions.edit').toString() : t('labels.actions.create').toString()}
        isOpen={isOpen || isEditing}
        onCancel={() => {
          onFinish();
          onClose();
        }}
        onConfirm={isEditing ? onConfirmEdit : onConfirmCreate}
        loading={loading || insertLoading || updateLoading}
        formId="label-form-id"
        initialValues={dataContext}
      >
        <FieldInput name="name" label={t('labels.data.name').toString()} required={t('labels.data.nameRequired').toString()} />
      </ModalDialog>
    </>
  );
};
