import React from 'react';

import { FormGroup, FormGroupProps } from '@/components/FormGroup';
import { FieldProps, useField } from '@formiz/core';

type FieldHiddenProps = FieldProps<unknown> & FormGroupProps;

export const FieldHidden: React.FC<React.PropsWithChildren<FieldHiddenProps>> = (props) => {
  const { isValid, isSubmitted, errorMessage, otherProps } = useField({
    debounce: 0,
    ...props,
  });
  const { ...rest } = otherProps;
  const showError = !isValid && isSubmitted;
  const formGroupProps = {
    errorMessage,
    showError,
  };

  if (showError) {
    return <FormGroup {...formGroupProps} {...rest} />;
  }
  return null;
};
