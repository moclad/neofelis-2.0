import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import { Page, PageContent } from '@/app/layout';
import { FieldCurrency, FieldDayPicker, FieldInput, FieldSelect, ModalDialog } from '@/components';
import { Button, Stack, useDisclosure } from '@chakra-ui/react';

import { onConfirmCreate } from './Dashboard.services';
import { TransactionDialog } from './dialogs/transaction-dialog';

export const PageDashboard = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const colors = [
    { label: 'Red', value: 'red' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <Page>
      <PageContent
        loading={false}
        title={t('dashboard:title')}
        actions={[
          <Button
            key="createCategory"
            leftIcon={<FiPlus />}
            variant="@primary"
            onClick={() => onOpen()}
          >
            {t('dashboard:actions.createExpense')}
          </Button>,
        ]}
      ></PageContent>
      <TransactionDialog isOpen={isOpen} onClose={onClose} />
    </Page>
  );
};
