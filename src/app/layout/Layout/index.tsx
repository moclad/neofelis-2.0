import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { LoginModalInterceptor } from '@/app/auth/LoginModalInterceptor';
import { LayoutContext, TopBar } from '@/app/layout';
import { Viewport } from '@/components';
import { Flex, useDisclosure } from '@chakra-ui/react';

export const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const {
    isOpen: navIsOpen,
    onClose: navOnClose,
    onOpen: navOnOpen,
  } = useDisclosure();
  const { data: session } = useSession()
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LayoutContext.Provider
      value={{ isFocusMode, setIsFocusMode, navIsOpen, navOnClose, navOnOpen }}
    >
      <Viewport>
        {session && !isFocusMode && <TopBar />}
        <Flex flex="1" direction="column">
          {children}
        </Flex>
        <LoginModalInterceptor />
      </Viewport>
    </LayoutContext.Provider>
  );
};
