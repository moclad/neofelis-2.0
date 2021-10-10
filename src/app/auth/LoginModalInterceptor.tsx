import React, { useEffect, useRef } from 'react';

import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Axios from 'axios';
import { useSession } from 'next-auth/client';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';
import { useHistory, useLocation } from 'react-router-dom';

import { LoginForm } from '@/app/auth/LoginForm';

export const LoginModalInterceptor = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [session] = useSession();
  const queryCache = useQueryClient();
  const history = useHistory();
  const { pathname } = useLocation();
  const pathnameRef = useRef(null);
  pathnameRef.current = pathname;

  useEffect(() => {
    Axios.interceptors.response.use(
      (r) => r,
      (error) => {
        if (
          error?.response?.status === 401 &&
          pathnameRef.current !== '/login'
        ) {
          queryCache.cancelQueries();
          onOpen();
        }
        throw error;
      }
    );
  }, [onOpen, queryCache]);

  // On Route Change
  useEffect(() => {
    const destroy = history.listen(() => {
      if (isOpen) {
        // updateToken(null);
        onClose();
      }
    });

    return () => destroy();
  }, [history, isOpen, onClose]);

  const handleLogin = () => {
    queryCache.refetchQueries();
    onClose();
  };

  const handleClose = () => {
    // updateToken(null);
    onClose();
    history.push('/login');
  };

  return (
    <Modal
      isOpen={session && isOpen}
      onClose={handleClose}
      closeOnOverlayClick={false}
      trapFocus={false}
    >
      <ModalOverlay style={{ backdropFilter: 'blur(6px)' }} />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p="6">
          <Heading size="lg">{t('auth:interceptor.title')}</Heading>
          <Text mb="2">{t('auth:interceptor.description')}</Text>
          <LoginForm onSuccess={handleLogin} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
