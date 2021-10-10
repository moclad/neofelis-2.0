import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from '@/app/auth/AuthContext';
import '@/config';
//import { mockServer } from '@/mocks/server';
import theme from '@/theme';

import { AVAILABLE_LANGUAGES } from './constants/i18n';

if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  //mockServer();
}

const queryClient = new QueryClient();

export const Providers = ({ session, children }) => {
  const { i18n } = useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <NextAuthProvider session={session}>
        <AuthProvider>
          <ChakraProvider
              ...theme,
            theme={{
            direction:
              AVAILABLE_LANGUAGES.find(({ key }) => key === i18n.language)
                ?.dir ?? 'ltr',
            }}
          >
          </ChakraProvider>
            {children}
      </NextAuthProvider>
        </AuthProvider>
    </QueryClientProvider>
  );
};
