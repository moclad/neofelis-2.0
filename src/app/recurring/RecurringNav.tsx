import React from 'react';
import { useTranslation } from 'react-i18next';
import { RiBankLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components';

export const RecurringNav = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isActive = (to) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('recurring:nav.recurring')}>
        <NavItem
          as={Link}
          to="/recurring/transactions"
          isActive={isActive('/recurring/transactions')}
          icon={RiBankLine}
        >
          {t('recurring:nav.transactions')}
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
