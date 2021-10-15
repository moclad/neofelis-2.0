import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { useResetPasswordFinish } from '@/app/profile/profile.service';
import { useSearchParams } from '@/app/router';
import { FieldInput, SlideIn, useToastError, useToastSuccess } from '@/components';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isMaxLength, isMinLength } from '@formiz/validations';

export const PageResetPasswordConfirm = () => {
  const { t } = useTranslation();
  const { colorModeValue } = useDarkMode();
  const { searchParams } = useSearchParams();

  const resetPasswordFinishForm = useForm();
  const history = useHistory();

  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const { mutate: resetPasswordFinish, isLoading: resetPasswordLoading } =
    useResetPasswordFinish({
      onError: (error: any) => {
        const { title } = error?.response?.data || {};
        toastError({
          title: t('profile:resetPassword.feedbacks.confirmError.title'),
          description: title,
        });
      },
      onSuccess: () => {
        toastSuccess({
          title: t('profile:resetPassword.feedbacks.confirmSuccess.title'),
          description: t(
            'profile:resetPassword.feedbacks.confirmSuccess.description'
          ),
        });
        history.push('/login');
      },
    });

  const submitResetPasswordFinish = async (values) => {
    await resetPasswordFinish({
      key: searchParams.get('key'),
      newPassword: values.password,
    });
  };

  const passwordValidations = [
    {
      rule: isMinLength(4),
      message: t('profile:data.password.tooShort', { min: 4 }),
    },
    {
      rule: isMaxLength(50),
      message: t('profile:data.password.tooLong', { max: 50 }),
    },
  ];

  return (
    <SlideIn>
      <Box p="2" pb="4rem" w="22rem" maxW="full" m="auto">
        <Box
          p="6"
          bg={colorModeValue('white', 'blackAlpha.400')}
          borderRadius="md"
          boxShadow="md"
        >
          <Heading size="lg" mb="4">
            {t('profile:resetPassword.title')}
          </Heading>
          <Formiz
            id="reset-password-finish-form"
            onValidSubmit={submitResetPasswordFinish}
            connect={resetPasswordFinishForm}
          >
            <form noValidate onSubmit={resetPasswordFinishForm.submit}>
              <Stack spacing="4">
                <FieldInput
                  name="password"
                  type="password"
                  label={t('profile:data.newPassword.label')}
                  required={t('profile:data.newPassword.required') as string}
                  validations={passwordValidations}
                />
                <FieldInput
                  name="confirmPassword"
                  type="password"
                  label={t('profile:data.confirmNewPassword.label')}
                  required={
                    t('profile:data.confirmNewPassword.required') as string
                  }
                  validations={[
                    ...passwordValidations,
                    {
                      rule: (value) =>
                        value === resetPasswordFinishForm?.values?.password,
                      message: t('profile:data.confirmNewPassword.notEqual'),
                      deps: [resetPasswordFinishForm?.values?.password],
                    },
                  ]}
                />
                <Flex>
                  <Button
                    type="submit"
                    variant="@primary"
                    ms="auto"
                    isLoading={resetPasswordLoading}
                  >
                    {t('profile:resetPassword.actions.reset')}
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
