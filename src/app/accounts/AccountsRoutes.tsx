import React from 'react';
import { Redirect, Switch, useRouteMatch } from 'react-router-dom';

import { PageAssets } from '@/app/accounts/PageAssets';
import { PageExpenses } from '@/app/accounts/PageExpenses';
import { Route } from '@/app/router';
import { Error404 } from '@/errors';

const AccountsRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${url}/`}
        render={() => <Redirect to={`${url}/assets`} />}
      />

      <Route exact path={`${url}/assets`} render={() => <PageAssets />} />
      <Route exact path={`${url}/expense`} render={() => <PageExpenses />} />

      <Route path="*" render={() => <Error404 />} />
    </Switch>
  );
};

export default AccountsRoutes;
