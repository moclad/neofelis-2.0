import React, { useEffect } from 'react';

import { Center, Spinner } from '@chakra-ui/react';
import { signOut } from 'next-auth/client';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

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
