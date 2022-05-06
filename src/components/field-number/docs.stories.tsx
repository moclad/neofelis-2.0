import React from 'react';

import { Button, Stack } from '@chakra-ui/react';
import { Formiz } from '@formiz/core';

import { FieldNumber } from './index';

export default {
  title: 'Fields/FieldNumber',
  component: FieldNumber,
  argTypes: {
    label: 'Number input',
    helper: 'This is an helper text',
    required: '',
    onSubmit: { action: 'submit' },
    onChange: { action: 'change' },
    readOnly: false,
    disabled: false,
    size: 'md',
    min: 0,
    max: 0,
    showInputStepper: true,
  },
};

const Template = ({
  label,
  isDisabled,
  required,
  helper,
  onSubmit,
  isReadOnly,
  size,
  onChange,
  min,
  max,
  showInputStepper,
}) => {
  return (
    <Formiz onSubmit={onSubmit} autoForm>
      <Stack spacing={6}>
        <FieldNumber
          id="demo-input-field"
          name="demo-number"
          label={label}
          helper={helper}
          showInputStepper={showInputStepper}
          required={required}
          value={55}
          min={min}
          max={max}
          size={size}
          isReadOnly={isReadOnly}
          isDisabled={isDisabled}
          onChange={(data) => {
            onChange(data);
          }}
        />
        <Button type="submit">Submit</Button>
      </Stack>
    </Formiz>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Number input',
  helper: 'Helper line',
  required: '',
  readonly: false,
  disabled: false,
  size: 'md',
  min: 0,
  max: 0,
  showInputStepper: true,
};
