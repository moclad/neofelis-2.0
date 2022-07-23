import { useSession } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page, PageContent } from '@/app/layout';
import { useAccount } from '@/app/profile/profile.service';
import { ProfileNav } from '@/app/profile/ProfileNav';
import { FieldInput } from '@/components/FieldInput';
import { useToastError, useToastSuccess } from '@/components/Toast';
import { useUpdateUserMutation } from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations';

export const PageProfile = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  const { colorModeValue } = useDarkMode();
  const { loading, data } = useAccount();
  const generalInformationForm = useForm();

  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const [updateUser, { loading: updateLoading }] = useUpdateUserMutation({
    onError: (error) => {
      toastError({
        title: t('common:feedbacks.updateError.title'),
        description: error.message,
      });
    },
    onCompleted: () => {
      toastSuccess({
        title: t('common:feedbacks.updateSuccess.title'),
      });
    },
  });

  const submitGeneralInformation = async (values) => {
    const newData = {
      ...data.users_by_pk,
      ...values,
    };

    await updateUser({
      variables: {
        userId: session.id,
        changes: newData,
      },
    });
  };

  return (
    <Page nav={<ProfileNav />}>
      <PageContent loading={loading}>
        <Heading size="md" mb="4">
          {t('profile:profile.title')}
        </Heading>
        {data && (
          <Formiz
            id="profile-form"
            onValidSubmit={submitGeneralInformation}
            connect={generalInformationForm}
            initialValues={data.users_by_pk}
          >
            <form noValidate onSubmit={generalInformationForm.submit}>
              <Stack
                direction="column"
                bg={colorModeValue('white', 'blackAlpha.400')}
                p="6"
                borderRadius="lg"
                spacing="6"
                shadow="md"
              >
                <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
                  <FieldInput
                    name="name"
                    label={t('profile:data.firstname.label')}
                    required={t('profile:data.firstname.required') as string}
                  />
                </Stack>
                <FieldInput
                  name="email"
                  label={t('profile:data.email.label')}
                  required={t('profile:data.email.required') as string}
                  validations={[
                    {
                      rule: isEmail(),
                      message: t('profile:data.email.invalid'),
                    },
                  ]}
                />
                <Flex>
                  <Button
                    type="submit"
                    variant="@primary"
                    ms="auto"
                    isLoading={updateLoading}
                  >
                    {t('profile:profile.actions.save')}
                  </Button>
                </Flex>
              </Stack>
            </form>
          </Formiz>
        )}
      </PageContent>
    </Page>
  );
};
