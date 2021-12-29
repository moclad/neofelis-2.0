import React from 'react';
import { Routes } from 'react-router-dom';

import { PageUserCreate } from '@/app/admin/users/PageUserCreate';
import { PageUsers } from '@/app/admin/users/PageUsers';
import { PageUserUpdate } from '@/app/admin/users/PageUserUpdate';
import { Route } from '@/app/router';
import { Error404 } from '@/errors';

const AdminUsersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={() => <PageUsers />} />
      <Route path="/create" element={() => <PageUserCreate />} />
      <Route path="/:login" element={() => <PageUserUpdate />} />
      <Route path="*" element={() => <Error404 />} />
    </Routes>
  );
};

export default AdminUsersRoutes;
