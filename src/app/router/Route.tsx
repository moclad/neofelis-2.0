import React, { useEffect } from 'react';

import { useSession } from 'next-auth/client';
import {
  Route as RouterRoute,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { ErrorBoundary } from '@/errors';

export const Route = (props) => {
  const [session] = useSession();
  const { pathname, search } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!session) {
      history.replace(
        `/login?redirect=${encodeURIComponent(pathname + search)}`
      );
    }
  }, [session, history, pathname, search]);

  return !session ? null : (
    <ErrorBoundary>
      <RouterRoute {...props} />
    </ErrorBoundary>
  );
};
