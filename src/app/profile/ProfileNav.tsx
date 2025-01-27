import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiSettings, FiUser } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components/Nav';

export const ProfileNav = () => {
  const { t } = useTranslation('profile');
  const { pathname } = useLocation();
  const isActive = (to: string) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('nav.myAccount')}>
        <NavItem as={Link} to="/profile/me" isActive={isActive('/profile/me')} icon={FiUser}>
          {t('nav.profile')}
        </NavItem>
        <NavItem as={Link} to="/profile/settings" isActive={isActive('/profile/settings')} icon={FiSettings}>
          {t('nav.settings')}
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
