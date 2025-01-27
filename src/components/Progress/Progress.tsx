import React, { createContext, FC, useContext } from 'react';

import { Stack, StackProps } from '@chakra-ui/react';

export interface ProgressValues {
  completed: number;
  total: number;
  isLoading?: boolean;
}

export const ProgressContext = createContext<ProgressValues>(null);

export interface ProgressProps extends StackProps, ProgressValues {}

export const Progress: FC<React.PropsWithChildren<ProgressProps>> = ({
  completed = 0,
  total,
  isLoading = false,
  ...rest
}) => {
  return (
    <ProgressContext.Provider
      value={{
        completed,
        total,
        isLoading,
      }}
    >
      <Stack {...rest} />
    </ProgressContext.Provider>
  );
};

export const useProgressContext = () => useContext(ProgressContext);
