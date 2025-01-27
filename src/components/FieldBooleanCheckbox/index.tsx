import React, { useEffect, useState } from 'react';

import { FormGroup, FormGroupProps } from '@/components/FormGroup';
import { Checkbox } from '@chakra-ui/react';
import { FieldProps, useField } from '@formiz/core';

export type FieldBooleanCheckboxProps = FieldProps<boolean> &
  FormGroupProps & {
    optionLabel?: string;
    size?: 'sm' | 'md' | 'lg';
  };

export const FieldBooleanCheckbox = (props: FieldBooleanCheckboxProps) => {
  const { errorMessage, id, isValid, isSubmitted, resetKey, setValue, value, otherProps } = useField({ debounce: 0, defaultValue: false, ...props });
  const { required } = props;
  const { children, label, helper, optionLabel, size = 'md', isDisabled, ...rest } = otherProps;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  const formGroupProps = {
    errorMessage,
    helper,
    id,
    isRequired: !!required,
    isDisabled,
    label,
    showError,
    ...rest,
  };

  return (
    <FormGroup {...formGroupProps}>
      <Checkbox id={id} size={size} value={`${value}`} isDisabled={isDisabled} onChange={() => setValue(!value)}>
        {optionLabel || <>&nbsp;</>}
      </Checkbox>
      {children}
    </FormGroup>
  );
};
