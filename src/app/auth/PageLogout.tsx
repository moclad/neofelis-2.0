import { signOut } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Center, Spinner } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';

export const PageLogout = () => {
  const navigate = useNavigate();
  const queryCache = useQueryClient();

  useEffect(() => {
    signOut({ callbackUrl: 'http://localhost:3000/app/login' });
    queryCache.clear();
    navigate('/');
  }, [queryCache, navigate]);

  return (
    <Center flex="1">
      <Spinner />
    </Center>
  );
};
