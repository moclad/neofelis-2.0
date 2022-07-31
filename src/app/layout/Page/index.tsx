import React, { useContext } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import useMeasure from 'react-use-measure';

import { useFocusMode } from '@/app/layout';
import { ContainerSizes } from '@/constants/container-sizes';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useRtl } from '@/hooks/useRtl';
import {
  Box,
  Flex,
  FlexProps,
  Heading,
  HStack,
  IconButton,
  Skeleton,
  Stack
} from '@chakra-ui/react';

const PageContext = React.createContext(null);

const PageContainer = ({ children, ...rest }) => {
  const { hideContainer, containerSize } = useContext(PageContext);

  if (hideContainer) return children;

  return (
    <Flex
      direction="column"
      flex="1"
      w="full"
      px="6"
      mx="auto"
      maxW={ContainerSizes[containerSize]}
      {...rest}
    >
      {children}
    </Flex>
  );
};

interface PageTopBarProps extends FlexProps {
  onBack?(): void;
  showBack?: boolean;
}

export const PageTopBar = ({
  children,
  onBack = () => undefined,
  showBack = false,
  ...rest
}: PageTopBarProps) => {
  const { isFocusMode } = useLayoutContext();
  const theme = useTheme();
  const [ref, { height }] = useMeasure();

  const { rtlValue } = useRtl();
  const { colorModeValue } = useDarkMode();
  return (
    <>
      {isFixed && <Box h={`${height}px`} />}
      <Flex
        zIndex="2"
        direction="column"
        pt="4"
        pb="4"
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.05)"
        bg="white"
        ref={ref}
        _dark={{ bg: 'gray.900' }}
        {...(isFixed
          ? {
              top: !isFocusMode ? theme.layout.topBar.height : '0',
              position: 'fixed',
              right: '0',
              left: '0',
            }
          : {})}
        {...rest}
      >
        <Box w="full" h="0" pb="safe-top" />
        <PageContainer>
          <HStack spacing="4">
            {showBack && (
              <Box ms={{ base: 0, lg: '-3.5rem' }}>
                <IconButton
                  aria-label="Go Back"
                  icon={rtlValue(<FiArrowLeft />, <FiArrowRight />)}
                  variant="ghost"
                  onClick={() => onBack()}
                />
              </Box>
            )}
            <Box flex="1">{children}</Box>
          </HStack>
        </PageContainer>
      </Flex>
    </>
  );
};

interface PageContentProps extends FlexProps {
  onBack?(): void;
  showBack?: boolean;
  loading?: boolean;
  title?: string;
  actions?: React.ReactNode[];
}

export const PageContent = ({
  children,
  loading,
  title = null,
  actions = null,
  ...rest
}: PageContentProps) => {
  const { nav } = useContext(PageContext);

  return (
    <Flex zIndex="1" direction="column" flex="1" py="4" {...rest}>
      <PageContainer>
        <Skeleton h="100%" isLoaded={!loading}>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: '4', lg: '8' }}
            flex="1"
          >
            {nav && (
              <Flex
                direction="column"
                minW="0"
                w={{ base: 'full', lg: '12rem' }}
              >
                {nav}
              </Flex>
            )}
            <Flex direction="column" flex="1" minW="0">
              <HStack mb="4">
                {title && (
                  <Box flex="1">
                    <Heading size="md">{title}</Heading>
                  </Box>
                )}
                {actions}
              </HStack>
              {children}
            </Flex>
          </Stack>
        </Skeleton>
      </PageContainer>
      <Box w="full" h="0" pb="safe-bottom" />
    </Flex>
  );
};

export const PageBottomBar = ({ children, ...rest }: FlexProps) => {
  const [ref, { height }] = useMeasure();

  return (
    <>
      <Box h={`${height}px`} />
      <Flex
        zIndex="3"
        ref={ref}
        direction="column"
        mt="auto"
        position="fixed"
        bg={colorModeValue('white', 'gray.900')}
        bottom="0"
        insetStart="0"
        insetEnd="0"
        py="2"
        boxShadow="0 -4px 20px rgba(0, 0, 0, 0.05)"
        {...rest}
      >
        <PageContainer>{children}</PageContainer>
        <Box w="full" h="0" pb="safe-bottom" />
      </Flex>
    </>
  );
};

interface PageProps extends FlexProps {
  isFocusMode?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  hideContainer?: boolean;
  nav?: React.ReactNode;
}

export const Page = ({
  isFocusMode = false,
  hideContainer,
  containerSize = 'xl',
  nav = null,
  ...rest
}: PageProps) => {
  useFocusMode(isFocusMode);
  return (
    <PageContext.Provider
      value={{
        nav,
        hideContainer,
        containerSize,
      }}
    >
      <Flex direction="column" flex="1" position="relative" {...rest} />
    </PageContext.Provider>
  );
};
