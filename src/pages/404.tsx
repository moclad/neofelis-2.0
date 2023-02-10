import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorPage } from '@/components/ErrorPage';

const Page404 = () => {
  const { t } = useTranslation('components');
  return (
    <>
      <Head>
        <title>{t('errorPage.404.title')}</title>
      </Head>
      <ErrorPage errorCode={404} />
    </>
  );
};
export default Page404;
