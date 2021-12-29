import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageDashboard } from '@/app/dashboard/PageDashboard';
import { SecuredPage } from '@/app/router';
import { Error404 } from '@/errors';

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
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default DashboardRoutes;
