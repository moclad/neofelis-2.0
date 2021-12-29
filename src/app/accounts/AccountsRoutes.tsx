import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PageAssets } from '@/app/accounts/PageAssets';
import { PageExpenses } from '@/app/accounts/PageExpenses';
import { PageLiabilities } from '@/app/accounts/PageLiabilities';
import { PageRevenues } from '@/app/accounts/PageRevenues';
import { SecuredPage } from '@/app/router';
import { Error404 } from '@/errors';

const AccountsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="assets" replace />} />

      <Route
        path="assets"
        element={
          <SecuredPage>
            <PageAssets />
          </SecuredPage>
        }
      />
      <Route
        path="expense"
        element={
          <SecuredPage>
            <PageExpenses />
          </SecuredPage>
        }
      />
      <Route
        path="revenue"
        element={
          <SecuredPage>
            <PageRevenues />
          </SecuredPage>
        }
      />
      <Route
        path="liabilities"
        element={
          <SecuredPage>
            <PageLiabilities />
          </SecuredPage>
        }
      />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AccountsRoutes;
