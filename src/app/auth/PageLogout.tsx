import { signOut } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

import { Center, Spinner } from '@chakra-ui/react';

export const PageLogout = () => {
  const history = useHistory();
  const queryCache = useQueryClient();

  useEffect(() => {
    signOut({ callbackUrl: 'http://localhost:3000/app/login' });
    queryCache.clear();
    history.push('/');
  }, [queryCache, history]);

  return (
    <Center flex="1">
      <Spinner />
    </Center>
  );
};
