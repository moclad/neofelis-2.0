import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import React, { useContext } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import { useFocusMode } from '@/app/layout';
import { ContainerSizes } from '@/constants/container-sizes';
import { useDarkMode } from '@/hooks/useDarkMode';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FlexProps,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber
} from '@chakra-ui/react';

import { PanelStat } from '../PanelStat';

const PanelContainerContext = React.createContext(null);
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const PanelContainer = ({ children, ...rest }) => {
  const { hideContainer, containerSize } = useContext(PanelContainerContext);

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

const PanelConfigAction = () => {
  const { allowConfiguration } = useContext(PanelContainerContext);

  if (!allowConfiguration) return <></>;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Add Stat</MenuItem>
        <MenuItem>Add Plot</MenuItem>
      </MenuList>
    </Menu>
  );
};

interface PanelContentProps extends FlexProps {
  onBack?(): void;
  showBack?: boolean;
  loading?: boolean;
  title?: string;
  actions?: React.ReactNode[];
}

export const PanelContent = ({
  children,
  loading,
  title = null,
  actions = null,
  ...rest
}: PanelContentProps) => {
  const { colorModeValue } = useDarkMode();

  return (
    <Flex zIndex="1" direction="column" flex="1" py="4" {...rest}>
      <PanelContainer>
        <Skeleton h="100%" isLoaded={!loading}>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: '4', lg: '8' }}
            flex="1"
          >
            <Flex direction="column" flex="1" minW="0">
              <HStack mb="4">
                {title && (
                  <Box flex="1">
                    <Heading size="md">{title}</Heading>
                  </Box>
                )}
                {actions}
                <PanelConfigAction />
              </HStack>
              <ResponsiveReactGridLayout
                className="layout"
                cols={{ lg: 20, md: 16, sm: 12, xs: 8, xxs: 4 }}
                rowHeight={20}
                autoSize={true}
                //layouts={this.state.layouts}
                onLayoutChange={(layout, layouts) => {
                  // this.onLayoutChange(layout, layouts)
                  console.log(layout);
                  console.log(layouts);
                }}
              >
                <PanelStat
                  key="3"
                  label="DB"
                  value={1555.9}
                  arrowType="decrease"
                  helperText="Test"
                  dataGrid={{
                    w: 4,
                    h: 6,
                    x: 0,
                    y: 0,
                  }}
                />
                <Stat
                  key={'4'}
                  bg={colorModeValue('white', 'gray.700')}
                  shadow="lg"
                  rounded="md"
                  data-grid={{
                    w: 4,
                    h: 6,
                    x: 0,
                    y: 6,
                  }}
                >
                  <StatLabel>Beno</StatLabel>
                  <StatNumber>1500</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Test
                  </StatHelpText>
                </Stat>
              </ResponsiveReactGridLayout>
            </Flex>
          </Stack>
        </Skeleton>
      </PanelContainer>
      <Box w="full" h="0" pb="safe-bottom" />
    </Flex>
  );
};

interface PanelProps extends FlexProps {
  isFocusMode?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  hideContainer?: boolean;
  nav?: React.ReactNode;
  allowConfiguration?: boolean;
}

export const Panel = ({
  isFocusMode = false,
  hideContainer,
  containerSize = 'full',
  allowConfiguration = true,
  nav = null,
  ...rest
}: PanelProps) => {
  useFocusMode(isFocusMode);
  return (
    <PanelContainerContext.Provider
      value={{
        nav,
        hideContainer,
        containerSize,
        allowConfiguration,
      }}
    >
      <Flex direction="column" flex="1" position="relative" {...rest} />
    </PanelContainerContext.Provider>
  );
};
