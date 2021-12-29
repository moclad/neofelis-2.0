import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bpchar: any;
  date: any;
  float8: any;
  timestamptz: string;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "account_info" */
export type Account_Info = {
  __typename?: 'account_info';
  /** An object relationship */
  asset: Assets;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  expense: Expenses;
  id: Scalars['bigint'];
  /** An object relationship */
  liability: Liabilities;
  /** An object relationship */
  revenue: Revenues;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An array relationship */
  transactionsBySourceAccount: Array<Transactions>;
  /** An aggregate relationship */
  transactionsBySourceAccount_aggregate: Transactions_Aggregate;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  type: Scalars['bpchar'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "account_info" */
export type Account_InfoTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoTransactionsBySourceAccountArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoTransactionsBySourceAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "account_info" */
export type Account_Info_Aggregate = {
  __typename?: 'account_info_aggregate';
  aggregate?: Maybe<Account_Info_Aggregate_Fields>;
  nodes: Array<Account_Info>;
};

/** aggregate fields of "account_info" */
export type Account_Info_Aggregate_Fields = {
  __typename?: 'account_info_aggregate_fields';
  avg?: Maybe<Account_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_Info_Max_Fields>;
  min?: Maybe<Account_Info_Min_Fields>;
  stddev?: Maybe<Account_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Info_Sum_Fields>;
  var_pop?: Maybe<Account_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Info_Var_Samp_Fields>;
  variance?: Maybe<Account_Info_Variance_Fields>;
};

/** aggregate fields of "account_info" */
export type Account_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Account_Info_Avg_Fields = {
  __typename?: 'account_info_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "account_info". All fields are combined with a logical 'AND'. */
export type Account_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Info_Bool_Exp>>;
  _not?: InputMaybe<Account_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Info_Bool_Exp>>;
  asset?: InputMaybe<Assets_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expense?: InputMaybe<Expenses_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  liability?: InputMaybe<Liabilities_Bool_Exp>;
  revenue?: InputMaybe<Revenues_Bool_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  transactionsBySourceAccount?: InputMaybe<Transactions_Bool_Exp>;
  type?: InputMaybe<Bpchar_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "account_info" */
export enum Account_Info_Constraint {
  /** unique or primary key constraint */
  AccountInfoPkey = 'account_info_pkey',
}

/** input type for incrementing numeric columns in table "account_info" */
export type Account_Info_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "account_info" */
export type Account_Info_Insert_Input = {
  asset?: InputMaybe<Assets_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expense?: InputMaybe<Expenses_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']>;
  liability?: InputMaybe<Liabilities_Obj_Rel_Insert_Input>;
  revenue?: InputMaybe<Revenues_Obj_Rel_Insert_Input>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  transactionsBySourceAccount?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['bpchar']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Account_Info_Max_Fields = {
  __typename?: 'account_info_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Account_Info_Min_Fields = {
  __typename?: 'account_info_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "account_info" */
export type Account_Info_Mutation_Response = {
  __typename?: 'account_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account_Info>;
};

/** input type for inserting object relation for remote table "account_info" */
export type Account_Info_Obj_Rel_Insert_Input = {
  data: Account_Info_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Account_Info_On_Conflict>;
};

/** on conflict condition type for table "account_info" */
export type Account_Info_On_Conflict = {
  constraint: Account_Info_Constraint;
  update_columns?: Array<Account_Info_Update_Column>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "account_info". */
export type Account_Info_Order_By = {
  asset?: InputMaybe<Assets_Order_By>;
  created_at?: InputMaybe<Order_By>;
  expense?: InputMaybe<Expenses_Order_By>;
  id?: InputMaybe<Order_By>;
  liability?: InputMaybe<Liabilities_Order_By>;
  revenue?: InputMaybe<Revenues_Order_By>;
  transactionsBySourceAccount_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account_info */
export type Account_Info_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "account_info" */
export enum Account_Info_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "account_info" */
export type Account_Info_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  type?: InputMaybe<Scalars['bpchar']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Account_Info_Stddev_Fields = {
  __typename?: 'account_info_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Account_Info_Stddev_Pop_Fields = {
  __typename?: 'account_info_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Account_Info_Stddev_Samp_Fields = {
  __typename?: 'account_info_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Account_Info_Sum_Fields = {
  __typename?: 'account_info_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "account_info" */
export enum Account_Info_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Account_Info_Var_Pop_Fields = {
  __typename?: 'account_info_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Account_Info_Var_Samp_Fields = {
  __typename?: 'account_info_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Account_Info_Variance_Fields = {
  __typename?: 'account_info_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "assets" */
export type Assets = {
  __typename?: 'assets';
  /** An object relationship */
  account_info: Account_Info;
  account_no?: Maybe<Scalars['String']>;
  active: Scalars['Boolean'];
  balance?: Maybe<Scalars['float8']>;
  balance_date?: Maybe<Scalars['date']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "assets" */
export type Assets_Aggregate = {
  __typename?: 'assets_aggregate';
  aggregate?: Maybe<Assets_Aggregate_Fields>;
  nodes: Array<Assets>;
};

/** aggregate fields of "assets" */
export type Assets_Aggregate_Fields = {
  __typename?: 'assets_aggregate_fields';
  avg?: Maybe<Assets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Assets_Max_Fields>;
  min?: Maybe<Assets_Min_Fields>;
  stddev?: Maybe<Assets_Stddev_Fields>;
  stddev_pop?: Maybe<Assets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Assets_Stddev_Samp_Fields>;
  sum?: Maybe<Assets_Sum_Fields>;
  var_pop?: Maybe<Assets_Var_Pop_Fields>;
  var_samp?: Maybe<Assets_Var_Samp_Fields>;
  variance?: Maybe<Assets_Variance_Fields>;
};

/** aggregate fields of "assets" */
export type Assets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Assets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Assets_Avg_Fields = {
  __typename?: 'assets_avg_fields';
  balance?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "assets". All fields are combined with a logical 'AND'. */
export type Assets_Bool_Exp = {
  _and?: InputMaybe<Array<Assets_Bool_Exp>>;
  _not?: InputMaybe<Assets_Bool_Exp>;
  _or?: InputMaybe<Array<Assets_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  account_no?: InputMaybe<String_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  balance?: InputMaybe<Float8_Comparison_Exp>;
  balance_date?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "assets" */
export enum Assets_Constraint {
  /** unique or primary key constraint */
  AssetsPkey = 'assets_pkey',
}

/** input type for incrementing numeric columns in table "assets" */
export type Assets_Inc_Input = {
  balance?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "assets" */
export type Assets_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_no?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  balance?: InputMaybe<Scalars['float8']>;
  balance_date?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Assets_Max_Fields = {
  __typename?: 'assets_max_fields';
  account_no?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['float8']>;
  balance_date?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Assets_Min_Fields = {
  __typename?: 'assets_min_fields';
  account_no?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['float8']>;
  balance_date?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "assets" */
export type Assets_Mutation_Response = {
  __typename?: 'assets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assets>;
};

/** input type for inserting object relation for remote table "assets" */
export type Assets_Obj_Rel_Insert_Input = {
  data: Assets_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Assets_On_Conflict>;
};

/** on conflict condition type for table "assets" */
export type Assets_On_Conflict = {
  constraint: Assets_Constraint;
  update_columns?: Array<Assets_Update_Column>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

/** Ordering options when selecting data from "assets". */
export type Assets_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  account_no?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assets */
export type Assets_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "assets" */
export enum Assets_Select_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  Balance = 'balance',
  /** column name */
  BalanceDate = 'balance_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "assets" */
export type Assets_Set_Input = {
  account_no?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  balance?: InputMaybe<Scalars['float8']>;
  balance_date?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Assets_Stddev_Fields = {
  __typename?: 'assets_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Assets_Stddev_Pop_Fields = {
  __typename?: 'assets_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Assets_Stddev_Samp_Fields = {
  __typename?: 'assets_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Assets_Sum_Fields = {
  __typename?: 'assets_sum_fields';
  balance?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "assets" */
export enum Assets_Update_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  Balance = 'balance',
  /** column name */
  BalanceDate = 'balance_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Assets_Var_Pop_Fields = {
  __typename?: 'assets_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Assets_Var_Samp_Fields = {
  __typename?: 'assets_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Assets_Variance_Fields = {
  __typename?: 'assets_variance_fields';
  balance?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "categories" */
export type CategoriesTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey',
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "expenses" */
export type Expenses = {
  __typename?: 'expenses';
  /** An object relationship */
  account_info: Account_Info;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "expenses" */
export type Expenses_Aggregate = {
  __typename?: 'expenses_aggregate';
  aggregate?: Maybe<Expenses_Aggregate_Fields>;
  nodes: Array<Expenses>;
};

/** aggregate fields of "expenses" */
export type Expenses_Aggregate_Fields = {
  __typename?: 'expenses_aggregate_fields';
  avg?: Maybe<Expenses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Expenses_Max_Fields>;
  min?: Maybe<Expenses_Min_Fields>;
  stddev?: Maybe<Expenses_Stddev_Fields>;
  stddev_pop?: Maybe<Expenses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Expenses_Stddev_Samp_Fields>;
  sum?: Maybe<Expenses_Sum_Fields>;
  var_pop?: Maybe<Expenses_Var_Pop_Fields>;
  var_samp?: Maybe<Expenses_Var_Samp_Fields>;
  variance?: Maybe<Expenses_Variance_Fields>;
};

/** aggregate fields of "expenses" */
export type Expenses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Expenses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Expenses_Avg_Fields = {
  __typename?: 'expenses_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "expenses". All fields are combined with a logical 'AND'. */
export type Expenses_Bool_Exp = {
  _and?: InputMaybe<Array<Expenses_Bool_Exp>>;
  _not?: InputMaybe<Expenses_Bool_Exp>;
  _or?: InputMaybe<Array<Expenses_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "expenses" */
export enum Expenses_Constraint {
  /** unique or primary key constraint */
  ExpensesPkey = 'expenses_pkey',
}

/** input type for incrementing numeric columns in table "expenses" */
export type Expenses_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "expenses" */
export type Expenses_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Expenses_Max_Fields = {
  __typename?: 'expenses_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Expenses_Min_Fields = {
  __typename?: 'expenses_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "expenses" */
export type Expenses_Mutation_Response = {
  __typename?: 'expenses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Expenses>;
};

/** input type for inserting object relation for remote table "expenses" */
export type Expenses_Obj_Rel_Insert_Input = {
  data: Expenses_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Expenses_On_Conflict>;
};

/** on conflict condition type for table "expenses" */
export type Expenses_On_Conflict = {
  constraint: Expenses_Constraint;
  update_columns?: Array<Expenses_Update_Column>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

/** Ordering options when selecting data from "expenses". */
export type Expenses_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: expenses */
export type Expenses_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "expenses" */
export enum Expenses_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "expenses" */
export type Expenses_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Expenses_Stddev_Fields = {
  __typename?: 'expenses_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Expenses_Stddev_Pop_Fields = {
  __typename?: 'expenses_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Expenses_Stddev_Samp_Fields = {
  __typename?: 'expenses_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Expenses_Sum_Fields = {
  __typename?: 'expenses_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "expenses" */
export enum Expenses_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Expenses_Var_Pop_Fields = {
  __typename?: 'expenses_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Expenses_Var_Samp_Fields = {
  __typename?: 'expenses_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Expenses_Variance_Fields = {
  __typename?: 'expenses_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "labels" */
export type Labels = {
  __typename?: 'labels';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "labels" */
export type LabelsTransaction_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** columns and relationships of "labels" */
export type LabelsTransaction_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** aggregated selection of "labels" */
export type Labels_Aggregate = {
  __typename?: 'labels_aggregate';
  aggregate?: Maybe<Labels_Aggregate_Fields>;
  nodes: Array<Labels>;
};

/** aggregate fields of "labels" */
export type Labels_Aggregate_Fields = {
  __typename?: 'labels_aggregate_fields';
  avg?: Maybe<Labels_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Labels_Max_Fields>;
  min?: Maybe<Labels_Min_Fields>;
  stddev?: Maybe<Labels_Stddev_Fields>;
  stddev_pop?: Maybe<Labels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Labels_Stddev_Samp_Fields>;
  sum?: Maybe<Labels_Sum_Fields>;
  var_pop?: Maybe<Labels_Var_Pop_Fields>;
  var_samp?: Maybe<Labels_Var_Samp_Fields>;
  variance?: Maybe<Labels_Variance_Fields>;
};

/** aggregate fields of "labels" */
export type Labels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Labels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Labels_Avg_Fields = {
  __typename?: 'labels_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "labels". All fields are combined with a logical 'AND'. */
export type Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Labels_Bool_Exp>>;
  _not?: InputMaybe<Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Labels_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  transaction_labels?: InputMaybe<Transaction_Labels_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "labels" */
export enum Labels_Constraint {
  /** unique or primary key constraint */
  LabelsPkey = 'labels_pkey',
}

/** input type for incrementing numeric columns in table "labels" */
export type Labels_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "labels" */
export type Labels_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  transaction_labels?: InputMaybe<Transaction_Labels_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Labels_Max_Fields = {
  __typename?: 'labels_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Labels_Min_Fields = {
  __typename?: 'labels_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "labels" */
export type Labels_Mutation_Response = {
  __typename?: 'labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Labels>;
};

/** input type for inserting object relation for remote table "labels" */
export type Labels_Obj_Rel_Insert_Input = {
  data: Labels_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};

/** on conflict condition type for table "labels" */
export type Labels_On_Conflict = {
  constraint: Labels_Constraint;
  update_columns?: Array<Labels_Update_Column>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

/** Ordering options when selecting data from "labels". */
export type Labels_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  transaction_labels_aggregate?: InputMaybe<Transaction_Labels_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: labels */
export type Labels_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "labels" */
export enum Labels_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "labels" */
export type Labels_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Labels_Stddev_Fields = {
  __typename?: 'labels_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Labels_Stddev_Pop_Fields = {
  __typename?: 'labels_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Labels_Stddev_Samp_Fields = {
  __typename?: 'labels_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Labels_Sum_Fields = {
  __typename?: 'labels_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "labels" */
export enum Labels_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Labels_Var_Pop_Fields = {
  __typename?: 'labels_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Labels_Var_Samp_Fields = {
  __typename?: 'labels_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Labels_Variance_Fields = {
  __typename?: 'labels_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "liabilities" */
export type Liabilities = {
  __typename?: 'liabilities';
  /** An object relationship */
  account_info: Account_Info;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "liabilities" */
export type Liabilities_Aggregate = {
  __typename?: 'liabilities_aggregate';
  aggregate?: Maybe<Liabilities_Aggregate_Fields>;
  nodes: Array<Liabilities>;
};

/** aggregate fields of "liabilities" */
export type Liabilities_Aggregate_Fields = {
  __typename?: 'liabilities_aggregate_fields';
  avg?: Maybe<Liabilities_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Liabilities_Max_Fields>;
  min?: Maybe<Liabilities_Min_Fields>;
  stddev?: Maybe<Liabilities_Stddev_Fields>;
  stddev_pop?: Maybe<Liabilities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Liabilities_Stddev_Samp_Fields>;
  sum?: Maybe<Liabilities_Sum_Fields>;
  var_pop?: Maybe<Liabilities_Var_Pop_Fields>;
  var_samp?: Maybe<Liabilities_Var_Samp_Fields>;
  variance?: Maybe<Liabilities_Variance_Fields>;
};

/** aggregate fields of "liabilities" */
export type Liabilities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Liabilities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Liabilities_Avg_Fields = {
  __typename?: 'liabilities_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "liabilities". All fields are combined with a logical 'AND'. */
export type Liabilities_Bool_Exp = {
  _and?: InputMaybe<Array<Liabilities_Bool_Exp>>;
  _not?: InputMaybe<Liabilities_Bool_Exp>;
  _or?: InputMaybe<Array<Liabilities_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "liabilities" */
export enum Liabilities_Constraint {
  /** unique or primary key constraint */
  LiabiulitiesPkey = 'liabiulities_pkey',
}

/** input type for incrementing numeric columns in table "liabilities" */
export type Liabilities_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "liabilities" */
export type Liabilities_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Liabilities_Max_Fields = {
  __typename?: 'liabilities_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Liabilities_Min_Fields = {
  __typename?: 'liabilities_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "liabilities" */
export type Liabilities_Mutation_Response = {
  __typename?: 'liabilities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Liabilities>;
};

/** input type for inserting object relation for remote table "liabilities" */
export type Liabilities_Obj_Rel_Insert_Input = {
  data: Liabilities_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Liabilities_On_Conflict>;
};

/** on conflict condition type for table "liabilities" */
export type Liabilities_On_Conflict = {
  constraint: Liabilities_Constraint;
  update_columns?: Array<Liabilities_Update_Column>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

/** Ordering options when selecting data from "liabilities". */
export type Liabilities_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: liabilities */
export type Liabilities_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "liabilities" */
export enum Liabilities_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "liabilities" */
export type Liabilities_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Liabilities_Stddev_Fields = {
  __typename?: 'liabilities_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Liabilities_Stddev_Pop_Fields = {
  __typename?: 'liabilities_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Liabilities_Stddev_Samp_Fields = {
  __typename?: 'liabilities_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Liabilities_Sum_Fields = {
  __typename?: 'liabilities_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "liabilities" */
export enum Liabilities_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Liabilities_Var_Pop_Fields = {
  __typename?: 'liabilities_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Liabilities_Var_Samp_Fields = {
  __typename?: 'liabilities_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Liabilities_Variance_Fields = {
  __typename?: 'liabilities_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "account_info" */
  delete_account_info?: Maybe<Account_Info_Mutation_Response>;
  /** delete single row from the table: "account_info" */
  delete_account_info_by_pk?: Maybe<Account_Info>;
  /** delete data from the table: "assets" */
  delete_assets?: Maybe<Assets_Mutation_Response>;
  /** delete single row from the table: "assets" */
  delete_assets_by_pk?: Maybe<Assets>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "expenses" */
  delete_expenses?: Maybe<Expenses_Mutation_Response>;
  /** delete single row from the table: "expenses" */
  delete_expenses_by_pk?: Maybe<Expenses>;
  /** delete data from the table: "labels" */
  delete_labels?: Maybe<Labels_Mutation_Response>;
  /** delete single row from the table: "labels" */
  delete_labels_by_pk?: Maybe<Labels>;
  /** delete data from the table: "liabilities" */
  delete_liabilities?: Maybe<Liabilities_Mutation_Response>;
  /** delete single row from the table: "liabilities" */
  delete_liabilities_by_pk?: Maybe<Liabilities>;
  /** delete data from the table: "notifications" */
  delete_notifications?: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "revenues" */
  delete_revenues?: Maybe<Revenues_Mutation_Response>;
  /** delete single row from the table: "revenues" */
  delete_revenues_by_pk?: Maybe<Revenues>;
  /** delete data from the table: "transaction_attachments" */
  delete_transaction_attachments?: Maybe<Transaction_Attachments_Mutation_Response>;
  /** delete single row from the table: "transaction_attachments" */
  delete_transaction_attachments_by_pk?: Maybe<Transaction_Attachments>;
  /** delete data from the table: "transaction_labels" */
  delete_transaction_labels?: Maybe<Transaction_Labels_Mutation_Response>;
  /** delete single row from the table: "transaction_labels" */
  delete_transaction_labels_by_pk?: Maybe<Transaction_Labels>;
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>;
  /** delete data from the table: "user_settings" */
  delete_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** delete single row from the table: "user_settings" */
  delete_user_settings_by_pk?: Maybe<User_Settings>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "account_info" */
  insert_account_info?: Maybe<Account_Info_Mutation_Response>;
  /** insert a single row into the table: "account_info" */
  insert_account_info_one?: Maybe<Account_Info>;
  /** insert data into the table: "assets" */
  insert_assets?: Maybe<Assets_Mutation_Response>;
  /** insert a single row into the table: "assets" */
  insert_assets_one?: Maybe<Assets>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "expenses" */
  insert_expenses?: Maybe<Expenses_Mutation_Response>;
  /** insert a single row into the table: "expenses" */
  insert_expenses_one?: Maybe<Expenses>;
  /** insert data into the table: "labels" */
  insert_labels?: Maybe<Labels_Mutation_Response>;
  /** insert a single row into the table: "labels" */
  insert_labels_one?: Maybe<Labels>;
  /** insert data into the table: "liabilities" */
  insert_liabilities?: Maybe<Liabilities_Mutation_Response>;
  /** insert a single row into the table: "liabilities" */
  insert_liabilities_one?: Maybe<Liabilities>;
  /** insert data into the table: "notifications" */
  insert_notifications?: Maybe<Notifications_Mutation_Response>;
  /** insert a single row into the table: "notifications" */
  insert_notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "revenues" */
  insert_revenues?: Maybe<Revenues_Mutation_Response>;
  /** insert a single row into the table: "revenues" */
  insert_revenues_one?: Maybe<Revenues>;
  /** insert data into the table: "transaction_attachments" */
  insert_transaction_attachments?: Maybe<Transaction_Attachments_Mutation_Response>;
  /** insert a single row into the table: "transaction_attachments" */
  insert_transaction_attachments_one?: Maybe<Transaction_Attachments>;
  /** insert data into the table: "transaction_labels" */
  insert_transaction_labels?: Maybe<Transaction_Labels_Mutation_Response>;
  /** insert a single row into the table: "transaction_labels" */
  insert_transaction_labels_one?: Maybe<Transaction_Labels>;
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>;
  /** insert data into the table: "user_settings" */
  insert_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** insert a single row into the table: "user_settings" */
  insert_user_settings_one?: Maybe<User_Settings>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "account_info" */
  update_account_info?: Maybe<Account_Info_Mutation_Response>;
  /** update single row of the table: "account_info" */
  update_account_info_by_pk?: Maybe<Account_Info>;
  /** update data of the table: "assets" */
  update_assets?: Maybe<Assets_Mutation_Response>;
  /** update single row of the table: "assets" */
  update_assets_by_pk?: Maybe<Assets>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "expenses" */
  update_expenses?: Maybe<Expenses_Mutation_Response>;
  /** update single row of the table: "expenses" */
  update_expenses_by_pk?: Maybe<Expenses>;
  /** update data of the table: "labels" */
  update_labels?: Maybe<Labels_Mutation_Response>;
  /** update single row of the table: "labels" */
  update_labels_by_pk?: Maybe<Labels>;
  /** update data of the table: "liabilities" */
  update_liabilities?: Maybe<Liabilities_Mutation_Response>;
  /** update single row of the table: "liabilities" */
  update_liabilities_by_pk?: Maybe<Liabilities>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update data of the table: "revenues" */
  update_revenues?: Maybe<Revenues_Mutation_Response>;
  /** update single row of the table: "revenues" */
  update_revenues_by_pk?: Maybe<Revenues>;
  /** update data of the table: "transaction_attachments" */
  update_transaction_attachments?: Maybe<Transaction_Attachments_Mutation_Response>;
  /** update single row of the table: "transaction_attachments" */
  update_transaction_attachments_by_pk?: Maybe<Transaction_Attachments>;
  /** update data of the table: "transaction_labels" */
  update_transaction_labels?: Maybe<Transaction_Labels_Mutation_Response>;
  /** update single row of the table: "transaction_labels" */
  update_transaction_labels_by_pk?: Maybe<Transaction_Labels>;
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>;
  /** update data of the table: "user_settings" */
  update_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** update single row of the table: "user_settings" */
  update_user_settings_by_pk?: Maybe<User_Settings>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_Account_InfoArgs = {
  where: Account_Info_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Account_Info_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_AssetsArgs = {
  where: Assets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Assets_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_ExpensesArgs = {
  where: Expenses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Expenses_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_LabelsArgs = {
  where: Labels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Labels_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_LiabilitiesArgs = {
  where: Liabilities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Liabilities_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_RevenuesArgs = {
  where: Revenues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Revenues_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_Transaction_AttachmentsArgs = {
  where: Transaction_Attachments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Transaction_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_Transaction_LabelsArgs = {
  where: Transaction_Labels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Transaction_Labels_By_PkArgs = {
  label_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_User_SettingsArgs = {
  where: User_Settings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Settings_By_PkArgs = {
  user_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_Account_InfoArgs = {
  objects: Array<Account_Info_Insert_Input>;
  on_conflict?: InputMaybe<Account_Info_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Account_Info_OneArgs = {
  object: Account_Info_Insert_Input;
  on_conflict?: InputMaybe<Account_Info_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AssetsArgs = {
  objects: Array<Assets_Insert_Input>;
  on_conflict?: InputMaybe<Assets_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Assets_OneArgs = {
  object: Assets_Insert_Input;
  on_conflict?: InputMaybe<Assets_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ExpensesArgs = {
  objects: Array<Expenses_Insert_Input>;
  on_conflict?: InputMaybe<Expenses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Expenses_OneArgs = {
  object: Expenses_Insert_Input;
  on_conflict?: InputMaybe<Expenses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LabelsArgs = {
  objects: Array<Labels_Insert_Input>;
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Labels_OneArgs = {
  object: Labels_Insert_Input;
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LiabilitiesArgs = {
  objects: Array<Liabilities_Insert_Input>;
  on_conflict?: InputMaybe<Liabilities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Liabilities_OneArgs = {
  object: Liabilities_Insert_Input;
  on_conflict?: InputMaybe<Liabilities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_NotificationsArgs = {
  objects: Array<Notifications_Insert_Input>;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Notifications_OneArgs = {
  object: Notifications_Insert_Input;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RevenuesArgs = {
  objects: Array<Revenues_Insert_Input>;
  on_conflict?: InputMaybe<Revenues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Revenues_OneArgs = {
  object: Revenues_Insert_Input;
  on_conflict?: InputMaybe<Revenues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Transaction_AttachmentsArgs = {
  objects: Array<Transaction_Attachments_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Attachments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Transaction_Attachments_OneArgs = {
  object: Transaction_Attachments_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Attachments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Transaction_LabelsArgs = {
  objects: Array<Transaction_Labels_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Labels_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Transaction_Labels_OneArgs = {
  object: Transaction_Labels_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Labels_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_SettingsArgs = {
  objects: Array<User_Settings_Insert_Input>;
  on_conflict?: InputMaybe<User_Settings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Settings_OneArgs = {
  object: User_Settings_Insert_Input;
  on_conflict?: InputMaybe<User_Settings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Account_InfoArgs = {
  _inc?: InputMaybe<Account_Info_Inc_Input>;
  _set?: InputMaybe<Account_Info_Set_Input>;
  where: Account_Info_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Account_Info_By_PkArgs = {
  _inc?: InputMaybe<Account_Info_Inc_Input>;
  _set?: InputMaybe<Account_Info_Set_Input>;
  pk_columns: Account_Info_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_AssetsArgs = {
  _inc?: InputMaybe<Assets_Inc_Input>;
  _set?: InputMaybe<Assets_Set_Input>;
  where: Assets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Assets_By_PkArgs = {
  _inc?: InputMaybe<Assets_Inc_Input>;
  _set?: InputMaybe<Assets_Set_Input>;
  pk_columns: Assets_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ExpensesArgs = {
  _inc?: InputMaybe<Expenses_Inc_Input>;
  _set?: InputMaybe<Expenses_Set_Input>;
  where: Expenses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Expenses_By_PkArgs = {
  _inc?: InputMaybe<Expenses_Inc_Input>;
  _set?: InputMaybe<Expenses_Set_Input>;
  pk_columns: Expenses_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LabelsArgs = {
  _inc?: InputMaybe<Labels_Inc_Input>;
  _set?: InputMaybe<Labels_Set_Input>;
  where: Labels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Labels_By_PkArgs = {
  _inc?: InputMaybe<Labels_Inc_Input>;
  _set?: InputMaybe<Labels_Set_Input>;
  pk_columns: Labels_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LiabilitiesArgs = {
  _inc?: InputMaybe<Liabilities_Inc_Input>;
  _set?: InputMaybe<Liabilities_Set_Input>;
  where: Liabilities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Liabilities_By_PkArgs = {
  _inc?: InputMaybe<Liabilities_Inc_Input>;
  _set?: InputMaybe<Liabilities_Set_Input>;
  pk_columns: Liabilities_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _inc?: InputMaybe<Notifications_Inc_Input>;
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _inc?: InputMaybe<Notifications_Inc_Input>;
  _set?: InputMaybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_RevenuesArgs = {
  _inc?: InputMaybe<Revenues_Inc_Input>;
  _set?: InputMaybe<Revenues_Set_Input>;
  where: Revenues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Revenues_By_PkArgs = {
  _inc?: InputMaybe<Revenues_Inc_Input>;
  _set?: InputMaybe<Revenues_Set_Input>;
  pk_columns: Revenues_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_AttachmentsArgs = {
  _inc?: InputMaybe<Transaction_Attachments_Inc_Input>;
  _set?: InputMaybe<Transaction_Attachments_Set_Input>;
  where: Transaction_Attachments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_Attachments_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Attachments_Inc_Input>;
  _set?: InputMaybe<Transaction_Attachments_Set_Input>;
  pk_columns: Transaction_Attachments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_LabelsArgs = {
  _inc?: InputMaybe<Transaction_Labels_Inc_Input>;
  _set?: InputMaybe<Transaction_Labels_Set_Input>;
  where: Transaction_Labels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_Labels_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Labels_Inc_Input>;
  _set?: InputMaybe<Transaction_Labels_Set_Input>;
  pk_columns: Transaction_Labels_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _inc?: InputMaybe<Transactions_Inc_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _inc?: InputMaybe<Transactions_Inc_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  pk_columns: Transactions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_SettingsArgs = {
  _set?: InputMaybe<User_Settings_Set_Input>;
  where: User_Settings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Settings_By_PkArgs = {
  _set?: InputMaybe<User_Settings_Set_Input>;
  pk_columns: User_Settings_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  read_status: Scalars['Boolean'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "notifications" */
export type Notifications_Aggregate = {
  __typename?: 'notifications_aggregate';
  aggregate?: Maybe<Notifications_Aggregate_Fields>;
  nodes: Array<Notifications>;
};

/** aggregate fields of "notifications" */
export type Notifications_Aggregate_Fields = {
  __typename?: 'notifications_aggregate_fields';
  avg?: Maybe<Notifications_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notifications_Max_Fields>;
  min?: Maybe<Notifications_Min_Fields>;
  stddev?: Maybe<Notifications_Stddev_Fields>;
  stddev_pop?: Maybe<Notifications_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notifications_Stddev_Samp_Fields>;
  sum?: Maybe<Notifications_Sum_Fields>;
  var_pop?: Maybe<Notifications_Var_Pop_Fields>;
  var_samp?: Maybe<Notifications_Var_Samp_Fields>;
  variance?: Maybe<Notifications_Variance_Fields>;
};

/** aggregate fields of "notifications" */
export type Notifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Notifications_Avg_Fields = {
  __typename?: 'notifications_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  read_status?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notifications" */
export enum Notifications_Constraint {
  /** unique or primary key constraint */
  NotificationsPkey = 'notifications_pkey',
}

/** input type for incrementing numeric columns in table "notifications" */
export type Notifications_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  read_status?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  __typename?: 'notifications_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  __typename?: 'notifications_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  read_status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notifications */
export type Notifications_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "notifications" */
export enum Notifications_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ReadStatus = 'read_status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "notifications" */
export type Notifications_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  read_status?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Notifications_Stddev_Fields = {
  __typename?: 'notifications_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Notifications_Stddev_Pop_Fields = {
  __typename?: 'notifications_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Notifications_Stddev_Samp_Fields = {
  __typename?: 'notifications_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Notifications_Sum_Fields = {
  __typename?: 'notifications_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "notifications" */
export enum Notifications_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ReadStatus = 'read_status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Notifications_Var_Pop_Fields = {
  __typename?: 'notifications_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Notifications_Var_Samp_Fields = {
  __typename?: 'notifications_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Notifications_Variance_Fields = {
  __typename?: 'notifications_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account_info" */
  account_info: Array<Account_Info>;
  /** fetch aggregated fields from the table: "account_info" */
  account_info_aggregate: Account_Info_Aggregate;
  /** fetch data from the table: "account_info" using primary key columns */
  account_info_by_pk?: Maybe<Account_Info>;
  /** fetch data from the table: "assets" */
  assets: Array<Assets>;
  /** fetch aggregated fields from the table: "assets" */
  assets_aggregate: Assets_Aggregate;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "expenses" */
  expenses: Array<Expenses>;
  /** fetch aggregated fields from the table: "expenses" */
  expenses_aggregate: Expenses_Aggregate;
  /** fetch data from the table: "expenses" using primary key columns */
  expenses_by_pk?: Maybe<Expenses>;
  /** fetch data from the table: "labels" */
  labels: Array<Labels>;
  /** fetch aggregated fields from the table: "labels" */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** fetch data from the table: "liabilities" */
  liabilities: Array<Liabilities>;
  /** fetch aggregated fields from the table: "liabilities" */
  liabilities_aggregate: Liabilities_Aggregate;
  /** fetch data from the table: "liabilities" using primary key columns */
  liabilities_by_pk?: Maybe<Liabilities>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "revenues" */
  revenues: Array<Revenues>;
  /** fetch aggregated fields from the table: "revenues" */
  revenues_aggregate: Revenues_Aggregate;
  /** fetch data from the table: "revenues" using primary key columns */
  revenues_by_pk?: Maybe<Revenues>;
  /** fetch data from the table: "transaction_attachments" */
  transaction_attachments: Array<Transaction_Attachments>;
  /** fetch aggregated fields from the table: "transaction_attachments" */
  transaction_attachments_aggregate: Transaction_Attachments_Aggregate;
  /** fetch data from the table: "transaction_attachments" using primary key columns */
  transaction_attachments_by_pk?: Maybe<Transaction_Attachments>;
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  /** fetch data from the table: "transaction_labels" using primary key columns */
  transaction_labels_by_pk?: Maybe<Transaction_Labels>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<User_Settings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootAccount_InfoArgs = {
  distinct_on?: InputMaybe<Array<Account_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Info_Order_By>>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

export type Query_RootAccount_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Info_Order_By>>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

export type Query_RootAccount_Info_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootAssetsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Query_RootAssets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Query_RootAssets_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Query_RootCategories_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootExpensesArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

export type Query_RootExpenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

export type Query_RootExpenses_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootLabelsArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

export type Query_RootLabels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

export type Query_RootLabels_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootLiabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Liabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Liabilities_Order_By>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

export type Query_RootLiabilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Liabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Liabilities_Order_By>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

export type Query_RootLiabilities_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootRevenuesArgs = {
  distinct_on?: InputMaybe<Array<Revenues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revenues_Order_By>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

export type Query_RootRevenues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revenues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revenues_Order_By>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

export type Query_RootRevenues_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootTransaction_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

export type Query_RootTransaction_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

export type Query_RootTransaction_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};

export type Query_RootTransaction_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

export type Query_RootTransaction_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

export type Query_RootTransaction_Labels_By_PkArgs = {
  label_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};

export type Query_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Query_RootTransactions_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootUser_SettingsArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

export type Query_RootUser_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

export type Query_RootUser_Settings_By_PkArgs = {
  user_id: Scalars['uuid'];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "revenues" */
export type Revenues = {
  __typename?: 'revenues';
  /** An object relationship */
  account_info: Account_Info;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  default: Scalars['Boolean'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "revenues" */
export type Revenues_Aggregate = {
  __typename?: 'revenues_aggregate';
  aggregate?: Maybe<Revenues_Aggregate_Fields>;
  nodes: Array<Revenues>;
};

/** aggregate fields of "revenues" */
export type Revenues_Aggregate_Fields = {
  __typename?: 'revenues_aggregate_fields';
  avg?: Maybe<Revenues_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Revenues_Max_Fields>;
  min?: Maybe<Revenues_Min_Fields>;
  stddev?: Maybe<Revenues_Stddev_Fields>;
  stddev_pop?: Maybe<Revenues_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Revenues_Stddev_Samp_Fields>;
  sum?: Maybe<Revenues_Sum_Fields>;
  var_pop?: Maybe<Revenues_Var_Pop_Fields>;
  var_samp?: Maybe<Revenues_Var_Samp_Fields>;
  variance?: Maybe<Revenues_Variance_Fields>;
};

/** aggregate fields of "revenues" */
export type Revenues_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Revenues_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Revenues_Avg_Fields = {
  __typename?: 'revenues_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "revenues". All fields are combined with a logical 'AND'. */
export type Revenues_Bool_Exp = {
  _and?: InputMaybe<Array<Revenues_Bool_Exp>>;
  _not?: InputMaybe<Revenues_Bool_Exp>;
  _or?: InputMaybe<Array<Revenues_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  default?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "revenues" */
export enum Revenues_Constraint {
  /** unique or primary key constraint */
  RevenuesPkey = 'revenues_pkey',
}

/** input type for incrementing numeric columns in table "revenues" */
export type Revenues_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "revenues" */
export type Revenues_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Revenues_Max_Fields = {
  __typename?: 'revenues_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Revenues_Min_Fields = {
  __typename?: 'revenues_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "revenues" */
export type Revenues_Mutation_Response = {
  __typename?: 'revenues_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Revenues>;
};

/** input type for inserting object relation for remote table "revenues" */
export type Revenues_Obj_Rel_Insert_Input = {
  data: Revenues_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Revenues_On_Conflict>;
};

/** on conflict condition type for table "revenues" */
export type Revenues_On_Conflict = {
  constraint: Revenues_Constraint;
  update_columns?: Array<Revenues_Update_Column>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

/** Ordering options when selecting data from "revenues". */
export type Revenues_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: revenues */
export type Revenues_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "revenues" */
export enum Revenues_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "revenues" */
export type Revenues_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Revenues_Stddev_Fields = {
  __typename?: 'revenues_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Revenues_Stddev_Pop_Fields = {
  __typename?: 'revenues_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Revenues_Stddev_Samp_Fields = {
  __typename?: 'revenues_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Revenues_Sum_Fields = {
  __typename?: 'revenues_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "revenues" */
export enum Revenues_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Revenues_Var_Pop_Fields = {
  __typename?: 'revenues_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Revenues_Var_Samp_Fields = {
  __typename?: 'revenues_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Revenues_Variance_Fields = {
  __typename?: 'revenues_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account_info" */
  account_info: Array<Account_Info>;
  /** fetch aggregated fields from the table: "account_info" */
  account_info_aggregate: Account_Info_Aggregate;
  /** fetch data from the table: "account_info" using primary key columns */
  account_info_by_pk?: Maybe<Account_Info>;
  /** fetch data from the table: "assets" */
  assets: Array<Assets>;
  /** fetch aggregated fields from the table: "assets" */
  assets_aggregate: Assets_Aggregate;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "expenses" */
  expenses: Array<Expenses>;
  /** fetch aggregated fields from the table: "expenses" */
  expenses_aggregate: Expenses_Aggregate;
  /** fetch data from the table: "expenses" using primary key columns */
  expenses_by_pk?: Maybe<Expenses>;
  /** fetch data from the table: "labels" */
  labels: Array<Labels>;
  /** fetch aggregated fields from the table: "labels" */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** fetch data from the table: "liabilities" */
  liabilities: Array<Liabilities>;
  /** fetch aggregated fields from the table: "liabilities" */
  liabilities_aggregate: Liabilities_Aggregate;
  /** fetch data from the table: "liabilities" using primary key columns */
  liabilities_by_pk?: Maybe<Liabilities>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "revenues" */
  revenues: Array<Revenues>;
  /** fetch aggregated fields from the table: "revenues" */
  revenues_aggregate: Revenues_Aggregate;
  /** fetch data from the table: "revenues" using primary key columns */
  revenues_by_pk?: Maybe<Revenues>;
  /** fetch data from the table: "transaction_attachments" */
  transaction_attachments: Array<Transaction_Attachments>;
  /** fetch aggregated fields from the table: "transaction_attachments" */
  transaction_attachments_aggregate: Transaction_Attachments_Aggregate;
  /** fetch data from the table: "transaction_attachments" using primary key columns */
  transaction_attachments_by_pk?: Maybe<Transaction_Attachments>;
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  /** fetch data from the table: "transaction_labels" using primary key columns */
  transaction_labels_by_pk?: Maybe<Transaction_Labels>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<User_Settings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Subscription_RootAccount_InfoArgs = {
  distinct_on?: InputMaybe<Array<Account_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Info_Order_By>>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

export type Subscription_RootAccount_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Info_Order_By>>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

export type Subscription_RootAccount_Info_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootAssetsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Subscription_RootAssets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Subscription_RootAssets_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootExpensesArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

export type Subscription_RootExpenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

export type Subscription_RootExpenses_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootLabelsArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

export type Subscription_RootLabels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

export type Subscription_RootLabels_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootLiabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Liabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Liabilities_Order_By>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

export type Subscription_RootLiabilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Liabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Liabilities_Order_By>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

export type Subscription_RootLiabilities_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootRevenuesArgs = {
  distinct_on?: InputMaybe<Array<Revenues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revenues_Order_By>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

export type Subscription_RootRevenues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revenues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revenues_Order_By>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

export type Subscription_RootRevenues_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootTransaction_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

export type Subscription_RootTransaction_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

export type Subscription_RootTransaction_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};

export type Subscription_RootTransaction_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

export type Subscription_RootTransaction_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

export type Subscription_RootTransaction_Labels_By_PkArgs = {
  label_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};

export type Subscription_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Subscription_RootTransactions_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootUser_SettingsArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

export type Subscription_RootUser_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

export type Subscription_RootUser_Settings_By_PkArgs = {
  user_id: Scalars['uuid'];
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "transaction_attachments" */
export type Transaction_Attachments = {
  __typename?: 'transaction_attachments';
  attachment_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "transaction_attachments" */
export type Transaction_Attachments_Aggregate = {
  __typename?: 'transaction_attachments_aggregate';
  aggregate?: Maybe<Transaction_Attachments_Aggregate_Fields>;
  nodes: Array<Transaction_Attachments>;
};

/** aggregate fields of "transaction_attachments" */
export type Transaction_Attachments_Aggregate_Fields = {
  __typename?: 'transaction_attachments_aggregate_fields';
  avg?: Maybe<Transaction_Attachments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Attachments_Max_Fields>;
  min?: Maybe<Transaction_Attachments_Min_Fields>;
  stddev?: Maybe<Transaction_Attachments_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Attachments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Attachments_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Attachments_Sum_Fields>;
  var_pop?: Maybe<Transaction_Attachments_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Attachments_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Attachments_Variance_Fields>;
};

/** aggregate fields of "transaction_attachments" */
export type Transaction_Attachments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Transaction_Attachments_Avg_Fields = {
  __typename?: 'transaction_attachments_avg_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "transaction_attachments". All fields are combined with a logical 'AND'. */
export type Transaction_Attachments_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Attachments_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Attachments_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Attachments_Bool_Exp>>;
  attachment_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_attachments" */
export enum Transaction_Attachments_Constraint {
  /** unique or primary key constraint */
  TransactionAttachmentsAttachmentIdKey = 'transaction_attachments_attachment_id_key',
  /** unique or primary key constraint */
  TransactionAttachmentsPkey = 'transaction_attachments_pkey',
  /** unique or primary key constraint */
  TransactionAttachmentsTransactionIdKey = 'transaction_attachments_transaction_id_key',
}

/** input type for incrementing numeric columns in table "transaction_attachments" */
export type Transaction_Attachments_Inc_Input = {
  attachment_id?: InputMaybe<Scalars['Int']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "transaction_attachments" */
export type Transaction_Attachments_Insert_Input = {
  attachment_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Transaction_Attachments_Max_Fields = {
  __typename?: 'transaction_attachments_max_fields';
  attachment_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Transaction_Attachments_Min_Fields = {
  __typename?: 'transaction_attachments_min_fields';
  attachment_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "transaction_attachments" */
export type Transaction_Attachments_Mutation_Response = {
  __typename?: 'transaction_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Attachments>;
};

/** input type for inserting object relation for remote table "transaction_attachments" */
export type Transaction_Attachments_Obj_Rel_Insert_Input = {
  data: Transaction_Attachments_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Transaction_Attachments_On_Conflict>;
};

/** on conflict condition type for table "transaction_attachments" */
export type Transaction_Attachments_On_Conflict = {
  constraint: Transaction_Attachments_Constraint;
  update_columns?: Array<Transaction_Attachments_Update_Column>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_attachments". */
export type Transaction_Attachments_Order_By = {
  attachment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_attachments */
export type Transaction_Attachments_Pk_Columns_Input = {
  attachment_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};

/** select columns of table "transaction_attachments" */
export enum Transaction_Attachments_Select_Column {
  /** column name */
  AttachmentId = 'attachment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "transaction_attachments" */
export type Transaction_Attachments_Set_Input = {
  attachment_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Transaction_Attachments_Stddev_Fields = {
  __typename?: 'transaction_attachments_stddev_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Attachments_Stddev_Pop_Fields = {
  __typename?: 'transaction_attachments_stddev_pop_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Attachments_Stddev_Samp_Fields = {
  __typename?: 'transaction_attachments_stddev_samp_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Transaction_Attachments_Sum_Fields = {
  __typename?: 'transaction_attachments_sum_fields';
  attachment_id?: Maybe<Scalars['Int']>;
  transaction_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "transaction_attachments" */
export enum Transaction_Attachments_Update_Column {
  /** column name */
  AttachmentId = 'attachment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Transaction_Attachments_Var_Pop_Fields = {
  __typename?: 'transaction_attachments_var_pop_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Transaction_Attachments_Var_Samp_Fields = {
  __typename?: 'transaction_attachments_var_samp_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Transaction_Attachments_Variance_Fields = {
  __typename?: 'transaction_attachments_variance_fields';
  attachment_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "transaction_labels" */
export type Transaction_Labels = {
  __typename?: 'transaction_labels';
  /** An object relationship */
  label: Labels;
  label_id: Scalars['Int'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['bigint'];
};

/** aggregated selection of "transaction_labels" */
export type Transaction_Labels_Aggregate = {
  __typename?: 'transaction_labels_aggregate';
  aggregate?: Maybe<Transaction_Labels_Aggregate_Fields>;
  nodes: Array<Transaction_Labels>;
};

/** aggregate fields of "transaction_labels" */
export type Transaction_Labels_Aggregate_Fields = {
  __typename?: 'transaction_labels_aggregate_fields';
  avg?: Maybe<Transaction_Labels_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Labels_Max_Fields>;
  min?: Maybe<Transaction_Labels_Min_Fields>;
  stddev?: Maybe<Transaction_Labels_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Labels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Labels_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Labels_Sum_Fields>;
  var_pop?: Maybe<Transaction_Labels_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Labels_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Labels_Variance_Fields>;
};

/** aggregate fields of "transaction_labels" */
export type Transaction_Labels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction_labels" */
export type Transaction_Labels_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Labels_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Labels_Max_Order_By>;
  min?: InputMaybe<Transaction_Labels_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Labels_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Labels_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Labels_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Labels_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Labels_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Labels_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Labels_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction_labels" */
export type Transaction_Labels_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Labels_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Transaction_Labels_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Labels_Avg_Fields = {
  __typename?: 'transaction_labels_avg_fields';
  label_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction_labels" */
export type Transaction_Labels_Avg_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction_labels". All fields are combined with a logical 'AND'. */
export type Transaction_Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Labels_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Labels_Bool_Exp>>;
  label?: InputMaybe<Labels_Bool_Exp>;
  label_id?: InputMaybe<Int_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_labels" */
export enum Transaction_Labels_Constraint {
  /** unique or primary key constraint */
  TransactionLabelsPkey = 'transaction_labels_pkey',
}

/** input type for incrementing numeric columns in table "transaction_labels" */
export type Transaction_Labels_Inc_Input = {
  label_id?: InputMaybe<Scalars['Int']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "transaction_labels" */
export type Transaction_Labels_Insert_Input = {
  label?: InputMaybe<Labels_Obj_Rel_Insert_Input>;
  label_id?: InputMaybe<Scalars['Int']>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Transaction_Labels_Max_Fields = {
  __typename?: 'transaction_labels_max_fields';
  label_id?: Maybe<Scalars['Int']>;
  transaction_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "transaction_labels" */
export type Transaction_Labels_Max_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Labels_Min_Fields = {
  __typename?: 'transaction_labels_min_fields';
  label_id?: Maybe<Scalars['Int']>;
  transaction_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "transaction_labels" */
export type Transaction_Labels_Min_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction_labels" */
export type Transaction_Labels_Mutation_Response = {
  __typename?: 'transaction_labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Labels>;
};

/** on conflict condition type for table "transaction_labels" */
export type Transaction_Labels_On_Conflict = {
  constraint: Transaction_Labels_Constraint;
  update_columns?: Array<Transaction_Labels_Update_Column>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_labels". */
export type Transaction_Labels_Order_By = {
  label?: InputMaybe<Labels_Order_By>;
  label_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_labels */
export type Transaction_Labels_Pk_Columns_Input = {
  label_id: Scalars['Int'];
  transaction_id: Scalars['bigint'];
};

/** select columns of table "transaction_labels" */
export enum Transaction_Labels_Select_Column {
  /** column name */
  LabelId = 'label_id',
  /** column name */
  TransactionId = 'transaction_id',
}

/** input type for updating data in table "transaction_labels" */
export type Transaction_Labels_Set_Input = {
  label_id?: InputMaybe<Scalars['Int']>;
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Transaction_Labels_Stddev_Fields = {
  __typename?: 'transaction_labels_stddev_fields';
  label_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction_labels" */
export type Transaction_Labels_Stddev_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Labels_Stddev_Pop_Fields = {
  __typename?: 'transaction_labels_stddev_pop_fields';
  label_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction_labels" */
export type Transaction_Labels_Stddev_Pop_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Labels_Stddev_Samp_Fields = {
  __typename?: 'transaction_labels_stddev_samp_fields';
  label_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction_labels" */
export type Transaction_Labels_Stddev_Samp_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Labels_Sum_Fields = {
  __typename?: 'transaction_labels_sum_fields';
  label_id?: Maybe<Scalars['Int']>;
  transaction_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction_labels" */
export type Transaction_Labels_Sum_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** update columns of table "transaction_labels" */
export enum Transaction_Labels_Update_Column {
  /** column name */
  LabelId = 'label_id',
  /** column name */
  TransactionId = 'transaction_id',
}

/** aggregate var_pop on columns */
export type Transaction_Labels_Var_Pop_Fields = {
  __typename?: 'transaction_labels_var_pop_fields';
  label_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction_labels" */
export type Transaction_Labels_Var_Pop_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Labels_Var_Samp_Fields = {
  __typename?: 'transaction_labels_var_samp_fields';
  label_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction_labels" */
export type Transaction_Labels_Var_Samp_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Labels_Variance_Fields = {
  __typename?: 'transaction_labels_variance_fields';
  label_id?: Maybe<Scalars['Float']>;
  transaction_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction_labels" */
export type Transaction_Labels_Variance_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions';
  /** An object relationship */
  accountInfoBySourceAccount: Account_Info;
  /** An object relationship */
  account_info: Account_Info;
  amount: Scalars['float8'];
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['bigint']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  destiny_account: Scalars['bigint'];
  id: Scalars['bigint'];
  source_account: Scalars['bigint'];
  /** An object relationship */
  transaction_attachment: Transaction_Attachments;
  transaction_date: Scalars['date'];
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "transactions" */
export type TransactionsTransaction_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsTransaction_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: 'transactions_aggregate';
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'transactions_aggregate_fields';
  avg?: Maybe<Transactions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transactions_Max_Fields>;
  min?: Maybe<Transactions_Min_Fields>;
  stddev?: Maybe<Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Transactions_Sum_Fields>;
  var_pop?: Maybe<Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Transactions_Var_Samp_Fields>;
  variance?: Maybe<Transactions_Variance_Fields>;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transactions_Max_Order_By>;
  min?: InputMaybe<Transactions_Min_Order_By>;
  stddev?: InputMaybe<Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  destiny_account?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Bool_Exp>>;
  accountInfoBySourceAccount?: InputMaybe<Account_Info_Bool_Exp>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  destiny_account?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  source_account?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_attachment?: InputMaybe<Transaction_Attachments_Bool_Exp>;
  transaction_date?: InputMaybe<Date_Comparison_Exp>;
  transaction_labels?: InputMaybe<Transaction_Labels_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint */
  TransactionsPkey = 'transactions_pkey',
}

/** input type for incrementing numeric columns in table "transactions" */
export type Transactions_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  category_id?: InputMaybe<Scalars['bigint']>;
  destiny_account?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  source_account?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  accountInfoBySourceAccount?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Scalars['float8']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  destiny_account?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  source_account?: InputMaybe<Scalars['bigint']>;
  transaction_attachment?: InputMaybe<Transaction_Attachments_Obj_Rel_Insert_Input>;
  transaction_date?: InputMaybe<Scalars['date']>;
  transaction_labels?: InputMaybe<Transaction_Labels_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields';
  amount?: Maybe<Scalars['float8']>;
  category_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  destiny_account?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  source_account?: Maybe<Scalars['bigint']>;
  transaction_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields';
  amount?: Maybe<Scalars['float8']>;
  category_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  destiny_account?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  source_account?: Maybe<Scalars['bigint']>;
  transaction_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** input type for inserting object relation for remote table "transactions" */
export type Transactions_Obj_Rel_Insert_Input = {
  data: Transactions_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** on conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns?: Array<Transactions_Update_Column>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "transactions". */
export type Transactions_Order_By = {
  accountInfoBySourceAccount?: InputMaybe<Account_Info_Order_By>;
  account_info?: InputMaybe<Account_Info_Order_By>;
  amount?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
  transaction_attachment?: InputMaybe<Transaction_Attachments_Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_labels_aggregate?: InputMaybe<Transaction_Labels_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transactions */
export type Transactions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DestinyAccount = 'destiny_account',
  /** column name */
  Id = 'id',
  /** column name */
  SourceAccount = 'source_account',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  category_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  destiny_account?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  source_account?: InputMaybe<Scalars['bigint']>;
  transaction_date?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  destiny_account?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  destiny_account?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  destiny_account?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields';
  amount?: Maybe<Scalars['float8']>;
  category_id?: Maybe<Scalars['bigint']>;
  destiny_account?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  source_account?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DestinyAccount = 'destiny_account',
  /** column name */
  Id = 'id',
  /** column name */
  SourceAccount = 'source_account',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  destiny_account?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  destiny_account?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  destiny_account?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  destiny_account?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_settings" */
export type User_Settings = {
  __typename?: 'user_settings';
  darkMode: Scalars['Boolean'];
  langKey: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_settings" */
export type User_Settings_Aggregate = {
  __typename?: 'user_settings_aggregate';
  aggregate?: Maybe<User_Settings_Aggregate_Fields>;
  nodes: Array<User_Settings>;
};

/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_Fields = {
  __typename?: 'user_settings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Settings_Max_Fields>;
  min?: Maybe<User_Settings_Min_Fields>;
};

/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_settings". All fields are combined with a logical 'AND'. */
export type User_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<User_Settings_Bool_Exp>>;
  _not?: InputMaybe<User_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<User_Settings_Bool_Exp>>;
  darkMode?: InputMaybe<Boolean_Comparison_Exp>;
  langKey?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_settings" */
export enum User_Settings_Constraint {
  /** unique or primary key constraint */
  UserSettingsPkey = 'user_settings_pkey',
}

/** input type for inserting data into table "user_settings" */
export type User_Settings_Insert_Input = {
  darkMode?: InputMaybe<Scalars['Boolean']>;
  langKey?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Settings_Max_Fields = {
  __typename?: 'user_settings_max_fields';
  langKey?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Settings_Min_Fields = {
  __typename?: 'user_settings_min_fields';
  langKey?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_settings" */
export type User_Settings_Mutation_Response = {
  __typename?: 'user_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Settings>;
};

/** input type for inserting object relation for remote table "user_settings" */
export type User_Settings_Obj_Rel_Insert_Input = {
  data: User_Settings_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_Settings_On_Conflict>;
};

/** on conflict condition type for table "user_settings" */
export type User_Settings_On_Conflict = {
  constraint: User_Settings_Constraint;
  update_columns?: Array<User_Settings_Update_Column>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "user_settings". */
export type User_Settings_Order_By = {
  darkMode?: InputMaybe<Order_By>;
  langKey?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_settings */
export type User_Settings_Pk_Columns_Input = {
  user_id: Scalars['uuid'];
};

/** select columns of table "user_settings" */
export enum User_Settings_Select_Column {
  /** column name */
  DarkMode = 'darkMode',
  /** column name */
  LangKey = 'langKey',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_settings" */
export type User_Settings_Set_Input = {
  darkMode?: InputMaybe<Scalars['Boolean']>;
  langKey?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_settings" */
export enum User_Settings_Update_Column {
  /** column name */
  DarkMode = 'darkMode',
  /** column name */
  LangKey = 'langKey',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  user_setting: User_Settings;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_setting?: InputMaybe<User_Settings_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  PkA3ffb1c0c8416b9fc6f907b7433 = 'PK_a3ffb1c0c8416b9fc6f907b7433',
  /** unique or primary key constraint */
  Uq_97672ac88f789774dd47f7c8be3 = 'UQ_97672ac88f789774dd47f7c8be3',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  user_setting?: InputMaybe<User_Settings_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_setting?: InputMaybe<User_Settings_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type InsertAssetMutationVariables = Exact<{
  object: Assets_Insert_Input;
}>;

export type InsertAssetMutation = {
  __typename?: 'mutation_root';
  insert_assets_one?:
    | {
        __typename?: 'assets';
        id: any;
        name: string;
        created_at: string;
        updated_at: string;
      }
    | undefined;
};

export type DeleteAssetMutationVariables = Exact<{
  id: Scalars['bigint'];
}>;

export type DeleteAssetMutation = {
  __typename?: 'mutation_root';
  delete_account_info_by_pk?:
    | { __typename?: 'account_info'; id: any }
    | undefined;
};

export type UpdateAssetMutationVariables = Exact<{
  id: Scalars['bigint'];
  changes?: InputMaybe<Assets_Set_Input>;
}>;

export type UpdateAssetMutation = {
  __typename?: 'mutation_root';
  update_assets_by_pk?: { __typename?: 'assets'; id: any } | undefined;
};

export type UpdateAssetStateMutationVariables = Exact<{
  id: Scalars['bigint'];
  state?: InputMaybe<Scalars['Boolean']>;
}>;

export type UpdateAssetStateMutation = {
  __typename?: 'mutation_root';
  update_assets_by_pk?: { __typename?: 'assets'; active: boolean } | undefined;
};

export type InsertCategoryMutationVariables = Exact<{
  object: Categories_Insert_Input;
}>;

export type InsertCategoryMutation = {
  __typename?: 'mutation_root';
  insert_categories_one?:
    | {
        __typename?: 'categories';
        id: any;
        name: string;
        active: boolean;
        created_at: string;
        updated_at: string;
      }
    | undefined;
};

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['bigint'];
}>;

export type DeleteCategoryMutation = {
  __typename?: 'mutation_root';
  delete_categories_by_pk?:
    | { __typename?: 'categories'; id: any; name: string }
    | undefined;
};

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['bigint'];
  changes?: InputMaybe<Categories_Set_Input>;
}>;

export type UpdateCategoryMutation = {
  __typename?: 'mutation_root';
  update_categories_by_pk?: { __typename?: 'categories'; id: any } | undefined;
};

export type InsertExpenseAccMutationVariables = Exact<{
  object: Expenses_Insert_Input;
}>;

export type InsertExpenseAccMutation = {
  __typename?: 'mutation_root';
  insert_expenses_one?:
    | {
        __typename?: 'expenses';
        id: any;
        name: string;
        created_at: string;
        updated_at: string;
      }
    | undefined;
};

export type DeleteExpenseAccMutationVariables = Exact<{
  id: Scalars['bigint'];
}>;

export type DeleteExpenseAccMutation = {
  __typename?: 'mutation_root';
  delete_account_info_by_pk?:
    | { __typename?: 'account_info'; id: any }
    | undefined;
};

export type UpdateExpenseAccMutationVariables = Exact<{
  id: Scalars['bigint'];
  changes?: InputMaybe<Expenses_Set_Input>;
}>;

export type UpdateExpenseAccMutation = {
  __typename?: 'mutation_root';
  update_expenses_by_pk?: { __typename?: 'expenses'; id: any } | undefined;
};

export type UpdateExpenseStateMutationVariables = Exact<{
  id: Scalars['bigint'];
  state?: InputMaybe<Scalars['Boolean']>;
}>;

export type UpdateExpenseStateMutation = {
  __typename?: 'mutation_root';
  update_expenses_by_pk?:
    | { __typename?: 'expenses'; active: boolean }
    | undefined;
};

export type InsertLabelMutationVariables = Exact<{
  object: Labels_Insert_Input;
}>;

export type InsertLabelMutation = {
  __typename?: 'mutation_root';
  insert_labels_one?:
    | {
        __typename?: 'labels';
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
      }
    | undefined;
};

export type DeleteLabelMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteLabelMutation = {
  __typename?: 'mutation_root';
  delete_labels_by_pk?:
    | { __typename?: 'labels'; id: number; name: string }
    | undefined;
};

export type UpdateLabelMutationVariables = Exact<{
  id: Scalars['Int'];
  changes?: InputMaybe<Labels_Set_Input>;
}>;

export type UpdateLabelMutation = {
  __typename?: 'mutation_root';
  update_labels_by_pk?: { __typename?: 'labels'; id: number } | undefined;
};

export type InsertLiabilityAccMutationVariables = Exact<{
  object: Liabilities_Insert_Input;
}>;

export type InsertLiabilityAccMutation = {
  __typename?: 'mutation_root';
  insert_liabilities_one?:
    | {
        __typename?: 'liabilities';
        id: any;
        name: string;
        created_at: string;
        updated_at: string;
      }
    | undefined;
};

export type DeleteLiabilityAccMutationVariables = Exact<{
  id: Scalars['bigint'];
}>;

export type DeleteLiabilityAccMutation = {
  __typename?: 'mutation_root';
  delete_account_info_by_pk?:
    | { __typename?: 'account_info'; id: any }
    | undefined;
};

export type UpdateLiabilityAccMutationVariables = Exact<{
  id: Scalars['bigint'];
  changes?: InputMaybe<Liabilities_Set_Input>;
}>;

export type UpdateLiabilityAccMutation = {
  __typename?: 'mutation_root';
  update_liabilities_by_pk?:
    | { __typename?: 'liabilities'; id: any }
    | undefined;
};

export type UpdateLiabilityStateMutationVariables = Exact<{
  id: Scalars['bigint'];
  state?: InputMaybe<Scalars['Boolean']>;
}>;

export type UpdateLiabilityStateMutation = {
  __typename?: 'mutation_root';
  update_liabilities_by_pk?:
    | { __typename?: 'liabilities'; active: boolean }
    | undefined;
};

export type InsertRevenueAccMutationVariables = Exact<{
  object: Revenues_Insert_Input;
}>;

export type InsertRevenueAccMutation = {
  __typename?: 'mutation_root';
  insert_revenues_one?:
    | {
        __typename?: 'revenues';
        id: any;
        name: string;
        created_at: string;
        updated_at: string;
      }
    | undefined;
};

export type DeleteRevenueAccMutationVariables = Exact<{
  id: Scalars['bigint'];
}>;

export type DeleteRevenueAccMutation = {
  __typename?: 'mutation_root';
  delete_account_info_by_pk?:
    | { __typename?: 'account_info'; id: any }
    | undefined;
};

export type UpdateRevenueAccMutationVariables = Exact<{
  id: Scalars['bigint'];
  changes?: InputMaybe<Revenues_Set_Input>;
}>;

export type UpdateRevenueAccMutation = {
  __typename?: 'mutation_root';
  update_revenues_by_pk?: { __typename?: 'revenues'; id: any } | undefined;
};

export type UpdateRevenueStateMutationVariables = Exact<{
  id: Scalars['bigint'];
  state?: InputMaybe<Scalars['Boolean']>;
}>;

export type UpdateRevenueStateMutation = {
  __typename?: 'mutation_root';
  update_revenues_by_pk?:
    | { __typename?: 'revenues'; active: boolean }
    | undefined;
};

export type UpdateRevenueStandardMutationVariables = Exact<{
  id: Scalars['bigint'];
}>;

export type UpdateRevenueStandardMutation = {
  __typename?: 'mutation_root';
  update_revenues_by_pk?:
    | { __typename?: 'revenues'; default: boolean }
    | undefined;
  update_revenues?:
    | { __typename?: 'revenues_mutation_response'; affected_rows: number }
    | undefined;
};

export type InsertTransactionMutationVariables = Exact<{
  object: Transactions_Insert_Input;
}>;

export type InsertTransactionMutation = {
  __typename?: 'mutation_root';
  insert_transactions_one?:
    | {
        __typename?: 'transactions';
        id: any;
        description?: string | undefined;
        transaction_date: any;
        created_at: string;
        updated_at: string;
      }
    | undefined;
};

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
  changes?: InputMaybe<Users_Set_Input>;
}>;

export type UpdateUserMutation = {
  __typename?: 'mutation_root';
  update_users?:
    | {
        __typename?: 'users_mutation_response';
        returning: Array<{
          __typename?: 'users';
          id: any;
          name?: string | undefined;
        }>;
      }
    | undefined;
};

export type UpdateUserSettingsMutationVariables = Exact<{
  object: User_Settings_Insert_Input;
}>;

export type UpdateUserSettingsMutation = {
  __typename?: 'mutation_root';
  insert_user_settings_one?:
    | {
        __typename?: 'user_settings';
        user_id: any;
        langKey: string;
        darkMode: boolean;
      }
    | undefined;
};

export type AllAssetsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type AllAssetsQuery = {
  __typename?: 'query_root';
  assets: Array<{
    __typename?: 'assets';
    id: any;
    name: string;
    balance?: any | undefined;
    balance_date?: any | undefined;
    active: boolean;
    account_no?: string | undefined;
    created_at: string;
    updated_at: string;
  }>;
  assets_aggregate: {
    __typename?: 'assets_aggregate';
    aggregate?:
      | { __typename?: 'assets_aggregate_fields'; count: number }
      | undefined;
  };
};

export type ActiveAssetAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type ActiveAssetAccountsQuery = {
  __typename?: 'query_root';
  assets: Array<{ __typename?: 'assets'; id: any; name: string }>;
};

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type AllCategoriesQuery = {
  __typename?: 'query_root';
  categories: Array<{
    __typename?: 'categories';
    id: any;
    name: string;
    active: boolean;
    created_at: string;
    updated_at: string;
  }>;
};

export type ActiveCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type ActiveCategoriesQuery = {
  __typename?: 'query_root';
  categories: Array<{ __typename?: 'categories'; id: any; name: string }>;
};

export type AllExpenseAccountsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type AllExpenseAccountsQuery = {
  __typename?: 'query_root';
  expenses: Array<{
    __typename?: 'expenses';
    id: any;
    name: string;
    active: boolean;
    created_at: string;
    updated_at: string;
  }>;
  expenses_aggregate: {
    __typename?: 'expenses_aggregate';
    aggregate?:
      | { __typename?: 'expenses_aggregate_fields'; count: number }
      | undefined;
  };
};

export type ActiveExpenseAccountsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ActiveExpenseAccountsQuery = {
  __typename?: 'query_root';
  expenses: Array<{ __typename?: 'expenses'; id: any; name: string }>;
};

export type FetchUserQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;

export type FetchUserQuery = {
  __typename?: 'query_root';
  users_by_pk?:
    | {
        __typename?: 'users';
        id: any;
        name?: string | undefined;
        email?: string | undefined;
        image?: string | undefined;
      }
    | undefined;
};

export type FetchUserSettingsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;

export type FetchUserSettingsQuery = {
  __typename?: 'query_root';
  user_settings_by_pk?:
    | {
        __typename?: 'user_settings';
        user_id: any;
        darkMode: boolean;
        langKey: string;
      }
    | undefined;
};

export type AllLabelsQueryVariables = Exact<{ [key: string]: never }>;

export type AllLabelsQuery = {
  __typename?: 'query_root';
  labels: Array<{
    __typename?: 'labels';
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }>;
};

export type AllLiabilityAccountsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type AllLiabilityAccountsQuery = {
  __typename?: 'query_root';
  liabilities: Array<{
    __typename?: 'liabilities';
    id: any;
    name: string;
    active: boolean;
    created_at: string;
    updated_at: string;
  }>;
  liabilities_aggregate: {
    __typename?: 'liabilities_aggregate';
    aggregate?:
      | { __typename?: 'liabilities_aggregate_fields'; count: number }
      | undefined;
  };
};

export type ActiveLiabilityAccountsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ActiveLiabilityAccountsQuery = {
  __typename?: 'query_root';
  liabilities: Array<{
    __typename?: 'liabilities';
    id: any;
    name: string;
    active: boolean;
    created_at: string;
    updated_at: string;
  }>;
};

export type AllRevenueAccountsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;

export type AllRevenueAccountsQuery = {
  __typename?: 'query_root';
  revenues: Array<{
    __typename?: 'revenues';
    id: any;
    name: string;
    active: boolean;
    default: boolean;
    created_at: string;
    updated_at: string;
  }>;
  revenues_aggregate: {
    __typename?: 'revenues_aggregate';
    aggregate?:
      | { __typename?: 'revenues_aggregate_fields'; count: number }
      | undefined;
  };
};

export type ActiveRevenueAccountsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ActiveRevenueAccountsQuery = {
  __typename?: 'query_root';
  revenues: Array<{
    __typename?: 'revenues';
    id: any;
    name: string;
    default: boolean;
  }>;
};

export type FetchLabelsSubscriptionVariables = Exact<{ [key: string]: never }>;

export type FetchLabelsSubscription = {
  __typename?: 'subscription_root';
  labels: Array<{
    __typename?: 'labels';
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }>;
};

export const InsertAssetDocument = gql`
  mutation insertAsset($object: assets_insert_input!) {
    insert_assets_one(object: $object) {
      id
      name
      created_at
      updated_at
    }
  }
`;
export type InsertAssetMutationFn = Apollo.MutationFunction<
  InsertAssetMutation,
  InsertAssetMutationVariables
>;
export type InsertAssetComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertAssetMutation,
    InsertAssetMutationVariables
  >,
  'mutation'
>;

export const InsertAssetComponent = (props: InsertAssetComponentProps) => (
  <ApolloReactComponents.Mutation<
    InsertAssetMutation,
    InsertAssetMutationVariables
  >
    mutation={InsertAssetDocument}
    {...props}
  />
);

export type InsertAssetProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertAssetMutation,
    InsertAssetMutationVariables
  >;
} & TChildProps;
export function withInsertAsset<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertAssetMutation,
    InsertAssetMutationVariables,
    InsertAssetProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertAssetMutation,
    InsertAssetMutationVariables,
    InsertAssetProps<TChildProps, TDataName>
  >(InsertAssetDocument, {
    alias: 'insertAsset',
    ...operationOptions,
  });
}

/**
 * __useInsertAssetMutation__
 *
 * To run a mutation, you first call `useInsertAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAssetMutation, { data, loading, error }] = useInsertAssetMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertAssetMutation,
    InsertAssetMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertAssetMutation, InsertAssetMutationVariables>(
    InsertAssetDocument,
    options
  );
}
export type InsertAssetMutationHookResult = ReturnType<
  typeof useInsertAssetMutation
>;
export type InsertAssetMutationResult =
  Apollo.MutationResult<InsertAssetMutation>;
export type InsertAssetMutationOptions = Apollo.BaseMutationOptions<
  InsertAssetMutation,
  InsertAssetMutationVariables
>;
export const DeleteAssetDocument = gql`
  mutation deleteAsset($id: bigint!) {
    delete_account_info_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteAssetMutationFn = Apollo.MutationFunction<
  DeleteAssetMutation,
  DeleteAssetMutationVariables
>;
export type DeleteAssetComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteAssetMutation,
    DeleteAssetMutationVariables
  >,
  'mutation'
>;

export const DeleteAssetComponent = (props: DeleteAssetComponentProps) => (
  <ApolloReactComponents.Mutation<
    DeleteAssetMutation,
    DeleteAssetMutationVariables
  >
    mutation={DeleteAssetDocument}
    {...props}
  />
);

export type DeleteAssetProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    DeleteAssetMutation,
    DeleteAssetMutationVariables
  >;
} & TChildProps;
export function withDeleteAsset<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteAssetMutation,
    DeleteAssetMutationVariables,
    DeleteAssetProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteAssetMutation,
    DeleteAssetMutationVariables,
    DeleteAssetProps<TChildProps, TDataName>
  >(DeleteAssetDocument, {
    alias: 'deleteAsset',
    ...operationOptions,
  });
}

/**
 * __useDeleteAssetMutation__
 *
 * To run a mutation, you first call `useDeleteAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAssetMutation, { data, loading, error }] = useDeleteAssetMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAssetMutation,
    DeleteAssetMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteAssetMutation, DeleteAssetMutationVariables>(
    DeleteAssetDocument,
    options
  );
}
export type DeleteAssetMutationHookResult = ReturnType<
  typeof useDeleteAssetMutation
>;
export type DeleteAssetMutationResult =
  Apollo.MutationResult<DeleteAssetMutation>;
export type DeleteAssetMutationOptions = Apollo.BaseMutationOptions<
  DeleteAssetMutation,
  DeleteAssetMutationVariables
>;
export const UpdateAssetDocument = gql`
  mutation updateAsset($id: bigint!, $changes: assets_set_input) {
    update_assets_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;
export type UpdateAssetMutationFn = Apollo.MutationFunction<
  UpdateAssetMutation,
  UpdateAssetMutationVariables
>;
export type UpdateAssetComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateAssetMutation,
    UpdateAssetMutationVariables
  >,
  'mutation'
>;

export const UpdateAssetComponent = (props: UpdateAssetComponentProps) => (
  <ApolloReactComponents.Mutation<
    UpdateAssetMutation,
    UpdateAssetMutationVariables
  >
    mutation={UpdateAssetDocument}
    {...props}
  />
);

export type UpdateAssetProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateAssetMutation,
    UpdateAssetMutationVariables
  >;
} & TChildProps;
export function withUpdateAsset<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateAssetMutation,
    UpdateAssetMutationVariables,
    UpdateAssetProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateAssetMutation,
    UpdateAssetMutationVariables,
    UpdateAssetProps<TChildProps, TDataName>
  >(UpdateAssetDocument, {
    alias: 'updateAsset',
    ...operationOptions,
  });
}

/**
 * __useUpdateAssetMutation__
 *
 * To run a mutation, you first call `useUpdateAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssetMutation, { data, loading, error }] = useUpdateAssetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAssetMutation,
    UpdateAssetMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateAssetMutation, UpdateAssetMutationVariables>(
    UpdateAssetDocument,
    options
  );
}
export type UpdateAssetMutationHookResult = ReturnType<
  typeof useUpdateAssetMutation
>;
export type UpdateAssetMutationResult =
  Apollo.MutationResult<UpdateAssetMutation>;
export type UpdateAssetMutationOptions = Apollo.BaseMutationOptions<
  UpdateAssetMutation,
  UpdateAssetMutationVariables
>;
export const UpdateAssetStateDocument = gql`
  mutation updateAssetState($id: bigint!, $state: Boolean) {
    update_assets_by_pk(pk_columns: { id: $id }, _set: { active: $state }) {
      active
    }
  }
`;
export type UpdateAssetStateMutationFn = Apollo.MutationFunction<
  UpdateAssetStateMutation,
  UpdateAssetStateMutationVariables
>;
export type UpdateAssetStateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateAssetStateMutation,
    UpdateAssetStateMutationVariables
  >,
  'mutation'
>;

export const UpdateAssetStateComponent = (
  props: UpdateAssetStateComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateAssetStateMutation,
    UpdateAssetStateMutationVariables
  >
    mutation={UpdateAssetStateDocument}
    {...props}
  />
);

export type UpdateAssetStateProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateAssetStateMutation,
    UpdateAssetStateMutationVariables
  >;
} & TChildProps;
export function withUpdateAssetState<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateAssetStateMutation,
    UpdateAssetStateMutationVariables,
    UpdateAssetStateProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateAssetStateMutation,
    UpdateAssetStateMutationVariables,
    UpdateAssetStateProps<TChildProps, TDataName>
  >(UpdateAssetStateDocument, {
    alias: 'updateAssetState',
    ...operationOptions,
  });
}

/**
 * __useUpdateAssetStateMutation__
 *
 * To run a mutation, you first call `useUpdateAssetStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssetStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssetStateMutation, { data, loading, error }] = useUpdateAssetStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useUpdateAssetStateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAssetStateMutation,
    UpdateAssetStateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateAssetStateMutation,
    UpdateAssetStateMutationVariables
  >(UpdateAssetStateDocument, options);
}
export type UpdateAssetStateMutationHookResult = ReturnType<
  typeof useUpdateAssetStateMutation
>;
export type UpdateAssetStateMutationResult =
  Apollo.MutationResult<UpdateAssetStateMutation>;
export type UpdateAssetStateMutationOptions = Apollo.BaseMutationOptions<
  UpdateAssetStateMutation,
  UpdateAssetStateMutationVariables
>;
export const InsertCategoryDocument = gql`
  mutation insertCategory($object: categories_insert_input!) {
    insert_categories_one(object: $object) {
      id
      name
      active
      created_at
      updated_at
    }
  }
`;
export type InsertCategoryMutationFn = Apollo.MutationFunction<
  InsertCategoryMutation,
  InsertCategoryMutationVariables
>;
export type InsertCategoryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertCategoryMutation,
    InsertCategoryMutationVariables
  >,
  'mutation'
>;

export const InsertCategoryComponent = (
  props: InsertCategoryComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InsertCategoryMutation,
    InsertCategoryMutationVariables
  >
    mutation={InsertCategoryDocument}
    {...props}
  />
);

export type InsertCategoryProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertCategoryMutation,
    InsertCategoryMutationVariables
  >;
} & TChildProps;
export function withInsertCategory<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertCategoryMutation,
    InsertCategoryMutationVariables,
    InsertCategoryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertCategoryMutation,
    InsertCategoryMutationVariables,
    InsertCategoryProps<TChildProps, TDataName>
  >(InsertCategoryDocument, {
    alias: 'insertCategory',
    ...operationOptions,
  });
}

/**
 * __useInsertCategoryMutation__
 *
 * To run a mutation, you first call `useInsertCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCategoryMutation, { data, loading, error }] = useInsertCategoryMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertCategoryMutation,
    InsertCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertCategoryMutation,
    InsertCategoryMutationVariables
  >(InsertCategoryDocument, options);
}
export type InsertCategoryMutationHookResult = ReturnType<
  typeof useInsertCategoryMutation
>;
export type InsertCategoryMutationResult =
  Apollo.MutationResult<InsertCategoryMutation>;
export type InsertCategoryMutationOptions = Apollo.BaseMutationOptions<
  InsertCategoryMutation,
  InsertCategoryMutationVariables
>;
export const DeleteCategoryDocument = gql`
  mutation deleteCategory($id: bigint!) {
    delete_categories_by_pk(id: $id) {
      id
      name
    }
  }
`;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>;
export type DeleteCategoryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >,
  'mutation'
>;

export const DeleteCategoryComponent = (
  props: DeleteCategoryComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >
    mutation={DeleteCategoryDocument}
    {...props}
  />
);

export type DeleteCategoryProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >;
} & TChildProps;
export function withDeleteCategory<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables,
    DeleteCategoryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables,
    DeleteCategoryProps<TChildProps, TDataName>
  >(DeleteCategoryDocument, {
    alias: 'deleteCategory',
    ...operationOptions,
  });
}

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >(DeleteCategoryDocument, options);
}
export type DeleteCategoryMutationHookResult = ReturnType<
  typeof useDeleteCategoryMutation
>;
export type DeleteCategoryMutationResult =
  Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>;
export const UpdateCategoryDocument = gql`
  mutation updateCategory($id: bigint!, $changes: categories_set_input) {
    update_categories_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;
export type UpdateCategoryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >,
  'mutation'
>;

export const UpdateCategoryComponent = (
  props: UpdateCategoryComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >
    mutation={UpdateCategoryDocument}
    {...props}
  />
);

export type UpdateCategoryProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >;
} & TChildProps;
export function withUpdateCategory<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables,
    UpdateCategoryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables,
    UpdateCategoryProps<TChildProps, TDataName>
  >(UpdateCategoryDocument, {
    alias: 'updateCategory',
    ...operationOptions,
  });
}

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >(UpdateCategoryDocument, options);
}
export type UpdateCategoryMutationHookResult = ReturnType<
  typeof useUpdateCategoryMutation
>;
export type UpdateCategoryMutationResult =
  Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;
export const InsertExpenseAccDocument = gql`
  mutation insertExpenseAcc($object: expenses_insert_input!) {
    insert_expenses_one(object: $object) {
      id
      name
      created_at
      updated_at
    }
  }
`;
export type InsertExpenseAccMutationFn = Apollo.MutationFunction<
  InsertExpenseAccMutation,
  InsertExpenseAccMutationVariables
>;
export type InsertExpenseAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertExpenseAccMutation,
    InsertExpenseAccMutationVariables
  >,
  'mutation'
>;

export const InsertExpenseAccComponent = (
  props: InsertExpenseAccComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InsertExpenseAccMutation,
    InsertExpenseAccMutationVariables
  >
    mutation={InsertExpenseAccDocument}
    {...props}
  />
);

export type InsertExpenseAccProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertExpenseAccMutation,
    InsertExpenseAccMutationVariables
  >;
} & TChildProps;
export function withInsertExpenseAcc<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertExpenseAccMutation,
    InsertExpenseAccMutationVariables,
    InsertExpenseAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertExpenseAccMutation,
    InsertExpenseAccMutationVariables,
    InsertExpenseAccProps<TChildProps, TDataName>
  >(InsertExpenseAccDocument, {
    alias: 'insertExpenseAcc',
    ...operationOptions,
  });
}

/**
 * __useInsertExpenseAccMutation__
 *
 * To run a mutation, you first call `useInsertExpenseAccMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertExpenseAccMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertExpenseAccMutation, { data, loading, error }] = useInsertExpenseAccMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertExpenseAccMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertExpenseAccMutation,
    InsertExpenseAccMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertExpenseAccMutation,
    InsertExpenseAccMutationVariables
  >(InsertExpenseAccDocument, options);
}
export type InsertExpenseAccMutationHookResult = ReturnType<
  typeof useInsertExpenseAccMutation
>;
export type InsertExpenseAccMutationResult =
  Apollo.MutationResult<InsertExpenseAccMutation>;
export type InsertExpenseAccMutationOptions = Apollo.BaseMutationOptions<
  InsertExpenseAccMutation,
  InsertExpenseAccMutationVariables
>;
export const DeleteExpenseAccDocument = gql`
  mutation deleteExpenseAcc($id: bigint!) {
    delete_account_info_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteExpenseAccMutationFn = Apollo.MutationFunction<
  DeleteExpenseAccMutation,
  DeleteExpenseAccMutationVariables
>;
export type DeleteExpenseAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteExpenseAccMutation,
    DeleteExpenseAccMutationVariables
  >,
  'mutation'
>;

export const DeleteExpenseAccComponent = (
  props: DeleteExpenseAccComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteExpenseAccMutation,
    DeleteExpenseAccMutationVariables
  >
    mutation={DeleteExpenseAccDocument}
    {...props}
  />
);

export type DeleteExpenseAccProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    DeleteExpenseAccMutation,
    DeleteExpenseAccMutationVariables
  >;
} & TChildProps;
export function withDeleteExpenseAcc<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteExpenseAccMutation,
    DeleteExpenseAccMutationVariables,
    DeleteExpenseAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteExpenseAccMutation,
    DeleteExpenseAccMutationVariables,
    DeleteExpenseAccProps<TChildProps, TDataName>
  >(DeleteExpenseAccDocument, {
    alias: 'deleteExpenseAcc',
    ...operationOptions,
  });
}

/**
 * __useDeleteExpenseAccMutation__
 *
 * To run a mutation, you first call `useDeleteExpenseAccMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExpenseAccMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExpenseAccMutation, { data, loading, error }] = useDeleteExpenseAccMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExpenseAccMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteExpenseAccMutation,
    DeleteExpenseAccMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteExpenseAccMutation,
    DeleteExpenseAccMutationVariables
  >(DeleteExpenseAccDocument, options);
}
export type DeleteExpenseAccMutationHookResult = ReturnType<
  typeof useDeleteExpenseAccMutation
>;
export type DeleteExpenseAccMutationResult =
  Apollo.MutationResult<DeleteExpenseAccMutation>;
export type DeleteExpenseAccMutationOptions = Apollo.BaseMutationOptions<
  DeleteExpenseAccMutation,
  DeleteExpenseAccMutationVariables
>;
export const UpdateExpenseAccDocument = gql`
  mutation updateExpenseAcc($id: bigint!, $changes: expenses_set_input) {
    update_expenses_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;
export type UpdateExpenseAccMutationFn = Apollo.MutationFunction<
  UpdateExpenseAccMutation,
  UpdateExpenseAccMutationVariables
>;
export type UpdateExpenseAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateExpenseAccMutation,
    UpdateExpenseAccMutationVariables
  >,
  'mutation'
>;

export const UpdateExpenseAccComponent = (
  props: UpdateExpenseAccComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateExpenseAccMutation,
    UpdateExpenseAccMutationVariables
  >
    mutation={UpdateExpenseAccDocument}
    {...props}
  />
);

export type UpdateExpenseAccProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateExpenseAccMutation,
    UpdateExpenseAccMutationVariables
  >;
} & TChildProps;
export function withUpdateExpenseAcc<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateExpenseAccMutation,
    UpdateExpenseAccMutationVariables,
    UpdateExpenseAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateExpenseAccMutation,
    UpdateExpenseAccMutationVariables,
    UpdateExpenseAccProps<TChildProps, TDataName>
  >(UpdateExpenseAccDocument, {
    alias: 'updateExpenseAcc',
    ...operationOptions,
  });
}

/**
 * __useUpdateExpenseAccMutation__
 *
 * To run a mutation, you first call `useUpdateExpenseAccMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExpenseAccMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExpenseAccMutation, { data, loading, error }] = useUpdateExpenseAccMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateExpenseAccMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateExpenseAccMutation,
    UpdateExpenseAccMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateExpenseAccMutation,
    UpdateExpenseAccMutationVariables
  >(UpdateExpenseAccDocument, options);
}
export type UpdateExpenseAccMutationHookResult = ReturnType<
  typeof useUpdateExpenseAccMutation
>;
export type UpdateExpenseAccMutationResult =
  Apollo.MutationResult<UpdateExpenseAccMutation>;
export type UpdateExpenseAccMutationOptions = Apollo.BaseMutationOptions<
  UpdateExpenseAccMutation,
  UpdateExpenseAccMutationVariables
>;
export const UpdateExpenseStateDocument = gql`
  mutation updateExpenseState($id: bigint!, $state: Boolean) {
    update_expenses_by_pk(pk_columns: { id: $id }, _set: { active: $state }) {
      active
    }
  }
`;
export type UpdateExpenseStateMutationFn = Apollo.MutationFunction<
  UpdateExpenseStateMutation,
  UpdateExpenseStateMutationVariables
>;
export type UpdateExpenseStateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateExpenseStateMutation,
    UpdateExpenseStateMutationVariables
  >,
  'mutation'
>;

export const UpdateExpenseStateComponent = (
  props: UpdateExpenseStateComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateExpenseStateMutation,
    UpdateExpenseStateMutationVariables
  >
    mutation={UpdateExpenseStateDocument}
    {...props}
  />
);

export type UpdateExpenseStateProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateExpenseStateMutation,
    UpdateExpenseStateMutationVariables
  >;
} & TChildProps;
export function withUpdateExpenseState<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateExpenseStateMutation,
    UpdateExpenseStateMutationVariables,
    UpdateExpenseStateProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateExpenseStateMutation,
    UpdateExpenseStateMutationVariables,
    UpdateExpenseStateProps<TChildProps, TDataName>
  >(UpdateExpenseStateDocument, {
    alias: 'updateExpenseState',
    ...operationOptions,
  });
}

/**
 * __useUpdateExpenseStateMutation__
 *
 * To run a mutation, you first call `useUpdateExpenseStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExpenseStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExpenseStateMutation, { data, loading, error }] = useUpdateExpenseStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useUpdateExpenseStateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateExpenseStateMutation,
    UpdateExpenseStateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateExpenseStateMutation,
    UpdateExpenseStateMutationVariables
  >(UpdateExpenseStateDocument, options);
}
export type UpdateExpenseStateMutationHookResult = ReturnType<
  typeof useUpdateExpenseStateMutation
>;
export type UpdateExpenseStateMutationResult =
  Apollo.MutationResult<UpdateExpenseStateMutation>;
export type UpdateExpenseStateMutationOptions = Apollo.BaseMutationOptions<
  UpdateExpenseStateMutation,
  UpdateExpenseStateMutationVariables
>;
export const InsertLabelDocument = gql`
  mutation insertLabel($object: labels_insert_input!) {
    insert_labels_one(object: $object) {
      id
      name
      created_at
      updated_at
    }
  }
`;
export type InsertLabelMutationFn = Apollo.MutationFunction<
  InsertLabelMutation,
  InsertLabelMutationVariables
>;
export type InsertLabelComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertLabelMutation,
    InsertLabelMutationVariables
  >,
  'mutation'
>;

export const InsertLabelComponent = (props: InsertLabelComponentProps) => (
  <ApolloReactComponents.Mutation<
    InsertLabelMutation,
    InsertLabelMutationVariables
  >
    mutation={InsertLabelDocument}
    {...props}
  />
);

export type InsertLabelProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertLabelMutation,
    InsertLabelMutationVariables
  >;
} & TChildProps;
export function withInsertLabel<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertLabelMutation,
    InsertLabelMutationVariables,
    InsertLabelProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertLabelMutation,
    InsertLabelMutationVariables,
    InsertLabelProps<TChildProps, TDataName>
  >(InsertLabelDocument, {
    alias: 'insertLabel',
    ...operationOptions,
  });
}

/**
 * __useInsertLabelMutation__
 *
 * To run a mutation, you first call `useInsertLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertLabelMutation, { data, loading, error }] = useInsertLabelMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertLabelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertLabelMutation,
    InsertLabelMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertLabelMutation, InsertLabelMutationVariables>(
    InsertLabelDocument,
    options
  );
}
export type InsertLabelMutationHookResult = ReturnType<
  typeof useInsertLabelMutation
>;
export type InsertLabelMutationResult =
  Apollo.MutationResult<InsertLabelMutation>;
export type InsertLabelMutationOptions = Apollo.BaseMutationOptions<
  InsertLabelMutation,
  InsertLabelMutationVariables
>;
export const DeleteLabelDocument = gql`
  mutation deleteLabel($id: Int!) {
    delete_labels_by_pk(id: $id) {
      id
      name
    }
  }
`;
export type DeleteLabelMutationFn = Apollo.MutationFunction<
  DeleteLabelMutation,
  DeleteLabelMutationVariables
>;
export type DeleteLabelComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteLabelMutation,
    DeleteLabelMutationVariables
  >,
  'mutation'
>;

export const DeleteLabelComponent = (props: DeleteLabelComponentProps) => (
  <ApolloReactComponents.Mutation<
    DeleteLabelMutation,
    DeleteLabelMutationVariables
  >
    mutation={DeleteLabelDocument}
    {...props}
  />
);

export type DeleteLabelProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    DeleteLabelMutation,
    DeleteLabelMutationVariables
  >;
} & TChildProps;
export function withDeleteLabel<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteLabelMutation,
    DeleteLabelMutationVariables,
    DeleteLabelProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteLabelMutation,
    DeleteLabelMutationVariables,
    DeleteLabelProps<TChildProps, TDataName>
  >(DeleteLabelDocument, {
    alias: 'deleteLabel',
    ...operationOptions,
  });
}

/**
 * __useDeleteLabelMutation__
 *
 * To run a mutation, you first call `useDeleteLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLabelMutation, { data, loading, error }] = useDeleteLabelMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLabelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteLabelMutation,
    DeleteLabelMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteLabelMutation, DeleteLabelMutationVariables>(
    DeleteLabelDocument,
    options
  );
}
export type DeleteLabelMutationHookResult = ReturnType<
  typeof useDeleteLabelMutation
>;
export type DeleteLabelMutationResult =
  Apollo.MutationResult<DeleteLabelMutation>;
export type DeleteLabelMutationOptions = Apollo.BaseMutationOptions<
  DeleteLabelMutation,
  DeleteLabelMutationVariables
>;
export const UpdateLabelDocument = gql`
  mutation updateLabel($id: Int!, $changes: labels_set_input) {
    update_labels_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;
export type UpdateLabelMutationFn = Apollo.MutationFunction<
  UpdateLabelMutation,
  UpdateLabelMutationVariables
>;
export type UpdateLabelComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateLabelMutation,
    UpdateLabelMutationVariables
  >,
  'mutation'
>;

export const UpdateLabelComponent = (props: UpdateLabelComponentProps) => (
  <ApolloReactComponents.Mutation<
    UpdateLabelMutation,
    UpdateLabelMutationVariables
  >
    mutation={UpdateLabelDocument}
    {...props}
  />
);

export type UpdateLabelProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateLabelMutation,
    UpdateLabelMutationVariables
  >;
} & TChildProps;
export function withUpdateLabel<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateLabelMutation,
    UpdateLabelMutationVariables,
    UpdateLabelProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateLabelMutation,
    UpdateLabelMutationVariables,
    UpdateLabelProps<TChildProps, TDataName>
  >(UpdateLabelDocument, {
    alias: 'updateLabel',
    ...operationOptions,
  });
}

/**
 * __useUpdateLabelMutation__
 *
 * To run a mutation, you first call `useUpdateLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLabelMutation, { data, loading, error }] = useUpdateLabelMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateLabelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLabelMutation,
    UpdateLabelMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateLabelMutation, UpdateLabelMutationVariables>(
    UpdateLabelDocument,
    options
  );
}
export type UpdateLabelMutationHookResult = ReturnType<
  typeof useUpdateLabelMutation
>;
export type UpdateLabelMutationResult =
  Apollo.MutationResult<UpdateLabelMutation>;
export type UpdateLabelMutationOptions = Apollo.BaseMutationOptions<
  UpdateLabelMutation,
  UpdateLabelMutationVariables
>;
export const InsertLiabilityAccDocument = gql`
  mutation insertLiabilityAcc($object: liabilities_insert_input!) {
    insert_liabilities_one(object: $object) {
      id
      name
      created_at
      updated_at
    }
  }
`;
export type InsertLiabilityAccMutationFn = Apollo.MutationFunction<
  InsertLiabilityAccMutation,
  InsertLiabilityAccMutationVariables
>;
export type InsertLiabilityAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertLiabilityAccMutation,
    InsertLiabilityAccMutationVariables
  >,
  'mutation'
>;

export const InsertLiabilityAccComponent = (
  props: InsertLiabilityAccComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InsertLiabilityAccMutation,
    InsertLiabilityAccMutationVariables
  >
    mutation={InsertLiabilityAccDocument}
    {...props}
  />
);

export type InsertLiabilityAccProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertLiabilityAccMutation,
    InsertLiabilityAccMutationVariables
  >;
} & TChildProps;
export function withInsertLiabilityAcc<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertLiabilityAccMutation,
    InsertLiabilityAccMutationVariables,
    InsertLiabilityAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertLiabilityAccMutation,
    InsertLiabilityAccMutationVariables,
    InsertLiabilityAccProps<TChildProps, TDataName>
  >(InsertLiabilityAccDocument, {
    alias: 'insertLiabilityAcc',
    ...operationOptions,
  });
}

/**
 * __useInsertLiabilityAccMutation__
 *
 * To run a mutation, you first call `useInsertLiabilityAccMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertLiabilityAccMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertLiabilityAccMutation, { data, loading, error }] = useInsertLiabilityAccMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertLiabilityAccMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertLiabilityAccMutation,
    InsertLiabilityAccMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertLiabilityAccMutation,
    InsertLiabilityAccMutationVariables
  >(InsertLiabilityAccDocument, options);
}
export type InsertLiabilityAccMutationHookResult = ReturnType<
  typeof useInsertLiabilityAccMutation
>;
export type InsertLiabilityAccMutationResult =
  Apollo.MutationResult<InsertLiabilityAccMutation>;
export type InsertLiabilityAccMutationOptions = Apollo.BaseMutationOptions<
  InsertLiabilityAccMutation,
  InsertLiabilityAccMutationVariables
>;
export const DeleteLiabilityAccDocument = gql`
  mutation deleteLiabilityAcc($id: bigint!) {
    delete_account_info_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteLiabilityAccMutationFn = Apollo.MutationFunction<
  DeleteLiabilityAccMutation,
  DeleteLiabilityAccMutationVariables
>;
export type DeleteLiabilityAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteLiabilityAccMutation,
    DeleteLiabilityAccMutationVariables
  >,
  'mutation'
>;

export const DeleteLiabilityAccComponent = (
  props: DeleteLiabilityAccComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteLiabilityAccMutation,
    DeleteLiabilityAccMutationVariables
  >
    mutation={DeleteLiabilityAccDocument}
    {...props}
  />
);

export type DeleteLiabilityAccProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    DeleteLiabilityAccMutation,
    DeleteLiabilityAccMutationVariables
  >;
} & TChildProps;
export function withDeleteLiabilityAcc<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteLiabilityAccMutation,
    DeleteLiabilityAccMutationVariables,
    DeleteLiabilityAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteLiabilityAccMutation,
    DeleteLiabilityAccMutationVariables,
    DeleteLiabilityAccProps<TChildProps, TDataName>
  >(DeleteLiabilityAccDocument, {
    alias: 'deleteLiabilityAcc',
    ...operationOptions,
  });
}

/**
 * __useDeleteLiabilityAccMutation__
 *
 * To run a mutation, you first call `useDeleteLiabilityAccMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLiabilityAccMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLiabilityAccMutation, { data, loading, error }] = useDeleteLiabilityAccMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLiabilityAccMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteLiabilityAccMutation,
    DeleteLiabilityAccMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteLiabilityAccMutation,
    DeleteLiabilityAccMutationVariables
  >(DeleteLiabilityAccDocument, options);
}
export type DeleteLiabilityAccMutationHookResult = ReturnType<
  typeof useDeleteLiabilityAccMutation
>;
export type DeleteLiabilityAccMutationResult =
  Apollo.MutationResult<DeleteLiabilityAccMutation>;
export type DeleteLiabilityAccMutationOptions = Apollo.BaseMutationOptions<
  DeleteLiabilityAccMutation,
  DeleteLiabilityAccMutationVariables
>;
export const UpdateLiabilityAccDocument = gql`
  mutation updateLiabilityAcc($id: bigint!, $changes: liabilities_set_input) {
    update_liabilities_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;
export type UpdateLiabilityAccMutationFn = Apollo.MutationFunction<
  UpdateLiabilityAccMutation,
  UpdateLiabilityAccMutationVariables
>;
export type UpdateLiabilityAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateLiabilityAccMutation,
    UpdateLiabilityAccMutationVariables
  >,
  'mutation'
>;

export const UpdateLiabilityAccComponent = (
  props: UpdateLiabilityAccComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateLiabilityAccMutation,
    UpdateLiabilityAccMutationVariables
  >
    mutation={UpdateLiabilityAccDocument}
    {...props}
  />
);

export type UpdateLiabilityAccProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateLiabilityAccMutation,
    UpdateLiabilityAccMutationVariables
  >;
} & TChildProps;
export function withUpdateLiabilityAcc<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateLiabilityAccMutation,
    UpdateLiabilityAccMutationVariables,
    UpdateLiabilityAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateLiabilityAccMutation,
    UpdateLiabilityAccMutationVariables,
    UpdateLiabilityAccProps<TChildProps, TDataName>
  >(UpdateLiabilityAccDocument, {
    alias: 'updateLiabilityAcc',
    ...operationOptions,
  });
}

/**
 * __useUpdateLiabilityAccMutation__
 *
 * To run a mutation, you first call `useUpdateLiabilityAccMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLiabilityAccMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLiabilityAccMutation, { data, loading, error }] = useUpdateLiabilityAccMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateLiabilityAccMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLiabilityAccMutation,
    UpdateLiabilityAccMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateLiabilityAccMutation,
    UpdateLiabilityAccMutationVariables
  >(UpdateLiabilityAccDocument, options);
}
export type UpdateLiabilityAccMutationHookResult = ReturnType<
  typeof useUpdateLiabilityAccMutation
>;
export type UpdateLiabilityAccMutationResult =
  Apollo.MutationResult<UpdateLiabilityAccMutation>;
export type UpdateLiabilityAccMutationOptions = Apollo.BaseMutationOptions<
  UpdateLiabilityAccMutation,
  UpdateLiabilityAccMutationVariables
>;
export const UpdateLiabilityStateDocument = gql`
  mutation updateLiabilityState($id: bigint!, $state: Boolean) {
    update_liabilities_by_pk(
      pk_columns: { id: $id }
      _set: { active: $state }
    ) {
      active
    }
  }
`;
export type UpdateLiabilityStateMutationFn = Apollo.MutationFunction<
  UpdateLiabilityStateMutation,
  UpdateLiabilityStateMutationVariables
>;
export type UpdateLiabilityStateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateLiabilityStateMutation,
    UpdateLiabilityStateMutationVariables
  >,
  'mutation'
>;

export const UpdateLiabilityStateComponent = (
  props: UpdateLiabilityStateComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateLiabilityStateMutation,
    UpdateLiabilityStateMutationVariables
  >
    mutation={UpdateLiabilityStateDocument}
    {...props}
  />
);

export type UpdateLiabilityStateProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateLiabilityStateMutation,
    UpdateLiabilityStateMutationVariables
  >;
} & TChildProps;
export function withUpdateLiabilityState<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateLiabilityStateMutation,
    UpdateLiabilityStateMutationVariables,
    UpdateLiabilityStateProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateLiabilityStateMutation,
    UpdateLiabilityStateMutationVariables,
    UpdateLiabilityStateProps<TChildProps, TDataName>
  >(UpdateLiabilityStateDocument, {
    alias: 'updateLiabilityState',
    ...operationOptions,
  });
}

/**
 * __useUpdateLiabilityStateMutation__
 *
 * To run a mutation, you first call `useUpdateLiabilityStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLiabilityStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLiabilityStateMutation, { data, loading, error }] = useUpdateLiabilityStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useUpdateLiabilityStateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLiabilityStateMutation,
    UpdateLiabilityStateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateLiabilityStateMutation,
    UpdateLiabilityStateMutationVariables
  >(UpdateLiabilityStateDocument, options);
}
export type UpdateLiabilityStateMutationHookResult = ReturnType<
  typeof useUpdateLiabilityStateMutation
>;
export type UpdateLiabilityStateMutationResult =
  Apollo.MutationResult<UpdateLiabilityStateMutation>;
export type UpdateLiabilityStateMutationOptions = Apollo.BaseMutationOptions<
  UpdateLiabilityStateMutation,
  UpdateLiabilityStateMutationVariables
>;
export const InsertRevenueAccDocument = gql`
  mutation insertRevenueAcc($object: revenues_insert_input!) {
    insert_revenues_one(object: $object) {
      id
      name
      created_at
      updated_at
    }
  }
`;
export type InsertRevenueAccMutationFn = Apollo.MutationFunction<
  InsertRevenueAccMutation,
  InsertRevenueAccMutationVariables
>;
export type InsertRevenueAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertRevenueAccMutation,
    InsertRevenueAccMutationVariables
  >,
  'mutation'
>;

export const InsertRevenueAccComponent = (
  props: InsertRevenueAccComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InsertRevenueAccMutation,
    InsertRevenueAccMutationVariables
  >
    mutation={InsertRevenueAccDocument}
    {...props}
  />
);

export type InsertRevenueAccProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertRevenueAccMutation,
    InsertRevenueAccMutationVariables
  >;
} & TChildProps;
export function withInsertRevenueAcc<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertRevenueAccMutation,
    InsertRevenueAccMutationVariables,
    InsertRevenueAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertRevenueAccMutation,
    InsertRevenueAccMutationVariables,
    InsertRevenueAccProps<TChildProps, TDataName>
  >(InsertRevenueAccDocument, {
    alias: 'insertRevenueAcc',
    ...operationOptions,
  });
}

/**
 * __useInsertRevenueAccMutation__
 *
 * To run a mutation, you first call `useInsertRevenueAccMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertRevenueAccMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertRevenueAccMutation, { data, loading, error }] = useInsertRevenueAccMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertRevenueAccMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertRevenueAccMutation,
    InsertRevenueAccMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertRevenueAccMutation,
    InsertRevenueAccMutationVariables
  >(InsertRevenueAccDocument, options);
}
export type InsertRevenueAccMutationHookResult = ReturnType<
  typeof useInsertRevenueAccMutation
>;
export type InsertRevenueAccMutationResult =
  Apollo.MutationResult<InsertRevenueAccMutation>;
export type InsertRevenueAccMutationOptions = Apollo.BaseMutationOptions<
  InsertRevenueAccMutation,
  InsertRevenueAccMutationVariables
>;
export const DeleteRevenueAccDocument = gql`
  mutation deleteRevenueAcc($id: bigint!) {
    delete_account_info_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteRevenueAccMutationFn = Apollo.MutationFunction<
  DeleteRevenueAccMutation,
  DeleteRevenueAccMutationVariables
>;
export type DeleteRevenueAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteRevenueAccMutation,
    DeleteRevenueAccMutationVariables
  >,
  'mutation'
>;

export const DeleteRevenueAccComponent = (
  props: DeleteRevenueAccComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteRevenueAccMutation,
    DeleteRevenueAccMutationVariables
  >
    mutation={DeleteRevenueAccDocument}
    {...props}
  />
);

export type DeleteRevenueAccProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    DeleteRevenueAccMutation,
    DeleteRevenueAccMutationVariables
  >;
} & TChildProps;
export function withDeleteRevenueAcc<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteRevenueAccMutation,
    DeleteRevenueAccMutationVariables,
    DeleteRevenueAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteRevenueAccMutation,
    DeleteRevenueAccMutationVariables,
    DeleteRevenueAccProps<TChildProps, TDataName>
  >(DeleteRevenueAccDocument, {
    alias: 'deleteRevenueAcc',
    ...operationOptions,
  });
}

/**
 * __useDeleteRevenueAccMutation__
 *
 * To run a mutation, you first call `useDeleteRevenueAccMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRevenueAccMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRevenueAccMutation, { data, loading, error }] = useDeleteRevenueAccMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRevenueAccMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRevenueAccMutation,
    DeleteRevenueAccMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteRevenueAccMutation,
    DeleteRevenueAccMutationVariables
  >(DeleteRevenueAccDocument, options);
}
export type DeleteRevenueAccMutationHookResult = ReturnType<
  typeof useDeleteRevenueAccMutation
>;
export type DeleteRevenueAccMutationResult =
  Apollo.MutationResult<DeleteRevenueAccMutation>;
export type DeleteRevenueAccMutationOptions = Apollo.BaseMutationOptions<
  DeleteRevenueAccMutation,
  DeleteRevenueAccMutationVariables
>;
export const UpdateRevenueAccDocument = gql`
  mutation updateRevenueAcc($id: bigint!, $changes: revenues_set_input) {
    update_revenues_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;
export type UpdateRevenueAccMutationFn = Apollo.MutationFunction<
  UpdateRevenueAccMutation,
  UpdateRevenueAccMutationVariables
>;
export type UpdateRevenueAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateRevenueAccMutation,
    UpdateRevenueAccMutationVariables
  >,
  'mutation'
>;

export const UpdateRevenueAccComponent = (
  props: UpdateRevenueAccComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateRevenueAccMutation,
    UpdateRevenueAccMutationVariables
  >
    mutation={UpdateRevenueAccDocument}
    {...props}
  />
);

export type UpdateRevenueAccProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateRevenueAccMutation,
    UpdateRevenueAccMutationVariables
  >;
} & TChildProps;
export function withUpdateRevenueAcc<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateRevenueAccMutation,
    UpdateRevenueAccMutationVariables,
    UpdateRevenueAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateRevenueAccMutation,
    UpdateRevenueAccMutationVariables,
    UpdateRevenueAccProps<TChildProps, TDataName>
  >(UpdateRevenueAccDocument, {
    alias: 'updateRevenueAcc',
    ...operationOptions,
  });
}

/**
 * __useUpdateRevenueAccMutation__
 *
 * To run a mutation, you first call `useUpdateRevenueAccMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRevenueAccMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRevenueAccMutation, { data, loading, error }] = useUpdateRevenueAccMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateRevenueAccMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRevenueAccMutation,
    UpdateRevenueAccMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateRevenueAccMutation,
    UpdateRevenueAccMutationVariables
  >(UpdateRevenueAccDocument, options);
}
export type UpdateRevenueAccMutationHookResult = ReturnType<
  typeof useUpdateRevenueAccMutation
>;
export type UpdateRevenueAccMutationResult =
  Apollo.MutationResult<UpdateRevenueAccMutation>;
export type UpdateRevenueAccMutationOptions = Apollo.BaseMutationOptions<
  UpdateRevenueAccMutation,
  UpdateRevenueAccMutationVariables
>;
export const UpdateRevenueStateDocument = gql`
  mutation updateRevenueState($id: bigint!, $state: Boolean) {
    update_revenues_by_pk(pk_columns: { id: $id }, _set: { active: $state }) {
      active
    }
  }
`;
export type UpdateRevenueStateMutationFn = Apollo.MutationFunction<
  UpdateRevenueStateMutation,
  UpdateRevenueStateMutationVariables
>;
export type UpdateRevenueStateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateRevenueStateMutation,
    UpdateRevenueStateMutationVariables
  >,
  'mutation'
>;

export const UpdateRevenueStateComponent = (
  props: UpdateRevenueStateComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateRevenueStateMutation,
    UpdateRevenueStateMutationVariables
  >
    mutation={UpdateRevenueStateDocument}
    {...props}
  />
);

export type UpdateRevenueStateProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateRevenueStateMutation,
    UpdateRevenueStateMutationVariables
  >;
} & TChildProps;
export function withUpdateRevenueState<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateRevenueStateMutation,
    UpdateRevenueStateMutationVariables,
    UpdateRevenueStateProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateRevenueStateMutation,
    UpdateRevenueStateMutationVariables,
    UpdateRevenueStateProps<TChildProps, TDataName>
  >(UpdateRevenueStateDocument, {
    alias: 'updateRevenueState',
    ...operationOptions,
  });
}

/**
 * __useUpdateRevenueStateMutation__
 *
 * To run a mutation, you first call `useUpdateRevenueStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRevenueStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRevenueStateMutation, { data, loading, error }] = useUpdateRevenueStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useUpdateRevenueStateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRevenueStateMutation,
    UpdateRevenueStateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateRevenueStateMutation,
    UpdateRevenueStateMutationVariables
  >(UpdateRevenueStateDocument, options);
}
export type UpdateRevenueStateMutationHookResult = ReturnType<
  typeof useUpdateRevenueStateMutation
>;
export type UpdateRevenueStateMutationResult =
  Apollo.MutationResult<UpdateRevenueStateMutation>;
export type UpdateRevenueStateMutationOptions = Apollo.BaseMutationOptions<
  UpdateRevenueStateMutation,
  UpdateRevenueStateMutationVariables
>;
export const UpdateRevenueStandardDocument = gql`
  mutation updateRevenueStandard($id: bigint!) {
    update_revenues_by_pk(pk_columns: { id: $id }, _set: { default: true }) {
      default
    }
    update_revenues(_set: { default: false }, where: { id: { _neq: $id } }) {
      affected_rows
    }
  }
`;
export type UpdateRevenueStandardMutationFn = Apollo.MutationFunction<
  UpdateRevenueStandardMutation,
  UpdateRevenueStandardMutationVariables
>;
export type UpdateRevenueStandardComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateRevenueStandardMutation,
    UpdateRevenueStandardMutationVariables
  >,
  'mutation'
>;

export const UpdateRevenueStandardComponent = (
  props: UpdateRevenueStandardComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateRevenueStandardMutation,
    UpdateRevenueStandardMutationVariables
  >
    mutation={UpdateRevenueStandardDocument}
    {...props}
  />
);

export type UpdateRevenueStandardProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateRevenueStandardMutation,
    UpdateRevenueStandardMutationVariables
  >;
} & TChildProps;
export function withUpdateRevenueStandard<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateRevenueStandardMutation,
    UpdateRevenueStandardMutationVariables,
    UpdateRevenueStandardProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateRevenueStandardMutation,
    UpdateRevenueStandardMutationVariables,
    UpdateRevenueStandardProps<TChildProps, TDataName>
  >(UpdateRevenueStandardDocument, {
    alias: 'updateRevenueStandard',
    ...operationOptions,
  });
}

/**
 * __useUpdateRevenueStandardMutation__
 *
 * To run a mutation, you first call `useUpdateRevenueStandardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRevenueStandardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRevenueStandardMutation, { data, loading, error }] = useUpdateRevenueStandardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateRevenueStandardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRevenueStandardMutation,
    UpdateRevenueStandardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateRevenueStandardMutation,
    UpdateRevenueStandardMutationVariables
  >(UpdateRevenueStandardDocument, options);
}
export type UpdateRevenueStandardMutationHookResult = ReturnType<
  typeof useUpdateRevenueStandardMutation
>;
export type UpdateRevenueStandardMutationResult =
  Apollo.MutationResult<UpdateRevenueStandardMutation>;
export type UpdateRevenueStandardMutationOptions = Apollo.BaseMutationOptions<
  UpdateRevenueStandardMutation,
  UpdateRevenueStandardMutationVariables
>;
export const InsertTransactionDocument = gql`
  mutation insertTransaction($object: transactions_insert_input!) {
    insert_transactions_one(object: $object) {
      id
      description
      transaction_date
      created_at
      updated_at
    }
  }
`;
export type InsertTransactionMutationFn = Apollo.MutationFunction<
  InsertTransactionMutation,
  InsertTransactionMutationVariables
>;
export type InsertTransactionComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    InsertTransactionMutation,
    InsertTransactionMutationVariables
  >,
  'mutation'
>;

export const InsertTransactionComponent = (
  props: InsertTransactionComponentProps
) => (
  <ApolloReactComponents.Mutation<
    InsertTransactionMutation,
    InsertTransactionMutationVariables
  >
    mutation={InsertTransactionDocument}
    {...props}
  />
);

export type InsertTransactionProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    InsertTransactionMutation,
    InsertTransactionMutationVariables
  >;
} & TChildProps;
export function withInsertTransaction<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertTransactionMutation,
    InsertTransactionMutationVariables,
    InsertTransactionProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertTransactionMutation,
    InsertTransactionMutationVariables,
    InsertTransactionProps<TChildProps, TDataName>
  >(InsertTransactionDocument, {
    alias: 'insertTransaction',
    ...operationOptions,
  });
}

/**
 * __useInsertTransactionMutation__
 *
 * To run a mutation, you first call `useInsertTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTransactionMutation, { data, loading, error }] = useInsertTransactionMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertTransactionMutation,
    InsertTransactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertTransactionMutation,
    InsertTransactionMutationVariables
  >(InsertTransactionDocument, options);
}
export type InsertTransactionMutationHookResult = ReturnType<
  typeof useInsertTransactionMutation
>;
export type InsertTransactionMutationResult =
  Apollo.MutationResult<InsertTransactionMutation>;
export type InsertTransactionMutationOptions = Apollo.BaseMutationOptions<
  InsertTransactionMutation,
  InsertTransactionMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($userId: uuid!, $changes: users_set_input) {
    update_users(where: { id: { _eq: $userId } }, _set: $changes) {
      returning {
        id
        name
      }
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export type UpdateUserComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
  'mutation'
>;

export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
  <ApolloReactComponents.Mutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
    mutation={UpdateUserDocument}
    {...props}
  />
);

export type UpdateUserProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >;
} & TChildProps;
export function withUpdateUser<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateUserMutation,
    UpdateUserMutationVariables,
    UpdateUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateUserMutation,
    UpdateUserMutationVariables,
    UpdateUserProps<TChildProps, TDataName>
  >(UpdateUserDocument, {
    alias: 'updateUser',
    ...operationOptions,
  });
}

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const UpdateUserSettingsDocument = gql`
  mutation updateUserSettings($object: user_settings_insert_input!) {
    insert_user_settings_one(
      object: $object
      on_conflict: {
        constraint: user_settings_pkey
        update_columns: [darkMode, langKey]
      }
    ) {
      user_id
      langKey
      darkMode
    }
  }
`;
export type UpdateUserSettingsMutationFn = Apollo.MutationFunction<
  UpdateUserSettingsMutation,
  UpdateUserSettingsMutationVariables
>;
export type UpdateUserSettingsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateUserSettingsMutation,
    UpdateUserSettingsMutationVariables
  >,
  'mutation'
>;

export const UpdateUserSettingsComponent = (
  props: UpdateUserSettingsComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateUserSettingsMutation,
    UpdateUserSettingsMutationVariables
  >
    mutation={UpdateUserSettingsDocument}
    {...props}
  />
);

export type UpdateUserSettingsProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateUserSettingsMutation,
    UpdateUserSettingsMutationVariables
  >;
} & TChildProps;
export function withUpdateUserSettings<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateUserSettingsMutation,
    UpdateUserSettingsMutationVariables,
    UpdateUserSettingsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateUserSettingsMutation,
    UpdateUserSettingsMutationVariables,
    UpdateUserSettingsProps<TChildProps, TDataName>
  >(UpdateUserSettingsDocument, {
    alias: 'updateUserSettings',
    ...operationOptions,
  });
}

/**
 * __useUpdateUserSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateUserSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserSettingsMutation, { data, loading, error }] = useUpdateUserSettingsMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdateUserSettingsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserSettingsMutation,
    UpdateUserSettingsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserSettingsMutation,
    UpdateUserSettingsMutationVariables
  >(UpdateUserSettingsDocument, options);
}
export type UpdateUserSettingsMutationHookResult = ReturnType<
  typeof useUpdateUserSettingsMutation
>;
export type UpdateUserSettingsMutationResult =
  Apollo.MutationResult<UpdateUserSettingsMutation>;
export type UpdateUserSettingsMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserSettingsMutation,
  UpdateUserSettingsMutationVariables
>;
export const AllAssetsDocument = gql`
  query allAssets($limit: Int, $offset: Int) {
    assets(limit: $limit, offset: $offset, order_by: { name: asc }) {
      id
      name
      balance
      balance_date
      active
      account_no
      created_at
      updated_at
    }
    assets_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export type AllAssetsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    AllAssetsQuery,
    AllAssetsQueryVariables
  >,
  'query'
>;

export const AllAssetsComponent = (props: AllAssetsComponentProps) => (
  <ApolloReactComponents.Query<AllAssetsQuery, AllAssetsQueryVariables>
    query={AllAssetsDocument}
    {...props}
  />
);

export type AllAssetsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    AllAssetsQuery,
    AllAssetsQueryVariables
  >;
} & TChildProps;
export function withAllAssets<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllAssetsQuery,
    AllAssetsQueryVariables,
    AllAssetsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    AllAssetsQuery,
    AllAssetsQueryVariables,
    AllAssetsProps<TChildProps, TDataName>
  >(AllAssetsDocument, {
    alias: 'allAssets',
    ...operationOptions,
  });
}

/**
 * __useAllAssetsQuery__
 *
 * To run a query within a React component, call `useAllAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAssetsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useAllAssetsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllAssetsQuery, AllAssetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllAssetsQuery, AllAssetsQueryVariables>(
    AllAssetsDocument,
    options
  );
}
export function useAllAssetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllAssetsQuery,
    AllAssetsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllAssetsQuery, AllAssetsQueryVariables>(
    AllAssetsDocument,
    options
  );
}
export type AllAssetsQueryHookResult = ReturnType<typeof useAllAssetsQuery>;
export type AllAssetsLazyQueryHookResult = ReturnType<
  typeof useAllAssetsLazyQuery
>;
export type AllAssetsQueryResult = Apollo.QueryResult<
  AllAssetsQuery,
  AllAssetsQueryVariables
>;
export const ActiveAssetAccountsDocument = gql`
  query activeAssetAccounts {
    assets(order_by: { name: asc }, where: { active: { _eq: true } }) {
      id
      name
    }
  }
`;
export type ActiveAssetAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ActiveAssetAccountsQuery,
    ActiveAssetAccountsQueryVariables
  >,
  'query'
>;

export const ActiveAssetAccountsComponent = (
  props: ActiveAssetAccountsComponentProps
) => (
  <ApolloReactComponents.Query<
    ActiveAssetAccountsQuery,
    ActiveAssetAccountsQueryVariables
  >
    query={ActiveAssetAccountsDocument}
    {...props}
  />
);

export type ActiveAssetAccountsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    ActiveAssetAccountsQuery,
    ActiveAssetAccountsQueryVariables
  >;
} & TChildProps;
export function withActiveAssetAccounts<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ActiveAssetAccountsQuery,
    ActiveAssetAccountsQueryVariables,
    ActiveAssetAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ActiveAssetAccountsQuery,
    ActiveAssetAccountsQueryVariables,
    ActiveAssetAccountsProps<TChildProps, TDataName>
  >(ActiveAssetAccountsDocument, {
    alias: 'activeAssetAccounts',
    ...operationOptions,
  });
}

/**
 * __useActiveAssetAccountsQuery__
 *
 * To run a query within a React component, call `useActiveAssetAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveAssetAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveAssetAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveAssetAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ActiveAssetAccountsQuery,
    ActiveAssetAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ActiveAssetAccountsQuery,
    ActiveAssetAccountsQueryVariables
  >(ActiveAssetAccountsDocument, options);
}
export function useActiveAssetAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ActiveAssetAccountsQuery,
    ActiveAssetAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ActiveAssetAccountsQuery,
    ActiveAssetAccountsQueryVariables
  >(ActiveAssetAccountsDocument, options);
}
export type ActiveAssetAccountsQueryHookResult = ReturnType<
  typeof useActiveAssetAccountsQuery
>;
export type ActiveAssetAccountsLazyQueryHookResult = ReturnType<
  typeof useActiveAssetAccountsLazyQuery
>;
export type ActiveAssetAccountsQueryResult = Apollo.QueryResult<
  ActiveAssetAccountsQuery,
  ActiveAssetAccountsQueryVariables
>;
export const AllCategoriesDocument = gql`
  query allCategories {
    categories(order_by: { name: asc }) {
      id
      name
      active
      created_at
      updated_at
    }
  }
`;
export type AllCategoriesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >,
  'query'
>;

export const AllCategoriesComponent = (props: AllCategoriesComponentProps) => (
  <ApolloReactComponents.Query<AllCategoriesQuery, AllCategoriesQueryVariables>
    query={AllCategoriesDocument}
    {...props}
  />
);

export type AllCategoriesProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >;
} & TChildProps;
export function withAllCategories<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllCategoriesQuery,
    AllCategoriesQueryVariables,
    AllCategoriesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    AllCategoriesQuery,
    AllCategoriesQueryVariables,
    AllCategoriesProps<TChildProps, TDataName>
  >(AllCategoriesDocument, {
    alias: 'allCategories',
    ...operationOptions,
  });
}

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(
    AllCategoriesDocument,
    options
  );
}
export function useAllCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(
    AllCategoriesDocument,
    options
  );
}
export type AllCategoriesQueryHookResult = ReturnType<
  typeof useAllCategoriesQuery
>;
export type AllCategoriesLazyQueryHookResult = ReturnType<
  typeof useAllCategoriesLazyQuery
>;
export type AllCategoriesQueryResult = Apollo.QueryResult<
  AllCategoriesQuery,
  AllCategoriesQueryVariables
>;
export const ActiveCategoriesDocument = gql`
  query activeCategories {
    categories(order_by: { name: asc }, where: { active: { _eq: true } }) {
      id
      name
    }
  }
`;
export type ActiveCategoriesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ActiveCategoriesQuery,
    ActiveCategoriesQueryVariables
  >,
  'query'
>;

export const ActiveCategoriesComponent = (
  props: ActiveCategoriesComponentProps
) => (
  <ApolloReactComponents.Query<
    ActiveCategoriesQuery,
    ActiveCategoriesQueryVariables
  >
    query={ActiveCategoriesDocument}
    {...props}
  />
);

export type ActiveCategoriesProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    ActiveCategoriesQuery,
    ActiveCategoriesQueryVariables
  >;
} & TChildProps;
export function withActiveCategories<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ActiveCategoriesQuery,
    ActiveCategoriesQueryVariables,
    ActiveCategoriesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ActiveCategoriesQuery,
    ActiveCategoriesQueryVariables,
    ActiveCategoriesProps<TChildProps, TDataName>
  >(ActiveCategoriesDocument, {
    alias: 'activeCategories',
    ...operationOptions,
  });
}

/**
 * __useActiveCategoriesQuery__
 *
 * To run a query within a React component, call `useActiveCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ActiveCategoriesQuery,
    ActiveCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ActiveCategoriesQuery, ActiveCategoriesQueryVariables>(
    ActiveCategoriesDocument,
    options
  );
}
export function useActiveCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ActiveCategoriesQuery,
    ActiveCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ActiveCategoriesQuery,
    ActiveCategoriesQueryVariables
  >(ActiveCategoriesDocument, options);
}
export type ActiveCategoriesQueryHookResult = ReturnType<
  typeof useActiveCategoriesQuery
>;
export type ActiveCategoriesLazyQueryHookResult = ReturnType<
  typeof useActiveCategoriesLazyQuery
>;
export type ActiveCategoriesQueryResult = Apollo.QueryResult<
  ActiveCategoriesQuery,
  ActiveCategoriesQueryVariables
>;
export const AllExpenseAccountsDocument = gql`
  query allExpenseAccounts($limit: Int, $offset: Int) {
    expenses(limit: $limit, offset: $offset, order_by: { name: asc }) {
      id
      name
      active
      created_at
      updated_at
    }
    expenses_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export type AllExpenseAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    AllExpenseAccountsQuery,
    AllExpenseAccountsQueryVariables
  >,
  'query'
>;

export const AllExpenseAccountsComponent = (
  props: AllExpenseAccountsComponentProps
) => (
  <ApolloReactComponents.Query<
    AllExpenseAccountsQuery,
    AllExpenseAccountsQueryVariables
  >
    query={AllExpenseAccountsDocument}
    {...props}
  />
);

export type AllExpenseAccountsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    AllExpenseAccountsQuery,
    AllExpenseAccountsQueryVariables
  >;
} & TChildProps;
export function withAllExpenseAccounts<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllExpenseAccountsQuery,
    AllExpenseAccountsQueryVariables,
    AllExpenseAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    AllExpenseAccountsQuery,
    AllExpenseAccountsQueryVariables,
    AllExpenseAccountsProps<TChildProps, TDataName>
  >(AllExpenseAccountsDocument, {
    alias: 'allExpenseAccounts',
    ...operationOptions,
  });
}

/**
 * __useAllExpenseAccountsQuery__
 *
 * To run a query within a React component, call `useAllExpenseAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllExpenseAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllExpenseAccountsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useAllExpenseAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllExpenseAccountsQuery,
    AllExpenseAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AllExpenseAccountsQuery,
    AllExpenseAccountsQueryVariables
  >(AllExpenseAccountsDocument, options);
}
export function useAllExpenseAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllExpenseAccountsQuery,
    AllExpenseAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AllExpenseAccountsQuery,
    AllExpenseAccountsQueryVariables
  >(AllExpenseAccountsDocument, options);
}
export type AllExpenseAccountsQueryHookResult = ReturnType<
  typeof useAllExpenseAccountsQuery
>;
export type AllExpenseAccountsLazyQueryHookResult = ReturnType<
  typeof useAllExpenseAccountsLazyQuery
>;
export type AllExpenseAccountsQueryResult = Apollo.QueryResult<
  AllExpenseAccountsQuery,
  AllExpenseAccountsQueryVariables
>;
export const ActiveExpenseAccountsDocument = gql`
  query activeExpenseAccounts {
    expenses(order_by: { name: asc }, where: { active: { _eq: true } }) {
      id
      name
    }
  }
`;
export type ActiveExpenseAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ActiveExpenseAccountsQuery,
    ActiveExpenseAccountsQueryVariables
  >,
  'query'
>;

export const ActiveExpenseAccountsComponent = (
  props: ActiveExpenseAccountsComponentProps
) => (
  <ApolloReactComponents.Query<
    ActiveExpenseAccountsQuery,
    ActiveExpenseAccountsQueryVariables
  >
    query={ActiveExpenseAccountsDocument}
    {...props}
  />
);

export type ActiveExpenseAccountsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    ActiveExpenseAccountsQuery,
    ActiveExpenseAccountsQueryVariables
  >;
} & TChildProps;
export function withActiveExpenseAccounts<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ActiveExpenseAccountsQuery,
    ActiveExpenseAccountsQueryVariables,
    ActiveExpenseAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ActiveExpenseAccountsQuery,
    ActiveExpenseAccountsQueryVariables,
    ActiveExpenseAccountsProps<TChildProps, TDataName>
  >(ActiveExpenseAccountsDocument, {
    alias: 'activeExpenseAccounts',
    ...operationOptions,
  });
}

/**
 * __useActiveExpenseAccountsQuery__
 *
 * To run a query within a React component, call `useActiveExpenseAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveExpenseAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveExpenseAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveExpenseAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ActiveExpenseAccountsQuery,
    ActiveExpenseAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ActiveExpenseAccountsQuery,
    ActiveExpenseAccountsQueryVariables
  >(ActiveExpenseAccountsDocument, options);
}
export function useActiveExpenseAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ActiveExpenseAccountsQuery,
    ActiveExpenseAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ActiveExpenseAccountsQuery,
    ActiveExpenseAccountsQueryVariables
  >(ActiveExpenseAccountsDocument, options);
}
export type ActiveExpenseAccountsQueryHookResult = ReturnType<
  typeof useActiveExpenseAccountsQuery
>;
export type ActiveExpenseAccountsLazyQueryHookResult = ReturnType<
  typeof useActiveExpenseAccountsLazyQuery
>;
export type ActiveExpenseAccountsQueryResult = Apollo.QueryResult<
  ActiveExpenseAccountsQuery,
  ActiveExpenseAccountsQueryVariables
>;
export const FetchUserDocument = gql`
  query fetchUser($userId: uuid!) {
    users_by_pk(id: $userId) {
      id
      name
      email
      image
    }
  }
`;
export type FetchUserComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FetchUserQuery,
    FetchUserQueryVariables
  >,
  'query'
> &
  ({ variables: FetchUserQueryVariables; skip?: boolean } | { skip: boolean });

export const FetchUserComponent = (props: FetchUserComponentProps) => (
  <ApolloReactComponents.Query<FetchUserQuery, FetchUserQueryVariables>
    query={FetchUserDocument}
    {...props}
  />
);

export type FetchUserProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    FetchUserQuery,
    FetchUserQueryVariables
  >;
} & TChildProps;
export function withFetchUser<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchUserQuery,
    FetchUserQueryVariables,
    FetchUserProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FetchUserQuery,
    FetchUserQueryVariables,
    FetchUserProps<TChildProps, TDataName>
  >(FetchUserDocument, {
    alias: 'fetchUser',
    ...operationOptions,
  });
}

/**
 * __useFetchUserQuery__
 *
 * To run a query within a React component, call `useFetchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFetchUserQuery(
  baseOptions: Apollo.QueryHookOptions<FetchUserQuery, FetchUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchUserQuery, FetchUserQueryVariables>(
    FetchUserDocument,
    options
  );
}
export function useFetchUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchUserQuery,
    FetchUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchUserQuery, FetchUserQueryVariables>(
    FetchUserDocument,
    options
  );
}
export type FetchUserQueryHookResult = ReturnType<typeof useFetchUserQuery>;
export type FetchUserLazyQueryHookResult = ReturnType<
  typeof useFetchUserLazyQuery
>;
export type FetchUserQueryResult = Apollo.QueryResult<
  FetchUserQuery,
  FetchUserQueryVariables
>;
export const FetchUserSettingsDocument = gql`
  query fetchUserSettings($userId: uuid!) {
    user_settings_by_pk(user_id: $userId) {
      user_id
      darkMode
      langKey
    }
  }
`;
export type FetchUserSettingsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FetchUserSettingsQuery,
    FetchUserSettingsQueryVariables
  >,
  'query'
> &
  (
    | { variables: FetchUserSettingsQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const FetchUserSettingsComponent = (
  props: FetchUserSettingsComponentProps
) => (
  <ApolloReactComponents.Query<
    FetchUserSettingsQuery,
    FetchUserSettingsQueryVariables
  >
    query={FetchUserSettingsDocument}
    {...props}
  />
);

export type FetchUserSettingsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    FetchUserSettingsQuery,
    FetchUserSettingsQueryVariables
  >;
} & TChildProps;
export function withFetchUserSettings<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchUserSettingsQuery,
    FetchUserSettingsQueryVariables,
    FetchUserSettingsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FetchUserSettingsQuery,
    FetchUserSettingsQueryVariables,
    FetchUserSettingsProps<TChildProps, TDataName>
  >(FetchUserSettingsDocument, {
    alias: 'fetchUserSettings',
    ...operationOptions,
  });
}

/**
 * __useFetchUserSettingsQuery__
 *
 * To run a query within a React component, call `useFetchUserSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserSettingsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFetchUserSettingsQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchUserSettingsQuery,
    FetchUserSettingsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FetchUserSettingsQuery,
    FetchUserSettingsQueryVariables
  >(FetchUserSettingsDocument, options);
}
export function useFetchUserSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchUserSettingsQuery,
    FetchUserSettingsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FetchUserSettingsQuery,
    FetchUserSettingsQueryVariables
  >(FetchUserSettingsDocument, options);
}
export type FetchUserSettingsQueryHookResult = ReturnType<
  typeof useFetchUserSettingsQuery
>;
export type FetchUserSettingsLazyQueryHookResult = ReturnType<
  typeof useFetchUserSettingsLazyQuery
>;
export type FetchUserSettingsQueryResult = Apollo.QueryResult<
  FetchUserSettingsQuery,
  FetchUserSettingsQueryVariables
>;
export const AllLabelsDocument = gql`
  query allLabels {
    labels(order_by: { name: asc }) {
      id
      name
      created_at
      updated_at
    }
  }
`;
export type AllLabelsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    AllLabelsQuery,
    AllLabelsQueryVariables
  >,
  'query'
>;

export const AllLabelsComponent = (props: AllLabelsComponentProps) => (
  <ApolloReactComponents.Query<AllLabelsQuery, AllLabelsQueryVariables>
    query={AllLabelsDocument}
    {...props}
  />
);

export type AllLabelsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    AllLabelsQuery,
    AllLabelsQueryVariables
  >;
} & TChildProps;
export function withAllLabels<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllLabelsQuery,
    AllLabelsQueryVariables,
    AllLabelsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    AllLabelsQuery,
    AllLabelsQueryVariables,
    AllLabelsProps<TChildProps, TDataName>
  >(AllLabelsDocument, {
    alias: 'allLabels',
    ...operationOptions,
  });
}

/**
 * __useAllLabelsQuery__
 *
 * To run a query within a React component, call `useAllLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLabelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllLabelsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllLabelsQuery, AllLabelsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllLabelsQuery, AllLabelsQueryVariables>(
    AllLabelsDocument,
    options
  );
}
export function useAllLabelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllLabelsQuery,
    AllLabelsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllLabelsQuery, AllLabelsQueryVariables>(
    AllLabelsDocument,
    options
  );
}
export type AllLabelsQueryHookResult = ReturnType<typeof useAllLabelsQuery>;
export type AllLabelsLazyQueryHookResult = ReturnType<
  typeof useAllLabelsLazyQuery
>;
export type AllLabelsQueryResult = Apollo.QueryResult<
  AllLabelsQuery,
  AllLabelsQueryVariables
>;
export const AllLiabilityAccountsDocument = gql`
  query allLiabilityAccounts($limit: Int, $offset: Int) {
    liabilities(limit: $limit, offset: $offset, order_by: { name: asc }) {
      id
      name
      active
      created_at
      updated_at
    }
    liabilities_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export type AllLiabilityAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    AllLiabilityAccountsQuery,
    AllLiabilityAccountsQueryVariables
  >,
  'query'
>;

export const AllLiabilityAccountsComponent = (
  props: AllLiabilityAccountsComponentProps
) => (
  <ApolloReactComponents.Query<
    AllLiabilityAccountsQuery,
    AllLiabilityAccountsQueryVariables
  >
    query={AllLiabilityAccountsDocument}
    {...props}
  />
);

export type AllLiabilityAccountsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    AllLiabilityAccountsQuery,
    AllLiabilityAccountsQueryVariables
  >;
} & TChildProps;
export function withAllLiabilityAccounts<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllLiabilityAccountsQuery,
    AllLiabilityAccountsQueryVariables,
    AllLiabilityAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    AllLiabilityAccountsQuery,
    AllLiabilityAccountsQueryVariables,
    AllLiabilityAccountsProps<TChildProps, TDataName>
  >(AllLiabilityAccountsDocument, {
    alias: 'allLiabilityAccounts',
    ...operationOptions,
  });
}

/**
 * __useAllLiabilityAccountsQuery__
 *
 * To run a query within a React component, call `useAllLiabilityAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLiabilityAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLiabilityAccountsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useAllLiabilityAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllLiabilityAccountsQuery,
    AllLiabilityAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AllLiabilityAccountsQuery,
    AllLiabilityAccountsQueryVariables
  >(AllLiabilityAccountsDocument, options);
}
export function useAllLiabilityAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllLiabilityAccountsQuery,
    AllLiabilityAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AllLiabilityAccountsQuery,
    AllLiabilityAccountsQueryVariables
  >(AllLiabilityAccountsDocument, options);
}
export type AllLiabilityAccountsQueryHookResult = ReturnType<
  typeof useAllLiabilityAccountsQuery
>;
export type AllLiabilityAccountsLazyQueryHookResult = ReturnType<
  typeof useAllLiabilityAccountsLazyQuery
>;
export type AllLiabilityAccountsQueryResult = Apollo.QueryResult<
  AllLiabilityAccountsQuery,
  AllLiabilityAccountsQueryVariables
>;
export const ActiveLiabilityAccountsDocument = gql`
  query activeLiabilityAccounts {
    liabilities(order_by: { name: asc }, where: { active: { _eq: true } }) {
      id
      name
      active
      created_at
      updated_at
    }
  }
`;
export type ActiveLiabilityAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ActiveLiabilityAccountsQuery,
    ActiveLiabilityAccountsQueryVariables
  >,
  'query'
>;

export const ActiveLiabilityAccountsComponent = (
  props: ActiveLiabilityAccountsComponentProps
) => (
  <ApolloReactComponents.Query<
    ActiveLiabilityAccountsQuery,
    ActiveLiabilityAccountsQueryVariables
  >
    query={ActiveLiabilityAccountsDocument}
    {...props}
  />
);

export type ActiveLiabilityAccountsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    ActiveLiabilityAccountsQuery,
    ActiveLiabilityAccountsQueryVariables
  >;
} & TChildProps;
export function withActiveLiabilityAccounts<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ActiveLiabilityAccountsQuery,
    ActiveLiabilityAccountsQueryVariables,
    ActiveLiabilityAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ActiveLiabilityAccountsQuery,
    ActiveLiabilityAccountsQueryVariables,
    ActiveLiabilityAccountsProps<TChildProps, TDataName>
  >(ActiveLiabilityAccountsDocument, {
    alias: 'activeLiabilityAccounts',
    ...operationOptions,
  });
}

/**
 * __useActiveLiabilityAccountsQuery__
 *
 * To run a query within a React component, call `useActiveLiabilityAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveLiabilityAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveLiabilityAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveLiabilityAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ActiveLiabilityAccountsQuery,
    ActiveLiabilityAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ActiveLiabilityAccountsQuery,
    ActiveLiabilityAccountsQueryVariables
  >(ActiveLiabilityAccountsDocument, options);
}
export function useActiveLiabilityAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ActiveLiabilityAccountsQuery,
    ActiveLiabilityAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ActiveLiabilityAccountsQuery,
    ActiveLiabilityAccountsQueryVariables
  >(ActiveLiabilityAccountsDocument, options);
}
export type ActiveLiabilityAccountsQueryHookResult = ReturnType<
  typeof useActiveLiabilityAccountsQuery
>;
export type ActiveLiabilityAccountsLazyQueryHookResult = ReturnType<
  typeof useActiveLiabilityAccountsLazyQuery
>;
export type ActiveLiabilityAccountsQueryResult = Apollo.QueryResult<
  ActiveLiabilityAccountsQuery,
  ActiveLiabilityAccountsQueryVariables
>;
export const AllRevenueAccountsDocument = gql`
  query allRevenueAccounts($limit: Int, $offset: Int) {
    revenues(limit: $limit, offset: $offset, order_by: { name: asc }) {
      id
      name
      active
      default
      created_at
      updated_at
    }
    revenues_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export type AllRevenueAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    AllRevenueAccountsQuery,
    AllRevenueAccountsQueryVariables
  >,
  'query'
>;

export const AllRevenueAccountsComponent = (
  props: AllRevenueAccountsComponentProps
) => (
  <ApolloReactComponents.Query<
    AllRevenueAccountsQuery,
    AllRevenueAccountsQueryVariables
  >
    query={AllRevenueAccountsDocument}
    {...props}
  />
);

export type AllRevenueAccountsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    AllRevenueAccountsQuery,
    AllRevenueAccountsQueryVariables
  >;
} & TChildProps;
export function withAllRevenueAccounts<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllRevenueAccountsQuery,
    AllRevenueAccountsQueryVariables,
    AllRevenueAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    AllRevenueAccountsQuery,
    AllRevenueAccountsQueryVariables,
    AllRevenueAccountsProps<TChildProps, TDataName>
  >(AllRevenueAccountsDocument, {
    alias: 'allRevenueAccounts',
    ...operationOptions,
  });
}

/**
 * __useAllRevenueAccountsQuery__
 *
 * To run a query within a React component, call `useAllRevenueAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllRevenueAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllRevenueAccountsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useAllRevenueAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllRevenueAccountsQuery,
    AllRevenueAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AllRevenueAccountsQuery,
    AllRevenueAccountsQueryVariables
  >(AllRevenueAccountsDocument, options);
}
export function useAllRevenueAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllRevenueAccountsQuery,
    AllRevenueAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AllRevenueAccountsQuery,
    AllRevenueAccountsQueryVariables
  >(AllRevenueAccountsDocument, options);
}
export type AllRevenueAccountsQueryHookResult = ReturnType<
  typeof useAllRevenueAccountsQuery
>;
export type AllRevenueAccountsLazyQueryHookResult = ReturnType<
  typeof useAllRevenueAccountsLazyQuery
>;
export type AllRevenueAccountsQueryResult = Apollo.QueryResult<
  AllRevenueAccountsQuery,
  AllRevenueAccountsQueryVariables
>;
export const ActiveRevenueAccountsDocument = gql`
  query activeRevenueAccounts {
    revenues(order_by: { name: asc }, where: { active: { _eq: true } }) {
      id
      name
      default
    }
  }
`;
export type ActiveRevenueAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ActiveRevenueAccountsQuery,
    ActiveRevenueAccountsQueryVariables
  >,
  'query'
>;

export const ActiveRevenueAccountsComponent = (
  props: ActiveRevenueAccountsComponentProps
) => (
  <ApolloReactComponents.Query<
    ActiveRevenueAccountsQuery,
    ActiveRevenueAccountsQueryVariables
  >
    query={ActiveRevenueAccountsDocument}
    {...props}
  />
);

export type ActiveRevenueAccountsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    ActiveRevenueAccountsQuery,
    ActiveRevenueAccountsQueryVariables
  >;
} & TChildProps;
export function withActiveRevenueAccounts<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ActiveRevenueAccountsQuery,
    ActiveRevenueAccountsQueryVariables,
    ActiveRevenueAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ActiveRevenueAccountsQuery,
    ActiveRevenueAccountsQueryVariables,
    ActiveRevenueAccountsProps<TChildProps, TDataName>
  >(ActiveRevenueAccountsDocument, {
    alias: 'activeRevenueAccounts',
    ...operationOptions,
  });
}

/**
 * __useActiveRevenueAccountsQuery__
 *
 * To run a query within a React component, call `useActiveRevenueAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveRevenueAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveRevenueAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveRevenueAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ActiveRevenueAccountsQuery,
    ActiveRevenueAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ActiveRevenueAccountsQuery,
    ActiveRevenueAccountsQueryVariables
  >(ActiveRevenueAccountsDocument, options);
}
export function useActiveRevenueAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ActiveRevenueAccountsQuery,
    ActiveRevenueAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ActiveRevenueAccountsQuery,
    ActiveRevenueAccountsQueryVariables
  >(ActiveRevenueAccountsDocument, options);
}
export type ActiveRevenueAccountsQueryHookResult = ReturnType<
  typeof useActiveRevenueAccountsQuery
>;
export type ActiveRevenueAccountsLazyQueryHookResult = ReturnType<
  typeof useActiveRevenueAccountsLazyQuery
>;
export type ActiveRevenueAccountsQueryResult = Apollo.QueryResult<
  ActiveRevenueAccountsQuery,
  ActiveRevenueAccountsQueryVariables
>;
export const FetchLabelsDocument = gql`
  subscription fetchLabels {
    labels(order_by: { created_at: desc }) {
      id
      name
      created_at
      updated_at
    }
  }
`;
export type FetchLabelsComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<
    FetchLabelsSubscription,
    FetchLabelsSubscriptionVariables
  >,
  'subscription'
>;

export const FetchLabelsComponent = (props: FetchLabelsComponentProps) => (
  <ApolloReactComponents.Subscription<
    FetchLabelsSubscription,
    FetchLabelsSubscriptionVariables
  >
    subscription={FetchLabelsDocument}
    {...props}
  />
);

export type FetchLabelsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    FetchLabelsSubscription,
    FetchLabelsSubscriptionVariables
  >;
} & TChildProps;
export function withFetchLabels<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchLabelsSubscription,
    FetchLabelsSubscriptionVariables,
    FetchLabelsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withSubscription<
    TProps,
    FetchLabelsSubscription,
    FetchLabelsSubscriptionVariables,
    FetchLabelsProps<TChildProps, TDataName>
  >(FetchLabelsDocument, {
    alias: 'fetchLabels',
    ...operationOptions,
  });
}

/**
 * __useFetchLabelsSubscription__
 *
 * To run a query within a React component, call `useFetchLabelsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useFetchLabelsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchLabelsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useFetchLabelsSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    FetchLabelsSubscription,
    FetchLabelsSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    FetchLabelsSubscription,
    FetchLabelsSubscriptionVariables
  >(FetchLabelsDocument, options);
}
export type FetchLabelsSubscriptionHookResult = ReturnType<
  typeof useFetchLabelsSubscription
>;
export type FetchLabelsSubscriptionResult =
  Apollo.SubscriptionResult<FetchLabelsSubscription>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  account_info: ResolverTypeWrapper<Account_Info>;
  account_info_aggregate: ResolverTypeWrapper<Account_Info_Aggregate>;
  account_info_aggregate_fields: ResolverTypeWrapper<Account_Info_Aggregate_Fields>;
  account_info_avg_fields: ResolverTypeWrapper<Account_Info_Avg_Fields>;
  account_info_bool_exp: Account_Info_Bool_Exp;
  account_info_constraint: Account_Info_Constraint;
  account_info_inc_input: Account_Info_Inc_Input;
  account_info_insert_input: Account_Info_Insert_Input;
  account_info_max_fields: ResolverTypeWrapper<Account_Info_Max_Fields>;
  account_info_min_fields: ResolverTypeWrapper<Account_Info_Min_Fields>;
  account_info_mutation_response: ResolverTypeWrapper<Account_Info_Mutation_Response>;
  account_info_obj_rel_insert_input: Account_Info_Obj_Rel_Insert_Input;
  account_info_on_conflict: Account_Info_On_Conflict;
  account_info_order_by: Account_Info_Order_By;
  account_info_pk_columns_input: Account_Info_Pk_Columns_Input;
  account_info_select_column: Account_Info_Select_Column;
  account_info_set_input: Account_Info_Set_Input;
  account_info_stddev_fields: ResolverTypeWrapper<Account_Info_Stddev_Fields>;
  account_info_stddev_pop_fields: ResolverTypeWrapper<Account_Info_Stddev_Pop_Fields>;
  account_info_stddev_samp_fields: ResolverTypeWrapper<Account_Info_Stddev_Samp_Fields>;
  account_info_sum_fields: ResolverTypeWrapper<Account_Info_Sum_Fields>;
  account_info_update_column: Account_Info_Update_Column;
  account_info_var_pop_fields: ResolverTypeWrapper<Account_Info_Var_Pop_Fields>;
  account_info_var_samp_fields: ResolverTypeWrapper<Account_Info_Var_Samp_Fields>;
  account_info_variance_fields: ResolverTypeWrapper<Account_Info_Variance_Fields>;
  assets: ResolverTypeWrapper<Assets>;
  assets_aggregate: ResolverTypeWrapper<Assets_Aggregate>;
  assets_aggregate_fields: ResolverTypeWrapper<Assets_Aggregate_Fields>;
  assets_avg_fields: ResolverTypeWrapper<Assets_Avg_Fields>;
  assets_bool_exp: Assets_Bool_Exp;
  assets_constraint: Assets_Constraint;
  assets_inc_input: Assets_Inc_Input;
  assets_insert_input: Assets_Insert_Input;
  assets_max_fields: ResolverTypeWrapper<Assets_Max_Fields>;
  assets_min_fields: ResolverTypeWrapper<Assets_Min_Fields>;
  assets_mutation_response: ResolverTypeWrapper<Assets_Mutation_Response>;
  assets_obj_rel_insert_input: Assets_Obj_Rel_Insert_Input;
  assets_on_conflict: Assets_On_Conflict;
  assets_order_by: Assets_Order_By;
  assets_pk_columns_input: Assets_Pk_Columns_Input;
  assets_select_column: Assets_Select_Column;
  assets_set_input: Assets_Set_Input;
  assets_stddev_fields: ResolverTypeWrapper<Assets_Stddev_Fields>;
  assets_stddev_pop_fields: ResolverTypeWrapper<Assets_Stddev_Pop_Fields>;
  assets_stddev_samp_fields: ResolverTypeWrapper<Assets_Stddev_Samp_Fields>;
  assets_sum_fields: ResolverTypeWrapper<Assets_Sum_Fields>;
  assets_update_column: Assets_Update_Column;
  assets_var_pop_fields: ResolverTypeWrapper<Assets_Var_Pop_Fields>;
  assets_var_samp_fields: ResolverTypeWrapper<Assets_Var_Samp_Fields>;
  assets_variance_fields: ResolverTypeWrapper<Assets_Variance_Fields>;
  bigint: ResolverTypeWrapper<Scalars['bigint']>;
  bigint_comparison_exp: Bigint_Comparison_Exp;
  bpchar: ResolverTypeWrapper<Scalars['bpchar']>;
  bpchar_comparison_exp: Bpchar_Comparison_Exp;
  categories: ResolverTypeWrapper<Categories>;
  categories_aggregate: ResolverTypeWrapper<Categories_Aggregate>;
  categories_aggregate_fields: ResolverTypeWrapper<Categories_Aggregate_Fields>;
  categories_avg_fields: ResolverTypeWrapper<Categories_Avg_Fields>;
  categories_bool_exp: Categories_Bool_Exp;
  categories_constraint: Categories_Constraint;
  categories_inc_input: Categories_Inc_Input;
  categories_insert_input: Categories_Insert_Input;
  categories_max_fields: ResolverTypeWrapper<Categories_Max_Fields>;
  categories_min_fields: ResolverTypeWrapper<Categories_Min_Fields>;
  categories_mutation_response: ResolverTypeWrapper<Categories_Mutation_Response>;
  categories_obj_rel_insert_input: Categories_Obj_Rel_Insert_Input;
  categories_on_conflict: Categories_On_Conflict;
  categories_order_by: Categories_Order_By;
  categories_pk_columns_input: Categories_Pk_Columns_Input;
  categories_select_column: Categories_Select_Column;
  categories_set_input: Categories_Set_Input;
  categories_stddev_fields: ResolverTypeWrapper<Categories_Stddev_Fields>;
  categories_stddev_pop_fields: ResolverTypeWrapper<Categories_Stddev_Pop_Fields>;
  categories_stddev_samp_fields: ResolverTypeWrapper<Categories_Stddev_Samp_Fields>;
  categories_sum_fields: ResolverTypeWrapper<Categories_Sum_Fields>;
  categories_update_column: Categories_Update_Column;
  categories_var_pop_fields: ResolverTypeWrapper<Categories_Var_Pop_Fields>;
  categories_var_samp_fields: ResolverTypeWrapper<Categories_Var_Samp_Fields>;
  categories_variance_fields: ResolverTypeWrapper<Categories_Variance_Fields>;
  date: ResolverTypeWrapper<Scalars['date']>;
  date_comparison_exp: Date_Comparison_Exp;
  expenses: ResolverTypeWrapper<Expenses>;
  expenses_aggregate: ResolverTypeWrapper<Expenses_Aggregate>;
  expenses_aggregate_fields: ResolverTypeWrapper<Expenses_Aggregate_Fields>;
  expenses_avg_fields: ResolverTypeWrapper<Expenses_Avg_Fields>;
  expenses_bool_exp: Expenses_Bool_Exp;
  expenses_constraint: Expenses_Constraint;
  expenses_inc_input: Expenses_Inc_Input;
  expenses_insert_input: Expenses_Insert_Input;
  expenses_max_fields: ResolverTypeWrapper<Expenses_Max_Fields>;
  expenses_min_fields: ResolverTypeWrapper<Expenses_Min_Fields>;
  expenses_mutation_response: ResolverTypeWrapper<Expenses_Mutation_Response>;
  expenses_obj_rel_insert_input: Expenses_Obj_Rel_Insert_Input;
  expenses_on_conflict: Expenses_On_Conflict;
  expenses_order_by: Expenses_Order_By;
  expenses_pk_columns_input: Expenses_Pk_Columns_Input;
  expenses_select_column: Expenses_Select_Column;
  expenses_set_input: Expenses_Set_Input;
  expenses_stddev_fields: ResolverTypeWrapper<Expenses_Stddev_Fields>;
  expenses_stddev_pop_fields: ResolverTypeWrapper<Expenses_Stddev_Pop_Fields>;
  expenses_stddev_samp_fields: ResolverTypeWrapper<Expenses_Stddev_Samp_Fields>;
  expenses_sum_fields: ResolverTypeWrapper<Expenses_Sum_Fields>;
  expenses_update_column: Expenses_Update_Column;
  expenses_var_pop_fields: ResolverTypeWrapper<Expenses_Var_Pop_Fields>;
  expenses_var_samp_fields: ResolverTypeWrapper<Expenses_Var_Samp_Fields>;
  expenses_variance_fields: ResolverTypeWrapper<Expenses_Variance_Fields>;
  float8: ResolverTypeWrapper<Scalars['float8']>;
  float8_comparison_exp: Float8_Comparison_Exp;
  labels: ResolverTypeWrapper<Labels>;
  labels_aggregate: ResolverTypeWrapper<Labels_Aggregate>;
  labels_aggregate_fields: ResolverTypeWrapper<Labels_Aggregate_Fields>;
  labels_avg_fields: ResolverTypeWrapper<Labels_Avg_Fields>;
  labels_bool_exp: Labels_Bool_Exp;
  labels_constraint: Labels_Constraint;
  labels_inc_input: Labels_Inc_Input;
  labels_insert_input: Labels_Insert_Input;
  labels_max_fields: ResolverTypeWrapper<Labels_Max_Fields>;
  labels_min_fields: ResolverTypeWrapper<Labels_Min_Fields>;
  labels_mutation_response: ResolverTypeWrapper<Labels_Mutation_Response>;
  labels_obj_rel_insert_input: Labels_Obj_Rel_Insert_Input;
  labels_on_conflict: Labels_On_Conflict;
  labels_order_by: Labels_Order_By;
  labels_pk_columns_input: Labels_Pk_Columns_Input;
  labels_select_column: Labels_Select_Column;
  labels_set_input: Labels_Set_Input;
  labels_stddev_fields: ResolverTypeWrapper<Labels_Stddev_Fields>;
  labels_stddev_pop_fields: ResolverTypeWrapper<Labels_Stddev_Pop_Fields>;
  labels_stddev_samp_fields: ResolverTypeWrapper<Labels_Stddev_Samp_Fields>;
  labels_sum_fields: ResolverTypeWrapper<Labels_Sum_Fields>;
  labels_update_column: Labels_Update_Column;
  labels_var_pop_fields: ResolverTypeWrapper<Labels_Var_Pop_Fields>;
  labels_var_samp_fields: ResolverTypeWrapper<Labels_Var_Samp_Fields>;
  labels_variance_fields: ResolverTypeWrapper<Labels_Variance_Fields>;
  liabilities: ResolverTypeWrapper<Liabilities>;
  liabilities_aggregate: ResolverTypeWrapper<Liabilities_Aggregate>;
  liabilities_aggregate_fields: ResolverTypeWrapper<Liabilities_Aggregate_Fields>;
  liabilities_avg_fields: ResolverTypeWrapper<Liabilities_Avg_Fields>;
  liabilities_bool_exp: Liabilities_Bool_Exp;
  liabilities_constraint: Liabilities_Constraint;
  liabilities_inc_input: Liabilities_Inc_Input;
  liabilities_insert_input: Liabilities_Insert_Input;
  liabilities_max_fields: ResolverTypeWrapper<Liabilities_Max_Fields>;
  liabilities_min_fields: ResolverTypeWrapper<Liabilities_Min_Fields>;
  liabilities_mutation_response: ResolverTypeWrapper<Liabilities_Mutation_Response>;
  liabilities_obj_rel_insert_input: Liabilities_Obj_Rel_Insert_Input;
  liabilities_on_conflict: Liabilities_On_Conflict;
  liabilities_order_by: Liabilities_Order_By;
  liabilities_pk_columns_input: Liabilities_Pk_Columns_Input;
  liabilities_select_column: Liabilities_Select_Column;
  liabilities_set_input: Liabilities_Set_Input;
  liabilities_stddev_fields: ResolverTypeWrapper<Liabilities_Stddev_Fields>;
  liabilities_stddev_pop_fields: ResolverTypeWrapper<Liabilities_Stddev_Pop_Fields>;
  liabilities_stddev_samp_fields: ResolverTypeWrapper<Liabilities_Stddev_Samp_Fields>;
  liabilities_sum_fields: ResolverTypeWrapper<Liabilities_Sum_Fields>;
  liabilities_update_column: Liabilities_Update_Column;
  liabilities_var_pop_fields: ResolverTypeWrapper<Liabilities_Var_Pop_Fields>;
  liabilities_var_samp_fields: ResolverTypeWrapper<Liabilities_Var_Samp_Fields>;
  liabilities_variance_fields: ResolverTypeWrapper<Liabilities_Variance_Fields>;
  mutation_root: ResolverTypeWrapper<{}>;
  notifications: ResolverTypeWrapper<Notifications>;
  notifications_aggregate: ResolverTypeWrapper<Notifications_Aggregate>;
  notifications_aggregate_fields: ResolverTypeWrapper<Notifications_Aggregate_Fields>;
  notifications_avg_fields: ResolverTypeWrapper<Notifications_Avg_Fields>;
  notifications_bool_exp: Notifications_Bool_Exp;
  notifications_constraint: Notifications_Constraint;
  notifications_inc_input: Notifications_Inc_Input;
  notifications_insert_input: Notifications_Insert_Input;
  notifications_max_fields: ResolverTypeWrapper<Notifications_Max_Fields>;
  notifications_min_fields: ResolverTypeWrapper<Notifications_Min_Fields>;
  notifications_mutation_response: ResolverTypeWrapper<Notifications_Mutation_Response>;
  notifications_on_conflict: Notifications_On_Conflict;
  notifications_order_by: Notifications_Order_By;
  notifications_pk_columns_input: Notifications_Pk_Columns_Input;
  notifications_select_column: Notifications_Select_Column;
  notifications_set_input: Notifications_Set_Input;
  notifications_stddev_fields: ResolverTypeWrapper<Notifications_Stddev_Fields>;
  notifications_stddev_pop_fields: ResolverTypeWrapper<Notifications_Stddev_Pop_Fields>;
  notifications_stddev_samp_fields: ResolverTypeWrapper<Notifications_Stddev_Samp_Fields>;
  notifications_sum_fields: ResolverTypeWrapper<Notifications_Sum_Fields>;
  notifications_update_column: Notifications_Update_Column;
  notifications_var_pop_fields: ResolverTypeWrapper<Notifications_Var_Pop_Fields>;
  notifications_var_samp_fields: ResolverTypeWrapper<Notifications_Var_Samp_Fields>;
  notifications_variance_fields: ResolverTypeWrapper<Notifications_Variance_Fields>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  revenues: ResolverTypeWrapper<Revenues>;
  revenues_aggregate: ResolverTypeWrapper<Revenues_Aggregate>;
  revenues_aggregate_fields: ResolverTypeWrapper<Revenues_Aggregate_Fields>;
  revenues_avg_fields: ResolverTypeWrapper<Revenues_Avg_Fields>;
  revenues_bool_exp: Revenues_Bool_Exp;
  revenues_constraint: Revenues_Constraint;
  revenues_inc_input: Revenues_Inc_Input;
  revenues_insert_input: Revenues_Insert_Input;
  revenues_max_fields: ResolverTypeWrapper<Revenues_Max_Fields>;
  revenues_min_fields: ResolverTypeWrapper<Revenues_Min_Fields>;
  revenues_mutation_response: ResolverTypeWrapper<Revenues_Mutation_Response>;
  revenues_obj_rel_insert_input: Revenues_Obj_Rel_Insert_Input;
  revenues_on_conflict: Revenues_On_Conflict;
  revenues_order_by: Revenues_Order_By;
  revenues_pk_columns_input: Revenues_Pk_Columns_Input;
  revenues_select_column: Revenues_Select_Column;
  revenues_set_input: Revenues_Set_Input;
  revenues_stddev_fields: ResolverTypeWrapper<Revenues_Stddev_Fields>;
  revenues_stddev_pop_fields: ResolverTypeWrapper<Revenues_Stddev_Pop_Fields>;
  revenues_stddev_samp_fields: ResolverTypeWrapper<Revenues_Stddev_Samp_Fields>;
  revenues_sum_fields: ResolverTypeWrapper<Revenues_Sum_Fields>;
  revenues_update_column: Revenues_Update_Column;
  revenues_var_pop_fields: ResolverTypeWrapper<Revenues_Var_Pop_Fields>;
  revenues_var_samp_fields: ResolverTypeWrapper<Revenues_Var_Samp_Fields>;
  revenues_variance_fields: ResolverTypeWrapper<Revenues_Variance_Fields>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  transaction_attachments: ResolverTypeWrapper<Transaction_Attachments>;
  transaction_attachments_aggregate: ResolverTypeWrapper<Transaction_Attachments_Aggregate>;
  transaction_attachments_aggregate_fields: ResolverTypeWrapper<Transaction_Attachments_Aggregate_Fields>;
  transaction_attachments_avg_fields: ResolverTypeWrapper<Transaction_Attachments_Avg_Fields>;
  transaction_attachments_bool_exp: Transaction_Attachments_Bool_Exp;
  transaction_attachments_constraint: Transaction_Attachments_Constraint;
  transaction_attachments_inc_input: Transaction_Attachments_Inc_Input;
  transaction_attachments_insert_input: Transaction_Attachments_Insert_Input;
  transaction_attachments_max_fields: ResolverTypeWrapper<Transaction_Attachments_Max_Fields>;
  transaction_attachments_min_fields: ResolverTypeWrapper<Transaction_Attachments_Min_Fields>;
  transaction_attachments_mutation_response: ResolverTypeWrapper<Transaction_Attachments_Mutation_Response>;
  transaction_attachments_obj_rel_insert_input: Transaction_Attachments_Obj_Rel_Insert_Input;
  transaction_attachments_on_conflict: Transaction_Attachments_On_Conflict;
  transaction_attachments_order_by: Transaction_Attachments_Order_By;
  transaction_attachments_pk_columns_input: Transaction_Attachments_Pk_Columns_Input;
  transaction_attachments_select_column: Transaction_Attachments_Select_Column;
  transaction_attachments_set_input: Transaction_Attachments_Set_Input;
  transaction_attachments_stddev_fields: ResolverTypeWrapper<Transaction_Attachments_Stddev_Fields>;
  transaction_attachments_stddev_pop_fields: ResolverTypeWrapper<Transaction_Attachments_Stddev_Pop_Fields>;
  transaction_attachments_stddev_samp_fields: ResolverTypeWrapper<Transaction_Attachments_Stddev_Samp_Fields>;
  transaction_attachments_sum_fields: ResolverTypeWrapper<Transaction_Attachments_Sum_Fields>;
  transaction_attachments_update_column: Transaction_Attachments_Update_Column;
  transaction_attachments_var_pop_fields: ResolverTypeWrapper<Transaction_Attachments_Var_Pop_Fields>;
  transaction_attachments_var_samp_fields: ResolverTypeWrapper<Transaction_Attachments_Var_Samp_Fields>;
  transaction_attachments_variance_fields: ResolverTypeWrapper<Transaction_Attachments_Variance_Fields>;
  transaction_labels: ResolverTypeWrapper<Transaction_Labels>;
  transaction_labels_aggregate: ResolverTypeWrapper<Transaction_Labels_Aggregate>;
  transaction_labels_aggregate_fields: ResolverTypeWrapper<Transaction_Labels_Aggregate_Fields>;
  transaction_labels_aggregate_order_by: Transaction_Labels_Aggregate_Order_By;
  transaction_labels_arr_rel_insert_input: Transaction_Labels_Arr_Rel_Insert_Input;
  transaction_labels_avg_fields: ResolverTypeWrapper<Transaction_Labels_Avg_Fields>;
  transaction_labels_avg_order_by: Transaction_Labels_Avg_Order_By;
  transaction_labels_bool_exp: Transaction_Labels_Bool_Exp;
  transaction_labels_constraint: Transaction_Labels_Constraint;
  transaction_labels_inc_input: Transaction_Labels_Inc_Input;
  transaction_labels_insert_input: Transaction_Labels_Insert_Input;
  transaction_labels_max_fields: ResolverTypeWrapper<Transaction_Labels_Max_Fields>;
  transaction_labels_max_order_by: Transaction_Labels_Max_Order_By;
  transaction_labels_min_fields: ResolverTypeWrapper<Transaction_Labels_Min_Fields>;
  transaction_labels_min_order_by: Transaction_Labels_Min_Order_By;
  transaction_labels_mutation_response: ResolverTypeWrapper<Transaction_Labels_Mutation_Response>;
  transaction_labels_on_conflict: Transaction_Labels_On_Conflict;
  transaction_labels_order_by: Transaction_Labels_Order_By;
  transaction_labels_pk_columns_input: Transaction_Labels_Pk_Columns_Input;
  transaction_labels_select_column: Transaction_Labels_Select_Column;
  transaction_labels_set_input: Transaction_Labels_Set_Input;
  transaction_labels_stddev_fields: ResolverTypeWrapper<Transaction_Labels_Stddev_Fields>;
  transaction_labels_stddev_order_by: Transaction_Labels_Stddev_Order_By;
  transaction_labels_stddev_pop_fields: ResolverTypeWrapper<Transaction_Labels_Stddev_Pop_Fields>;
  transaction_labels_stddev_pop_order_by: Transaction_Labels_Stddev_Pop_Order_By;
  transaction_labels_stddev_samp_fields: ResolverTypeWrapper<Transaction_Labels_Stddev_Samp_Fields>;
  transaction_labels_stddev_samp_order_by: Transaction_Labels_Stddev_Samp_Order_By;
  transaction_labels_sum_fields: ResolverTypeWrapper<Transaction_Labels_Sum_Fields>;
  transaction_labels_sum_order_by: Transaction_Labels_Sum_Order_By;
  transaction_labels_update_column: Transaction_Labels_Update_Column;
  transaction_labels_var_pop_fields: ResolverTypeWrapper<Transaction_Labels_Var_Pop_Fields>;
  transaction_labels_var_pop_order_by: Transaction_Labels_Var_Pop_Order_By;
  transaction_labels_var_samp_fields: ResolverTypeWrapper<Transaction_Labels_Var_Samp_Fields>;
  transaction_labels_var_samp_order_by: Transaction_Labels_Var_Samp_Order_By;
  transaction_labels_variance_fields: ResolverTypeWrapper<Transaction_Labels_Variance_Fields>;
  transaction_labels_variance_order_by: Transaction_Labels_Variance_Order_By;
  transactions: ResolverTypeWrapper<Transactions>;
  transactions_aggregate: ResolverTypeWrapper<Transactions_Aggregate>;
  transactions_aggregate_fields: ResolverTypeWrapper<Transactions_Aggregate_Fields>;
  transactions_aggregate_order_by: Transactions_Aggregate_Order_By;
  transactions_arr_rel_insert_input: Transactions_Arr_Rel_Insert_Input;
  transactions_avg_fields: ResolverTypeWrapper<Transactions_Avg_Fields>;
  transactions_avg_order_by: Transactions_Avg_Order_By;
  transactions_bool_exp: Transactions_Bool_Exp;
  transactions_constraint: Transactions_Constraint;
  transactions_inc_input: Transactions_Inc_Input;
  transactions_insert_input: Transactions_Insert_Input;
  transactions_max_fields: ResolverTypeWrapper<Transactions_Max_Fields>;
  transactions_max_order_by: Transactions_Max_Order_By;
  transactions_min_fields: ResolverTypeWrapper<Transactions_Min_Fields>;
  transactions_min_order_by: Transactions_Min_Order_By;
  transactions_mutation_response: ResolverTypeWrapper<Transactions_Mutation_Response>;
  transactions_obj_rel_insert_input: Transactions_Obj_Rel_Insert_Input;
  transactions_on_conflict: Transactions_On_Conflict;
  transactions_order_by: Transactions_Order_By;
  transactions_pk_columns_input: Transactions_Pk_Columns_Input;
  transactions_select_column: Transactions_Select_Column;
  transactions_set_input: Transactions_Set_Input;
  transactions_stddev_fields: ResolverTypeWrapper<Transactions_Stddev_Fields>;
  transactions_stddev_order_by: Transactions_Stddev_Order_By;
  transactions_stddev_pop_fields: ResolverTypeWrapper<Transactions_Stddev_Pop_Fields>;
  transactions_stddev_pop_order_by: Transactions_Stddev_Pop_Order_By;
  transactions_stddev_samp_fields: ResolverTypeWrapper<Transactions_Stddev_Samp_Fields>;
  transactions_stddev_samp_order_by: Transactions_Stddev_Samp_Order_By;
  transactions_sum_fields: ResolverTypeWrapper<Transactions_Sum_Fields>;
  transactions_sum_order_by: Transactions_Sum_Order_By;
  transactions_update_column: Transactions_Update_Column;
  transactions_var_pop_fields: ResolverTypeWrapper<Transactions_Var_Pop_Fields>;
  transactions_var_pop_order_by: Transactions_Var_Pop_Order_By;
  transactions_var_samp_fields: ResolverTypeWrapper<Transactions_Var_Samp_Fields>;
  transactions_var_samp_order_by: Transactions_Var_Samp_Order_By;
  transactions_variance_fields: ResolverTypeWrapper<Transactions_Variance_Fields>;
  transactions_variance_order_by: Transactions_Variance_Order_By;
  user_settings: ResolverTypeWrapper<User_Settings>;
  user_settings_aggregate: ResolverTypeWrapper<User_Settings_Aggregate>;
  user_settings_aggregate_fields: ResolverTypeWrapper<User_Settings_Aggregate_Fields>;
  user_settings_bool_exp: User_Settings_Bool_Exp;
  user_settings_constraint: User_Settings_Constraint;
  user_settings_insert_input: User_Settings_Insert_Input;
  user_settings_max_fields: ResolverTypeWrapper<User_Settings_Max_Fields>;
  user_settings_min_fields: ResolverTypeWrapper<User_Settings_Min_Fields>;
  user_settings_mutation_response: ResolverTypeWrapper<User_Settings_Mutation_Response>;
  user_settings_obj_rel_insert_input: User_Settings_Obj_Rel_Insert_Input;
  user_settings_on_conflict: User_Settings_On_Conflict;
  user_settings_order_by: User_Settings_Order_By;
  user_settings_pk_columns_input: User_Settings_Pk_Columns_Input;
  user_settings_select_column: User_Settings_Select_Column;
  user_settings_set_input: User_Settings_Set_Input;
  user_settings_update_column: User_Settings_Update_Column;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  account_info: Account_Info;
  account_info_aggregate: Account_Info_Aggregate;
  account_info_aggregate_fields: Account_Info_Aggregate_Fields;
  account_info_avg_fields: Account_Info_Avg_Fields;
  account_info_bool_exp: Account_Info_Bool_Exp;
  account_info_inc_input: Account_Info_Inc_Input;
  account_info_insert_input: Account_Info_Insert_Input;
  account_info_max_fields: Account_Info_Max_Fields;
  account_info_min_fields: Account_Info_Min_Fields;
  account_info_mutation_response: Account_Info_Mutation_Response;
  account_info_obj_rel_insert_input: Account_Info_Obj_Rel_Insert_Input;
  account_info_on_conflict: Account_Info_On_Conflict;
  account_info_order_by: Account_Info_Order_By;
  account_info_pk_columns_input: Account_Info_Pk_Columns_Input;
  account_info_set_input: Account_Info_Set_Input;
  account_info_stddev_fields: Account_Info_Stddev_Fields;
  account_info_stddev_pop_fields: Account_Info_Stddev_Pop_Fields;
  account_info_stddev_samp_fields: Account_Info_Stddev_Samp_Fields;
  account_info_sum_fields: Account_Info_Sum_Fields;
  account_info_var_pop_fields: Account_Info_Var_Pop_Fields;
  account_info_var_samp_fields: Account_Info_Var_Samp_Fields;
  account_info_variance_fields: Account_Info_Variance_Fields;
  assets: Assets;
  assets_aggregate: Assets_Aggregate;
  assets_aggregate_fields: Assets_Aggregate_Fields;
  assets_avg_fields: Assets_Avg_Fields;
  assets_bool_exp: Assets_Bool_Exp;
  assets_inc_input: Assets_Inc_Input;
  assets_insert_input: Assets_Insert_Input;
  assets_max_fields: Assets_Max_Fields;
  assets_min_fields: Assets_Min_Fields;
  assets_mutation_response: Assets_Mutation_Response;
  assets_obj_rel_insert_input: Assets_Obj_Rel_Insert_Input;
  assets_on_conflict: Assets_On_Conflict;
  assets_order_by: Assets_Order_By;
  assets_pk_columns_input: Assets_Pk_Columns_Input;
  assets_set_input: Assets_Set_Input;
  assets_stddev_fields: Assets_Stddev_Fields;
  assets_stddev_pop_fields: Assets_Stddev_Pop_Fields;
  assets_stddev_samp_fields: Assets_Stddev_Samp_Fields;
  assets_sum_fields: Assets_Sum_Fields;
  assets_var_pop_fields: Assets_Var_Pop_Fields;
  assets_var_samp_fields: Assets_Var_Samp_Fields;
  assets_variance_fields: Assets_Variance_Fields;
  bigint: Scalars['bigint'];
  bigint_comparison_exp: Bigint_Comparison_Exp;
  bpchar: Scalars['bpchar'];
  bpchar_comparison_exp: Bpchar_Comparison_Exp;
  categories: Categories;
  categories_aggregate: Categories_Aggregate;
  categories_aggregate_fields: Categories_Aggregate_Fields;
  categories_avg_fields: Categories_Avg_Fields;
  categories_bool_exp: Categories_Bool_Exp;
  categories_inc_input: Categories_Inc_Input;
  categories_insert_input: Categories_Insert_Input;
  categories_max_fields: Categories_Max_Fields;
  categories_min_fields: Categories_Min_Fields;
  categories_mutation_response: Categories_Mutation_Response;
  categories_obj_rel_insert_input: Categories_Obj_Rel_Insert_Input;
  categories_on_conflict: Categories_On_Conflict;
  categories_order_by: Categories_Order_By;
  categories_pk_columns_input: Categories_Pk_Columns_Input;
  categories_set_input: Categories_Set_Input;
  categories_stddev_fields: Categories_Stddev_Fields;
  categories_stddev_pop_fields: Categories_Stddev_Pop_Fields;
  categories_stddev_samp_fields: Categories_Stddev_Samp_Fields;
  categories_sum_fields: Categories_Sum_Fields;
  categories_var_pop_fields: Categories_Var_Pop_Fields;
  categories_var_samp_fields: Categories_Var_Samp_Fields;
  categories_variance_fields: Categories_Variance_Fields;
  date: Scalars['date'];
  date_comparison_exp: Date_Comparison_Exp;
  expenses: Expenses;
  expenses_aggregate: Expenses_Aggregate;
  expenses_aggregate_fields: Expenses_Aggregate_Fields;
  expenses_avg_fields: Expenses_Avg_Fields;
  expenses_bool_exp: Expenses_Bool_Exp;
  expenses_inc_input: Expenses_Inc_Input;
  expenses_insert_input: Expenses_Insert_Input;
  expenses_max_fields: Expenses_Max_Fields;
  expenses_min_fields: Expenses_Min_Fields;
  expenses_mutation_response: Expenses_Mutation_Response;
  expenses_obj_rel_insert_input: Expenses_Obj_Rel_Insert_Input;
  expenses_on_conflict: Expenses_On_Conflict;
  expenses_order_by: Expenses_Order_By;
  expenses_pk_columns_input: Expenses_Pk_Columns_Input;
  expenses_set_input: Expenses_Set_Input;
  expenses_stddev_fields: Expenses_Stddev_Fields;
  expenses_stddev_pop_fields: Expenses_Stddev_Pop_Fields;
  expenses_stddev_samp_fields: Expenses_Stddev_Samp_Fields;
  expenses_sum_fields: Expenses_Sum_Fields;
  expenses_var_pop_fields: Expenses_Var_Pop_Fields;
  expenses_var_samp_fields: Expenses_Var_Samp_Fields;
  expenses_variance_fields: Expenses_Variance_Fields;
  float8: Scalars['float8'];
  float8_comparison_exp: Float8_Comparison_Exp;
  labels: Labels;
  labels_aggregate: Labels_Aggregate;
  labels_aggregate_fields: Labels_Aggregate_Fields;
  labels_avg_fields: Labels_Avg_Fields;
  labels_bool_exp: Labels_Bool_Exp;
  labels_inc_input: Labels_Inc_Input;
  labels_insert_input: Labels_Insert_Input;
  labels_max_fields: Labels_Max_Fields;
  labels_min_fields: Labels_Min_Fields;
  labels_mutation_response: Labels_Mutation_Response;
  labels_obj_rel_insert_input: Labels_Obj_Rel_Insert_Input;
  labels_on_conflict: Labels_On_Conflict;
  labels_order_by: Labels_Order_By;
  labels_pk_columns_input: Labels_Pk_Columns_Input;
  labels_set_input: Labels_Set_Input;
  labels_stddev_fields: Labels_Stddev_Fields;
  labels_stddev_pop_fields: Labels_Stddev_Pop_Fields;
  labels_stddev_samp_fields: Labels_Stddev_Samp_Fields;
  labels_sum_fields: Labels_Sum_Fields;
  labels_var_pop_fields: Labels_Var_Pop_Fields;
  labels_var_samp_fields: Labels_Var_Samp_Fields;
  labels_variance_fields: Labels_Variance_Fields;
  liabilities: Liabilities;
  liabilities_aggregate: Liabilities_Aggregate;
  liabilities_aggregate_fields: Liabilities_Aggregate_Fields;
  liabilities_avg_fields: Liabilities_Avg_Fields;
  liabilities_bool_exp: Liabilities_Bool_Exp;
  liabilities_inc_input: Liabilities_Inc_Input;
  liabilities_insert_input: Liabilities_Insert_Input;
  liabilities_max_fields: Liabilities_Max_Fields;
  liabilities_min_fields: Liabilities_Min_Fields;
  liabilities_mutation_response: Liabilities_Mutation_Response;
  liabilities_obj_rel_insert_input: Liabilities_Obj_Rel_Insert_Input;
  liabilities_on_conflict: Liabilities_On_Conflict;
  liabilities_order_by: Liabilities_Order_By;
  liabilities_pk_columns_input: Liabilities_Pk_Columns_Input;
  liabilities_set_input: Liabilities_Set_Input;
  liabilities_stddev_fields: Liabilities_Stddev_Fields;
  liabilities_stddev_pop_fields: Liabilities_Stddev_Pop_Fields;
  liabilities_stddev_samp_fields: Liabilities_Stddev_Samp_Fields;
  liabilities_sum_fields: Liabilities_Sum_Fields;
  liabilities_var_pop_fields: Liabilities_Var_Pop_Fields;
  liabilities_var_samp_fields: Liabilities_Var_Samp_Fields;
  liabilities_variance_fields: Liabilities_Variance_Fields;
  mutation_root: {};
  notifications: Notifications;
  notifications_aggregate: Notifications_Aggregate;
  notifications_aggregate_fields: Notifications_Aggregate_Fields;
  notifications_avg_fields: Notifications_Avg_Fields;
  notifications_bool_exp: Notifications_Bool_Exp;
  notifications_inc_input: Notifications_Inc_Input;
  notifications_insert_input: Notifications_Insert_Input;
  notifications_max_fields: Notifications_Max_Fields;
  notifications_min_fields: Notifications_Min_Fields;
  notifications_mutation_response: Notifications_Mutation_Response;
  notifications_on_conflict: Notifications_On_Conflict;
  notifications_order_by: Notifications_Order_By;
  notifications_pk_columns_input: Notifications_Pk_Columns_Input;
  notifications_set_input: Notifications_Set_Input;
  notifications_stddev_fields: Notifications_Stddev_Fields;
  notifications_stddev_pop_fields: Notifications_Stddev_Pop_Fields;
  notifications_stddev_samp_fields: Notifications_Stddev_Samp_Fields;
  notifications_sum_fields: Notifications_Sum_Fields;
  notifications_var_pop_fields: Notifications_Var_Pop_Fields;
  notifications_var_samp_fields: Notifications_Var_Samp_Fields;
  notifications_variance_fields: Notifications_Variance_Fields;
  query_root: {};
  revenues: Revenues;
  revenues_aggregate: Revenues_Aggregate;
  revenues_aggregate_fields: Revenues_Aggregate_Fields;
  revenues_avg_fields: Revenues_Avg_Fields;
  revenues_bool_exp: Revenues_Bool_Exp;
  revenues_inc_input: Revenues_Inc_Input;
  revenues_insert_input: Revenues_Insert_Input;
  revenues_max_fields: Revenues_Max_Fields;
  revenues_min_fields: Revenues_Min_Fields;
  revenues_mutation_response: Revenues_Mutation_Response;
  revenues_obj_rel_insert_input: Revenues_Obj_Rel_Insert_Input;
  revenues_on_conflict: Revenues_On_Conflict;
  revenues_order_by: Revenues_Order_By;
  revenues_pk_columns_input: Revenues_Pk_Columns_Input;
  revenues_set_input: Revenues_Set_Input;
  revenues_stddev_fields: Revenues_Stddev_Fields;
  revenues_stddev_pop_fields: Revenues_Stddev_Pop_Fields;
  revenues_stddev_samp_fields: Revenues_Stddev_Samp_Fields;
  revenues_sum_fields: Revenues_Sum_Fields;
  revenues_var_pop_fields: Revenues_Var_Pop_Fields;
  revenues_var_samp_fields: Revenues_Var_Samp_Fields;
  revenues_variance_fields: Revenues_Variance_Fields;
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  transaction_attachments: Transaction_Attachments;
  transaction_attachments_aggregate: Transaction_Attachments_Aggregate;
  transaction_attachments_aggregate_fields: Transaction_Attachments_Aggregate_Fields;
  transaction_attachments_avg_fields: Transaction_Attachments_Avg_Fields;
  transaction_attachments_bool_exp: Transaction_Attachments_Bool_Exp;
  transaction_attachments_inc_input: Transaction_Attachments_Inc_Input;
  transaction_attachments_insert_input: Transaction_Attachments_Insert_Input;
  transaction_attachments_max_fields: Transaction_Attachments_Max_Fields;
  transaction_attachments_min_fields: Transaction_Attachments_Min_Fields;
  transaction_attachments_mutation_response: Transaction_Attachments_Mutation_Response;
  transaction_attachments_obj_rel_insert_input: Transaction_Attachments_Obj_Rel_Insert_Input;
  transaction_attachments_on_conflict: Transaction_Attachments_On_Conflict;
  transaction_attachments_order_by: Transaction_Attachments_Order_By;
  transaction_attachments_pk_columns_input: Transaction_Attachments_Pk_Columns_Input;
  transaction_attachments_set_input: Transaction_Attachments_Set_Input;
  transaction_attachments_stddev_fields: Transaction_Attachments_Stddev_Fields;
  transaction_attachments_stddev_pop_fields: Transaction_Attachments_Stddev_Pop_Fields;
  transaction_attachments_stddev_samp_fields: Transaction_Attachments_Stddev_Samp_Fields;
  transaction_attachments_sum_fields: Transaction_Attachments_Sum_Fields;
  transaction_attachments_var_pop_fields: Transaction_Attachments_Var_Pop_Fields;
  transaction_attachments_var_samp_fields: Transaction_Attachments_Var_Samp_Fields;
  transaction_attachments_variance_fields: Transaction_Attachments_Variance_Fields;
  transaction_labels: Transaction_Labels;
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  transaction_labels_aggregate_fields: Transaction_Labels_Aggregate_Fields;
  transaction_labels_aggregate_order_by: Transaction_Labels_Aggregate_Order_By;
  transaction_labels_arr_rel_insert_input: Transaction_Labels_Arr_Rel_Insert_Input;
  transaction_labels_avg_fields: Transaction_Labels_Avg_Fields;
  transaction_labels_avg_order_by: Transaction_Labels_Avg_Order_By;
  transaction_labels_bool_exp: Transaction_Labels_Bool_Exp;
  transaction_labels_inc_input: Transaction_Labels_Inc_Input;
  transaction_labels_insert_input: Transaction_Labels_Insert_Input;
  transaction_labels_max_fields: Transaction_Labels_Max_Fields;
  transaction_labels_max_order_by: Transaction_Labels_Max_Order_By;
  transaction_labels_min_fields: Transaction_Labels_Min_Fields;
  transaction_labels_min_order_by: Transaction_Labels_Min_Order_By;
  transaction_labels_mutation_response: Transaction_Labels_Mutation_Response;
  transaction_labels_on_conflict: Transaction_Labels_On_Conflict;
  transaction_labels_order_by: Transaction_Labels_Order_By;
  transaction_labels_pk_columns_input: Transaction_Labels_Pk_Columns_Input;
  transaction_labels_set_input: Transaction_Labels_Set_Input;
  transaction_labels_stddev_fields: Transaction_Labels_Stddev_Fields;
  transaction_labels_stddev_order_by: Transaction_Labels_Stddev_Order_By;
  transaction_labels_stddev_pop_fields: Transaction_Labels_Stddev_Pop_Fields;
  transaction_labels_stddev_pop_order_by: Transaction_Labels_Stddev_Pop_Order_By;
  transaction_labels_stddev_samp_fields: Transaction_Labels_Stddev_Samp_Fields;
  transaction_labels_stddev_samp_order_by: Transaction_Labels_Stddev_Samp_Order_By;
  transaction_labels_sum_fields: Transaction_Labels_Sum_Fields;
  transaction_labels_sum_order_by: Transaction_Labels_Sum_Order_By;
  transaction_labels_var_pop_fields: Transaction_Labels_Var_Pop_Fields;
  transaction_labels_var_pop_order_by: Transaction_Labels_Var_Pop_Order_By;
  transaction_labels_var_samp_fields: Transaction_Labels_Var_Samp_Fields;
  transaction_labels_var_samp_order_by: Transaction_Labels_Var_Samp_Order_By;
  transaction_labels_variance_fields: Transaction_Labels_Variance_Fields;
  transaction_labels_variance_order_by: Transaction_Labels_Variance_Order_By;
  transactions: Transactions;
  transactions_aggregate: Transactions_Aggregate;
  transactions_aggregate_fields: Transactions_Aggregate_Fields;
  transactions_aggregate_order_by: Transactions_Aggregate_Order_By;
  transactions_arr_rel_insert_input: Transactions_Arr_Rel_Insert_Input;
  transactions_avg_fields: Transactions_Avg_Fields;
  transactions_avg_order_by: Transactions_Avg_Order_By;
  transactions_bool_exp: Transactions_Bool_Exp;
  transactions_inc_input: Transactions_Inc_Input;
  transactions_insert_input: Transactions_Insert_Input;
  transactions_max_fields: Transactions_Max_Fields;
  transactions_max_order_by: Transactions_Max_Order_By;
  transactions_min_fields: Transactions_Min_Fields;
  transactions_min_order_by: Transactions_Min_Order_By;
  transactions_mutation_response: Transactions_Mutation_Response;
  transactions_obj_rel_insert_input: Transactions_Obj_Rel_Insert_Input;
  transactions_on_conflict: Transactions_On_Conflict;
  transactions_order_by: Transactions_Order_By;
  transactions_pk_columns_input: Transactions_Pk_Columns_Input;
  transactions_set_input: Transactions_Set_Input;
  transactions_stddev_fields: Transactions_Stddev_Fields;
  transactions_stddev_order_by: Transactions_Stddev_Order_By;
  transactions_stddev_pop_fields: Transactions_Stddev_Pop_Fields;
  transactions_stddev_pop_order_by: Transactions_Stddev_Pop_Order_By;
  transactions_stddev_samp_fields: Transactions_Stddev_Samp_Fields;
  transactions_stddev_samp_order_by: Transactions_Stddev_Samp_Order_By;
  transactions_sum_fields: Transactions_Sum_Fields;
  transactions_sum_order_by: Transactions_Sum_Order_By;
  transactions_var_pop_fields: Transactions_Var_Pop_Fields;
  transactions_var_pop_order_by: Transactions_Var_Pop_Order_By;
  transactions_var_samp_fields: Transactions_Var_Samp_Fields;
  transactions_var_samp_order_by: Transactions_Var_Samp_Order_By;
  transactions_variance_fields: Transactions_Variance_Fields;
  transactions_variance_order_by: Transactions_Variance_Order_By;
  user_settings: User_Settings;
  user_settings_aggregate: User_Settings_Aggregate;
  user_settings_aggregate_fields: User_Settings_Aggregate_Fields;
  user_settings_bool_exp: User_Settings_Bool_Exp;
  user_settings_insert_input: User_Settings_Insert_Input;
  user_settings_max_fields: User_Settings_Max_Fields;
  user_settings_min_fields: User_Settings_Min_Fields;
  user_settings_mutation_response: User_Settings_Mutation_Response;
  user_settings_obj_rel_insert_input: User_Settings_Obj_Rel_Insert_Input;
  user_settings_on_conflict: User_Settings_On_Conflict;
  user_settings_order_by: User_Settings_Order_By;
  user_settings_pk_columns_input: User_Settings_Pk_Columns_Input;
  user_settings_set_input: User_Settings_Set_Input;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_min_fields: Users_Min_Fields;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CachedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Account_InfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info'] = ResolversParentTypes['account_info']
> = {
  asset?: Resolver<ResolversTypes['assets'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  expense?: Resolver<ResolversTypes['expenses'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  liability?: Resolver<ResolversTypes['liabilities'], ParentType, ContextType>;
  revenue?: Resolver<ResolversTypes['revenues'], ParentType, ContextType>;
  transactions?: Resolver<
    Array<ResolversTypes['transactions']>,
    ParentType,
    ContextType,
    RequireFields<Account_InfoTransactionsArgs, never>
  >;
  transactionsBySourceAccount?: Resolver<
    Array<ResolversTypes['transactions']>,
    ParentType,
    ContextType,
    RequireFields<Account_InfoTransactionsBySourceAccountArgs, never>
  >;
  transactionsBySourceAccount_aggregate?: Resolver<
    ResolversTypes['transactions_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Account_InfoTransactionsBySourceAccount_AggregateArgs, never>
  >;
  transactions_aggregate?: Resolver<
    ResolversTypes['transactions_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Account_InfoTransactions_AggregateArgs, never>
  >;
  type?: Resolver<ResolversTypes['bpchar'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_aggregate'] = ResolversParentTypes['account_info_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['account_info_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['account_info']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_aggregate_fields'] = ResolversParentTypes['account_info_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['account_info_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Account_Info_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['account_info_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['account_info_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['account_info_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['account_info_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['account_info_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['account_info_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['account_info_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['account_info_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['account_info_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_avg_fields'] = ResolversParentTypes['account_info_avg_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_max_fields'] = ResolversParentTypes['account_info_max_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_min_fields'] = ResolversParentTypes['account_info_min_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_mutation_response'] = ResolversParentTypes['account_info_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['account_info']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_stddev_fields'] = ResolversParentTypes['account_info_stddev_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_stddev_pop_fields'] = ResolversParentTypes['account_info_stddev_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_stddev_samp_fields'] = ResolversParentTypes['account_info_stddev_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_sum_fields'] = ResolversParentTypes['account_info_sum_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_var_pop_fields'] = ResolversParentTypes['account_info_var_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_var_samp_fields'] = ResolversParentTypes['account_info_var_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_variance_fields'] = ResolversParentTypes['account_info_variance_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets'] = ResolversParentTypes['assets']
> = {
  account_info?: Resolver<
    ResolversTypes['account_info'],
    ParentType,
    ContextType
  >;
  account_no?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  balance_date?: Resolver<
    Maybe<ResolversTypes['date']>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_aggregate'] = ResolversParentTypes['assets_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['assets_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes['assets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_aggregate_fields'] = ResolversParentTypes['assets_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['assets_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Assets_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['assets_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['assets_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['assets_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['assets_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['assets_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['assets_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['assets_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['assets_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['assets_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_avg_fields'] = ResolversParentTypes['assets_avg_fields']
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_max_fields'] = ResolversParentTypes['assets_max_fields']
> = {
  account_no?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  balance?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  balance_date?: Resolver<
    Maybe<ResolversTypes['date']>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_min_fields'] = ResolversParentTypes['assets_min_fields']
> = {
  account_no?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  balance?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  balance_date?: Resolver<
    Maybe<ResolversTypes['date']>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_mutation_response'] = ResolversParentTypes['assets_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['assets']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_stddev_fields'] = ResolversParentTypes['assets_stddev_fields']
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_stddev_pop_fields'] = ResolversParentTypes['assets_stddev_pop_fields']
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_stddev_samp_fields'] = ResolversParentTypes['assets_stddev_samp_fields']
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_sum_fields'] = ResolversParentTypes['assets_sum_fields']
> = {
  balance?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_var_pop_fields'] = ResolversParentTypes['assets_var_pop_fields']
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_var_samp_fields'] = ResolversParentTypes['assets_var_samp_fields']
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_variance_fields'] = ResolversParentTypes['assets_variance_fields']
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigintScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['bigint'], any> {
  name: 'bigint';
}

export interface BpcharScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['bpchar'], any> {
  name: 'bpchar';
}

export type CategoriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories'] = ResolversParentTypes['categories']
> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactions?: Resolver<
    Array<ResolversTypes['transactions']>,
    ParentType,
    ContextType,
    RequireFields<CategoriesTransactionsArgs, never>
  >;
  transactions_aggregate?: Resolver<
    ResolversTypes['transactions_aggregate'],
    ParentType,
    ContextType,
    RequireFields<CategoriesTransactions_AggregateArgs, never>
  >;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_aggregate'] = ResolversParentTypes['categories_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['categories_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['categories']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_aggregate_fields'] = ResolversParentTypes['categories_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['categories_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Categories_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['categories_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['categories_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['categories_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['categories_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['categories_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['categories_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['categories_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['categories_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['categories_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_avg_fields'] = ResolversParentTypes['categories_avg_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_max_fields'] = ResolversParentTypes['categories_max_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_min_fields'] = ResolversParentTypes['categories_min_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_mutation_response'] = ResolversParentTypes['categories_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['categories']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_stddev_fields'] = ResolversParentTypes['categories_stddev_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_stddev_pop_fields'] = ResolversParentTypes['categories_stddev_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_stddev_samp_fields'] = ResolversParentTypes['categories_stddev_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_sum_fields'] = ResolversParentTypes['categories_sum_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_var_pop_fields'] = ResolversParentTypes['categories_var_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_var_samp_fields'] = ResolversParentTypes['categories_var_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_variance_fields'] = ResolversParentTypes['categories_variance_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['date'], any> {
  name: 'date';
}

export type ExpensesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses'] = ResolversParentTypes['expenses']
> = {
  account_info?: Resolver<
    ResolversTypes['account_info'],
    ParentType,
    ContextType
  >;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_aggregate'] = ResolversParentTypes['expenses_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['expenses_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes['expenses']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_aggregate_fields'] = ResolversParentTypes['expenses_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['expenses_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Expenses_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['expenses_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['expenses_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['expenses_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['expenses_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['expenses_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['expenses_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['expenses_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['expenses_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['expenses_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_avg_fields'] = ResolversParentTypes['expenses_avg_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_max_fields'] = ResolversParentTypes['expenses_max_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_min_fields'] = ResolversParentTypes['expenses_min_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_mutation_response'] = ResolversParentTypes['expenses_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['expenses']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_stddev_fields'] = ResolversParentTypes['expenses_stddev_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_stddev_pop_fields'] = ResolversParentTypes['expenses_stddev_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_stddev_samp_fields'] = ResolversParentTypes['expenses_stddev_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_sum_fields'] = ResolversParentTypes['expenses_sum_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_var_pop_fields'] = ResolversParentTypes['expenses_var_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_var_samp_fields'] = ResolversParentTypes['expenses_var_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_variance_fields'] = ResolversParentTypes['expenses_variance_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Float8ScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['float8'], any> {
  name: 'float8';
}

export type LabelsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels'] = ResolversParentTypes['labels']
> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transaction_labels?: Resolver<
    Array<ResolversTypes['transaction_labels']>,
    ParentType,
    ContextType,
    RequireFields<LabelsTransaction_LabelsArgs, never>
  >;
  transaction_labels_aggregate?: Resolver<
    ResolversTypes['transaction_labels_aggregate'],
    ParentType,
    ContextType,
    RequireFields<LabelsTransaction_Labels_AggregateArgs, never>
  >;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_aggregate'] = ResolversParentTypes['labels_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['labels_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes['labels']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_aggregate_fields'] = ResolversParentTypes['labels_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['labels_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Labels_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['labels_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['labels_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['labels_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['labels_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['labels_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['labels_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['labels_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['labels_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['labels_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_avg_fields'] = ResolversParentTypes['labels_avg_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_max_fields'] = ResolversParentTypes['labels_max_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_min_fields'] = ResolversParentTypes['labels_min_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_mutation_response'] = ResolversParentTypes['labels_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['labels']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_stddev_fields'] = ResolversParentTypes['labels_stddev_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_stddev_pop_fields'] = ResolversParentTypes['labels_stddev_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_stddev_samp_fields'] = ResolversParentTypes['labels_stddev_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_sum_fields'] = ResolversParentTypes['labels_sum_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_var_pop_fields'] = ResolversParentTypes['labels_var_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_var_samp_fields'] = ResolversParentTypes['labels_var_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_variance_fields'] = ResolversParentTypes['labels_variance_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiabilitiesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities'] = ResolversParentTypes['liabilities']
> = {
  account_info?: Resolver<
    ResolversTypes['account_info'],
    ParentType,
    ContextType
  >;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_aggregate'] = ResolversParentTypes['liabilities_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['liabilities_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['liabilities']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_aggregate_fields'] = ResolversParentTypes['liabilities_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['liabilities_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Liabilities_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['liabilities_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['liabilities_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['liabilities_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['liabilities_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['liabilities_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['liabilities_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['liabilities_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['liabilities_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['liabilities_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_avg_fields'] = ResolversParentTypes['liabilities_avg_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_max_fields'] = ResolversParentTypes['liabilities_max_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_min_fields'] = ResolversParentTypes['liabilities_min_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_mutation_response'] = ResolversParentTypes['liabilities_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['liabilities']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_stddev_fields'] = ResolversParentTypes['liabilities_stddev_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_stddev_pop_fields'] = ResolversParentTypes['liabilities_stddev_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_stddev_samp_fields'] = ResolversParentTypes['liabilities_stddev_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_sum_fields'] = ResolversParentTypes['liabilities_sum_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_var_pop_fields'] = ResolversParentTypes['liabilities_var_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_var_samp_fields'] = ResolversParentTypes['liabilities_var_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_variance_fields'] = ResolversParentTypes['liabilities_variance_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']
> = {
  delete_account_info?: Resolver<
    Maybe<ResolversTypes['account_info_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Account_InfoArgs, 'where'>
  >;
  delete_account_info_by_pk?: Resolver<
    Maybe<ResolversTypes['account_info']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Account_Info_By_PkArgs, 'id'>
  >;
  delete_assets?: Resolver<
    Maybe<ResolversTypes['assets_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_AssetsArgs, 'where'>
  >;
  delete_assets_by_pk?: Resolver<
    Maybe<ResolversTypes['assets']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Assets_By_PkArgs, 'id'>
  >;
  delete_categories?: Resolver<
    Maybe<ResolversTypes['categories_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_CategoriesArgs, 'where'>
  >;
  delete_categories_by_pk?: Resolver<
    Maybe<ResolversTypes['categories']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Categories_By_PkArgs, 'id'>
  >;
  delete_expenses?: Resolver<
    Maybe<ResolversTypes['expenses_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_ExpensesArgs, 'where'>
  >;
  delete_expenses_by_pk?: Resolver<
    Maybe<ResolversTypes['expenses']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Expenses_By_PkArgs, 'id'>
  >;
  delete_labels?: Resolver<
    Maybe<ResolversTypes['labels_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_LabelsArgs, 'where'>
  >;
  delete_labels_by_pk?: Resolver<
    Maybe<ResolversTypes['labels']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Labels_By_PkArgs, 'id'>
  >;
  delete_liabilities?: Resolver<
    Maybe<ResolversTypes['liabilities_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_LiabilitiesArgs, 'where'>
  >;
  delete_liabilities_by_pk?: Resolver<
    Maybe<ResolversTypes['liabilities']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Liabilities_By_PkArgs, 'id'>
  >;
  delete_notifications?: Resolver<
    Maybe<ResolversTypes['notifications_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_NotificationsArgs, 'where'>
  >;
  delete_notifications_by_pk?: Resolver<
    Maybe<ResolversTypes['notifications']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Notifications_By_PkArgs, 'id'>
  >;
  delete_revenues?: Resolver<
    Maybe<ResolversTypes['revenues_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_RevenuesArgs, 'where'>
  >;
  delete_revenues_by_pk?: Resolver<
    Maybe<ResolversTypes['revenues']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Revenues_By_PkArgs, 'id'>
  >;
  delete_transaction_attachments?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Transaction_AttachmentsArgs, 'where'>
  >;
  delete_transaction_attachments_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_attachments']>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootDelete_Transaction_Attachments_By_PkArgs,
      'attachment_id' | 'transaction_id'
    >
  >;
  delete_transaction_labels?: Resolver<
    Maybe<ResolversTypes['transaction_labels_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Transaction_LabelsArgs, 'where'>
  >;
  delete_transaction_labels_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_labels']>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootDelete_Transaction_Labels_By_PkArgs,
      'label_id' | 'transaction_id'
    >
  >;
  delete_transactions?: Resolver<
    Maybe<ResolversTypes['transactions_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_TransactionsArgs, 'where'>
  >;
  delete_transactions_by_pk?: Resolver<
    Maybe<ResolversTypes['transactions']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Transactions_By_PkArgs, 'id'>
  >;
  delete_user_settings?: Resolver<
    Maybe<ResolversTypes['user_settings_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_User_SettingsArgs, 'where'>
  >;
  delete_user_settings_by_pk?: Resolver<
    Maybe<ResolversTypes['user_settings']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_User_Settings_By_PkArgs, 'user_id'>
  >;
  delete_users?: Resolver<
    Maybe<ResolversTypes['users_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UsersArgs, 'where'>
  >;
  delete_users_by_pk?: Resolver<
    Maybe<ResolversTypes['users']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Users_By_PkArgs, 'id'>
  >;
  insert_account_info?: Resolver<
    Maybe<ResolversTypes['account_info_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Account_InfoArgs, 'objects'>
  >;
  insert_account_info_one?: Resolver<
    Maybe<ResolversTypes['account_info']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Account_Info_OneArgs, 'object'>
  >;
  insert_assets?: Resolver<
    Maybe<ResolversTypes['assets_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_AssetsArgs, 'objects'>
  >;
  insert_assets_one?: Resolver<
    Maybe<ResolversTypes['assets']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Assets_OneArgs, 'object'>
  >;
  insert_categories?: Resolver<
    Maybe<ResolversTypes['categories_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_CategoriesArgs, 'objects'>
  >;
  insert_categories_one?: Resolver<
    Maybe<ResolversTypes['categories']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Categories_OneArgs, 'object'>
  >;
  insert_expenses?: Resolver<
    Maybe<ResolversTypes['expenses_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_ExpensesArgs, 'objects'>
  >;
  insert_expenses_one?: Resolver<
    Maybe<ResolversTypes['expenses']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Expenses_OneArgs, 'object'>
  >;
  insert_labels?: Resolver<
    Maybe<ResolversTypes['labels_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_LabelsArgs, 'objects'>
  >;
  insert_labels_one?: Resolver<
    Maybe<ResolversTypes['labels']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Labels_OneArgs, 'object'>
  >;
  insert_liabilities?: Resolver<
    Maybe<ResolversTypes['liabilities_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_LiabilitiesArgs, 'objects'>
  >;
  insert_liabilities_one?: Resolver<
    Maybe<ResolversTypes['liabilities']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Liabilities_OneArgs, 'object'>
  >;
  insert_notifications?: Resolver<
    Maybe<ResolversTypes['notifications_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_NotificationsArgs, 'objects'>
  >;
  insert_notifications_one?: Resolver<
    Maybe<ResolversTypes['notifications']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Notifications_OneArgs, 'object'>
  >;
  insert_revenues?: Resolver<
    Maybe<ResolversTypes['revenues_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_RevenuesArgs, 'objects'>
  >;
  insert_revenues_one?: Resolver<
    Maybe<ResolversTypes['revenues']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Revenues_OneArgs, 'object'>
  >;
  insert_transaction_attachments?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Transaction_AttachmentsArgs, 'objects'>
  >;
  insert_transaction_attachments_one?: Resolver<
    Maybe<ResolversTypes['transaction_attachments']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Transaction_Attachments_OneArgs, 'object'>
  >;
  insert_transaction_labels?: Resolver<
    Maybe<ResolversTypes['transaction_labels_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Transaction_LabelsArgs, 'objects'>
  >;
  insert_transaction_labels_one?: Resolver<
    Maybe<ResolversTypes['transaction_labels']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Transaction_Labels_OneArgs, 'object'>
  >;
  insert_transactions?: Resolver<
    Maybe<ResolversTypes['transactions_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_TransactionsArgs, 'objects'>
  >;
  insert_transactions_one?: Resolver<
    Maybe<ResolversTypes['transactions']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Transactions_OneArgs, 'object'>
  >;
  insert_user_settings?: Resolver<
    Maybe<ResolversTypes['user_settings_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_User_SettingsArgs, 'objects'>
  >;
  insert_user_settings_one?: Resolver<
    Maybe<ResolversTypes['user_settings']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_User_Settings_OneArgs, 'object'>
  >;
  insert_users?: Resolver<
    Maybe<ResolversTypes['users_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UsersArgs, 'objects'>
  >;
  insert_users_one?: Resolver<
    Maybe<ResolversTypes['users']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Users_OneArgs, 'object'>
  >;
  update_account_info?: Resolver<
    Maybe<ResolversTypes['account_info_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Account_InfoArgs, 'where'>
  >;
  update_account_info_by_pk?: Resolver<
    Maybe<ResolversTypes['account_info']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Account_Info_By_PkArgs, 'pk_columns'>
  >;
  update_assets?: Resolver<
    Maybe<ResolversTypes['assets_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_AssetsArgs, 'where'>
  >;
  update_assets_by_pk?: Resolver<
    Maybe<ResolversTypes['assets']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Assets_By_PkArgs, 'pk_columns'>
  >;
  update_categories?: Resolver<
    Maybe<ResolversTypes['categories_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_CategoriesArgs, 'where'>
  >;
  update_categories_by_pk?: Resolver<
    Maybe<ResolversTypes['categories']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Categories_By_PkArgs, 'pk_columns'>
  >;
  update_expenses?: Resolver<
    Maybe<ResolversTypes['expenses_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_ExpensesArgs, 'where'>
  >;
  update_expenses_by_pk?: Resolver<
    Maybe<ResolversTypes['expenses']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Expenses_By_PkArgs, 'pk_columns'>
  >;
  update_labels?: Resolver<
    Maybe<ResolversTypes['labels_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_LabelsArgs, 'where'>
  >;
  update_labels_by_pk?: Resolver<
    Maybe<ResolversTypes['labels']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Labels_By_PkArgs, 'pk_columns'>
  >;
  update_liabilities?: Resolver<
    Maybe<ResolversTypes['liabilities_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_LiabilitiesArgs, 'where'>
  >;
  update_liabilities_by_pk?: Resolver<
    Maybe<ResolversTypes['liabilities']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Liabilities_By_PkArgs, 'pk_columns'>
  >;
  update_notifications?: Resolver<
    Maybe<ResolversTypes['notifications_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_NotificationsArgs, 'where'>
  >;
  update_notifications_by_pk?: Resolver<
    Maybe<ResolversTypes['notifications']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Notifications_By_PkArgs, 'pk_columns'>
  >;
  update_revenues?: Resolver<
    Maybe<ResolversTypes['revenues_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_RevenuesArgs, 'where'>
  >;
  update_revenues_by_pk?: Resolver<
    Maybe<ResolversTypes['revenues']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Revenues_By_PkArgs, 'pk_columns'>
  >;
  update_transaction_attachments?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Transaction_AttachmentsArgs, 'where'>
  >;
  update_transaction_attachments_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_attachments']>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootUpdate_Transaction_Attachments_By_PkArgs,
      'pk_columns'
    >
  >;
  update_transaction_labels?: Resolver<
    Maybe<ResolversTypes['transaction_labels_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Transaction_LabelsArgs, 'where'>
  >;
  update_transaction_labels_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_labels']>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootUpdate_Transaction_Labels_By_PkArgs,
      'pk_columns'
    >
  >;
  update_transactions?: Resolver<
    Maybe<ResolversTypes['transactions_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_TransactionsArgs, 'where'>
  >;
  update_transactions_by_pk?: Resolver<
    Maybe<ResolversTypes['transactions']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Transactions_By_PkArgs, 'pk_columns'>
  >;
  update_user_settings?: Resolver<
    Maybe<ResolversTypes['user_settings_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_User_SettingsArgs, 'where'>
  >;
  update_user_settings_by_pk?: Resolver<
    Maybe<ResolversTypes['user_settings']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_User_Settings_By_PkArgs, 'pk_columns'>
  >;
  update_users?: Resolver<
    Maybe<ResolversTypes['users_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UsersArgs, 'where'>
  >;
  update_users_by_pk?: Resolver<
    Maybe<ResolversTypes['users']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Users_By_PkArgs, 'pk_columns'>
  >;
};

export type NotificationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications'] = ResolversParentTypes['notifications']
> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  read_status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_aggregate'] = ResolversParentTypes['notifications_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['notifications_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['notifications']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_aggregate_fields'] = ResolversParentTypes['notifications_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['notifications_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Notifications_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['notifications_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['notifications_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['notifications_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['notifications_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['notifications_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['notifications_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['notifications_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['notifications_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['notifications_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_avg_fields'] = ResolversParentTypes['notifications_avg_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_max_fields'] = ResolversParentTypes['notifications_max_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_min_fields'] = ResolversParentTypes['notifications_min_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_mutation_response'] = ResolversParentTypes['notifications_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['notifications']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_stddev_fields'] = ResolversParentTypes['notifications_stddev_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_stddev_pop_fields'] = ResolversParentTypes['notifications_stddev_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_stddev_samp_fields'] = ResolversParentTypes['notifications_stddev_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_sum_fields'] = ResolversParentTypes['notifications_sum_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_var_pop_fields'] = ResolversParentTypes['notifications_var_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_var_samp_fields'] = ResolversParentTypes['notifications_var_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_variance_fields'] = ResolversParentTypes['notifications_variance_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Query_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']
> = {
  account_info?: Resolver<
    Array<ResolversTypes['account_info']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootAccount_InfoArgs, never>
  >;
  account_info_aggregate?: Resolver<
    ResolversTypes['account_info_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootAccount_Info_AggregateArgs, never>
  >;
  account_info_by_pk?: Resolver<
    Maybe<ResolversTypes['account_info']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootAccount_Info_By_PkArgs, 'id'>
  >;
  assets?: Resolver<
    Array<ResolversTypes['assets']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootAssetsArgs, never>
  >;
  assets_aggregate?: Resolver<
    ResolversTypes['assets_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootAssets_AggregateArgs, never>
  >;
  assets_by_pk?: Resolver<
    Maybe<ResolversTypes['assets']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootAssets_By_PkArgs, 'id'>
  >;
  categories?: Resolver<
    Array<ResolversTypes['categories']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootCategoriesArgs, never>
  >;
  categories_aggregate?: Resolver<
    ResolversTypes['categories_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootCategories_AggregateArgs, never>
  >;
  categories_by_pk?: Resolver<
    Maybe<ResolversTypes['categories']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootCategories_By_PkArgs, 'id'>
  >;
  expenses?: Resolver<
    Array<ResolversTypes['expenses']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootExpensesArgs, never>
  >;
  expenses_aggregate?: Resolver<
    ResolversTypes['expenses_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootExpenses_AggregateArgs, never>
  >;
  expenses_by_pk?: Resolver<
    Maybe<ResolversTypes['expenses']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootExpenses_By_PkArgs, 'id'>
  >;
  labels?: Resolver<
    Array<ResolversTypes['labels']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootLabelsArgs, never>
  >;
  labels_aggregate?: Resolver<
    ResolversTypes['labels_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootLabels_AggregateArgs, never>
  >;
  labels_by_pk?: Resolver<
    Maybe<ResolversTypes['labels']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootLabels_By_PkArgs, 'id'>
  >;
  liabilities?: Resolver<
    Array<ResolversTypes['liabilities']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootLiabilitiesArgs, never>
  >;
  liabilities_aggregate?: Resolver<
    ResolversTypes['liabilities_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootLiabilities_AggregateArgs, never>
  >;
  liabilities_by_pk?: Resolver<
    Maybe<ResolversTypes['liabilities']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootLiabilities_By_PkArgs, 'id'>
  >;
  notifications?: Resolver<
    Array<ResolversTypes['notifications']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootNotificationsArgs, never>
  >;
  notifications_aggregate?: Resolver<
    ResolversTypes['notifications_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootNotifications_AggregateArgs, never>
  >;
  notifications_by_pk?: Resolver<
    Maybe<ResolversTypes['notifications']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootNotifications_By_PkArgs, 'id'>
  >;
  revenues?: Resolver<
    Array<ResolversTypes['revenues']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootRevenuesArgs, never>
  >;
  revenues_aggregate?: Resolver<
    ResolversTypes['revenues_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootRevenues_AggregateArgs, never>
  >;
  revenues_by_pk?: Resolver<
    Maybe<ResolversTypes['revenues']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootRevenues_By_PkArgs, 'id'>
  >;
  transaction_attachments?: Resolver<
    Array<ResolversTypes['transaction_attachments']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootTransaction_AttachmentsArgs, never>
  >;
  transaction_attachments_aggregate?: Resolver<
    ResolversTypes['transaction_attachments_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootTransaction_Attachments_AggregateArgs, never>
  >;
  transaction_attachments_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_attachments']>,
    ParentType,
    ContextType,
    RequireFields<
      Query_RootTransaction_Attachments_By_PkArgs,
      'attachment_id' | 'transaction_id'
    >
  >;
  transaction_labels?: Resolver<
    Array<ResolversTypes['transaction_labels']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootTransaction_LabelsArgs, never>
  >;
  transaction_labels_aggregate?: Resolver<
    ResolversTypes['transaction_labels_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootTransaction_Labels_AggregateArgs, never>
  >;
  transaction_labels_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_labels']>,
    ParentType,
    ContextType,
    RequireFields<
      Query_RootTransaction_Labels_By_PkArgs,
      'label_id' | 'transaction_id'
    >
  >;
  transactions?: Resolver<
    Array<ResolversTypes['transactions']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootTransactionsArgs, never>
  >;
  transactions_aggregate?: Resolver<
    ResolversTypes['transactions_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootTransactions_AggregateArgs, never>
  >;
  transactions_by_pk?: Resolver<
    Maybe<ResolversTypes['transactions']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootTransactions_By_PkArgs, 'id'>
  >;
  user_settings?: Resolver<
    Array<ResolversTypes['user_settings']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUser_SettingsArgs, never>
  >;
  user_settings_aggregate?: Resolver<
    ResolversTypes['user_settings_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootUser_Settings_AggregateArgs, never>
  >;
  user_settings_by_pk?: Resolver<
    Maybe<ResolversTypes['user_settings']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUser_Settings_By_PkArgs, 'user_id'>
  >;
  users?: Resolver<
    Array<ResolversTypes['users']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUsersArgs, never>
  >;
  users_aggregate?: Resolver<
    ResolversTypes['users_aggregate'],
    ParentType,
    ContextType,
    RequireFields<Query_RootUsers_AggregateArgs, never>
  >;
  users_by_pk?: Resolver<
    Maybe<ResolversTypes['users']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUsers_By_PkArgs, 'id'>
  >;
};

export type RevenuesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues'] = ResolversParentTypes['revenues']
> = {
  account_info?: Resolver<
    ResolversTypes['account_info'],
    ParentType,
    ContextType
  >;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_aggregate'] = ResolversParentTypes['revenues_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['revenues_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes['revenues']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_aggregate_fields'] = ResolversParentTypes['revenues_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['revenues_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Revenues_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['revenues_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['revenues_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['revenues_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['revenues_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['revenues_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['revenues_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['revenues_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['revenues_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['revenues_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_avg_fields'] = ResolversParentTypes['revenues_avg_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_max_fields'] = ResolversParentTypes['revenues_max_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_min_fields'] = ResolversParentTypes['revenues_min_fields']
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_mutation_response'] = ResolversParentTypes['revenues_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['revenues']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_stddev_fields'] = ResolversParentTypes['revenues_stddev_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_stddev_pop_fields'] = ResolversParentTypes['revenues_stddev_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_stddev_samp_fields'] = ResolversParentTypes['revenues_stddev_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_sum_fields'] = ResolversParentTypes['revenues_sum_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_var_pop_fields'] = ResolversParentTypes['revenues_var_pop_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_var_samp_fields'] = ResolversParentTypes['revenues_var_samp_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_variance_fields'] = ResolversParentTypes['revenues_variance_fields']
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']
> = {
  account_info?: SubscriptionResolver<
    Array<ResolversTypes['account_info']>,
    'account_info',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccount_InfoArgs, never>
  >;
  account_info_aggregate?: SubscriptionResolver<
    ResolversTypes['account_info_aggregate'],
    'account_info_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccount_Info_AggregateArgs, never>
  >;
  account_info_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['account_info']>,
    'account_info_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccount_Info_By_PkArgs, 'id'>
  >;
  assets?: SubscriptionResolver<
    Array<ResolversTypes['assets']>,
    'assets',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAssetsArgs, never>
  >;
  assets_aggregate?: SubscriptionResolver<
    ResolversTypes['assets_aggregate'],
    'assets_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAssets_AggregateArgs, never>
  >;
  assets_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['assets']>,
    'assets_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAssets_By_PkArgs, 'id'>
  >;
  categories?: SubscriptionResolver<
    Array<ResolversTypes['categories']>,
    'categories',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootCategoriesArgs, never>
  >;
  categories_aggregate?: SubscriptionResolver<
    ResolversTypes['categories_aggregate'],
    'categories_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootCategories_AggregateArgs, never>
  >;
  categories_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['categories']>,
    'categories_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootCategories_By_PkArgs, 'id'>
  >;
  expenses?: SubscriptionResolver<
    Array<ResolversTypes['expenses']>,
    'expenses',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootExpensesArgs, never>
  >;
  expenses_aggregate?: SubscriptionResolver<
    ResolversTypes['expenses_aggregate'],
    'expenses_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootExpenses_AggregateArgs, never>
  >;
  expenses_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['expenses']>,
    'expenses_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootExpenses_By_PkArgs, 'id'>
  >;
  labels?: SubscriptionResolver<
    Array<ResolversTypes['labels']>,
    'labels',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLabelsArgs, never>
  >;
  labels_aggregate?: SubscriptionResolver<
    ResolversTypes['labels_aggregate'],
    'labels_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLabels_AggregateArgs, never>
  >;
  labels_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['labels']>,
    'labels_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLabels_By_PkArgs, 'id'>
  >;
  liabilities?: SubscriptionResolver<
    Array<ResolversTypes['liabilities']>,
    'liabilities',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLiabilitiesArgs, never>
  >;
  liabilities_aggregate?: SubscriptionResolver<
    ResolversTypes['liabilities_aggregate'],
    'liabilities_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLiabilities_AggregateArgs, never>
  >;
  liabilities_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['liabilities']>,
    'liabilities_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLiabilities_By_PkArgs, 'id'>
  >;
  notifications?: SubscriptionResolver<
    Array<ResolversTypes['notifications']>,
    'notifications',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootNotificationsArgs, never>
  >;
  notifications_aggregate?: SubscriptionResolver<
    ResolversTypes['notifications_aggregate'],
    'notifications_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootNotifications_AggregateArgs, never>
  >;
  notifications_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['notifications']>,
    'notifications_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootNotifications_By_PkArgs, 'id'>
  >;
  revenues?: SubscriptionResolver<
    Array<ResolversTypes['revenues']>,
    'revenues',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRevenuesArgs, never>
  >;
  revenues_aggregate?: SubscriptionResolver<
    ResolversTypes['revenues_aggregate'],
    'revenues_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRevenues_AggregateArgs, never>
  >;
  revenues_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['revenues']>,
    'revenues_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRevenues_By_PkArgs, 'id'>
  >;
  transaction_attachments?: SubscriptionResolver<
    Array<ResolversTypes['transaction_attachments']>,
    'transaction_attachments',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransaction_AttachmentsArgs, never>
  >;
  transaction_attachments_aggregate?: SubscriptionResolver<
    ResolversTypes['transaction_attachments_aggregate'],
    'transaction_attachments_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransaction_Attachments_AggregateArgs, never>
  >;
  transaction_attachments_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['transaction_attachments']>,
    'transaction_attachments_by_pk',
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootTransaction_Attachments_By_PkArgs,
      'attachment_id' | 'transaction_id'
    >
  >;
  transaction_labels?: SubscriptionResolver<
    Array<ResolversTypes['transaction_labels']>,
    'transaction_labels',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransaction_LabelsArgs, never>
  >;
  transaction_labels_aggregate?: SubscriptionResolver<
    ResolversTypes['transaction_labels_aggregate'],
    'transaction_labels_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransaction_Labels_AggregateArgs, never>
  >;
  transaction_labels_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['transaction_labels']>,
    'transaction_labels_by_pk',
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootTransaction_Labels_By_PkArgs,
      'label_id' | 'transaction_id'
    >
  >;
  transactions?: SubscriptionResolver<
    Array<ResolversTypes['transactions']>,
    'transactions',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransactionsArgs, never>
  >;
  transactions_aggregate?: SubscriptionResolver<
    ResolversTypes['transactions_aggregate'],
    'transactions_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransactions_AggregateArgs, never>
  >;
  transactions_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['transactions']>,
    'transactions_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransactions_By_PkArgs, 'id'>
  >;
  user_settings?: SubscriptionResolver<
    Array<ResolversTypes['user_settings']>,
    'user_settings',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUser_SettingsArgs, never>
  >;
  user_settings_aggregate?: SubscriptionResolver<
    ResolversTypes['user_settings_aggregate'],
    'user_settings_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUser_Settings_AggregateArgs, never>
  >;
  user_settings_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['user_settings']>,
    'user_settings_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUser_Settings_By_PkArgs, 'user_id'>
  >;
  users?: SubscriptionResolver<
    Array<ResolversTypes['users']>,
    'users',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsersArgs, never>
  >;
  users_aggregate?: SubscriptionResolver<
    ResolversTypes['users_aggregate'],
    'users_aggregate',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_AggregateArgs, never>
  >;
  users_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['users']>,
    'users_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_By_PkArgs, 'id'>
  >;
};

export interface TimestamptzScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type Transaction_AttachmentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments'] = ResolversParentTypes['transaction_attachments']
> = {
  attachment_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transaction?: Resolver<
    ResolversTypes['transactions'],
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_aggregate'] = ResolversParentTypes['transaction_attachments_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['transaction_attachments']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_aggregate_fields'] = ResolversParentTypes['transaction_attachments_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Transaction_Attachments_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['transaction_attachments_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_avg_fields'] = ResolversParentTypes['transaction_attachments_avg_fields']
> = {
  attachment_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_max_fields'] = ResolversParentTypes['transaction_attachments_max_fields']
> = {
  attachment_id?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_min_fields'] = ResolversParentTypes['transaction_attachments_min_fields']
> = {
  attachment_id?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_mutation_response'] = ResolversParentTypes['transaction_attachments_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['transaction_attachments']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_stddev_fields'] = ResolversParentTypes['transaction_attachments_stddev_fields']
> = {
  attachment_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_stddev_pop_fields'] = ResolversParentTypes['transaction_attachments_stddev_pop_fields']
> = {
  attachment_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_stddev_samp_fields'] = ResolversParentTypes['transaction_attachments_stddev_samp_fields']
> = {
  attachment_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_sum_fields'] = ResolversParentTypes['transaction_attachments_sum_fields']
> = {
  attachment_id?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_var_pop_fields'] = ResolversParentTypes['transaction_attachments_var_pop_fields']
> = {
  attachment_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_var_samp_fields'] = ResolversParentTypes['transaction_attachments_var_samp_fields']
> = {
  attachment_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_variance_fields'] = ResolversParentTypes['transaction_attachments_variance_fields']
> = {
  attachment_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_LabelsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels'] = ResolversParentTypes['transaction_labels']
> = {
  label?: Resolver<ResolversTypes['labels'], ParentType, ContextType>;
  label_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transaction?: Resolver<
    ResolversTypes['transactions'],
    ParentType,
    ContextType
  >;
  transaction_id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_aggregate'] = ResolversParentTypes['transaction_labels_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['transaction_labels_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['transaction_labels']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_aggregate_fields'] = ResolversParentTypes['transaction_labels_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['transaction_labels_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Transaction_Labels_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['transaction_labels_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['transaction_labels_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['transaction_labels_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['transaction_labels_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['transaction_labels_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['transaction_labels_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['transaction_labels_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['transaction_labels_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['transaction_labels_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_avg_fields'] = ResolversParentTypes['transaction_labels_avg_fields']
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_max_fields'] = ResolversParentTypes['transaction_labels_max_fields']
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_min_fields'] = ResolversParentTypes['transaction_labels_min_fields']
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_mutation_response'] = ResolversParentTypes['transaction_labels_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['transaction_labels']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_stddev_fields'] = ResolversParentTypes['transaction_labels_stddev_fields']
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_stddev_pop_fields'] = ResolversParentTypes['transaction_labels_stddev_pop_fields']
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_stddev_samp_fields'] = ResolversParentTypes['transaction_labels_stddev_samp_fields']
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_sum_fields'] = ResolversParentTypes['transaction_labels_sum_fields']
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_var_pop_fields'] = ResolversParentTypes['transaction_labels_var_pop_fields']
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_var_samp_fields'] = ResolversParentTypes['transaction_labels_var_samp_fields']
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_variance_fields'] = ResolversParentTypes['transaction_labels_variance_fields']
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions'] = ResolversParentTypes['transactions']
> = {
  accountInfoBySourceAccount?: Resolver<
    ResolversTypes['account_info'],
    ParentType,
    ContextType
  >;
  account_info?: Resolver<
    ResolversTypes['account_info'],
    ParentType,
    ContextType
  >;
  amount?: Resolver<ResolversTypes['float8'], ParentType, ContextType>;
  category?: Resolver<
    Maybe<ResolversTypes['categories']>,
    ParentType,
    ContextType
  >;
  category_id?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  source_account?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  transaction_attachment?: Resolver<
    ResolversTypes['transaction_attachments'],
    ParentType,
    ContextType
  >;
  transaction_date?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  transaction_labels?: Resolver<
    Array<ResolversTypes['transaction_labels']>,
    ParentType,
    ContextType,
    RequireFields<TransactionsTransaction_LabelsArgs, never>
  >;
  transaction_labels_aggregate?: Resolver<
    ResolversTypes['transaction_labels_aggregate'],
    ParentType,
    ContextType,
    RequireFields<TransactionsTransaction_Labels_AggregateArgs, never>
  >;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_aggregate'] = ResolversParentTypes['transactions_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['transactions_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['transactions']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_aggregate_fields'] = ResolversParentTypes['transactions_aggregate_fields']
> = {
  avg?: Resolver<
    Maybe<ResolversTypes['transactions_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Transactions_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['transactions_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['transactions_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['transactions_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['transactions_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['transactions_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['transactions_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['transactions_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['transactions_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['transactions_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_avg_fields'] = ResolversParentTypes['transactions_avg_fields']
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_max_fields'] = ResolversParentTypes['transactions_max_fields']
> = {
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category_id?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  source_account?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  transaction_date?: Resolver<
    Maybe<ResolversTypes['date']>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_min_fields'] = ResolversParentTypes['transactions_min_fields']
> = {
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category_id?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  source_account?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  transaction_date?: Resolver<
    Maybe<ResolversTypes['date']>,
    ParentType,
    ContextType
  >;
  updated_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_mutation_response'] = ResolversParentTypes['transactions_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['transactions']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_stddev_fields'] = ResolversParentTypes['transactions_stddev_fields']
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_stddev_pop_fields'] = ResolversParentTypes['transactions_stddev_pop_fields']
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_stddev_samp_fields'] = ResolversParentTypes['transactions_stddev_samp_fields']
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_sum_fields'] = ResolversParentTypes['transactions_sum_fields']
> = {
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category_id?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  source_account?: Resolver<
    Maybe<ResolversTypes['bigint']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_var_pop_fields'] = ResolversParentTypes['transactions_var_pop_fields']
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_var_samp_fields'] = ResolversParentTypes['transactions_var_samp_fields']
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_variance_fields'] = ResolversParentTypes['transactions_variance_fields']
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  destiny_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source_account?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_SettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings'] = ResolversParentTypes['user_settings']
> = {
  darkMode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  langKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Settings_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings_aggregate'] = ResolversParentTypes['user_settings_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['user_settings_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['user_settings']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Settings_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings_aggregate_fields'] = ResolversParentTypes['user_settings_aggregate_fields']
> = {
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<User_Settings_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['user_settings_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['user_settings_min_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Settings_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings_max_fields'] = ResolversParentTypes['user_settings_max_fields']
> = {
  langKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Settings_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings_min_fields'] = ResolversParentTypes['user_settings_min_fields']
> = {
  langKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Settings_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings_mutation_response'] = ResolversParentTypes['user_settings_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['user_settings']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']
> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_setting?: Resolver<
    ResolversTypes['user_settings'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes['users_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']
> = {
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<Users_Aggregate_FieldsCountArgs, never>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['users_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['users_min_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']
> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']
> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  account_info?: Account_InfoResolvers<ContextType>;
  account_info_aggregate?: Account_Info_AggregateResolvers<ContextType>;
  account_info_aggregate_fields?: Account_Info_Aggregate_FieldsResolvers<ContextType>;
  account_info_avg_fields?: Account_Info_Avg_FieldsResolvers<ContextType>;
  account_info_max_fields?: Account_Info_Max_FieldsResolvers<ContextType>;
  account_info_min_fields?: Account_Info_Min_FieldsResolvers<ContextType>;
  account_info_mutation_response?: Account_Info_Mutation_ResponseResolvers<ContextType>;
  account_info_stddev_fields?: Account_Info_Stddev_FieldsResolvers<ContextType>;
  account_info_stddev_pop_fields?: Account_Info_Stddev_Pop_FieldsResolvers<ContextType>;
  account_info_stddev_samp_fields?: Account_Info_Stddev_Samp_FieldsResolvers<ContextType>;
  account_info_sum_fields?: Account_Info_Sum_FieldsResolvers<ContextType>;
  account_info_var_pop_fields?: Account_Info_Var_Pop_FieldsResolvers<ContextType>;
  account_info_var_samp_fields?: Account_Info_Var_Samp_FieldsResolvers<ContextType>;
  account_info_variance_fields?: Account_Info_Variance_FieldsResolvers<ContextType>;
  assets?: AssetsResolvers<ContextType>;
  assets_aggregate?: Assets_AggregateResolvers<ContextType>;
  assets_aggregate_fields?: Assets_Aggregate_FieldsResolvers<ContextType>;
  assets_avg_fields?: Assets_Avg_FieldsResolvers<ContextType>;
  assets_max_fields?: Assets_Max_FieldsResolvers<ContextType>;
  assets_min_fields?: Assets_Min_FieldsResolvers<ContextType>;
  assets_mutation_response?: Assets_Mutation_ResponseResolvers<ContextType>;
  assets_stddev_fields?: Assets_Stddev_FieldsResolvers<ContextType>;
  assets_stddev_pop_fields?: Assets_Stddev_Pop_FieldsResolvers<ContextType>;
  assets_stddev_samp_fields?: Assets_Stddev_Samp_FieldsResolvers<ContextType>;
  assets_sum_fields?: Assets_Sum_FieldsResolvers<ContextType>;
  assets_var_pop_fields?: Assets_Var_Pop_FieldsResolvers<ContextType>;
  assets_var_samp_fields?: Assets_Var_Samp_FieldsResolvers<ContextType>;
  assets_variance_fields?: Assets_Variance_FieldsResolvers<ContextType>;
  bigint?: GraphQLScalarType;
  bpchar?: GraphQLScalarType;
  categories?: CategoriesResolvers<ContextType>;
  categories_aggregate?: Categories_AggregateResolvers<ContextType>;
  categories_aggregate_fields?: Categories_Aggregate_FieldsResolvers<ContextType>;
  categories_avg_fields?: Categories_Avg_FieldsResolvers<ContextType>;
  categories_max_fields?: Categories_Max_FieldsResolvers<ContextType>;
  categories_min_fields?: Categories_Min_FieldsResolvers<ContextType>;
  categories_mutation_response?: Categories_Mutation_ResponseResolvers<ContextType>;
  categories_stddev_fields?: Categories_Stddev_FieldsResolvers<ContextType>;
  categories_stddev_pop_fields?: Categories_Stddev_Pop_FieldsResolvers<ContextType>;
  categories_stddev_samp_fields?: Categories_Stddev_Samp_FieldsResolvers<ContextType>;
  categories_sum_fields?: Categories_Sum_FieldsResolvers<ContextType>;
  categories_var_pop_fields?: Categories_Var_Pop_FieldsResolvers<ContextType>;
  categories_var_samp_fields?: Categories_Var_Samp_FieldsResolvers<ContextType>;
  categories_variance_fields?: Categories_Variance_FieldsResolvers<ContextType>;
  date?: GraphQLScalarType;
  expenses?: ExpensesResolvers<ContextType>;
  expenses_aggregate?: Expenses_AggregateResolvers<ContextType>;
  expenses_aggregate_fields?: Expenses_Aggregate_FieldsResolvers<ContextType>;
  expenses_avg_fields?: Expenses_Avg_FieldsResolvers<ContextType>;
  expenses_max_fields?: Expenses_Max_FieldsResolvers<ContextType>;
  expenses_min_fields?: Expenses_Min_FieldsResolvers<ContextType>;
  expenses_mutation_response?: Expenses_Mutation_ResponseResolvers<ContextType>;
  expenses_stddev_fields?: Expenses_Stddev_FieldsResolvers<ContextType>;
  expenses_stddev_pop_fields?: Expenses_Stddev_Pop_FieldsResolvers<ContextType>;
  expenses_stddev_samp_fields?: Expenses_Stddev_Samp_FieldsResolvers<ContextType>;
  expenses_sum_fields?: Expenses_Sum_FieldsResolvers<ContextType>;
  expenses_var_pop_fields?: Expenses_Var_Pop_FieldsResolvers<ContextType>;
  expenses_var_samp_fields?: Expenses_Var_Samp_FieldsResolvers<ContextType>;
  expenses_variance_fields?: Expenses_Variance_FieldsResolvers<ContextType>;
  float8?: GraphQLScalarType;
  labels?: LabelsResolvers<ContextType>;
  labels_aggregate?: Labels_AggregateResolvers<ContextType>;
  labels_aggregate_fields?: Labels_Aggregate_FieldsResolvers<ContextType>;
  labels_avg_fields?: Labels_Avg_FieldsResolvers<ContextType>;
  labels_max_fields?: Labels_Max_FieldsResolvers<ContextType>;
  labels_min_fields?: Labels_Min_FieldsResolvers<ContextType>;
  labels_mutation_response?: Labels_Mutation_ResponseResolvers<ContextType>;
  labels_stddev_fields?: Labels_Stddev_FieldsResolvers<ContextType>;
  labels_stddev_pop_fields?: Labels_Stddev_Pop_FieldsResolvers<ContextType>;
  labels_stddev_samp_fields?: Labels_Stddev_Samp_FieldsResolvers<ContextType>;
  labels_sum_fields?: Labels_Sum_FieldsResolvers<ContextType>;
  labels_var_pop_fields?: Labels_Var_Pop_FieldsResolvers<ContextType>;
  labels_var_samp_fields?: Labels_Var_Samp_FieldsResolvers<ContextType>;
  labels_variance_fields?: Labels_Variance_FieldsResolvers<ContextType>;
  liabilities?: LiabilitiesResolvers<ContextType>;
  liabilities_aggregate?: Liabilities_AggregateResolvers<ContextType>;
  liabilities_aggregate_fields?: Liabilities_Aggregate_FieldsResolvers<ContextType>;
  liabilities_avg_fields?: Liabilities_Avg_FieldsResolvers<ContextType>;
  liabilities_max_fields?: Liabilities_Max_FieldsResolvers<ContextType>;
  liabilities_min_fields?: Liabilities_Min_FieldsResolvers<ContextType>;
  liabilities_mutation_response?: Liabilities_Mutation_ResponseResolvers<ContextType>;
  liabilities_stddev_fields?: Liabilities_Stddev_FieldsResolvers<ContextType>;
  liabilities_stddev_pop_fields?: Liabilities_Stddev_Pop_FieldsResolvers<ContextType>;
  liabilities_stddev_samp_fields?: Liabilities_Stddev_Samp_FieldsResolvers<ContextType>;
  liabilities_sum_fields?: Liabilities_Sum_FieldsResolvers<ContextType>;
  liabilities_var_pop_fields?: Liabilities_Var_Pop_FieldsResolvers<ContextType>;
  liabilities_var_samp_fields?: Liabilities_Var_Samp_FieldsResolvers<ContextType>;
  liabilities_variance_fields?: Liabilities_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  notifications?: NotificationsResolvers<ContextType>;
  notifications_aggregate?: Notifications_AggregateResolvers<ContextType>;
  notifications_aggregate_fields?: Notifications_Aggregate_FieldsResolvers<ContextType>;
  notifications_avg_fields?: Notifications_Avg_FieldsResolvers<ContextType>;
  notifications_max_fields?: Notifications_Max_FieldsResolvers<ContextType>;
  notifications_min_fields?: Notifications_Min_FieldsResolvers<ContextType>;
  notifications_mutation_response?: Notifications_Mutation_ResponseResolvers<ContextType>;
  notifications_stddev_fields?: Notifications_Stddev_FieldsResolvers<ContextType>;
  notifications_stddev_pop_fields?: Notifications_Stddev_Pop_FieldsResolvers<ContextType>;
  notifications_stddev_samp_fields?: Notifications_Stddev_Samp_FieldsResolvers<ContextType>;
  notifications_sum_fields?: Notifications_Sum_FieldsResolvers<ContextType>;
  notifications_var_pop_fields?: Notifications_Var_Pop_FieldsResolvers<ContextType>;
  notifications_var_samp_fields?: Notifications_Var_Samp_FieldsResolvers<ContextType>;
  notifications_variance_fields?: Notifications_Variance_FieldsResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  revenues?: RevenuesResolvers<ContextType>;
  revenues_aggregate?: Revenues_AggregateResolvers<ContextType>;
  revenues_aggregate_fields?: Revenues_Aggregate_FieldsResolvers<ContextType>;
  revenues_avg_fields?: Revenues_Avg_FieldsResolvers<ContextType>;
  revenues_max_fields?: Revenues_Max_FieldsResolvers<ContextType>;
  revenues_min_fields?: Revenues_Min_FieldsResolvers<ContextType>;
  revenues_mutation_response?: Revenues_Mutation_ResponseResolvers<ContextType>;
  revenues_stddev_fields?: Revenues_Stddev_FieldsResolvers<ContextType>;
  revenues_stddev_pop_fields?: Revenues_Stddev_Pop_FieldsResolvers<ContextType>;
  revenues_stddev_samp_fields?: Revenues_Stddev_Samp_FieldsResolvers<ContextType>;
  revenues_sum_fields?: Revenues_Sum_FieldsResolvers<ContextType>;
  revenues_var_pop_fields?: Revenues_Var_Pop_FieldsResolvers<ContextType>;
  revenues_var_samp_fields?: Revenues_Var_Samp_FieldsResolvers<ContextType>;
  revenues_variance_fields?: Revenues_Variance_FieldsResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  transaction_attachments?: Transaction_AttachmentsResolvers<ContextType>;
  transaction_attachments_aggregate?: Transaction_Attachments_AggregateResolvers<ContextType>;
  transaction_attachments_aggregate_fields?: Transaction_Attachments_Aggregate_FieldsResolvers<ContextType>;
  transaction_attachments_avg_fields?: Transaction_Attachments_Avg_FieldsResolvers<ContextType>;
  transaction_attachments_max_fields?: Transaction_Attachments_Max_FieldsResolvers<ContextType>;
  transaction_attachments_min_fields?: Transaction_Attachments_Min_FieldsResolvers<ContextType>;
  transaction_attachments_mutation_response?: Transaction_Attachments_Mutation_ResponseResolvers<ContextType>;
  transaction_attachments_stddev_fields?: Transaction_Attachments_Stddev_FieldsResolvers<ContextType>;
  transaction_attachments_stddev_pop_fields?: Transaction_Attachments_Stddev_Pop_FieldsResolvers<ContextType>;
  transaction_attachments_stddev_samp_fields?: Transaction_Attachments_Stddev_Samp_FieldsResolvers<ContextType>;
  transaction_attachments_sum_fields?: Transaction_Attachments_Sum_FieldsResolvers<ContextType>;
  transaction_attachments_var_pop_fields?: Transaction_Attachments_Var_Pop_FieldsResolvers<ContextType>;
  transaction_attachments_var_samp_fields?: Transaction_Attachments_Var_Samp_FieldsResolvers<ContextType>;
  transaction_attachments_variance_fields?: Transaction_Attachments_Variance_FieldsResolvers<ContextType>;
  transaction_labels?: Transaction_LabelsResolvers<ContextType>;
  transaction_labels_aggregate?: Transaction_Labels_AggregateResolvers<ContextType>;
  transaction_labels_aggregate_fields?: Transaction_Labels_Aggregate_FieldsResolvers<ContextType>;
  transaction_labels_avg_fields?: Transaction_Labels_Avg_FieldsResolvers<ContextType>;
  transaction_labels_max_fields?: Transaction_Labels_Max_FieldsResolvers<ContextType>;
  transaction_labels_min_fields?: Transaction_Labels_Min_FieldsResolvers<ContextType>;
  transaction_labels_mutation_response?: Transaction_Labels_Mutation_ResponseResolvers<ContextType>;
  transaction_labels_stddev_fields?: Transaction_Labels_Stddev_FieldsResolvers<ContextType>;
  transaction_labels_stddev_pop_fields?: Transaction_Labels_Stddev_Pop_FieldsResolvers<ContextType>;
  transaction_labels_stddev_samp_fields?: Transaction_Labels_Stddev_Samp_FieldsResolvers<ContextType>;
  transaction_labels_sum_fields?: Transaction_Labels_Sum_FieldsResolvers<ContextType>;
  transaction_labels_var_pop_fields?: Transaction_Labels_Var_Pop_FieldsResolvers<ContextType>;
  transaction_labels_var_samp_fields?: Transaction_Labels_Var_Samp_FieldsResolvers<ContextType>;
  transaction_labels_variance_fields?: Transaction_Labels_Variance_FieldsResolvers<ContextType>;
  transactions?: TransactionsResolvers<ContextType>;
  transactions_aggregate?: Transactions_AggregateResolvers<ContextType>;
  transactions_aggregate_fields?: Transactions_Aggregate_FieldsResolvers<ContextType>;
  transactions_avg_fields?: Transactions_Avg_FieldsResolvers<ContextType>;
  transactions_max_fields?: Transactions_Max_FieldsResolvers<ContextType>;
  transactions_min_fields?: Transactions_Min_FieldsResolvers<ContextType>;
  transactions_mutation_response?: Transactions_Mutation_ResponseResolvers<ContextType>;
  transactions_stddev_fields?: Transactions_Stddev_FieldsResolvers<ContextType>;
  transactions_stddev_pop_fields?: Transactions_Stddev_Pop_FieldsResolvers<ContextType>;
  transactions_stddev_samp_fields?: Transactions_Stddev_Samp_FieldsResolvers<ContextType>;
  transactions_sum_fields?: Transactions_Sum_FieldsResolvers<ContextType>;
  transactions_var_pop_fields?: Transactions_Var_Pop_FieldsResolvers<ContextType>;
  transactions_var_samp_fields?: Transactions_Var_Samp_FieldsResolvers<ContextType>;
  transactions_variance_fields?: Transactions_Variance_FieldsResolvers<ContextType>;
  user_settings?: User_SettingsResolvers<ContextType>;
  user_settings_aggregate?: User_Settings_AggregateResolvers<ContextType>;
  user_settings_aggregate_fields?: User_Settings_Aggregate_FieldsResolvers<ContextType>;
  user_settings_max_fields?: User_Settings_Max_FieldsResolvers<ContextType>;
  user_settings_min_fields?: User_Settings_Min_FieldsResolvers<ContextType>;
  user_settings_mutation_response?: User_Settings_Mutation_ResponseResolvers<ContextType>;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};
