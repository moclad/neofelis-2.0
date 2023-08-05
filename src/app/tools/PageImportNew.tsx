import dayjs from 'dayjs';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';
import { Data, Field, SelectOption } from 'react-spreadsheet-import/types/types';

import { Page, PageContent } from '@/app/layout';
import { FieldSelect } from '@/components/FieldSelect';
import {
  ActiveAssetAccountsDocument,
  ActiveCategoriesDocument,
  AllActiveAccountsQuery,
  Assets,
  Categories,
  Expenses_Insert_Input,
  Import_Asset_File_Insert_Input,
  Transactions_Arr_Rel_Insert_Input,
  Transactions_Insert_Input,
  useAllActiveAccountsQuery,
  useInsertExpenseAccountsMutation,
  useInsertImportAssetDataMutation,
} from '@/generated/graphql';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useDataToSelectorConverter } from '@/hooks/useDataToSelectorConverter';
import { useMutationOptions } from '@/hooks/useMutationOptions';
import { Button, Flex, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';

import { ITransactionAccount } from '../../types/types';
import { ImporterFields } from './ImporterFields';
import { ToolsNav } from './ToolsNav';

export const PageImportNew = () => {
  let defaultAccount;

  const fields = new ImporterFields();
  const { t } = useTranslation('tools');
  const { colorModeValue } = useDarkMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useForm();

  const categories: SelectOption[] = [];

  const accountOptionsList: SelectOption[] = useMemo(() => [], []);

  const { mutationOptions } = useMutationOptions();
  const [insertExpenses] = useInsertExpenseAccountsMutation(mutationOptions);
  const [insertImportAsset, { loading }] = useInsertImportAssetDataMutation(mutationOptions);

  const { selectOptions: assets } = useDataToSelectorConverter<Assets>({
    entity: 'assets',
    query: ActiveAssetAccountsDocument,
    onComplete: (data) => {
      defaultAccount = data.find((x) => x.data.default === true)?.value ?? 0;
    },
  });

  const { data: allAccounts, refetch: refetchAllAccounts } = useAllActiveAccountsQuery();

  useEffect(() => {
    if (allAccounts?.all_active_accounts) {
      allAccounts.all_active_accounts.forEach((x) => accountOptionsList.push({ label: x.name ?? '', value: x.id }));
    }
  }, [allAccounts, accountOptionsList]);

  useDataToSelectorConverter<Categories>({
    entity: 'categories',
    query: ActiveCategoriesDocument,
    onComplete: (data) => {
      data.forEach((x) => categories.push({ label: x.label, value: x.value.toString() }));
    },
  });

  const getFields = () => {
    const sourceAccountField: Field<string> = {
      label: t('importer.fields.asset.label'),
      key: 'account',
      fieldType: {
        type: 'select',
        options: accountOptionsList,
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

    fields.Fields.splice(5, 0, categoryField);
    fields.Fields.splice(6, 0, sourceAccountField);
    return fields.Fields;
  };

  const getTransactionObject = (value: any): Transactions_Insert_Input => {
    const data: Transactions_Insert_Input = {};

    switch (value.type) {
      case '2':
        data.account_to = form.fields?.asset?.value;
        data.account_from = value.account;
        data.transaction_type = 2;
        data.amount = value.incomeAmount;
        break;
      case '3':
        data.account_from = form.fields?.asset?.value;
        data.account_to = value.account;
        data.transaction_type = 3;
        data.amount = value.amount;
        break;

      default:
        data.account_from = form.fields?.asset?.value;
        data.account_to = value.account;
        data.transaction_type = 1;
        data.amount = value.amount;
        break;
    }

    data.category_id = value.category;
    data.client_reference = value.clientReference;
    data.description = value.description;
    data.mandate_reference = value.mandateReference;
    data.transaction_date = dayjs(value.bookingDate, 'DD.MM.YYYY').toDate();
    data.account_no = value.account_no;

    const source: ITransactionAccount = {
      account_id: data.account_from ?? 0,
      amount: data.amount * -1,
    };

    const target: ITransactionAccount = {
      account_id: data.account_to ?? 0,
      amount: data.amount,
    };
    data.transaction_accounts = { data: [source, target] };

    return data;
  };

  const createNewExpenseAccounts = async (dataRows: any) => {
    const accounts = dataRows.validData.filter((x: any) => x.type === '1' && (!x.account || x.account === undefined));

    if (accounts.length === 0) {
      return;
    }

    const distinctRows = accounts.reduce((accumulator: any[], currentRow: any) => {
      const duplicateRow = accumulator.find((row) => row.beneficiary === currentRow.beneficiary && row.account_no === currentRow.account_no);

      if (!duplicateRow) {
        accumulator.push(currentRow);
      }

      return accumulator;
    }, []);

    const newAccounts: Expenses_Insert_Input[] = [];

    distinctRows.forEach((x: any) =>
      newAccounts.push({
        category_id: x.category,
        name: x.beneficiary,
        alternate_name: x.beneficiary,
        account_no: x.account_no,
        account_info: { data: { type: 'E', name: x.beneficiary } },
      })
    );

    if (newAccounts.length > 0) {
      await insertExpenses({
        variables: {
          objects: newAccounts,
        },
        refetchQueries: 'all',
      });
    }
  };

  const submit = async (dataRows: any) => {
    await createNewExpenseAccounts(dataRows);
    const result = await refetchAllAccounts();

    const updatedDataRows = dataRows.validData;

    updatedDataRows.forEach((x: any) => {
      setAccount(x, result.data);
    });

    const transactionObjects = updatedDataRows.map((x: any) => getTransactionObject(x));

    const transactions: Transactions_Arr_Rel_Insert_Input = {
      data: transactionObjects,
    };

    const data: Import_Asset_File_Insert_Input = {
      asset_id: form.values.asset,
      transactions,
    };

    await insertImportAsset({
      variables: {
        object: data,
      },
    });
  };

  const setAmountAndType = (data: Data<string>) => {
    if (data.incomeAmount) {
      let txt = data.incomeAmount as string;
      txt = txt.replace(/[.]/gm, '');
      txt = txt.replace(',', '.');

      const amount = parseFloat(txt);
      data.incomeAmount = amount.toFixed(2);
      data.type = '2';
      return;
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

        const candidates = allAccounts?.all_active_accounts?.filter((a) => a.account_no && accountRegex.test(a.account_no));

        if (candidates && candidates.length > 0) {
          data.type = '3';
          data.account = candidates[0]?.id;
          data.category = candidates[0]?.category_id?.toString();
        }
      }
    }
  };

  const setBeneficiary = (data: Data<string>) => {
    if (!data.beneficiary && data.description) {
      data.beneficiary = (data.description as string).split('//', 1)[0];
      data.beneficiary = (data.description as string).split('/', 1)[0];
      if (data.beneficiary) {
        const value = data.beneficiary.split('.', 1)[0];
        if (value && value.length > 3) {
          data.beneficiary = value;
        }
      }
    }
  };

  const setAccount = (data: Data<string>, accounts: AllActiveAccountsQuery) => {
    const asset = data.beneficiary as string;
    const account = data.account_no as string;

    const searchFor = [];
    if (asset) {
      searchFor.push(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }
    if (account) {
      searchFor.push(account.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }

    const regex = new RegExp(searchFor.join('|'), 'i');

    const candidates = accounts?.all_active_accounts.filter((e) => {
      if (e.account_no && regex.test(e.account_no)) {
        return true;
      }

      if (e.alternate_name && regex.test(e.alternate_name)) {
        return true;
      }

      if (!e.name) {
        return false;
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
      if (allAccounts !== undefined) {
        setAccount(x, allAccounts);
      }
    });

    return data;
  };

  const startImport = () => {
    onOpen();
  };

  return (
    <Page nav={<ToolsNav />}>
      <PageContent loading={loading}>
        <Heading size="md" mb="4">
          {t('importer.page.title').toString()}
        </Heading>
        <Formiz connect={form} id="import-csv-form" initialValues={{ asset: defaultAccount }}>
          <form onSubmit={form.submit} noValidate>
            <Stack direction="column" bg={colorModeValue('white', 'blackAlpha.400')} p="6" borderRadius="lg" spacing="6" shadow="md">
              <Stack direction={{ base: 'column', sm: 'row' }} spacing="6">
                <FieldSelect name="asset" label={t('importer.page.asset').toString()} required={t('importer.page.assetRequired').toString()} options={assets} />
              </Stack>
              <Flex>
                <Button variant="@primary" ms="auto" type="submit" onClick={startImport} disabled={!form.isValid && form.isSubmitted}>
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
