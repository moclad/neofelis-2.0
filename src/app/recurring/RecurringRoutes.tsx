import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SecuredPage } from '@/app/router';
import { ErrorPage } from '@/components/ErrorPage';

import { PageRecurring } from './PageRecurring';

const RecurringRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SecuredPage>
            <PageRecurring />
          </SecuredPage>
        }
      />
      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  );
};

export default RecurringRoutes;
