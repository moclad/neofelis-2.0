import React, { useEffect, useState } from 'react';

import { DayPicker } from '@/components/DayPicker';
import { FormGroup, FormGroupProps } from '@/components/FormGroup';
import { InputGroup, InputProps, InputRightElement, Spinner } from '@chakra-ui/react';
import { FieldProps, useField } from '@formiz/core';

export interface FieldDayPickerProps extends FieldProps, FormGroupProps {
  invalidMessage?: string;
}

export const FieldDayPicker = (props: FieldDayPickerProps) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    isValidating,
    resetKey,
    setValue,
    value,
    otherProps,
  } = useField(props);
  const {
    children,
    label,
    placeholder,
    helper,
    size = 'md',
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

  return (
    <FormGroup {...formGroupProps}>
      {/* <InputGroup size={size} autoSave={'off'}> */}
      <DayPicker
        id={id}
        value={value ?? null}
        onChange={setValue}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder}
      />
      {(isTouched || isSubmitted) && isValidating && (
        <InputRightElement>
          <Spinner size="sm" flex="none" />
        </InputRightElement>
      )}
      {/* </InputGroup> */}
      {children}
    </FormGroup>
  );
};
