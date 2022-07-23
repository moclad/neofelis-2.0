import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageDashboard } from '@/app/dashboard/PageDashboard';
import { SecuredPage } from '@/app/router';
import { ErrorPage } from '@/components/ErrorPage';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SecuredPage>
            <PageDashboard />
          </SecuredPage>
        }
      />
      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  );
};

export default DashboardRoutes;
