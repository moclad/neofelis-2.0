import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from '@/app/auth/AuthContext';
import '@/config';
import { useApollo } from '@/lib/apolloClient';
//import { mockServer } from '@/mocks/server';
import theme from '@/theme';

import { AVAILABLE_LANGUAGES } from './constants/i18n';

if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  //mockServer();
}

const queryClient = new QueryClient();

export const Providers = ({ pageProps, children }) => {
  const { session } = pageProps;

  const { i18n } = useTranslation();
  const apolloClient = useApollo(pageProps.initialApolloState, session?.token);

  return (
    <QueryClientProvider client={queryClient}>
      <NextAuthProvider session={session}>
        <ApolloProvider client={apolloClient}>
          <AuthProvider>
            <ChakraProvider
              theme={{
                ...theme,
                direction: RTL_LANGUAGES.includes(i18n.language)
                  ? 'rtl'
                  : 'ltr',
              }}
            >
              {children}
            </ChakraProvider>
          </AuthProvider>
        </ApolloProvider>
      </NextAuthProvider>
    </QueryClientProvider>
  );
};
