import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SecuredPage } from '@/app/router';
import { Error404 } from '@/errors';

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
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RecurringRoutes;
