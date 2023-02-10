import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { Loader } from '@/app/layout';
import { APP_BASENAME } from '@/constants/routing';
import { Center } from '@chakra-ui/react';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(`/${APP_BASENAME}`);
  }, [router]);

  return (
    <Center flex="1">
      <Loader />
    </Center>
  );
};
export default Index;
