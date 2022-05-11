import dayjs from 'dayjs';
import React, { useState } from 'react';
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
  useInsertRecurringMutation,
  useInsertRevenueAccMutation
} from '@/generated/graphql';
import { DurationType, ISelectOptions, TransactionType } from '@/types/types';
import { Stack } from '@chakra-ui/react';
import { useForm } from '@formiz/core';

import { useDataToSelectorConverter } from '../../../hooks/useDataToSelectorConverter';
import { useMutationOptions } from '../../../hooks/useMutationOptions';

export interface RecurringDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecurringDialog = (props: RecurringDialogProps) => {
  let defaultAccount;
  const { isOpen, onClose } = props;

  const [transactionType, setTransactionType] = useState<number>(1);
  const [durationType, setDurationType] = useState<number>(1);
  const { t } = useTranslation();
  const { mutationOptions } = useMutationOptions();
  const form = useForm();

  const [insertLabel] = useInsertLabelMutation(mutationOptions);
  const [insertCategory] = useInsertCategoryMutation(mutationOptions);
  const [insertExpense] = useInsertExpenseAccMutation(mutationOptions);
  const [insertRevenue] = useInsertRevenueAccMutation(mutationOptions);
  const [insertRecurring, { loading: insertLoading }] =
    useInsertRecurringMutation(mutationOptions);

  const { selectOptions: categories } = useDataToSelectorConverter({
    entity: 'categories',
    query: ActiveCategoriesDocument,
  });

  const { selectOptions: labels } = useDataToSelectorConverter({
    entity: 'labels',
    query: AllLabelsDocument,
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
      account_info: { data: { type: 'E', name: value } },
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
      account_info: { data: { type: 'R', name: value } },
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

  const onConfirmCreate = async (values) => {
    const { labels, ...rest } = values;

    const submitData = {
      ...rest,
      recurring_labels: { data: [] },
    };

    if (labels) {
      labels.forEach((x) =>
        submitData.recurring_labels.data.push({ label_id: x })
      );
    }

    await insertRecurring({
      variables: {
        object: submitData,
      },
    });
  };

  const updateDurationTypeView = (): React.ReactNode => {
    if (durationType === DurationType.UntilDate) {
      return (
        <FieldDayPicker
          name="until_date"
          label={t('recurring:recurring.fields.data.untilDate')}
          required={t('recurring:recurring.fields.data.untilDate') as string}
        />
      );
    }

    if (durationType === DurationType.NumberOfTimes) {
      return (
        <FieldInput
          name="description"
          label={t('recurring:recurring.fields.data.numberOfTimes')}
          type={'number'}
          placeholder={
            t('recurring:recurring.fields.data.numberOfTimes') as string
          }
        />
      );
    }

    return <></>;
  };

  const getSourceAndTargetAccounts = () => {
    if (transactionType === TransactionType.Expense) {
      return (
        <>
          <FieldSelect
            name="account_from"
            label={t('recurring:recurring.fields.data.asset')}
            required={
              t('recurring:recurring.fields.data.assetRequired') as string
            }
            options={assets}
          />
          <FieldSelect
            name="account_to"
            label={t('recurring:recurring.fields.data.expense')}
            required={
              t('recurring:recurring.fields.data.expenseRequired') as string
            }
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
            name="account_from"
            label={t('recurring:recurring.fields.data.revenue')}
            required={
              t('recurring:recurring.fields.data.revenueRequired') as string
            }
            options={revenues}
            isCreatable={true}
            onCreateOption={onCreateRevenueAccount}
          />

          <FieldSelect
            name="account_to"
            label={t('recurring:recurring.fields.data.asset')}
            required={
              t('recurring:recurring.fields.data.assetRequired') as string
            }
            options={assets}
          />
        </>
      );
    }

    if (transactionType === TransactionType.Transfer) {
      return (
        <>
          <FieldSelect
            name="account_from"
            label={t('recurring:recurring.fields.data.fromAsset')}
            required={
              t('recurring:recurring.fields.data.assetRequired') as string
            }
            options={assets}
          />

          <FieldSelect
            name="account_to"
            label={t('recurring:recurring.fields.data.toAsset')}
            required={
              t('recurring:recurring.fields.data.assetRequired') as string
            }
            options={assets}
            validations={[
              {
                rule: (value) => {
                  return form.values.source_account !== value;
                },
                deps: [form.values.source_account],
                message: t('recurring:recurring.fields.error.sameAccount'),
              },
            ]}
          />
        </>
      );
    }
  };

  const cycles = (): ISelectOptions[] => {
    const options: ISelectOptions[] = [];
    const monthly: ISelectOptions = {
      label: t('recurring:recurring.cycleType.monthly'),
      value: 1,
      data: {},
    };
    options.push(monthly);

    const quarterly: ISelectOptions = {
      label: t('recurring:recurring.cycleType.quarterly'),
      value: 2,
      data: {},
    };
    options.push(quarterly);

    const halfYearly: ISelectOptions = {
      label: t('recurring:recurring.cycleType.halfYearly'),
      value: 3,
      data: {},
    };
    options.push(halfYearly);

    const annually: ISelectOptions = {
      label: t('recurring:recurring.cycleType.annually'),
      value: 4,
      data: {},
    };
    options.push(annually);

    return options;
  };

  const durations = (): ISelectOptions[] => {
    const options: ISelectOptions[] = [];
    const forever: ISelectOptions = {
      label: t('recurring:recurring.durationType.forever'),
      value: 1,
      data: {},
    };
    options.push(forever);

    const untilDate: ISelectOptions = {
      label: t('recurring:recurring.durationType.untilDate'),
      value: 2,
      data: {},
    };
    options.push(untilDate);

    const numberOfTimes: ISelectOptions = {
      label: t('recurring:recurring.durationType.numberOfTimes'),
      value: 3,
      data: {},
    };
    options.push(numberOfTimes);

    return options;
  };

  const transactionTypes = (): ISelectOptions[] => {
    const options: ISelectOptions[] = [];
    const expense: ISelectOptions = {
      label: t('recurring:recurring.transactionType.expense'),
      value: 1,
      data: {},
    };
    options.push(expense);

    const deposit: ISelectOptions = {
      label: t('recurring:recurring.transactionType.deposit'),
      value: 2,
      data: {},
    };
    options.push(deposit);

    const transfer: ISelectOptions = {
      label: t('recurring:recurring.transactionType.transfer'),
      value: 3,
      data: {},
    };
    options.push(transfer);

    return options;
  };

  return (
    <ModalDialog
      title={t('recurring:recurring.actions.create')}
      dialogForm={form}
      isOpen={isOpen}
      onCancel={() => {
        onClose();
      }}
      onConfirm={onConfirmCreate}
      loading={insertLoading}
      formId="recurring-form-id"
      initialValues={{
        start_on: dayjs().toDate(),
        source_account: defaultAccount,
        cycle_type: 1,
        transaction_type: 1,
        duration_type: 1,
      }}
    >
      <FieldInput
        name="title"
        label={t('recurring:recurring.fields.data.title')}
        required={t('recurring:recurring.fields.data.titleRequired') as string}
      />
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldCurrency
          name="amount"
          label={t('recurring:recurring.fields.data.amount')}
          placeholder={0}
          currency="EUR"
          required={
            t('recurring:recurring.fields.data.amountRequired') as string
          }
        />
        <FieldDayPicker
          name="start_on"
          label={t('recurring:recurring.fields.data.startOn')}
          required={
            t('recurring:recurring.fields.data.startOnRequired') as string
          }
        />
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldSelect
          name="cycle_type"
          label={t('recurring:recurring.fields.data.cycleType')}
          options={cycles()}
          isClearable={false}
        />
        <FieldSelect
          name="duration_type"
          label={t('recurring:recurring.fields.data.durationType')}
          options={durations()}
          onChange={(e) => setDurationType(e)}
          isClearable={false}
        />
      </Stack>
      {updateDurationTypeView()}
      <FieldSelect
        name="transaction_type"
        label={t('recurring:recurring.fields.data.transactionType')}
        options={transactionTypes()}
        onChange={(e) => setTransactionType(e)}
        isClearable={false}
      />
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        {getSourceAndTargetAccounts()}
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldSelect
          name="category_id"
          label={t('recurring:recurring.fields.data.category')}
          options={categories}
          size="sm"
          isCreatable={true}
          onCreateOption={onCreateCategory}
        />
        <FieldSelect
          name="labels"
          label={t('recurring:recurring.fields.data.labels')}
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
        label={t('recurring:recurring.fields.data.description')}
        type={'text'}
        placeholder={t('recurring:recurring.fields.data.description') as string}
      />
    </ModalDialog>
  );
};
