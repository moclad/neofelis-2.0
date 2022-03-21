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
  useAllLabelsQuery,
  useDeleteLabelMutation,
  useInsertLabelMutation,
  useUpdateLabelMutation
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

export const PageLabels = () => {
  const { t } = useTranslation();
  const { loading, data } = useAllLabelsQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataKey, dataContext, isEditing, onEdit, onFinish } =
    useEditMode<number>();
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const [deleteLabel, { loading: deleteLabelFetching }] =
    useDeleteLabelMutation();

  const [updateLabel, { loading: updateLoading }] = useUpdateLabelMutation({
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

  const [insertLabel, { loading: insertLoading }] = useInsertLabelMutation({
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

    await insertLabel({
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
        title: t('common:feedbacks.deletedSuccess.title'),
      });
    });
  };

  return (
    <>
      <Page nav={<ClassificationNav />}>
        <PageContent
          loading={loading || deleteLabelFetching || insertLoading}
          title={t('classification:labels.title')}
          actions={[
            <ResponsiveIconButton
              key="createLabel"
              icon={<FiPlus />}
              variant="@primary"
              onClick={() => onOpen()}
            >
              {t('classification:labels.actions.create')}
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
                          {t('classification:labels.actions.edit')}
                        </MenuItem>
                        <MenuDivider />
                        <ConfirmMenuItem
                          icon={<FiTrash2 />}
                          onClick={() => {
                            onDelete(label.id);
                          }}
                        >
                          {t('classification:labels.actions.delete')}
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
            ? t('classification:labels.actions.edit')
            : t('classification:labels.actions.create')
        }
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
        <FieldInput
          name="name"
          label={t('classification:labels.data.name')}
          required={t('classification:labels.data.nameRequired') as string}
        />
      </ModalDialog>
    </>
  );
};
