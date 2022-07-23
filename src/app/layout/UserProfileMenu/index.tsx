import Avvvatars from 'avvvatars-react';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiCopy, FiLogOut, FiMoon, FiSun, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import appBuild from '@/../app-build.json';
import { Icon } from '@/components/Icons';
import { useDarkMode } from '@/hooks/useDarkMode';
import {
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useClipboard,
  useColorMode
} from '@chakra-ui/react';

import { useFetchUserQuery } from '../../../generated/graphql';

const AppVersion = ({ ...rest }) => {
  const { t } = useTranslation();
  const { colorModeValue } = useDarkMode();
  const { hasCopied, onCopy } = useClipboard(JSON.stringify(appBuild, null, 2));

  if (!appBuild?.version) {
    return null;
  }

  return (
    <>
      <MenuDivider />
      <Flex
        role="group"
        as="button"
        position="relative"
        w="full"
        textAlign="left"
        py="2"
        px="3"
        my="-2"
        fontSize="0.7rem"
        fontWeight="medium"
        color={colorModeValue('gray.500', 'gray.200')}
        outline="none"
        _hover={{ bg: colorModeValue('gray.50', 'gray.800') }}
        _focus={{ bg: colorModeValue('gray.50', 'gray.800') }}
        onClick={onCopy}
        {...rest}
      >
        <Flex
          position="absolute"
          align="center"
          top="0"
          insetStart="0"
          insetEnd="0"
          bottom="0"
          py="2"
          px="3"
          fontWeight="bold"
          bg={colorModeValue('gray.50', 'gray.800')}
          color={
            hasCopied ? colorModeValue('success.500', 'success.300') : undefined
          }
          transition="0.2s"
          _groupHover={{ d: 'flex' }}
        >
          <Icon icon={hasCopied ? FiCheck : FiCopy} me="2" fontSize="sm" />
          {hasCopied
            ? t('layout:accountMenu.version.copied')
            : t('layout:accountMenu.version.copy')}
        </Flex>
        <Text as="span" noOfLines={2}>
          {t('layout:accountMenu.version.label')}{' '}
          <strong>{appBuild?.display ?? appBuild?.version}</strong>
        </Text>
      </Flex>
    </>
  );
};

export const AccountMenu = ({ ...rest }) => {
  const { t } = useTranslation('layout');
  const { colorModeValue } = useDarkMode();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const { data: session } = useSession();

  const { loading, data } = useFetchUserQuery({
    variables: {
      userId: session?.id,
    },
  });

  return (
    <Menu placement="bottom-end" {...rest}>
      <MenuButton borderRadius="full" _focus={{ shadow: 'outline' }}>
        <Avvvatars
          value={
            !loading && `${data?.users_by_pk?.name ?? data?.users_by_pk?.email}`
          }
        />
      </MenuButton>
      <MenuList
        color={colorModeValue('gray.800', 'white')}
        maxW="12rem"
        overflow="hidden"
      >
        <MenuGroup title={data?.users_by_pk?.email} noOfLines={1}>
          <MenuItem
            as={Link}
            to="/profile"
            icon={<Icon icon={FiUser} fontSize="lg" color="gray.400" />}
          >
            {t('layout:accountMenu.myAccount')}
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem
          icon={
            <Icon
              icon={colorMode === 'dark' ? FiSun : FiMoon}
              fontSize="lg"
              color="gray.400"
            />
          }
          onClick={() => toggleColorMode()}
        >
          {colorMode === 'dark'
            ? t('layout:accountMenu.switchColorModeLight')
            : t('layout:accountMenu.switchColorModeDark')}
        </MenuItem>
        <MenuDivider />
        <MenuItem
          icon={<Icon icon={FiLogOut} fontSize="lg" color="gray.400" />}
          onClick={() => navigate('/logout')}
        >
          {t('layout:accountMenu.logout')}
        </MenuItem>
        <AppVersion />
      </MenuList>
    </Menu>
  );
};
