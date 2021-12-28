import React, { Suspense } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { PageAuthError } from '@/app/auth/PageAuthError';
import { PageLogin } from '@/app/auth/PageLogin';
import { PageLogout } from '@/app/auth/PageLogout';
import { PageVerifyRequest } from '@/app/auth/PageVerifyRequest';
import ClassificationRoutes from '@/app/classification/ClassificationRoutes';
import { Layout, Loader } from '@/app/layout';
import { Route as CustomRoute, RouteAdmin, RoutePublicOnly } from '@/app/router';
import { Error404, ErrorBoundary } from '@/errors';

const AdminRoutes = React.lazy(() => import('@/app/admin/AdminRoutes'));
const AccountRoutes = React.lazy(() => import('@/app/profile/ProfileRoutes'));
const AccountsRoutes = React.lazy(
  () => import('@/app/accounts/AccountsRoutes')
);
const DashboardRoutes = React.lazy(
  () => import('@/app/dashboard/DashboardRoutes')
);

const getRoutes = () => {
  return (
    <Switch>
      <RoutePublicOnly
        exact
        path="/verify-request"
        render={() => <PageVerifyRequest />}
      />
      <RoutePublicOnly exact path="/error" render={() => <PageAuthError />} />
      <RoutePublicOnly exact path="/login" render={() => <PageLogin />} />

      <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
      <Route exact path="/logout" render={() => <PageLogout />} />
      <Route path="/account" render={() => <AccountRoutes />} />
      <Route path="/profile" render={() => <AccountRoutes />} />
      <Route path="/dashboard" render={() => <DashboardRoutes />} />
      <Route path="/classification" render={() => <ClassificationRoutes />} />
      <Route path="/accounts" render={() => <AccountsRoutes />} />

      <Route path="*" render={() => <Error404 />} />

      <RouteAdmin path="/admin" render={() => <AdminRoutes />} />
      <CustomRoute path="/dashboard" render={() => <DashboardRoutes />} />
    </Switch>
  );
};

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/app/">
        <Layout>
          <Suspense fallback={<Loader />}>{getRoutes()}</Suspense>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </ErrorBoundary>
  );
};
