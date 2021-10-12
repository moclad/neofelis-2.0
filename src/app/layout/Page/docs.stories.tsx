import React, { useState } from 'react';
import { FiHexagon, FiLock, FiUser } from 'react-icons/fi';

import { Layout } from '@/app/layout';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button, Flex } from '@chakra-ui/react';

import { Nav, NavGroup, NavItem } from '../../../components';
import { Page, PageBottomBar, PageContent, PageTopBar } from './index';

export default {
  title: 'App Layout/Page',
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

export const Default = () => (
  <Page>
    <PageTopBar>Page Top Bar</PageTopBar>
    <PageContent>Page Content</PageContent>
    <PageBottomBar>Page Bottom Bar</PageBottomBar>
  </Page>
);

export const FocusAndBackButton = () => (
  <Page isFocusMode>
    <PageTopBar showBack onBack={() => alert('Back')}>
      Page Top Bar
    </PageTopBar>
    <PageContent>Page Content</PageContent>
    <PageBottomBar>Page Bottom Bar</PageBottomBar>
  </Page>
);

export const ContainerTitleAndActions = () => (
  <Page>
    <PageTopBar>Page Top Bar</PageTopBar>
    <PageContent
      title="Title"
      actions={[
        <Button variant="@primary">Action 1</Button>,
        <Button>Action 2</Button>,
        <Button>Action 3</Button>,
      ]}
    >
      Page Content
    </PageContent>
    <PageBottomBar>Page Bottom Bar</PageBottomBar>
  </Page>
);

const DefaultNav = () => {
  const [active, setActive] = useState(0);
  return (
    <Nav>
      <NavGroup title="My Account">
        <NavItem
          as="a"
          icon={FiUser}
          isActive={active === 0}
          onClick={() => setActive(0)}
        >
          Profile
        </NavItem>
        <NavItem
          as="a"
          icon={FiLock}
          isActive={active === 1}
          onClick={() => setActive(1)}
        >
          Password
        </NavItem>
      </NavGroup>
      <NavGroup title="Other">
        <NavItem
          as="a"
          icon={FiHexagon}
          isActive={active === 2}
          onClick={() => setActive(2)}
        >
          Stuff 1
        </NavItem>
        <NavItem
          as="a"
          icon={FiHexagon}
          isActive={active === 3}
          onClick={() => setActive(3)}
        >
          Stuff 2
        </NavItem>
      </NavGroup>
    </Nav>
  );
};

export const WithNavigationBar = () => (
  <Page nav={<DefaultNav />}>
    <PageContent
      title="Title"
      actions={[
        <Button variant="@primary">Action 1</Button>,
        <Button>Action 2</Button>,
        <Button>Action 3</Button>,
      ]}
    >
      Page Content
    </PageContent>
  </Page>
);

export const ContainerSizeSmall = () => (
  <Page containerSize="sm">
    <PageTopBar>Page Top Bar</PageTopBar>
    <PageContent>Page Content</PageContent>
    <PageBottomBar>Page Bottom Bar</PageBottomBar>
  </Page>
);

export const ContainerSizeMedium = () => (
  <Page containerSize="md">
    <PageTopBar>Page Top Bar</PageTopBar>
    <PageContent>Page Content</PageContent>
    <PageBottomBar>Page Bottom Bar</PageBottomBar>
  </Page>
);

export const ContainerSizeLarge = () => (
  <Page containerSize="lg">
    <PageTopBar>Page Top Bar</PageTopBar>
    <PageContent>Page Content</PageContent>
    <PageBottomBar>Page Bottom Bar</PageBottomBar>
  </Page>
);

export const ContainerSizeFull = () => (
  <Page containerSize="full">
    <PageTopBar>Page Top Bar</PageTopBar>
    <PageContent>Page Content</PageContent>
    <PageBottomBar>Page Bottom Bar</PageBottomBar>
  </Page>
);

export const NoContainer = () => (
  <Page hideContainer>
    <PageTopBar>Page Top Bar</PageTopBar>
    <PageContent>Page Content</PageContent>
    <PageBottomBar>Page Bottom Bar</PageBottomBar>
  </Page>
);

export const ContentLoading = () => (
  <Page>
    <PageTopBar>Page Top Bar</PageTopBar>
    <PageContent loading={true}>Page Content</PageContent>
    <PageBottomBar>Page Bottom Bar</PageBottomBar>
  </Page>
);
