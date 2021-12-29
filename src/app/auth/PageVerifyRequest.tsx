import { useSession } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, Navigate } from 'react-router-dom';

import { Logo, SlideIn } from '@/components';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react';

export const PageVerifyRequest = () => {
  const { t } = useTranslation();
  const { colorModeValue } = useDarkMode();

  const { data: session } = useSession();

  if (session) {
    return <Navigate to="/" replace />;
  }

  return (
    <SlideIn>
      <Box px="2" py="4rem" w="30rem" maxW="full" m="auto">
        <Logo h="3rem" mb="8" mx="auto" />
        <Box
          p="6"
          bg={colorModeValue('white', 'blackAlpha.400')}
          borderRadius="md"
          boxShadow="md"
        >
          <Center>
            <VStack>
              <Heading as="h3" size="lg" mb="8">
                {t('auth:login.verify.title')}
              </Heading>

              <Text fontSize="md">{t('auth:login.verify.message')}</Text>
            </VStack>
          </Center>
        </Box>
        <Center mt="8">
          <Button as={RouterLink} to="/" variant="link">
            {t('auth:login.verify.closeMessage')}{' '}
            <Box
              as="strong"
              color={colorModeValue('brand.500', 'brand.300')}
              ms="2"
            >
              Neofelis Home
            </Box>
          </Button>
        </Center>
      </Box>
    </SlideIn>
  );
};
