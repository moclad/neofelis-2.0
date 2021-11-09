import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import { Page, PageContent } from '@/app/layout';
import { FieldCurrency, FieldDayPicker, FieldInput, FieldSelect, ModalDialog } from '@/components';
import { Button, Stack, useDisclosure } from '@chakra-ui/react';

export const TransactionDialog = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const colors = [
    { label: 'Red', value: 'red' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <ModalDialog
      title={t('dashboard:actions.createExpense')}
      isOpen={isOpen}
      onCancel={() => {
        onClose();
      }}
      onConfirm={() => console.log('test')}
      // loading={loading || insertLoading}
      formId="asset-form-id"
      loading={false}
      initialValues={{ transaction_date: dayjs().toDate() }}
    >
      <FieldInput
        name="description"
        label={t('dashboard:expense.data.description')}
      />
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldSelect
          name="source"
          label={t('dashboard:expense.data.source')}
          required={t('dashboard:expense.data.sourceRequired') as string}
          options={colors}
        />
        <FieldSelect
          name="destiny"
          label={t('dashboard:expense.data.destiny')}
          required={t('dashboard:expense.data.targetRequired') as string}
          options={colors}
        />
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldSelect
          name="category"
          label={t('dashboard:expense.data.category')}
          options={colors}
        />
        <FieldSelect
          name="labels"
          label={t('dashboard:expense.data.labels')}
          options={colors}
        />
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldCurrency
          name="amount"
          label={t('dashboard:expense.data.amount')}
          placeholder={0}
          currency="EUR"
          required={t('dashboard:expense.data.amountRequired') as string}
        />
        <FieldDayPicker
          name="transaction_date"
          label={t('dashboard:expense.data.bookDate')}
          required={t('dashboard:expense.data.bookDateRequired') as string}
        />
      </Stack>
    </ModalDialog>
  );
};
