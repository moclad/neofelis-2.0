import React from 'react';

import { VStack } from '@chakra-ui/react';

import { PanelContainer } from './';

export default {
  title: 'App Layout/PanelContainer',
  component: PanelContainer,
  argTypes: {
    date: Date(),
  },
};

const Template = ({ date }) => {
  return (
    <VStack>
      <PanelContainer date={date} />
    </VStack>
  );
};

export const Default = Template.bind({});
Default.args = {
  date: Date(),
};
