import { useSession } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page, PageContent } from '@/app/layout';
import { ProfileNav } from '@/app/profile/ProfileNav';
import { FieldSelect } from '@/components/FieldSelect';
import { useToastError, useToastSuccess } from '@/components/Toast';
import { AVAILABLE_LANGUAGES } from '@/constants/i18n';
import { useFetchUserSettingsQuery, useUpdateUserSettingsMutation } from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';

export const PageSettings = () => {
  const { data: session } = useSession();
  const { t } = useTranslation(['profile', 'common']);
  const { colorModeValue } = useDarkMode();
  const { loading, data } = useFetchUserSettingsQuery({
    variables: {
      userId: session?.id,
    },
  });

  const generalInformationForm = useForm();

  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const [updateUser, { loading: updateLoading }] = useUpdateUserSettingsMutation({
    onError: (error) => {
      toastError({
        title: t('feedbacks.updateError.title').toString(),
        description: error.message,
      });
    },
    onCompleted: () => {
      toastSuccess({
        title: t('feedbacks.updateSuccess.title').toString(),
      });
    },
  });

  const submitGeneralInformation = async (values: any) => {
    const newData = {
      ...data.user_settings_by_pk,
      ...values,
      user_id: session.id,
    };

    await updateUser({
      variables: {
        object: newData,
      },
    });
  };

  return (
    <Page nav={<ProfileNav />}>
      <PageContent loading={loading}>
        <Heading size="md" mb="4">
          {t('settings.title').toString()}
        </Heading>
        {data && (
          <Formiz id="account-form" onValidSubmit={submitGeneralInformation} connect={generalInformationForm} initialValues={data.user_settings_by_pk}>
            <form noValidate onSubmit={generalInformationForm.submit}>
              <Stack direction="column" bg={colorModeValue('white', 'blackAlpha.400')} p="6" borderRadius="lg" spacing="6" shadow="md">
                <FieldSelect
                  name="langKey"
                  label={t('data.language.label').toString()}
                  options={AVAILABLE_LANGUAGES.map(({ key }) => ({
                    label: t(`languages.${key}`),
                    value: key,
                  }))}
                />
                <Flex>
                  <Button type="submit" variant="@primary" ms="auto" isLoading={updateLoading}>
                    {t('settings.actions.save').toString()}
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
