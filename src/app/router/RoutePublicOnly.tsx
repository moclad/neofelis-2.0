import React, { useEffect } from 'react';

import { useSession } from 'next-auth/client';
import { useHistory } from 'react-router-dom';

import { RoutePublic } from './RoutePublic';

export const RoutePublicOnly = (props) => {
  const [session] = useSession();
  const history = useHistory();

  useEffect(() => {
    if (session) {
      history.replace(`/`);
    }
  }, [session, history]);

  return session ? null : <RoutePublic {...props} />;
};
