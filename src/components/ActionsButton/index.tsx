import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMoreVertical } from 'react-icons/fi';

import { forwardRef, IconButton, IconButtonProps } from '@chakra-ui/react';

export interface ActionsButtonProps extends Omit<IconButtonProps, 'aria-label'> {
  label?: string;
}

export const ActionsButton: FC<React.PropsWithChildren<ActionsButtonProps>> = forwardRef(({ label, ...rest }, ref) => {
  const { t } = useTranslation('components');
  return (
    <IconButton
      ref={ref}
      display="inline-flex"
      borderRadius="full"
      variant="ghost"
      color="inherit"
      colorScheme="gray"
      zIndex={0}
      bg="transparent"
      opacity="0.5"
      _hover={{ opacity: 1, bg: 'rgba(0, 0, 0, 0.05)' }}
      _focusVisible={{ opacity: 1, boxShadow: 'outline' }}
      _active={{ bg: 'rgba(0, 0, 0, 0.1)' }}
      icon={<FiMoreVertical />}
      aria-label={label ?? t('actionsButton.label')}
      {...rest}
    />
  );
});

ActionsButton.displayName = 'ActionsButton';
