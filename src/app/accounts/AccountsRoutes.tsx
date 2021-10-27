import React from 'react';
import { Redirect, Switch, useRouteMatch } from 'react-router-dom';

import { PageAssets } from '@/app/accounts/PageAssets';
import { PageExpenses } from '@/app/accounts/PageExpenses';
import { PageLiabilities } from '@/app/accounts/PageLiabilities';
import { PageRevenues } from '@/app/accounts/PageRevenues';
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
      <Route exact path={`${url}/revenue`} render={() => <PageRevenues />} />
      <Route
        exact
        path={`${url}/liabilities`}
        render={() => <PageLiabilities />}
      />

      <Route path="*" render={() => <Error404 />} />
    </Switch>
  );
};

export default AccountsRoutes;
