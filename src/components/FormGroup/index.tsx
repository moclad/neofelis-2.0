import React, { ReactNode } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Icon } from '@/components/Icons';
import { FormControl, FormControlProps, FormErrorMessage, FormHelperText, FormLabel, SlideFade } from '@chakra-ui/react';

export interface FormGroupProps extends Omit<FormControlProps, 'onChange' | 'defaultValue' | 'label'> {
  children?: ReactNode;
  errorMessage?: ReactNode;
  helper?: ReactNode;
  id?: string;
  isRequired?: boolean;
  label?: ReactNode;
  showError?: boolean;
}

export const FormGroup = ({ children, errorMessage, helper, id, isRequired, label, showError, ...props }: FormGroupProps) => (
  <FormControl isInvalid={showError} isRequired={isRequired} {...props}>
    {!!label && (
      <FormLabel size="xs" htmlFor={id}>
        {label}
      </FormLabel>
    )}
    {children}
    {!!helper && <FormHelperText>{helper}</FormHelperText>}

    {!!errorMessage && (
      <FormErrorMessage id={`${id}-error`}>
        <SlideFade in offsetY={-6}>
          <Icon icon={FiAlertCircle} me="2" />
          {errorMessage}
        </SlideFade>
      </FormErrorMessage>
    )}
  </FormControl>
);
