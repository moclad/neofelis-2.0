import React from 'react';
import { useTranslation } from 'react-i18next';
import { RiArchiveDrawerLine, RiPantoneLine, RiPriceTag3Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components/Nav';

export const ClassificationNav = () => {
  const { t } = useTranslation('classification');
  const { pathname } = useLocation();
  const isActive = (to: string) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('nav.title').toString()}>
        <NavItem as={Link} to="/classification/labels" isActive={isActive('/classification/labels')} icon={RiPriceTag3Line}>
          {t('nav.labels').toString()}
        </NavItem>
        <NavItem as={Link} to="/classification/categories" isActive={isActive('/classification/categories')} icon={RiPantoneLine}>
          {t('nav.categories').toString()}
        </NavItem>
        <NavItem as={Link} to="/classification/groups" isActive={isActive('/classification/groups')} icon={RiArchiveDrawerLine}>
          {t('nav.groups').toString()}
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
