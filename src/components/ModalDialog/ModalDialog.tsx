import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';

export interface ModalDialogProps {
  isOpen: boolean;
  loading: boolean;
  title: string;
  closeOnOverlayClick?: boolean;
  formId: string;
  onCancel: () => void;
  onConfirm: (values) => void;
}

const ModalDialog: FC<ModalDialogProps> = (props) => {
  const {
    children,
    isOpen,
    onCancel,
    onConfirm,
    title,
    loading,
    closeOnOverlayClick,
    formId,
  } = props;

  const { t } = useTranslation();
  const generalInformationForm = useForm();

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
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <Formiz
          id={formId}
          onValidSubmit={submitFormData}
          connect={generalInformationForm}
        >
          <form noValidate onSubmit={generalInformationForm.submit}>
            <ModalBody>{children}</ModalBody>
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

export default ModalDialog;
