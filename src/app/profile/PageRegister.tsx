import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { useCreateAccount } from '@/app/profile/profile.service';
import { FieldInput, FieldSelect, SlideIn, useToastError } from '@/components';
import { AVAILABLE_LANGUAGES } from '@/constants/i18n';
import { useDarkMode } from '@/hooks/useDarkMode';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  ScaleFade,
  Stack
} from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isEmail, isMaxLength, isMinLength, isPattern } from '@formiz/validations';

export const PageRegister = () => {
  const { t, i18n } = useTranslation();
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
        title: t('profile:register.feedbacks.registrationError.title'),
        description: title,
      });

      if (errorKey === 'userexists') {
        form.invalidateFields({
          login: t('profile:data.login.alreadyUsed'),
        });
      }

      if (errorKey === 'emailexists') {
        form.invalidateFields({ email: t('profile:data.email.alreadyUsed') });
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
              {t('profile:register.feedbacks.registrationSuccess.title')}
            </AlertTitle>
            <AlertDescription>
              <Trans
                t={t}
                i18nKey="profile:register.feedbacks.registrationSuccess.description"
                values={{ email: accountEmail }}
              />
            </AlertDescription>
          </Alert>
          <Center mt="8">
            <Button
              as={RouterLink}
              to="/login"
              variant="link"
              color={colorModeValue('brand.500', 'brand.300')}
            >
              {t('profile:register.actions.goToLogin')}
            </Button>
          </Center>
        </ScaleFade>
      </Center>
    );
  }

  return (
    <SlideIn>
      <Box p="2" pb="4rem" w="22rem" maxW="full" m="auto">
        <Formiz
          id="register-form"
          autoForm
          onValidSubmit={createUser}
          connect={form}
        >
          <Box
            p="6"
            bg={colorModeValue('white', 'blackAlpha.400')}
            borderRadius="md"
            boxShadow="md"
          >
            <Heading size="lg" mb="4">
              {t('profile:register.title')}
            </Heading>
            <Stack spacing="4">
              <FieldSelect
                name="langKey"
                label={t('profile:data.language.label')}
                options={AVAILABLE_LANGUAGES.map(({ key }) => ({
                  label: t(`languages.${key}`),
                  value: key,
                }))}
                defaultValue={i18n.language}
              />
              <FieldInput
                name="login"
                label={t('profile:data.login.label')}
                required={t('profile:data.login.required') as string}
                validations={[
                  {
                    rule: isMinLength(2),
                    message: t('profile:data.login.tooShort', { min: 2 }),
                  },
                  {
                    rule: isMaxLength(50),
                    message: t('profile:data.login.tooLong', { max: 50 }),
                  },
                  {
                    rule: isPattern(
                      '^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'
                    ),
                    message: t('profile:data.login.invalid'),
                  },
                ]}
              />
              <FieldInput
                name="email"
                label={t('profile:data.email.label')}
                required={t('profile:data.email.required') as string}
                validations={[
                  {
                    rule: isMinLength(5),
                    message: t('profile:data.email.tooShort', { min: 5 }),
                  },
                  {
                    rule: isMaxLength(254),
                    message: t('profile:data.email.tooLong', { min: 254 }),
                  },
                  {
                    rule: isEmail(),
                    message: t('profile:data.email.invalid'),
                  },
                ]}
              />
              <FieldInput
                name="password"
                type="password"
                label={t('profile:data.password.label')}
                required={t('profile:data.password.required') as string}
                validations={[
                  {
                    rule: isMinLength(4),
                    message: t('profile:data.password.tooShort', { min: 4 }),
                  },
                  {
                    rule: isMaxLength(50),
                    message: t('profile:data.password.tooLong', { min: 50 }),
                  },
                ]}
              />
              <Flex>
                <Button
                  isLoading={isLoading}
                  isDisabled={form.isSubmitted && !form.isValid}
                  type="submit"
                  variant="@primary"
                  ms="auto"
                >
                  {t('profile:register.actions.create')}
                </Button>
              </Flex>
            </Stack>
          </Box>
          <Center mt="8">
            <Button as={RouterLink} to="/login" variant="link">
              {t('profile:register.actions.alreadyHaveAnAccount')}{' '}
              <Box
                as="strong"
                color={colorModeValue('brand.500', 'brand.300')}
                ms="2"
              >
                {t('profile:register.actions.login')}
              </Box>
            </Button>
          </Center>
        </Formiz>
      </Box>
    </SlideIn>
  );
};
