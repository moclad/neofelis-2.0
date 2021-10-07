import React, { FC, useEffect, useState } from 'react';

import { Flex, Progress } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/client';
import dynamic from 'next/dynamic';

import { Viewport } from '@/components';

const Loading = () => (
  <Viewport>
    <Flex flex="1" align="flex-start">
      <Progress
        w="full"
        h="0.4rem"
        bg="gray.100"
        colorScheme="brand"
        isIndeterminate
      />
    </Flex>
  </Viewport>
);

const AppComponent = dynamic(() => import('@/app/App').then((mod) => mod.App), {
  ssr: true,
  loading: () => <Loading />,
});

const Index: FC<any> = ({ session }) => {
  console.log('app.tsx', session);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading ? <Loading /> : <AppComponent />;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  console.log('app.serverside');

  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
};

export default Index;
