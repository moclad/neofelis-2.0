import React, { ReactNode, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { useTranslation } from 'react-i18next';

import {
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverProps,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';

interface ConfirmPopoverProps extends PopoverProps {
  children: ReactNode;
  title?: ReactNode;
  message?: ReactNode;
  onConfirm(): void;
  confirmText?: ReactNode;
  confirmVariant?: string;
}

export const ConfirmPopover: React.FC<React.PropsWithChildren<ConfirmPopoverProps>> = ({
  children,
  title,
  message,
  onConfirm,
  confirmText,
  confirmVariant = '@primary',
  ...rest
}) => {
  const { t } = useTranslation(['components', 'common']);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const displayHeading = !title && !message ? t('confirmPopover.heading') : title;

  const initialFocusRef = useRef<TODO>();

  return (
    <>
      <Popover isLazy isOpen={isOpen} onClose={onClose} onOpen={onOpen} initialFocusRef={initialFocusRef} {...rest}>
        <PopoverTrigger>{children}</PopoverTrigger>
        <Portal>
          <PopoverContent>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <PopoverBody fontSize="sm">
                {displayHeading && (
                  <Heading size="sm" mb={message ? 2 : 0}>
                    {displayHeading}
                  </Heading>
                )}
                {message}
              </PopoverBody>
              <PopoverFooter>
                <HStack>
                  <ButtonGroup justifyContent="space-between" flex="1">
                    <Button size="sm" onClick={onClose}>
                      {t('common:actions.cancel')}
                    </Button>
                    <Button
                      variant={confirmVariant}
                      size="sm"
                      onClick={() => {
                        onConfirm();
                        onClose();
                      }}
                      ref={initialFocusRef}
                    >
                      {confirmText ?? t('confirmPopover.confirmText')}
                    </Button>
                  </ButtonGroup>
                </HStack>
              </PopoverFooter>
            </FocusLock>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};
