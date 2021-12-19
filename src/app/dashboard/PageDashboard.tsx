import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import { Page, PageContent } from '@/app/layout';
import { Button, useDisclosure } from '@chakra-ui/react';

import { TransactionType } from '../../types/types';
import { TransactionDialog } from './dialogs/transaction-dialog';

export const PageDashboard = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [transactionType, setTransactionType] = useState(TransactionType.None);

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
            onClick={() => {
              setTransactionType(TransactionType.Expense);
              onOpen();
            }}
          >
            {t('dashboard:actions.createExpense')}
          </Button>,
          <Button
            key="createIncome"
            leftIcon={<FiPlus />}
            variant="@secondary"
            onClick={() => {
              setTransactionType(TransactionType.Income);
              onOpen();
            }}
          >
            {t('dashboard:actions.createIncome')}
          </Button>,
          <Button
            key="createTransfer"
            leftIcon={<FiPlus />}
            variant="@secondary"
            onClick={() => {
              setTransactionType(TransactionType.Transfer);
              onOpen();
            }}
          >
            {t('dashboard:actions.createTransfer')}
          </Button>,
        ]}
      ></PageContent>
      <TransactionDialog
        isOpen={isOpen}
        onClose={onClose}
        transactionType={transactionType}
      />
    </Page>
  );
};
