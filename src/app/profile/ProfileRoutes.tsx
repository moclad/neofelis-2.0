import React from 'react';
import { Redirect, Switch, useRouteMatch } from 'react-router-dom';

import { PageProfile } from '@/app/profile/PageProfile';
import { PageSettings } from '@/app/profile/PageSettings';
import { Route } from '@/app/router';
import { Error404 } from '@/errors';

const ProfileRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${url}/`}
        render={() => <Redirect to={`${url}/me`} />}
      />

      {/* <RoutePublicOnly
        exact
        path={`${url}/register`}
        render={() => <PageRegister />}
      />
      <RoutePublicOnly
        exact
        path={`${url}/activate`}
        render={() => <PageActivate />}
      />
      <RoutePublicOnly
        exact
        path={`${url}/reset`}
        render={() => <PageResetPasswordRequest />}
      />
      <RoutePublicOnly
        exact
        path={`${url}/reset/finish`}
        render={() => <PageResetPasswordConfirm />}
      /> */}

      <Route exact path={`${url}/me`} render={() => <PageProfile />} />
      <Route exact path={`${url}/settings`} render={() => <PageSettings />} />
      <Route path="*" render={() => <Error404 />} />
    </Switch>
  );
};

export default ProfileRoutes;
