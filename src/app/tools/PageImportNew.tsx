import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';
import { Data, Field, SelectOption } from 'react-spreadsheet-import/types/types';

import { Page, PageContent } from '@/app/layout';
import { FieldSelect } from '@/components/FieldSelect';
import { useToastError, useToastSuccess } from '@/components/Toast';
import {
  ActiveAssetAccountsDocument,
  ActiveCategoriesDocument,
  Assets,
  Categories,
  useActiveExpenseAccountsQuery,
  useAllActiveAccountsQuery,
  useInsertTransactionsImportMutation,
} from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useDataToSelectorConverter } from '@/hooks/useDataToSelectorConverter';
import { useQuery } from '@apollo/client';
import { Button, Flex, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';

import { Columns, ImporterFields } from './ImporterFields';
import { ToolsNav } from './ToolsNav';

export const PageImportNew = () => {
  let defaultAccount;

  const fields = new ImporterFields();
  const { t } = useTranslation('tools');
  const { colorModeValue } = useDarkMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const form = useForm();

  const categories: SelectOption[] = [];
  const expenseAccounts: SelectOption[] = [];

  const { selectOptions: assets } = useDataToSelectorConverter<Assets>({
    entity: 'assets',
    query: ActiveAssetAccountsDocument,
    onComplete: (data) => {
      defaultAccount = data.find((x) => x.data.default === true)?.value;
    },
  });

  const { data: expenses } = useActiveExpenseAccountsQuery();

  useEffect(() => {
    if (expenses?.expenses) {
      expenses.expenses.forEach((x) => expenseAccounts.push({ label: x.name, value: x.id }));
    }
  }, [expenseAccounts, expenses]);

  useDataToSelectorConverter<Categories>({
    entity: 'categories',
    query: ActiveCategoriesDocument,
    onComplete: (data) => {
      data.forEach((x) => categories.push({ label: x.label, value: x.value.toString() }));
    },
  });

  const [insertTransactionsImport, { loading }] = useInsertTransactionsImportMutation({
    onError: (error) => {
      toastError({
        title: t('feedbacks.updateError.title', { ns: 'common' }),
        description: error.message,
      });
    },
    onCompleted: () => {
      toastSuccess({
        title: t('feedbacks.updateSuccess.title', { ns: 'common' }),
      });
    },
  });

  const submit = async (values: any) => {
    console.log(values.all.map((value: any) => value));

    /*

    const file = '';
    const data = {
      ...values,
      file_name: file,
      status: 0,
    };

    await insertTransactionsImport({
      variables: {
        object: data,
      },
    });*/
  };

  const getFields = () => {
    const sourceAccountField: Field<string> = {
      label: t('importer.fields.asset.label'),
      key: 'account',
      fieldType: {
        type: 'select',
        options: expenseAccounts,
      },
    };
    const categoryField: Field<string> = {
      label: t('importer.fields.category.label'),
      key: 'category',
      fieldType: {
        type: 'select',
        options: categories,
      },
    };
    const typeField: Field<string> = {
      label: t('importer.fields.type.label'),
      key: 'type',
      fieldType: {
        type: 'select',
        options: [
          { label: t('importer.fields.type.expense'), value: '1' },
          { label: t('importer.fields.type.income'), value: '2' },
          { label: t('importer.fields.type.transfer'), value: '3' },
        ],
      },
      validations: [
        {
          rule: 'required',
          errorMessage: t('importer.fields.type.errorMessage'),
          level: 'error',
        },
      ],
    };

    fields.Fields.push(categoryField);
    fields.Fields.push(typeField);
    fields.Fields.push(sourceAccountField);
    return fields.Fields;
  };

  const setAmountAndType = (data: Data<string>) => {
    if (data.incomeAmount) {
      let txt = data.incomeAmount as string;
      txt = txt.replace(/[.]/gm, '');
      txt = txt.replace(',', '.');

      const amount = parseFloat(txt);
      data.incomeAmount = amount.toFixed(2);
      data.type = '2';
    }

    if (data.amount) {
      let txt = data.amount as string;
      txt = txt.replace(/[.]/gm, '');
      txt = txt.replace(',', '.');

      const amount = parseFloat(txt);

      if (amount < 0) {
        data.amount = (amount * -1).toFixed(2);
        data.type = '1';
      } else {
        data.type = '2';
      }

      const account_no = data.account_no as string;
      if (account_no) {
        const accountRegex = new RegExp(account_no, 'i');

        const candidates = assets.filter((a) => a.data.account_no && accountRegex.test(a.data.account_no));

        if (candidates && candidates.length > 0) {
          data.type = '3';
        }
      }
    }
  };

  const setBeneficiary = (data: Data<string>) => {
    if (!data.beneficiary && data.description) {
      data.beneficiary = (data.description as string).split('//', 1)[0];
      if (data.beneficiary) {
        const value = data.beneficiary.split('.', 1)[0];
        if (value && value.length > 3) {
          data.beneficiary = value;
        }
      }
    }
  };

  const setExpenseAccount = (data: Data<string>) => {
    const asset = data.beneficiary as string;
    const account = data.account as string;

    const searchFor = [];
    if (asset) {
      searchFor.push(asset);
    }
    if (account) {
      searchFor.push(account);
    }

    const regex = new RegExp(searchFor.join('|'), 'i');

    const candidates = expenses?.expenses.filter((e) => {
      if (e.alternate_name && regex.test(e.alternate_name)) {
        return true;
      }

      if (e.account_no && regex.test(e.account_no)) {
        return true;
      }

      return regex.test(e.name);
    });

    if (candidates && candidates.length > 0) {
      data.category = candidates[0]?.category_id?.toString();
      data.account = candidates[0]?.id;
    }
  };

  const validateData = async (data: Data<string>[]) => {
    data.forEach((x) => {
      setAmountAndType(x);
      setBeneficiary(x);
      setExpenseAccount(x);
    });

    return data;
  };

  return (
    <Page nav={<ToolsNav />}>
      <PageContent loading={loading}>
        <Heading size="md" mb="4">
          {t('importer.page.title').toString()}
        </Heading>
        <Formiz
          id="import-csv-form"
          initialValues={{
            asset: defaultAccount,
          }}
        >
          <form noValidate onSubmit={form.submit}>
            <Stack direction="column" bg={colorModeValue('white', 'blackAlpha.400')} p="6" borderRadius="lg" spacing="6" shadow="md">
              <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
                <FieldSelect name="asset" label={t('importer.page.asset').toString()} required={t('importer.page.assetRequired').toString()} options={assets} />
              </Stack>
              <Flex>
                <Button variant="@primary" ms="auto" onClick={() => onOpen()}>
                  {t('importer.page.start').toString()}
                </Button>
              </Flex>
            </Stack>
          </form>
        </Formiz>
        <ReactSpreadsheetImport
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={submit}
          fields={getFields()}
          matchColumnsStepHook={async (data: any) => await validateData(data)}
        />
      </PageContent>
    </Page>
  );
};
