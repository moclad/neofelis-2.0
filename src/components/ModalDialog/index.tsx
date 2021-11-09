import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useDarkMode } from '@/hooks/useDarkMode';
import {
  Button,
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

export interface ModalDialogProps {
  isOpen: boolean;
  loading: boolean;
  title: string;
  closeOnOverlayClick?: boolean;
  formId: string;
  initialValues?: object;
  onCancel: () => void;
  onConfirm: (values) => void;
}

export const ModalDialog: FC<ModalDialogProps> = (props) => {
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
  } = props;

  const { t } = useTranslation();
  const generalInformationForm = useForm();
  const { colorModeValue } = useDarkMode();

  const submitFormData = async (values) => {
    await onConfirm(values);
    onCancel();
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
                p="6"
                borderRadius="lg"
                spacing="6"
                shadow="md"
              >
                {children}
              </Stack>
            </ModalBody>
            <ModalFooter>
              <HStack spacing={4}>
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
