import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FieldCurrency } from '@/components/FieldCurrency';
import { FieldDayPicker } from '@/components/FieldDayPicker';
import { FieldInput } from '@/components/FieldInput';
import { FieldSelect } from '@/components/FieldSelect';
import { ModalDialog } from '@/components/ModalDialog';
import {
  ActiveAssetAccountsDocument,
  ActiveCategoriesDocument,
  ActiveExpenseAccountsDocument,
  ActiveRevenueAccountsDocument,
  AllLabelsDocument,
  Assets,
  Recurring,
  useInsertCategoryMutation,
  useInsertExpenseAccMutation,
  useInsertLabelMutation,
  useInsertRecurringMutation,
  useInsertRevenueAccMutation,
  useUpdateRecurringMutation,
} from '@/generated/graphql';
import { useDataToSelectorConverter } from '@/hooks/useDataToSelectorConverter';
import { useMutationOptions } from '@/hooks/useMutationOptions';
import { DurationType, ISelectOptions, TransactionType } from '@/types/types';
import { Stack } from '@chakra-ui/react';
import { useForm } from '@formiz/core';

export interface RecurringDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues?: Recurring;
  isEditing: boolean;
  id: bigint;
}

export const RecurringDialog = (props: RecurringDialogProps) => {
  let defaultAccount;

  dayjs.extend(customParseFormat);

  const { id, initialValues, isEditing, isOpen, onClose } = props;

  const [transactionType, setTransactionType] = useState<number | undefined>(1);
  const [durationType, setDurationType] = useState<number>(1);
  const { t } = useTranslation('recurring');
  const { mutationOptions } = useMutationOptions();
  const form = useForm();

  const [insertLabel] = useInsertLabelMutation(mutationOptions);
  const [insertCategory] = useInsertCategoryMutation(mutationOptions);
  const [insertExpense] = useInsertExpenseAccMutation(mutationOptions);
  const [insertRevenue] = useInsertRevenueAccMutation(mutationOptions);
  const [insertRecurring, { loading: insertLoading }] = useInsertRecurringMutation(mutationOptions);

  const [updateRecurring, { loading: updateLoading }] = useUpdateRecurringMutation(mutationOptions);

  const { selectOptions: categories } = useDataToSelectorConverter({
    entity: 'categories',
    query: ActiveCategoriesDocument,
  });

  const { selectOptions: allLabels } = useDataToSelectorConverter({
    entity: 'labels',
    query: AllLabelsDocument,
  });

  const { selectOptions: expenses } = useDataToSelectorConverter({
    entity: 'expenses',
    query: ActiveExpenseAccountsDocument,
    skipQuery: transactionType !== TransactionType.Expense && transactionType === TransactionType.None,
  });

  const { selectOptions: revenues } = useDataToSelectorConverter({
    entity: 'revenues',
    query: ActiveRevenueAccountsDocument,
    skipQuery: transactionType !== TransactionType.Income && transactionType === TransactionType.None,
    onComplete: (data) => (defaultAccount = data.find((x) => x.data['default'] === true)?.value),
  });

  const { selectOptions: assets } = useDataToSelectorConverter<Assets>({
    entity: 'assets',
    query: ActiveAssetAccountsDocument,
    skipQuery: transactionType === TransactionType.None,
    onComplete: (data) => {
      if (transactionType === TransactionType.Expense) {
        defaultAccount = data.find((x) => x.default === true)?.value;
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
    }).then((x) => x.data?.insert_expenses_one?.id);
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
    }).then((x) => x.data?.insert_revenues_one?.id);
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
    }).then((x) => x?.data?.insert_categories_one?.id);
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

  const onSubmit = async (values) => {
    const { labels, ...rest } = values;

    if (isEditing) {
      const submitData = {
        ...rest,
      };

      const recurring_labels: any[] = [];

      if (labels) {
        labels.forEach((x) => recurring_labels.push({ label_id: x, recurring_id: id }));
      }

      await updateRecurring({
        variables: {
          id: id,
          changes: (({ title, amount, description, account_from, account_to, category_id }) => ({
            title,
            amount,
            description,
            account_from,
            account_to,
            category_id,
          }))(submitData),
          labels: recurring_labels,
        },
      });
    } else {
      const submitData = {
        ...rest,
        recurring_labels: { data: [] },
      };

      if (labels) {
        labels.forEach((x) => submitData.recurring_labels.data.push({ label_id: x }));
      }

      const startOn = dayjs(submitData.start_on);
      submitData.start_on = startOn.format('YYYY-MM-DD');

      await insertRecurring({
        variables: {
          object: submitData,
        },
      });
    }
  };

  const updateDurationTypeView = (): React.ReactNode => {
    if (durationType === DurationType.UntilDate) {
      return (
        <FieldDayPicker
          name="until_date"
          isDisabled={isEditing}
          size="sm"
          label={t('recurring.fields.data.untilDate').toString()}
          required={t('recurring.fields.data.untilDate').toString()}
        />
      );
    }

    if (durationType === DurationType.NumberOfTimes) {
      return (
        <FieldInput
          name="no_of_times"
          isDisabled={isEditing}
          size="sm"
          label={t('recurring.fields.data.numberOfTimes').toString()}
          type={'number'}
          placeholder={t('recurring.fields.data.numberOfTimes').toString()}
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
            label={t('recurring.fields.data.asset')}
            required={t('recurring.fields.data.assetRequired').toString()}
            options={assets}
          />
          <FieldSelect
            name="account_to"
            label={t('recurring.fields.data.expense')}
            required={t('recurring.fields.data.expenseRequired').toString()}
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
            label={t('recurring.fields.data.revenue')}
            required={t('recurring.fields.data.revenueRequired').toString()}
            options={revenues}
            isCreatable={true}
            onCreateOption={onCreateRevenueAccount}
          />

          <FieldSelect
            name="account_to"
            label={t('recurring.fields.data.asset')}
            required={t('recurring.fields.data.assetRequired').toString()}
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
            label={t('recurring.fields.data.fromAsset')}
            required={t('recurring.fields.data.assetRequired').toString()}
            options={assets}
          />

          <FieldSelect
            name="account_to"
            label={t('recurring.fields.data.toAsset')}
            required={t('recurring.fields.data.assetRequired').toString()}
            options={assets}
            validations={[
              {
                rule: (value) => {
                  return form.values.source_account !== value;
                },
                deps: [form.values.source_account],
                message: t('recurring.fields.error.sameAccount').toString(),
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
      label: t('recurring.cycleType.monthly'),
      value: 1,
      data: {},
    };
    options.push(monthly);

    const quarterly: ISelectOptions = {
      label: t('recurring.cycleType.quarterly'),
      value: 2,
      data: {},
    };
    options.push(quarterly);

    const halfYearly: ISelectOptions = {
      label: t('recurring.cycleType.halfYearly'),
      value: 3,
      data: {},
    };
    options.push(halfYearly);

    const annually: ISelectOptions = {
      label: t('recurring.cycleType.annually'),
      value: 4,
      data: {},
    };
    options.push(annually);

    return options;
  };

  const durations = (): ISelectOptions[] => {
    const options: ISelectOptions[] = [];
    const forever: ISelectOptions = {
      label: t('recurring.durationType.forever'),
      value: 1,
      data: {},
    };
    options.push(forever);

    const untilDate: ISelectOptions = {
      label: t('recurring.durationType.untilDate'),
      value: 2,
      data: {},
    };
    options.push(untilDate);

    const numberOfTimes: ISelectOptions = {
      label: t('recurring.durationType.numberOfTimes'),
      value: 3,
      data: {},
    };
    options.push(numberOfTimes);

    return options;
  };

  const transactionTypes = (): ISelectOptions[] => {
    const options: ISelectOptions[] = [];
    const expense: ISelectOptions = {
      label: t('recurring.transactionType.expense'),
      value: 1,
      data: {},
    };
    options.push(expense);

    const deposit: ISelectOptions = {
      label: t('recurring.transactionType.deposit'),
      value: 2,
      data: {},
    };
    options.push(deposit);

    const transfer: ISelectOptions = {
      label: t('recurring.transactionType.transfer'),
      value: 3,
      data: {},
    };
    options.push(transfer);

    return options;
  };

  useEffect(() => {
    if (isEditing) {
      setTransactionType(initialValues?.transaction_type);
      setDurationType(initialValues?.duration_type);
    } else {
      setTransactionType(1);
      setDurationType(0);
    }
  }, [initialValues]);

  return (
    <ModalDialog
      title={isEditing ? t('recurring.actions.edit') : t('recurring.actions.create')}
      dialogForm={form}
      isOpen={isOpen}
      onCancel={() => {
        onClose();
      }}
      onConfirm={onSubmit}
      loading={insertLoading || updateLoading}
      formId="recurring-form-id"
      showAddAnotherOne={!isEditing}
      initialValues={{
        source_account: defaultAccount,
        cycle_type: 1,
        transaction_type: 1,
        duration_type: 1,
        no_of_times: 1,
        ...initialValues,
        start_on: isEditing ? dayjs(initialValues.start_on).toDate() : dayjs().toDate(),
      }}
    >
      <FieldInput name="title" label={t('recurring.fields.data.title')} required={t('recurring.fields.data.titleRequired')} />
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldCurrency
          name="amount"
          label={t('recurring.fields.data.amount')}
          placeholder={0}
          currency="EUR"
          required={t('recurring.fields.data.amountRequired')}
        />
        <FieldDayPicker
          name="start_on"
          isDisabled={isEditing}
          label={t('recurring.fields.data.startOn')}
          required={t('recurring.fields.data.startOnRequired')}
        />
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
        <FieldSelect name="cycle_type" isDisabled={isEditing} label={t('recurring.fields.data.cycleType')} options={cycles()} isClearable={false} />
        <FieldSelect
          name="duration_type"
          isDisabled={isEditing}
          label={t('recurring.fields.data.durationType')}
          options={durations()}
          onChange={(e) => setDurationType(e)}
          isClearable={false}
        />
      </Stack>
      {updateDurationTypeView()}
      <FieldSelect
        name="transaction_type"
        isDisabled={isEditing}
        label={t('recurring.fields.data.transactionType')}
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
          label={t('recurring.fields.data.category')}
          options={categories}
          size="sm"
          isCreatable={true}
          onCreateOption={onCreateCategory}
          defaultValue={initialValues?.category_id}
        />
        <FieldSelect
          name="labels"
          label={t('recurring.fields.data.labels')}
          options={allLabels}
          size="sm"
          isCreatable={true}
          onCreateOption={onCreateLabel}
          closeMenuOnSelect={false}
          isMulti={true}
          defaultValue={initialValues?.recurring_labels.map((x) => x.label_id)}
        />
      </Stack>
      <FieldInput name="description" label={t('recurring.fields.data.description')} type={'text'} placeholder={t('recurring.fields.data.description')} />
    </ModalDialog>
  );
};
