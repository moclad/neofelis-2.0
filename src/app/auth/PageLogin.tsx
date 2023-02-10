import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { LoginForm } from '@/app/auth/LoginForm';
import { useRedirectFromUrl } from '@/app/router';
import { Logo } from '@/components/Logo';
import { SlideIn } from '@/components/SlideIn';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Box, Button, Center, Heading } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';

export const PageLogin = () => {
  const { data: session } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [navigate, session]);

  const { t } = useTranslation('auth');
  const { colorModeValue } = useDarkMode();
  const redirect = useRedirectFromUrl();
  const queryCache = useQueryClient();

  const onLogin = (): void => {
    queryCache.clear();
    redirect();
  };

  return (
    <SlideIn>
      <Box px="2" py="4rem" w="30rem" maxW="full" m="auto">
        <Logo h="3rem" mb="8" mx="auto" />
        <Box p="6" bg={colorModeValue('white', 'blackAlpha.400')} borderRadius="md" boxShadow="md">
          <Heading size="md" mb="4">
            {t('login.title').toString()}
          </Heading>
          <LoginForm onSuccess={() => onLogin()} />
        </Box>
        <Center mt="8">
          <Button as={RouterLink} to="/profile/register" variant="link">
            {t('login.actions.needAccount').toString()}{' '}
            <Box as="strong" color={colorModeValue('brand.500', 'brand.300')} ms="2">
              {t('login.actions.register').toString()}
            </Box>
          </Button>
        </Center>
      </Box>
    </SlideIn>
  );
};
