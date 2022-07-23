import { FC, ReactChild } from 'react';

import { useProgressContext } from '@/components/Progress';
import { Text, TextProps } from '@chakra-ui/react';

import { ProgressValues } from './';

export interface ProgressLabelProps extends TextProps {
  children(data: ProgressValues): ReactChild;
}

export const ProgressLabel: FC<React.PropsWithChildren<ProgressLabelProps>> = ({
  children,
  ...rest
}) => {
  const progressValues = useProgressContext();

  return (
    <Text fontWeight="medium" {...rest}>
      {children(progressValues)}
    </Text>
  );
};
