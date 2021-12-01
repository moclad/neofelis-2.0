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
  useInsertTransactionMutation
} from '@/generated/graphql';
import { ISelectOptions } from '@/types/types';
import { Button, Stack, useDisclosure } from '@chakra-ui/react';

export const TransactionDialog = (props) => {
  const { t } = useTranslation();
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();
  const { isOpen, onClose } = props;

  const [insertExpense] = useInsertExpenseAccMutation({
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
  });

  const [insertCategory] = useInsertCategoryMutation({
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
  });

  const labels: ISelectOptions[] = [];
  const expenses: ISelectOptions[] = [];
  const assets: ISelectOptions[] = [];
  const categories: ISelectOptions[] = [];

  const { loading: labelsLoading, data: labelsData } = useAllLabelsQuery();
  const { loading: categoriesLoading, data: categoriesData } =
    useActiveCategoriesQuery();
  const { loading: expensesLoading, data: expensesData } =
    useActiveExpenseAccountsQuery();

  const { loading: assetsLoading, data: assetsData } =
    useActiveAssetAccountsQuery();

  const [insertTransaction, { loading: insertLoading }] =
    useInsertTransactionMutation({
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
    });

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

  const onCreateCategory = (value: string) => {
    const newData = {
      name: value,
    };

    insertCategory({
      variables: {
        object: newData,
      },
      refetchQueries: 'active',
    });
  };

  const onConfirmCreate = async (values) => {
    console.log(values);
    const newData = {
      ...values,
    };

    console.log(newData);

    await insertTransaction({
      variables: {
        object: newData,
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
      // loading={loading || insertLoading}
      formId="asset-form-id"
      loading={false}
      initialValues={{ transaction_date: dayjs().toDate(), amount: 0 }}
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
          isMulti={true}
        />
      </Stack>
    </ModalDialog>
  );
};
