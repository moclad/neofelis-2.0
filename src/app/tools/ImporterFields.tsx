import { useTranslation } from 'react-i18next';
import { Fields } from 'react-spreadsheet-import/types/types';

export interface Columns {
  bookingDay: string;
  amount: string;
  asset?: string;
  income: string;
  description: string;
  account: string;
  clientReference: string;
  mandateReference: string;
  currency: string;
  category: string;
}

export class ImporterFields {
  private t = useTranslation('tools');

  Fields: Fields<string>[] = [
    {
      label: this.t.t('importer.fields.bookingDate.label'),
      key: 'bookingDate',
      fieldType: {
        type: 'input',
      },
      example: '20/10/2023',
      alternateMatches: [this.t.t('importer.fields.bookingDate.alternateMatch1')],

      validations: [
        {
          rule: 'required',
          errorMessage: this.t.t('importer.fields.bookingDate.errorMessage'),
          level: 'error',
        },
      ],
    },
    {
      label: this.t.t('importer.fields.amount.label'),
      key: 'amount',
      alternateMatches: [this.t.t('importer.fields.amount.alternateMatch1'), this.t.t('importer.fields.amount.alternateMatch2')],
      fieldType: {
        type: 'input',
      },
      example: 100.0,
    },
    {
      label: this.t.t('importer.fields.beneficiary.label'),
      key: 'beneficiary',
      alternateMatches: [
        this.t.t('importer.fields.beneficiary.alternateMatch1'),
        this.t.t('importer.fields.beneficiary.alternateMatch2'),
        this.t.t('importer.fields.beneficiary.alternateMatch3'),
      ],
      fieldType: {
        type: 'input',
      },
      example: 'Acme Ltd.',
    },
    {
      label: this.t.t('importer.fields.incomeAmount.label'),
      key: 'incomeAmount',
      alternateMatches: [this.t.t('importer.fields.incomeAmount.alternateMatch1')],
      fieldType: {
        type: 'input',
      },
      example: 100.0,
    },
    {
      label: this.t.t('importer.fields.description.label'),
      key: 'description',
      fieldType: {
        type: 'input',
      },
      alternateMatches: [this.t.t('importer.fields.description.alternateMatch1')],
      example: this.t.t('importer.fields.description.example'),
    },
    {
      label: this.t.t('importer.fields.account_no.label'),
      key: 'account_no',
      fieldType: {
        type: 'input',
      },
      example: this.t.t('importer.fields.account_no.example'),
      alternateMatches: [this.t.t('importer.fields.account_no.alternateMatch1'), this.t.t('importer.fields.account_no.alternateMatch2')],
    },
    {
      label: this.t.t('importer.fields.clientReference.label'),
      key: 'clientReference',
      fieldType: {
        type: 'input',
      },
      alternateMatches: [this.t.t('importer.fields.clientReference.alternateMatch1'), this.t.t('importer.fields.clientReference.alternateMatch2')],
    },
    {
      label: this.t.t('importer.fields.mandateReference.label'),
      key: 'mandateReference',
      fieldType: {
        type: 'input',
      },
      alternateMatches: [this.t.t('importer.fields.mandateReference.alternateMatch1')],
    },
    {
      label: this.t.t('importer.fields.currency.label'),
      key: 'currency',
      alternateMatches: [this.t.t('importer.fields.currency.alternateMatch1')],
      fieldType: {
        type: 'select',
        options: [
          { label: 'Euro', value: 'euro' },
          { label: 'US Dollar', value: 'dollar' },
        ],
      },
    },
  ];
}
