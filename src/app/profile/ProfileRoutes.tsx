import React from 'react';
import { Navigate, Routes } from 'react-router-dom';

import { PageProfile } from '@/app/profile/PageProfile';
import { PageSettings } from '@/app/profile/PageSettings';
import { Route } from '@/app/router';
import { Error404 } from '@/errors';

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={() => <Navigate to="me" replace />} />

      {/* <RoutePublicOnly
        exact
        path={`${url}/register`}
        element={() => <PageRegister />}
      />
      <RoutePublicOnly
        exact
        path={`${url}/activate`}
        element={() => <PageActivate />}
      />
      <RoutePublicOnly
        exact
        path={`${url}/reset`}
        element={() => <PageResetPasswordRequest />}
      />
      <RoutePublicOnly
        exact
        path={`${url}/reset/finish`}
        element={() => <PageResetPasswordConfirm />}
      /> */}

      <Route path="me" element={() => <PageProfile />} />
      <Route path="settings" element={() => <PageSettings />} />
      <Route path="*" element={() => <Error404 />} />
    </Routes>
  );
};

export default ProfileRoutes;
