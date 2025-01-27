import 'swagger-ui-react/swagger-ui.css';

import React from 'react';
import SwaggerUI from 'swagger-ui-react';

import { Page, PageContent } from '@/app/layout';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Box } from '@chakra-ui/react';

import { AdminNav } from '../AdminNav';

export const PageApiDocumentation = () => {
  const { colorModeValue } = useDarkMode();
  return (
    <Page containerSize="xl" nav={<AdminNav />}>
      <PageContent>
        <Box bg={colorModeValue('transparent', 'gray.200')} borderRadius="md">
          <SwaggerUI url="/open-api.json" />
        </Box>
      </PageContent>
    </Page>
  );
};
