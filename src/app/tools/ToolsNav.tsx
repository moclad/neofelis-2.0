import React from 'react';
import { useTranslation } from 'react-i18next';
import { RiBankLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components/Nav';

export const ToolsNav = () => {
  const { t } = useTranslation('tools');
  const { pathname } = useLocation();
  const isActive = (to: string) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('nav.tools').toString()}>
        <NavItem as={Link} to="/tools" isActive={isActive('/tools')} icon={RiBankLine}>
          {t('nav.importer').toString()}
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
