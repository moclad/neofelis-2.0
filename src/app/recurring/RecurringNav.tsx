import React from 'react';
import { useTranslation } from 'react-i18next';
import { RiBankLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components/Nav';

export const RecurringNav = () => {
  const { t } = useTranslation('recurring');
  const { pathname } = useLocation();
  const isActive = (to: string) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('nav.recurring')}>
        <NavItem as={Link} to="/recurring" isActive={isActive('/recurring')} icon={RiBankLine}>
          {t('nav.transactions')}
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
