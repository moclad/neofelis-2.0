import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

import { useResetPasswordInit } from '@/app/profile/profile.service';
import { FieldInput } from '@/components/FieldInput';
import { SlideIn } from '@/components/SlideIn';
import { useToastError } from '@/components/Toast';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useRtl } from '@/hooks/useRtl';
import { Alert, AlertDescription, AlertTitle, Box, Button, Center, Flex, Heading, ScaleFade } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations';

export const PageResetPasswordRequest = () => {
  const { rtlValue } = useRtl();
  const { t } = useTranslation('profile');
  const { colorModeValue } = useDarkMode();
  const resetPasswordInitForm = useForm();

  const toastError = useToastError();

  const [accountEmail, setAccountEmail] = useState('');

  const {
    mutate: resetPasswordInit,
    isLoading: resetPasswordLoading,
    isSuccess: resetPasswordSuccess,
  } = useResetPasswordInit({
    onMutate: () => {
      setAccountEmail(resetPasswordInitForm.values?.email);
    },
    onError: (error: any) => {
      const { title } = error?.response?.data || {};
      toastError({
        title: t('resetPassword.feedbacks.initError.title').toString(),
        description: title,
      });
    },
  });

  const submitResetPasswordInit = async (values: any) => {
    resetPasswordInit(values.email);
  };

  if (resetPasswordSuccess) {
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
            maxW="xl"
          >
            <Box fontSize="3rem">✉️</Box>
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {t('resetPassword.feedbacks.initSuccess.title').toString()}
            </AlertTitle>
            <AlertDescription>
              <Trans t={t} i18nKey="resetPassword.feedbacks.initSuccess.description" values={{ email: accountEmail }} />
            </AlertDescription>
          </Alert>
          <Center mt="8">
            <Button as={RouterLink} to="/login" variant="link" color={colorModeValue('brand.500', 'brand.300')}>
              {t('resetPassword.actions.goToLogin').toString()}
            </Button>
          </Center>
        </ScaleFade>
      </Center>
    );
  }

  return (
    <SlideIn>
      <Box p="2" pb="4rem" w="22rem" maxW="full" m="auto">
        <Box p="6" bg={colorModeValue('white', 'blackAlpha.400')} borderRadius="md" boxShadow="md">
          <Heading size="lg">{t('resetPassword.title').toString()}</Heading>
          <Formiz id="reset-password-init-form" onValidSubmit={submitResetPasswordInit} connect={resetPasswordInitForm}>
            <form noValidate onSubmit={resetPasswordInitForm.submit}>
              <FieldInput
                name="email"
                label={t('data.email.label')}
                my="6"
                helper={t('data.email.resetHelper').toString()}
                required={t('data.email.required').toString()}
                validations={[
                  {
                    rule: isEmail(),
                    message: t('data.email.invalid').toString(),
                  },
                ]}
              />
              <Flex>
                <Button leftIcon={rtlValue(<FiArrowLeft />, <FiArrowRight />)} as={RouterLink} to="/login" variant="link">
                  {t('resetPassword.actions.cancel').toString()}
                </Button>
                <Button type="submit" variant="@primary" ms="auto" isLoading={resetPasswordLoading}>
                  {t('resetPassword.actions.send').toString()}
                </Button>
              </Flex>
            </form>
          </Formiz>
        </Box>
      </Box>
    </SlideIn>
  );
};
