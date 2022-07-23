import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';
import { RiArchiveDrawerLine, RiPantoneLine, RiPriceTag3Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components/Nav';

export const ClassificationNav = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isActive = (to) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('classification:nav.title')}>
        <NavItem
          as={Link}
          to="/classification/labels"
          isActive={isActive('/classification/labels')}
          icon={RiPriceTag3Line}
        >
          {t('classification:nav.labels')}
        </NavItem>
        <NavItem
          as={Link}
          to="/classification/categories"
          isActive={isActive('/classification/categories')}
          icon={RiPantoneLine}
        >
          {t('classification:nav.categories')}
        </NavItem>
        <NavItem
          as={Link}
          to="/classification/groups"
          isActive={isActive('/classification/groups')}
          icon={RiArchiveDrawerLine}
        >
          {t('classification:nav.groups')}
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
