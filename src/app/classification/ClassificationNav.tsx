import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components';

export const ClassificationNav = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isActive = (to) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('classification:nav.title')}>
        <NavItem
          as={Link}
          to="/classification/tags"
          isActive={isActive('/classification/tags')}
          icon={FiUser}
        >
          {t('classification:nav.tags')}
        </NavItem>
        <NavItem
          as={Link}
          to="/classification/categories"
          isActive={isActive('/classification/categories')}
          icon={FiUser}
        >
          {t('classification:nav.categories')}
        </NavItem>
        <NavItem
          as={Link}
          to="/classification/groups"
          isActive={isActive('/classification/groups')}
          icon={FiUser}
        >
          {t('classification:nav.groups')}
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
