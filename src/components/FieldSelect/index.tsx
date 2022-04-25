import React, { ReactNode, useEffect, useState } from 'react';
import { GroupBase } from 'react-select';

import { FormGroup, FormGroupProps } from '@/components/FormGroup';
import { Select, SelectProps } from '@/components/Select';
import { FieldProps, useField } from '@formiz/core';

export interface FieldSelectProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends FieldProps,
    FormGroupProps {
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  options?: Option[];
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  selectProps?: SelectProps<Option, IsMulti, Group>;
  isCreatable?: boolean;
  closeMenuOnSelect?: boolean;
  formatCreateLabel?: (inputValue: string) => ReactNode;
  onCreateOption?: (inputLabel: string) => Promise<number | string | void>;
}

export const FieldSelect = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: FieldSelectProps<Option, IsMulti, Group>
) => {
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
  const { required } = props;
  const {
    children,
    label,
    options = [],
    placeholder,
    helper,
    isDisabled,
    isClearable = true,
    isSearchable,
    isCreatable,
    closeMenuOnSelect = true,
    isMulti = false,
    onCreateOption,
    formatCreateLabel,
    size = 'md',
    selectProps,
    ...rest
  } = otherProps;
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
    isDisabled,
    ...rest,
  };

  const getCreate = (input: string): void => {
    if (!isCreatable || !onCreateOption) {
      return null;
    }

    onCreateOption(input);
  };

  const selectedValues = () => {
    if (isMulti && value) {
      return;
    }

    return options?.find((option) => option.value === value) || '';
  };

  return (
    <FormGroup {...formGroupProps}>
      <Select
        id={id}
        isMulti={isMulti}
        value={selectedValues()}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder || 'Select...'}
        onChange={(fieldValue) => {
          if (fieldValue && Array.isArray(fieldValue)) {
            const values = fieldValue.map((x) => x.value);
            setValue(values);
            return;
          }
          setValue(fieldValue ? fieldValue.value : null);
        }}
        size={size}
        options={options}
        isDisabled={isDisabled}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isError={showError}
        isCreatable={isCreatable}
        onCreateOption={getCreate}
        closeMenuOnSelect={closeMenuOnSelect}
        formatCreateLabel={formatCreateLabel}
        {...selectProps}
      />
      {children}
    </FormGroup>
  );
};
