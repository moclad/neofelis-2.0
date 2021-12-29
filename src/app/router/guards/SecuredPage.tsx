import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ErrorBoundary } from '@/errors';

export const SecuredPage = ({ children }) => {
  const { data: session } = useSession();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate(`/login?redirect=${encodeURIComponent(pathname + search)}`);
    }
  }, [session, navigate, pathname, search]);

  return !session ? null : <ErrorBoundary>{children}</ErrorBoundary>;
};
