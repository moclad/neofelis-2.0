import { createClient } from 'graphql-ws';
import fetch from 'isomorphic-unfetch';
import React from 'react';

import { ApolloClient, HttpLink, split } from '@apollo/client';
import { InMemoryCache, NormalizedCacheObject } from '@apollo/client/cache';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';

const createHttpLink = (token: string) => {
  return new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080/v1/graphql',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
      'x-hasura-admin-secret': process.env.NEXT_PUBLIC_API_SECRET ?? '',
    },
    fetch,
  });
};

const createWSLink = (token: string) => {
  return new GraphQLWsLink(
    createClient({
      url: process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8080/v1/graphql',
      lazy: true,
      connectionParams: async () => {
        return {
          headers: {
            Authorization: `Bearer ${token}`,
            'x-hasura-admin-secret': process.env.NEXT_PUBLIC_API_SECRET,
          },
        };
      },
    })
  );
};

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = (token: string) => {
  const ssrMode = typeof window === 'undefined';

  const link = !ssrMode
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        },
        createWSLink(token),
        createHttpLink(token)
      )
    : createHttpLink(token);

  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache({ addTypename: false }),
  });
};

export const initializeApollo = (initialState = {}, token: string | unknown) => {
  const _apolloClient = apolloClient ?? createApolloClient(token as string);

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export function useApollo(initialState: any, token: string) {
  return React.useMemo(() => initializeApollo(initialState, token), [initialState, token]);
}
