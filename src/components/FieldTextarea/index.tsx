import { useEffect, useState } from 'react';

import { FormGroup, FormGroupProps } from '@/components/FormGroup';
import { Textarea, TextareaProps } from '@chakra-ui/react';
import { FieldProps, useField } from '@formiz/core';

export interface FieldTextareaProps extends FieldProps, FormGroupProps {
  textareaProps?: Omit<
    TextareaProps,
    | 'id'
    | 'value'
    | 'name'
    | 'defaultValue'
    | 'onChange'
    | 'onBlur'
    | 'placeholder'
  >;
  autoFocus?: boolean;
}

export const FieldTextarea = (props: FieldTextareaProps) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    resetKey,
    setValue,
    value,
    otherProps,
  } = useField(props);

  const { helper, label, placeholder, textareaProps, autoFocus, ...rest } =
    otherProps;

  const { required } = props;
  const [isTouched, setIsTouched] = useState(false);

  const showError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  const formGroupProps: FormGroupProps = {
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
      <Textarea
        id={id}
        value={value ?? ''}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...textareaProps}
      />
    </FormGroup>
  );
};
