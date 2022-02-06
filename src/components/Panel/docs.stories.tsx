import React from 'react';

import { Layout } from '@/app/layout';
import { ContainerSizesEnum } from '@/constants/container-sizes';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button, Flex } from '@chakra-ui/react';

import { Panel, PanelContent } from './';

export default {
  title: 'App Layout/Panel',
  component: Panel,
  argTypes: {
    isFocusMode: false,
    hideContainer: false,
    allowConfiguration: true,
    containerSize: {
      options: Object.keys(ContainerSizesEnum),
      control: { type: 'select' },
    },
    containerTitle: '',
  },
  decorators: [
    (Story) => {
      const { colorModeValue } = useDarkMode();
      return (
        <Flex
          bg={colorModeValue('white', 'gray.800')}
          h="100vh"
          transform="scale(1)"
        >
          <Layout>
            <Story />
          </Layout>
        </Flex>
      );
    },
  ],
};

const Template = (args) => {
  const { allowConfiguration, isFocusMode, containerSize, hideContainer } =
    args;
  const { containerTitle } = args;

  return (
    <Panel
      isFocusMode={isFocusMode}
      containerSize={containerSize}
      hideContainer={hideContainer}
      allowConfiguration={allowConfiguration}
    >
      <PanelContent
        title={containerTitle}
        actions={[
          <Button key={1} variant="@primary">
            Action 1
          </Button>,
          <Button key={2}>Action 2</Button>,
          <Button key={3}>Action 3</Button>,
        ]}
      ></PanelContent>
    </Panel>
  );
};

export const Default = Template.bind({});
Default.args = {
  isFocusMode: false,
  hideContainer: false,
  allowConfiguration: true,
  containerSize: ContainerSizesEnum.full,
  containerTitle: 'Container Title',
};
