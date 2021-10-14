import { useSession } from 'next-auth/client';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAccount } from '@/app/account/account.service';
import { ClassificationNav } from '@/app/classification/ClassificationNav';
import { Page, PageContent } from '@/app/layout';
import { FieldInput, useToastError, useToastSuccess } from '@/components';
import { useUpdateUserMutation } from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations';

export const PageGroups = () => {
  const [session] = useSession();
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
    <Page nav={<ClassificationNav />}>
      <PageContent loading={loading}>
        <Heading size="md" mb="4">
          {t('account:profile.title')}
        </Heading>
        {data && (
          <Formiz
            id="account-form"
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
                    label={t('account:data.firstname.label')}
                    required={t('account:data.firstname.required') as string}
                  />
                  <FieldInput
                    name="lastName"
                    label={t('account:data.lastname.label')}
                  />
                </Stack>
                <FieldInput
                  name="email"
                  label={t('account:data.email.label')}
                  required={t('account:data.email.required') as string}
                  validations={[
                    {
                      rule: isEmail(),
                      message: t('account:data.email.invalid'),
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
                    {t('account:profile.actions.save')}
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
