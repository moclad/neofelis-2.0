import { useEffect, useState } from 'react';

import { FormGroup, FormGroupProps } from '@/components/FormGroup';
import { Textarea, TextareaProps } from '@chakra-ui/react';
import { FieldProps, useField } from '@formiz/core';

export type FieldTextareaProps = FieldProps<string> &
  FormGroupProps & {
    textareaProps?: Omit<TextareaProps, 'id' | 'value' | 'name' | 'defaultValue' | 'onChange' | 'onBlur' | 'placeholder'>;
    autoFocus?: boolean;
  };

export const FieldTextarea = (props: FieldTextareaProps) => {
  const { errorMessage, id, isValid, isSubmitted, isPristine, resetKey, setValue, value, otherProps } = useField(props);

  const { helper, label, placeholder, textareaProps, autoFocus, ...rest } = otherProps;

  const { required } = props;
  const [isTouched, setIsTouched] = useState(false);

  const showError = !isValid && ((isTouched && !isPristine) || isSubmitted);

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
        onFocus={() => setIsTouched(false)}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...textareaProps}
      />
    </FormGroup>
  );
};
