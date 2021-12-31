import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FieldCurrency, FieldDayPicker, FieldInput, FieldSelect, ModalDialog } from '@/components';
import {
  ActiveAssetAccountsDocument,
  ActiveCategoriesDocument,
  ActiveExpenseAccountsDocument,
  ActiveRevenueAccountsDocument,
  AllLabelsDocument,
  useInsertCategoryMutation,
  useInsertExpenseAccMutation,
  useInsertLabelMutation,
  useInsertRevenueAccMutation,
  useInsertTransactionMutation
} from '@/generated/graphql';
import { ITransactionAccount, ITransactionInput, TransactionType } from '@/types/types';
import { Stack } from '@chakra-ui/react';
import { useForm } from '@formiz/core';

import { useDataToSelectorConverter } from '../../../hooks/useDataToSelectorConverter';
import { useMutationOptions } from '../../../hooks/useMutationOptions';

export interface TransactionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  transactionType: TransactionType;
}

export const TransactionDialog = (props: TransactionDialogProps) => {
  let defaultAccount;
  const { isOpen, onClose, transactionType } = props;

  const { t } = useTranslation();
  const { mutationOptions } = useMutationOptions();
  const form = useForm();

  const [insertLabel] = useInsertLabelMutation(mutationOptions);
  const [insertCategory] = useInsertCategoryMutation(mutationOptions);
  const [insertExpense] = useInsertExpenseAccMutation(mutationOptions);
  const [insertRevenue] = useInsertRevenueAccMutation(mutationOptions);
  const [insertTransaction, { loading: insertLoading }] =
    useInsertTransactionMutation(mutationOptions);

  const { selectOptions: categories } = useDataToSelectorConverter({
    entity: 'categories',
    query: ActiveCategoriesDocument,
    skipQuery: transactionType === TransactionType.None,
  });

  const { selectOptions: labels } = useDataToSelectorConverter({
    entity: 'labels',
    query: AllLabelsDocument,
    skipQuery: transactionType === TransactionType.None,
  });

  const { selectOptions: expenses } = useDataToSelectorConverter({
    entity: 'expenses',
    query: ActiveExpenseAccountsDocument,
    skipQuery:
      transactionType !== TransactionType.Expense &&
      transactionType === TransactionType.None,
  });

  const { selectOptions: revenues } = useDataToSelectorConverter({
    entity: 'revenues',
    query: ActiveRevenueAccountsDocument,
    skipQuery:
      transactionType !== TransactionType.Income &&
      transactionType === TransactionType.None,
    onComplete: (data) =>
      (defaultAccount = data.find((x) => x.data['default'] === true)?.value),
  });

  const { selectOptions: assets } = useDataToSelectorConverter({
    entity: 'assets',
    query: ActiveAssetAccountsDocument,
    skipQuery: transactionType === TransactionType.None,
    onComplete: (data) => {
      if (transactionType === TransactionType.Expense) {
        defaultAccount = data.find((x) => x.data['default'] === true)?.value;
      }
    },
  });

  const onCreateExpenseAccount = async (value: string) => {
    const newData = {
      name: value,
      account_info: { data: { type: 'E' } },
    };

    insertExpense({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    }).then((x) => x.data.insert_expenses_one.id);
  };

  const onCreateRevenueAccount = async (value: string) => {
    const newData = {
      name: value,
      account_info: { data: { type: 'R' } },
    };

    insertRevenue({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    }).then((x) => x.data.insert_revenues_one.id);
  };

  const onCreateCategory = async (value: string) => {
    const newData = {
      name: value,
    };

    return insertCategory({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    }).then((x) => x.data.insert_categories_one.id);
  };

  const onCreateLabel = async (value: string) => {
    const newData = {
      name: value,
    };

    return insertLabel({
      variables: {
        object: newData,
      },
    }).then((x) => x.data.insert_labels_one.id);
  };

  const onConfirmCreate = async (values: ITransactionInput) => {
    const { amount, labels, source_account, destiny_account, ...rest } = values;

    const source: ITransactionAccount = {
      account_id: source_account,
      amount: amount * -1,
    };

    const target: ITransactionAccount = {
      account_id: destiny_account,
      amount: amount,
    };

    const submitData = {
      ...rest,
      transaction_labels: { data: [] },
      transaction_accounts: { data: [source, target] },
      amount: amount,
    };

    if (labels) {
      labels.forEach((x) =>
        submitData.transaction_labels.data.push({ label_id: x })
      );
    }

    await insertTransaction({
      variables: {
        object: submitData,
      },
    });
  };

  const getSourceAndTargetAccounts = () => {
    if (transactionType === TransactionType.Expense) {
      return (
        <>
          <FieldSelect
            name="source_account"
            label={t('dashboard:transaction.data.asset')}
            required={t('dashboard:transaction.data.assetRequired') as string}
            options={assets}
          />
          <FieldSelect
            name="destiny_account"
            label={t('dashboard:transaction.data.expense')}
            required={t('dashboard:transaction.data.expenseRequired') as string}
            options={expenses}
            isCreatable={true}
            onCreateOption={onCreateExpenseAccount}
          />
        </>
      );
    }

    if (transactionType === TransactionType.Income) {
      return (
        <>
          <FieldSelect
            name="source_account"
            label={t('dashboard:transaction.data.revenue')}
            required={t('dashboard:transaction.data.revenueRequired') as string}
            options={revenues}
            isCreatable={true}
            onCreateOption={onCreateRevenueAccount}
          />

          <FieldSelect
            name="destiny_account"
            label={t('dashboard:transaction.data.asset')}
            required={t('dashboard:transaction.data.assetRequired') as string}
            options={assets}
          />
        </>
      );
    }

    if (transactionType === TransactionType.Transfer) {
      return (
        <>
          <FieldSelect
            name="source_account"
            label={t('dashboard:transaction.data.fromAsset')}
            required={t('dashboard:transaction.data.assetRequired') as string}
            options={assets}
          />

          <FieldSelect
            name="destiny_account"
            label={t('dashboard:transaction.data.toAsset')}
            required={t('dashboard:transaction.data.assetRequired') as string}
            options={assets}
            validations={[
              {
                rule: (value) => {
                  return form.values.source_account !== value;
                },
                deps: [form.values.source_account],
                message: t('dashboard:transaction.error.sameAccount'),
              },
            ]}
          />
        </>
      );
    }
  };

  return (
    <ModalDialog
      title={t('dashboard:actions.createExpense')}
      dialogForm={form}
      isOpen={isOpen}
      onCancel={() => {
        onClose();
      }}
      onConfirm={onConfirmCreate}
      loading={insertLoading}
      formId="asset-form-id"
      initialValues={{
        transaction_date: dayjs().toDate(),
        source_account: defaultAccount,
      }}
    >
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        {getSourceAndTargetAccounts()}
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldCurrency
          name="amount"
          label={t('dashboard:transaction.data.amount')}
          placeholder={0}
          currency="EUR"
          required={t('dashboard:transaction.data.amountRequired') as string}
        />
        <FieldDayPicker
          name="transaction_date"
          label={t('dashboard:transaction.data.bookDate')}
          required={t('dashboard:transaction.data.bookDateRequired') as string}
        />
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldSelect
          name="category_id"
          label={t('dashboard:transaction.data.category')}
          options={categories}
          isCreatable={true}
          onCreateOption={onCreateCategory}
        />
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldSelect
          name="labels"
          label={t('dashboard:transaction.data.labels')}
          options={labels}
          size="sm"
          isCreatable={true}
          onCreateOption={onCreateLabel}
          closeMenuOnSelect={false}
          isMulti={true}
        />
      </Stack>
      <FieldInput
        name="description"
        label={t('dashboard:transaction.data.description')}
        type={'text'}
        placeholder={t('dashboard:transaction.data.description') as string}
      />
    </ModalDialog>
  );
};
