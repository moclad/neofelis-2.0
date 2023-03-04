import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PageAuthError } from '@/app/auth/PageAuthError';
import { PageLogin } from '@/app/auth/PageLogin';
import { PageLogout } from '@/app/auth/PageLogout';
import { PageVerifyRequest } from '@/app/auth/PageVerifyRequest';
import ClassificationRoutes from '@/app/classification/ClassificationRoutes';
import { Layout, Loader } from '@/app/layout';
import RecurringRoutes from '@/app/recurring/RecurringRoutes';
import ToolsRoutes from '@/app/tools/ToolsRoutes';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorPage } from '@/components/ErrorPage';
import { APP_BASENAME } from '@/constants/routing';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { SecuredPage } from './router';

const AdminRoutes = React.lazy(() => import('@/app/admin/AdminRoutes'));
const AccountRoutes = React.lazy(() => import('@/app/profile/ProfileRoutes'));
const AccountsRoutes = React.lazy(() => import('@/app/accounts/AccountsRoutes'));
const DashboardRoutes = React.lazy(() => import('@/app/dashboard/DashboardRoutes'));

const getRoutes = () => {
  return (
    <Routes>
      <Route path="/verify-request" element={<PageVerifyRequest />} />
      <Route path="/error" element={<PageAuthError />} />
      <Route path="/login" element={<PageLogin />} />

      <Route
        path="/"
        element={
          <SecuredPage>
            <Navigate to="/dashboard" replace />
          </SecuredPage>
        }
      />
      <Route
        path="/logout"
        element={
          <SecuredPage>
            <PageLogout />
          </SecuredPage>
        }
      />
      <Route
        path="/account"
        element={
          <SecuredPage>
            <AccountRoutes />
          </SecuredPage>
        }
      />
      <Route
        path="/profile/*"
        element={
          <SecuredPage>
            <AccountRoutes />
          </SecuredPage>
        }
      />
      <Route
        path="/classification/*"
        element={
          <SecuredPage>
            <ClassificationRoutes />
          </SecuredPage>
        }
      />
      <Route
        path="/accounts/*"
        element={
          <SecuredPage>
            <AccountsRoutes />
          </SecuredPage>
        }
      />

      <Route
        path="/recurring/*"
        element={
          <SecuredPage>
            <RecurringRoutes />
          </SecuredPage>
        }
      />

      <Route
        path="/tools/*"
        element={
          <SecuredPage>
            <ToolsRoutes />
          </SecuredPage>
        }
      />

      <Route
        path="/admin/*"
        element={
          <SecuredPage>
            <AdminRoutes />
          </SecuredPage>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <SecuredPage>
            <DashboardRoutes />
          </SecuredPage>
        }
      />
      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  );
};

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter basename={`/${APP_BASENAME}`}>
        <Layout>
          <Suspense fallback={<Loader />}>{getRoutes()}</Suspense>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </ErrorBoundary>
  );
};
