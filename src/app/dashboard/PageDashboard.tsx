import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import { Page, PageContent } from '@/app/layout';
import { Button, Stack, useDisclosure } from '@chakra-ui/react';

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
            key="createExpense"
            leftIcon={<FiPlus />}
            variant="@primary"
            onClick={() => onOpen()}
          >
            {t('dashboard:actions.createExpense')}
          </Button>,
          <Button
            key="createIncome"
            leftIcon={<FiPlus />}
            variant="@secondary"
            onClick={() => onOpen()}
          >
            {t('dashboard:actions.createIncome')}
          </Button>,
          <Button
            key="createTransfer"
            leftIcon={<FiPlus />}
            variant="@secondary"
            onClick={() => onOpen()}
          >
            {t('dashboard:actions.createTransfer')}
          </Button>,
        ]}
      ></PageContent>
      <TransactionDialog isOpen={isOpen} onClose={onClose} />
    </Page>
  );
};
