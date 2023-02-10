import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import { TransactionDialog } from '@/app/transactions/transaction-dialog';
import { Panel, PanelContent } from '@/components/Panel';
import { TransactionType } from '@/types/types';
import { Button, useDisclosure } from '@chakra-ui/react';

export const PageDashboard = () => {
  const { t } = useTranslation('dashboard');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [transactionType, setTransactionType] = useState(TransactionType.None);

  const onCloseDialog = () => {
    setTransactionType(TransactionType.None);
    onClose();
  };

  return (
    <Panel allowConfiguration={false}>
      <PanelContent
        loading={false}
        title={t('title').toString()}
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
            {t('actions.createExpense').toString()}
          </Button>,
          <Button
            key="createIncome"
            leftIcon={<FiPlus />}
            onClick={() => {
              setTransactionType(TransactionType.Income);
              onOpen();
            }}
          >
            {t('actions.createIncome').toString()}
          </Button>,
          <Button
            key="createTransfer"
            leftIcon={<FiPlus />}
            onClick={() => {
              setTransactionType(TransactionType.Transfer);
              onOpen();
            }}
          >
            {t('actions.createTransfer').toString()}
          </Button>,
        ]}
      ></PanelContent>
      <TransactionDialog isOpen={isOpen} onClose={onCloseDialog} transactionType={transactionType} />
    </Panel>
  );
};
