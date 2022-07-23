import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import { Viewport } from '@/components/Viewport';
import { APP_BASENAME } from '@/constants/routing';
import { Flex, Progress } from '@chakra-ui/react';

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

const AppComponent = dynamic<React.ReactNode>(
  () => import('@/app/App').then((mod) => mod.App),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading ? <Loading /> : <AppComponent />;
};
export default App;

// Allows easy url change within the next.config.js
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          app: APP_BASENAME,
        },
      },
    ],
    fallback: false,
  };
};

// Needed for getStaticPaths
export const getStaticProps: GetStaticProps = () => ({
  props: {},
});
