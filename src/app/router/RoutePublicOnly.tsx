import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { RoutePublic } from './RoutePublic';

export const RoutePublicOnly = (props) => {
  const { data: session } = useSession();
  const history = useHistory();

  useEffect(() => {
    if (session) {
      history.replace(`/`);
    }
  }, [session, history]);

  return session ? null : <RoutePublic {...props} />;
};
