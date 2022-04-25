import React from 'react';

import { FieldSelect } from '@/components';
import { Formiz } from '@formiz/core';

const colors = [
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Blue', value: 'blue' },
];

export default {
  title: 'Fields/FieldSelect',
};

export const Default = () => (
  <Formiz>
    <FieldSelect
      name="colors"
      label="Colors"
      placeholder="Placeholder"
      helper="This is an helper"
      required="Color is required"
      options={colors}
    />
  </Formiz>
);

export const Disabled = () => (
  <Formiz>
    <FieldSelect
      name="colors"
      label="Colors"
      placeholder="Placeholder"
      helper="This is an helper"
      required="Color is required"
      options={colors}
      isDisabled
    />
  </Formiz>
);
