import { useSession } from 'next-auth/client';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { AccountNav } from '@/app/account/AccountNav';
import { Page, PageContent } from '@/app/layout';
import { FieldSelect, useToastError, useToastSuccess } from '@/components';
import { AVAILABLE_LANGUAGES } from '@/constants/i18n';
import { useFetchUserSettingsQuery, useUpdateUserSettingsMutation } from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';

export const PageSettings = () => {
  const [session] = useSession();
  const { t } = useTranslation();
  const { colorModeValue } = useDarkMode();
  const { loading, data } = useFetchUserSettingsQuery({
    variables: {
      userId: session?.id,
    },
  });

  console.log(data);

  const generalInformationForm = useForm();

  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const [updateUser, { loading: updateLoading }] =
    useUpdateUserSettingsMutation({
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

  console.log(data);

  return (
    <Page nav={<AccountNav />}>
      <PageContent loading={loading}>
        <Heading size="md" mb="4">
          {t('account:settings.title')}
        </Heading>
        {data && (
          <Formiz
            id="account-form"
            onValidSubmit={submitGeneralInformation}
            connect={generalInformationForm}
            initialValues={data.user_settings_by_pk}
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
                <FieldSelect
                  name="langKey"
                  label={t('account:data.language.label')}
                  options={AVAILABLE_LANGUAGES.map(({ key }) => ({
                    label: t(`languages.${key}`),
                    value: key,
                  }))}
                />
                <Flex>
                  <Button
                    type="submit"
                    variant="@primary"
                    ms="auto"
                    isLoading={updateLoading}
                  >
                    {t('account:settings.actions.save')}
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
