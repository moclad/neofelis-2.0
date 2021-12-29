import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PageApiDocumentation } from '@/app/admin/api/PageApiDocumentation';
import { Error404 } from '@/errors';

import { SecuredPage } from '../router';

const AdminUsersRoutes = React.lazy(
  () => import('@/app/admin/users/AdminUsersRoutes')
);

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SecuredPage>
            <Navigate to="api" replace />
          </SecuredPage>
        }
      />
      <Route
        path="users"
        element={
          <SecuredPage>
            <AdminUsersRoutes />
          </SecuredPage>
        }
      />
      <Route
        path="api"
        element={
          <SecuredPage>
            <PageApiDocumentation />
          </SecuredPage>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AdminRoutes;
