import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiSettings, FiUser } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components/Nav';

export const ProfileNav = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isActive = (to) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('profile:nav.myAccount')}>
        <NavItem
          as={Link}
          to="/profile/me"
          isActive={isActive('/profile/me')}
          icon={FiUser}
        >
          {t('profile:nav.profile')}
        </NavItem>
        <NavItem
          as={Link}
          to="/profile/settings"
          isActive={isActive('/profile/settings')}
          icon={FiSettings}
        >
          {t('profile:nav.settings')}
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
