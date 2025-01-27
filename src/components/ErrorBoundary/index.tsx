import React, { FC } from 'react';
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

const ErrorFallback = ({ error }: FallbackProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation('components');
  return (
    <Box p="4" m="auto">
      <Alert status="error" borderRadius="md">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>{t('errorBoundary.title')}</AlertTitle>
          <AlertDescription display="block" lineHeight="1.4">
            <Button variant="link" size="sm" textDecoration="underline" onClick={onOpen} color="red.800" _dark={{ color: 'red.100' }}>
              {t('errorBoundary.actions.expand')}
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{t('errorBoundary.title')}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box fontFamily="monospace">{error.message}</Box>
                </ModalBody>
              </ModalContent>
            </Modal>
          </AlertDescription>
        </Box>
      </Alert>
    </Box>
  );
};

export const ErrorBoundary: FC<React.PropsWithChildren<unknown>> = (props) => {
  return <ReactErrorBoundary FallbackComponent={ErrorFallback} {...props} />;
};
