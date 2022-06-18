import React from 'react';

import { FieldSelect } from '@/components';
import { Formiz } from '@formiz/core';

const colors = [
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow', default: true },
  { label: 'Blue', value: 'blue' },
  { label: 'Magenta', value: 'magenta' },
  { label: 'Black', value: 'black' },
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

export const InitialValue = () => (
  <Formiz>
    <FieldSelect
      name="colors"
      label="Colors"
      placeholder="Placeholder"
      helper="This is an helper"
      required="Color is required"
      options={colors}
      defaultValue={['red', 'black']}
      isMulti={true}
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
