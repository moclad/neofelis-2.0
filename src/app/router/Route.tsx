import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { Route as RouterRoute, useHistory, useLocation } from 'react-router-dom';

import { ErrorBoundary } from '@/errors';

export const Route = (props) => {
  const { data: session } = useSession();
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
