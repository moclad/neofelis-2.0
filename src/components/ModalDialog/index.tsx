import React, { FC, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDarkMode } from '@/hooks/useDarkMode';
import {
  Button,
  Checkbox,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { UseFormValues } from '@formiz/core/dist/types/form.types';

export interface ModalDialogProps {
  isOpen: boolean;
  loading: boolean;
  title: string;
  closeOnOverlayClick?: boolean;
  formId: string;
  initialValues?: object;
  dialogForm?: UseFormValues;
  onCancel: () => void;
  onConfirm: (values) => void;
  children?: ReactNode;
  showAddAnotherOne?: boolean;
}

export const ModalDialog: FC<React.PropsWithChildren<ModalDialogProps>> = (
  props
) => {
  const {
    children,
    isOpen,
    onCancel,
    onConfirm,
    title,
    loading,
    closeOnOverlayClick,
    formId,
    initialValues,
    dialogForm = null,
    showAddAnotherOne = false,
  } = props;

  const { t } = useTranslation();
  const generalInformationForm = dialogForm ? dialogForm : useForm();
  const { colorModeValue } = useDarkMode();
  const [continueToAdd, setContinueToAdd] = useState(false);

  const submitFormData = async (values) => {
    await onConfirm(values);

    if (!continueToAdd) {
      onCancel();
    }

    generalInformationForm.reset();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onCancel();
      }}
      motionPreset="scale"
      closeOnOverlayClick={closeOnOverlayClick ?? false}
      isCentered
      size="2xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <Formiz
          id={formId}
          onValidSubmit={submitFormData}
          connect={generalInformationForm}
          initialValues={initialValues}
        >
          <form noValidate onSubmit={generalInformationForm.submit}>
            <ModalBody>
              <Stack
                direction="column"
                bg={colorModeValue('white', 'blackAlpha.400')}
                pl="6"
                pr="6"
                pb="6"
                pt="2"
                borderRadius="lg"
                spacing="6"
                shadow="md"
              >
                {children}
              </Stack>
            </ModalBody>
            <ModalFooter>
              <HStack pt="3" spacing={4}>
                {showAddAnotherOne ? (
                  <Checkbox
                    onChange={(e) => setContinueToAdd(e.target.checked)}
                    isChecked={continueToAdd}
                    readOnly={loading}
                  >
                    {t('common:actions.addAnotherOne')}
                  </Checkbox>
                ) : null}
                <Button
                  isDisabled={loading}
                  variant="ghost"
                  onClick={() => {
                    onCancel();
                  }}
                >
                  {t('common:actions.cancel')}
                </Button>
                <Button
                  type="submit"
                  variant="@primary"
                  isLoading={loading}
                  loadingText={t('common:actions.submitting')}
                >
                  {t('common:actions.confirm')}
                </Button>
              </HStack>
            </ModalFooter>
          </form>
        </Formiz>
      </ModalContent>
    </Modal>
  );
};
