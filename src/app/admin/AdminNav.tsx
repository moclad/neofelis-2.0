import React from 'react';
import { useTranslation } from 'react-i18next';
import { GoBook } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components/Nav';

export const AdminNav = () => {
  const { t } = useTranslation('admin');
  const { pathname } = useLocation();
  const isActive = (to) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('nav.administration')}>
        <NavItem as={Link} to="/admin/api" isActive={isActive('/admin/api')} icon={GoBook}>
          {t('nav.apiDocumentation')}
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
