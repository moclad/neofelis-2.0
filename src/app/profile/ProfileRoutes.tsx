import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PageProfile } from '@/app/profile/PageProfile';
import { PageSettings } from '@/app/profile/PageSettings';
import { ErrorPage } from '@/components/ErrorPage';

import { SecuredPage } from '../router';

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="me" replace />} />

      {/* <RoutePublicOnly
        exact
        path={`${url}/register`}
        element={ <PageRegister />}
      />
      <RoutePublicOnly
        exact
        path={`${url}/activate`}
        element={ <PageActivate />}
      />
      <RoutePublicOnly
        exact
        path={`${url}/reset`}
        element={ <PageResetPasswordRequest />}
      />
      <RoutePublicOnly
        exact
        path={`${url}/reset/finish`}
        element={ <PageResetPasswordConfirm />}
      /> */}

      <Route
        path="me"
        element={
          <SecuredPage>
            <PageProfile />
          </SecuredPage>
        }
      />
      <Route
        path="settings"
        element={
          <SecuredPage>
            <PageSettings />
          </SecuredPage>
        }
      />
      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  );
};

export default ProfileRoutes;
