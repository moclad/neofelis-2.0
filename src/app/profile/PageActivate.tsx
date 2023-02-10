import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useActivateAccount } from '@/app/profile/profile.service';
import { useSearchParams } from '@/app/router';
import { Box, HStack, Spinner, Text } from '@chakra-ui/react';

export const PageActivate = () => {
  const { t } = useTranslation('profile');
  const { mutate: activateAccount, isError, isSuccess, isLoading } = useActivateAccount();
  const { searchParams } = useSearchParams();

  useEffect(() => {
    activateAccount({ key: searchParams.get('key') });
  }, [activateAccount, searchParams]);

  return (
    <Box p="4" maxW="20rem" m="auto">
      {isLoading && (
        <HStack>
          <Spinner size="sm" me="2" />
          <Text>{t('profile:activate.feedbacks.activationLoading.title')}</Text>
        </HStack>
      )}
      {isSuccess && t('profile:activate.feedbacks.activationSuccess.title')}
      {isError && t('profile:activate.feedbacks.activationError.title')}
    </Box>
  );
};
