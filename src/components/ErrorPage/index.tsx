import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Logo } from '@/components/Logo';
import { Center, chakra, Heading, Stack, Text } from '@chakra-ui/react';

import { Illustration403 } from './Illustration403';
import { Illustration404 } from './Illustration404';
import { IllustrationDefault } from './IllustrationDefault';

const SupportedErrors: Record<'default' | number, { illustration?: ReactElement }> = {
  default: { illustration: <IllustrationDefault /> },
  403: { illustration: <Illustration403 /> },
  404: { illustration: <Illustration404 /> },
};

export const ErrorPage = ({ errorCode }: { errorCode?: number }) => {
  const { t } = useTranslation('components');
  const errorType = errorCode && Object.keys(SupportedErrors).some((c) => c === String(errorCode)) ? errorCode : 'default';
  const illustration = SupportedErrors[errorType].illustration ?? SupportedErrors.default.illustration ?? null;

  return (
    <Center flex="1" p="8">
      <Stack direction={{ base: 'column-reverse', md: 'row' }} align="center" spacing={4}>
        {illustration}
        <Stack textAlign={{ base: 'center', md: 'left' }} alignItems={{ base: 'center', md: 'flex-start' }}>
          <Link href="/" passHref>
            <Logo my={4} />
          </Link>
          <Heading>{t(`components:errorPage.${errorType}.title`) as string}</Heading>
          <Text>{t(`components:errorPage.${errorType}.description`)}</Text>
          {!!errorCode && (
            <Text color="gray.500" _dark={{ color: 'gray.400' }} fontSize="sm" mt={4}>
              {t(`components:errorPage.errorCode`, {
                code: errorCode,
              })}
            </Text>
          )}
        </Stack>
      </Stack>
    </Center>
  );
};
