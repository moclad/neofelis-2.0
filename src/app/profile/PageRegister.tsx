import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { useCreateAccount } from '@/app/profile/profile.service';
import { FieldInput } from '@/components/FieldInput';
import { FieldSelect } from '@/components/FieldSelect';
import { SlideIn } from '@/components/SlideIn';
import { useToastError } from '@/components/Toast';
import { AVAILABLE_LANGUAGES } from '@/constants/i18n';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Alert, AlertDescription, AlertTitle, Box, Button, Center, Flex, Heading, ScaleFade, Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isEmail, isMaxLength, isMinLength, isPattern } from '@formiz/validations';

export const PageRegister = () => {
  const { t, i18n } = useTranslation('profile');
  const { colorModeValue } = useDarkMode();
  const form = useForm({
    subscribe: { form: true, fields: ['langKey'] },
  });
  const toastError = useToastError();
  const [accountEmail, setAccountEmail] = useState('');

  // Change language based on form
  useEffect(() => {
    i18n.changeLanguage(form.values?.langKey);
  }, [i18n, form.values?.langKey]);

  const {
    mutate: createUser,
    isLoading,
    isSuccess,
  } = useCreateAccount({
    onMutate: ({ email }) => {
      setAccountEmail(email);
    },
    onError: (error: any) => {
      const { errorKey, title } = error?.response?.data || {};

      toastError({
        title: t('register.feedbacks.registrationError.title').toString(),
        description: title,
      });

      if (errorKey === 'userexists') {
        form.invalidateFields({
          login: t('data.login.alreadyUsed').toString(),
        });
      }

      if (errorKey === 'emailexists') {
        form.invalidateFields({ email: t('data.email.alreadyUsed').toString() });
      }
    },
  });

  if (isSuccess) {
    return (
      <Center p="4" m="auto">
        <ScaleFade initialScale={0.9} in>
          <Alert
            status="success"
            variant="solid"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            borderRadius="lg"
            px="8"
            py="4"
          >
            <Box fontSize="3rem">🎉</Box>
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {t('register.feedbacks.registrationSuccess.title').toString()}
            </AlertTitle>
            <AlertDescription>
              <Trans t={t} i18nKey="register.feedbacks.registrationSuccess.description" values={{ email: accountEmail }} />
            </AlertDescription>
          </Alert>
          <Center mt="8">
            <Button as={RouterLink} to="/login" variant="link" color={colorModeValue('brand.500', 'brand.300')}>
              {t('register.actions.goToLogin').toString()}
            </Button>
          </Center>
        </ScaleFade>
      </Center>
    );
  }

  return (
    <SlideIn>
      <Box p="2" pb="4rem" w="22rem" maxW="full" m="auto">
        <Formiz id="register-form" autoForm onValidSubmit={createUser} connect={form}>
          <Box p="6" bg={colorModeValue('white', 'blackAlpha.400')} borderRadius="md" boxShadow="md">
            <Heading size="lg" mb="4">
              {t('register.title').toString()}
            </Heading>
            <Stack spacing="4">
              <FieldSelect
                name="langKey"
                label={t('data.language.label').toString()}
                options={AVAILABLE_LANGUAGES.map(({ key }) => ({
                  label: t(`languages.${key}`).toString(),
                  value: key,
                }))}
                defaultValue={i18n.language}
              />
              <FieldInput
                name="login"
                label={t('data.login.label').toString()}
                required={t('data.login.required').toString()}
                validations={[
                  {
                    rule: isMinLength(2),
                    message: t('data.login.tooShort', { min: 2 }).toString(),
                  },
                  {
                    rule: isMaxLength(50),
                    message: t('data.login.tooLong', { max: 50 }).toString(),
                  },
                  {
                    rule: isPattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
                    message: t('data.login.invalid').toString(),
                  },
                ]}
              />
              <FieldInput
                name="email"
                label={t('data.email.label')}
                required={t('data.email.required').toString()}
                validations={[
                  {
                    rule: isMinLength(5),
                    message: t('data.email.tooShort', { min: 5 }).toString(),
                  },
                  {
                    rule: isMaxLength(254),
                    message: t('data.email.tooLong', { min: 254 }).toString(),
                  },
                  {
                    rule: isEmail(),
                    message: t('data.email.invalid').toString(),
                  },
                ]}
              />
              <FieldInput
                name="password"
                type="password"
                label={t('data.password.label').toString()}
                required={t('data.password.required').toString()}
                validations={[
                  {
                    rule: isMinLength(4),
                    message: t('data.password.tooShort', { min: 4 }).toString(),
                  },
                  {
                    rule: isMaxLength(50),
                    message: t('data.password.tooLong', { min: 50 }).toString(),
                  },
                ]}
              />
              <Flex>
                <Button isLoading={isLoading} isDisabled={form.isSubmitted && !form.isValid} type="submit" variant="@primary" ms="auto">
                  {t('register.actions.create').toString()}
                </Button>
              </Flex>
            </Stack>
          </Box>
          <Center mt="8">
            <Button as={RouterLink} to="/login" variant="link">
              {t('register.actions.alreadyHaveAnAccount').toString()}{' '}
              <Box as="strong" color={colorModeValue('brand.500', 'brand.300')} ms="2">
                {t('register.actions.login').toString()}
              </Box>
            </Button>
          </Center>
        </Formiz>
      </Box>
    </SlideIn>
  );
};
