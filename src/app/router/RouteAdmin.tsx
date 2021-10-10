import React from 'react';

import { Error403 } from '@/errors';

import { Route } from './Route';

export const RouteAdmin = (props) => {
  const isLoading = false;
  const isAdmin = true;

  if (isLoading) {
    return null;
  }

  if (!isAdmin) {
    return <Error403 />;
  }

  return <Route {...props} />;
};
