import React, { useEffect, useState } from 'react';

import { FormGroup, FormGroupProps } from '@/components/FormGroup';
import {
  InputGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputFieldProps,
  NumberInputProps,
  NumberInputStepper
} from '@chakra-ui/react';
import { FieldProps, useField } from '@formiz/core';

export interface FieldNumberProps
  extends NumberInputProps,
    Omit<FormGroupProps, 'placeholder'> {
  showInputStepper?: boolean;
}

export const FieldNumber = (props: FieldNumberProps) => {
  const { errorMessage, id, isValid, isSubmitted, resetKey, otherProps } =
    useField(props);
  const {
    onChange,
    children,
    label,
    value,
    showInputStepper = true,
    defaultValue,
    helper,
    size = 'md',
    min,
    max,
    ...rest
  } = otherProps;
  const { required } = props;
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
    label,
    showError,
    ...rest,
  };

  const stepperNode = (): React.ReactNode => {
    if (showInputStepper) {
      return (
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      );
    }

    return <></>;
  };

  return (
    <FormGroup {...formGroupProps}>
      <InputGroup size={size}>
        <NumberInput
          id={id}
          defaultValue={value || defaultValue}
          min={min === max ? null : min}
          max={min === max ? null : max}
          keepWithinRange={true}
          {...rest}
        >
          <NumberInputField />
          {stepperNode()}
        </NumberInput>
      </InputGroup>
      {children}
    </FormGroup>
  );
};
