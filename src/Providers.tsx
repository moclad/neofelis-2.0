import '@/config';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from '@/app/auth/AuthContext';
import { useApollo } from '@/lib/apolloClient';
import theme from '@/theme';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import { AVAILABLE_LANGUAGES } from './constants/i18n';

const queryClient = new QueryClient();

export const Providers = ({ pageProps, children }) => {
  const { i18n } = useTranslation();
  const apolloClient = useApollo(
    pageProps?.initialApolloState,
    pageProps?.session?.token
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps?.session}>
        <ApolloProvider client={apolloClient}>
          <AuthProvider>
            <ChakraProvider
              theme={{
                ...theme,
                direction:
                  AVAILABLE_LANGUAGES.find(({ key }) => key === i18n.language)
                    ?.dir ?? 'ltr',
              }}
            >
              {children}
            </ChakraProvider>
          </AuthProvider>
        </ApolloProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};
