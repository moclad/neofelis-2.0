import React from 'react';

import { MainMenu, useLayoutContext } from '@/app/layout';
import { Logo } from '@/components';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react';

export const NavDrawer = ({ ...rest }) => {
  const { navIsOpen, navOnClose } = useLayoutContext();
  return (
    <Drawer
      isOpen={navIsOpen}
      placement="left"
      onClose={() => navOnClose?.()}
      {...rest}
    >
      <DrawerOverlay>
        <DrawerContent
          bg="gray.800"
          color="white"
          pt="safe-top"
          pb="safe-bottom"
        >
          <DrawerCloseButton mt="safe-top" />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>
          <DrawerBody p="2">
            <MainMenu direction="column" />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
