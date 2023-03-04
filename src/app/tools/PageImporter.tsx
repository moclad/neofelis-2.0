import 'react-csv-importer-next/dist/index.css';

import React from 'react';
import { Importer, ImporterField } from 'react-csv-importer-next';
import { useTranslation } from 'react-i18next';

import { Page, PageContent } from '@/app/layout';

import { ToolsNav } from './ToolsNav';

export const PageImporter = () => {
  const { t } = useTranslation(['tools', 'common']);

  return (
    <>
      <Page nav={<ToolsNav />}>
        <PageContent title={t('tools.importer.title').toString()}>
          <Importer
            dataHandler={async (rows, { startIndex }) => {
              // required, may be called several times
              // receives a list of parsed objects based on defined fields and user column mapping;
              // (if this callback returns a promise, the widget will wait for it before parsing more data)
              console.log(rows);
              // for (row of rows) {
              //   await myAppMethod(row);
              // }
            }}
            defaultNoHeader={false} // optional, keeps "data has headers" checkbox off by default
            restartable={true} // optional, lets user choose to upload another file when import is complete
            onStart={({ file, preview, fields, columnFields }) => {
              // optional, invoked when user has mapped columns and started import
              console.log(file);
              console.log(preview);
              console.log(fields);
              console.log(columnFields);
            }}
            onComplete={({ file, preview, fields, columnFields }) => {
              // optional, invoked right after import is done (but user did not dismiss/reset the widget yet)
              console.log(file);
              console.log(preview);
              console.log(fields);
              console.log(columnFields);
            }}
            onClose={({ file, preview, fields, columnFields }) => {
              // optional, if this is specified the user will see a "Finish" button after import is done,
              // which will call this when clicked
              console.log(file);
              console.log(preview);
              console.log(fields);
              console.log(columnFields);
            }}
          >
            <ImporterField name="name" label="Name" />
            <ImporterField name="name1" label="Name" />
            <ImporterField name="name2" label="Name" />
            <ImporterField name="name3" label="Name" />
            <ImporterField name="name4" label="Name" />
            <ImporterField name="email" label="Email" />
            <ImporterField name="dob" label="Date of Birth" optional />
            <ImporterField name="postalCode" label="Postal Code" optional />
          </Importer>
        </PageContent>
      </Page>
    </>
  );
};
