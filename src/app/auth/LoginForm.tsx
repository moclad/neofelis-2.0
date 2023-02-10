import { signIn } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useLogin, useProvidersList } from '@/app/auth/auth.service';
import { Loader } from '@/app/layout';
import { FieldInput } from '@/components/FieldInput';
import { useToastError } from '@/components/Toast';
import { Box, Button, Divider, HStack, Stack, StackDivider, Text, VStack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations';

const OAuthProviders = () => {
  const { t } = useTranslation('auth');
  const { providers, isLoading } = useProvidersList();

  if (isLoading || !providers) {
    return <Loader />;
  }

  return (
    <>
      <HStack paddingTop={5}>
        <Divider />
        <Text>{t('auth:login.or')}</Text>
        <Divider />
      </HStack>
      <VStack divider={<StackDivider />} paddingTop={5} spacing={4} align="stretch">
        {Object.values(providers)
          .filter((provider) => provider.id !== 'email')
          .map((provider: any) => (
            <Button onClick={() => signIn(provider.id)} key={provider.name}>
              {t('auth:login.with')} {provider.name}
            </Button>
          ))}
      </VStack>
    </>
  );
};

export const LoginForm = ({ onSuccess = () => undefined, ...rest }) => {
  const { t } = useTranslation('auth');
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
        onValidSubmit={({ email }: any) => {
          signIn('email', { email });
        }}
        connect={form}
      >
        <Stack spacing="4">
          <FieldInput
            name="email"
            label={t('auth:data.email.label')}
            validations={[
              {
                rule: isEmail(),
                message: t('auth:data.email.invalid'),
              },
            ]}
            required={t('auth:data.email.required') as string}
          />
          <Button isLoading={isLoading} isDisabled={form.isSubmitted && !form.isValid} type="submit" variant="@primary" ms="auto">
            {t('auth:login.actions.loginWithEmail')}
          </Button>
        </Stack>
        <OAuthProviders />
      </Formiz>
    </Box>
  );
};
