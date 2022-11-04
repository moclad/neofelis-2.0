import React from 'react';

import { Button, Stack } from '@chakra-ui/react';
import { Formiz } from '@formiz/core';

import { FieldDayPicker } from './index';

export default {
  title: 'Fields/FieldDayPicker',
  component: FieldDayPicker,
  argTypes: {
    label: 'Select a date',
    placeholder: 'Select a date placeholder',
    helper: 'Helper text',
    required: 'A date is required.',
    onSubmit: { action: 'submit' },
    onChange: { action: 'change' },
    readonly: false,
    disabled: false,
    size: 'md',
    date: new Date(),
  },
};

const Template = ({ label, disabled, required, helper, onSubmit, readonly, placeholder, size, date, onChange }) => {
  return (
    <Formiz onSubmit={onSubmit} autoForm initialValues={{ fieldDayPickerId: date }}>
      <Stack spacing={6}>
        <FieldDayPicker
          size={size}
          id="fieldDayPickerId1"
          name="fieldDayPickerId"
          label={label}
          defaultValue={date}
          helper={helper}
          required={required}
          isReadOnly={readonly}
          isDisabled={disabled}
          placeholder={placeholder ?? null}
          onChange={(day) => {
            onChange(day);
          }}
        />
        <Button type="submit">Submit</Button>
      </Stack>
    </Formiz>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select a date',
  helper: 'Helper line',
  required: 'A date is required.',
  placeholder: 'DD/MM/YYYY',
  readonly: false,
  disabled: false,
  size: 'md',
  date: new Date(),
};
