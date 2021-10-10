import React from 'react';

import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { signIn } from 'next-auth/client';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { useLogin, useProvidersList } from '@/app/auth/auth.service';
import { Loader } from '@/app/layout';
import { FieldInput, useToastError } from '@/components';

const OAuthProviders = () => {
  const { t } = useTranslation();
  const { providers, isLoading } = useProvidersList();

  if (isLoading || !!!providers) {
    return <Loader />;
  }

  return (
    <>
      <HStack paddingTop={5}>
        <Divider />
        <Text>{t('auth:login.or')}</Text>
        <Divider />
      </HStack>
      <VStack divider={<StackDivider />} spacing={4} align="stretch">
        {Object.values(providers).map((provider: any) => (
          <Button onClick={() => signIn(provider.id)} key={provider.name}>
            {t('auth:login.with')} {provider.name}
          </Button>
        ))}
      </VStack>
    </>
  );
};

export const LoginForm = ({ onSuccess = () => undefined, ...rest }) => {
  const { t } = useTranslation();
  const form = useForm({ subscribe: 'form' });
  const toastError = useToastError();

  const { mutate: login, isLoading } = useLogin({
    onSuccess,
    onError: (error: any) => {
      toastError({
        title: t('auth:login.feedbacks.loginError.title'),
        description: error?.response?.data?.title,
      });
    },
  });

  return (
    <Box {...rest}>
      <Formiz
        id="login-form"
        autoForm
        onValidSubmit={() => {
          signIn('credentials', { username: 'jsmith', password: '1234' });
        }}
        connect={form}
      >
        <Stack spacing="4">
          <FieldInput
            name="username"
            label={t('auth:data.username.label')}
            required={t('auth:data.username.required') as string}
          />
          <FieldInput
            name="password"
            type="password"
            label={t('auth:data.password.label')}
            required={t('auth:data.password.required') as string}
          />
          <Flex>
            <Button
              as={RouterLink}
              to="/account/reset"
              size="sm"
              variant="link"
              whiteSpace="initial"
            >
              {t('auth:login.actions.forgotPassword')}
            </Button>
            <Button
              isLoading={isLoading}
              isDisabled={form.isSubmitted && !form.isValid}
              type="submit"
              variant="@primary"
              ms="auto"
            >
              {t('auth:login.actions.login')}
            </Button>
          </Flex>

          <OAuthProviders />
        </Stack>
      </Formiz>
    </Box>
  );
};
