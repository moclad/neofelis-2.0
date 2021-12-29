import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PageCategories } from '@/app/classification/PageCategories';
import { PageGroups } from '@/app/classification/PageGroups';
import { PageLabels } from '@/app/classification/PageLabels';
import { Error404 } from '@/errors';

import { SecuredPage } from '../router';

const ClassificationRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SecuredPage>
            <Navigate to="labels" />
          </SecuredPage>
        }
      />

      <Route
        path="labels"
        element={
          <SecuredPage>
            <PageLabels />
          </SecuredPage>
        }
      />
      <Route
        path="categories"
        element={
          <SecuredPage>
            <PageCategories />
          </SecuredPage>
        }
      />
      <Route
        path="groups"
        element={
          <SecuredPage>
            <PageGroups />
          </SecuredPage>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default ClassificationRoutes;
