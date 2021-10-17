import React from 'react';

import { Button, Stack } from '@chakra-ui/react';
import { isEmail } from '@formiz/validations';

import { FieldInput } from '../';
import ModalDialog from './ModalDialog';

export default {
  title: 'Components/ModalDialog',
  component: Button,
  argTypes: {
    title: 'Modal Title',
    formId: 'modal-dialog-form',
    loading: false,
    closeOnOverlayClick: false,
    isOpen: true,
    onClose: { action: 'closed' },
    onConfirm: { action: 'confirm' },
    initialValues: { label1: 'Label 1 content' },
  },
};

const Template = ({
  isOpen,
  title,
  loading,
  closeOnOverlayClick,
  onClose,
  onConfirm,
  formId,
  initialValues,
}) => {
  return (
    <ModalDialog
      title={title}
      isOpen={isOpen}
      onCancel={() => onClose()}
      onConfirm={onConfirm}
      loading={loading}
      closeOnOverlayClick={closeOnOverlayClick}
      formId={formId}
      initialValues={initialValues}
    >
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldInput name="label1" label="Label 1" required="Field required" />
        <FieldInput name="label2" label="Label 2" />
      </Stack>
      <FieldInput
        name="email"
        label="Email"
        required="Email is required"
        validations={[
          {
            rule: isEmail(),
            message: 'Invalid email',
          },
        ]}
      />
    </ModalDialog>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Modal title',
  formId: 'modal-dialog-form',
  loading: false,
  closeOnOverlayClick: false,
  isOpen: true,
  initialValues: { label1: 'Label 1 content' },
};
