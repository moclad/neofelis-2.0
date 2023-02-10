import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useResetPasswordFinish } from '@/app/profile/profile.service';
import { useSearchParams } from '@/app/router';
import { FieldInput } from '@/components/FieldInput';
import { SlideIn } from '@/components/SlideIn';
import { useToastError, useToastSuccess } from '@/components/Toast';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isMaxLength, isMinLength } from '@formiz/validations';

export const PageResetPasswordConfirm = () => {
  const { t } = useTranslation('profile');
  const { colorModeValue } = useDarkMode();
  const { searchParams } = useSearchParams();

  const resetPasswordFinishForm = useForm();
  const navigate = useNavigate();

  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const { mutate: resetPasswordFinish, isLoading: resetPasswordLoading } = useResetPasswordFinish({
    onError: (error: any) => {
      const { title } = error?.response?.data || {};
      toastError({
        title: t('resetPassword.feedbacks.confirmError.title').toString(),
        description: title,
      });
    },
    onSuccess: () => {
      toastSuccess({
        title: t('resetPassword.feedbacks.confirmSuccess.title').toString(),
        description: t('resetPassword.feedbacks.confirmSuccess.description').toString(),
      });
      navigate('/login');
    },
  });

  const submitResetPasswordFinish = async (values: any) => {
    await resetPasswordFinish({
      key: searchParams.get('key') || '',
      newPassword: values.password,
    });
  };

  const passwordValidations = [
    {
      rule: isMinLength(4),
      message: t('data.password.tooShort', { min: 4 }),
    },
    {
      rule: isMaxLength(50),
      message: t('data.password.tooLong', { max: 50 }),
    },
  ];

  return (
    <SlideIn>
      <Box p="2" pb="4rem" w="22rem" maxW="full" m="auto">
        <Box p="6" bg={colorModeValue('white', 'blackAlpha.400')} borderRadius="md" boxShadow="md">
          <Heading size="lg" mb="4">
            {t('resetPassword.title')}
          </Heading>
          <Formiz id="reset-password-finish-form" onValidSubmit={submitResetPasswordFinish} connect={resetPasswordFinishForm}>
            <form noValidate onSubmit={resetPasswordFinishForm.submit}>
              <Stack spacing="4">
                <FieldInput
                  name="password"
                  type="password"
                  label={t('data.newPassword.label')}
                  required={t('data.newPassword.required') as string}
                  validations={passwordValidations}
                />
                <FieldInput
                  name="confirmPassword"
                  type="password"
                  label={t('data.confirmNewPassword.label')}
                  required={t('data.confirmNewPassword.required') as string}
                  validations={[
                    ...passwordValidations,
                    {
                      rule: (value) => value === resetPasswordFinishForm?.values?.password,
                      message: t('data.confirmNewPassword.notEqual'),
                      deps: [resetPasswordFinishForm?.values?.password],
                    },
                  ]}
                />
                <Flex>
                  <Button type="submit" variant="@primary" ms="auto" isLoading={resetPasswordLoading}>
                    {t('resetPassword.actions.reset')}
                  </Button>
                </Flex>
              </Stack>
            </form>
          </Formiz>
        </Box>
      </Box>
    </SlideIn>
  );
};
