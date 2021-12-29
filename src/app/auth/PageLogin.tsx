import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';

import { LoginForm } from '@/app/auth/LoginForm';
import { useRedirectFromUrl } from '@/app/router';
import { Logo, SlideIn } from '@/components';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Box, Button, Center, Heading } from '@chakra-ui/react';

export const PageLogin = () => {
  const { data: session } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session]);

  const { t } = useTranslation();
  const { colorModeValue } = useDarkMode();
  const redirect = useRedirectFromUrl();
  const queryCache = useQueryClient();

  const onLogin = () => {
    queryCache.clear();
    redirect();
  };

  return (
    <SlideIn>
      <Box px="2" py="4rem" w="30rem" maxW="full" m="auto">
        <Logo h="3rem" mb="8" mx="auto" />
        <Box
          p="6"
          bg={colorModeValue('white', 'blackAlpha.400')}
          borderRadius="md"
          boxShadow="md"
        >
          <Heading size="md" mb="4">
            {t('auth:login.title')}
          </Heading>
          <LoginForm onSuccess={onLogin} />
        </Box>
        <Center mt="8">
          <Button as={RouterLink} to="/profile/register" variant="link">
            {t('auth:login.actions.needAccount')}{' '}
            <Box
              as="strong"
              color={colorModeValue('brand.500', 'brand.300')}
              ms="2"
            >
              {t('auth:login.actions.register')}
            </Box>
          </Button>
        </Center>
      </Box>
    </SlideIn>
  );
};
