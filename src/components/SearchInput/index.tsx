import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiX } from 'react-icons/fi';

import { useDarkMode } from '@/hooks/useDarkMode';
import { forwardRef, IconButton, Input, InputGroup, InputProps, InputRightElement, useControllableState, useMergeRefs } from '@chakra-ui/react';

interface SearchInputProps extends Omit<InputProps, 'onChange'> {
  onChange?(value?: string): void;
  delay?: number;
  clearLabel?: string;
  value?: string;
  defaultValue?: string;
}

export const SearchInput = forwardRef<SearchInputProps, 'input'>(
  ({ value, defaultValue, onChange, delay = 500, placeholder, clearLabel, isDisabled = false, ...rest }, ref) => {
    const { t } = useTranslation('components');
    const { colorModeValue } = useDarkMode();
    const [externalValue, setExternalValue] = useControllableState({
      value,
      defaultValue,
      onChange,
    });
    const inputRef = useRef<HTMLInputElement>();
    const refs = useMergeRefs(inputRef, ref);

    const [search, setSearch] = useState<string>(externalValue as string);

    const searchRef = useRef(search);
    searchRef.current = search;

    const setExternalValueRef = useRef<typeof setExternalValue>();
    setExternalValueRef.current = setExternalValue;

    useEffect(() => {
      const handler = setTimeout(() => {
        setExternalValueRef.current?.(search);
      }, delay);

      return () => clearTimeout(handler);
    }, [search, delay]);

    useEffect(() => {
      if (externalValue !== searchRef.current) {
        setSearch(externalValue);
      }
    }, [externalValue]);

    const handleChange = (event) => {
      setSearch(event.target.value);
    };

    const handleClear = () => {
      setSearch('');
      inputRef?.current?.focus();
    };

    const handleEscape = (event) => {
      if (event?.key?.toLowerCase() === 'escape') {
        handleClear();
      }
    };

    return (
      <InputGroup {...rest}>
        <Input
          ref={refs}
          onChange={handleChange}
          value={search || ''}
          placeholder={placeholder ?? t('searchInput.placeholder')}
          isDisabled={isDisabled}
          onKeyDown={handleEscape}
        />
        <InputRightElement color={isDisabled ? colorModeValue('gray.300', 'gray.600') : colorModeValue('brand.600', 'brand.300')}>
          {!isDisabled && search ? (
            <IconButton onClick={handleClear} variant="@secondary" size="xs" aria-label={clearLabel ?? t('searchInput.clear')}>
              <FiX />
            </IconButton>
          ) : (
            <FiSearch />
          )}
        </InputRightElement>
      </InputGroup>
    );
  }
);
