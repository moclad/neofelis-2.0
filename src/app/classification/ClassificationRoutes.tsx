import React from 'react';
import { Redirect, Switch, useRouteMatch } from 'react-router-dom';

import { PageCategories } from '@/app/classification/PageCategories';
import { PageGroups } from '@/app/classification/PageGroups';
import { PageTags } from '@/app/classification/PageTags';
import { Route } from '@/app/router';
import { Error404 } from '@/errors';

const ClassificationRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${url}/`}
        render={() => <Redirect to={`${url}/tags`} />}
      />

      <Route exact path={`${url}/tags`} render={() => <PageTags />} />
      <Route
        exact
        path={`${url}/categories`}
        render={() => <PageCategories />}
      />
      <Route exact path={`${url}/groups`} render={() => <PageGroups />} />
      <Route path="*" render={() => <Error404 />} />
    </Switch>
  );
};

export default ClassificationRoutes;
