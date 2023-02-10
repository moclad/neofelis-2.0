import { useSession } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, Navigate } from 'react-router-dom';

import { useSearchParams } from '@/app/router';
import { Logo } from '@/components/Logo';
import { SlideIn } from '@/components/SlideIn';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react';

export const PageAuthError = () => {
  const { data: session } = useSession();
  const { t } = useTranslation('auth');
  const { colorModeValue } = useDarkMode();
  const { searchParams } = useSearchParams();

  if (session) {
    return <Navigate to="/" replace />;
  }

  const error = searchParams.get('error');

  return (
    <SlideIn>
      <Box px="2" py="4rem" w="30rem" maxW="full" m="auto">
        <Logo h="3rem" mb="8" mx="auto" />
        <Box p="6" bg={colorModeValue('white', 'blackAlpha.400')} borderRadius="md" boxShadow="md">
          <Center>
            <VStack spacing="4">
              <Heading as="h3" size="lg" mb="8">
                {t(`error.${error}.title`).toString()}
              </Heading>

              <Text fontSize="md">{t(`error.${error}.message`).toString()}</Text>
              <Text fontSize="md">{t(`error.${error}.extra`).toString()}</Text>
            </VStack>
          </Center>
        </Box>
        <Center mt="8">
          <Button as={RouterLink} to="/" variant="link">
            {t('login.verify.back').toString()}{' '}
            <Box as="strong" color={colorModeValue('brand.500', 'brand.300')} ms="2">
              Neofelis Home
            </Box>
          </Button>
        </Center>
      </Box>
    </SlideIn>
  );
};
