import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SecuredPage } from '@/app/router';
import { ErrorPage } from '@/components/ErrorPage';

import { PageImporter } from './PageImporter';
import { PageImportNew } from './PageImportNew';

const ToolsRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SecuredPage>
            <PageImporter />
          </SecuredPage>
        }
      />

      <Route
        path="/import/new"
        element={
          <SecuredPage>
            <PageImportNew />
          </SecuredPage>
        }
      />
      <Route path="*" element={<ErrorPage errorCode={404} />} />
    </Routes>
  );
};

export default ToolsRoutes;
