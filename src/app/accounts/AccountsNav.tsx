import React from 'react';
import { useTranslation } from 'react-i18next';
import { RiBankLine, RiExchangeLine, RiRefund2Line, RiShoppingCartLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavGroup, NavItem } from '@/components/Nav';

export const AccountsNav = () => {
  const { t } = useTranslation('accounts');
  const { pathname } = useLocation();
  const isActive = (to: string) => pathname.startsWith(to);
  return (
    <Nav>
      <NavGroup title={t('nav.title')}>
        <NavItem as={Link} to="/accounts/assets" isActive={isActive('/accounts/assets')} icon={RiBankLine}>
          {t('nav.assets')}
        </NavItem>
        <NavItem as={Link} to="/accounts/expense" isActive={isActive('/accounts/expense')} icon={RiShoppingCartLine}>
          {t('nav.expense')}
        </NavItem>
        <NavItem as={Link} to="/accounts/revenue" isActive={isActive('/accounts/revenue')} icon={RiRefund2Line}>
          {t('nav.revenue')}
        </NavItem>
        <NavItem as={Link} to="/accounts/liabilities" isActive={isActive('/accounts/liabilities')} icon={RiExchangeLine}>
          {t('nav.liabilities')}
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
