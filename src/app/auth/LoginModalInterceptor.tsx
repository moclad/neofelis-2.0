import Axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { LoginForm } from '@/app/auth/LoginForm';
import { Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';

export const LoginModalInterceptor = () => {
  const { t } = useTranslation('auth');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();
  const queryCache = useQueryClient();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;

  useEffect(() => {
    const interceptor = Axios.interceptors.response.use(
      (r) => r,
      (error) => {
        if (error?.response?.status === 401 && pathnameRef.current !== '/login') {
          queryCache.cancelQueries();
          onOpen();
        }
        throw error;
      }
    );

    return () => Axios.interceptors.response.eject(interceptor);
  }, [onOpen, queryCache]);

  // On Route Change
  useEffect(() => {
    if (isOpen && pathname !== pathnameRef.current) {
      //updateToken(null);
      onClose();
    }
  }, [isOpen, onClose, pathname]);

  const handleLogin = () => {
    queryCache.refetchQueries();
    onClose();
  };

  const handleClose = () => {
    //updateToken(null);
    onClose();
    navigate('/login');
  };

  return (
    <Modal isOpen={session && isOpen} onClose={handleClose} closeOnOverlayClick={false} trapFocus={false}>
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
