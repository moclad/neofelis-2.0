import { FC } from 'react';

import { useProgressContext } from '@/components/Progress';
import { Progress, ProgressProps } from '@chakra-ui/react';

export const ProgressBar: FC<React.PropsWithChildren<ProgressProps>> = (
  props
) => {
  const { completed, total, isLoading } = useProgressContext();
  return (
    <Progress
      value={(completed / total ?? Infinity) * 100}
      borderRadius="lg"
      height="1"
      isIndeterminate={isLoading}
      {...props}
    />
  );
};
