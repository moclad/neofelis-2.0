import React from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';
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
}) => {
  const { colorModeValue } = useDarkMode();

  return (
    <ModalDialog
      title={title}
      isOpen={isOpen}
      onCancel={() => onClose()}
      onConfirm={onConfirm}
      loading={loading}
      closeOnOverlayClick={closeOnOverlayClick}
      formId={formId}
    >
      <Stack
        direction="column"
        bg={colorModeValue('white', 'blackAlpha.400')}
        p="6"
        borderRadius="lg"
        spacing="6"
        shadow="md"
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
      </Stack>
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
};
