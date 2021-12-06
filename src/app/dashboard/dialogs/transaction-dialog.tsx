import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  FieldCurrency,
  FieldDayPicker,
  FieldInput,
  FieldSelect,
  ModalDialog,
  useToastError,
  useToastSuccess
} from '@/components';
import {
  useActiveAssetAccountsQuery,
  useActiveCategoriesQuery,
  useActiveExpenseAccountsQuery,
  useAllLabelsQuery,
  useInsertCategoryMutation,
  useInsertExpenseAccMutation,
  useInsertLabelMutation,
  useInsertTransactionMutation
} from '@/generated/graphql';
import { ISelectOptions, ITransactionInput } from '@/types/types';
import { Button, Stack } from '@chakra-ui/react';

export const TransactionDialog = (props) => {
  const { t } = useTranslation();
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();
  const { isOpen, onClose } = props;

  const mutationOptions = {
    onError: (error) => {
      toastError({
        title: t('common:feedbacks.createdError.title'),
        description: error.message,
      });
    },
    onCompleted: () => {
      toastSuccess({
        title: t('common:feedbacks.createdSuccess.title'),
      });
    },
  };
  const [insertLabel] = useInsertLabelMutation(mutationOptions);
  const [insertCategory] = useInsertCategoryMutation(mutationOptions);
  const [insertExpense] = useInsertExpenseAccMutation(mutationOptions);
  const [insertTransaction, { loading: insertLoading }] =
    useInsertTransactionMutation(mutationOptions);

  const labels: ISelectOptions[] = [];
  const expenses: ISelectOptions[] = [];
  const assets: ISelectOptions[] = [];
  const categories: ISelectOptions[] = [];

  const { data: labelsData } = useAllLabelsQuery();
  const { data: categoriesData } = useActiveCategoriesQuery();
  const { data: expensesData } = useActiveExpenseAccountsQuery();
  const { data: assetsData } = useActiveAssetAccountsQuery();

  if (categoriesData) {
    categoriesData.categories.map((category) => {
      const option: ISelectOptions = {
        label: category.name,
        value: category.id,
      };
      categories.push(option);
    });
  }

  if (labelsData) {
    labelsData.labels.map((label) => {
      const option: ISelectOptions = { label: label.name, value: label.id };
      labels.push(option);
    });
  }

  if (expensesData) {
    expensesData.expenses.map((data) => {
      const option: ISelectOptions = { label: data.name, value: data.id };
      expenses.push(option);
    });
  }

  if (assetsData) {
    assetsData.assets.map((data) => {
      const option: ISelectOptions = { label: data.name, value: data.id };
      assets.push(option);
    });
  }

  const onCreateExpenseAccount = (value: string) => {
    const newData = {
      name: value,
      account_info: { data: { type: 'E' } },
    };

    insertExpense({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    });
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

  const onCreateLabel = (value: string) => {
    const newData = {
      name: value,
    };

    insertLabel({
      variables: {
        object: newData,
      },
    });
  };

  const onConfirmCreate = async (values: ITransactionInput) => {
    const { labels, ...rest } = values;

    const submitData = {
      ...rest,
      transaction_labels: { data: [] },
    };

    if (labels) {
      labels.forEach((x) =>
        submitData.transaction_labels.data.push({ label_id: x })
      );
    }

    console.log(submitData);

    await insertTransaction({
      variables: {
        object: submitData,
      },
      refetchQueries: 'active',
    });
  };

  return (
    <ModalDialog
      title={t('dashboard:actions.createExpense')}
      isOpen={isOpen}
      onCancel={() => {
        onClose();
      }}
      onConfirm={onConfirmCreate}
      loading={insertLoading}
      formId="asset-form-id"
      initialValues={{ transaction_date: dayjs().toDate() }}
    >
      <FieldInput
        name="description"
        label={t('dashboard:expense.data.description')}
        type={'text'}
        placeholder={t('dashboard:expense.data.description') as string}
      />
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldSelect
          name="source_account"
          label={t('dashboard:expense.data.source')}
          required={t('dashboard:expense.data.sourceRequired') as string}
          options={assets}
        />
        <FieldSelect
          name="destiny_account"
          label={t('dashboard:expense.data.destiny')}
          required={t('dashboard:expense.data.targetRequired') as string}
          options={expenses}
          isCreatable={true}
          onCreateOption={onCreateExpenseAccount}
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
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldSelect
          name="category_id"
          label={t('dashboard:expense.data.category')}
          options={categories}
          isCreatable={true}
          onCreateOption={onCreateCategory}
        />
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldSelect
          name="labels"
          label={t('dashboard:expense.data.labels')}
          options={labels}
          size="sm"
          isCreatable={true}
          onCreateOption={onCreateLabel}
          closeMenuOnSelect={false}
          isMulti={true}
        />
      </Stack>
    </ModalDialog>
  );
};
