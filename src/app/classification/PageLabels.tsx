import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import { ClassificationNav } from '@/app/classification/ClassificationNav';
import { Page, PageContent } from '@/app/layout';
import {
  ActionsButton,
  ConfirmMenuItem,
  FieldInput,
  useToastError,
  useToastSuccess
} from '@/components';
import ModalDialog from '@/components/ModalDialog/ModalDialog';
import {
  useAllLabelsQuery,
  useDeleteLabelMutation,
  useInsertLabelMutation
} from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
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
  const { colorModeValue } = useDarkMode();
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const [deleteLabel, { loading: deleteLabelFetching }] =
    useDeleteLabelMutation();
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

  const onConfirm = async (values) => {
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

  const onDelete = async (id: number) => {
    deleteLabel({
      variables: {
        id,
      },
      refetchQueries: 'active',
    }).then((result) => {
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
            <Button
              key="createLabel"
              leftIcon={<FiPlus />}
              variant="@primary"
              onClick={() => onOpen()}
            >
              {t('classification:labels.actions.create')}
            </Button>,
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
                        <MenuItem icon={<FiEdit />}>
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
        title={t('classification:labels.create')}
        isOpen={isOpen}
        onCancel={() => onClose()}
        onConfirm={onConfirm}
        loading={loading || insertLoading}
        formId="label-form-id"
      >
        <Stack
          direction="column"
          bg={colorModeValue('white', 'blackAlpha.400')}
          p="6"
          borderRadius="lg"
          spacing="6"
          shadow="md"
        >
          <FieldInput name="name" label="Name" required="Field required" />
        </Stack>
      </ModalDialog>
    </>
  );
};
