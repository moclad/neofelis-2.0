import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  bigint: { input: any; output: any };
  bpchar: { input: any; output: any };
  date: { input: any; output: any };
  float8: { input: any; output: any };
  smallint: { input: any; output: any };
  timestamp: { input: any; output: any };
  timestamptz: { input: string; output: string };
  uuid: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "account_info" */
export type Account_Info = {
  __typename?: 'account_info';
  alternate_name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  asset?: Maybe<Assets>;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  expense?: Maybe<Expenses>;
  id: Scalars['bigint']['output'];
  /** An object relationship */
  liability?: Maybe<Liabilities>;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  recurrings: Array<Recurring>;
  /** An array relationship */
  recurringsByAccountTo: Array<Recurring>;
  /** An aggregate relationship */
  recurringsByAccountTo_aggregate: Recurring_Aggregate;
  /** An aggregate relationship */
  recurrings_aggregate: Recurring_Aggregate;
  /** An object relationship */
  revenue?: Maybe<Revenues>;
  /** An array relationship */
  transaction_accounts: Array<Transaction_Accounts>;
  /** An aggregate relationship */
  transaction_accounts_aggregate: Transaction_Accounts_Aggregate;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An array relationship */
  transactionsByAccountTo: Array<Transactions>;
  /** An aggregate relationship */
  transactionsByAccountTo_aggregate: Transactions_Aggregate;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  type: Scalars['bpchar']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "account_info" */
export type Account_InfoRecurringsArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Order_By>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoRecurringsByAccountToArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Order_By>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoRecurringsByAccountTo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Order_By>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoRecurrings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Order_By>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoTransaction_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoTransaction_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoTransactionsByAccountToArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoTransactionsByAccountTo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "account_info" */
export type Account_InfoTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Account_Info_Avg_Fields = {
  __typename?: 'account_info_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "account_info". All fields are combined with a logical 'AND'. */
export type Account_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Info_Bool_Exp>>;
  _not?: InputMaybe<Account_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Info_Bool_Exp>>;
  alternate_name?: InputMaybe<String_Comparison_Exp>;
  asset?: InputMaybe<Assets_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expense?: InputMaybe<Expenses_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  liability?: InputMaybe<Liabilities_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  recurrings?: InputMaybe<Recurring_Bool_Exp>;
  recurringsByAccountTo?: InputMaybe<Recurring_Bool_Exp>;
  recurringsByAccountTo_aggregate?: InputMaybe<Recurring_Aggregate_Bool_Exp>;
  recurrings_aggregate?: InputMaybe<Recurring_Aggregate_Bool_Exp>;
  revenue?: InputMaybe<Revenues_Bool_Exp>;
  transaction_accounts?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  transaction_accounts_aggregate?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  transactionsByAccountTo?: InputMaybe<Transactions_Bool_Exp>;
  transactionsByAccountTo_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  type?: InputMaybe<Bpchar_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "account_info" */
export enum Account_Info_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountInfoPkey = 'account_info_pkey',
}

/** input type for incrementing numeric columns in table "account_info" */
export type Account_Info_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "account_info" */
export type Account_Info_Insert_Input = {
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  asset?: InputMaybe<Assets_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expense?: InputMaybe<Expenses_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  liability?: InputMaybe<Liabilities_Obj_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  recurrings?: InputMaybe<Recurring_Arr_Rel_Insert_Input>;
  recurringsByAccountTo?: InputMaybe<Recurring_Arr_Rel_Insert_Input>;
  revenue?: InputMaybe<Revenues_Obj_Rel_Insert_Input>;
  transaction_accounts?: InputMaybe<Transaction_Accounts_Arr_Rel_Insert_Input>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  transactionsByAccountTo?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Account_Info_Max_Fields = {
  __typename?: 'account_info_max_fields';
  alternate_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['bpchar']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Account_Info_Min_Fields = {
  __typename?: 'account_info_min_fields';
  alternate_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['bpchar']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "account_info" */
export type Account_Info_Mutation_Response = {
  __typename?: 'account_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Account_Info>;
};

/** input type for inserting object relation for remote table "account_info" */
export type Account_Info_Obj_Rel_Insert_Input = {
  data: Account_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Account_Info_On_Conflict>;
};

/** on_conflict condition type for table "account_info" */
export type Account_Info_On_Conflict = {
  constraint: Account_Info_Constraint;
  update_columns?: Array<Account_Info_Update_Column>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "account_info". */
export type Account_Info_Order_By = {
  alternate_name?: InputMaybe<Order_By>;
  asset?: InputMaybe<Assets_Order_By>;
  created_at?: InputMaybe<Order_By>;
  expense?: InputMaybe<Expenses_Order_By>;
  id?: InputMaybe<Order_By>;
  liability?: InputMaybe<Liabilities_Order_By>;
  name?: InputMaybe<Order_By>;
  recurringsByAccountTo_aggregate?: InputMaybe<Recurring_Aggregate_Order_By>;
  recurrings_aggregate?: InputMaybe<Recurring_Aggregate_Order_By>;
  revenue?: InputMaybe<Revenues_Order_By>;
  transaction_accounts_aggregate?: InputMaybe<Transaction_Accounts_Aggregate_Order_By>;
  transactionsByAccountTo_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account_info */
export type Account_Info_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "account_info" */
export enum Account_Info_Select_Column {
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "account_info" */
export type Account_Info_Set_Input = {
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Account_Info_Stddev_Fields = {
  __typename?: 'account_info_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Account_Info_Stddev_Pop_Fields = {
  __typename?: 'account_info_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Account_Info_Stddev_Samp_Fields = {
  __typename?: 'account_info_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "account_info" */
export type Account_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Info_Stream_Cursor_Value_Input = {
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Account_Info_Sum_Fields = {
  __typename?: 'account_info_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "account_info" */
export enum Account_Info_Update_Column {
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Account_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Account_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Account_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Account_Info_Var_Pop_Fields = {
  __typename?: 'account_info_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Account_Info_Var_Samp_Fields = {
  __typename?: 'account_info_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Account_Info_Variance_Fields = {
  __typename?: 'account_info_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "all_active_accounts" */
export type All_Active_Accounts = {
  __typename?: 'all_active_accounts';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  default?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['bpchar']['output']>;
};

/** aggregated selection of "all_active_accounts" */
export type All_Active_Accounts_Aggregate = {
  __typename?: 'all_active_accounts_aggregate';
  aggregate?: Maybe<All_Active_Accounts_Aggregate_Fields>;
  nodes: Array<All_Active_Accounts>;
};

/** aggregate fields of "all_active_accounts" */
export type All_Active_Accounts_Aggregate_Fields = {
  __typename?: 'all_active_accounts_aggregate_fields';
  avg?: Maybe<All_Active_Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<All_Active_Accounts_Max_Fields>;
  min?: Maybe<All_Active_Accounts_Min_Fields>;
  stddev?: Maybe<All_Active_Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<All_Active_Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<All_Active_Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<All_Active_Accounts_Sum_Fields>;
  var_pop?: Maybe<All_Active_Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<All_Active_Accounts_Var_Samp_Fields>;
  variance?: Maybe<All_Active_Accounts_Variance_Fields>;
};

/** aggregate fields of "all_active_accounts" */
export type All_Active_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<All_Active_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type All_Active_Accounts_Avg_Fields = {
  __typename?: 'all_active_accounts_avg_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "all_active_accounts". All fields are combined with a logical 'AND'. */
export type All_Active_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<All_Active_Accounts_Bool_Exp>>;
  _not?: InputMaybe<All_Active_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<All_Active_Accounts_Bool_Exp>>;
  account_no?: InputMaybe<String_Comparison_Exp>;
  alternate_name?: InputMaybe<String_Comparison_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  default?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** aggregate max on columns */
export type All_Active_Accounts_Max_Fields = {
  __typename?: 'all_active_accounts_max_fields';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['bpchar']['output']>;
};

/** aggregate min on columns */
export type All_Active_Accounts_Min_Fields = {
  __typename?: 'all_active_accounts_min_fields';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['bpchar']['output']>;
};

/** Ordering options when selecting data from "all_active_accounts". */
export type All_Active_Accounts_Order_By = {
  account_no?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  default?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "all_active_accounts" */
export enum All_Active_Accounts_Select_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
}

/** aggregate stddev on columns */
export type All_Active_Accounts_Stddev_Fields = {
  __typename?: 'all_active_accounts_stddev_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type All_Active_Accounts_Stddev_Pop_Fields = {
  __typename?: 'all_active_accounts_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type All_Active_Accounts_Stddev_Samp_Fields = {
  __typename?: 'all_active_accounts_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "all_active_accounts" */
export type All_Active_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: All_Active_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type All_Active_Accounts_Stream_Cursor_Value_Input = {
  account_no?: InputMaybe<Scalars['String']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['bpchar']['input']>;
};

/** aggregate sum on columns */
export type All_Active_Accounts_Sum_Fields = {
  __typename?: 'all_active_accounts_sum_fields';
  category_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type All_Active_Accounts_Var_Pop_Fields = {
  __typename?: 'all_active_accounts_var_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type All_Active_Accounts_Var_Samp_Fields = {
  __typename?: 'all_active_accounts_var_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type All_Active_Accounts_Variance_Fields = {
  __typename?: 'all_active_accounts_variance_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "assets" */
export type Assets = {
  __typename?: 'assets';
  /** An object relationship */
  account_info: Account_Info;
  account_no?: Maybe<Scalars['String']['output']>;
  active: Scalars['Boolean']['output'];
  alternate_name?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['float8']['output']>;
  balance_date?: Maybe<Scalars['date']['output']>;
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  default: Scalars['Boolean']['output'];
  id: Scalars['bigint']['output'];
  /** An array relationship */
  import_asset_files: Array<Import_Asset_File>;
  /** An aggregate relationship */
  import_asset_files_aggregate: Import_Asset_File_Aggregate;
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "assets" */
export type AssetsImport_Asset_FilesArgs = {
  distinct_on?: InputMaybe<Array<Import_Asset_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Import_Asset_File_Order_By>>;
  where?: InputMaybe<Import_Asset_File_Bool_Exp>;
};

/** columns and relationships of "assets" */
export type AssetsImport_Asset_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Import_Asset_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Import_Asset_File_Order_By>>;
  where?: InputMaybe<Import_Asset_File_Bool_Exp>;
};

/** aggregated selection of "assets" */
export type Assets_Aggregate = {
  __typename?: 'assets_aggregate';
  aggregate?: Maybe<Assets_Aggregate_Fields>;
  nodes: Array<Assets>;
};

export type Assets_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Assets_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Assets_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Assets_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Assets_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Assets_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Assets_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Assets_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Assets_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Assets_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Assets_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Assets_Aggregate_Bool_Exp_Var_Samp>;
};

export type Assets_Aggregate_Bool_Exp_Avg = {
  arguments: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Assets_Aggregate_Bool_Exp_Bool_And = {
  arguments: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Assets_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Assets_Aggregate_Bool_Exp_Corr = {
  arguments: Assets_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Assets_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Assets_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Assets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Assets_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Assets_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Assets_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Assets_Aggregate_Bool_Exp_Max = {
  arguments: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Assets_Aggregate_Bool_Exp_Min = {
  arguments: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Assets_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Assets_Aggregate_Bool_Exp_Sum = {
  arguments: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Assets_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "assets" */
export type Assets_Aggregate_Fields = {
  __typename?: 'assets_aggregate_fields';
  avg?: Maybe<Assets_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "assets" */
export type Assets_Aggregate_Order_By = {
  avg?: InputMaybe<Assets_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assets_Max_Order_By>;
  min?: InputMaybe<Assets_Min_Order_By>;
  stddev?: InputMaybe<Assets_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Assets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Assets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Assets_Sum_Order_By>;
  var_pop?: InputMaybe<Assets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Assets_Var_Samp_Order_By>;
  variance?: InputMaybe<Assets_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "assets" */
export type Assets_Arr_Rel_Insert_Input = {
  data: Array<Assets_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Assets_On_Conflict>;
};

/** aggregate avg on columns */
export type Assets_Avg_Fields = {
  __typename?: 'assets_avg_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "assets" */
export type Assets_Avg_Order_By = {
  balance?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "assets". All fields are combined with a logical 'AND'. */
export type Assets_Bool_Exp = {
  _and?: InputMaybe<Array<Assets_Bool_Exp>>;
  _not?: InputMaybe<Assets_Bool_Exp>;
  _or?: InputMaybe<Array<Assets_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  account_no?: InputMaybe<String_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  alternate_name?: InputMaybe<String_Comparison_Exp>;
  balance?: InputMaybe<Float8_Comparison_Exp>;
  balance_date?: InputMaybe<Date_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  default?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  import_asset_files?: InputMaybe<Import_Asset_File_Bool_Exp>;
  import_asset_files_aggregate?: InputMaybe<Import_Asset_File_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "assets" */
export enum Assets_Constraint {
  /** unique or primary key constraint on columns "id" */
  AssetsPkey = 'assets_pkey',
}

/** input type for incrementing numeric columns in table "assets" */
export type Assets_Inc_Input = {
  balance?: InputMaybe<Scalars['float8']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "assets" */
export type Assets_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  balance?: InputMaybe<Scalars['float8']['input']>;
  balance_date?: InputMaybe<Scalars['date']['input']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  import_asset_files?: InputMaybe<Import_Asset_File_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Assets_Max_Fields = {
  __typename?: 'assets_max_fields';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['float8']['output']>;
  balance_date?: Maybe<Scalars['date']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "assets" */
export type Assets_Max_Order_By = {
  account_no?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_date?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assets_Min_Fields = {
  __typename?: 'assets_min_fields';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['float8']['output']>;
  balance_date?: Maybe<Scalars['date']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "assets" */
export type Assets_Min_Order_By = {
  account_no?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_date?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "assets" */
export type Assets_Mutation_Response = {
  __typename?: 'assets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Assets>;
};

/** input type for inserting object relation for remote table "assets" */
export type Assets_Obj_Rel_Insert_Input = {
  data: Assets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Assets_On_Conflict>;
};

/** on_conflict condition type for table "assets" */
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
  alternate_name?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  balance_date?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_asset_files_aggregate?: InputMaybe<Import_Asset_File_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assets */
export type Assets_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "assets" */
export enum Assets_Select_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  Balance = 'balance',
  /** column name */
  BalanceDate = 'balance_date',
  /** column name */
  CategoryId = 'category_id',
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

/** select "assets_aggregate_bool_exp_avg_arguments_columns" columns of table "assets" */
export enum Assets_Select_Column_Assets_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Balance = 'balance',
}

/** select "assets_aggregate_bool_exp_bool_and_arguments_columns" columns of table "assets" */
export enum Assets_Select_Column_Assets_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Default = 'default',
}

/** select "assets_aggregate_bool_exp_bool_or_arguments_columns" columns of table "assets" */
export enum Assets_Select_Column_Assets_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Default = 'default',
}

/** select "assets_aggregate_bool_exp_corr_arguments_columns" columns of table "assets" */
export enum Assets_Select_Column_Assets_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Balance = 'balance',
}

/** select "assets_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "assets" */
export enum Assets_Select_Column_Assets_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Balance = 'balance',
}

/** select "assets_aggregate_bool_exp_max_arguments_columns" columns of table "assets" */
export enum Assets_Select_Column_Assets_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Balance = 'balance',
}

/** select "assets_aggregate_bool_exp_min_arguments_columns" columns of table "assets" */
export enum Assets_Select_Column_Assets_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Balance = 'balance',
}

/** select "assets_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "assets" */
export enum Assets_Select_Column_Assets_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Balance = 'balance',
}

/** select "assets_aggregate_bool_exp_sum_arguments_columns" columns of table "assets" */
export enum Assets_Select_Column_Assets_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Balance = 'balance',
}

/** select "assets_aggregate_bool_exp_var_samp_arguments_columns" columns of table "assets" */
export enum Assets_Select_Column_Assets_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Balance = 'balance',
}

/** input type for updating data in table "assets" */
export type Assets_Set_Input = {
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  balance?: InputMaybe<Scalars['float8']['input']>;
  balance_date?: InputMaybe<Scalars['date']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Assets_Stddev_Fields = {
  __typename?: 'assets_stddev_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "assets" */
export type Assets_Stddev_Order_By = {
  balance?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Assets_Stddev_Pop_Fields = {
  __typename?: 'assets_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "assets" */
export type Assets_Stddev_Pop_Order_By = {
  balance?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Assets_Stddev_Samp_Fields = {
  __typename?: 'assets_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "assets" */
export type Assets_Stddev_Samp_Order_By = {
  balance?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "assets" */
export type Assets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Assets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Assets_Stream_Cursor_Value_Input = {
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  balance?: InputMaybe<Scalars['float8']['input']>;
  balance_date?: InputMaybe<Scalars['date']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Assets_Sum_Fields = {
  __typename?: 'assets_sum_fields';
  balance?: Maybe<Scalars['float8']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "assets" */
export type Assets_Sum_Order_By = {
  balance?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "assets" */
export enum Assets_Update_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  Balance = 'balance',
  /** column name */
  BalanceDate = 'balance_date',
  /** column name */
  CategoryId = 'category_id',
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

export type Assets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Assets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Assets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Assets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Assets_Var_Pop_Fields = {
  __typename?: 'assets_var_pop_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "assets" */
export type Assets_Var_Pop_Order_By = {
  balance?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Assets_Var_Samp_Fields = {
  __typename?: 'assets_var_samp_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "assets" */
export type Assets_Var_Samp_Order_By = {
  balance?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Assets_Variance_Fields = {
  __typename?: 'assets_variance_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "assets" */
export type Assets_Variance_Order_By = {
  balance?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  active: Scalars['Boolean']['output'];
  /** An array relationship */
  assets: Array<Assets>;
  /** An aggregate relationship */
  assets_aggregate: Assets_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  expenses: Array<Expenses>;
  /** An aggregate relationship */
  expenses_aggregate: Expenses_Aggregate;
  id: Scalars['bigint']['output'];
  /** An array relationship */
  liabilities: Array<Liabilities>;
  /** An aggregate relationship */
  liabilities_aggregate: Liabilities_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  recurrings: Array<Recurring>;
  /** An aggregate relationship */
  recurrings_aggregate: Recurring_Aggregate;
  /** An array relationship */
  revenues: Array<Revenues>;
  /** An aggregate relationship */
  revenues_aggregate: Revenues_Aggregate;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "categories" */
export type CategoriesAssetsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesAssets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesExpensesArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesExpenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesLiabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Liabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Liabilities_Order_By>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesLiabilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Liabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Liabilities_Order_By>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesRecurringsArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Order_By>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesRecurrings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Order_By>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesRevenuesArgs = {
  distinct_on?: InputMaybe<Array<Revenues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Revenues_Order_By>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesRevenues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revenues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Revenues_Order_By>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  assets?: InputMaybe<Assets_Bool_Exp>;
  assets_aggregate?: InputMaybe<Assets_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expenses?: InputMaybe<Expenses_Bool_Exp>;
  expenses_aggregate?: InputMaybe<Expenses_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  liabilities?: InputMaybe<Liabilities_Bool_Exp>;
  liabilities_aggregate?: InputMaybe<Liabilities_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  recurrings?: InputMaybe<Recurring_Bool_Exp>;
  recurrings_aggregate?: InputMaybe<Recurring_Aggregate_Bool_Exp>;
  revenues?: InputMaybe<Revenues_Bool_Exp>;
  revenues_aggregate?: InputMaybe<Revenues_Aggregate_Bool_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey',
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  assets?: InputMaybe<Assets_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expenses?: InputMaybe<Expenses_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  liabilities?: InputMaybe<Liabilities_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  recurrings?: InputMaybe<Recurring_Arr_Rel_Insert_Input>;
  revenues?: InputMaybe<Revenues_Arr_Rel_Insert_Input>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  active?: InputMaybe<Order_By>;
  assets_aggregate?: InputMaybe<Assets_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  expenses_aggregate?: InputMaybe<Expenses_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  liabilities_aggregate?: InputMaybe<Liabilities_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  recurrings_aggregate?: InputMaybe<Recurring_Aggregate_Order_By>;
  revenues_aggregate?: InputMaybe<Revenues_Aggregate_Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
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

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "expenses" */
export type Expenses = {
  __typename?: 'expenses';
  /** An object relationship */
  account_info: Account_Info;
  account_no?: Maybe<Scalars['String']['output']>;
  active: Scalars['Boolean']['output'];
  alternate_name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "expenses" */
export type Expenses_Aggregate = {
  __typename?: 'expenses_aggregate';
  aggregate?: Maybe<Expenses_Aggregate_Fields>;
  nodes: Array<Expenses>;
};

export type Expenses_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Expenses_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Expenses_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Expenses_Aggregate_Bool_Exp_Count>;
};

export type Expenses_Aggregate_Bool_Exp_Bool_And = {
  arguments: Expenses_Select_Column_Expenses_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Expenses_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Expenses_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Expenses_Select_Column_Expenses_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Expenses_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Expenses_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Expenses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Expenses_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "expenses" */
export type Expenses_Aggregate_Fields = {
  __typename?: 'expenses_aggregate_fields';
  avg?: Maybe<Expenses_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "expenses" */
export type Expenses_Aggregate_Order_By = {
  avg?: InputMaybe<Expenses_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Expenses_Max_Order_By>;
  min?: InputMaybe<Expenses_Min_Order_By>;
  stddev?: InputMaybe<Expenses_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Expenses_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Expenses_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Expenses_Sum_Order_By>;
  var_pop?: InputMaybe<Expenses_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Expenses_Var_Samp_Order_By>;
  variance?: InputMaybe<Expenses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "expenses" */
export type Expenses_Arr_Rel_Insert_Input = {
  data: Array<Expenses_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Expenses_On_Conflict>;
};

/** aggregate avg on columns */
export type Expenses_Avg_Fields = {
  __typename?: 'expenses_avg_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "expenses" */
export type Expenses_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "expenses". All fields are combined with a logical 'AND'. */
export type Expenses_Bool_Exp = {
  _and?: InputMaybe<Array<Expenses_Bool_Exp>>;
  _not?: InputMaybe<Expenses_Bool_Exp>;
  _or?: InputMaybe<Array<Expenses_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  account_no?: InputMaybe<String_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  alternate_name?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "expenses" */
export enum Expenses_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExpensesPkey = 'expenses_pkey',
}

/** input type for incrementing numeric columns in table "expenses" */
export type Expenses_Inc_Input = {
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "expenses" */
export type Expenses_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Expenses_Max_Fields = {
  __typename?: 'expenses_max_fields';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "expenses" */
export type Expenses_Max_Order_By = {
  account_no?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Expenses_Min_Fields = {
  __typename?: 'expenses_min_fields';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "expenses" */
export type Expenses_Min_Order_By = {
  account_no?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "expenses" */
export type Expenses_Mutation_Response = {
  __typename?: 'expenses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Expenses>;
};

/** input type for inserting object relation for remote table "expenses" */
export type Expenses_Obj_Rel_Insert_Input = {
  data: Expenses_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Expenses_On_Conflict>;
};

/** on_conflict condition type for table "expenses" */
export type Expenses_On_Conflict = {
  constraint: Expenses_Constraint;
  update_columns?: Array<Expenses_Update_Column>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

/** Ordering options when selecting data from "expenses". */
export type Expenses_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  account_no?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: expenses */
export type Expenses_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "expenses" */
export enum Expenses_Select_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "expenses_aggregate_bool_exp_bool_and_arguments_columns" columns of table "expenses" */
export enum Expenses_Select_Column_Expenses_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
}

/** select "expenses_aggregate_bool_exp_bool_or_arguments_columns" columns of table "expenses" */
export enum Expenses_Select_Column_Expenses_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
}

/** input type for updating data in table "expenses" */
export type Expenses_Set_Input = {
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Expenses_Stddev_Fields = {
  __typename?: 'expenses_stddev_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "expenses" */
export type Expenses_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Expenses_Stddev_Pop_Fields = {
  __typename?: 'expenses_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "expenses" */
export type Expenses_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Expenses_Stddev_Samp_Fields = {
  __typename?: 'expenses_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "expenses" */
export type Expenses_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "expenses" */
export type Expenses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Expenses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Expenses_Stream_Cursor_Value_Input = {
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Expenses_Sum_Fields = {
  __typename?: 'expenses_sum_fields';
  category_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "expenses" */
export type Expenses_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "expenses" */
export enum Expenses_Update_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Expenses_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Expenses_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Expenses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Expenses_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Expenses_Var_Pop_Fields = {
  __typename?: 'expenses_var_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "expenses" */
export type Expenses_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Expenses_Var_Samp_Fields = {
  __typename?: 'expenses_var_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "expenses" */
export type Expenses_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Expenses_Variance_Fields = {
  __typename?: 'expenses_variance_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "expenses" */
export type Expenses_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** columns and relationships of "gauge_data" */
export type Gauge_Data = {
  __typename?: 'gauge_data';
  amount?: Maybe<Scalars['float8']['output']>;
  battery?: Maybe<Scalars['float8']['output']>;
  id: Scalars['uuid']['output'];
  sensor_name: Scalars['String']['output'];
  tick?: Maybe<Scalars['smallint']['output']>;
  ts: Scalars['timestamp']['output'];
};

/** aggregated selection of "gauge_data" */
export type Gauge_Data_Aggregate = {
  __typename?: 'gauge_data_aggregate';
  aggregate?: Maybe<Gauge_Data_Aggregate_Fields>;
  nodes: Array<Gauge_Data>;
};

/** aggregate fields of "gauge_data" */
export type Gauge_Data_Aggregate_Fields = {
  __typename?: 'gauge_data_aggregate_fields';
  avg?: Maybe<Gauge_Data_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Gauge_Data_Max_Fields>;
  min?: Maybe<Gauge_Data_Min_Fields>;
  stddev?: Maybe<Gauge_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Gauge_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gauge_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Gauge_Data_Sum_Fields>;
  var_pop?: Maybe<Gauge_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Gauge_Data_Var_Samp_Fields>;
  variance?: Maybe<Gauge_Data_Variance_Fields>;
};

/** aggregate fields of "gauge_data" */
export type Gauge_Data_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gauge_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Gauge_Data_Avg_Fields = {
  __typename?: 'gauge_data_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  tick?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "gauge_data". All fields are combined with a logical 'AND'. */
export type Gauge_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Gauge_Data_Bool_Exp>>;
  _not?: InputMaybe<Gauge_Data_Bool_Exp>;
  _or?: InputMaybe<Array<Gauge_Data_Bool_Exp>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  battery?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sensor_name?: InputMaybe<String_Comparison_Exp>;
  tick?: InputMaybe<Smallint_Comparison_Exp>;
  ts?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "gauge_data" */
export enum Gauge_Data_Constraint {
  /** unique or primary key constraint on columns "id" */
  GaugeDataIdKey = 'gauge_data_id_key',
  /** unique or primary key constraint on columns "ts", "id" */
  GaugeDataPkey = 'gauge_data_pkey',
}

/** input type for incrementing numeric columns in table "gauge_data" */
export type Gauge_Data_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  battery?: InputMaybe<Scalars['float8']['input']>;
  tick?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "gauge_data" */
export type Gauge_Data_Insert_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  battery?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sensor_name?: InputMaybe<Scalars['String']['input']>;
  tick?: InputMaybe<Scalars['smallint']['input']>;
  ts?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Gauge_Data_Max_Fields = {
  __typename?: 'gauge_data_max_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  battery?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sensor_name?: Maybe<Scalars['String']['output']>;
  tick?: Maybe<Scalars['smallint']['output']>;
  ts?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Gauge_Data_Min_Fields = {
  __typename?: 'gauge_data_min_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  battery?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sensor_name?: Maybe<Scalars['String']['output']>;
  tick?: Maybe<Scalars['smallint']['output']>;
  ts?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "gauge_data" */
export type Gauge_Data_Mutation_Response = {
  __typename?: 'gauge_data_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Gauge_Data>;
};

/** on_conflict condition type for table "gauge_data" */
export type Gauge_Data_On_Conflict = {
  constraint: Gauge_Data_Constraint;
  update_columns?: Array<Gauge_Data_Update_Column>;
  where?: InputMaybe<Gauge_Data_Bool_Exp>;
};

/** Ordering options when selecting data from "gauge_data". */
export type Gauge_Data_Order_By = {
  amount?: InputMaybe<Order_By>;
  battery?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sensor_name?: InputMaybe<Order_By>;
  tick?: InputMaybe<Order_By>;
  ts?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gauge_data */
export type Gauge_Data_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
  ts: Scalars['timestamp']['input'];
};

/** select columns of table "gauge_data" */
export enum Gauge_Data_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Battery = 'battery',
  /** column name */
  Id = 'id',
  /** column name */
  SensorName = 'sensor_name',
  /** column name */
  Tick = 'tick',
  /** column name */
  Ts = 'ts',
}

/** input type for updating data in table "gauge_data" */
export type Gauge_Data_Set_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  battery?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sensor_name?: InputMaybe<Scalars['String']['input']>;
  tick?: InputMaybe<Scalars['smallint']['input']>;
  ts?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Gauge_Data_Stddev_Fields = {
  __typename?: 'gauge_data_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  tick?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Gauge_Data_Stddev_Pop_Fields = {
  __typename?: 'gauge_data_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  tick?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Gauge_Data_Stddev_Samp_Fields = {
  __typename?: 'gauge_data_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  tick?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "gauge_data" */
export type Gauge_Data_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gauge_Data_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gauge_Data_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  battery?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sensor_name?: InputMaybe<Scalars['String']['input']>;
  tick?: InputMaybe<Scalars['smallint']['input']>;
  ts?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Gauge_Data_Sum_Fields = {
  __typename?: 'gauge_data_sum_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  battery?: Maybe<Scalars['float8']['output']>;
  tick?: Maybe<Scalars['smallint']['output']>;
};

/** update columns of table "gauge_data" */
export enum Gauge_Data_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Battery = 'battery',
  /** column name */
  Id = 'id',
  /** column name */
  SensorName = 'sensor_name',
  /** column name */
  Tick = 'tick',
  /** column name */
  Ts = 'ts',
}

export type Gauge_Data_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Gauge_Data_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gauge_Data_Set_Input>;
  /** filter the rows which have to be updated */
  where: Gauge_Data_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Gauge_Data_Var_Pop_Fields = {
  __typename?: 'gauge_data_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  tick?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Gauge_Data_Var_Samp_Fields = {
  __typename?: 'gauge_data_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  tick?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Gauge_Data_Variance_Fields = {
  __typename?: 'gauge_data_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  tick?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: 'groups';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "groups" */
export type Groups_Aggregate = {
  __typename?: 'groups_aggregate';
  aggregate?: Maybe<Groups_Aggregate_Fields>;
  nodes: Array<Groups>;
};

/** aggregate fields of "groups" */
export type Groups_Aggregate_Fields = {
  __typename?: 'groups_aggregate_fields';
  avg?: Maybe<Groups_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Groups_Max_Fields>;
  min?: Maybe<Groups_Min_Fields>;
  stddev?: Maybe<Groups_Stddev_Fields>;
  stddev_pop?: Maybe<Groups_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Groups_Stddev_Samp_Fields>;
  sum?: Maybe<Groups_Sum_Fields>;
  var_pop?: Maybe<Groups_Var_Pop_Fields>;
  var_samp?: Maybe<Groups_Var_Samp_Fields>;
  variance?: Maybe<Groups_Variance_Fields>;
};

/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Groups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Groups_Avg_Fields = {
  __typename?: 'groups_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: InputMaybe<Array<Groups_Bool_Exp>>;
  _not?: InputMaybe<Groups_Bool_Exp>;
  _or?: InputMaybe<Array<Groups_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupsPkey = 'groups_pkey',
}

/** input type for incrementing numeric columns in table "groups" */
export type Groups_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Groups_Max_Fields = {
  __typename?: 'groups_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Groups_Min_Fields = {
  __typename?: 'groups_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "groups" */
export type Groups_Mutation_Response = {
  __typename?: 'groups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Groups>;
};

/** on_conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint;
  update_columns?: Array<Groups_Update_Column>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "groups". */
export type Groups_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: groups */
export type Groups_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "groups" */
export type Groups_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Groups_Stddev_Fields = {
  __typename?: 'groups_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Groups_Stddev_Pop_Fields = {
  __typename?: 'groups_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Groups_Stddev_Samp_Fields = {
  __typename?: 'groups_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "groups" */
export type Groups_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Groups_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Groups_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Groups_Sum_Fields = {
  __typename?: 'groups_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Groups_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Groups_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Groups_Set_Input>;
  /** filter the rows which have to be updated */
  where: Groups_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Groups_Var_Pop_Fields = {
  __typename?: 'groups_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Groups_Var_Samp_Fields = {
  __typename?: 'groups_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Groups_Variance_Fields = {
  __typename?: 'groups_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "historical_data" */
export type Historical_Data = {
  __typename?: 'historical_data';
  absolute_pressure?: Maybe<Scalars['float8']['output']>;
  battery?: Maybe<Scalars['float8']['output']>;
  humidity?: Maybe<Scalars['float8']['output']>;
  id: Scalars['uuid']['output'];
  relative_pressure?: Maybe<Scalars['float8']['output']>;
  sensor_name: Scalars['String']['output'];
  temperature?: Maybe<Scalars['float8']['output']>;
  ts: Scalars['timestamp']['output'];
  zambretti?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "historical_data" */
export type Historical_Data_Aggregate = {
  __typename?: 'historical_data_aggregate';
  aggregate?: Maybe<Historical_Data_Aggregate_Fields>;
  nodes: Array<Historical_Data>;
};

/** aggregate fields of "historical_data" */
export type Historical_Data_Aggregate_Fields = {
  __typename?: 'historical_data_aggregate_fields';
  avg?: Maybe<Historical_Data_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Historical_Data_Max_Fields>;
  min?: Maybe<Historical_Data_Min_Fields>;
  stddev?: Maybe<Historical_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Historical_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Historical_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Historical_Data_Sum_Fields>;
  var_pop?: Maybe<Historical_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Historical_Data_Var_Samp_Fields>;
  variance?: Maybe<Historical_Data_Variance_Fields>;
};

/** aggregate fields of "historical_data" */
export type Historical_Data_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Historical_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Historical_Data_Avg_Fields = {
  __typename?: 'historical_data_avg_fields';
  absolute_pressure?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  relative_pressure?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "historical_data". All fields are combined with a logical 'AND'. */
export type Historical_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Historical_Data_Bool_Exp>>;
  _not?: InputMaybe<Historical_Data_Bool_Exp>;
  _or?: InputMaybe<Array<Historical_Data_Bool_Exp>>;
  absolute_pressure?: InputMaybe<Float8_Comparison_Exp>;
  battery?: InputMaybe<Float8_Comparison_Exp>;
  humidity?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  relative_pressure?: InputMaybe<Float8_Comparison_Exp>;
  sensor_name?: InputMaybe<String_Comparison_Exp>;
  temperature?: InputMaybe<Float8_Comparison_Exp>;
  ts?: InputMaybe<Timestamp_Comparison_Exp>;
  zambretti?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "historical_data" */
export enum Historical_Data_Constraint {
  /** unique or primary key constraint on columns "ts", "id" */
  HistoricalDataIdTsKey = 'historical_data_id_ts_key',
  /** unique or primary key constraint on columns "ts", "id" */
  HistoricalDataPkey = 'historical_data_pkey',
}

/** input type for incrementing numeric columns in table "historical_data" */
export type Historical_Data_Inc_Input = {
  absolute_pressure?: InputMaybe<Scalars['float8']['input']>;
  battery?: InputMaybe<Scalars['float8']['input']>;
  humidity?: InputMaybe<Scalars['float8']['input']>;
  relative_pressure?: InputMaybe<Scalars['float8']['input']>;
  temperature?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "historical_data" */
export type Historical_Data_Insert_Input = {
  absolute_pressure?: InputMaybe<Scalars['float8']['input']>;
  battery?: InputMaybe<Scalars['float8']['input']>;
  humidity?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  relative_pressure?: InputMaybe<Scalars['float8']['input']>;
  sensor_name?: InputMaybe<Scalars['String']['input']>;
  temperature?: InputMaybe<Scalars['float8']['input']>;
  ts?: InputMaybe<Scalars['timestamp']['input']>;
  zambretti?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Historical_Data_Max_Fields = {
  __typename?: 'historical_data_max_fields';
  absolute_pressure?: Maybe<Scalars['float8']['output']>;
  battery?: Maybe<Scalars['float8']['output']>;
  humidity?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  relative_pressure?: Maybe<Scalars['float8']['output']>;
  sensor_name?: Maybe<Scalars['String']['output']>;
  temperature?: Maybe<Scalars['float8']['output']>;
  ts?: Maybe<Scalars['timestamp']['output']>;
  zambretti?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Historical_Data_Min_Fields = {
  __typename?: 'historical_data_min_fields';
  absolute_pressure?: Maybe<Scalars['float8']['output']>;
  battery?: Maybe<Scalars['float8']['output']>;
  humidity?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  relative_pressure?: Maybe<Scalars['float8']['output']>;
  sensor_name?: Maybe<Scalars['String']['output']>;
  temperature?: Maybe<Scalars['float8']['output']>;
  ts?: Maybe<Scalars['timestamp']['output']>;
  zambretti?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "historical_data" */
export type Historical_Data_Mutation_Response = {
  __typename?: 'historical_data_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Historical_Data>;
};

/** on_conflict condition type for table "historical_data" */
export type Historical_Data_On_Conflict = {
  constraint: Historical_Data_Constraint;
  update_columns?: Array<Historical_Data_Update_Column>;
  where?: InputMaybe<Historical_Data_Bool_Exp>;
};

/** Ordering options when selecting data from "historical_data". */
export type Historical_Data_Order_By = {
  absolute_pressure?: InputMaybe<Order_By>;
  battery?: InputMaybe<Order_By>;
  humidity?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  relative_pressure?: InputMaybe<Order_By>;
  sensor_name?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  ts?: InputMaybe<Order_By>;
  zambretti?: InputMaybe<Order_By>;
};

/** primary key columns input for table: historical_data */
export type Historical_Data_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
  ts: Scalars['timestamp']['input'];
};

/** select columns of table "historical_data" */
export enum Historical_Data_Select_Column {
  /** column name */
  AbsolutePressure = 'absolute_pressure',
  /** column name */
  Battery = 'battery',
  /** column name */
  Humidity = 'humidity',
  /** column name */
  Id = 'id',
  /** column name */
  RelativePressure = 'relative_pressure',
  /** column name */
  SensorName = 'sensor_name',
  /** column name */
  Temperature = 'temperature',
  /** column name */
  Ts = 'ts',
  /** column name */
  Zambretti = 'zambretti',
}

/** input type for updating data in table "historical_data" */
export type Historical_Data_Set_Input = {
  absolute_pressure?: InputMaybe<Scalars['float8']['input']>;
  battery?: InputMaybe<Scalars['float8']['input']>;
  humidity?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  relative_pressure?: InputMaybe<Scalars['float8']['input']>;
  sensor_name?: InputMaybe<Scalars['String']['input']>;
  temperature?: InputMaybe<Scalars['float8']['input']>;
  ts?: InputMaybe<Scalars['timestamp']['input']>;
  zambretti?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Historical_Data_Stddev_Fields = {
  __typename?: 'historical_data_stddev_fields';
  absolute_pressure?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  relative_pressure?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Historical_Data_Stddev_Pop_Fields = {
  __typename?: 'historical_data_stddev_pop_fields';
  absolute_pressure?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  relative_pressure?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Historical_Data_Stddev_Samp_Fields = {
  __typename?: 'historical_data_stddev_samp_fields';
  absolute_pressure?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  relative_pressure?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "historical_data" */
export type Historical_Data_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Historical_Data_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Historical_Data_Stream_Cursor_Value_Input = {
  absolute_pressure?: InputMaybe<Scalars['float8']['input']>;
  battery?: InputMaybe<Scalars['float8']['input']>;
  humidity?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  relative_pressure?: InputMaybe<Scalars['float8']['input']>;
  sensor_name?: InputMaybe<Scalars['String']['input']>;
  temperature?: InputMaybe<Scalars['float8']['input']>;
  ts?: InputMaybe<Scalars['timestamp']['input']>;
  zambretti?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Historical_Data_Sum_Fields = {
  __typename?: 'historical_data_sum_fields';
  absolute_pressure?: Maybe<Scalars['float8']['output']>;
  battery?: Maybe<Scalars['float8']['output']>;
  humidity?: Maybe<Scalars['float8']['output']>;
  relative_pressure?: Maybe<Scalars['float8']['output']>;
  temperature?: Maybe<Scalars['float8']['output']>;
};

/** update columns of table "historical_data" */
export enum Historical_Data_Update_Column {
  /** column name */
  AbsolutePressure = 'absolute_pressure',
  /** column name */
  Battery = 'battery',
  /** column name */
  Humidity = 'humidity',
  /** column name */
  Id = 'id',
  /** column name */
  RelativePressure = 'relative_pressure',
  /** column name */
  SensorName = 'sensor_name',
  /** column name */
  Temperature = 'temperature',
  /** column name */
  Ts = 'ts',
  /** column name */
  Zambretti = 'zambretti',
}

export type Historical_Data_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Historical_Data_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Historical_Data_Set_Input>;
  /** filter the rows which have to be updated */
  where: Historical_Data_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Historical_Data_Var_Pop_Fields = {
  __typename?: 'historical_data_var_pop_fields';
  absolute_pressure?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  relative_pressure?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Historical_Data_Var_Samp_Fields = {
  __typename?: 'historical_data_var_samp_fields';
  absolute_pressure?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  relative_pressure?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Historical_Data_Variance_Fields = {
  __typename?: 'historical_data_variance_fields';
  absolute_pressure?: Maybe<Scalars['Float']['output']>;
  battery?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  relative_pressure?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** Import Asset File Action */
export type Import_Asset_File = {
  __typename?: 'import_asset_file';
  /** An object relationship */
  asset: Assets;
  asset_id: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  file_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};

/** Import Asset File Action */
export type Import_Asset_FileTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** Import Asset File Action */
export type Import_Asset_FileTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "import_asset_file" */
export type Import_Asset_File_Aggregate = {
  __typename?: 'import_asset_file_aggregate';
  aggregate?: Maybe<Import_Asset_File_Aggregate_Fields>;
  nodes: Array<Import_Asset_File>;
};

export type Import_Asset_File_Aggregate_Bool_Exp = {
  count?: InputMaybe<Import_Asset_File_Aggregate_Bool_Exp_Count>;
};

export type Import_Asset_File_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Import_Asset_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Import_Asset_File_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "import_asset_file" */
export type Import_Asset_File_Aggregate_Fields = {
  __typename?: 'import_asset_file_aggregate_fields';
  avg?: Maybe<Import_Asset_File_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Import_Asset_File_Max_Fields>;
  min?: Maybe<Import_Asset_File_Min_Fields>;
  stddev?: Maybe<Import_Asset_File_Stddev_Fields>;
  stddev_pop?: Maybe<Import_Asset_File_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Import_Asset_File_Stddev_Samp_Fields>;
  sum?: Maybe<Import_Asset_File_Sum_Fields>;
  var_pop?: Maybe<Import_Asset_File_Var_Pop_Fields>;
  var_samp?: Maybe<Import_Asset_File_Var_Samp_Fields>;
  variance?: Maybe<Import_Asset_File_Variance_Fields>;
};

/** aggregate fields of "import_asset_file" */
export type Import_Asset_File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Import_Asset_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "import_asset_file" */
export type Import_Asset_File_Aggregate_Order_By = {
  avg?: InputMaybe<Import_Asset_File_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Import_Asset_File_Max_Order_By>;
  min?: InputMaybe<Import_Asset_File_Min_Order_By>;
  stddev?: InputMaybe<Import_Asset_File_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Import_Asset_File_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Import_Asset_File_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Import_Asset_File_Sum_Order_By>;
  var_pop?: InputMaybe<Import_Asset_File_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Import_Asset_File_Var_Samp_Order_By>;
  variance?: InputMaybe<Import_Asset_File_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "import_asset_file" */
export type Import_Asset_File_Arr_Rel_Insert_Input = {
  data: Array<Import_Asset_File_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Import_Asset_File_On_Conflict>;
};

/** aggregate avg on columns */
export type Import_Asset_File_Avg_Fields = {
  __typename?: 'import_asset_file_avg_fields';
  asset_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "import_asset_file" */
export type Import_Asset_File_Avg_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "import_asset_file". All fields are combined with a logical 'AND'. */
export type Import_Asset_File_Bool_Exp = {
  _and?: InputMaybe<Array<Import_Asset_File_Bool_Exp>>;
  _not?: InputMaybe<Import_Asset_File_Bool_Exp>;
  _or?: InputMaybe<Array<Import_Asset_File_Bool_Exp>>;
  asset?: InputMaybe<Assets_Bool_Exp>;
  asset_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  file_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "import_asset_file" */
export enum Import_Asset_File_Constraint {
  /** unique or primary key constraint on columns "id" */
  ImportAssetFilePkey = 'import_asset_file_pkey',
}

/** input type for incrementing numeric columns in table "import_asset_file" */
export type Import_Asset_File_Inc_Input = {
  asset_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "import_asset_file" */
export type Import_Asset_File_Insert_Input = {
  asset?: InputMaybe<Assets_Obj_Rel_Insert_Input>;
  asset_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Import_Asset_File_Max_Fields = {
  __typename?: 'import_asset_file_max_fields';
  asset_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  file_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "import_asset_file" */
export type Import_Asset_File_Max_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Import_Asset_File_Min_Fields = {
  __typename?: 'import_asset_file_min_fields';
  asset_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  file_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "import_asset_file" */
export type Import_Asset_File_Min_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "import_asset_file" */
export type Import_Asset_File_Mutation_Response = {
  __typename?: 'import_asset_file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Import_Asset_File>;
};

/** on_conflict condition type for table "import_asset_file" */
export type Import_Asset_File_On_Conflict = {
  constraint: Import_Asset_File_Constraint;
  update_columns?: Array<Import_Asset_File_Update_Column>;
  where?: InputMaybe<Import_Asset_File_Bool_Exp>;
};

/** Ordering options when selecting data from "import_asset_file". */
export type Import_Asset_File_Order_By = {
  asset?: InputMaybe<Assets_Order_By>;
  asset_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: import_asset_file */
export type Import_Asset_File_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "import_asset_file" */
export enum Import_Asset_File_Select_Column {
  /** column name */
  AssetId = 'asset_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileName = 'file_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "import_asset_file" */
export type Import_Asset_File_Set_Input = {
  asset_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Import_Asset_File_Stddev_Fields = {
  __typename?: 'import_asset_file_stddev_fields';
  asset_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "import_asset_file" */
export type Import_Asset_File_Stddev_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Import_Asset_File_Stddev_Pop_Fields = {
  __typename?: 'import_asset_file_stddev_pop_fields';
  asset_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "import_asset_file" */
export type Import_Asset_File_Stddev_Pop_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Import_Asset_File_Stddev_Samp_Fields = {
  __typename?: 'import_asset_file_stddev_samp_fields';
  asset_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "import_asset_file" */
export type Import_Asset_File_Stddev_Samp_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "import_asset_file" */
export type Import_Asset_File_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Import_Asset_File_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Import_Asset_File_Stream_Cursor_Value_Input = {
  asset_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Import_Asset_File_Sum_Fields = {
  __typename?: 'import_asset_file_sum_fields';
  asset_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "import_asset_file" */
export type Import_Asset_File_Sum_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "import_asset_file" */
export enum Import_Asset_File_Update_Column {
  /** column name */
  AssetId = 'asset_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileName = 'file_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Import_Asset_File_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Import_Asset_File_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Import_Asset_File_Set_Input>;
  /** filter the rows which have to be updated */
  where: Import_Asset_File_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Import_Asset_File_Var_Pop_Fields = {
  __typename?: 'import_asset_file_var_pop_fields';
  asset_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "import_asset_file" */
export type Import_Asset_File_Var_Pop_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Import_Asset_File_Var_Samp_Fields = {
  __typename?: 'import_asset_file_var_samp_fields';
  asset_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "import_asset_file" */
export type Import_Asset_File_Var_Samp_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Import_Asset_File_Variance_Fields = {
  __typename?: 'import_asset_file_variance_fields';
  asset_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "import_asset_file" */
export type Import_Asset_File_Variance_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "labels" */
export type Labels = {
  __typename?: 'labels';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  recurring_labels: Array<Recurring_Labels>;
  /** An aggregate relationship */
  recurring_labels_aggregate: Recurring_Labels_Aggregate;
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "labels" */
export type LabelsRecurring_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

/** columns and relationships of "labels" */
export type LabelsRecurring_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

/** columns and relationships of "labels" */
export type LabelsTransaction_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** columns and relationships of "labels" */
export type LabelsTransaction_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Labels_Avg_Fields = {
  __typename?: 'labels_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "labels". All fields are combined with a logical 'AND'. */
export type Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Labels_Bool_Exp>>;
  _not?: InputMaybe<Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Labels_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  recurring_labels?: InputMaybe<Recurring_Labels_Bool_Exp>;
  recurring_labels_aggregate?: InputMaybe<Recurring_Labels_Aggregate_Bool_Exp>;
  transaction_labels?: InputMaybe<Transaction_Labels_Bool_Exp>;
  transaction_labels_aggregate?: InputMaybe<Transaction_Labels_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "labels" */
export enum Labels_Constraint {
  /** unique or primary key constraint on columns "id" */
  LabelsPkey = 'labels_pkey',
}

/** input type for incrementing numeric columns in table "labels" */
export type Labels_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "labels" */
export type Labels_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  recurring_labels?: InputMaybe<Recurring_Labels_Arr_Rel_Insert_Input>;
  transaction_labels?: InputMaybe<Transaction_Labels_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Labels_Max_Fields = {
  __typename?: 'labels_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Labels_Min_Fields = {
  __typename?: 'labels_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "labels" */
export type Labels_Mutation_Response = {
  __typename?: 'labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Labels>;
};

/** input type for inserting object relation for remote table "labels" */
export type Labels_Obj_Rel_Insert_Input = {
  data: Labels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Labels_On_Conflict>;
};

/** on_conflict condition type for table "labels" */
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
  recurring_labels_aggregate?: InputMaybe<Recurring_Labels_Aggregate_Order_By>;
  transaction_labels_aggregate?: InputMaybe<Transaction_Labels_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: labels */
export type Labels_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Labels_Stddev_Fields = {
  __typename?: 'labels_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Labels_Stddev_Pop_Fields = {
  __typename?: 'labels_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Labels_Stddev_Samp_Fields = {
  __typename?: 'labels_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "labels" */
export type Labels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Labels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Labels_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Labels_Sum_Fields = {
  __typename?: 'labels_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
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

export type Labels_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Labels_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Labels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Labels_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Labels_Var_Pop_Fields = {
  __typename?: 'labels_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Labels_Var_Samp_Fields = {
  __typename?: 'labels_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Labels_Variance_Fields = {
  __typename?: 'labels_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "liabilities" */
export type Liabilities = {
  __typename?: 'liabilities';
  /** An object relationship */
  account_info: Account_Info;
  account_no?: Maybe<Scalars['String']['output']>;
  active: Scalars['Boolean']['output'];
  alternate_name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "liabilities" */
export type Liabilities_Aggregate = {
  __typename?: 'liabilities_aggregate';
  aggregate?: Maybe<Liabilities_Aggregate_Fields>;
  nodes: Array<Liabilities>;
};

export type Liabilities_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Liabilities_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Liabilities_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Liabilities_Aggregate_Bool_Exp_Count>;
};

export type Liabilities_Aggregate_Bool_Exp_Bool_And = {
  arguments: Liabilities_Select_Column_Liabilities_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Liabilities_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Liabilities_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Liabilities_Select_Column_Liabilities_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Liabilities_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Liabilities_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Liabilities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Liabilities_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "liabilities" */
export type Liabilities_Aggregate_Fields = {
  __typename?: 'liabilities_aggregate_fields';
  avg?: Maybe<Liabilities_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "liabilities" */
export type Liabilities_Aggregate_Order_By = {
  avg?: InputMaybe<Liabilities_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Liabilities_Max_Order_By>;
  min?: InputMaybe<Liabilities_Min_Order_By>;
  stddev?: InputMaybe<Liabilities_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Liabilities_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Liabilities_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Liabilities_Sum_Order_By>;
  var_pop?: InputMaybe<Liabilities_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Liabilities_Var_Samp_Order_By>;
  variance?: InputMaybe<Liabilities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "liabilities" */
export type Liabilities_Arr_Rel_Insert_Input = {
  data: Array<Liabilities_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Liabilities_On_Conflict>;
};

/** aggregate avg on columns */
export type Liabilities_Avg_Fields = {
  __typename?: 'liabilities_avg_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "liabilities" */
export type Liabilities_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "liabilities". All fields are combined with a logical 'AND'. */
export type Liabilities_Bool_Exp = {
  _and?: InputMaybe<Array<Liabilities_Bool_Exp>>;
  _not?: InputMaybe<Liabilities_Bool_Exp>;
  _or?: InputMaybe<Array<Liabilities_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  account_no?: InputMaybe<String_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  alternate_name?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "liabilities" */
export enum Liabilities_Constraint {
  /** unique or primary key constraint on columns "id" */
  LiabiulitiesPkey = 'liabiulities_pkey',
}

/** input type for incrementing numeric columns in table "liabilities" */
export type Liabilities_Inc_Input = {
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "liabilities" */
export type Liabilities_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Liabilities_Max_Fields = {
  __typename?: 'liabilities_max_fields';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "liabilities" */
export type Liabilities_Max_Order_By = {
  account_no?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Liabilities_Min_Fields = {
  __typename?: 'liabilities_min_fields';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "liabilities" */
export type Liabilities_Min_Order_By = {
  account_no?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "liabilities" */
export type Liabilities_Mutation_Response = {
  __typename?: 'liabilities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Liabilities>;
};

/** input type for inserting object relation for remote table "liabilities" */
export type Liabilities_Obj_Rel_Insert_Input = {
  data: Liabilities_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Liabilities_On_Conflict>;
};

/** on_conflict condition type for table "liabilities" */
export type Liabilities_On_Conflict = {
  constraint: Liabilities_Constraint;
  update_columns?: Array<Liabilities_Update_Column>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

/** Ordering options when selecting data from "liabilities". */
export type Liabilities_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  account_no?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: liabilities */
export type Liabilities_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "liabilities" */
export enum Liabilities_Select_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "liabilities_aggregate_bool_exp_bool_and_arguments_columns" columns of table "liabilities" */
export enum Liabilities_Select_Column_Liabilities_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
}

/** select "liabilities_aggregate_bool_exp_bool_or_arguments_columns" columns of table "liabilities" */
export enum Liabilities_Select_Column_Liabilities_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
}

/** input type for updating data in table "liabilities" */
export type Liabilities_Set_Input = {
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Liabilities_Stddev_Fields = {
  __typename?: 'liabilities_stddev_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "liabilities" */
export type Liabilities_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Liabilities_Stddev_Pop_Fields = {
  __typename?: 'liabilities_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "liabilities" */
export type Liabilities_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Liabilities_Stddev_Samp_Fields = {
  __typename?: 'liabilities_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "liabilities" */
export type Liabilities_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "liabilities" */
export type Liabilities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Liabilities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Liabilities_Stream_Cursor_Value_Input = {
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Liabilities_Sum_Fields = {
  __typename?: 'liabilities_sum_fields';
  category_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "liabilities" */
export type Liabilities_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "liabilities" */
export enum Liabilities_Update_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Liabilities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Liabilities_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Liabilities_Set_Input>;
  /** filter the rows which have to be updated */
  where: Liabilities_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Liabilities_Var_Pop_Fields = {
  __typename?: 'liabilities_var_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "liabilities" */
export type Liabilities_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Liabilities_Var_Samp_Fields = {
  __typename?: 'liabilities_var_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "liabilities" */
export type Liabilities_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Liabilities_Variance_Fields = {
  __typename?: 'liabilities_variance_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "liabilities" */
export type Liabilities_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  /** delete data from the table: "gauge_data" */
  delete_gauge_data?: Maybe<Gauge_Data_Mutation_Response>;
  /** delete single row from the table: "gauge_data" */
  delete_gauge_data_by_pk?: Maybe<Gauge_Data>;
  /** delete data from the table: "groups" */
  delete_groups?: Maybe<Groups_Mutation_Response>;
  /** delete single row from the table: "groups" */
  delete_groups_by_pk?: Maybe<Groups>;
  /** delete data from the table: "historical_data" */
  delete_historical_data?: Maybe<Historical_Data_Mutation_Response>;
  /** delete single row from the table: "historical_data" */
  delete_historical_data_by_pk?: Maybe<Historical_Data>;
  /** delete data from the table: "import_asset_file" */
  delete_import_asset_file?: Maybe<Import_Asset_File_Mutation_Response>;
  /** delete single row from the table: "import_asset_file" */
  delete_import_asset_file_by_pk?: Maybe<Import_Asset_File>;
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
  /** delete data from the table: "recurring" */
  delete_recurring?: Maybe<Recurring_Mutation_Response>;
  /** delete single row from the table: "recurring" */
  delete_recurring_by_pk?: Maybe<Recurring>;
  /** delete data from the table: "recurring_labels" */
  delete_recurring_labels?: Maybe<Recurring_Labels_Mutation_Response>;
  /** delete single row from the table: "recurring_labels" */
  delete_recurring_labels_by_pk?: Maybe<Recurring_Labels>;
  /** delete data from the table: "revenues" */
  delete_revenues?: Maybe<Revenues_Mutation_Response>;
  /** delete single row from the table: "revenues" */
  delete_revenues_by_pk?: Maybe<Revenues>;
  /** delete data from the table: "status_data" */
  delete_status_data?: Maybe<Status_Data_Mutation_Response>;
  /** delete single row from the table: "status_data" */
  delete_status_data_by_pk?: Maybe<Status_Data>;
  /** delete data from the table: "transaction_accounts" */
  delete_transaction_accounts?: Maybe<Transaction_Accounts_Mutation_Response>;
  /** delete single row from the table: "transaction_accounts" */
  delete_transaction_accounts_by_pk?: Maybe<Transaction_Accounts>;
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
  /** insert data into the table: "gauge_data" */
  insert_gauge_data?: Maybe<Gauge_Data_Mutation_Response>;
  /** insert a single row into the table: "gauge_data" */
  insert_gauge_data_one?: Maybe<Gauge_Data>;
  /** insert data into the table: "groups" */
  insert_groups?: Maybe<Groups_Mutation_Response>;
  /** insert a single row into the table: "groups" */
  insert_groups_one?: Maybe<Groups>;
  /** insert data into the table: "historical_data" */
  insert_historical_data?: Maybe<Historical_Data_Mutation_Response>;
  /** insert a single row into the table: "historical_data" */
  insert_historical_data_one?: Maybe<Historical_Data>;
  /** insert data into the table: "import_asset_file" */
  insert_import_asset_file?: Maybe<Import_Asset_File_Mutation_Response>;
  /** insert a single row into the table: "import_asset_file" */
  insert_import_asset_file_one?: Maybe<Import_Asset_File>;
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
  /** insert data into the table: "recurring" */
  insert_recurring?: Maybe<Recurring_Mutation_Response>;
  /** insert data into the table: "recurring_labels" */
  insert_recurring_labels?: Maybe<Recurring_Labels_Mutation_Response>;
  /** insert a single row into the table: "recurring_labels" */
  insert_recurring_labels_one?: Maybe<Recurring_Labels>;
  /** insert a single row into the table: "recurring" */
  insert_recurring_one?: Maybe<Recurring>;
  /** insert data into the table: "revenues" */
  insert_revenues?: Maybe<Revenues_Mutation_Response>;
  /** insert a single row into the table: "revenues" */
  insert_revenues_one?: Maybe<Revenues>;
  /** insert data into the table: "status_data" */
  insert_status_data?: Maybe<Status_Data_Mutation_Response>;
  /** insert a single row into the table: "status_data" */
  insert_status_data_one?: Maybe<Status_Data>;
  /** insert data into the table: "transaction_accounts" */
  insert_transaction_accounts?: Maybe<Transaction_Accounts_Mutation_Response>;
  /** insert a single row into the table: "transaction_accounts" */
  insert_transaction_accounts_one?: Maybe<Transaction_Accounts>;
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
  /** update multiples rows of table: "account_info" */
  update_account_info_many?: Maybe<Array<Maybe<Account_Info_Mutation_Response>>>;
  /** update data of the table: "assets" */
  update_assets?: Maybe<Assets_Mutation_Response>;
  /** update single row of the table: "assets" */
  update_assets_by_pk?: Maybe<Assets>;
  /** update multiples rows of table: "assets" */
  update_assets_many?: Maybe<Array<Maybe<Assets_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "expenses" */
  update_expenses?: Maybe<Expenses_Mutation_Response>;
  /** update single row of the table: "expenses" */
  update_expenses_by_pk?: Maybe<Expenses>;
  /** update multiples rows of table: "expenses" */
  update_expenses_many?: Maybe<Array<Maybe<Expenses_Mutation_Response>>>;
  /** update data of the table: "gauge_data" */
  update_gauge_data?: Maybe<Gauge_Data_Mutation_Response>;
  /** update single row of the table: "gauge_data" */
  update_gauge_data_by_pk?: Maybe<Gauge_Data>;
  /** update multiples rows of table: "gauge_data" */
  update_gauge_data_many?: Maybe<Array<Maybe<Gauge_Data_Mutation_Response>>>;
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>;
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>;
  /** update multiples rows of table: "groups" */
  update_groups_many?: Maybe<Array<Maybe<Groups_Mutation_Response>>>;
  /** update data of the table: "historical_data" */
  update_historical_data?: Maybe<Historical_Data_Mutation_Response>;
  /** update single row of the table: "historical_data" */
  update_historical_data_by_pk?: Maybe<Historical_Data>;
  /** update multiples rows of table: "historical_data" */
  update_historical_data_many?: Maybe<Array<Maybe<Historical_Data_Mutation_Response>>>;
  /** update data of the table: "import_asset_file" */
  update_import_asset_file?: Maybe<Import_Asset_File_Mutation_Response>;
  /** update single row of the table: "import_asset_file" */
  update_import_asset_file_by_pk?: Maybe<Import_Asset_File>;
  /** update multiples rows of table: "import_asset_file" */
  update_import_asset_file_many?: Maybe<Array<Maybe<Import_Asset_File_Mutation_Response>>>;
  /** update data of the table: "labels" */
  update_labels?: Maybe<Labels_Mutation_Response>;
  /** update single row of the table: "labels" */
  update_labels_by_pk?: Maybe<Labels>;
  /** update multiples rows of table: "labels" */
  update_labels_many?: Maybe<Array<Maybe<Labels_Mutation_Response>>>;
  /** update data of the table: "liabilities" */
  update_liabilities?: Maybe<Liabilities_Mutation_Response>;
  /** update single row of the table: "liabilities" */
  update_liabilities_by_pk?: Maybe<Liabilities>;
  /** update multiples rows of table: "liabilities" */
  update_liabilities_many?: Maybe<Array<Maybe<Liabilities_Mutation_Response>>>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update multiples rows of table: "notifications" */
  update_notifications_many?: Maybe<Array<Maybe<Notifications_Mutation_Response>>>;
  /** update data of the table: "recurring" */
  update_recurring?: Maybe<Recurring_Mutation_Response>;
  /** update single row of the table: "recurring" */
  update_recurring_by_pk?: Maybe<Recurring>;
  /** update data of the table: "recurring_labels" */
  update_recurring_labels?: Maybe<Recurring_Labels_Mutation_Response>;
  /** update single row of the table: "recurring_labels" */
  update_recurring_labels_by_pk?: Maybe<Recurring_Labels>;
  /** update multiples rows of table: "recurring_labels" */
  update_recurring_labels_many?: Maybe<Array<Maybe<Recurring_Labels_Mutation_Response>>>;
  /** update multiples rows of table: "recurring" */
  update_recurring_many?: Maybe<Array<Maybe<Recurring_Mutation_Response>>>;
  /** update data of the table: "revenues" */
  update_revenues?: Maybe<Revenues_Mutation_Response>;
  /** update single row of the table: "revenues" */
  update_revenues_by_pk?: Maybe<Revenues>;
  /** update multiples rows of table: "revenues" */
  update_revenues_many?: Maybe<Array<Maybe<Revenues_Mutation_Response>>>;
  /** update data of the table: "status_data" */
  update_status_data?: Maybe<Status_Data_Mutation_Response>;
  /** update single row of the table: "status_data" */
  update_status_data_by_pk?: Maybe<Status_Data>;
  /** update multiples rows of table: "status_data" */
  update_status_data_many?: Maybe<Array<Maybe<Status_Data_Mutation_Response>>>;
  /** update data of the table: "transaction_accounts" */
  update_transaction_accounts?: Maybe<Transaction_Accounts_Mutation_Response>;
  /** update single row of the table: "transaction_accounts" */
  update_transaction_accounts_by_pk?: Maybe<Transaction_Accounts>;
  /** update multiples rows of table: "transaction_accounts" */
  update_transaction_accounts_many?: Maybe<Array<Maybe<Transaction_Accounts_Mutation_Response>>>;
  /** update data of the table: "transaction_attachments" */
  update_transaction_attachments?: Maybe<Transaction_Attachments_Mutation_Response>;
  /** update single row of the table: "transaction_attachments" */
  update_transaction_attachments_by_pk?: Maybe<Transaction_Attachments>;
  /** update multiples rows of table: "transaction_attachments" */
  update_transaction_attachments_many?: Maybe<Array<Maybe<Transaction_Attachments_Mutation_Response>>>;
  /** update data of the table: "transaction_labels" */
  update_transaction_labels?: Maybe<Transaction_Labels_Mutation_Response>;
  /** update single row of the table: "transaction_labels" */
  update_transaction_labels_by_pk?: Maybe<Transaction_Labels>;
  /** update multiples rows of table: "transaction_labels" */
  update_transaction_labels_many?: Maybe<Array<Maybe<Transaction_Labels_Mutation_Response>>>;
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>;
  /** update multiples rows of table: "transactions" */
  update_transactions_many?: Maybe<Array<Maybe<Transactions_Mutation_Response>>>;
  /** update data of the table: "user_settings" */
  update_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** update single row of the table: "user_settings" */
  update_user_settings_by_pk?: Maybe<User_Settings>;
  /** update multiples rows of table: "user_settings" */
  update_user_settings_many?: Maybe<Array<Maybe<User_Settings_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_Account_InfoArgs = {
  where: Account_Info_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Account_Info_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_AssetsArgs = {
  where: Assets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Assets_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ExpensesArgs = {
  where: Expenses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Expenses_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Gauge_DataArgs = {
  where: Gauge_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Gauge_Data_By_PkArgs = {
  id: Scalars['uuid']['input'];
  ts: Scalars['timestamp']['input'];
};

/** mutation root */
export type Mutation_RootDelete_GroupsArgs = {
  where: Groups_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Groups_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Historical_DataArgs = {
  where: Historical_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Historical_Data_By_PkArgs = {
  id: Scalars['uuid']['input'];
  ts: Scalars['timestamp']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Import_Asset_FileArgs = {
  where: Import_Asset_File_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Import_Asset_File_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_LabelsArgs = {
  where: Labels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Labels_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_LiabilitiesArgs = {
  where: Liabilities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Liabilities_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_RecurringArgs = {
  where: Recurring_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Recurring_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Recurring_LabelsArgs = {
  where: Recurring_Labels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Recurring_Labels_By_PkArgs = {
  label_id: Scalars['Int']['input'];
  recurring_id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_RevenuesArgs = {
  where: Revenues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Revenues_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Status_DataArgs = {
  where: Status_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Status_Data_By_PkArgs = {
  pin: Scalars['smallint']['input'];
  sensor_name: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Transaction_AccountsArgs = {
  where: Transaction_Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Transaction_Accounts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Transaction_AttachmentsArgs = {
  where: Transaction_Attachments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Transaction_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int']['input'];
  transaction_id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Transaction_LabelsArgs = {
  where: Transaction_Labels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Transaction_Labels_By_PkArgs = {
  label_id: Scalars['Int']['input'];
  transaction_id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_User_SettingsArgs = {
  where: User_Settings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Settings_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
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
export type Mutation_RootInsert_Gauge_DataArgs = {
  objects: Array<Gauge_Data_Insert_Input>;
  on_conflict?: InputMaybe<Gauge_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Gauge_Data_OneArgs = {
  object: Gauge_Data_Insert_Input;
  on_conflict?: InputMaybe<Gauge_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>;
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input;
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Historical_DataArgs = {
  objects: Array<Historical_Data_Insert_Input>;
  on_conflict?: InputMaybe<Historical_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Historical_Data_OneArgs = {
  object: Historical_Data_Insert_Input;
  on_conflict?: InputMaybe<Historical_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Import_Asset_FileArgs = {
  objects: Array<Import_Asset_File_Insert_Input>;
  on_conflict?: InputMaybe<Import_Asset_File_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Import_Asset_File_OneArgs = {
  object: Import_Asset_File_Insert_Input;
  on_conflict?: InputMaybe<Import_Asset_File_On_Conflict>;
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
export type Mutation_RootInsert_RecurringArgs = {
  objects: Array<Recurring_Insert_Input>;
  on_conflict?: InputMaybe<Recurring_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Recurring_LabelsArgs = {
  objects: Array<Recurring_Labels_Insert_Input>;
  on_conflict?: InputMaybe<Recurring_Labels_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Recurring_Labels_OneArgs = {
  object: Recurring_Labels_Insert_Input;
  on_conflict?: InputMaybe<Recurring_Labels_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Recurring_OneArgs = {
  object: Recurring_Insert_Input;
  on_conflict?: InputMaybe<Recurring_On_Conflict>;
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
export type Mutation_RootInsert_Status_DataArgs = {
  objects: Array<Status_Data_Insert_Input>;
  on_conflict?: InputMaybe<Status_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Status_Data_OneArgs = {
  object: Status_Data_Insert_Input;
  on_conflict?: InputMaybe<Status_Data_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Transaction_AccountsArgs = {
  objects: Array<Transaction_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Transaction_Accounts_OneArgs = {
  object: Transaction_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Accounts_On_Conflict>;
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
export type Mutation_RootUpdate_Account_Info_ManyArgs = {
  updates: Array<Account_Info_Updates>;
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
export type Mutation_RootUpdate_Assets_ManyArgs = {
  updates: Array<Assets_Updates>;
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
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
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
export type Mutation_RootUpdate_Expenses_ManyArgs = {
  updates: Array<Expenses_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Gauge_DataArgs = {
  _inc?: InputMaybe<Gauge_Data_Inc_Input>;
  _set?: InputMaybe<Gauge_Data_Set_Input>;
  where: Gauge_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Gauge_Data_By_PkArgs = {
  _inc?: InputMaybe<Gauge_Data_Inc_Input>;
  _set?: InputMaybe<Gauge_Data_Set_Input>;
  pk_columns: Gauge_Data_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Gauge_Data_ManyArgs = {
  updates: Array<Gauge_Data_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _inc?: InputMaybe<Groups_Inc_Input>;
  _set?: InputMaybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _inc?: InputMaybe<Groups_Inc_Input>;
  _set?: InputMaybe<Groups_Set_Input>;
  pk_columns: Groups_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Groups_ManyArgs = {
  updates: Array<Groups_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Historical_DataArgs = {
  _inc?: InputMaybe<Historical_Data_Inc_Input>;
  _set?: InputMaybe<Historical_Data_Set_Input>;
  where: Historical_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Historical_Data_By_PkArgs = {
  _inc?: InputMaybe<Historical_Data_Inc_Input>;
  _set?: InputMaybe<Historical_Data_Set_Input>;
  pk_columns: Historical_Data_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Historical_Data_ManyArgs = {
  updates: Array<Historical_Data_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Import_Asset_FileArgs = {
  _inc?: InputMaybe<Import_Asset_File_Inc_Input>;
  _set?: InputMaybe<Import_Asset_File_Set_Input>;
  where: Import_Asset_File_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Import_Asset_File_By_PkArgs = {
  _inc?: InputMaybe<Import_Asset_File_Inc_Input>;
  _set?: InputMaybe<Import_Asset_File_Set_Input>;
  pk_columns: Import_Asset_File_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Import_Asset_File_ManyArgs = {
  updates: Array<Import_Asset_File_Updates>;
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
export type Mutation_RootUpdate_Labels_ManyArgs = {
  updates: Array<Labels_Updates>;
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
export type Mutation_RootUpdate_Liabilities_ManyArgs = {
  updates: Array<Liabilities_Updates>;
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
export type Mutation_RootUpdate_Notifications_ManyArgs = {
  updates: Array<Notifications_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_RecurringArgs = {
  _inc?: InputMaybe<Recurring_Inc_Input>;
  _set?: InputMaybe<Recurring_Set_Input>;
  where: Recurring_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Recurring_By_PkArgs = {
  _inc?: InputMaybe<Recurring_Inc_Input>;
  _set?: InputMaybe<Recurring_Set_Input>;
  pk_columns: Recurring_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Recurring_LabelsArgs = {
  _inc?: InputMaybe<Recurring_Labels_Inc_Input>;
  _set?: InputMaybe<Recurring_Labels_Set_Input>;
  where: Recurring_Labels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Recurring_Labels_By_PkArgs = {
  _inc?: InputMaybe<Recurring_Labels_Inc_Input>;
  _set?: InputMaybe<Recurring_Labels_Set_Input>;
  pk_columns: Recurring_Labels_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Recurring_Labels_ManyArgs = {
  updates: Array<Recurring_Labels_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Recurring_ManyArgs = {
  updates: Array<Recurring_Updates>;
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
export type Mutation_RootUpdate_Revenues_ManyArgs = {
  updates: Array<Revenues_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Status_DataArgs = {
  _inc?: InputMaybe<Status_Data_Inc_Input>;
  _set?: InputMaybe<Status_Data_Set_Input>;
  where: Status_Data_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Status_Data_By_PkArgs = {
  _inc?: InputMaybe<Status_Data_Inc_Input>;
  _set?: InputMaybe<Status_Data_Set_Input>;
  pk_columns: Status_Data_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Status_Data_ManyArgs = {
  updates: Array<Status_Data_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_AccountsArgs = {
  _inc?: InputMaybe<Transaction_Accounts_Inc_Input>;
  _set?: InputMaybe<Transaction_Accounts_Set_Input>;
  where: Transaction_Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Accounts_Inc_Input>;
  _set?: InputMaybe<Transaction_Accounts_Set_Input>;
  pk_columns: Transaction_Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_Accounts_ManyArgs = {
  updates: Array<Transaction_Accounts_Updates>;
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
export type Mutation_RootUpdate_Transaction_Attachments_ManyArgs = {
  updates: Array<Transaction_Attachments_Updates>;
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
export type Mutation_RootUpdate_Transaction_Labels_ManyArgs = {
  updates: Array<Transaction_Labels_Updates>;
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
export type Mutation_RootUpdate_Transactions_ManyArgs = {
  updates: Array<Transactions_Updates>;
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
export type Mutation_RootUpdate_User_Settings_ManyArgs = {
  updates: Array<User_Settings_Updates>;
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

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  read_status: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_id?: Maybe<Scalars['uuid']['output']>;
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
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Notifications_Avg_Fields = {
  __typename?: 'notifications_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
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
  /** unique or primary key constraint on columns "id" */
  NotificationsPkey = 'notifications_pkey',
}

/** input type for incrementing numeric columns in table "notifications" */
export type Notifications_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  read_status?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  __typename?: 'notifications_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  __typename?: 'notifications_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on_conflict condition type for table "notifications" */
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
  id: Scalars['Int']['input'];
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  read_status?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Notifications_Stddev_Fields = {
  __typename?: 'notifications_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Notifications_Stddev_Pop_Fields = {
  __typename?: 'notifications_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Notifications_Stddev_Samp_Fields = {
  __typename?: 'notifications_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "notifications" */
export type Notifications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notifications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notifications_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  read_status?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Notifications_Sum_Fields = {
  __typename?: 'notifications_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
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

export type Notifications_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Notifications_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notifications_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notifications_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Notifications_Var_Pop_Fields = {
  __typename?: 'notifications_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Notifications_Var_Samp_Fields = {
  __typename?: 'notifications_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Notifications_Variance_Fields = {
  __typename?: 'notifications_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
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
  /** fetch data from the table: "all_active_accounts" */
  all_active_accounts: Array<All_Active_Accounts>;
  /** fetch aggregated fields from the table: "all_active_accounts" */
  all_active_accounts_aggregate: All_Active_Accounts_Aggregate;
  /** An array relationship */
  assets: Array<Assets>;
  /** An aggregate relationship */
  assets_aggregate: Assets_Aggregate;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  expenses: Array<Expenses>;
  /** An aggregate relationship */
  expenses_aggregate: Expenses_Aggregate;
  /** fetch data from the table: "expenses" using primary key columns */
  expenses_by_pk?: Maybe<Expenses>;
  /** fetch data from the table: "gauge_data" */
  gauge_data: Array<Gauge_Data>;
  /** fetch aggregated fields from the table: "gauge_data" */
  gauge_data_aggregate: Gauge_Data_Aggregate;
  /** fetch data from the table: "gauge_data" using primary key columns */
  gauge_data_by_pk?: Maybe<Gauge_Data>;
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table: "historical_data" */
  historical_data: Array<Historical_Data>;
  /** fetch aggregated fields from the table: "historical_data" */
  historical_data_aggregate: Historical_Data_Aggregate;
  /** fetch data from the table: "historical_data" using primary key columns */
  historical_data_by_pk?: Maybe<Historical_Data>;
  /** fetch data from the table: "import_asset_file" */
  import_asset_file: Array<Import_Asset_File>;
  /** fetch aggregated fields from the table: "import_asset_file" */
  import_asset_file_aggregate: Import_Asset_File_Aggregate;
  /** fetch data from the table: "import_asset_file" using primary key columns */
  import_asset_file_by_pk?: Maybe<Import_Asset_File>;
  /** fetch data from the table: "labels" */
  labels: Array<Labels>;
  /** fetch aggregated fields from the table: "labels" */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** An array relationship */
  liabilities: Array<Liabilities>;
  /** An aggregate relationship */
  liabilities_aggregate: Liabilities_Aggregate;
  /** fetch data from the table: "liabilities" using primary key columns */
  liabilities_by_pk?: Maybe<Liabilities>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "recurring" */
  recurring: Array<Recurring>;
  /** fetch aggregated fields from the table: "recurring" */
  recurring_aggregate: Recurring_Aggregate;
  /** fetch data from the table: "recurring" using primary key columns */
  recurring_by_pk?: Maybe<Recurring>;
  /** An array relationship */
  recurring_labels: Array<Recurring_Labels>;
  /** An aggregate relationship */
  recurring_labels_aggregate: Recurring_Labels_Aggregate;
  /** fetch data from the table: "recurring_labels" using primary key columns */
  recurring_labels_by_pk?: Maybe<Recurring_Labels>;
  /** An array relationship */
  revenues: Array<Revenues>;
  /** An aggregate relationship */
  revenues_aggregate: Revenues_Aggregate;
  /** fetch data from the table: "revenues" using primary key columns */
  revenues_by_pk?: Maybe<Revenues>;
  /** fetch data from the table: "status_data" */
  status_data: Array<Status_Data>;
  /** fetch aggregated fields from the table: "status_data" */
  status_data_aggregate: Status_Data_Aggregate;
  /** fetch data from the table: "status_data" using primary key columns */
  status_data_by_pk?: Maybe<Status_Data>;
  /** An array relationship */
  transaction_accounts: Array<Transaction_Accounts>;
  /** An aggregate relationship */
  transaction_accounts_aggregate: Transaction_Accounts_Aggregate;
  /** fetch data from the table: "transaction_accounts" using primary key columns */
  transaction_accounts_by_pk?: Maybe<Transaction_Accounts>;
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
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Info_Order_By>>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

export type Query_RootAccount_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Info_Order_By>>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

export type Query_RootAccount_Info_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootAll_Active_AccountsArgs = {
  distinct_on?: InputMaybe<Array<All_Active_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<All_Active_Accounts_Order_By>>;
  where?: InputMaybe<All_Active_Accounts_Bool_Exp>;
};

export type Query_RootAll_Active_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Active_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<All_Active_Accounts_Order_By>>;
  where?: InputMaybe<All_Active_Accounts_Bool_Exp>;
};

export type Query_RootAssetsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Query_RootAssets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Query_RootAssets_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Query_RootCategories_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootExpensesArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

export type Query_RootExpenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

export type Query_RootExpenses_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootGauge_DataArgs = {
  distinct_on?: InputMaybe<Array<Gauge_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gauge_Data_Order_By>>;
  where?: InputMaybe<Gauge_Data_Bool_Exp>;
};

export type Query_RootGauge_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauge_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gauge_Data_Order_By>>;
  where?: InputMaybe<Gauge_Data_Bool_Exp>;
};

export type Query_RootGauge_Data_By_PkArgs = {
  id: Scalars['uuid']['input'];
  ts: Scalars['timestamp']['input'];
};

export type Query_RootGroupsArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

export type Query_RootGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

export type Query_RootGroups_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootHistorical_DataArgs = {
  distinct_on?: InputMaybe<Array<Historical_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Historical_Data_Order_By>>;
  where?: InputMaybe<Historical_Data_Bool_Exp>;
};

export type Query_RootHistorical_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Historical_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Historical_Data_Order_By>>;
  where?: InputMaybe<Historical_Data_Bool_Exp>;
};

export type Query_RootHistorical_Data_By_PkArgs = {
  id: Scalars['uuid']['input'];
  ts: Scalars['timestamp']['input'];
};

export type Query_RootImport_Asset_FileArgs = {
  distinct_on?: InputMaybe<Array<Import_Asset_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Import_Asset_File_Order_By>>;
  where?: InputMaybe<Import_Asset_File_Bool_Exp>;
};

export type Query_RootImport_Asset_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Import_Asset_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Import_Asset_File_Order_By>>;
  where?: InputMaybe<Import_Asset_File_Bool_Exp>;
};

export type Query_RootImport_Asset_File_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootLabelsArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

export type Query_RootLabels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

export type Query_RootLabels_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootLiabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Liabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Liabilities_Order_By>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

export type Query_RootLiabilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Liabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Liabilities_Order_By>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

export type Query_RootLiabilities_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootRecurringArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Order_By>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

export type Query_RootRecurring_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Order_By>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

export type Query_RootRecurring_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootRecurring_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

export type Query_RootRecurring_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

export type Query_RootRecurring_Labels_By_PkArgs = {
  label_id: Scalars['Int']['input'];
  recurring_id: Scalars['bigint']['input'];
};

export type Query_RootRevenuesArgs = {
  distinct_on?: InputMaybe<Array<Revenues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Revenues_Order_By>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

export type Query_RootRevenues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revenues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Revenues_Order_By>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

export type Query_RootRevenues_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootStatus_DataArgs = {
  distinct_on?: InputMaybe<Array<Status_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Data_Order_By>>;
  where?: InputMaybe<Status_Data_Bool_Exp>;
};

export type Query_RootStatus_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Data_Order_By>>;
  where?: InputMaybe<Status_Data_Bool_Exp>;
};

export type Query_RootStatus_Data_By_PkArgs = {
  pin: Scalars['smallint']['input'];
  sensor_name: Scalars['String']['input'];
};

export type Query_RootTransaction_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

export type Query_RootTransaction_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

export type Query_RootTransaction_Accounts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootTransaction_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

export type Query_RootTransaction_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

export type Query_RootTransaction_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int']['input'];
  transaction_id: Scalars['bigint']['input'];
};

export type Query_RootTransaction_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

export type Query_RootTransaction_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

export type Query_RootTransaction_Labels_By_PkArgs = {
  label_id: Scalars['Int']['input'];
  transaction_id: Scalars['bigint']['input'];
};

export type Query_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Query_RootTransactions_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootUser_SettingsArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

export type Query_RootUser_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

export type Query_RootUser_Settings_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "recurring" */
export type Recurring = {
  __typename?: 'recurring';
  /** An object relationship */
  accountInfoByAccountTo: Account_Info;
  account_from: Scalars['bigint']['output'];
  /** An object relationship */
  account_info: Account_Info;
  account_to: Scalars['bigint']['output'];
  active: Scalars['Boolean']['output'];
  amount: Scalars['float8']['output'];
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  cycle_type: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  duration_type: Scalars['Int']['output'];
  id: Scalars['bigint']['output'];
  no_of_times?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  recurring_labels: Array<Recurring_Labels>;
  /** An aggregate relationship */
  recurring_labels_aggregate: Recurring_Labels_Aggregate;
  start_on: Scalars['date']['output'];
  title: Scalars['String']['output'];
  transaction_type: Scalars['Int']['output'];
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  until_date?: Maybe<Scalars['date']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "recurring" */
export type RecurringRecurring_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

/** columns and relationships of "recurring" */
export type RecurringRecurring_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

/** columns and relationships of "recurring" */
export type RecurringTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** columns and relationships of "recurring" */
export type RecurringTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "recurring" */
export type Recurring_Aggregate = {
  __typename?: 'recurring_aggregate';
  aggregate?: Maybe<Recurring_Aggregate_Fields>;
  nodes: Array<Recurring>;
};

export type Recurring_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Recurring_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Recurring_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Recurring_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Recurring_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Recurring_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Recurring_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Recurring_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Recurring_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Recurring_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Recurring_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Recurring_Aggregate_Bool_Exp_Var_Samp>;
};

export type Recurring_Aggregate_Bool_Exp_Avg = {
  arguments: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Recurring_Aggregate_Bool_Exp_Bool_And = {
  arguments: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Recurring_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Recurring_Aggregate_Bool_Exp_Corr = {
  arguments: Recurring_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Recurring_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Recurring_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Recurring_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Recurring_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Recurring_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Recurring_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Recurring_Aggregate_Bool_Exp_Max = {
  arguments: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Recurring_Aggregate_Bool_Exp_Min = {
  arguments: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Recurring_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Recurring_Aggregate_Bool_Exp_Sum = {
  arguments: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Recurring_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "recurring" */
export type Recurring_Aggregate_Fields = {
  __typename?: 'recurring_aggregate_fields';
  avg?: Maybe<Recurring_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Recurring_Max_Fields>;
  min?: Maybe<Recurring_Min_Fields>;
  stddev?: Maybe<Recurring_Stddev_Fields>;
  stddev_pop?: Maybe<Recurring_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recurring_Stddev_Samp_Fields>;
  sum?: Maybe<Recurring_Sum_Fields>;
  var_pop?: Maybe<Recurring_Var_Pop_Fields>;
  var_samp?: Maybe<Recurring_Var_Samp_Fields>;
  variance?: Maybe<Recurring_Variance_Fields>;
};

/** aggregate fields of "recurring" */
export type Recurring_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recurring_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "recurring" */
export type Recurring_Aggregate_Order_By = {
  avg?: InputMaybe<Recurring_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recurring_Max_Order_By>;
  min?: InputMaybe<Recurring_Min_Order_By>;
  stddev?: InputMaybe<Recurring_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Recurring_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Recurring_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Recurring_Sum_Order_By>;
  var_pop?: InputMaybe<Recurring_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Recurring_Var_Samp_Order_By>;
  variance?: InputMaybe<Recurring_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recurring" */
export type Recurring_Arr_Rel_Insert_Input = {
  data: Array<Recurring_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Recurring_On_Conflict>;
};

/** aggregate avg on columns */
export type Recurring_Avg_Fields = {
  __typename?: 'recurring_avg_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  cycle_type?: Maybe<Scalars['Float']['output']>;
  duration_type?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  no_of_times?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "recurring" */
export type Recurring_Avg_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recurring". All fields are combined with a logical 'AND'. */
export type Recurring_Bool_Exp = {
  _and?: InputMaybe<Array<Recurring_Bool_Exp>>;
  _not?: InputMaybe<Recurring_Bool_Exp>;
  _or?: InputMaybe<Array<Recurring_Bool_Exp>>;
  accountInfoByAccountTo?: InputMaybe<Account_Info_Bool_Exp>;
  account_from?: InputMaybe<Bigint_Comparison_Exp>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  account_to?: InputMaybe<Bigint_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cycle_type?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  duration_type?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  no_of_times?: InputMaybe<Int_Comparison_Exp>;
  recurring_labels?: InputMaybe<Recurring_Labels_Bool_Exp>;
  recurring_labels_aggregate?: InputMaybe<Recurring_Labels_Aggregate_Bool_Exp>;
  start_on?: InputMaybe<Date_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  transaction_type?: InputMaybe<Int_Comparison_Exp>;
  transactions?: InputMaybe<Transactions_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  until_date?: InputMaybe<Date_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "recurring" */
export enum Recurring_Constraint {
  /** unique or primary key constraint on columns "id" */
  RecurringPkey = 'recurring_pkey',
}

/** input type for incrementing numeric columns in table "recurring" */
export type Recurring_Inc_Input = {
  account_from?: InputMaybe<Scalars['bigint']['input']>;
  account_to?: InputMaybe<Scalars['bigint']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  cycle_type?: InputMaybe<Scalars['Int']['input']>;
  duration_type?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  no_of_times?: InputMaybe<Scalars['Int']['input']>;
  transaction_type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "recurring" */
export type Recurring_Insert_Input = {
  accountInfoByAccountTo?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_from?: InputMaybe<Scalars['bigint']['input']>;
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_to?: InputMaybe<Scalars['bigint']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cycle_type?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration_type?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  no_of_times?: InputMaybe<Scalars['Int']['input']>;
  recurring_labels?: InputMaybe<Recurring_Labels_Arr_Rel_Insert_Input>;
  start_on?: InputMaybe<Scalars['date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transaction_type?: InputMaybe<Scalars['Int']['input']>;
  transactions?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  until_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "recurring_labels" */
export type Recurring_Labels = {
  __typename?: 'recurring_labels';
  /** An object relationship */
  label: Labels;
  label_id: Scalars['Int']['output'];
  /** An object relationship */
  recurring: Recurring;
  recurring_id: Scalars['bigint']['output'];
};

/** aggregated selection of "recurring_labels" */
export type Recurring_Labels_Aggregate = {
  __typename?: 'recurring_labels_aggregate';
  aggregate?: Maybe<Recurring_Labels_Aggregate_Fields>;
  nodes: Array<Recurring_Labels>;
};

export type Recurring_Labels_Aggregate_Bool_Exp = {
  count?: InputMaybe<Recurring_Labels_Aggregate_Bool_Exp_Count>;
};

export type Recurring_Labels_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Recurring_Labels_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "recurring_labels" */
export type Recurring_Labels_Aggregate_Fields = {
  __typename?: 'recurring_labels_aggregate_fields';
  avg?: Maybe<Recurring_Labels_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Recurring_Labels_Max_Fields>;
  min?: Maybe<Recurring_Labels_Min_Fields>;
  stddev?: Maybe<Recurring_Labels_Stddev_Fields>;
  stddev_pop?: Maybe<Recurring_Labels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recurring_Labels_Stddev_Samp_Fields>;
  sum?: Maybe<Recurring_Labels_Sum_Fields>;
  var_pop?: Maybe<Recurring_Labels_Var_Pop_Fields>;
  var_samp?: Maybe<Recurring_Labels_Var_Samp_Fields>;
  variance?: Maybe<Recurring_Labels_Variance_Fields>;
};

/** aggregate fields of "recurring_labels" */
export type Recurring_Labels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "recurring_labels" */
export type Recurring_Labels_Aggregate_Order_By = {
  avg?: InputMaybe<Recurring_Labels_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recurring_Labels_Max_Order_By>;
  min?: InputMaybe<Recurring_Labels_Min_Order_By>;
  stddev?: InputMaybe<Recurring_Labels_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Recurring_Labels_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Recurring_Labels_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Recurring_Labels_Sum_Order_By>;
  var_pop?: InputMaybe<Recurring_Labels_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Recurring_Labels_Var_Samp_Order_By>;
  variance?: InputMaybe<Recurring_Labels_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recurring_labels" */
export type Recurring_Labels_Arr_Rel_Insert_Input = {
  data: Array<Recurring_Labels_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Recurring_Labels_On_Conflict>;
};

/** aggregate avg on columns */
export type Recurring_Labels_Avg_Fields = {
  __typename?: 'recurring_labels_avg_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "recurring_labels" */
export type Recurring_Labels_Avg_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recurring_labels". All fields are combined with a logical 'AND'. */
export type Recurring_Labels_Bool_Exp = {
  _and?: InputMaybe<Array<Recurring_Labels_Bool_Exp>>;
  _not?: InputMaybe<Recurring_Labels_Bool_Exp>;
  _or?: InputMaybe<Array<Recurring_Labels_Bool_Exp>>;
  label?: InputMaybe<Labels_Bool_Exp>;
  label_id?: InputMaybe<Int_Comparison_Exp>;
  recurring?: InputMaybe<Recurring_Bool_Exp>;
  recurring_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "recurring_labels" */
export enum Recurring_Labels_Constraint {
  /** unique or primary key constraint on columns "label_id", "recurring_id" */
  RecurringLabelsPkey = 'recurring_labels_pkey',
}

/** input type for incrementing numeric columns in table "recurring_labels" */
export type Recurring_Labels_Inc_Input = {
  label_id?: InputMaybe<Scalars['Int']['input']>;
  recurring_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "recurring_labels" */
export type Recurring_Labels_Insert_Input = {
  label?: InputMaybe<Labels_Obj_Rel_Insert_Input>;
  label_id?: InputMaybe<Scalars['Int']['input']>;
  recurring?: InputMaybe<Recurring_Obj_Rel_Insert_Input>;
  recurring_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Recurring_Labels_Max_Fields = {
  __typename?: 'recurring_labels_max_fields';
  label_id?: Maybe<Scalars['Int']['output']>;
  recurring_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "recurring_labels" */
export type Recurring_Labels_Max_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recurring_Labels_Min_Fields = {
  __typename?: 'recurring_labels_min_fields';
  label_id?: Maybe<Scalars['Int']['output']>;
  recurring_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "recurring_labels" */
export type Recurring_Labels_Min_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recurring_labels" */
export type Recurring_Labels_Mutation_Response = {
  __typename?: 'recurring_labels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Recurring_Labels>;
};

/** on_conflict condition type for table "recurring_labels" */
export type Recurring_Labels_On_Conflict = {
  constraint: Recurring_Labels_Constraint;
  update_columns?: Array<Recurring_Labels_Update_Column>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

/** Ordering options when selecting data from "recurring_labels". */
export type Recurring_Labels_Order_By = {
  label?: InputMaybe<Labels_Order_By>;
  label_id?: InputMaybe<Order_By>;
  recurring?: InputMaybe<Recurring_Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: recurring_labels */
export type Recurring_Labels_Pk_Columns_Input = {
  label_id: Scalars['Int']['input'];
  recurring_id: Scalars['bigint']['input'];
};

/** select columns of table "recurring_labels" */
export enum Recurring_Labels_Select_Column {
  /** column name */
  LabelId = 'label_id',
  /** column name */
  RecurringId = 'recurring_id',
}

/** input type for updating data in table "recurring_labels" */
export type Recurring_Labels_Set_Input = {
  label_id?: InputMaybe<Scalars['Int']['input']>;
  recurring_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Recurring_Labels_Stddev_Fields = {
  __typename?: 'recurring_labels_stddev_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "recurring_labels" */
export type Recurring_Labels_Stddev_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recurring_Labels_Stddev_Pop_Fields = {
  __typename?: 'recurring_labels_stddev_pop_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "recurring_labels" */
export type Recurring_Labels_Stddev_Pop_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recurring_Labels_Stddev_Samp_Fields = {
  __typename?: 'recurring_labels_stddev_samp_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "recurring_labels" */
export type Recurring_Labels_Stddev_Samp_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "recurring_labels" */
export type Recurring_Labels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recurring_Labels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recurring_Labels_Stream_Cursor_Value_Input = {
  label_id?: InputMaybe<Scalars['Int']['input']>;
  recurring_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Recurring_Labels_Sum_Fields = {
  __typename?: 'recurring_labels_sum_fields';
  label_id?: Maybe<Scalars['Int']['output']>;
  recurring_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "recurring_labels" */
export type Recurring_Labels_Sum_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** update columns of table "recurring_labels" */
export enum Recurring_Labels_Update_Column {
  /** column name */
  LabelId = 'label_id',
  /** column name */
  RecurringId = 'recurring_id',
}

export type Recurring_Labels_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Recurring_Labels_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recurring_Labels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Recurring_Labels_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Recurring_Labels_Var_Pop_Fields = {
  __typename?: 'recurring_labels_var_pop_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "recurring_labels" */
export type Recurring_Labels_Var_Pop_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recurring_Labels_Var_Samp_Fields = {
  __typename?: 'recurring_labels_var_samp_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "recurring_labels" */
export type Recurring_Labels_Var_Samp_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Recurring_Labels_Variance_Fields = {
  __typename?: 'recurring_labels_variance_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "recurring_labels" */
export type Recurring_Labels_Variance_Order_By = {
  label_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Recurring_Max_Fields = {
  __typename?: 'recurring_max_fields';
  account_from?: Maybe<Scalars['bigint']['output']>;
  account_to?: Maybe<Scalars['bigint']['output']>;
  amount?: Maybe<Scalars['float8']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  cycle_type?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration_type?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  no_of_times?: Maybe<Scalars['Int']['output']>;
  start_on?: Maybe<Scalars['date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  transaction_type?: Maybe<Scalars['Int']['output']>;
  until_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "recurring" */
export type Recurring_Max_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  start_on?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  until_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recurring_Min_Fields = {
  __typename?: 'recurring_min_fields';
  account_from?: Maybe<Scalars['bigint']['output']>;
  account_to?: Maybe<Scalars['bigint']['output']>;
  amount?: Maybe<Scalars['float8']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  cycle_type?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration_type?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  no_of_times?: Maybe<Scalars['Int']['output']>;
  start_on?: Maybe<Scalars['date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  transaction_type?: Maybe<Scalars['Int']['output']>;
  until_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "recurring" */
export type Recurring_Min_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  start_on?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  until_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recurring" */
export type Recurring_Mutation_Response = {
  __typename?: 'recurring_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Recurring>;
};

/** input type for inserting object relation for remote table "recurring" */
export type Recurring_Obj_Rel_Insert_Input = {
  data: Recurring_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Recurring_On_Conflict>;
};

/** on_conflict condition type for table "recurring" */
export type Recurring_On_Conflict = {
  constraint: Recurring_Constraint;
  update_columns?: Array<Recurring_Update_Column>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

/** Ordering options when selecting data from "recurring". */
export type Recurring_Order_By = {
  accountInfoByAccountTo?: InputMaybe<Account_Info_Order_By>;
  account_from?: InputMaybe<Order_By>;
  account_info?: InputMaybe<Account_Info_Order_By>;
  account_to?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  recurring_labels_aggregate?: InputMaybe<Recurring_Labels_Aggregate_Order_By>;
  start_on?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  until_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: recurring */
export type Recurring_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "recurring" */
export enum Recurring_Select_Column {
  /** column name */
  AccountFrom = 'account_from',
  /** column name */
  AccountTo = 'account_to',
  /** column name */
  Active = 'active',
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleType = 'cycle_type',
  /** column name */
  Description = 'description',
  /** column name */
  DurationType = 'duration_type',
  /** column name */
  Id = 'id',
  /** column name */
  NoOfTimes = 'no_of_times',
  /** column name */
  StartOn = 'start_on',
  /** column name */
  Title = 'title',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UntilDate = 'until_date',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "recurring_aggregate_bool_exp_avg_arguments_columns" columns of table "recurring" */
export enum Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "recurring_aggregate_bool_exp_bool_and_arguments_columns" columns of table "recurring" */
export enum Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
}

/** select "recurring_aggregate_bool_exp_bool_or_arguments_columns" columns of table "recurring" */
export enum Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
}

/** select "recurring_aggregate_bool_exp_corr_arguments_columns" columns of table "recurring" */
export enum Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "recurring_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "recurring" */
export enum Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "recurring_aggregate_bool_exp_max_arguments_columns" columns of table "recurring" */
export enum Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "recurring_aggregate_bool_exp_min_arguments_columns" columns of table "recurring" */
export enum Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "recurring_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "recurring" */
export enum Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "recurring_aggregate_bool_exp_sum_arguments_columns" columns of table "recurring" */
export enum Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "recurring_aggregate_bool_exp_var_samp_arguments_columns" columns of table "recurring" */
export enum Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** input type for updating data in table "recurring" */
export type Recurring_Set_Input = {
  account_from?: InputMaybe<Scalars['bigint']['input']>;
  account_to?: InputMaybe<Scalars['bigint']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cycle_type?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration_type?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  no_of_times?: InputMaybe<Scalars['Int']['input']>;
  start_on?: InputMaybe<Scalars['date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transaction_type?: InputMaybe<Scalars['Int']['input']>;
  until_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Recurring_Stddev_Fields = {
  __typename?: 'recurring_stddev_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  cycle_type?: Maybe<Scalars['Float']['output']>;
  duration_type?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  no_of_times?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "recurring" */
export type Recurring_Stddev_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recurring_Stddev_Pop_Fields = {
  __typename?: 'recurring_stddev_pop_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  cycle_type?: Maybe<Scalars['Float']['output']>;
  duration_type?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  no_of_times?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "recurring" */
export type Recurring_Stddev_Pop_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recurring_Stddev_Samp_Fields = {
  __typename?: 'recurring_stddev_samp_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  cycle_type?: Maybe<Scalars['Float']['output']>;
  duration_type?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  no_of_times?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "recurring" */
export type Recurring_Stddev_Samp_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "recurring" */
export type Recurring_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recurring_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recurring_Stream_Cursor_Value_Input = {
  account_from?: InputMaybe<Scalars['bigint']['input']>;
  account_to?: InputMaybe<Scalars['bigint']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cycle_type?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration_type?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  no_of_times?: InputMaybe<Scalars['Int']['input']>;
  start_on?: InputMaybe<Scalars['date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transaction_type?: InputMaybe<Scalars['Int']['input']>;
  until_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Recurring_Sum_Fields = {
  __typename?: 'recurring_sum_fields';
  account_from?: Maybe<Scalars['bigint']['output']>;
  account_to?: Maybe<Scalars['bigint']['output']>;
  amount?: Maybe<Scalars['float8']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  cycle_type?: Maybe<Scalars['Int']['output']>;
  duration_type?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  no_of_times?: Maybe<Scalars['Int']['output']>;
  transaction_type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "recurring" */
export type Recurring_Sum_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** update columns of table "recurring" */
export enum Recurring_Update_Column {
  /** column name */
  AccountFrom = 'account_from',
  /** column name */
  AccountTo = 'account_to',
  /** column name */
  Active = 'active',
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleType = 'cycle_type',
  /** column name */
  Description = 'description',
  /** column name */
  DurationType = 'duration_type',
  /** column name */
  Id = 'id',
  /** column name */
  NoOfTimes = 'no_of_times',
  /** column name */
  StartOn = 'start_on',
  /** column name */
  Title = 'title',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UntilDate = 'until_date',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Recurring_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Recurring_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recurring_Set_Input>;
  /** filter the rows which have to be updated */
  where: Recurring_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Recurring_Var_Pop_Fields = {
  __typename?: 'recurring_var_pop_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  cycle_type?: Maybe<Scalars['Float']['output']>;
  duration_type?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  no_of_times?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "recurring" */
export type Recurring_Var_Pop_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recurring_Var_Samp_Fields = {
  __typename?: 'recurring_var_samp_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  cycle_type?: Maybe<Scalars['Float']['output']>;
  duration_type?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  no_of_times?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "recurring" */
export type Recurring_Var_Samp_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Recurring_Variance_Fields = {
  __typename?: 'recurring_variance_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  cycle_type?: Maybe<Scalars['Float']['output']>;
  duration_type?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  no_of_times?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "recurring" */
export type Recurring_Variance_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  cycle_type?: InputMaybe<Order_By>;
  duration_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  no_of_times?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** columns and relationships of "revenues" */
export type Revenues = {
  __typename?: 'revenues';
  /** An object relationship */
  account_info: Account_Info;
  account_no?: Maybe<Scalars['String']['output']>;
  active: Scalars['Boolean']['output'];
  alternate_name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  default: Scalars['Boolean']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "revenues" */
export type Revenues_Aggregate = {
  __typename?: 'revenues_aggregate';
  aggregate?: Maybe<Revenues_Aggregate_Fields>;
  nodes: Array<Revenues>;
};

export type Revenues_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Revenues_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Revenues_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Revenues_Aggregate_Bool_Exp_Count>;
};

export type Revenues_Aggregate_Bool_Exp_Bool_And = {
  arguments: Revenues_Select_Column_Revenues_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Revenues_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Revenues_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Revenues_Select_Column_Revenues_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Revenues_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Revenues_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Revenues_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Revenues_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "revenues" */
export type Revenues_Aggregate_Fields = {
  __typename?: 'revenues_aggregate_fields';
  avg?: Maybe<Revenues_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "revenues" */
export type Revenues_Aggregate_Order_By = {
  avg?: InputMaybe<Revenues_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Revenues_Max_Order_By>;
  min?: InputMaybe<Revenues_Min_Order_By>;
  stddev?: InputMaybe<Revenues_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Revenues_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Revenues_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Revenues_Sum_Order_By>;
  var_pop?: InputMaybe<Revenues_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Revenues_Var_Samp_Order_By>;
  variance?: InputMaybe<Revenues_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "revenues" */
export type Revenues_Arr_Rel_Insert_Input = {
  data: Array<Revenues_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Revenues_On_Conflict>;
};

/** aggregate avg on columns */
export type Revenues_Avg_Fields = {
  __typename?: 'revenues_avg_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "revenues" */
export type Revenues_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "revenues". All fields are combined with a logical 'AND'. */
export type Revenues_Bool_Exp = {
  _and?: InputMaybe<Array<Revenues_Bool_Exp>>;
  _not?: InputMaybe<Revenues_Bool_Exp>;
  _or?: InputMaybe<Array<Revenues_Bool_Exp>>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  account_no?: InputMaybe<String_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  alternate_name?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  default?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "revenues" */
export enum Revenues_Constraint {
  /** unique or primary key constraint on columns "id" */
  RevenuesPkey = 'revenues_pkey',
}

/** input type for incrementing numeric columns in table "revenues" */
export type Revenues_Inc_Input = {
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "revenues" */
export type Revenues_Insert_Input = {
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Revenues_Max_Fields = {
  __typename?: 'revenues_max_fields';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "revenues" */
export type Revenues_Max_Order_By = {
  account_no?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Revenues_Min_Fields = {
  __typename?: 'revenues_min_fields';
  account_no?: Maybe<Scalars['String']['output']>;
  alternate_name?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "revenues" */
export type Revenues_Min_Order_By = {
  account_no?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "revenues" */
export type Revenues_Mutation_Response = {
  __typename?: 'revenues_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Revenues>;
};

/** input type for inserting object relation for remote table "revenues" */
export type Revenues_Obj_Rel_Insert_Input = {
  data: Revenues_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Revenues_On_Conflict>;
};

/** on_conflict condition type for table "revenues" */
export type Revenues_On_Conflict = {
  constraint: Revenues_Constraint;
  update_columns?: Array<Revenues_Update_Column>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

/** Ordering options when selecting data from "revenues". */
export type Revenues_Order_By = {
  account_info?: InputMaybe<Account_Info_Order_By>;
  account_no?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  alternate_name?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: revenues */
export type Revenues_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "revenues" */
export enum Revenues_Select_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  CategoryId = 'category_id',
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

/** select "revenues_aggregate_bool_exp_bool_and_arguments_columns" columns of table "revenues" */
export enum Revenues_Select_Column_Revenues_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Default = 'default',
}

/** select "revenues_aggregate_bool_exp_bool_or_arguments_columns" columns of table "revenues" */
export enum Revenues_Select_Column_Revenues_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Default = 'default',
}

/** input type for updating data in table "revenues" */
export type Revenues_Set_Input = {
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Revenues_Stddev_Fields = {
  __typename?: 'revenues_stddev_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "revenues" */
export type Revenues_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Revenues_Stddev_Pop_Fields = {
  __typename?: 'revenues_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "revenues" */
export type Revenues_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Revenues_Stddev_Samp_Fields = {
  __typename?: 'revenues_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "revenues" */
export type Revenues_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "revenues" */
export type Revenues_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Revenues_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Revenues_Stream_Cursor_Value_Input = {
  account_no?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alternate_name?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Revenues_Sum_Fields = {
  __typename?: 'revenues_sum_fields';
  category_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "revenues" */
export type Revenues_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "revenues" */
export enum Revenues_Update_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  Active = 'active',
  /** column name */
  AlternateName = 'alternate_name',
  /** column name */
  CategoryId = 'category_id',
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

export type Revenues_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Revenues_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Revenues_Set_Input>;
  /** filter the rows which have to be updated */
  where: Revenues_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Revenues_Var_Pop_Fields = {
  __typename?: 'revenues_var_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "revenues" */
export type Revenues_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Revenues_Var_Samp_Fields = {
  __typename?: 'revenues_var_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "revenues" */
export type Revenues_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Revenues_Variance_Fields = {
  __typename?: 'revenues_variance_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "revenues" */
export type Revenues_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

/** columns and relationships of "status_data" */
export type Status_Data = {
  __typename?: 'status_data';
  doublevalue?: Maybe<Scalars['float8']['output']>;
  pin: Scalars['smallint']['output'];
  sensor_name: Scalars['String']['output'];
  stringvalue?: Maybe<Scalars['String']['output']>;
  ts: Scalars['timestamp']['output'];
};

/** aggregated selection of "status_data" */
export type Status_Data_Aggregate = {
  __typename?: 'status_data_aggregate';
  aggregate?: Maybe<Status_Data_Aggregate_Fields>;
  nodes: Array<Status_Data>;
};

/** aggregate fields of "status_data" */
export type Status_Data_Aggregate_Fields = {
  __typename?: 'status_data_aggregate_fields';
  avg?: Maybe<Status_Data_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Status_Data_Max_Fields>;
  min?: Maybe<Status_Data_Min_Fields>;
  stddev?: Maybe<Status_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Status_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Status_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Status_Data_Sum_Fields>;
  var_pop?: Maybe<Status_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Status_Data_Var_Samp_Fields>;
  variance?: Maybe<Status_Data_Variance_Fields>;
};

/** aggregate fields of "status_data" */
export type Status_Data_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Status_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Status_Data_Avg_Fields = {
  __typename?: 'status_data_avg_fields';
  doublevalue?: Maybe<Scalars['Float']['output']>;
  pin?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "status_data". All fields are combined with a logical 'AND'. */
export type Status_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Status_Data_Bool_Exp>>;
  _not?: InputMaybe<Status_Data_Bool_Exp>;
  _or?: InputMaybe<Array<Status_Data_Bool_Exp>>;
  doublevalue?: InputMaybe<Float8_Comparison_Exp>;
  pin?: InputMaybe<Smallint_Comparison_Exp>;
  sensor_name?: InputMaybe<String_Comparison_Exp>;
  stringvalue?: InputMaybe<String_Comparison_Exp>;
  ts?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "status_data" */
export enum Status_Data_Constraint {
  /** unique or primary key constraint on columns "pin", "sensor_name" */
  StatusDataPkey = 'status_data_pkey',
  /** unique or primary key constraint on columns "pin", "sensor_name" */
  StatusDataSensorNamePinKey = 'status_data_sensor_name_pin_key',
}

/** input type for incrementing numeric columns in table "status_data" */
export type Status_Data_Inc_Input = {
  doublevalue?: InputMaybe<Scalars['float8']['input']>;
  pin?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "status_data" */
export type Status_Data_Insert_Input = {
  doublevalue?: InputMaybe<Scalars['float8']['input']>;
  pin?: InputMaybe<Scalars['smallint']['input']>;
  sensor_name?: InputMaybe<Scalars['String']['input']>;
  stringvalue?: InputMaybe<Scalars['String']['input']>;
  ts?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Status_Data_Max_Fields = {
  __typename?: 'status_data_max_fields';
  doublevalue?: Maybe<Scalars['float8']['output']>;
  pin?: Maybe<Scalars['smallint']['output']>;
  sensor_name?: Maybe<Scalars['String']['output']>;
  stringvalue?: Maybe<Scalars['String']['output']>;
  ts?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Status_Data_Min_Fields = {
  __typename?: 'status_data_min_fields';
  doublevalue?: Maybe<Scalars['float8']['output']>;
  pin?: Maybe<Scalars['smallint']['output']>;
  sensor_name?: Maybe<Scalars['String']['output']>;
  stringvalue?: Maybe<Scalars['String']['output']>;
  ts?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "status_data" */
export type Status_Data_Mutation_Response = {
  __typename?: 'status_data_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Status_Data>;
};

/** on_conflict condition type for table "status_data" */
export type Status_Data_On_Conflict = {
  constraint: Status_Data_Constraint;
  update_columns?: Array<Status_Data_Update_Column>;
  where?: InputMaybe<Status_Data_Bool_Exp>;
};

/** Ordering options when selecting data from "status_data". */
export type Status_Data_Order_By = {
  doublevalue?: InputMaybe<Order_By>;
  pin?: InputMaybe<Order_By>;
  sensor_name?: InputMaybe<Order_By>;
  stringvalue?: InputMaybe<Order_By>;
  ts?: InputMaybe<Order_By>;
};

/** primary key columns input for table: status_data */
export type Status_Data_Pk_Columns_Input = {
  pin: Scalars['smallint']['input'];
  sensor_name: Scalars['String']['input'];
};

/** select columns of table "status_data" */
export enum Status_Data_Select_Column {
  /** column name */
  Doublevalue = 'doublevalue',
  /** column name */
  Pin = 'pin',
  /** column name */
  SensorName = 'sensor_name',
  /** column name */
  Stringvalue = 'stringvalue',
  /** column name */
  Ts = 'ts',
}

/** input type for updating data in table "status_data" */
export type Status_Data_Set_Input = {
  doublevalue?: InputMaybe<Scalars['float8']['input']>;
  pin?: InputMaybe<Scalars['smallint']['input']>;
  sensor_name?: InputMaybe<Scalars['String']['input']>;
  stringvalue?: InputMaybe<Scalars['String']['input']>;
  ts?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Status_Data_Stddev_Fields = {
  __typename?: 'status_data_stddev_fields';
  doublevalue?: Maybe<Scalars['Float']['output']>;
  pin?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Status_Data_Stddev_Pop_Fields = {
  __typename?: 'status_data_stddev_pop_fields';
  doublevalue?: Maybe<Scalars['Float']['output']>;
  pin?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Status_Data_Stddev_Samp_Fields = {
  __typename?: 'status_data_stddev_samp_fields';
  doublevalue?: Maybe<Scalars['Float']['output']>;
  pin?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "status_data" */
export type Status_Data_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Status_Data_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Status_Data_Stream_Cursor_Value_Input = {
  doublevalue?: InputMaybe<Scalars['float8']['input']>;
  pin?: InputMaybe<Scalars['smallint']['input']>;
  sensor_name?: InputMaybe<Scalars['String']['input']>;
  stringvalue?: InputMaybe<Scalars['String']['input']>;
  ts?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Status_Data_Sum_Fields = {
  __typename?: 'status_data_sum_fields';
  doublevalue?: Maybe<Scalars['float8']['output']>;
  pin?: Maybe<Scalars['smallint']['output']>;
};

/** update columns of table "status_data" */
export enum Status_Data_Update_Column {
  /** column name */
  Doublevalue = 'doublevalue',
  /** column name */
  Pin = 'pin',
  /** column name */
  SensorName = 'sensor_name',
  /** column name */
  Stringvalue = 'stringvalue',
  /** column name */
  Ts = 'ts',
}

export type Status_Data_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Status_Data_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Status_Data_Set_Input>;
  /** filter the rows which have to be updated */
  where: Status_Data_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Status_Data_Var_Pop_Fields = {
  __typename?: 'status_data_var_pop_fields';
  doublevalue?: Maybe<Scalars['Float']['output']>;
  pin?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Status_Data_Var_Samp_Fields = {
  __typename?: 'status_data_var_samp_fields';
  doublevalue?: Maybe<Scalars['Float']['output']>;
  pin?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Status_Data_Variance_Fields = {
  __typename?: 'status_data_variance_fields';
  doublevalue?: Maybe<Scalars['Float']['output']>;
  pin?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account_info" */
  account_info: Array<Account_Info>;
  /** fetch aggregated fields from the table: "account_info" */
  account_info_aggregate: Account_Info_Aggregate;
  /** fetch data from the table: "account_info" using primary key columns */
  account_info_by_pk?: Maybe<Account_Info>;
  /** fetch data from the table in a streaming manner: "account_info" */
  account_info_stream: Array<Account_Info>;
  /** fetch data from the table: "all_active_accounts" */
  all_active_accounts: Array<All_Active_Accounts>;
  /** fetch aggregated fields from the table: "all_active_accounts" */
  all_active_accounts_aggregate: All_Active_Accounts_Aggregate;
  /** fetch data from the table in a streaming manner: "all_active_accounts" */
  all_active_accounts_stream: Array<All_Active_Accounts>;
  /** An array relationship */
  assets: Array<Assets>;
  /** An aggregate relationship */
  assets_aggregate: Assets_Aggregate;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** fetch data from the table in a streaming manner: "assets" */
  assets_stream: Array<Assets>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** An array relationship */
  expenses: Array<Expenses>;
  /** An aggregate relationship */
  expenses_aggregate: Expenses_Aggregate;
  /** fetch data from the table: "expenses" using primary key columns */
  expenses_by_pk?: Maybe<Expenses>;
  /** fetch data from the table in a streaming manner: "expenses" */
  expenses_stream: Array<Expenses>;
  /** fetch data from the table: "gauge_data" */
  gauge_data: Array<Gauge_Data>;
  /** fetch aggregated fields from the table: "gauge_data" */
  gauge_data_aggregate: Gauge_Data_Aggregate;
  /** fetch data from the table: "gauge_data" using primary key columns */
  gauge_data_by_pk?: Maybe<Gauge_Data>;
  /** fetch data from the table in a streaming manner: "gauge_data" */
  gauge_data_stream: Array<Gauge_Data>;
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table in a streaming manner: "groups" */
  groups_stream: Array<Groups>;
  /** fetch data from the table: "historical_data" */
  historical_data: Array<Historical_Data>;
  /** fetch aggregated fields from the table: "historical_data" */
  historical_data_aggregate: Historical_Data_Aggregate;
  /** fetch data from the table: "historical_data" using primary key columns */
  historical_data_by_pk?: Maybe<Historical_Data>;
  /** fetch data from the table in a streaming manner: "historical_data" */
  historical_data_stream: Array<Historical_Data>;
  /** fetch data from the table: "import_asset_file" */
  import_asset_file: Array<Import_Asset_File>;
  /** fetch aggregated fields from the table: "import_asset_file" */
  import_asset_file_aggregate: Import_Asset_File_Aggregate;
  /** fetch data from the table: "import_asset_file" using primary key columns */
  import_asset_file_by_pk?: Maybe<Import_Asset_File>;
  /** fetch data from the table in a streaming manner: "import_asset_file" */
  import_asset_file_stream: Array<Import_Asset_File>;
  /** fetch data from the table: "labels" */
  labels: Array<Labels>;
  /** fetch aggregated fields from the table: "labels" */
  labels_aggregate: Labels_Aggregate;
  /** fetch data from the table: "labels" using primary key columns */
  labels_by_pk?: Maybe<Labels>;
  /** fetch data from the table in a streaming manner: "labels" */
  labels_stream: Array<Labels>;
  /** An array relationship */
  liabilities: Array<Liabilities>;
  /** An aggregate relationship */
  liabilities_aggregate: Liabilities_Aggregate;
  /** fetch data from the table: "liabilities" using primary key columns */
  liabilities_by_pk?: Maybe<Liabilities>;
  /** fetch data from the table in a streaming manner: "liabilities" */
  liabilities_stream: Array<Liabilities>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table in a streaming manner: "notifications" */
  notifications_stream: Array<Notifications>;
  /** fetch data from the table: "recurring" */
  recurring: Array<Recurring>;
  /** fetch aggregated fields from the table: "recurring" */
  recurring_aggregate: Recurring_Aggregate;
  /** fetch data from the table: "recurring" using primary key columns */
  recurring_by_pk?: Maybe<Recurring>;
  /** An array relationship */
  recurring_labels: Array<Recurring_Labels>;
  /** An aggregate relationship */
  recurring_labels_aggregate: Recurring_Labels_Aggregate;
  /** fetch data from the table: "recurring_labels" using primary key columns */
  recurring_labels_by_pk?: Maybe<Recurring_Labels>;
  /** fetch data from the table in a streaming manner: "recurring_labels" */
  recurring_labels_stream: Array<Recurring_Labels>;
  /** fetch data from the table in a streaming manner: "recurring" */
  recurring_stream: Array<Recurring>;
  /** An array relationship */
  revenues: Array<Revenues>;
  /** An aggregate relationship */
  revenues_aggregate: Revenues_Aggregate;
  /** fetch data from the table: "revenues" using primary key columns */
  revenues_by_pk?: Maybe<Revenues>;
  /** fetch data from the table in a streaming manner: "revenues" */
  revenues_stream: Array<Revenues>;
  /** fetch data from the table: "status_data" */
  status_data: Array<Status_Data>;
  /** fetch aggregated fields from the table: "status_data" */
  status_data_aggregate: Status_Data_Aggregate;
  /** fetch data from the table: "status_data" using primary key columns */
  status_data_by_pk?: Maybe<Status_Data>;
  /** fetch data from the table in a streaming manner: "status_data" */
  status_data_stream: Array<Status_Data>;
  /** An array relationship */
  transaction_accounts: Array<Transaction_Accounts>;
  /** An aggregate relationship */
  transaction_accounts_aggregate: Transaction_Accounts_Aggregate;
  /** fetch data from the table: "transaction_accounts" using primary key columns */
  transaction_accounts_by_pk?: Maybe<Transaction_Accounts>;
  /** fetch data from the table in a streaming manner: "transaction_accounts" */
  transaction_accounts_stream: Array<Transaction_Accounts>;
  /** fetch data from the table: "transaction_attachments" */
  transaction_attachments: Array<Transaction_Attachments>;
  /** fetch aggregated fields from the table: "transaction_attachments" */
  transaction_attachments_aggregate: Transaction_Attachments_Aggregate;
  /** fetch data from the table: "transaction_attachments" using primary key columns */
  transaction_attachments_by_pk?: Maybe<Transaction_Attachments>;
  /** fetch data from the table in a streaming manner: "transaction_attachments" */
  transaction_attachments_stream: Array<Transaction_Attachments>;
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  /** fetch data from the table: "transaction_labels" using primary key columns */
  transaction_labels_by_pk?: Maybe<Transaction_Labels>;
  /** fetch data from the table in a streaming manner: "transaction_labels" */
  transaction_labels_stream: Array<Transaction_Labels>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table in a streaming manner: "transactions" */
  transactions_stream: Array<Transactions>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<User_Settings>;
  /** fetch data from the table in a streaming manner: "user_settings" */
  user_settings_stream: Array<User_Settings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type Subscription_RootAccount_InfoArgs = {
  distinct_on?: InputMaybe<Array<Account_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Info_Order_By>>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

export type Subscription_RootAccount_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Info_Order_By>>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

export type Subscription_RootAccount_Info_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootAccount_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Account_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Info_Bool_Exp>;
};

export type Subscription_RootAll_Active_AccountsArgs = {
  distinct_on?: InputMaybe<Array<All_Active_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<All_Active_Accounts_Order_By>>;
  where?: InputMaybe<All_Active_Accounts_Bool_Exp>;
};

export type Subscription_RootAll_Active_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Active_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<All_Active_Accounts_Order_By>>;
  where?: InputMaybe<All_Active_Accounts_Bool_Exp>;
};

export type Subscription_RootAll_Active_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<All_Active_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<All_Active_Accounts_Bool_Exp>;
};

export type Subscription_RootAssetsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Subscription_RootAssets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Subscription_RootAssets_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootAssets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Assets_Stream_Cursor_Input>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Subscription_RootExpensesArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

export type Subscription_RootExpenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

export type Subscription_RootExpenses_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootExpenses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Expenses_Stream_Cursor_Input>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

export type Subscription_RootGauge_DataArgs = {
  distinct_on?: InputMaybe<Array<Gauge_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gauge_Data_Order_By>>;
  where?: InputMaybe<Gauge_Data_Bool_Exp>;
};

export type Subscription_RootGauge_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gauge_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gauge_Data_Order_By>>;
  where?: InputMaybe<Gauge_Data_Bool_Exp>;
};

export type Subscription_RootGauge_Data_By_PkArgs = {
  id: Scalars['uuid']['input'];
  ts: Scalars['timestamp']['input'];
};

export type Subscription_RootGauge_Data_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Gauge_Data_Stream_Cursor_Input>>;
  where?: InputMaybe<Gauge_Data_Bool_Exp>;
};

export type Subscription_RootGroupsArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootGroups_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Groups_Stream_Cursor_Input>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

export type Subscription_RootHistorical_DataArgs = {
  distinct_on?: InputMaybe<Array<Historical_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Historical_Data_Order_By>>;
  where?: InputMaybe<Historical_Data_Bool_Exp>;
};

export type Subscription_RootHistorical_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Historical_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Historical_Data_Order_By>>;
  where?: InputMaybe<Historical_Data_Bool_Exp>;
};

export type Subscription_RootHistorical_Data_By_PkArgs = {
  id: Scalars['uuid']['input'];
  ts: Scalars['timestamp']['input'];
};

export type Subscription_RootHistorical_Data_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Historical_Data_Stream_Cursor_Input>>;
  where?: InputMaybe<Historical_Data_Bool_Exp>;
};

export type Subscription_RootImport_Asset_FileArgs = {
  distinct_on?: InputMaybe<Array<Import_Asset_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Import_Asset_File_Order_By>>;
  where?: InputMaybe<Import_Asset_File_Bool_Exp>;
};

export type Subscription_RootImport_Asset_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Import_Asset_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Import_Asset_File_Order_By>>;
  where?: InputMaybe<Import_Asset_File_Bool_Exp>;
};

export type Subscription_RootImport_Asset_File_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootImport_Asset_File_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Import_Asset_File_Stream_Cursor_Input>>;
  where?: InputMaybe<Import_Asset_File_Bool_Exp>;
};

export type Subscription_RootLabelsArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

export type Subscription_RootLabels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Labels_Order_By>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

export type Subscription_RootLabels_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootLabels_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Labels_Stream_Cursor_Input>>;
  where?: InputMaybe<Labels_Bool_Exp>;
};

export type Subscription_RootLiabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Liabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Liabilities_Order_By>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

export type Subscription_RootLiabilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Liabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Liabilities_Order_By>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

export type Subscription_RootLiabilities_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootLiabilities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Liabilities_Stream_Cursor_Input>>;
  where?: InputMaybe<Liabilities_Bool_Exp>;
};

export type Subscription_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootNotifications_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notifications_Stream_Cursor_Input>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Subscription_RootRecurringArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Order_By>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

export type Subscription_RootRecurring_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Order_By>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

export type Subscription_RootRecurring_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootRecurring_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

export type Subscription_RootRecurring_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recurring_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recurring_Labels_Order_By>>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

export type Subscription_RootRecurring_Labels_By_PkArgs = {
  label_id: Scalars['Int']['input'];
  recurring_id: Scalars['bigint']['input'];
};

export type Subscription_RootRecurring_Labels_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Recurring_Labels_Stream_Cursor_Input>>;
  where?: InputMaybe<Recurring_Labels_Bool_Exp>;
};

export type Subscription_RootRecurring_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Recurring_Stream_Cursor_Input>>;
  where?: InputMaybe<Recurring_Bool_Exp>;
};

export type Subscription_RootRevenuesArgs = {
  distinct_on?: InputMaybe<Array<Revenues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Revenues_Order_By>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

export type Subscription_RootRevenues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revenues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Revenues_Order_By>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

export type Subscription_RootRevenues_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootRevenues_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Revenues_Stream_Cursor_Input>>;
  where?: InputMaybe<Revenues_Bool_Exp>;
};

export type Subscription_RootStatus_DataArgs = {
  distinct_on?: InputMaybe<Array<Status_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Data_Order_By>>;
  where?: InputMaybe<Status_Data_Bool_Exp>;
};

export type Subscription_RootStatus_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Data_Order_By>>;
  where?: InputMaybe<Status_Data_Bool_Exp>;
};

export type Subscription_RootStatus_Data_By_PkArgs = {
  pin: Scalars['smallint']['input'];
  sensor_name: Scalars['String']['input'];
};

export type Subscription_RootStatus_Data_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Status_Data_Stream_Cursor_Input>>;
  where?: InputMaybe<Status_Data_Bool_Exp>;
};

export type Subscription_RootTransaction_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

export type Subscription_RootTransaction_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

export type Subscription_RootTransaction_Accounts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootTransaction_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

export type Subscription_RootTransaction_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

export type Subscription_RootTransaction_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Attachments_Order_By>>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

export type Subscription_RootTransaction_Attachments_By_PkArgs = {
  attachment_id: Scalars['Int']['input'];
  transaction_id: Scalars['bigint']['input'];
};

export type Subscription_RootTransaction_Attachments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Attachments_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Attachments_Bool_Exp>;
};

export type Subscription_RootTransaction_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

export type Subscription_RootTransaction_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

export type Subscription_RootTransaction_Labels_By_PkArgs = {
  label_id: Scalars['Int']['input'];
  transaction_id: Scalars['bigint']['input'];
};

export type Subscription_RootTransaction_Labels_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Labels_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

export type Subscription_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Subscription_RootTransactions_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootTransactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

export type Subscription_RootUser_SettingsArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

export type Subscription_RootUser_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

export type Subscription_RootUser_Settings_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
};

export type Subscription_RootUser_Settings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "transaction_accounts" */
export type Transaction_Accounts = {
  __typename?: 'transaction_accounts';
  account_id: Scalars['Int']['output'];
  /** An object relationship */
  account_info: Account_Info;
  amount: Scalars['float8']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "transaction_accounts" */
export type Transaction_Accounts_Aggregate = {
  __typename?: 'transaction_accounts_aggregate';
  aggregate?: Maybe<Transaction_Accounts_Aggregate_Fields>;
  nodes: Array<Transaction_Accounts>;
};

export type Transaction_Accounts_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp_Var_Samp>;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Avg = {
  arguments: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Corr = {
  arguments: Transaction_Accounts_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Max = {
  arguments: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Min = {
  arguments: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Sum = {
  arguments: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Accounts_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "transaction_accounts" */
export type Transaction_Accounts_Aggregate_Fields = {
  __typename?: 'transaction_accounts_aggregate_fields';
  avg?: Maybe<Transaction_Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Accounts_Max_Fields>;
  min?: Maybe<Transaction_Accounts_Min_Fields>;
  stddev?: Maybe<Transaction_Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Accounts_Sum_Fields>;
  var_pop?: Maybe<Transaction_Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Accounts_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Accounts_Variance_Fields>;
};

/** aggregate fields of "transaction_accounts" */
export type Transaction_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "transaction_accounts" */
export type Transaction_Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Accounts_Max_Order_By>;
  min?: InputMaybe<Transaction_Accounts_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction_accounts" */
export type Transaction_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Accounts_Avg_Fields = {
  __typename?: 'transaction_accounts_avg_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction_accounts". All fields are combined with a logical 'AND'. */
export type Transaction_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Accounts_Bool_Exp>>;
  account_id?: InputMaybe<Int_Comparison_Exp>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transactions_Bool_Exp>;
  transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_accounts" */
export enum Transaction_Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  TranscationAccountPkey = 'transcation_account_pkey',
}

/** input type for incrementing numeric columns in table "transaction_accounts" */
export type Transaction_Accounts_Inc_Input = {
  account_id?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "transaction_accounts" */
export type Transaction_Accounts_Insert_Input = {
  account_id?: InputMaybe<Scalars['Int']['input']>;
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Transaction_Accounts_Max_Fields = {
  __typename?: 'transaction_accounts_max_fields';
  account_id?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<Scalars['float8']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  transaction_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Accounts_Min_Fields = {
  __typename?: 'transaction_accounts_min_fields';
  account_id?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<Scalars['float8']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  transaction_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction_accounts" */
export type Transaction_Accounts_Mutation_Response = {
  __typename?: 'transaction_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Accounts>;
};

/** on_conflict condition type for table "transaction_accounts" */
export type Transaction_Accounts_On_Conflict = {
  constraint: Transaction_Accounts_Constraint;
  update_columns?: Array<Transaction_Accounts_Update_Column>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_accounts". */
export type Transaction_Accounts_Order_By = {
  account_id?: InputMaybe<Order_By>;
  account_info?: InputMaybe<Account_Info_Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transactions_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_accounts */
export type Transaction_Accounts_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "transaction_accounts" */
export enum Transaction_Accounts_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "transaction_accounts_aggregate_bool_exp_avg_arguments_columns" columns of table "transaction_accounts" */
export enum Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transaction_accounts_aggregate_bool_exp_corr_arguments_columns" columns of table "transaction_accounts" */
export enum Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transaction_accounts_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "transaction_accounts" */
export enum Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transaction_accounts_aggregate_bool_exp_max_arguments_columns" columns of table "transaction_accounts" */
export enum Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transaction_accounts_aggregate_bool_exp_min_arguments_columns" columns of table "transaction_accounts" */
export enum Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transaction_accounts_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "transaction_accounts" */
export enum Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transaction_accounts_aggregate_bool_exp_sum_arguments_columns" columns of table "transaction_accounts" */
export enum Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transaction_accounts_aggregate_bool_exp_var_samp_arguments_columns" columns of table "transaction_accounts" */
export enum Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** input type for updating data in table "transaction_accounts" */
export type Transaction_Accounts_Set_Input = {
  account_id?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Transaction_Accounts_Stddev_Fields = {
  __typename?: 'transaction_accounts_stddev_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Accounts_Stddev_Pop_Fields = {
  __typename?: 'transaction_accounts_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Accounts_Stddev_Samp_Fields = {
  __typename?: 'transaction_accounts_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction_accounts" */
export type Transaction_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Accounts_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Accounts_Sum_Fields = {
  __typename?: 'transaction_accounts_sum_fields';
  account_id?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  transaction_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** update columns of table "transaction_accounts" */
export enum Transaction_Accounts_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Transaction_Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transaction_Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Accounts_Var_Pop_Fields = {
  __typename?: 'transaction_accounts_var_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Accounts_Var_Samp_Fields = {
  __typename?: 'transaction_accounts_var_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Accounts_Variance_Fields = {
  __typename?: 'transaction_accounts_variance_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transaction_accounts" */
export type Transaction_Accounts_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "transaction_attachments" */
export type Transaction_Attachments = {
  __typename?: 'transaction_attachments';
  attachment_id: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
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
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Transaction_Attachments_Avg_Fields = {
  __typename?: 'transaction_attachments_avg_fields';
  attachment_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
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
  /** unique or primary key constraint on columns "attachment_id" */
  TransactionAttachmentsAttachmentIdKey = 'transaction_attachments_attachment_id_key',
  /** unique or primary key constraint on columns "transaction_id", "attachment_id" */
  TransactionAttachmentsPkey = 'transaction_attachments_pkey',
  /** unique or primary key constraint on columns "transaction_id" */
  TransactionAttachmentsTransactionIdKey = 'transaction_attachments_transaction_id_key',
}

/** input type for incrementing numeric columns in table "transaction_attachments" */
export type Transaction_Attachments_Inc_Input = {
  attachment_id?: InputMaybe<Scalars['Int']['input']>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "transaction_attachments" */
export type Transaction_Attachments_Insert_Input = {
  attachment_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Transaction_Attachments_Max_Fields = {
  __typename?: 'transaction_attachments_max_fields';
  attachment_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  transaction_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Transaction_Attachments_Min_Fields = {
  __typename?: 'transaction_attachments_min_fields';
  attachment_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  transaction_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "transaction_attachments" */
export type Transaction_Attachments_Mutation_Response = {
  __typename?: 'transaction_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Attachments>;
};

/** input type for inserting object relation for remote table "transaction_attachments" */
export type Transaction_Attachments_Obj_Rel_Insert_Input = {
  data: Transaction_Attachments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Attachments_On_Conflict>;
};

/** on_conflict condition type for table "transaction_attachments" */
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
  attachment_id: Scalars['Int']['input'];
  transaction_id: Scalars['bigint']['input'];
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
  attachment_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Transaction_Attachments_Stddev_Fields = {
  __typename?: 'transaction_attachments_stddev_fields';
  attachment_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Attachments_Stddev_Pop_Fields = {
  __typename?: 'transaction_attachments_stddev_pop_fields';
  attachment_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Attachments_Stddev_Samp_Fields = {
  __typename?: 'transaction_attachments_stddev_samp_fields';
  attachment_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "transaction_attachments" */
export type Transaction_Attachments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Attachments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Attachments_Stream_Cursor_Value_Input = {
  attachment_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Attachments_Sum_Fields = {
  __typename?: 'transaction_attachments_sum_fields';
  attachment_id?: Maybe<Scalars['Int']['output']>;
  transaction_id?: Maybe<Scalars['bigint']['output']>;
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

export type Transaction_Attachments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Attachments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Attachments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transaction_Attachments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Attachments_Var_Pop_Fields = {
  __typename?: 'transaction_attachments_var_pop_fields';
  attachment_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Transaction_Attachments_Var_Samp_Fields = {
  __typename?: 'transaction_attachments_var_samp_fields';
  attachment_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Transaction_Attachments_Variance_Fields = {
  __typename?: 'transaction_attachments_variance_fields';
  attachment_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "transaction_labels" */
export type Transaction_Labels = {
  __typename?: 'transaction_labels';
  /** An object relationship */
  label: Labels;
  label_id: Scalars['Int']['output'];
  /** An object relationship */
  transaction: Transactions;
  transaction_id: Scalars['bigint']['output'];
};

/** aggregated selection of "transaction_labels" */
export type Transaction_Labels_Aggregate = {
  __typename?: 'transaction_labels_aggregate';
  aggregate?: Maybe<Transaction_Labels_Aggregate_Fields>;
  nodes: Array<Transaction_Labels>;
};

export type Transaction_Labels_Aggregate_Bool_Exp = {
  count?: InputMaybe<Transaction_Labels_Aggregate_Bool_Exp_Count>;
};

export type Transaction_Labels_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Labels_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transaction_labels" */
export type Transaction_Labels_Aggregate_Fields = {
  __typename?: 'transaction_labels_aggregate_fields';
  avg?: Maybe<Transaction_Labels_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Labels_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Labels_Avg_Fields = {
  __typename?: 'transaction_labels_avg_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
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
  /** unique or primary key constraint on columns "label_id", "transaction_id" */
  TransactionLabelsPkey = 'transaction_labels_pkey',
}

/** input type for incrementing numeric columns in table "transaction_labels" */
export type Transaction_Labels_Inc_Input = {
  label_id?: InputMaybe<Scalars['Int']['input']>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "transaction_labels" */
export type Transaction_Labels_Insert_Input = {
  label?: InputMaybe<Labels_Obj_Rel_Insert_Input>;
  label_id?: InputMaybe<Scalars['Int']['input']>;
  transaction?: InputMaybe<Transactions_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Transaction_Labels_Max_Fields = {
  __typename?: 'transaction_labels_max_fields';
  label_id?: Maybe<Scalars['Int']['output']>;
  transaction_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "transaction_labels" */
export type Transaction_Labels_Max_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Labels_Min_Fields = {
  __typename?: 'transaction_labels_min_fields';
  label_id?: Maybe<Scalars['Int']['output']>;
  transaction_id?: Maybe<Scalars['bigint']['output']>;
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
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Labels>;
};

/** on_conflict condition type for table "transaction_labels" */
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
  label_id: Scalars['Int']['input'];
  transaction_id: Scalars['bigint']['input'];
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
  label_id?: InputMaybe<Scalars['Int']['input']>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Transaction_Labels_Stddev_Fields = {
  __typename?: 'transaction_labels_stddev_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transaction_labels" */
export type Transaction_Labels_Stddev_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Labels_Stddev_Pop_Fields = {
  __typename?: 'transaction_labels_stddev_pop_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transaction_labels" */
export type Transaction_Labels_Stddev_Pop_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Labels_Stddev_Samp_Fields = {
  __typename?: 'transaction_labels_stddev_samp_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transaction_labels" */
export type Transaction_Labels_Stddev_Samp_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction_labels" */
export type Transaction_Labels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Labels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Labels_Stream_Cursor_Value_Input = {
  label_id?: InputMaybe<Scalars['Int']['input']>;
  transaction_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Labels_Sum_Fields = {
  __typename?: 'transaction_labels_sum_fields';
  label_id?: Maybe<Scalars['Int']['output']>;
  transaction_id?: Maybe<Scalars['bigint']['output']>;
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

export type Transaction_Labels_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Labels_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Labels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transaction_Labels_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Labels_Var_Pop_Fields = {
  __typename?: 'transaction_labels_var_pop_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transaction_labels" */
export type Transaction_Labels_Var_Pop_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Labels_Var_Samp_Fields = {
  __typename?: 'transaction_labels_var_samp_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transaction_labels" */
export type Transaction_Labels_Var_Samp_Order_By = {
  label_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Labels_Variance_Fields = {
  __typename?: 'transaction_labels_variance_fields';
  label_id?: Maybe<Scalars['Float']['output']>;
  transaction_id?: Maybe<Scalars['Float']['output']>;
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
  accountInfoByAccountTo: Account_Info;
  account_from: Scalars['Int']['output'];
  /** An object relationship */
  account_info: Account_Info;
  account_no?: Maybe<Scalars['String']['output']>;
  account_to: Scalars['Int']['output'];
  amount: Scalars['float8']['output'];
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  client_reference?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  import_id?: Maybe<Scalars['Int']['output']>;
  mandate_reference?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  recurring?: Maybe<Recurring>;
  recurring_id?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  transaction_accounts: Array<Transaction_Accounts>;
  /** An aggregate relationship */
  transaction_accounts_aggregate: Transaction_Accounts_Aggregate;
  /** An object relationship */
  transaction_attachment?: Maybe<Transaction_Attachments>;
  transaction_date: Scalars['date']['output'];
  /** An array relationship */
  transaction_labels: Array<Transaction_Labels>;
  /** An aggregate relationship */
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  transaction_type: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "transactions" */
export type TransactionsTransaction_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsTransaction_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Accounts_Order_By>>;
  where?: InputMaybe<Transaction_Accounts_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsTransaction_LabelsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** columns and relationships of "transactions" */
export type TransactionsTransaction_Labels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Labels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Labels_Order_By>>;
  where?: InputMaybe<Transaction_Labels_Bool_Exp>;
};

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: 'transactions_aggregate';
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

export type Transactions_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Transactions_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Transactions_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Transactions_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Transactions_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Transactions_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Transactions_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Transactions_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Transactions_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Transactions_Aggregate_Bool_Exp_Var_Samp>;
};

export type Transactions_Aggregate_Bool_Exp_Avg = {
  arguments: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Corr = {
  arguments: Transactions_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Transactions_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Transactions_Aggregate_Bool_Exp_Max = {
  arguments: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Min = {
  arguments: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Sum = {
  arguments: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transactions_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'transactions_aggregate_fields';
  avg?: Maybe<Transactions_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** upsert condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  import_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Bool_Exp>>;
  accountInfoByAccountTo?: InputMaybe<Account_Info_Bool_Exp>;
  account_from?: InputMaybe<Int_Comparison_Exp>;
  account_info?: InputMaybe<Account_Info_Bool_Exp>;
  account_no?: InputMaybe<String_Comparison_Exp>;
  account_to?: InputMaybe<Int_Comparison_Exp>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  client_reference?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  import_id?: InputMaybe<Int_Comparison_Exp>;
  mandate_reference?: InputMaybe<String_Comparison_Exp>;
  recurring?: InputMaybe<Recurring_Bool_Exp>;
  recurring_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_accounts?: InputMaybe<Transaction_Accounts_Bool_Exp>;
  transaction_accounts_aggregate?: InputMaybe<Transaction_Accounts_Aggregate_Bool_Exp>;
  transaction_attachment?: InputMaybe<Transaction_Attachments_Bool_Exp>;
  transaction_date?: InputMaybe<Date_Comparison_Exp>;
  transaction_labels?: InputMaybe<Transaction_Labels_Bool_Exp>;
  transaction_labels_aggregate?: InputMaybe<Transaction_Labels_Aggregate_Bool_Exp>;
  transaction_type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionsPkey = 'transactions_pkey',
}

/** input type for incrementing numeric columns in table "transactions" */
export type Transactions_Inc_Input = {
  account_from?: InputMaybe<Scalars['Int']['input']>;
  account_to?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  import_id?: InputMaybe<Scalars['Int']['input']>;
  recurring_id?: InputMaybe<Scalars['bigint']['input']>;
  transaction_type?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  accountInfoByAccountTo?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_from?: InputMaybe<Scalars['Int']['input']>;
  account_info?: InputMaybe<Account_Info_Obj_Rel_Insert_Input>;
  account_no?: InputMaybe<Scalars['String']['input']>;
  account_to?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  client_reference?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  import_id?: InputMaybe<Scalars['Int']['input']>;
  mandate_reference?: InputMaybe<Scalars['String']['input']>;
  recurring?: InputMaybe<Recurring_Obj_Rel_Insert_Input>;
  recurring_id?: InputMaybe<Scalars['bigint']['input']>;
  transaction_accounts?: InputMaybe<Transaction_Accounts_Arr_Rel_Insert_Input>;
  transaction_attachment?: InputMaybe<Transaction_Attachments_Obj_Rel_Insert_Input>;
  transaction_date?: InputMaybe<Scalars['date']['input']>;
  transaction_labels?: InputMaybe<Transaction_Labels_Arr_Rel_Insert_Input>;
  transaction_type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields';
  account_from?: Maybe<Scalars['Int']['output']>;
  account_no?: Maybe<Scalars['String']['output']>;
  account_to?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<Scalars['float8']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  client_reference?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  import_id?: Maybe<Scalars['Int']['output']>;
  mandate_reference?: Maybe<Scalars['String']['output']>;
  recurring_id?: Maybe<Scalars['bigint']['output']>;
  transaction_date?: Maybe<Scalars['date']['output']>;
  transaction_type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_no?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  client_reference?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  mandate_reference?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields';
  account_from?: Maybe<Scalars['Int']['output']>;
  account_no?: Maybe<Scalars['String']['output']>;
  account_to?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<Scalars['float8']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  client_reference?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  import_id?: Maybe<Scalars['Int']['output']>;
  mandate_reference?: Maybe<Scalars['String']['output']>;
  recurring_id?: Maybe<Scalars['bigint']['output']>;
  transaction_date?: Maybe<Scalars['date']['output']>;
  transaction_type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_no?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  client_reference?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  mandate_reference?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** input type for inserting object relation for remote table "transactions" */
export type Transactions_Obj_Rel_Insert_Input = {
  data: Transactions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** on_conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns?: Array<Transactions_Update_Column>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "transactions". */
export type Transactions_Order_By = {
  accountInfoByAccountTo?: InputMaybe<Account_Info_Order_By>;
  account_from?: InputMaybe<Order_By>;
  account_info?: InputMaybe<Account_Info_Order_By>;
  account_no?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  client_reference?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  mandate_reference?: InputMaybe<Order_By>;
  recurring?: InputMaybe<Recurring_Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_accounts_aggregate?: InputMaybe<Transaction_Accounts_Aggregate_Order_By>;
  transaction_attachment?: InputMaybe<Transaction_Attachments_Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_labels_aggregate?: InputMaybe<Transaction_Labels_Aggregate_Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transactions */
export type Transactions_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  AccountFrom = 'account_from',
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  AccountTo = 'account_to',
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  ClientReference = 'client_reference',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImportId = 'import_id',
  /** column name */
  MandateReference = 'mandate_reference',
  /** column name */
  RecurringId = 'recurring_id',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "transactions_aggregate_bool_exp_avg_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transactions_aggregate_bool_exp_corr_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transactions_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transactions_aggregate_bool_exp_max_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transactions_aggregate_bool_exp_min_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transactions_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transactions_aggregate_bool_exp_sum_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** select "transactions_aggregate_bool_exp_var_samp_arguments_columns" columns of table "transactions" */
export enum Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  account_from?: InputMaybe<Scalars['Int']['input']>;
  account_no?: InputMaybe<Scalars['String']['input']>;
  account_to?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  client_reference?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  import_id?: InputMaybe<Scalars['Int']['input']>;
  mandate_reference?: InputMaybe<Scalars['String']['input']>;
  recurring_id?: InputMaybe<Scalars['bigint']['input']>;
  transaction_date?: InputMaybe<Scalars['date']['input']>;
  transaction_type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  import_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  import_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  import_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transactions" */
export type Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transactions_Stream_Cursor_Value_Input = {
  account_from?: InputMaybe<Scalars['Int']['input']>;
  account_no?: InputMaybe<Scalars['String']['input']>;
  account_to?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  category_id?: InputMaybe<Scalars['bigint']['input']>;
  client_reference?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  import_id?: InputMaybe<Scalars['Int']['input']>;
  mandate_reference?: InputMaybe<Scalars['String']['input']>;
  recurring_id?: InputMaybe<Scalars['bigint']['input']>;
  transaction_date?: InputMaybe<Scalars['date']['input']>;
  transaction_type?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields';
  account_from?: Maybe<Scalars['Int']['output']>;
  account_to?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<Scalars['float8']['output']>;
  category_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  import_id?: Maybe<Scalars['Int']['output']>;
  recurring_id?: Maybe<Scalars['bigint']['output']>;
  transaction_type?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  AccountFrom = 'account_from',
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  AccountTo = 'account_to',
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  ClientReference = 'client_reference',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImportId = 'import_id',
  /** column name */
  MandateReference = 'mandate_reference',
  /** column name */
  RecurringId = 'recurring_id',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  import_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  import_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields';
  account_from?: Maybe<Scalars['Float']['output']>;
  account_to?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  import_id?: Maybe<Scalars['Float']['output']>;
  recurring_id?: Maybe<Scalars['Float']['output']>;
  transaction_type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  account_from?: InputMaybe<Order_By>;
  account_to?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  import_id?: InputMaybe<Order_By>;
  recurring_id?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_settings" */
export type User_Settings = {
  __typename?: 'user_settings';
  darkMode: Scalars['Boolean']['output'];
  langKey: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
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
  count: Scalars['Int']['output'];
  max?: Maybe<User_Settings_Max_Fields>;
  min?: Maybe<User_Settings_Min_Fields>;
};

/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** unique or primary key constraint on columns "user_id" */
  UserSettingsPkey = 'user_settings_pkey',
}

/** input type for inserting data into table "user_settings" */
export type User_Settings_Insert_Input = {
  darkMode?: InputMaybe<Scalars['Boolean']['input']>;
  langKey?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Settings_Max_Fields = {
  __typename?: 'user_settings_max_fields';
  langKey?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type User_Settings_Min_Fields = {
  __typename?: 'user_settings_min_fields';
  langKey?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "user_settings" */
export type User_Settings_Mutation_Response = {
  __typename?: 'user_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Settings>;
};

/** input type for inserting object relation for remote table "user_settings" */
export type User_Settings_Obj_Rel_Insert_Input = {
  data: User_Settings_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Settings_On_Conflict>;
};

/** on_conflict condition type for table "user_settings" */
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
  user_id: Scalars['uuid']['input'];
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
  darkMode?: InputMaybe<Scalars['Boolean']['input']>;
  langKey?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_settings" */
export type User_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Settings_Stream_Cursor_Value_Input = {
  darkMode?: InputMaybe<Scalars['Boolean']['input']>;
  langKey?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
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

export type User_Settings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Settings_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Settings_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user_setting?: Maybe<User_Settings>;
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
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** unique or primary key constraint on columns "id" */
  PkA3ffb1c0c8416b9fc6f907b7433 = 'PK_a3ffb1c0c8416b9fc6f907b7433',
  /** unique or primary key constraint on columns "email" */
  Uq_97672ac88f789774dd47f7c8be3 = 'UQ_97672ac88f789774dd47f7c8be3',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_setting?: InputMaybe<User_Settings_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
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
  id: Scalars['uuid']['input'];
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
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type InsertAssetMutationVariables = Exact<{
  object: Assets_Insert_Input;
}>;

export type InsertAssetMutation = {
  __typename?: 'mutation_root';
  insert_assets_one?: { __typename?: 'assets'; id: any; name: string; created_at: string; updated_at: string } | undefined;
};

export type DeleteAssetMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type DeleteAssetMutation = { __typename?: 'mutation_root'; delete_account_info_by_pk?: { __typename?: 'account_info'; id: any } | undefined };

export type UpdateAssetMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  changes?: InputMaybe<Assets_Set_Input>;
  name: Scalars['String']['input'];
}>;

export type UpdateAssetMutation = {
  __typename?: 'mutation_root';
  update_assets_by_pk?: { __typename?: 'assets'; id: any } | undefined;
  update_account_info_by_pk?: { __typename?: 'account_info'; id: any } | undefined;
};

export type UpdateAssetStateMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  state?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateAssetStateMutation = { __typename?: 'mutation_root'; update_assets_by_pk?: { __typename?: 'assets'; active: boolean } | undefined };

export type SetAssetAsDefaultMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type SetAssetAsDefaultMutation = {
  __typename?: 'mutation_root';
  update_assets_by_pk?: { __typename?: 'assets'; active: boolean } | undefined;
  update_assets?: { __typename?: 'assets_mutation_response'; affected_rows: number } | undefined;
};

export type InsertCategoryMutationVariables = Exact<{
  object: Categories_Insert_Input;
}>;

export type InsertCategoryMutation = {
  __typename?: 'mutation_root';
  insert_categories_one?: { __typename?: 'categories'; id: any; name: string; active: boolean; created_at: string; updated_at: string } | undefined;
};

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type DeleteCategoryMutation = {
  __typename?: 'mutation_root';
  delete_categories_by_pk?: { __typename?: 'categories'; id: any; name: string } | undefined;
};

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  changes?: InputMaybe<Categories_Set_Input>;
}>;

export type UpdateCategoryMutation = { __typename?: 'mutation_root'; update_categories_by_pk?: { __typename?: 'categories'; id: any } | undefined };

export type InsertExpenseAccMutationVariables = Exact<{
  object: Expenses_Insert_Input;
}>;

export type InsertExpenseAccMutation = {
  __typename?: 'mutation_root';
  insert_expenses_one?: { __typename?: 'expenses'; id: any; name: string; account_no?: string | undefined; created_at: string; updated_at: string } | undefined;
};

export type InsertExpenseAccountsMutationVariables = Exact<{
  objects: Array<Expenses_Insert_Input> | Expenses_Insert_Input;
}>;

export type InsertExpenseAccountsMutation = {
  __typename?: 'mutation_root';
  insert_expenses?:
    | { __typename?: 'expenses_mutation_response'; affected_rows: number; returning: Array<{ __typename?: 'expenses'; id: any; name: string }> }
    | undefined;
};

export type DeleteExpenseAccMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type DeleteExpenseAccMutation = { __typename?: 'mutation_root'; delete_account_info_by_pk?: { __typename?: 'account_info'; id: any } | undefined };

export type UpdateExpenseAccMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  changes?: InputMaybe<Expenses_Set_Input>;
  name: Scalars['String']['input'];
}>;

export type UpdateExpenseAccMutation = {
  __typename?: 'mutation_root';
  update_expenses_by_pk?: { __typename?: 'expenses'; id: any } | undefined;
  update_account_info_by_pk?: { __typename?: 'account_info'; id: any } | undefined;
};

export type UpdateExpenseStateMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  state?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateExpenseStateMutation = { __typename?: 'mutation_root'; update_expenses_by_pk?: { __typename?: 'expenses'; active: boolean } | undefined };

export type InsertGroupMutationVariables = Exact<{
  object: Groups_Insert_Input;
}>;

export type InsertGroupMutation = {
  __typename?: 'mutation_root';
  insert_groups_one?: { __typename?: 'groups'; id: any; name: string; created_at: string; updated_at: string } | undefined;
};

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type DeleteGroupMutation = { __typename?: 'mutation_root'; delete_groups_by_pk?: { __typename?: 'groups'; id: any; name: string } | undefined };

export type UpdateGroupMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  changes?: InputMaybe<Groups_Set_Input>;
}>;

export type UpdateGroupMutation = { __typename?: 'mutation_root'; update_groups_by_pk?: { __typename?: 'groups'; id: any } | undefined };

export type InsertImportAssetDataMutationVariables = Exact<{
  object: Import_Asset_File_Insert_Input;
}>;

export type InsertImportAssetDataMutation = {
  __typename?: 'mutation_root';
  insert_import_asset_file_one?: { __typename?: 'import_asset_file'; id: number } | undefined;
};

export type DeleteImportAssetMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DeleteImportAssetMutation = {
  __typename?: 'mutation_root';
  delete_import_asset_file_by_pk?: { __typename?: 'import_asset_file'; id: number } | undefined;
};

export type InsertLabelMutationVariables = Exact<{
  object: Labels_Insert_Input;
}>;

export type InsertLabelMutation = {
  __typename?: 'mutation_root';
  insert_labels_one?: { __typename?: 'labels'; id: number; name: string; created_at: string; updated_at: string } | undefined;
};

export type DeleteLabelMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DeleteLabelMutation = { __typename?: 'mutation_root'; delete_labels_by_pk?: { __typename?: 'labels'; id: number; name: string } | undefined };

export type UpdateLabelMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  changes?: InputMaybe<Labels_Set_Input>;
}>;

export type UpdateLabelMutation = { __typename?: 'mutation_root'; update_labels_by_pk?: { __typename?: 'labels'; id: number } | undefined };

export type InsertLiabilityAccMutationVariables = Exact<{
  object: Liabilities_Insert_Input;
}>;

export type InsertLiabilityAccMutation = {
  __typename?: 'mutation_root';
  insert_liabilities_one?: { __typename?: 'liabilities'; id: any; name: string; created_at: string; updated_at: string } | undefined;
};

export type DeleteLiabilityAccMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type DeleteLiabilityAccMutation = { __typename?: 'mutation_root'; delete_account_info_by_pk?: { __typename?: 'account_info'; id: any } | undefined };

export type UpdateLiabilityAccMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  changes?: InputMaybe<Liabilities_Set_Input>;
  name: Scalars['String']['input'];
}>;

export type UpdateLiabilityAccMutation = {
  __typename?: 'mutation_root';
  update_liabilities_by_pk?: { __typename?: 'liabilities'; id: any } | undefined;
  update_account_info_by_pk?: { __typename?: 'account_info'; id: any } | undefined;
};

export type UpdateLiabilityStateMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  state?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateLiabilityStateMutation = {
  __typename?: 'mutation_root';
  update_liabilities_by_pk?: { __typename?: 'liabilities'; active: boolean } | undefined;
};

export type InsertRecurringMutationVariables = Exact<{
  object: Recurring_Insert_Input;
}>;

export type InsertRecurringMutation = { __typename?: 'mutation_root'; insert_recurring_one?: { __typename?: 'recurring'; id: any } | undefined };

export type DeleteRecurringMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type DeleteRecurringMutation = { __typename?: 'mutation_root'; delete_recurring_by_pk?: { __typename?: 'recurring'; id: any } | undefined };

export type InactivateRecurringMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type InactivateRecurringMutation = { __typename?: 'mutation_root'; update_recurring_by_pk?: { __typename?: 'recurring'; id: any } | undefined };

export type UpdateRecurringMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  changes?: InputMaybe<Recurring_Set_Input>;
  labels: Array<Recurring_Labels_Insert_Input> | Recurring_Labels_Insert_Input;
}>;

export type UpdateRecurringMutation = {
  __typename?: 'mutation_root';
  update_recurring_by_pk?: { __typename?: 'recurring'; id: any } | undefined;
  delete_recurring_labels?: { __typename?: 'recurring_labels_mutation_response'; affected_rows: number } | undefined;
  insert_recurring_labels?: { __typename?: 'recurring_labels_mutation_response'; affected_rows: number } | undefined;
};

export type InsertRevenueAccMutationVariables = Exact<{
  object: Revenues_Insert_Input;
}>;

export type InsertRevenueAccMutation = {
  __typename?: 'mutation_root';
  insert_revenues_one?: { __typename?: 'revenues'; id: any; name: string; created_at: string; updated_at: string } | undefined;
};

export type DeleteRevenueAccMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type DeleteRevenueAccMutation = { __typename?: 'mutation_root'; delete_account_info_by_pk?: { __typename?: 'account_info'; id: any } | undefined };

export type UpdateRevenueAccMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  changes?: InputMaybe<Revenues_Set_Input>;
  name: Scalars['String']['input'];
}>;

export type UpdateRevenueAccMutation = {
  __typename?: 'mutation_root';
  update_revenues_by_pk?: { __typename?: 'revenues'; id: any } | undefined;
  update_account_info_by_pk?: { __typename?: 'account_info'; id: any } | undefined;
};

export type UpdateRevenueStateMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  state?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateRevenueStateMutation = { __typename?: 'mutation_root'; update_revenues_by_pk?: { __typename?: 'revenues'; active: boolean } | undefined };

export type UpdateRevenueStandardMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type UpdateRevenueStandardMutation = {
  __typename?: 'mutation_root';
  update_revenues_by_pk?: { __typename?: 'revenues'; default: boolean } | undefined;
  update_revenues?: { __typename?: 'revenues_mutation_response'; affected_rows: number } | undefined;
};

export type InsertTransactionMutationVariables = Exact<{
  object: Transactions_Insert_Input;
}>;

export type InsertTransactionMutation = {
  __typename?: 'mutation_root';
  insert_transactions_one?: { __typename?: 'transactions'; id: any; amount: any } | undefined;
};

export type UpdateTransactionMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
  changes: Transactions_Set_Input;
  labels: Array<Transaction_Labels_Insert_Input> | Transaction_Labels_Insert_Input;
  accounts: Array<Transaction_Accounts_Insert_Input> | Transaction_Accounts_Insert_Input;
}>;

export type UpdateTransactionMutation = {
  __typename?: 'mutation_root';
  delete_transaction_labels?: { __typename?: 'transaction_labels_mutation_response'; affected_rows: number } | undefined;
  delete_transaction_accounts?: { __typename?: 'transaction_accounts_mutation_response'; affected_rows: number } | undefined;
  update_transactions_by_pk?: { __typename?: 'transactions'; id: any } | undefined;
  insert_transaction_labels?: { __typename?: 'transaction_labels_mutation_response'; affected_rows: number } | undefined;
  insert_transaction_accounts?: { __typename?: 'transaction_accounts_mutation_response'; affected_rows: number } | undefined;
};

export type DeleteTransactionByIdMutationVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type DeleteTransactionByIdMutation = { __typename?: 'mutation_root'; delete_transactions_by_pk?: { __typename?: 'transactions'; id: any } | undefined };

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  changes?: InputMaybe<Users_Set_Input>;
}>;

export type UpdateUserMutation = {
  __typename?: 'mutation_root';
  update_users?: { __typename?: 'users_mutation_response'; returning: Array<{ __typename?: 'users'; id: any; name?: string | undefined }> } | undefined;
};

export type UpdateUserSettingsMutationVariables = Exact<{
  object: User_Settings_Insert_Input;
}>;

export type UpdateUserSettingsMutation = {
  __typename?: 'mutation_root';
  insert_user_settings_one?: { __typename?: 'user_settings'; user_id: any; langKey: string; darkMode: boolean } | undefined;
};

export type AllActiveAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type AllActiveAccountsQuery = {
  __typename?: 'query_root';
  all_active_accounts: Array<{
    __typename?: 'all_active_accounts';
    account_no?: string | undefined;
    alternate_name?: string | undefined;
    category_id?: any | undefined;
    id?: any | undefined;
    name?: string | undefined;
    default?: boolean | undefined;
    type?: any | undefined;
  }>;
};

export type AllAssetLiabilityAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type AllAssetLiabilityAccountsQuery = {
  __typename?: 'query_root';
  all_active_accounts: Array<{
    __typename?: 'all_active_accounts';
    account_no?: string | undefined;
    alternate_name?: string | undefined;
    category_id?: any | undefined;
    id?: any | undefined;
    name?: string | undefined;
    default?: boolean | undefined;
    type?: any | undefined;
  }>;
};

export type AllAssetsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
    default: boolean;
    category_id?: any | undefined;
    category?: { __typename?: 'categories'; name: string } | undefined;
  }>;
  assets_aggregate: { __typename?: 'assets_aggregate'; aggregate?: { __typename?: 'assets_aggregate_fields'; count: number } | undefined };
};

export type ActiveAssetAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type ActiveAssetAccountsQuery = {
  __typename?: 'query_root';
  assets: Array<{
    __typename?: 'assets';
    id: any;
    name: string;
    default: boolean;
    alternate_name?: string | undefined;
    account_no?: string | undefined;
    category_id?: any | undefined;
  }>;
};

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type AllCategoriesQuery = {
  __typename?: 'query_root';
  categories: Array<{ __typename?: 'categories'; id: any; name: string; active: boolean; created_at: string; updated_at: string }>;
};

export type ActiveCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type ActiveCategoriesQuery = { __typename?: 'query_root'; categories: Array<{ __typename?: 'categories'; id: any; name: string }> };

export type AllExpenseAccountsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type AllExpenseAccountsQuery = {
  __typename?: 'query_root';
  expenses: Array<{
    __typename?: 'expenses';
    id: any;
    name: string;
    alternate_name?: string | undefined;
    account_no?: string | undefined;
    active: boolean;
    created_at: string;
    updated_at: string;
    category_id?: any | undefined;
    category?: { __typename?: 'categories'; name: string } | undefined;
  }>;
  expenses_aggregate: { __typename?: 'expenses_aggregate'; aggregate?: { __typename?: 'expenses_aggregate_fields'; count: number } | undefined };
};

export type ActiveExpenseAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type ActiveExpenseAccountsQuery = {
  __typename?: 'query_root';
  expenses: Array<{
    __typename?: 'expenses';
    id: any;
    name: string;
    alternate_name?: string | undefined;
    category_id?: any | undefined;
    account_no?: string | undefined;
    category?: { __typename?: 'categories'; name: string } | undefined;
  }>;
};

export type FetchUserQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;

export type FetchUserQuery = {
  __typename?: 'query_root';
  users_by_pk?: { __typename?: 'users'; id: any; name?: string | undefined; email?: string | undefined; image?: string | undefined } | undefined;
};

export type FetchUserSettingsQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;

export type FetchUserSettingsQuery = {
  __typename?: 'query_root';
  user_settings_by_pk?: { __typename?: 'user_settings'; user_id: any; darkMode: boolean; langKey: string } | undefined;
};

export type AllGroupsQueryVariables = Exact<{ [key: string]: never }>;

export type AllGroupsQuery = {
  __typename?: 'query_root';
  groups: Array<{ __typename?: 'groups'; id: any; name: string; created_at: string; updated_at: string }>;
};

export type Import_AssetQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type Import_AssetQuery = {
  __typename?: 'query_root';
  import_asset_file: Array<{
    __typename?: 'import_asset_file';
    id: number;
    file_name?: string | undefined;
    created_at: string;
    updated_at: string;
    asset: { __typename?: 'assets'; name: string };
  }>;
  import_asset_file_aggregate: {
    __typename?: 'import_asset_file_aggregate';
    aggregate?: { __typename?: 'import_asset_file_aggregate_fields'; count: number } | undefined;
  };
};

export type AllLabelsQueryVariables = Exact<{ [key: string]: never }>;

export type AllLabelsQuery = {
  __typename?: 'query_root';
  labels: Array<{ __typename?: 'labels'; id: number; name: string; created_at: string; updated_at: string }>;
};

export type AllLiabilityAccountsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
    category_id?: any | undefined;
    alternate_name?: string | undefined;
    account_no?: string | undefined;
    category?: { __typename?: 'categories'; name: string } | undefined;
  }>;
  liabilities_aggregate: { __typename?: 'liabilities_aggregate'; aggregate?: { __typename?: 'liabilities_aggregate_fields'; count: number } | undefined };
};

export type ActiveLiabilityAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type ActiveLiabilityAccountsQuery = {
  __typename?: 'query_root';
  liabilities: Array<{ __typename?: 'liabilities'; id: any; name: string; active: boolean; created_at: string; updated_at: string }>;
};

export type AllRevenueAccountsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
    alternate_name?: string | undefined;
    account_no?: string | undefined;
    category_id?: any | undefined;
    category?: { __typename?: 'categories'; name: string } | undefined;
  }>;
  revenues_aggregate: { __typename?: 'revenues_aggregate'; aggregate?: { __typename?: 'revenues_aggregate_fields'; count: number } | undefined };
};

export type ActiveRevenueAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type ActiveRevenueAccountsQuery = {
  __typename?: 'query_root';
  revenues: Array<{ __typename?: 'revenues'; id: any; name: string; default: boolean; category_id?: any | undefined }>;
};

export type RecurringTransactionsQueryVariables = Exact<{
  recurringId: Scalars['bigint']['input'];
}>;

export type RecurringTransactionsQuery = {
  __typename?: 'query_root';
  recurring_by_pk?:
    | {
        __typename?: 'recurring';
        active: boolean;
        amount: any;
        category_id?: any | undefined;
        created_at: string;
        cycle_type: number;
        description?: string | undefined;
        duration_type: number;
        no_of_times?: number | undefined;
        start_on: any;
        title: string;
        transaction_type: number;
        until_date?: any | undefined;
        updated_at: string;
      }
    | undefined;
  transactions: Array<{
    __typename?: 'transactions';
    id: any;
    amount: any;
    created_at: string;
    transaction_date: any;
    updated_at: string;
    description?: string | undefined;
    recurring_id?: any | undefined;
    category_id?: any | undefined;
    account_from: number;
    account_to: number;
    transaction_type: number;
    transaction_labels: Array<{ __typename?: 'transaction_labels'; label: { __typename?: 'labels'; id: number; name: string } }>;
  }>;
  transactions_aggregate: {
    __typename?: 'transactions_aggregate';
    aggregate?:
      | { __typename?: 'transactions_aggregate_fields'; count: number; sum?: { __typename?: 'transactions_sum_fields'; amount?: any | undefined } | undefined }
      | undefined;
  };
};

export type GetTransactionByIdQueryVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;

export type GetTransactionByIdQuery = {
  __typename?: 'query_root';
  transactions_by_pk?:
    | {
        __typename?: 'transactions';
        amount: any;
        category_id?: any | undefined;
        created_at: string;
        description?: string | undefined;
        id: any;
        recurring_id?: any | undefined;
        transaction_date: any;
        updated_at: string;
      }
    | undefined;
};

export type FetchLabelsSubscriptionVariables = Exact<{ [key: string]: never }>;

export type FetchLabelsSubscription = {
  __typename?: 'subscription_root';
  labels: Array<{ __typename?: 'labels'; id: number; name: string; created_at: string; updated_at: string }>;
};

export type RecurringSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type RecurringSubscription = {
  __typename?: 'subscription_root';
  recurring: Array<{
    __typename?: 'recurring';
    id: any;
    title: string;
    created_at: string;
    updated_at: string;
    cycle_type: number;
    duration_type: number;
    amount: any;
    start_on: any;
    transaction_type: number;
    account_from: any;
    account_to: any;
    category_id?: any | undefined;
    description?: string | undefined;
    until_date?: any | undefined;
    no_of_times?: number | undefined;
    active: boolean;
    recurring_labels: Array<{ __typename?: 'recurring_labels'; label_id: number }>;
    accountInfoByAccountTo: { __typename?: 'account_info'; name?: string | undefined };
    account_info: { __typename?: 'account_info'; name?: string | undefined };
    transactions_aggregate: {
      __typename?: 'transactions_aggregate';
      aggregate?:
        | { __typename?: 'transactions_aggregate_fields'; sum?: { __typename?: 'transactions_sum_fields'; amount?: any | undefined } | undefined }
        | undefined;
    };
  }>;
};

export type RecurringAggregateSubscriptionVariables = Exact<{ [key: string]: never }>;

export type RecurringAggregateSubscription = {
  __typename?: 'subscription_root';
  recurring_aggregate: { __typename?: 'recurring_aggregate'; aggregate?: { __typename?: 'recurring_aggregate_fields'; count: number } | undefined };
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
export type InsertAssetMutationFn = Apollo.MutationFunction<InsertAssetMutation, InsertAssetMutationVariables>;
export type InsertAssetComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertAssetMutation, InsertAssetMutationVariables>, 'mutation'>;

export const InsertAssetComponent = (props: InsertAssetComponentProps) => (
  <ApolloReactComponents.Mutation<InsertAssetMutation, InsertAssetMutationVariables> mutation={InsertAssetDocument} {...props} />
);

export type InsertAssetProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertAssetMutation, InsertAssetMutationVariables>;
} & TChildProps;
export function withInsertAsset<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, InsertAssetMutation, InsertAssetMutationVariables, InsertAssetProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withMutation<TProps, InsertAssetMutation, InsertAssetMutationVariables, InsertAssetProps<TChildProps, TDataName>>(InsertAssetDocument, {
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
export function useInsertAssetMutation(baseOptions?: Apollo.MutationHookOptions<InsertAssetMutation, InsertAssetMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertAssetMutation, InsertAssetMutationVariables>(InsertAssetDocument, options);
}
export type InsertAssetMutationHookResult = ReturnType<typeof useInsertAssetMutation>;
export type InsertAssetMutationResult = Apollo.MutationResult<InsertAssetMutation>;
export type InsertAssetMutationOptions = Apollo.BaseMutationOptions<InsertAssetMutation, InsertAssetMutationVariables>;
export const DeleteAssetDocument = gql`
  mutation deleteAsset($id: bigint!) {
    delete_account_info_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteAssetMutationFn = Apollo.MutationFunction<DeleteAssetMutation, DeleteAssetMutationVariables>;
export type DeleteAssetComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAssetMutation, DeleteAssetMutationVariables>, 'mutation'>;

export const DeleteAssetComponent = (props: DeleteAssetComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteAssetMutation, DeleteAssetMutationVariables> mutation={DeleteAssetDocument} {...props} />
);

export type DeleteAssetProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteAssetMutation, DeleteAssetMutationVariables>;
} & TChildProps;
export function withDeleteAsset<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, DeleteAssetMutation, DeleteAssetMutationVariables, DeleteAssetProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withMutation<TProps, DeleteAssetMutation, DeleteAssetMutationVariables, DeleteAssetProps<TChildProps, TDataName>>(DeleteAssetDocument, {
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
export function useDeleteAssetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAssetMutation, DeleteAssetMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteAssetMutation, DeleteAssetMutationVariables>(DeleteAssetDocument, options);
}
export type DeleteAssetMutationHookResult = ReturnType<typeof useDeleteAssetMutation>;
export type DeleteAssetMutationResult = Apollo.MutationResult<DeleteAssetMutation>;
export type DeleteAssetMutationOptions = Apollo.BaseMutationOptions<DeleteAssetMutation, DeleteAssetMutationVariables>;
export const UpdateAssetDocument = gql`
  mutation updateAsset($id: bigint!, $changes: assets_set_input, $name: String!) {
    update_assets_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
    update_account_info_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
    }
  }
`;
export type UpdateAssetMutationFn = Apollo.MutationFunction<UpdateAssetMutation, UpdateAssetMutationVariables>;
export type UpdateAssetComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAssetMutation, UpdateAssetMutationVariables>, 'mutation'>;

export const UpdateAssetComponent = (props: UpdateAssetComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateAssetMutation, UpdateAssetMutationVariables> mutation={UpdateAssetDocument} {...props} />
);

export type UpdateAssetProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateAssetMutation, UpdateAssetMutationVariables>;
} & TChildProps;
export function withUpdateAsset<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, UpdateAssetMutation, UpdateAssetMutationVariables, UpdateAssetProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withMutation<TProps, UpdateAssetMutation, UpdateAssetMutationVariables, UpdateAssetProps<TChildProps, TDataName>>(UpdateAssetDocument, {
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
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateAssetMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAssetMutation, UpdateAssetMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateAssetMutation, UpdateAssetMutationVariables>(UpdateAssetDocument, options);
}
export type UpdateAssetMutationHookResult = ReturnType<typeof useUpdateAssetMutation>;
export type UpdateAssetMutationResult = Apollo.MutationResult<UpdateAssetMutation>;
export type UpdateAssetMutationOptions = Apollo.BaseMutationOptions<UpdateAssetMutation, UpdateAssetMutationVariables>;
export const UpdateAssetStateDocument = gql`
  mutation updateAssetState($id: bigint!, $state: Boolean) {
    update_assets_by_pk(pk_columns: { id: $id }, _set: { active: $state }) {
      active
    }
  }
`;
export type UpdateAssetStateMutationFn = Apollo.MutationFunction<UpdateAssetStateMutation, UpdateAssetStateMutationVariables>;
export type UpdateAssetStateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateAssetStateMutation, UpdateAssetStateMutationVariables>,
  'mutation'
>;

export const UpdateAssetStateComponent = (props: UpdateAssetStateComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateAssetStateMutation, UpdateAssetStateMutationVariables> mutation={UpdateAssetStateDocument} {...props} />
);

export type UpdateAssetStateProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateAssetStateMutation, UpdateAssetStateMutationVariables>;
} & TChildProps;
export function withUpdateAssetState<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateAssetStateMutation,
    UpdateAssetStateMutationVariables,
    UpdateAssetStateProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, UpdateAssetStateMutation, UpdateAssetStateMutationVariables, UpdateAssetStateProps<TChildProps, TDataName>>(
    UpdateAssetStateDocument,
    {
      alias: 'updateAssetState',
      ...operationOptions,
    }
  );
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
export function useUpdateAssetStateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAssetStateMutation, UpdateAssetStateMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateAssetStateMutation, UpdateAssetStateMutationVariables>(UpdateAssetStateDocument, options);
}
export type UpdateAssetStateMutationHookResult = ReturnType<typeof useUpdateAssetStateMutation>;
export type UpdateAssetStateMutationResult = Apollo.MutationResult<UpdateAssetStateMutation>;
export type UpdateAssetStateMutationOptions = Apollo.BaseMutationOptions<UpdateAssetStateMutation, UpdateAssetStateMutationVariables>;
export const SetAssetAsDefaultDocument = gql`
  mutation setAssetAsDefault($id: bigint!) {
    update_assets_by_pk(pk_columns: { id: $id }, _set: { default: true }) {
      active
    }
    update_assets(_set: { default: false }, where: { id: { _neq: $id }, default: { _eq: true } }) {
      affected_rows
    }
  }
`;
export type SetAssetAsDefaultMutationFn = Apollo.MutationFunction<SetAssetAsDefaultMutation, SetAssetAsDefaultMutationVariables>;
export type SetAssetAsDefaultComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<SetAssetAsDefaultMutation, SetAssetAsDefaultMutationVariables>,
  'mutation'
>;

export const SetAssetAsDefaultComponent = (props: SetAssetAsDefaultComponentProps) => (
  <ApolloReactComponents.Mutation<SetAssetAsDefaultMutation, SetAssetAsDefaultMutationVariables> mutation={SetAssetAsDefaultDocument} {...props} />
);

export type SetAssetAsDefaultProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<SetAssetAsDefaultMutation, SetAssetAsDefaultMutationVariables>;
} & TChildProps;
export function withSetAssetAsDefault<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    SetAssetAsDefaultMutation,
    SetAssetAsDefaultMutationVariables,
    SetAssetAsDefaultProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, SetAssetAsDefaultMutation, SetAssetAsDefaultMutationVariables, SetAssetAsDefaultProps<TChildProps, TDataName>>(
    SetAssetAsDefaultDocument,
    {
      alias: 'setAssetAsDefault',
      ...operationOptions,
    }
  );
}

/**
 * __useSetAssetAsDefaultMutation__
 *
 * To run a mutation, you first call `useSetAssetAsDefaultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetAssetAsDefaultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setAssetAsDefaultMutation, { data, loading, error }] = useSetAssetAsDefaultMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSetAssetAsDefaultMutation(baseOptions?: Apollo.MutationHookOptions<SetAssetAsDefaultMutation, SetAssetAsDefaultMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SetAssetAsDefaultMutation, SetAssetAsDefaultMutationVariables>(SetAssetAsDefaultDocument, options);
}
export type SetAssetAsDefaultMutationHookResult = ReturnType<typeof useSetAssetAsDefaultMutation>;
export type SetAssetAsDefaultMutationResult = Apollo.MutationResult<SetAssetAsDefaultMutation>;
export type SetAssetAsDefaultMutationOptions = Apollo.BaseMutationOptions<SetAssetAsDefaultMutation, SetAssetAsDefaultMutationVariables>;
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
export type InsertCategoryMutationFn = Apollo.MutationFunction<InsertCategoryMutation, InsertCategoryMutationVariables>;
export type InsertCategoryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<InsertCategoryMutation, InsertCategoryMutationVariables>,
  'mutation'
>;

export const InsertCategoryComponent = (props: InsertCategoryComponentProps) => (
  <ApolloReactComponents.Mutation<InsertCategoryMutation, InsertCategoryMutationVariables> mutation={InsertCategoryDocument} {...props} />
);

export type InsertCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertCategoryMutation, InsertCategoryMutationVariables>;
} & TChildProps;
export function withInsertCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertCategoryMutation,
    InsertCategoryMutationVariables,
    InsertCategoryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, InsertCategoryMutation, InsertCategoryMutationVariables, InsertCategoryProps<TChildProps, TDataName>>(
    InsertCategoryDocument,
    {
      alias: 'insertCategory',
      ...operationOptions,
    }
  );
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
export function useInsertCategoryMutation(baseOptions?: Apollo.MutationHookOptions<InsertCategoryMutation, InsertCategoryMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertCategoryMutation, InsertCategoryMutationVariables>(InsertCategoryDocument, options);
}
export type InsertCategoryMutationHookResult = ReturnType<typeof useInsertCategoryMutation>;
export type InsertCategoryMutationResult = Apollo.MutationResult<InsertCategoryMutation>;
export type InsertCategoryMutationOptions = Apollo.BaseMutationOptions<InsertCategoryMutation, InsertCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
  mutation deleteCategory($id: bigint!) {
    delete_categories_by_pk(id: $id) {
      id
      name
    }
  }
`;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export type DeleteCategoryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>,
  'mutation'
>;

export const DeleteCategoryComponent = (props: DeleteCategoryComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteCategoryMutation, DeleteCategoryMutationVariables> mutation={DeleteCategoryDocument} {...props} />
);

export type DeleteCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
} & TChildProps;
export function withDeleteCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables,
    DeleteCategoryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, DeleteCategoryMutation, DeleteCategoryMutationVariables, DeleteCategoryProps<TChildProps, TDataName>>(
    DeleteCategoryDocument,
    {
      alias: 'deleteCategory',
      ...operationOptions,
    }
  );
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
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
}
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
  mutation updateCategory($id: bigint!, $changes: categories_set_input) {
    update_categories_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export type UpdateCategoryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>,
  'mutation'
>;

export const UpdateCategoryComponent = (props: UpdateCategoryComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateCategoryMutation, UpdateCategoryMutationVariables> mutation={UpdateCategoryDocument} {...props} />
);

export type UpdateCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
} & TChildProps;
export function withUpdateCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables,
    UpdateCategoryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, UpdateCategoryMutation, UpdateCategoryMutationVariables, UpdateCategoryProps<TChildProps, TDataName>>(
    UpdateCategoryDocument,
    {
      alias: 'updateCategory',
      ...operationOptions,
    }
  );
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
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
}
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const InsertExpenseAccDocument = gql`
  mutation insertExpenseAcc($object: expenses_insert_input!) {
    insert_expenses_one(object: $object) {
      id
      name
      account_no
      created_at
      updated_at
    }
  }
`;
export type InsertExpenseAccMutationFn = Apollo.MutationFunction<InsertExpenseAccMutation, InsertExpenseAccMutationVariables>;
export type InsertExpenseAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<InsertExpenseAccMutation, InsertExpenseAccMutationVariables>,
  'mutation'
>;

export const InsertExpenseAccComponent = (props: InsertExpenseAccComponentProps) => (
  <ApolloReactComponents.Mutation<InsertExpenseAccMutation, InsertExpenseAccMutationVariables> mutation={InsertExpenseAccDocument} {...props} />
);

export type InsertExpenseAccProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertExpenseAccMutation, InsertExpenseAccMutationVariables>;
} & TChildProps;
export function withInsertExpenseAcc<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertExpenseAccMutation,
    InsertExpenseAccMutationVariables,
    InsertExpenseAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, InsertExpenseAccMutation, InsertExpenseAccMutationVariables, InsertExpenseAccProps<TChildProps, TDataName>>(
    InsertExpenseAccDocument,
    {
      alias: 'insertExpenseAcc',
      ...operationOptions,
    }
  );
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
export function useInsertExpenseAccMutation(baseOptions?: Apollo.MutationHookOptions<InsertExpenseAccMutation, InsertExpenseAccMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertExpenseAccMutation, InsertExpenseAccMutationVariables>(InsertExpenseAccDocument, options);
}
export type InsertExpenseAccMutationHookResult = ReturnType<typeof useInsertExpenseAccMutation>;
export type InsertExpenseAccMutationResult = Apollo.MutationResult<InsertExpenseAccMutation>;
export type InsertExpenseAccMutationOptions = Apollo.BaseMutationOptions<InsertExpenseAccMutation, InsertExpenseAccMutationVariables>;
export const InsertExpenseAccountsDocument = gql`
  mutation insertExpenseAccounts($objects: [expenses_insert_input!]!) {
    insert_expenses(objects: $objects) {
      affected_rows
      returning {
        id
        name
      }
    }
  }
`;
export type InsertExpenseAccountsMutationFn = Apollo.MutationFunction<InsertExpenseAccountsMutation, InsertExpenseAccountsMutationVariables>;
export type InsertExpenseAccountsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<InsertExpenseAccountsMutation, InsertExpenseAccountsMutationVariables>,
  'mutation'
>;

export const InsertExpenseAccountsComponent = (props: InsertExpenseAccountsComponentProps) => (
  <ApolloReactComponents.Mutation<InsertExpenseAccountsMutation, InsertExpenseAccountsMutationVariables> mutation={InsertExpenseAccountsDocument} {...props} />
);

export type InsertExpenseAccountsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertExpenseAccountsMutation, InsertExpenseAccountsMutationVariables>;
} & TChildProps;
export function withInsertExpenseAccounts<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertExpenseAccountsMutation,
    InsertExpenseAccountsMutationVariables,
    InsertExpenseAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertExpenseAccountsMutation,
    InsertExpenseAccountsMutationVariables,
    InsertExpenseAccountsProps<TChildProps, TDataName>
  >(InsertExpenseAccountsDocument, {
    alias: 'insertExpenseAccounts',
    ...operationOptions,
  });
}

/**
 * __useInsertExpenseAccountsMutation__
 *
 * To run a mutation, you first call `useInsertExpenseAccountsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertExpenseAccountsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertExpenseAccountsMutation, { data, loading, error }] = useInsertExpenseAccountsMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertExpenseAccountsMutation(
  baseOptions?: Apollo.MutationHookOptions<InsertExpenseAccountsMutation, InsertExpenseAccountsMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertExpenseAccountsMutation, InsertExpenseAccountsMutationVariables>(InsertExpenseAccountsDocument, options);
}
export type InsertExpenseAccountsMutationHookResult = ReturnType<typeof useInsertExpenseAccountsMutation>;
export type InsertExpenseAccountsMutationResult = Apollo.MutationResult<InsertExpenseAccountsMutation>;
export type InsertExpenseAccountsMutationOptions = Apollo.BaseMutationOptions<InsertExpenseAccountsMutation, InsertExpenseAccountsMutationVariables>;
export const DeleteExpenseAccDocument = gql`
  mutation deleteExpenseAcc($id: bigint!) {
    delete_account_info_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteExpenseAccMutationFn = Apollo.MutationFunction<DeleteExpenseAccMutation, DeleteExpenseAccMutationVariables>;
export type DeleteExpenseAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<DeleteExpenseAccMutation, DeleteExpenseAccMutationVariables>,
  'mutation'
>;

export const DeleteExpenseAccComponent = (props: DeleteExpenseAccComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteExpenseAccMutation, DeleteExpenseAccMutationVariables> mutation={DeleteExpenseAccDocument} {...props} />
);

export type DeleteExpenseAccProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteExpenseAccMutation, DeleteExpenseAccMutationVariables>;
} & TChildProps;
export function withDeleteExpenseAcc<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteExpenseAccMutation,
    DeleteExpenseAccMutationVariables,
    DeleteExpenseAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, DeleteExpenseAccMutation, DeleteExpenseAccMutationVariables, DeleteExpenseAccProps<TChildProps, TDataName>>(
    DeleteExpenseAccDocument,
    {
      alias: 'deleteExpenseAcc',
      ...operationOptions,
    }
  );
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
export function useDeleteExpenseAccMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExpenseAccMutation, DeleteExpenseAccMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteExpenseAccMutation, DeleteExpenseAccMutationVariables>(DeleteExpenseAccDocument, options);
}
export type DeleteExpenseAccMutationHookResult = ReturnType<typeof useDeleteExpenseAccMutation>;
export type DeleteExpenseAccMutationResult = Apollo.MutationResult<DeleteExpenseAccMutation>;
export type DeleteExpenseAccMutationOptions = Apollo.BaseMutationOptions<DeleteExpenseAccMutation, DeleteExpenseAccMutationVariables>;
export const UpdateExpenseAccDocument = gql`
  mutation updateExpenseAcc($id: bigint!, $changes: expenses_set_input, $name: String!) {
    update_expenses_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
    update_account_info_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
    }
  }
`;
export type UpdateExpenseAccMutationFn = Apollo.MutationFunction<UpdateExpenseAccMutation, UpdateExpenseAccMutationVariables>;
export type UpdateExpenseAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateExpenseAccMutation, UpdateExpenseAccMutationVariables>,
  'mutation'
>;

export const UpdateExpenseAccComponent = (props: UpdateExpenseAccComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateExpenseAccMutation, UpdateExpenseAccMutationVariables> mutation={UpdateExpenseAccDocument} {...props} />
);

export type UpdateExpenseAccProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateExpenseAccMutation, UpdateExpenseAccMutationVariables>;
} & TChildProps;
export function withUpdateExpenseAcc<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateExpenseAccMutation,
    UpdateExpenseAccMutationVariables,
    UpdateExpenseAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, UpdateExpenseAccMutation, UpdateExpenseAccMutationVariables, UpdateExpenseAccProps<TChildProps, TDataName>>(
    UpdateExpenseAccDocument,
    {
      alias: 'updateExpenseAcc',
      ...operationOptions,
    }
  );
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
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateExpenseAccMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExpenseAccMutation, UpdateExpenseAccMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateExpenseAccMutation, UpdateExpenseAccMutationVariables>(UpdateExpenseAccDocument, options);
}
export type UpdateExpenseAccMutationHookResult = ReturnType<typeof useUpdateExpenseAccMutation>;
export type UpdateExpenseAccMutationResult = Apollo.MutationResult<UpdateExpenseAccMutation>;
export type UpdateExpenseAccMutationOptions = Apollo.BaseMutationOptions<UpdateExpenseAccMutation, UpdateExpenseAccMutationVariables>;
export const UpdateExpenseStateDocument = gql`
  mutation updateExpenseState($id: bigint!, $state: Boolean) {
    update_expenses_by_pk(pk_columns: { id: $id }, _set: { active: $state }) {
      active
    }
  }
`;
export type UpdateExpenseStateMutationFn = Apollo.MutationFunction<UpdateExpenseStateMutation, UpdateExpenseStateMutationVariables>;
export type UpdateExpenseStateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateExpenseStateMutation, UpdateExpenseStateMutationVariables>,
  'mutation'
>;

export const UpdateExpenseStateComponent = (props: UpdateExpenseStateComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateExpenseStateMutation, UpdateExpenseStateMutationVariables> mutation={UpdateExpenseStateDocument} {...props} />
);

export type UpdateExpenseStateProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateExpenseStateMutation, UpdateExpenseStateMutationVariables>;
} & TChildProps;
export function withUpdateExpenseState<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateExpenseStateMutation,
    UpdateExpenseStateMutationVariables,
    UpdateExpenseStateProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, UpdateExpenseStateMutation, UpdateExpenseStateMutationVariables, UpdateExpenseStateProps<TChildProps, TDataName>>(
    UpdateExpenseStateDocument,
    {
      alias: 'updateExpenseState',
      ...operationOptions,
    }
  );
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
export function useUpdateExpenseStateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExpenseStateMutation, UpdateExpenseStateMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateExpenseStateMutation, UpdateExpenseStateMutationVariables>(UpdateExpenseStateDocument, options);
}
export type UpdateExpenseStateMutationHookResult = ReturnType<typeof useUpdateExpenseStateMutation>;
export type UpdateExpenseStateMutationResult = Apollo.MutationResult<UpdateExpenseStateMutation>;
export type UpdateExpenseStateMutationOptions = Apollo.BaseMutationOptions<UpdateExpenseStateMutation, UpdateExpenseStateMutationVariables>;
export const InsertGroupDocument = gql`
  mutation insertGroup($object: groups_insert_input!) {
    insert_groups_one(object: $object) {
      id
      name
      created_at
      updated_at
    }
  }
`;
export type InsertGroupMutationFn = Apollo.MutationFunction<InsertGroupMutation, InsertGroupMutationVariables>;
export type InsertGroupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertGroupMutation, InsertGroupMutationVariables>, 'mutation'>;

export const InsertGroupComponent = (props: InsertGroupComponentProps) => (
  <ApolloReactComponents.Mutation<InsertGroupMutation, InsertGroupMutationVariables> mutation={InsertGroupDocument} {...props} />
);

export type InsertGroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertGroupMutation, InsertGroupMutationVariables>;
} & TChildProps;
export function withInsertGroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, InsertGroupMutation, InsertGroupMutationVariables, InsertGroupProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withMutation<TProps, InsertGroupMutation, InsertGroupMutationVariables, InsertGroupProps<TChildProps, TDataName>>(InsertGroupDocument, {
    alias: 'insertGroup',
    ...operationOptions,
  });
}

/**
 * __useInsertGroupMutation__
 *
 * To run a mutation, you first call `useInsertGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGroupMutation, { data, loading, error }] = useInsertGroupMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertGroupMutation(baseOptions?: Apollo.MutationHookOptions<InsertGroupMutation, InsertGroupMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertGroupMutation, InsertGroupMutationVariables>(InsertGroupDocument, options);
}
export type InsertGroupMutationHookResult = ReturnType<typeof useInsertGroupMutation>;
export type InsertGroupMutationResult = Apollo.MutationResult<InsertGroupMutation>;
export type InsertGroupMutationOptions = Apollo.BaseMutationOptions<InsertGroupMutation, InsertGroupMutationVariables>;
export const DeleteGroupDocument = gql`
  mutation deleteGroup($id: bigint!) {
    delete_groups_by_pk(id: $id) {
      id
      name
    }
  }
`;
export type DeleteGroupMutationFn = Apollo.MutationFunction<DeleteGroupMutation, DeleteGroupMutationVariables>;
export type DeleteGroupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteGroupMutation, DeleteGroupMutationVariables>, 'mutation'>;

export const DeleteGroupComponent = (props: DeleteGroupComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteGroupMutation, DeleteGroupMutationVariables> mutation={DeleteGroupDocument} {...props} />
);

export type DeleteGroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteGroupMutation, DeleteGroupMutationVariables>;
} & TChildProps;
export function withDeleteGroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, DeleteGroupMutation, DeleteGroupMutationVariables, DeleteGroupProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withMutation<TProps, DeleteGroupMutation, DeleteGroupMutationVariables, DeleteGroupProps<TChildProps, TDataName>>(DeleteGroupDocument, {
    alias: 'deleteGroup',
    ...operationOptions,
  });
}

/**
 * __useDeleteGroupMutation__
 *
 * To run a mutation, you first call `useDeleteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGroupMutation, { data, loading, error }] = useDeleteGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGroupMutation, DeleteGroupMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteGroupMutation, DeleteGroupMutationVariables>(DeleteGroupDocument, options);
}
export type DeleteGroupMutationHookResult = ReturnType<typeof useDeleteGroupMutation>;
export type DeleteGroupMutationResult = Apollo.MutationResult<DeleteGroupMutation>;
export type DeleteGroupMutationOptions = Apollo.BaseMutationOptions<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const UpdateGroupDocument = gql`
  mutation updateGroup($id: bigint!, $changes: groups_set_input) {
    update_groups_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;
export type UpdateGroupMutationFn = Apollo.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;
export type UpdateGroupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateGroupMutation, UpdateGroupMutationVariables>, 'mutation'>;

export const UpdateGroupComponent = (props: UpdateGroupComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateGroupMutation, UpdateGroupMutationVariables> mutation={UpdateGroupDocument} {...props} />
);

export type UpdateGroupProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;
} & TChildProps;
export function withUpdateGroup<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, UpdateGroupMutation, UpdateGroupMutationVariables, UpdateGroupProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withMutation<TProps, UpdateGroupMutation, UpdateGroupMutationVariables, UpdateGroupProps<TChildProps, TDataName>>(UpdateGroupDocument, {
    alias: 'updateGroup',
    ...operationOptions,
  });
}

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGroupMutation, UpdateGroupMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(UpdateGroupDocument, options);
}
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = Apollo.MutationResult<UpdateGroupMutation>;
export type UpdateGroupMutationOptions = Apollo.BaseMutationOptions<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const InsertImportAssetDataDocument = gql`
  mutation insertImportAssetData($object: import_asset_file_insert_input!) {
    insert_import_asset_file_one(object: $object) {
      id
    }
  }
`;
export type InsertImportAssetDataMutationFn = Apollo.MutationFunction<InsertImportAssetDataMutation, InsertImportAssetDataMutationVariables>;
export type InsertImportAssetDataComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<InsertImportAssetDataMutation, InsertImportAssetDataMutationVariables>,
  'mutation'
>;

export const InsertImportAssetDataComponent = (props: InsertImportAssetDataComponentProps) => (
  <ApolloReactComponents.Mutation<InsertImportAssetDataMutation, InsertImportAssetDataMutationVariables> mutation={InsertImportAssetDataDocument} {...props} />
);

export type InsertImportAssetDataProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertImportAssetDataMutation, InsertImportAssetDataMutationVariables>;
} & TChildProps;
export function withInsertImportAssetData<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertImportAssetDataMutation,
    InsertImportAssetDataMutationVariables,
    InsertImportAssetDataProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InsertImportAssetDataMutation,
    InsertImportAssetDataMutationVariables,
    InsertImportAssetDataProps<TChildProps, TDataName>
  >(InsertImportAssetDataDocument, {
    alias: 'insertImportAssetData',
    ...operationOptions,
  });
}

/**
 * __useInsertImportAssetDataMutation__
 *
 * To run a mutation, you first call `useInsertImportAssetDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertImportAssetDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertImportAssetDataMutation, { data, loading, error }] = useInsertImportAssetDataMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertImportAssetDataMutation(
  baseOptions?: Apollo.MutationHookOptions<InsertImportAssetDataMutation, InsertImportAssetDataMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertImportAssetDataMutation, InsertImportAssetDataMutationVariables>(InsertImportAssetDataDocument, options);
}
export type InsertImportAssetDataMutationHookResult = ReturnType<typeof useInsertImportAssetDataMutation>;
export type InsertImportAssetDataMutationResult = Apollo.MutationResult<InsertImportAssetDataMutation>;
export type InsertImportAssetDataMutationOptions = Apollo.BaseMutationOptions<InsertImportAssetDataMutation, InsertImportAssetDataMutationVariables>;
export const DeleteImportAssetDocument = gql`
  mutation deleteImportAsset($id: Int!) {
    delete_import_asset_file_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteImportAssetMutationFn = Apollo.MutationFunction<DeleteImportAssetMutation, DeleteImportAssetMutationVariables>;
export type DeleteImportAssetComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<DeleteImportAssetMutation, DeleteImportAssetMutationVariables>,
  'mutation'
>;

export const DeleteImportAssetComponent = (props: DeleteImportAssetComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteImportAssetMutation, DeleteImportAssetMutationVariables> mutation={DeleteImportAssetDocument} {...props} />
);

export type DeleteImportAssetProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteImportAssetMutation, DeleteImportAssetMutationVariables>;
} & TChildProps;
export function withDeleteImportAsset<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteImportAssetMutation,
    DeleteImportAssetMutationVariables,
    DeleteImportAssetProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, DeleteImportAssetMutation, DeleteImportAssetMutationVariables, DeleteImportAssetProps<TChildProps, TDataName>>(
    DeleteImportAssetDocument,
    {
      alias: 'deleteImportAsset',
      ...operationOptions,
    }
  );
}

/**
 * __useDeleteImportAssetMutation__
 *
 * To run a mutation, you first call `useDeleteImportAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImportAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImportAssetMutation, { data, loading, error }] = useDeleteImportAssetMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteImportAssetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImportAssetMutation, DeleteImportAssetMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteImportAssetMutation, DeleteImportAssetMutationVariables>(DeleteImportAssetDocument, options);
}
export type DeleteImportAssetMutationHookResult = ReturnType<typeof useDeleteImportAssetMutation>;
export type DeleteImportAssetMutationResult = Apollo.MutationResult<DeleteImportAssetMutation>;
export type DeleteImportAssetMutationOptions = Apollo.BaseMutationOptions<DeleteImportAssetMutation, DeleteImportAssetMutationVariables>;
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
export type InsertLabelMutationFn = Apollo.MutationFunction<InsertLabelMutation, InsertLabelMutationVariables>;
export type InsertLabelComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertLabelMutation, InsertLabelMutationVariables>, 'mutation'>;

export const InsertLabelComponent = (props: InsertLabelComponentProps) => (
  <ApolloReactComponents.Mutation<InsertLabelMutation, InsertLabelMutationVariables> mutation={InsertLabelDocument} {...props} />
);

export type InsertLabelProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertLabelMutation, InsertLabelMutationVariables>;
} & TChildProps;
export function withInsertLabel<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, InsertLabelMutation, InsertLabelMutationVariables, InsertLabelProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withMutation<TProps, InsertLabelMutation, InsertLabelMutationVariables, InsertLabelProps<TChildProps, TDataName>>(InsertLabelDocument, {
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
export function useInsertLabelMutation(baseOptions?: Apollo.MutationHookOptions<InsertLabelMutation, InsertLabelMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertLabelMutation, InsertLabelMutationVariables>(InsertLabelDocument, options);
}
export type InsertLabelMutationHookResult = ReturnType<typeof useInsertLabelMutation>;
export type InsertLabelMutationResult = Apollo.MutationResult<InsertLabelMutation>;
export type InsertLabelMutationOptions = Apollo.BaseMutationOptions<InsertLabelMutation, InsertLabelMutationVariables>;
export const DeleteLabelDocument = gql`
  mutation deleteLabel($id: Int!) {
    delete_labels_by_pk(id: $id) {
      id
      name
    }
  }
`;
export type DeleteLabelMutationFn = Apollo.MutationFunction<DeleteLabelMutation, DeleteLabelMutationVariables>;
export type DeleteLabelComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteLabelMutation, DeleteLabelMutationVariables>, 'mutation'>;

export const DeleteLabelComponent = (props: DeleteLabelComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteLabelMutation, DeleteLabelMutationVariables> mutation={DeleteLabelDocument} {...props} />
);

export type DeleteLabelProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteLabelMutation, DeleteLabelMutationVariables>;
} & TChildProps;
export function withDeleteLabel<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, DeleteLabelMutation, DeleteLabelMutationVariables, DeleteLabelProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withMutation<TProps, DeleteLabelMutation, DeleteLabelMutationVariables, DeleteLabelProps<TChildProps, TDataName>>(DeleteLabelDocument, {
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
export function useDeleteLabelMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLabelMutation, DeleteLabelMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteLabelMutation, DeleteLabelMutationVariables>(DeleteLabelDocument, options);
}
export type DeleteLabelMutationHookResult = ReturnType<typeof useDeleteLabelMutation>;
export type DeleteLabelMutationResult = Apollo.MutationResult<DeleteLabelMutation>;
export type DeleteLabelMutationOptions = Apollo.BaseMutationOptions<DeleteLabelMutation, DeleteLabelMutationVariables>;
export const UpdateLabelDocument = gql`
  mutation updateLabel($id: Int!, $changes: labels_set_input) {
    update_labels_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;
export type UpdateLabelMutationFn = Apollo.MutationFunction<UpdateLabelMutation, UpdateLabelMutationVariables>;
export type UpdateLabelComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateLabelMutation, UpdateLabelMutationVariables>, 'mutation'>;

export const UpdateLabelComponent = (props: UpdateLabelComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateLabelMutation, UpdateLabelMutationVariables> mutation={UpdateLabelDocument} {...props} />
);

export type UpdateLabelProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateLabelMutation, UpdateLabelMutationVariables>;
} & TChildProps;
export function withUpdateLabel<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, UpdateLabelMutation, UpdateLabelMutationVariables, UpdateLabelProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withMutation<TProps, UpdateLabelMutation, UpdateLabelMutationVariables, UpdateLabelProps<TChildProps, TDataName>>(UpdateLabelDocument, {
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
export function useUpdateLabelMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLabelMutation, UpdateLabelMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateLabelMutation, UpdateLabelMutationVariables>(UpdateLabelDocument, options);
}
export type UpdateLabelMutationHookResult = ReturnType<typeof useUpdateLabelMutation>;
export type UpdateLabelMutationResult = Apollo.MutationResult<UpdateLabelMutation>;
export type UpdateLabelMutationOptions = Apollo.BaseMutationOptions<UpdateLabelMutation, UpdateLabelMutationVariables>;
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
export type InsertLiabilityAccMutationFn = Apollo.MutationFunction<InsertLiabilityAccMutation, InsertLiabilityAccMutationVariables>;
export type InsertLiabilityAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<InsertLiabilityAccMutation, InsertLiabilityAccMutationVariables>,
  'mutation'
>;

export const InsertLiabilityAccComponent = (props: InsertLiabilityAccComponentProps) => (
  <ApolloReactComponents.Mutation<InsertLiabilityAccMutation, InsertLiabilityAccMutationVariables> mutation={InsertLiabilityAccDocument} {...props} />
);

export type InsertLiabilityAccProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertLiabilityAccMutation, InsertLiabilityAccMutationVariables>;
} & TChildProps;
export function withInsertLiabilityAcc<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertLiabilityAccMutation,
    InsertLiabilityAccMutationVariables,
    InsertLiabilityAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, InsertLiabilityAccMutation, InsertLiabilityAccMutationVariables, InsertLiabilityAccProps<TChildProps, TDataName>>(
    InsertLiabilityAccDocument,
    {
      alias: 'insertLiabilityAcc',
      ...operationOptions,
    }
  );
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
export function useInsertLiabilityAccMutation(baseOptions?: Apollo.MutationHookOptions<InsertLiabilityAccMutation, InsertLiabilityAccMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertLiabilityAccMutation, InsertLiabilityAccMutationVariables>(InsertLiabilityAccDocument, options);
}
export type InsertLiabilityAccMutationHookResult = ReturnType<typeof useInsertLiabilityAccMutation>;
export type InsertLiabilityAccMutationResult = Apollo.MutationResult<InsertLiabilityAccMutation>;
export type InsertLiabilityAccMutationOptions = Apollo.BaseMutationOptions<InsertLiabilityAccMutation, InsertLiabilityAccMutationVariables>;
export const DeleteLiabilityAccDocument = gql`
  mutation deleteLiabilityAcc($id: bigint!) {
    delete_account_info_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteLiabilityAccMutationFn = Apollo.MutationFunction<DeleteLiabilityAccMutation, DeleteLiabilityAccMutationVariables>;
export type DeleteLiabilityAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<DeleteLiabilityAccMutation, DeleteLiabilityAccMutationVariables>,
  'mutation'
>;

export const DeleteLiabilityAccComponent = (props: DeleteLiabilityAccComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteLiabilityAccMutation, DeleteLiabilityAccMutationVariables> mutation={DeleteLiabilityAccDocument} {...props} />
);

export type DeleteLiabilityAccProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteLiabilityAccMutation, DeleteLiabilityAccMutationVariables>;
} & TChildProps;
export function withDeleteLiabilityAcc<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteLiabilityAccMutation,
    DeleteLiabilityAccMutationVariables,
    DeleteLiabilityAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, DeleteLiabilityAccMutation, DeleteLiabilityAccMutationVariables, DeleteLiabilityAccProps<TChildProps, TDataName>>(
    DeleteLiabilityAccDocument,
    {
      alias: 'deleteLiabilityAcc',
      ...operationOptions,
    }
  );
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
export function useDeleteLiabilityAccMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLiabilityAccMutation, DeleteLiabilityAccMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteLiabilityAccMutation, DeleteLiabilityAccMutationVariables>(DeleteLiabilityAccDocument, options);
}
export type DeleteLiabilityAccMutationHookResult = ReturnType<typeof useDeleteLiabilityAccMutation>;
export type DeleteLiabilityAccMutationResult = Apollo.MutationResult<DeleteLiabilityAccMutation>;
export type DeleteLiabilityAccMutationOptions = Apollo.BaseMutationOptions<DeleteLiabilityAccMutation, DeleteLiabilityAccMutationVariables>;
export const UpdateLiabilityAccDocument = gql`
  mutation updateLiabilityAcc($id: bigint!, $changes: liabilities_set_input, $name: String!) {
    update_liabilities_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
    update_account_info_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
    }
  }
`;
export type UpdateLiabilityAccMutationFn = Apollo.MutationFunction<UpdateLiabilityAccMutation, UpdateLiabilityAccMutationVariables>;
export type UpdateLiabilityAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateLiabilityAccMutation, UpdateLiabilityAccMutationVariables>,
  'mutation'
>;

export const UpdateLiabilityAccComponent = (props: UpdateLiabilityAccComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateLiabilityAccMutation, UpdateLiabilityAccMutationVariables> mutation={UpdateLiabilityAccDocument} {...props} />
);

export type UpdateLiabilityAccProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateLiabilityAccMutation, UpdateLiabilityAccMutationVariables>;
} & TChildProps;
export function withUpdateLiabilityAcc<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateLiabilityAccMutation,
    UpdateLiabilityAccMutationVariables,
    UpdateLiabilityAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, UpdateLiabilityAccMutation, UpdateLiabilityAccMutationVariables, UpdateLiabilityAccProps<TChildProps, TDataName>>(
    UpdateLiabilityAccDocument,
    {
      alias: 'updateLiabilityAcc',
      ...operationOptions,
    }
  );
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
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateLiabilityAccMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLiabilityAccMutation, UpdateLiabilityAccMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateLiabilityAccMutation, UpdateLiabilityAccMutationVariables>(UpdateLiabilityAccDocument, options);
}
export type UpdateLiabilityAccMutationHookResult = ReturnType<typeof useUpdateLiabilityAccMutation>;
export type UpdateLiabilityAccMutationResult = Apollo.MutationResult<UpdateLiabilityAccMutation>;
export type UpdateLiabilityAccMutationOptions = Apollo.BaseMutationOptions<UpdateLiabilityAccMutation, UpdateLiabilityAccMutationVariables>;
export const UpdateLiabilityStateDocument = gql`
  mutation updateLiabilityState($id: bigint!, $state: Boolean) {
    update_liabilities_by_pk(pk_columns: { id: $id }, _set: { active: $state }) {
      active
    }
  }
`;
export type UpdateLiabilityStateMutationFn = Apollo.MutationFunction<UpdateLiabilityStateMutation, UpdateLiabilityStateMutationVariables>;
export type UpdateLiabilityStateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateLiabilityStateMutation, UpdateLiabilityStateMutationVariables>,
  'mutation'
>;

export const UpdateLiabilityStateComponent = (props: UpdateLiabilityStateComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateLiabilityStateMutation, UpdateLiabilityStateMutationVariables> mutation={UpdateLiabilityStateDocument} {...props} />
);

export type UpdateLiabilityStateProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateLiabilityStateMutation, UpdateLiabilityStateMutationVariables>;
} & TChildProps;
export function withUpdateLiabilityState<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
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
export function useUpdateLiabilityStateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLiabilityStateMutation, UpdateLiabilityStateMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateLiabilityStateMutation, UpdateLiabilityStateMutationVariables>(UpdateLiabilityStateDocument, options);
}
export type UpdateLiabilityStateMutationHookResult = ReturnType<typeof useUpdateLiabilityStateMutation>;
export type UpdateLiabilityStateMutationResult = Apollo.MutationResult<UpdateLiabilityStateMutation>;
export type UpdateLiabilityStateMutationOptions = Apollo.BaseMutationOptions<UpdateLiabilityStateMutation, UpdateLiabilityStateMutationVariables>;
export const InsertRecurringDocument = gql`
  mutation insertRecurring($object: recurring_insert_input!) {
    insert_recurring_one(object: $object) {
      id
    }
  }
`;
export type InsertRecurringMutationFn = Apollo.MutationFunction<InsertRecurringMutation, InsertRecurringMutationVariables>;
export type InsertRecurringComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<InsertRecurringMutation, InsertRecurringMutationVariables>,
  'mutation'
>;

export const InsertRecurringComponent = (props: InsertRecurringComponentProps) => (
  <ApolloReactComponents.Mutation<InsertRecurringMutation, InsertRecurringMutationVariables> mutation={InsertRecurringDocument} {...props} />
);

export type InsertRecurringProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertRecurringMutation, InsertRecurringMutationVariables>;
} & TChildProps;
export function withInsertRecurring<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertRecurringMutation,
    InsertRecurringMutationVariables,
    InsertRecurringProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, InsertRecurringMutation, InsertRecurringMutationVariables, InsertRecurringProps<TChildProps, TDataName>>(
    InsertRecurringDocument,
    {
      alias: 'insertRecurring',
      ...operationOptions,
    }
  );
}

/**
 * __useInsertRecurringMutation__
 *
 * To run a mutation, you first call `useInsertRecurringMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertRecurringMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertRecurringMutation, { data, loading, error }] = useInsertRecurringMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertRecurringMutation(baseOptions?: Apollo.MutationHookOptions<InsertRecurringMutation, InsertRecurringMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertRecurringMutation, InsertRecurringMutationVariables>(InsertRecurringDocument, options);
}
export type InsertRecurringMutationHookResult = ReturnType<typeof useInsertRecurringMutation>;
export type InsertRecurringMutationResult = Apollo.MutationResult<InsertRecurringMutation>;
export type InsertRecurringMutationOptions = Apollo.BaseMutationOptions<InsertRecurringMutation, InsertRecurringMutationVariables>;
export const DeleteRecurringDocument = gql`
  mutation deleteRecurring($id: bigint!) {
    delete_recurring_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteRecurringMutationFn = Apollo.MutationFunction<DeleteRecurringMutation, DeleteRecurringMutationVariables>;
export type DeleteRecurringComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<DeleteRecurringMutation, DeleteRecurringMutationVariables>,
  'mutation'
>;

export const DeleteRecurringComponent = (props: DeleteRecurringComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteRecurringMutation, DeleteRecurringMutationVariables> mutation={DeleteRecurringDocument} {...props} />
);

export type DeleteRecurringProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteRecurringMutation, DeleteRecurringMutationVariables>;
} & TChildProps;
export function withDeleteRecurring<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteRecurringMutation,
    DeleteRecurringMutationVariables,
    DeleteRecurringProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, DeleteRecurringMutation, DeleteRecurringMutationVariables, DeleteRecurringProps<TChildProps, TDataName>>(
    DeleteRecurringDocument,
    {
      alias: 'deleteRecurring',
      ...operationOptions,
    }
  );
}

/**
 * __useDeleteRecurringMutation__
 *
 * To run a mutation, you first call `useDeleteRecurringMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRecurringMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRecurringMutation, { data, loading, error }] = useDeleteRecurringMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRecurringMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRecurringMutation, DeleteRecurringMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteRecurringMutation, DeleteRecurringMutationVariables>(DeleteRecurringDocument, options);
}
export type DeleteRecurringMutationHookResult = ReturnType<typeof useDeleteRecurringMutation>;
export type DeleteRecurringMutationResult = Apollo.MutationResult<DeleteRecurringMutation>;
export type DeleteRecurringMutationOptions = Apollo.BaseMutationOptions<DeleteRecurringMutation, DeleteRecurringMutationVariables>;
export const InactivateRecurringDocument = gql`
  mutation inactivateRecurring($id: bigint!) {
    update_recurring_by_pk(pk_columns: { id: $id }, _set: { active: false }) {
      id
    }
  }
`;
export type InactivateRecurringMutationFn = Apollo.MutationFunction<InactivateRecurringMutation, InactivateRecurringMutationVariables>;
export type InactivateRecurringComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<InactivateRecurringMutation, InactivateRecurringMutationVariables>,
  'mutation'
>;

export const InactivateRecurringComponent = (props: InactivateRecurringComponentProps) => (
  <ApolloReactComponents.Mutation<InactivateRecurringMutation, InactivateRecurringMutationVariables> mutation={InactivateRecurringDocument} {...props} />
);

export type InactivateRecurringProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InactivateRecurringMutation, InactivateRecurringMutationVariables>;
} & TChildProps;
export function withInactivateRecurring<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InactivateRecurringMutation,
    InactivateRecurringMutationVariables,
    InactivateRecurringProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    InactivateRecurringMutation,
    InactivateRecurringMutationVariables,
    InactivateRecurringProps<TChildProps, TDataName>
  >(InactivateRecurringDocument, {
    alias: 'inactivateRecurring',
    ...operationOptions,
  });
}

/**
 * __useInactivateRecurringMutation__
 *
 * To run a mutation, you first call `useInactivateRecurringMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInactivateRecurringMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inactivateRecurringMutation, { data, loading, error }] = useInactivateRecurringMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInactivateRecurringMutation(baseOptions?: Apollo.MutationHookOptions<InactivateRecurringMutation, InactivateRecurringMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InactivateRecurringMutation, InactivateRecurringMutationVariables>(InactivateRecurringDocument, options);
}
export type InactivateRecurringMutationHookResult = ReturnType<typeof useInactivateRecurringMutation>;
export type InactivateRecurringMutationResult = Apollo.MutationResult<InactivateRecurringMutation>;
export type InactivateRecurringMutationOptions = Apollo.BaseMutationOptions<InactivateRecurringMutation, InactivateRecurringMutationVariables>;
export const UpdateRecurringDocument = gql`
  mutation updateRecurring($id: bigint!, $changes: recurring_set_input, $labels: [recurring_labels_insert_input!]!) {
    update_recurring_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
    delete_recurring_labels(where: { recurring_id: { _eq: $id } }) {
      affected_rows
    }
    insert_recurring_labels(objects: $labels) {
      affected_rows
    }
  }
`;
export type UpdateRecurringMutationFn = Apollo.MutationFunction<UpdateRecurringMutation, UpdateRecurringMutationVariables>;
export type UpdateRecurringComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateRecurringMutation, UpdateRecurringMutationVariables>,
  'mutation'
>;

export const UpdateRecurringComponent = (props: UpdateRecurringComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateRecurringMutation, UpdateRecurringMutationVariables> mutation={UpdateRecurringDocument} {...props} />
);

export type UpdateRecurringProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateRecurringMutation, UpdateRecurringMutationVariables>;
} & TChildProps;
export function withUpdateRecurring<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateRecurringMutation,
    UpdateRecurringMutationVariables,
    UpdateRecurringProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, UpdateRecurringMutation, UpdateRecurringMutationVariables, UpdateRecurringProps<TChildProps, TDataName>>(
    UpdateRecurringDocument,
    {
      alias: 'updateRecurring',
      ...operationOptions,
    }
  );
}

/**
 * __useUpdateRecurringMutation__
 *
 * To run a mutation, you first call `useUpdateRecurringMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecurringMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecurringMutation, { data, loading, error }] = useUpdateRecurringMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *      labels: // value for 'labels'
 *   },
 * });
 */
export function useUpdateRecurringMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRecurringMutation, UpdateRecurringMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateRecurringMutation, UpdateRecurringMutationVariables>(UpdateRecurringDocument, options);
}
export type UpdateRecurringMutationHookResult = ReturnType<typeof useUpdateRecurringMutation>;
export type UpdateRecurringMutationResult = Apollo.MutationResult<UpdateRecurringMutation>;
export type UpdateRecurringMutationOptions = Apollo.BaseMutationOptions<UpdateRecurringMutation, UpdateRecurringMutationVariables>;
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
export type InsertRevenueAccMutationFn = Apollo.MutationFunction<InsertRevenueAccMutation, InsertRevenueAccMutationVariables>;
export type InsertRevenueAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<InsertRevenueAccMutation, InsertRevenueAccMutationVariables>,
  'mutation'
>;

export const InsertRevenueAccComponent = (props: InsertRevenueAccComponentProps) => (
  <ApolloReactComponents.Mutation<InsertRevenueAccMutation, InsertRevenueAccMutationVariables> mutation={InsertRevenueAccDocument} {...props} />
);

export type InsertRevenueAccProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertRevenueAccMutation, InsertRevenueAccMutationVariables>;
} & TChildProps;
export function withInsertRevenueAcc<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertRevenueAccMutation,
    InsertRevenueAccMutationVariables,
    InsertRevenueAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, InsertRevenueAccMutation, InsertRevenueAccMutationVariables, InsertRevenueAccProps<TChildProps, TDataName>>(
    InsertRevenueAccDocument,
    {
      alias: 'insertRevenueAcc',
      ...operationOptions,
    }
  );
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
export function useInsertRevenueAccMutation(baseOptions?: Apollo.MutationHookOptions<InsertRevenueAccMutation, InsertRevenueAccMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertRevenueAccMutation, InsertRevenueAccMutationVariables>(InsertRevenueAccDocument, options);
}
export type InsertRevenueAccMutationHookResult = ReturnType<typeof useInsertRevenueAccMutation>;
export type InsertRevenueAccMutationResult = Apollo.MutationResult<InsertRevenueAccMutation>;
export type InsertRevenueAccMutationOptions = Apollo.BaseMutationOptions<InsertRevenueAccMutation, InsertRevenueAccMutationVariables>;
export const DeleteRevenueAccDocument = gql`
  mutation deleteRevenueAcc($id: bigint!) {
    delete_account_info_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteRevenueAccMutationFn = Apollo.MutationFunction<DeleteRevenueAccMutation, DeleteRevenueAccMutationVariables>;
export type DeleteRevenueAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<DeleteRevenueAccMutation, DeleteRevenueAccMutationVariables>,
  'mutation'
>;

export const DeleteRevenueAccComponent = (props: DeleteRevenueAccComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteRevenueAccMutation, DeleteRevenueAccMutationVariables> mutation={DeleteRevenueAccDocument} {...props} />
);

export type DeleteRevenueAccProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteRevenueAccMutation, DeleteRevenueAccMutationVariables>;
} & TChildProps;
export function withDeleteRevenueAcc<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteRevenueAccMutation,
    DeleteRevenueAccMutationVariables,
    DeleteRevenueAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, DeleteRevenueAccMutation, DeleteRevenueAccMutationVariables, DeleteRevenueAccProps<TChildProps, TDataName>>(
    DeleteRevenueAccDocument,
    {
      alias: 'deleteRevenueAcc',
      ...operationOptions,
    }
  );
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
export function useDeleteRevenueAccMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRevenueAccMutation, DeleteRevenueAccMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteRevenueAccMutation, DeleteRevenueAccMutationVariables>(DeleteRevenueAccDocument, options);
}
export type DeleteRevenueAccMutationHookResult = ReturnType<typeof useDeleteRevenueAccMutation>;
export type DeleteRevenueAccMutationResult = Apollo.MutationResult<DeleteRevenueAccMutation>;
export type DeleteRevenueAccMutationOptions = Apollo.BaseMutationOptions<DeleteRevenueAccMutation, DeleteRevenueAccMutationVariables>;
export const UpdateRevenueAccDocument = gql`
  mutation updateRevenueAcc($id: bigint!, $changes: revenues_set_input, $name: String!) {
    update_revenues_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
    update_account_info_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
    }
  }
`;
export type UpdateRevenueAccMutationFn = Apollo.MutationFunction<UpdateRevenueAccMutation, UpdateRevenueAccMutationVariables>;
export type UpdateRevenueAccComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateRevenueAccMutation, UpdateRevenueAccMutationVariables>,
  'mutation'
>;

export const UpdateRevenueAccComponent = (props: UpdateRevenueAccComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateRevenueAccMutation, UpdateRevenueAccMutationVariables> mutation={UpdateRevenueAccDocument} {...props} />
);

export type UpdateRevenueAccProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateRevenueAccMutation, UpdateRevenueAccMutationVariables>;
} & TChildProps;
export function withUpdateRevenueAcc<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateRevenueAccMutation,
    UpdateRevenueAccMutationVariables,
    UpdateRevenueAccProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, UpdateRevenueAccMutation, UpdateRevenueAccMutationVariables, UpdateRevenueAccProps<TChildProps, TDataName>>(
    UpdateRevenueAccDocument,
    {
      alias: 'updateRevenueAcc',
      ...operationOptions,
    }
  );
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
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateRevenueAccMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRevenueAccMutation, UpdateRevenueAccMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateRevenueAccMutation, UpdateRevenueAccMutationVariables>(UpdateRevenueAccDocument, options);
}
export type UpdateRevenueAccMutationHookResult = ReturnType<typeof useUpdateRevenueAccMutation>;
export type UpdateRevenueAccMutationResult = Apollo.MutationResult<UpdateRevenueAccMutation>;
export type UpdateRevenueAccMutationOptions = Apollo.BaseMutationOptions<UpdateRevenueAccMutation, UpdateRevenueAccMutationVariables>;
export const UpdateRevenueStateDocument = gql`
  mutation updateRevenueState($id: bigint!, $state: Boolean) {
    update_revenues_by_pk(pk_columns: { id: $id }, _set: { active: $state }) {
      active
    }
  }
`;
export type UpdateRevenueStateMutationFn = Apollo.MutationFunction<UpdateRevenueStateMutation, UpdateRevenueStateMutationVariables>;
export type UpdateRevenueStateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateRevenueStateMutation, UpdateRevenueStateMutationVariables>,
  'mutation'
>;

export const UpdateRevenueStateComponent = (props: UpdateRevenueStateComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateRevenueStateMutation, UpdateRevenueStateMutationVariables> mutation={UpdateRevenueStateDocument} {...props} />
);

export type UpdateRevenueStateProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateRevenueStateMutation, UpdateRevenueStateMutationVariables>;
} & TChildProps;
export function withUpdateRevenueState<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateRevenueStateMutation,
    UpdateRevenueStateMutationVariables,
    UpdateRevenueStateProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, UpdateRevenueStateMutation, UpdateRevenueStateMutationVariables, UpdateRevenueStateProps<TChildProps, TDataName>>(
    UpdateRevenueStateDocument,
    {
      alias: 'updateRevenueState',
      ...operationOptions,
    }
  );
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
export function useUpdateRevenueStateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRevenueStateMutation, UpdateRevenueStateMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateRevenueStateMutation, UpdateRevenueStateMutationVariables>(UpdateRevenueStateDocument, options);
}
export type UpdateRevenueStateMutationHookResult = ReturnType<typeof useUpdateRevenueStateMutation>;
export type UpdateRevenueStateMutationResult = Apollo.MutationResult<UpdateRevenueStateMutation>;
export type UpdateRevenueStateMutationOptions = Apollo.BaseMutationOptions<UpdateRevenueStateMutation, UpdateRevenueStateMutationVariables>;
export const UpdateRevenueStandardDocument = gql`
  mutation updateRevenueStandard($id: bigint!) {
    update_revenues_by_pk(pk_columns: { id: $id }, _set: { default: true }) {
      default
    }
    update_revenues(_set: { default: false }, where: { id: { _neq: $id }, default: { _eq: true } }) {
      affected_rows
    }
  }
`;
export type UpdateRevenueStandardMutationFn = Apollo.MutationFunction<UpdateRevenueStandardMutation, UpdateRevenueStandardMutationVariables>;
export type UpdateRevenueStandardComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateRevenueStandardMutation, UpdateRevenueStandardMutationVariables>,
  'mutation'
>;

export const UpdateRevenueStandardComponent = (props: UpdateRevenueStandardComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateRevenueStandardMutation, UpdateRevenueStandardMutationVariables> mutation={UpdateRevenueStandardDocument} {...props} />
);

export type UpdateRevenueStandardProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateRevenueStandardMutation, UpdateRevenueStandardMutationVariables>;
} & TChildProps;
export function withUpdateRevenueStandard<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
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
  baseOptions?: Apollo.MutationHookOptions<UpdateRevenueStandardMutation, UpdateRevenueStandardMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateRevenueStandardMutation, UpdateRevenueStandardMutationVariables>(UpdateRevenueStandardDocument, options);
}
export type UpdateRevenueStandardMutationHookResult = ReturnType<typeof useUpdateRevenueStandardMutation>;
export type UpdateRevenueStandardMutationResult = Apollo.MutationResult<UpdateRevenueStandardMutation>;
export type UpdateRevenueStandardMutationOptions = Apollo.BaseMutationOptions<UpdateRevenueStandardMutation, UpdateRevenueStandardMutationVariables>;
export const InsertTransactionDocument = gql`
  mutation insertTransaction($object: transactions_insert_input!) {
    insert_transactions_one(object: $object) {
      id
      amount
    }
  }
`;
export type InsertTransactionMutationFn = Apollo.MutationFunction<InsertTransactionMutation, InsertTransactionMutationVariables>;
export type InsertTransactionComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<InsertTransactionMutation, InsertTransactionMutationVariables>,
  'mutation'
>;

export const InsertTransactionComponent = (props: InsertTransactionComponentProps) => (
  <ApolloReactComponents.Mutation<InsertTransactionMutation, InsertTransactionMutationVariables> mutation={InsertTransactionDocument} {...props} />
);

export type InsertTransactionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<InsertTransactionMutation, InsertTransactionMutationVariables>;
} & TChildProps;
export function withInsertTransaction<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    InsertTransactionMutation,
    InsertTransactionMutationVariables,
    InsertTransactionProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, InsertTransactionMutation, InsertTransactionMutationVariables, InsertTransactionProps<TChildProps, TDataName>>(
    InsertTransactionDocument,
    {
      alias: 'insertTransaction',
      ...operationOptions,
    }
  );
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
export function useInsertTransactionMutation(baseOptions?: Apollo.MutationHookOptions<InsertTransactionMutation, InsertTransactionMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertTransactionMutation, InsertTransactionMutationVariables>(InsertTransactionDocument, options);
}
export type InsertTransactionMutationHookResult = ReturnType<typeof useInsertTransactionMutation>;
export type InsertTransactionMutationResult = Apollo.MutationResult<InsertTransactionMutation>;
export type InsertTransactionMutationOptions = Apollo.BaseMutationOptions<InsertTransactionMutation, InsertTransactionMutationVariables>;
export const UpdateTransactionDocument = gql`
  mutation updateTransaction(
    $id: bigint!
    $changes: transactions_set_input!
    $labels: [transaction_labels_insert_input!]!
    $accounts: [transaction_accounts_insert_input!]!
  ) {
    delete_transaction_labels(where: { transaction_id: { _eq: $id } }) {
      affected_rows
    }
    delete_transaction_accounts(where: { transaction_id: { _eq: $id } }) {
      affected_rows
    }
    update_transactions_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
    insert_transaction_labels(objects: $labels) {
      affected_rows
    }
    insert_transaction_accounts(objects: $accounts) {
      affected_rows
    }
  }
`;
export type UpdateTransactionMutationFn = Apollo.MutationFunction<UpdateTransactionMutation, UpdateTransactionMutationVariables>;
export type UpdateTransactionComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>,
  'mutation'
>;

export const UpdateTransactionComponent = (props: UpdateTransactionComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateTransactionMutation, UpdateTransactionMutationVariables> mutation={UpdateTransactionDocument} {...props} />
);

export type UpdateTransactionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateTransactionMutation, UpdateTransactionMutationVariables>;
} & TChildProps;
export function withUpdateTransaction<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateTransactionMutation,
    UpdateTransactionMutationVariables,
    UpdateTransactionProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, UpdateTransactionMutation, UpdateTransactionMutationVariables, UpdateTransactionProps<TChildProps, TDataName>>(
    UpdateTransactionDocument,
    {
      alias: 'updateTransaction',
      ...operationOptions,
    }
  );
}

/**
 * __useUpdateTransactionMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionMutation, { data, loading, error }] = useUpdateTransactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *      labels: // value for 'labels'
 *      accounts: // value for 'accounts'
 *   },
 * });
 */
export function useUpdateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument, options);
}
export type UpdateTransactionMutationHookResult = ReturnType<typeof useUpdateTransactionMutation>;
export type UpdateTransactionMutationResult = Apollo.MutationResult<UpdateTransactionMutation>;
export type UpdateTransactionMutationOptions = Apollo.BaseMutationOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>;
export const DeleteTransactionByIdDocument = gql`
  mutation deleteTransactionById($id: bigint!) {
    delete_transactions_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteTransactionByIdMutationFn = Apollo.MutationFunction<DeleteTransactionByIdMutation, DeleteTransactionByIdMutationVariables>;
export type DeleteTransactionByIdComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<DeleteTransactionByIdMutation, DeleteTransactionByIdMutationVariables>,
  'mutation'
>;

export const DeleteTransactionByIdComponent = (props: DeleteTransactionByIdComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteTransactionByIdMutation, DeleteTransactionByIdMutationVariables> mutation={DeleteTransactionByIdDocument} {...props} />
);

export type DeleteTransactionByIdProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteTransactionByIdMutation, DeleteTransactionByIdMutationVariables>;
} & TChildProps;
export function withDeleteTransactionById<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteTransactionByIdMutation,
    DeleteTransactionByIdMutationVariables,
    DeleteTransactionByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteTransactionByIdMutation,
    DeleteTransactionByIdMutationVariables,
    DeleteTransactionByIdProps<TChildProps, TDataName>
  >(DeleteTransactionByIdDocument, {
    alias: 'deleteTransactionById',
    ...operationOptions,
  });
}

/**
 * __useDeleteTransactionByIdMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionByIdMutation, { data, loading, error }] = useDeleteTransactionByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTransactionByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteTransactionByIdMutation, DeleteTransactionByIdMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTransactionByIdMutation, DeleteTransactionByIdMutationVariables>(DeleteTransactionByIdDocument, options);
}
export type DeleteTransactionByIdMutationHookResult = ReturnType<typeof useDeleteTransactionByIdMutation>;
export type DeleteTransactionByIdMutationResult = Apollo.MutationResult<DeleteTransactionByIdMutation>;
export type DeleteTransactionByIdMutationOptions = Apollo.BaseMutationOptions<DeleteTransactionByIdMutation, DeleteTransactionByIdMutationVariables>;
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
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserMutation, UpdateUserMutationVariables>, 'mutation'>;

export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateUserMutation, UpdateUserMutationVariables> mutation={UpdateUserDocument} {...props} />
);

export type UpdateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
} & TChildProps;
export function withUpdateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withMutation<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps, TDataName>>(UpdateUserDocument, {
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
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserSettingsDocument = gql`
  mutation updateUserSettings($object: user_settings_insert_input!) {
    insert_user_settings_one(object: $object, on_conflict: { constraint: user_settings_pkey, update_columns: [darkMode, langKey] }) {
      user_id
      langKey
      darkMode
    }
  }
`;
export type UpdateUserSettingsMutationFn = Apollo.MutationFunction<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>;
export type UpdateUserSettingsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>,
  'mutation'
>;

export const UpdateUserSettingsComponent = (props: UpdateUserSettingsComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables> mutation={UpdateUserSettingsDocument} {...props} />
);

export type UpdateUserSettingsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>;
} & TChildProps;
export function withUpdateUserSettings<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateUserSettingsMutation,
    UpdateUserSettingsMutationVariables,
    UpdateUserSettingsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<TProps, UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables, UpdateUserSettingsProps<TChildProps, TDataName>>(
    UpdateUserSettingsDocument,
    {
      alias: 'updateUserSettings',
      ...operationOptions,
    }
  );
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
export function useUpdateUserSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>(UpdateUserSettingsDocument, options);
}
export type UpdateUserSettingsMutationHookResult = ReturnType<typeof useUpdateUserSettingsMutation>;
export type UpdateUserSettingsMutationResult = Apollo.MutationResult<UpdateUserSettingsMutation>;
export type UpdateUserSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>;
export const AllActiveAccountsDocument = gql`
  query allActiveAccounts {
    all_active_accounts(order_by: { name: asc }) {
      account_no
      alternate_name
      category_id
      id
      name
      default
      type
    }
  }
`;
export type AllActiveAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<AllActiveAccountsQuery, AllActiveAccountsQueryVariables>,
  'query'
>;

export const AllActiveAccountsComponent = (props: AllActiveAccountsComponentProps) => (
  <ApolloReactComponents.Query<AllActiveAccountsQuery, AllActiveAccountsQueryVariables> query={AllActiveAccountsDocument} {...props} />
);

export type AllActiveAccountsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<AllActiveAccountsQuery, AllActiveAccountsQueryVariables>;
} & TChildProps;
export function withAllActiveAccounts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllActiveAccountsQuery,
    AllActiveAccountsQueryVariables,
    AllActiveAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, AllActiveAccountsQuery, AllActiveAccountsQueryVariables, AllActiveAccountsProps<TChildProps, TDataName>>(
    AllActiveAccountsDocument,
    {
      alias: 'allActiveAccounts',
      ...operationOptions,
    }
  );
}

/**
 * __useAllActiveAccountsQuery__
 *
 * To run a query within a React component, call `useAllActiveAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllActiveAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllActiveAccountsQuery(baseOptions?: Apollo.QueryHookOptions<AllActiveAccountsQuery, AllActiveAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllActiveAccountsQuery, AllActiveAccountsQueryVariables>(AllActiveAccountsDocument, options);
}
export function useAllActiveAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllActiveAccountsQuery, AllActiveAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllActiveAccountsQuery, AllActiveAccountsQueryVariables>(AllActiveAccountsDocument, options);
}
export type AllActiveAccountsQueryHookResult = ReturnType<typeof useAllActiveAccountsQuery>;
export type AllActiveAccountsLazyQueryHookResult = ReturnType<typeof useAllActiveAccountsLazyQuery>;
export type AllActiveAccountsQueryResult = Apollo.QueryResult<AllActiveAccountsQuery, AllActiveAccountsQueryVariables>;
export const AllAssetLiabilityAccountsDocument = gql`
  query allAssetLiabilityAccounts {
    all_active_accounts(where: { type: { _in: ["A", "L"] } }, order_by: { name: asc }) {
      account_no
      alternate_name
      category_id
      id
      name
      default
      type
    }
  }
`;
export type AllAssetLiabilityAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<AllAssetLiabilityAccountsQuery, AllAssetLiabilityAccountsQueryVariables>,
  'query'
>;

export const AllAssetLiabilityAccountsComponent = (props: AllAssetLiabilityAccountsComponentProps) => (
  <ApolloReactComponents.Query<AllAssetLiabilityAccountsQuery, AllAssetLiabilityAccountsQueryVariables> query={AllAssetLiabilityAccountsDocument} {...props} />
);

export type AllAssetLiabilityAccountsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<AllAssetLiabilityAccountsQuery, AllAssetLiabilityAccountsQueryVariables>;
} & TChildProps;
export function withAllAssetLiabilityAccounts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllAssetLiabilityAccountsQuery,
    AllAssetLiabilityAccountsQueryVariables,
    AllAssetLiabilityAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    AllAssetLiabilityAccountsQuery,
    AllAssetLiabilityAccountsQueryVariables,
    AllAssetLiabilityAccountsProps<TChildProps, TDataName>
  >(AllAssetLiabilityAccountsDocument, {
    alias: 'allAssetLiabilityAccounts',
    ...operationOptions,
  });
}

/**
 * __useAllAssetLiabilityAccountsQuery__
 *
 * To run a query within a React component, call `useAllAssetLiabilityAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAssetLiabilityAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAssetLiabilityAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAssetLiabilityAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllAssetLiabilityAccountsQuery, AllAssetLiabilityAccountsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllAssetLiabilityAccountsQuery, AllAssetLiabilityAccountsQueryVariables>(AllAssetLiabilityAccountsDocument, options);
}
export function useAllAssetLiabilityAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllAssetLiabilityAccountsQuery, AllAssetLiabilityAccountsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllAssetLiabilityAccountsQuery, AllAssetLiabilityAccountsQueryVariables>(AllAssetLiabilityAccountsDocument, options);
}
export type AllAssetLiabilityAccountsQueryHookResult = ReturnType<typeof useAllAssetLiabilityAccountsQuery>;
export type AllAssetLiabilityAccountsLazyQueryHookResult = ReturnType<typeof useAllAssetLiabilityAccountsLazyQuery>;
export type AllAssetLiabilityAccountsQueryResult = Apollo.QueryResult<AllAssetLiabilityAccountsQuery, AllAssetLiabilityAccountsQueryVariables>;
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
      default
      category_id
      category {
        name
      }
    }
    assets_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export type AllAssetsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllAssetsQuery, AllAssetsQueryVariables>, 'query'>;

export const AllAssetsComponent = (props: AllAssetsComponentProps) => (
  <ApolloReactComponents.Query<AllAssetsQuery, AllAssetsQueryVariables> query={AllAssetsDocument} {...props} />
);

export type AllAssetsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<AllAssetsQuery, AllAssetsQueryVariables>;
} & TChildProps;
export function withAllAssets<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, AllAssetsQuery, AllAssetsQueryVariables, AllAssetsProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withQuery<TProps, AllAssetsQuery, AllAssetsQueryVariables, AllAssetsProps<TChildProps, TDataName>>(AllAssetsDocument, {
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
export function useAllAssetsQuery(baseOptions?: Apollo.QueryHookOptions<AllAssetsQuery, AllAssetsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllAssetsQuery, AllAssetsQueryVariables>(AllAssetsDocument, options);
}
export function useAllAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAssetsQuery, AllAssetsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllAssetsQuery, AllAssetsQueryVariables>(AllAssetsDocument, options);
}
export type AllAssetsQueryHookResult = ReturnType<typeof useAllAssetsQuery>;
export type AllAssetsLazyQueryHookResult = ReturnType<typeof useAllAssetsLazyQuery>;
export type AllAssetsQueryResult = Apollo.QueryResult<AllAssetsQuery, AllAssetsQueryVariables>;
export const ActiveAssetAccountsDocument = gql`
  query activeAssetAccounts {
    assets(order_by: { name: asc }, where: { active: { _eq: true } }) {
      id
      name
      default
      alternate_name
      account_no
      category_id
    }
  }
`;
export type ActiveAssetAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<ActiveAssetAccountsQuery, ActiveAssetAccountsQueryVariables>,
  'query'
>;

export const ActiveAssetAccountsComponent = (props: ActiveAssetAccountsComponentProps) => (
  <ApolloReactComponents.Query<ActiveAssetAccountsQuery, ActiveAssetAccountsQueryVariables> query={ActiveAssetAccountsDocument} {...props} />
);

export type ActiveAssetAccountsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<ActiveAssetAccountsQuery, ActiveAssetAccountsQueryVariables>;
} & TChildProps;
export function withActiveAssetAccounts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ActiveAssetAccountsQuery,
    ActiveAssetAccountsQueryVariables,
    ActiveAssetAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, ActiveAssetAccountsQuery, ActiveAssetAccountsQueryVariables, ActiveAssetAccountsProps<TChildProps, TDataName>>(
    ActiveAssetAccountsDocument,
    {
      alias: 'activeAssetAccounts',
      ...operationOptions,
    }
  );
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
export function useActiveAssetAccountsQuery(baseOptions?: Apollo.QueryHookOptions<ActiveAssetAccountsQuery, ActiveAssetAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ActiveAssetAccountsQuery, ActiveAssetAccountsQueryVariables>(ActiveAssetAccountsDocument, options);
}
export function useActiveAssetAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveAssetAccountsQuery, ActiveAssetAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ActiveAssetAccountsQuery, ActiveAssetAccountsQueryVariables>(ActiveAssetAccountsDocument, options);
}
export type ActiveAssetAccountsQueryHookResult = ReturnType<typeof useActiveAssetAccountsQuery>;
export type ActiveAssetAccountsLazyQueryHookResult = ReturnType<typeof useActiveAssetAccountsLazyQuery>;
export type ActiveAssetAccountsQueryResult = Apollo.QueryResult<ActiveAssetAccountsQuery, ActiveAssetAccountsQueryVariables>;
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
export type AllCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllCategoriesQuery, AllCategoriesQueryVariables>, 'query'>;

export const AllCategoriesComponent = (props: AllCategoriesComponentProps) => (
  <ApolloReactComponents.Query<AllCategoriesQuery, AllCategoriesQueryVariables> query={AllCategoriesDocument} {...props} />
);

export type AllCategoriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<AllCategoriesQuery, AllCategoriesQueryVariables>;
} & TChildProps;
export function withAllCategories<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, AllCategoriesQuery, AllCategoriesQueryVariables, AllCategoriesProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withQuery<TProps, AllCategoriesQuery, AllCategoriesQueryVariables, AllCategoriesProps<TChildProps, TDataName>>(AllCategoriesDocument, {
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
export function useAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
}
export function useAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
}
export type AllCategoriesQueryHookResult = ReturnType<typeof useAllCategoriesQuery>;
export type AllCategoriesLazyQueryHookResult = ReturnType<typeof useAllCategoriesLazyQuery>;
export type AllCategoriesQueryResult = Apollo.QueryResult<AllCategoriesQuery, AllCategoriesQueryVariables>;
export const ActiveCategoriesDocument = gql`
  query activeCategories {
    categories(order_by: { name: asc }, where: { active: { _eq: true } }) {
      id
      name
    }
  }
`;
export type ActiveCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ActiveCategoriesQuery, ActiveCategoriesQueryVariables>, 'query'>;

export const ActiveCategoriesComponent = (props: ActiveCategoriesComponentProps) => (
  <ApolloReactComponents.Query<ActiveCategoriesQuery, ActiveCategoriesQueryVariables> query={ActiveCategoriesDocument} {...props} />
);

export type ActiveCategoriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<ActiveCategoriesQuery, ActiveCategoriesQueryVariables>;
} & TChildProps;
export function withActiveCategories<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ActiveCategoriesQuery,
    ActiveCategoriesQueryVariables,
    ActiveCategoriesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, ActiveCategoriesQuery, ActiveCategoriesQueryVariables, ActiveCategoriesProps<TChildProps, TDataName>>(
    ActiveCategoriesDocument,
    {
      alias: 'activeCategories',
      ...operationOptions,
    }
  );
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
export function useActiveCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ActiveCategoriesQuery, ActiveCategoriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ActiveCategoriesQuery, ActiveCategoriesQueryVariables>(ActiveCategoriesDocument, options);
}
export function useActiveCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveCategoriesQuery, ActiveCategoriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ActiveCategoriesQuery, ActiveCategoriesQueryVariables>(ActiveCategoriesDocument, options);
}
export type ActiveCategoriesQueryHookResult = ReturnType<typeof useActiveCategoriesQuery>;
export type ActiveCategoriesLazyQueryHookResult = ReturnType<typeof useActiveCategoriesLazyQuery>;
export type ActiveCategoriesQueryResult = Apollo.QueryResult<ActiveCategoriesQuery, ActiveCategoriesQueryVariables>;
export const AllExpenseAccountsDocument = gql`
  query allExpenseAccounts($limit: Int, $offset: Int) {
    expenses(limit: $limit, offset: $offset, order_by: { name: asc }) {
      id
      name
      alternate_name
      account_no
      active
      created_at
      updated_at
      category_id
      category {
        name
      }
    }
    expenses_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export type AllExpenseAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<AllExpenseAccountsQuery, AllExpenseAccountsQueryVariables>,
  'query'
>;

export const AllExpenseAccountsComponent = (props: AllExpenseAccountsComponentProps) => (
  <ApolloReactComponents.Query<AllExpenseAccountsQuery, AllExpenseAccountsQueryVariables> query={AllExpenseAccountsDocument} {...props} />
);

export type AllExpenseAccountsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<AllExpenseAccountsQuery, AllExpenseAccountsQueryVariables>;
} & TChildProps;
export function withAllExpenseAccounts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllExpenseAccountsQuery,
    AllExpenseAccountsQueryVariables,
    AllExpenseAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, AllExpenseAccountsQuery, AllExpenseAccountsQueryVariables, AllExpenseAccountsProps<TChildProps, TDataName>>(
    AllExpenseAccountsDocument,
    {
      alias: 'allExpenseAccounts',
      ...operationOptions,
    }
  );
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
export function useAllExpenseAccountsQuery(baseOptions?: Apollo.QueryHookOptions<AllExpenseAccountsQuery, AllExpenseAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllExpenseAccountsQuery, AllExpenseAccountsQueryVariables>(AllExpenseAccountsDocument, options);
}
export function useAllExpenseAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllExpenseAccountsQuery, AllExpenseAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllExpenseAccountsQuery, AllExpenseAccountsQueryVariables>(AllExpenseAccountsDocument, options);
}
export type AllExpenseAccountsQueryHookResult = ReturnType<typeof useAllExpenseAccountsQuery>;
export type AllExpenseAccountsLazyQueryHookResult = ReturnType<typeof useAllExpenseAccountsLazyQuery>;
export type AllExpenseAccountsQueryResult = Apollo.QueryResult<AllExpenseAccountsQuery, AllExpenseAccountsQueryVariables>;
export const ActiveExpenseAccountsDocument = gql`
  query activeExpenseAccounts {
    expenses(order_by: { name: asc }, where: { active: { _eq: true } }) {
      id
      name
      alternate_name
      category_id
      account_no
      category {
        name
      }
    }
  }
`;
export type ActiveExpenseAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<ActiveExpenseAccountsQuery, ActiveExpenseAccountsQueryVariables>,
  'query'
>;

export const ActiveExpenseAccountsComponent = (props: ActiveExpenseAccountsComponentProps) => (
  <ApolloReactComponents.Query<ActiveExpenseAccountsQuery, ActiveExpenseAccountsQueryVariables> query={ActiveExpenseAccountsDocument} {...props} />
);

export type ActiveExpenseAccountsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<ActiveExpenseAccountsQuery, ActiveExpenseAccountsQueryVariables>;
} & TChildProps;
export function withActiveExpenseAccounts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ActiveExpenseAccountsQuery,
    ActiveExpenseAccountsQueryVariables,
    ActiveExpenseAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, ActiveExpenseAccountsQuery, ActiveExpenseAccountsQueryVariables, ActiveExpenseAccountsProps<TChildProps, TDataName>>(
    ActiveExpenseAccountsDocument,
    {
      alias: 'activeExpenseAccounts',
      ...operationOptions,
    }
  );
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
export function useActiveExpenseAccountsQuery(baseOptions?: Apollo.QueryHookOptions<ActiveExpenseAccountsQuery, ActiveExpenseAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ActiveExpenseAccountsQuery, ActiveExpenseAccountsQueryVariables>(ActiveExpenseAccountsDocument, options);
}
export function useActiveExpenseAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveExpenseAccountsQuery, ActiveExpenseAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ActiveExpenseAccountsQuery, ActiveExpenseAccountsQueryVariables>(ActiveExpenseAccountsDocument, options);
}
export type ActiveExpenseAccountsQueryHookResult = ReturnType<typeof useActiveExpenseAccountsQuery>;
export type ActiveExpenseAccountsLazyQueryHookResult = ReturnType<typeof useActiveExpenseAccountsLazyQuery>;
export type ActiveExpenseAccountsQueryResult = Apollo.QueryResult<ActiveExpenseAccountsQuery, ActiveExpenseAccountsQueryVariables>;
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
export type FetchUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FetchUserQuery, FetchUserQueryVariables>, 'query'> &
  ({ variables: FetchUserQueryVariables; skip?: boolean } | { skip: boolean });

export const FetchUserComponent = (props: FetchUserComponentProps) => (
  <ApolloReactComponents.Query<FetchUserQuery, FetchUserQueryVariables> query={FetchUserDocument} {...props} />
);

export type FetchUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<FetchUserQuery, FetchUserQueryVariables>;
} & TChildProps;
export function withFetchUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, FetchUserQuery, FetchUserQueryVariables, FetchUserProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withQuery<TProps, FetchUserQuery, FetchUserQueryVariables, FetchUserProps<TChildProps, TDataName>>(FetchUserDocument, {
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
export function useFetchUserQuery(baseOptions: Apollo.QueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, options);
}
export function useFetchUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, options);
}
export type FetchUserQueryHookResult = ReturnType<typeof useFetchUserQuery>;
export type FetchUserLazyQueryHookResult = ReturnType<typeof useFetchUserLazyQuery>;
export type FetchUserQueryResult = Apollo.QueryResult<FetchUserQuery, FetchUserQueryVariables>;
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
  ApolloReactComponents.QueryComponentOptions<FetchUserSettingsQuery, FetchUserSettingsQueryVariables>,
  'query'
> &
  ({ variables: FetchUserSettingsQueryVariables; skip?: boolean } | { skip: boolean });

export const FetchUserSettingsComponent = (props: FetchUserSettingsComponentProps) => (
  <ApolloReactComponents.Query<FetchUserSettingsQuery, FetchUserSettingsQueryVariables> query={FetchUserSettingsDocument} {...props} />
);

export type FetchUserSettingsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<FetchUserSettingsQuery, FetchUserSettingsQueryVariables>;
} & TChildProps;
export function withFetchUserSettings<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FetchUserSettingsQuery,
    FetchUserSettingsQueryVariables,
    FetchUserSettingsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, FetchUserSettingsQuery, FetchUserSettingsQueryVariables, FetchUserSettingsProps<TChildProps, TDataName>>(
    FetchUserSettingsDocument,
    {
      alias: 'fetchUserSettings',
      ...operationOptions,
    }
  );
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
export function useFetchUserSettingsQuery(baseOptions: Apollo.QueryHookOptions<FetchUserSettingsQuery, FetchUserSettingsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchUserSettingsQuery, FetchUserSettingsQueryVariables>(FetchUserSettingsDocument, options);
}
export function useFetchUserSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUserSettingsQuery, FetchUserSettingsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchUserSettingsQuery, FetchUserSettingsQueryVariables>(FetchUserSettingsDocument, options);
}
export type FetchUserSettingsQueryHookResult = ReturnType<typeof useFetchUserSettingsQuery>;
export type FetchUserSettingsLazyQueryHookResult = ReturnType<typeof useFetchUserSettingsLazyQuery>;
export type FetchUserSettingsQueryResult = Apollo.QueryResult<FetchUserSettingsQuery, FetchUserSettingsQueryVariables>;
export const AllGroupsDocument = gql`
  query allGroups {
    groups(order_by: { name: asc }) {
      id
      name
      created_at
      updated_at
    }
  }
`;
export type AllGroupsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllGroupsQuery, AllGroupsQueryVariables>, 'query'>;

export const AllGroupsComponent = (props: AllGroupsComponentProps) => (
  <ApolloReactComponents.Query<AllGroupsQuery, AllGroupsQueryVariables> query={AllGroupsDocument} {...props} />
);

export type AllGroupsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<AllGroupsQuery, AllGroupsQueryVariables>;
} & TChildProps;
export function withAllGroups<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, AllGroupsQuery, AllGroupsQueryVariables, AllGroupsProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withQuery<TProps, AllGroupsQuery, AllGroupsQueryVariables, AllGroupsProps<TChildProps, TDataName>>(AllGroupsDocument, {
    alias: 'allGroups',
    ...operationOptions,
  });
}

/**
 * __useAllGroupsQuery__
 *
 * To run a query within a React component, call `useAllGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGroupsQuery(baseOptions?: Apollo.QueryHookOptions<AllGroupsQuery, AllGroupsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllGroupsQuery, AllGroupsQueryVariables>(AllGroupsDocument, options);
}
export function useAllGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllGroupsQuery, AllGroupsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllGroupsQuery, AllGroupsQueryVariables>(AllGroupsDocument, options);
}
export type AllGroupsQueryHookResult = ReturnType<typeof useAllGroupsQuery>;
export type AllGroupsLazyQueryHookResult = ReturnType<typeof useAllGroupsLazyQuery>;
export type AllGroupsQueryResult = Apollo.QueryResult<AllGroupsQuery, AllGroupsQueryVariables>;
export const Import_AssetDocument = gql`
  query import_asset($limit: Int, $offset: Int) {
    import_asset_file(limit: $limit, offset: $offset, order_by: { updated_at: desc }) {
      id
      file_name
      created_at
      updated_at
      asset {
        name
      }
    }
    import_asset_file_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export type Import_AssetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Import_AssetQuery, Import_AssetQueryVariables>, 'query'>;

export const Import_AssetComponent = (props: Import_AssetComponentProps) => (
  <ApolloReactComponents.Query<Import_AssetQuery, Import_AssetQueryVariables> query={Import_AssetDocument} {...props} />
);

export type Import_AssetProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<Import_AssetQuery, Import_AssetQueryVariables>;
} & TChildProps;
export function withImport_Asset<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, Import_AssetQuery, Import_AssetQueryVariables, Import_AssetProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withQuery<TProps, Import_AssetQuery, Import_AssetQueryVariables, Import_AssetProps<TChildProps, TDataName>>(Import_AssetDocument, {
    alias: 'importAsset',
    ...operationOptions,
  });
}

/**
 * __useImport_AssetQuery__
 *
 * To run a query within a React component, call `useImport_AssetQuery` and pass it any options that fit your needs.
 * When your component renders, `useImport_AssetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImport_AssetQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useImport_AssetQuery(baseOptions?: Apollo.QueryHookOptions<Import_AssetQuery, Import_AssetQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Import_AssetQuery, Import_AssetQueryVariables>(Import_AssetDocument, options);
}
export function useImport_AssetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Import_AssetQuery, Import_AssetQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Import_AssetQuery, Import_AssetQueryVariables>(Import_AssetDocument, options);
}
export type Import_AssetQueryHookResult = ReturnType<typeof useImport_AssetQuery>;
export type Import_AssetLazyQueryHookResult = ReturnType<typeof useImport_AssetLazyQuery>;
export type Import_AssetQueryResult = Apollo.QueryResult<Import_AssetQuery, Import_AssetQueryVariables>;
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
export type AllLabelsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllLabelsQuery, AllLabelsQueryVariables>, 'query'>;

export const AllLabelsComponent = (props: AllLabelsComponentProps) => (
  <ApolloReactComponents.Query<AllLabelsQuery, AllLabelsQueryVariables> query={AllLabelsDocument} {...props} />
);

export type AllLabelsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<AllLabelsQuery, AllLabelsQueryVariables>;
} & TChildProps;
export function withAllLabels<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, AllLabelsQuery, AllLabelsQueryVariables, AllLabelsProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withQuery<TProps, AllLabelsQuery, AllLabelsQueryVariables, AllLabelsProps<TChildProps, TDataName>>(AllLabelsDocument, {
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
export function useAllLabelsQuery(baseOptions?: Apollo.QueryHookOptions<AllLabelsQuery, AllLabelsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllLabelsQuery, AllLabelsQueryVariables>(AllLabelsDocument, options);
}
export function useAllLabelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllLabelsQuery, AllLabelsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllLabelsQuery, AllLabelsQueryVariables>(AllLabelsDocument, options);
}
export type AllLabelsQueryHookResult = ReturnType<typeof useAllLabelsQuery>;
export type AllLabelsLazyQueryHookResult = ReturnType<typeof useAllLabelsLazyQuery>;
export type AllLabelsQueryResult = Apollo.QueryResult<AllLabelsQuery, AllLabelsQueryVariables>;
export const AllLiabilityAccountsDocument = gql`
  query allLiabilityAccounts($limit: Int, $offset: Int) {
    liabilities(limit: $limit, offset: $offset, order_by: { name: asc }) {
      id
      name
      active
      created_at
      updated_at
      category_id
      alternate_name
      account_no
      category {
        name
      }
    }
    liabilities_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export type AllLiabilityAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<AllLiabilityAccountsQuery, AllLiabilityAccountsQueryVariables>,
  'query'
>;

export const AllLiabilityAccountsComponent = (props: AllLiabilityAccountsComponentProps) => (
  <ApolloReactComponents.Query<AllLiabilityAccountsQuery, AllLiabilityAccountsQueryVariables> query={AllLiabilityAccountsDocument} {...props} />
);

export type AllLiabilityAccountsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<AllLiabilityAccountsQuery, AllLiabilityAccountsQueryVariables>;
} & TChildProps;
export function withAllLiabilityAccounts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllLiabilityAccountsQuery,
    AllLiabilityAccountsQueryVariables,
    AllLiabilityAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, AllLiabilityAccountsQuery, AllLiabilityAccountsQueryVariables, AllLiabilityAccountsProps<TChildProps, TDataName>>(
    AllLiabilityAccountsDocument,
    {
      alias: 'allLiabilityAccounts',
      ...operationOptions,
    }
  );
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
export function useAllLiabilityAccountsQuery(baseOptions?: Apollo.QueryHookOptions<AllLiabilityAccountsQuery, AllLiabilityAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllLiabilityAccountsQuery, AllLiabilityAccountsQueryVariables>(AllLiabilityAccountsDocument, options);
}
export function useAllLiabilityAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllLiabilityAccountsQuery, AllLiabilityAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllLiabilityAccountsQuery, AllLiabilityAccountsQueryVariables>(AllLiabilityAccountsDocument, options);
}
export type AllLiabilityAccountsQueryHookResult = ReturnType<typeof useAllLiabilityAccountsQuery>;
export type AllLiabilityAccountsLazyQueryHookResult = ReturnType<typeof useAllLiabilityAccountsLazyQuery>;
export type AllLiabilityAccountsQueryResult = Apollo.QueryResult<AllLiabilityAccountsQuery, AllLiabilityAccountsQueryVariables>;
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
  ApolloReactComponents.QueryComponentOptions<ActiveLiabilityAccountsQuery, ActiveLiabilityAccountsQueryVariables>,
  'query'
>;

export const ActiveLiabilityAccountsComponent = (props: ActiveLiabilityAccountsComponentProps) => (
  <ApolloReactComponents.Query<ActiveLiabilityAccountsQuery, ActiveLiabilityAccountsQueryVariables> query={ActiveLiabilityAccountsDocument} {...props} />
);

export type ActiveLiabilityAccountsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<ActiveLiabilityAccountsQuery, ActiveLiabilityAccountsQueryVariables>;
} & TChildProps;
export function withActiveLiabilityAccounts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
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
export function useActiveLiabilityAccountsQuery(baseOptions?: Apollo.QueryHookOptions<ActiveLiabilityAccountsQuery, ActiveLiabilityAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ActiveLiabilityAccountsQuery, ActiveLiabilityAccountsQueryVariables>(ActiveLiabilityAccountsDocument, options);
}
export function useActiveLiabilityAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ActiveLiabilityAccountsQuery, ActiveLiabilityAccountsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ActiveLiabilityAccountsQuery, ActiveLiabilityAccountsQueryVariables>(ActiveLiabilityAccountsDocument, options);
}
export type ActiveLiabilityAccountsQueryHookResult = ReturnType<typeof useActiveLiabilityAccountsQuery>;
export type ActiveLiabilityAccountsLazyQueryHookResult = ReturnType<typeof useActiveLiabilityAccountsLazyQuery>;
export type ActiveLiabilityAccountsQueryResult = Apollo.QueryResult<ActiveLiabilityAccountsQuery, ActiveLiabilityAccountsQueryVariables>;
export const AllRevenueAccountsDocument = gql`
  query allRevenueAccounts($limit: Int, $offset: Int) {
    revenues(limit: $limit, offset: $offset, order_by: { name: asc }) {
      id
      name
      active
      default
      created_at
      updated_at
      alternate_name
      account_no
      category_id
      category {
        name
      }
    }
    revenues_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export type AllRevenueAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<AllRevenueAccountsQuery, AllRevenueAccountsQueryVariables>,
  'query'
>;

export const AllRevenueAccountsComponent = (props: AllRevenueAccountsComponentProps) => (
  <ApolloReactComponents.Query<AllRevenueAccountsQuery, AllRevenueAccountsQueryVariables> query={AllRevenueAccountsDocument} {...props} />
);

export type AllRevenueAccountsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<AllRevenueAccountsQuery, AllRevenueAccountsQueryVariables>;
} & TChildProps;
export function withAllRevenueAccounts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllRevenueAccountsQuery,
    AllRevenueAccountsQueryVariables,
    AllRevenueAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, AllRevenueAccountsQuery, AllRevenueAccountsQueryVariables, AllRevenueAccountsProps<TChildProps, TDataName>>(
    AllRevenueAccountsDocument,
    {
      alias: 'allRevenueAccounts',
      ...operationOptions,
    }
  );
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
export function useAllRevenueAccountsQuery(baseOptions?: Apollo.QueryHookOptions<AllRevenueAccountsQuery, AllRevenueAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllRevenueAccountsQuery, AllRevenueAccountsQueryVariables>(AllRevenueAccountsDocument, options);
}
export function useAllRevenueAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllRevenueAccountsQuery, AllRevenueAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllRevenueAccountsQuery, AllRevenueAccountsQueryVariables>(AllRevenueAccountsDocument, options);
}
export type AllRevenueAccountsQueryHookResult = ReturnType<typeof useAllRevenueAccountsQuery>;
export type AllRevenueAccountsLazyQueryHookResult = ReturnType<typeof useAllRevenueAccountsLazyQuery>;
export type AllRevenueAccountsQueryResult = Apollo.QueryResult<AllRevenueAccountsQuery, AllRevenueAccountsQueryVariables>;
export const ActiveRevenueAccountsDocument = gql`
  query activeRevenueAccounts {
    revenues(order_by: { name: asc }, where: { active: { _eq: true } }) {
      id
      name
      default
      category_id
    }
  }
`;
export type ActiveRevenueAccountsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<ActiveRevenueAccountsQuery, ActiveRevenueAccountsQueryVariables>,
  'query'
>;

export const ActiveRevenueAccountsComponent = (props: ActiveRevenueAccountsComponentProps) => (
  <ApolloReactComponents.Query<ActiveRevenueAccountsQuery, ActiveRevenueAccountsQueryVariables> query={ActiveRevenueAccountsDocument} {...props} />
);

export type ActiveRevenueAccountsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<ActiveRevenueAccountsQuery, ActiveRevenueAccountsQueryVariables>;
} & TChildProps;
export function withActiveRevenueAccounts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ActiveRevenueAccountsQuery,
    ActiveRevenueAccountsQueryVariables,
    ActiveRevenueAccountsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, ActiveRevenueAccountsQuery, ActiveRevenueAccountsQueryVariables, ActiveRevenueAccountsProps<TChildProps, TDataName>>(
    ActiveRevenueAccountsDocument,
    {
      alias: 'activeRevenueAccounts',
      ...operationOptions,
    }
  );
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
export function useActiveRevenueAccountsQuery(baseOptions?: Apollo.QueryHookOptions<ActiveRevenueAccountsQuery, ActiveRevenueAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ActiveRevenueAccountsQuery, ActiveRevenueAccountsQueryVariables>(ActiveRevenueAccountsDocument, options);
}
export function useActiveRevenueAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveRevenueAccountsQuery, ActiveRevenueAccountsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ActiveRevenueAccountsQuery, ActiveRevenueAccountsQueryVariables>(ActiveRevenueAccountsDocument, options);
}
export type ActiveRevenueAccountsQueryHookResult = ReturnType<typeof useActiveRevenueAccountsQuery>;
export type ActiveRevenueAccountsLazyQueryHookResult = ReturnType<typeof useActiveRevenueAccountsLazyQuery>;
export type ActiveRevenueAccountsQueryResult = Apollo.QueryResult<ActiveRevenueAccountsQuery, ActiveRevenueAccountsQueryVariables>;
export const RecurringTransactionsDocument = gql`
  query recurringTransactions($recurringId: bigint!) {
    recurring_by_pk(id: $recurringId) {
      active
      amount
      category_id
      created_at
      cycle_type
      description
      duration_type
      no_of_times
      start_on
      title
      transaction_type
      until_date
      updated_at
    }
    transactions(where: { recurring_id: { _eq: $recurringId } }, order_by: { transaction_date: asc }) {
      id
      amount
      created_at
      transaction_date
      updated_at
      description
      recurring_id
      category_id
      account_from
      account_to
      transaction_type
      transaction_labels {
        label {
          id
          name
        }
      }
    }
    transactions_aggregate(where: { recurring_id: { _eq: $recurringId } }) {
      aggregate {
        count
        sum {
          amount
        }
      }
    }
  }
`;
export type RecurringTransactionsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<RecurringTransactionsQuery, RecurringTransactionsQueryVariables>,
  'query'
> &
  ({ variables: RecurringTransactionsQueryVariables; skip?: boolean } | { skip: boolean });

export const RecurringTransactionsComponent = (props: RecurringTransactionsComponentProps) => (
  <ApolloReactComponents.Query<RecurringTransactionsQuery, RecurringTransactionsQueryVariables> query={RecurringTransactionsDocument} {...props} />
);

export type RecurringTransactionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<RecurringTransactionsQuery, RecurringTransactionsQueryVariables>;
} & TChildProps;
export function withRecurringTransactions<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RecurringTransactionsQuery,
    RecurringTransactionsQueryVariables,
    RecurringTransactionsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, RecurringTransactionsQuery, RecurringTransactionsQueryVariables, RecurringTransactionsProps<TChildProps, TDataName>>(
    RecurringTransactionsDocument,
    {
      alias: 'recurringTransactions',
      ...operationOptions,
    }
  );
}

/**
 * __useRecurringTransactionsQuery__
 *
 * To run a query within a React component, call `useRecurringTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecurringTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecurringTransactionsQuery({
 *   variables: {
 *      recurringId: // value for 'recurringId'
 *   },
 * });
 */
export function useRecurringTransactionsQuery(baseOptions: Apollo.QueryHookOptions<RecurringTransactionsQuery, RecurringTransactionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RecurringTransactionsQuery, RecurringTransactionsQueryVariables>(RecurringTransactionsDocument, options);
}
export function useRecurringTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecurringTransactionsQuery, RecurringTransactionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RecurringTransactionsQuery, RecurringTransactionsQueryVariables>(RecurringTransactionsDocument, options);
}
export type RecurringTransactionsQueryHookResult = ReturnType<typeof useRecurringTransactionsQuery>;
export type RecurringTransactionsLazyQueryHookResult = ReturnType<typeof useRecurringTransactionsLazyQuery>;
export type RecurringTransactionsQueryResult = Apollo.QueryResult<RecurringTransactionsQuery, RecurringTransactionsQueryVariables>;
export const GetTransactionByIdDocument = gql`
  query getTransactionById($id: bigint!) {
    transactions_by_pk(id: $id) {
      amount
      category_id
      created_at
      description
      id
      recurring_id
      transaction_date
      updated_at
    }
  }
`;
export type GetTransactionByIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>,
  'query'
> &
  ({ variables: GetTransactionByIdQueryVariables; skip?: boolean } | { skip: boolean });

export const GetTransactionByIdComponent = (props: GetTransactionByIdComponentProps) => (
  <ApolloReactComponents.Query<GetTransactionByIdQuery, GetTransactionByIdQueryVariables> query={GetTransactionByIdDocument} {...props} />
);

export type GetTransactionByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>;
} & TChildProps;
export function withGetTransactionById<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetTransactionByIdQuery,
    GetTransactionByIdQueryVariables,
    GetTransactionByIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, GetTransactionByIdQuery, GetTransactionByIdQueryVariables, GetTransactionByIdProps<TChildProps, TDataName>>(
    GetTransactionByIdDocument,
    {
      alias: 'getTransactionById',
      ...operationOptions,
    }
  );
}

/**
 * __useGetTransactionByIdQuery__
 *
 * To run a query within a React component, call `useGetTransactionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTransactionByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>(GetTransactionByIdDocument, options);
}
export function useGetTransactionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>(GetTransactionByIdDocument, options);
}
export type GetTransactionByIdQueryHookResult = ReturnType<typeof useGetTransactionByIdQuery>;
export type GetTransactionByIdLazyQueryHookResult = ReturnType<typeof useGetTransactionByIdLazyQuery>;
export type GetTransactionByIdQueryResult = Apollo.QueryResult<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>;
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
  ApolloReactComponents.SubscriptionComponentOptions<FetchLabelsSubscription, FetchLabelsSubscriptionVariables>,
  'subscription'
>;

export const FetchLabelsComponent = (props: FetchLabelsComponentProps) => (
  <ApolloReactComponents.Subscription<FetchLabelsSubscription, FetchLabelsSubscriptionVariables> subscription={FetchLabelsDocument} {...props} />
);

export type FetchLabelsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<FetchLabelsSubscription, FetchLabelsSubscriptionVariables>;
} & TChildProps;
export function withFetchLabels<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, FetchLabelsSubscription, FetchLabelsSubscriptionVariables, FetchLabelsProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withSubscription<TProps, FetchLabelsSubscription, FetchLabelsSubscriptionVariables, FetchLabelsProps<TChildProps, TDataName>>(
    FetchLabelsDocument,
    {
      alias: 'fetchLabels',
      ...operationOptions,
    }
  );
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
export function useFetchLabelsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<FetchLabelsSubscription, FetchLabelsSubscriptionVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<FetchLabelsSubscription, FetchLabelsSubscriptionVariables>(FetchLabelsDocument, options);
}
export type FetchLabelsSubscriptionHookResult = ReturnType<typeof useFetchLabelsSubscription>;
export type FetchLabelsSubscriptionResult = Apollo.SubscriptionResult<FetchLabelsSubscription>;
export const RecurringDocument = gql`
  subscription recurring($limit: Int, $offset: Int) {
    recurring(limit: $limit, offset: $offset, order_by: { title: asc }) {
      id
      title
      created_at
      updated_at
      cycle_type
      duration_type
      amount
      start_on
      transaction_type
      account_from
      account_to
      category_id
      description
      until_date
      no_of_times
      active
      recurring_labels {
        label_id
      }
      accountInfoByAccountTo {
        name
      }
      account_info {
        name
      }
      transactions_aggregate {
        aggregate {
          sum {
            amount
          }
        }
      }
    }
  }
`;
export type RecurringComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<RecurringSubscription, RecurringSubscriptionVariables>,
  'subscription'
>;

export const RecurringComponent = (props: RecurringComponentProps) => (
  <ApolloReactComponents.Subscription<RecurringSubscription, RecurringSubscriptionVariables> subscription={RecurringDocument} {...props} />
);

export type RecurringProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<RecurringSubscription, RecurringSubscriptionVariables>;
} & TChildProps;
export function withRecurring<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<TProps, RecurringSubscription, RecurringSubscriptionVariables, RecurringProps<TChildProps, TDataName>>
) {
  return ApolloReactHoc.withSubscription<TProps, RecurringSubscription, RecurringSubscriptionVariables, RecurringProps<TChildProps, TDataName>>(
    RecurringDocument,
    {
      alias: 'recurring',
      ...operationOptions,
    }
  );
}

/**
 * __useRecurringSubscription__
 *
 * To run a query within a React component, call `useRecurringSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRecurringSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecurringSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useRecurringSubscription(baseOptions?: Apollo.SubscriptionHookOptions<RecurringSubscription, RecurringSubscriptionVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<RecurringSubscription, RecurringSubscriptionVariables>(RecurringDocument, options);
}
export type RecurringSubscriptionHookResult = ReturnType<typeof useRecurringSubscription>;
export type RecurringSubscriptionResult = Apollo.SubscriptionResult<RecurringSubscription>;
export const RecurringAggregateDocument = gql`
  subscription recurringAggregate {
    recurring_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export type RecurringAggregateComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<RecurringAggregateSubscription, RecurringAggregateSubscriptionVariables>,
  'subscription'
>;

export const RecurringAggregateComponent = (props: RecurringAggregateComponentProps) => (
  <ApolloReactComponents.Subscription<RecurringAggregateSubscription, RecurringAggregateSubscriptionVariables>
    subscription={RecurringAggregateDocument}
    {...props}
  />
);

export type RecurringAggregateProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<RecurringAggregateSubscription, RecurringAggregateSubscriptionVariables>;
} & TChildProps;
export function withRecurringAggregate<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RecurringAggregateSubscription,
    RecurringAggregateSubscriptionVariables,
    RecurringAggregateProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withSubscription<
    TProps,
    RecurringAggregateSubscription,
    RecurringAggregateSubscriptionVariables,
    RecurringAggregateProps<TChildProps, TDataName>
  >(RecurringAggregateDocument, {
    alias: 'recurringAggregate',
    ...operationOptions,
  });
}

/**
 * __useRecurringAggregateSubscription__
 *
 * To run a query within a React component, call `useRecurringAggregateSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRecurringAggregateSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecurringAggregateSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRecurringAggregateSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<RecurringAggregateSubscription, RecurringAggregateSubscriptionVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<RecurringAggregateSubscription, RecurringAggregateSubscriptionVariables>(RecurringAggregateDocument, options);
}
export type RecurringAggregateSubscriptionHookResult = ReturnType<typeof useRecurringAggregateSubscription>;
export type RecurringAggregateSubscriptionResult = Apollo.SubscriptionResult<RecurringAggregateSubscription>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
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
  account_info_stream_cursor_input: Account_Info_Stream_Cursor_Input;
  account_info_stream_cursor_value_input: Account_Info_Stream_Cursor_Value_Input;
  account_info_sum_fields: ResolverTypeWrapper<Account_Info_Sum_Fields>;
  account_info_update_column: Account_Info_Update_Column;
  account_info_updates: Account_Info_Updates;
  account_info_var_pop_fields: ResolverTypeWrapper<Account_Info_Var_Pop_Fields>;
  account_info_var_samp_fields: ResolverTypeWrapper<Account_Info_Var_Samp_Fields>;
  account_info_variance_fields: ResolverTypeWrapper<Account_Info_Variance_Fields>;
  all_active_accounts: ResolverTypeWrapper<All_Active_Accounts>;
  all_active_accounts_aggregate: ResolverTypeWrapper<All_Active_Accounts_Aggregate>;
  all_active_accounts_aggregate_fields: ResolverTypeWrapper<All_Active_Accounts_Aggregate_Fields>;
  all_active_accounts_avg_fields: ResolverTypeWrapper<All_Active_Accounts_Avg_Fields>;
  all_active_accounts_bool_exp: All_Active_Accounts_Bool_Exp;
  all_active_accounts_max_fields: ResolverTypeWrapper<All_Active_Accounts_Max_Fields>;
  all_active_accounts_min_fields: ResolverTypeWrapper<All_Active_Accounts_Min_Fields>;
  all_active_accounts_order_by: All_Active_Accounts_Order_By;
  all_active_accounts_select_column: All_Active_Accounts_Select_Column;
  all_active_accounts_stddev_fields: ResolverTypeWrapper<All_Active_Accounts_Stddev_Fields>;
  all_active_accounts_stddev_pop_fields: ResolverTypeWrapper<All_Active_Accounts_Stddev_Pop_Fields>;
  all_active_accounts_stddev_samp_fields: ResolverTypeWrapper<All_Active_Accounts_Stddev_Samp_Fields>;
  all_active_accounts_stream_cursor_input: All_Active_Accounts_Stream_Cursor_Input;
  all_active_accounts_stream_cursor_value_input: All_Active_Accounts_Stream_Cursor_Value_Input;
  all_active_accounts_sum_fields: ResolverTypeWrapper<All_Active_Accounts_Sum_Fields>;
  all_active_accounts_var_pop_fields: ResolverTypeWrapper<All_Active_Accounts_Var_Pop_Fields>;
  all_active_accounts_var_samp_fields: ResolverTypeWrapper<All_Active_Accounts_Var_Samp_Fields>;
  all_active_accounts_variance_fields: ResolverTypeWrapper<All_Active_Accounts_Variance_Fields>;
  assets: ResolverTypeWrapper<Assets>;
  assets_aggregate: ResolverTypeWrapper<Assets_Aggregate>;
  assets_aggregate_bool_exp: Assets_Aggregate_Bool_Exp;
  assets_aggregate_bool_exp_avg: Assets_Aggregate_Bool_Exp_Avg;
  assets_aggregate_bool_exp_bool_and: Assets_Aggregate_Bool_Exp_Bool_And;
  assets_aggregate_bool_exp_bool_or: Assets_Aggregate_Bool_Exp_Bool_Or;
  assets_aggregate_bool_exp_corr: Assets_Aggregate_Bool_Exp_Corr;
  assets_aggregate_bool_exp_corr_arguments: Assets_Aggregate_Bool_Exp_Corr_Arguments;
  assets_aggregate_bool_exp_count: Assets_Aggregate_Bool_Exp_Count;
  assets_aggregate_bool_exp_covar_samp: Assets_Aggregate_Bool_Exp_Covar_Samp;
  assets_aggregate_bool_exp_covar_samp_arguments: Assets_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  assets_aggregate_bool_exp_max: Assets_Aggregate_Bool_Exp_Max;
  assets_aggregate_bool_exp_min: Assets_Aggregate_Bool_Exp_Min;
  assets_aggregate_bool_exp_stddev_samp: Assets_Aggregate_Bool_Exp_Stddev_Samp;
  assets_aggregate_bool_exp_sum: Assets_Aggregate_Bool_Exp_Sum;
  assets_aggregate_bool_exp_var_samp: Assets_Aggregate_Bool_Exp_Var_Samp;
  assets_aggregate_fields: ResolverTypeWrapper<Assets_Aggregate_Fields>;
  assets_aggregate_order_by: Assets_Aggregate_Order_By;
  assets_arr_rel_insert_input: Assets_Arr_Rel_Insert_Input;
  assets_avg_fields: ResolverTypeWrapper<Assets_Avg_Fields>;
  assets_avg_order_by: Assets_Avg_Order_By;
  assets_bool_exp: Assets_Bool_Exp;
  assets_constraint: Assets_Constraint;
  assets_inc_input: Assets_Inc_Input;
  assets_insert_input: Assets_Insert_Input;
  assets_max_fields: ResolverTypeWrapper<Assets_Max_Fields>;
  assets_max_order_by: Assets_Max_Order_By;
  assets_min_fields: ResolverTypeWrapper<Assets_Min_Fields>;
  assets_min_order_by: Assets_Min_Order_By;
  assets_mutation_response: ResolverTypeWrapper<Assets_Mutation_Response>;
  assets_obj_rel_insert_input: Assets_Obj_Rel_Insert_Input;
  assets_on_conflict: Assets_On_Conflict;
  assets_order_by: Assets_Order_By;
  assets_pk_columns_input: Assets_Pk_Columns_Input;
  assets_select_column: Assets_Select_Column;
  assets_select_column_assets_aggregate_bool_exp_avg_arguments_columns: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  assets_select_column_assets_aggregate_bool_exp_bool_and_arguments_columns: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  assets_select_column_assets_aggregate_bool_exp_bool_or_arguments_columns: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  assets_select_column_assets_aggregate_bool_exp_corr_arguments_columns: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  assets_select_column_assets_aggregate_bool_exp_covar_samp_arguments_columns: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  assets_select_column_assets_aggregate_bool_exp_max_arguments_columns: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Max_Arguments_Columns;
  assets_select_column_assets_aggregate_bool_exp_min_arguments_columns: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Min_Arguments_Columns;
  assets_select_column_assets_aggregate_bool_exp_stddev_samp_arguments_columns: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  assets_select_column_assets_aggregate_bool_exp_sum_arguments_columns: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  assets_select_column_assets_aggregate_bool_exp_var_samp_arguments_columns: Assets_Select_Column_Assets_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  assets_set_input: Assets_Set_Input;
  assets_stddev_fields: ResolverTypeWrapper<Assets_Stddev_Fields>;
  assets_stddev_order_by: Assets_Stddev_Order_By;
  assets_stddev_pop_fields: ResolverTypeWrapper<Assets_Stddev_Pop_Fields>;
  assets_stddev_pop_order_by: Assets_Stddev_Pop_Order_By;
  assets_stddev_samp_fields: ResolverTypeWrapper<Assets_Stddev_Samp_Fields>;
  assets_stddev_samp_order_by: Assets_Stddev_Samp_Order_By;
  assets_stream_cursor_input: Assets_Stream_Cursor_Input;
  assets_stream_cursor_value_input: Assets_Stream_Cursor_Value_Input;
  assets_sum_fields: ResolverTypeWrapper<Assets_Sum_Fields>;
  assets_sum_order_by: Assets_Sum_Order_By;
  assets_update_column: Assets_Update_Column;
  assets_updates: Assets_Updates;
  assets_var_pop_fields: ResolverTypeWrapper<Assets_Var_Pop_Fields>;
  assets_var_pop_order_by: Assets_Var_Pop_Order_By;
  assets_var_samp_fields: ResolverTypeWrapper<Assets_Var_Samp_Fields>;
  assets_var_samp_order_by: Assets_Var_Samp_Order_By;
  assets_variance_fields: ResolverTypeWrapper<Assets_Variance_Fields>;
  assets_variance_order_by: Assets_Variance_Order_By;
  bigint: ResolverTypeWrapper<Scalars['bigint']['output']>;
  bigint_comparison_exp: Bigint_Comparison_Exp;
  bpchar: ResolverTypeWrapper<Scalars['bpchar']['output']>;
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
  categories_stream_cursor_input: Categories_Stream_Cursor_Input;
  categories_stream_cursor_value_input: Categories_Stream_Cursor_Value_Input;
  categories_sum_fields: ResolverTypeWrapper<Categories_Sum_Fields>;
  categories_update_column: Categories_Update_Column;
  categories_updates: Categories_Updates;
  categories_var_pop_fields: ResolverTypeWrapper<Categories_Var_Pop_Fields>;
  categories_var_samp_fields: ResolverTypeWrapper<Categories_Var_Samp_Fields>;
  categories_variance_fields: ResolverTypeWrapper<Categories_Variance_Fields>;
  cursor_ordering: Cursor_Ordering;
  date: ResolverTypeWrapper<Scalars['date']['output']>;
  date_comparison_exp: Date_Comparison_Exp;
  expenses: ResolverTypeWrapper<Expenses>;
  expenses_aggregate: ResolverTypeWrapper<Expenses_Aggregate>;
  expenses_aggregate_bool_exp: Expenses_Aggregate_Bool_Exp;
  expenses_aggregate_bool_exp_bool_and: Expenses_Aggregate_Bool_Exp_Bool_And;
  expenses_aggregate_bool_exp_bool_or: Expenses_Aggregate_Bool_Exp_Bool_Or;
  expenses_aggregate_bool_exp_count: Expenses_Aggregate_Bool_Exp_Count;
  expenses_aggregate_fields: ResolverTypeWrapper<Expenses_Aggregate_Fields>;
  expenses_aggregate_order_by: Expenses_Aggregate_Order_By;
  expenses_arr_rel_insert_input: Expenses_Arr_Rel_Insert_Input;
  expenses_avg_fields: ResolverTypeWrapper<Expenses_Avg_Fields>;
  expenses_avg_order_by: Expenses_Avg_Order_By;
  expenses_bool_exp: Expenses_Bool_Exp;
  expenses_constraint: Expenses_Constraint;
  expenses_inc_input: Expenses_Inc_Input;
  expenses_insert_input: Expenses_Insert_Input;
  expenses_max_fields: ResolverTypeWrapper<Expenses_Max_Fields>;
  expenses_max_order_by: Expenses_Max_Order_By;
  expenses_min_fields: ResolverTypeWrapper<Expenses_Min_Fields>;
  expenses_min_order_by: Expenses_Min_Order_By;
  expenses_mutation_response: ResolverTypeWrapper<Expenses_Mutation_Response>;
  expenses_obj_rel_insert_input: Expenses_Obj_Rel_Insert_Input;
  expenses_on_conflict: Expenses_On_Conflict;
  expenses_order_by: Expenses_Order_By;
  expenses_pk_columns_input: Expenses_Pk_Columns_Input;
  expenses_select_column: Expenses_Select_Column;
  expenses_select_column_expenses_aggregate_bool_exp_bool_and_arguments_columns: Expenses_Select_Column_Expenses_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  expenses_select_column_expenses_aggregate_bool_exp_bool_or_arguments_columns: Expenses_Select_Column_Expenses_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  expenses_set_input: Expenses_Set_Input;
  expenses_stddev_fields: ResolverTypeWrapper<Expenses_Stddev_Fields>;
  expenses_stddev_order_by: Expenses_Stddev_Order_By;
  expenses_stddev_pop_fields: ResolverTypeWrapper<Expenses_Stddev_Pop_Fields>;
  expenses_stddev_pop_order_by: Expenses_Stddev_Pop_Order_By;
  expenses_stddev_samp_fields: ResolverTypeWrapper<Expenses_Stddev_Samp_Fields>;
  expenses_stddev_samp_order_by: Expenses_Stddev_Samp_Order_By;
  expenses_stream_cursor_input: Expenses_Stream_Cursor_Input;
  expenses_stream_cursor_value_input: Expenses_Stream_Cursor_Value_Input;
  expenses_sum_fields: ResolverTypeWrapper<Expenses_Sum_Fields>;
  expenses_sum_order_by: Expenses_Sum_Order_By;
  expenses_update_column: Expenses_Update_Column;
  expenses_updates: Expenses_Updates;
  expenses_var_pop_fields: ResolverTypeWrapper<Expenses_Var_Pop_Fields>;
  expenses_var_pop_order_by: Expenses_Var_Pop_Order_By;
  expenses_var_samp_fields: ResolverTypeWrapper<Expenses_Var_Samp_Fields>;
  expenses_var_samp_order_by: Expenses_Var_Samp_Order_By;
  expenses_variance_fields: ResolverTypeWrapper<Expenses_Variance_Fields>;
  expenses_variance_order_by: Expenses_Variance_Order_By;
  float8: ResolverTypeWrapper<Scalars['float8']['output']>;
  float8_comparison_exp: Float8_Comparison_Exp;
  gauge_data: ResolverTypeWrapper<Gauge_Data>;
  gauge_data_aggregate: ResolverTypeWrapper<Gauge_Data_Aggregate>;
  gauge_data_aggregate_fields: ResolverTypeWrapper<Gauge_Data_Aggregate_Fields>;
  gauge_data_avg_fields: ResolverTypeWrapper<Gauge_Data_Avg_Fields>;
  gauge_data_bool_exp: Gauge_Data_Bool_Exp;
  gauge_data_constraint: Gauge_Data_Constraint;
  gauge_data_inc_input: Gauge_Data_Inc_Input;
  gauge_data_insert_input: Gauge_Data_Insert_Input;
  gauge_data_max_fields: ResolverTypeWrapper<Gauge_Data_Max_Fields>;
  gauge_data_min_fields: ResolverTypeWrapper<Gauge_Data_Min_Fields>;
  gauge_data_mutation_response: ResolverTypeWrapper<Gauge_Data_Mutation_Response>;
  gauge_data_on_conflict: Gauge_Data_On_Conflict;
  gauge_data_order_by: Gauge_Data_Order_By;
  gauge_data_pk_columns_input: Gauge_Data_Pk_Columns_Input;
  gauge_data_select_column: Gauge_Data_Select_Column;
  gauge_data_set_input: Gauge_Data_Set_Input;
  gauge_data_stddev_fields: ResolverTypeWrapper<Gauge_Data_Stddev_Fields>;
  gauge_data_stddev_pop_fields: ResolverTypeWrapper<Gauge_Data_Stddev_Pop_Fields>;
  gauge_data_stddev_samp_fields: ResolverTypeWrapper<Gauge_Data_Stddev_Samp_Fields>;
  gauge_data_stream_cursor_input: Gauge_Data_Stream_Cursor_Input;
  gauge_data_stream_cursor_value_input: Gauge_Data_Stream_Cursor_Value_Input;
  gauge_data_sum_fields: ResolverTypeWrapper<Gauge_Data_Sum_Fields>;
  gauge_data_update_column: Gauge_Data_Update_Column;
  gauge_data_updates: Gauge_Data_Updates;
  gauge_data_var_pop_fields: ResolverTypeWrapper<Gauge_Data_Var_Pop_Fields>;
  gauge_data_var_samp_fields: ResolverTypeWrapper<Gauge_Data_Var_Samp_Fields>;
  gauge_data_variance_fields: ResolverTypeWrapper<Gauge_Data_Variance_Fields>;
  groups: ResolverTypeWrapper<Groups>;
  groups_aggregate: ResolverTypeWrapper<Groups_Aggregate>;
  groups_aggregate_fields: ResolverTypeWrapper<Groups_Aggregate_Fields>;
  groups_avg_fields: ResolverTypeWrapper<Groups_Avg_Fields>;
  groups_bool_exp: Groups_Bool_Exp;
  groups_constraint: Groups_Constraint;
  groups_inc_input: Groups_Inc_Input;
  groups_insert_input: Groups_Insert_Input;
  groups_max_fields: ResolverTypeWrapper<Groups_Max_Fields>;
  groups_min_fields: ResolverTypeWrapper<Groups_Min_Fields>;
  groups_mutation_response: ResolverTypeWrapper<Groups_Mutation_Response>;
  groups_on_conflict: Groups_On_Conflict;
  groups_order_by: Groups_Order_By;
  groups_pk_columns_input: Groups_Pk_Columns_Input;
  groups_select_column: Groups_Select_Column;
  groups_set_input: Groups_Set_Input;
  groups_stddev_fields: ResolverTypeWrapper<Groups_Stddev_Fields>;
  groups_stddev_pop_fields: ResolverTypeWrapper<Groups_Stddev_Pop_Fields>;
  groups_stddev_samp_fields: ResolverTypeWrapper<Groups_Stddev_Samp_Fields>;
  groups_stream_cursor_input: Groups_Stream_Cursor_Input;
  groups_stream_cursor_value_input: Groups_Stream_Cursor_Value_Input;
  groups_sum_fields: ResolverTypeWrapper<Groups_Sum_Fields>;
  groups_update_column: Groups_Update_Column;
  groups_updates: Groups_Updates;
  groups_var_pop_fields: ResolverTypeWrapper<Groups_Var_Pop_Fields>;
  groups_var_samp_fields: ResolverTypeWrapper<Groups_Var_Samp_Fields>;
  groups_variance_fields: ResolverTypeWrapper<Groups_Variance_Fields>;
  historical_data: ResolverTypeWrapper<Historical_Data>;
  historical_data_aggregate: ResolverTypeWrapper<Historical_Data_Aggregate>;
  historical_data_aggregate_fields: ResolverTypeWrapper<Historical_Data_Aggregate_Fields>;
  historical_data_avg_fields: ResolverTypeWrapper<Historical_Data_Avg_Fields>;
  historical_data_bool_exp: Historical_Data_Bool_Exp;
  historical_data_constraint: Historical_Data_Constraint;
  historical_data_inc_input: Historical_Data_Inc_Input;
  historical_data_insert_input: Historical_Data_Insert_Input;
  historical_data_max_fields: ResolverTypeWrapper<Historical_Data_Max_Fields>;
  historical_data_min_fields: ResolverTypeWrapper<Historical_Data_Min_Fields>;
  historical_data_mutation_response: ResolverTypeWrapper<Historical_Data_Mutation_Response>;
  historical_data_on_conflict: Historical_Data_On_Conflict;
  historical_data_order_by: Historical_Data_Order_By;
  historical_data_pk_columns_input: Historical_Data_Pk_Columns_Input;
  historical_data_select_column: Historical_Data_Select_Column;
  historical_data_set_input: Historical_Data_Set_Input;
  historical_data_stddev_fields: ResolverTypeWrapper<Historical_Data_Stddev_Fields>;
  historical_data_stddev_pop_fields: ResolverTypeWrapper<Historical_Data_Stddev_Pop_Fields>;
  historical_data_stddev_samp_fields: ResolverTypeWrapper<Historical_Data_Stddev_Samp_Fields>;
  historical_data_stream_cursor_input: Historical_Data_Stream_Cursor_Input;
  historical_data_stream_cursor_value_input: Historical_Data_Stream_Cursor_Value_Input;
  historical_data_sum_fields: ResolverTypeWrapper<Historical_Data_Sum_Fields>;
  historical_data_update_column: Historical_Data_Update_Column;
  historical_data_updates: Historical_Data_Updates;
  historical_data_var_pop_fields: ResolverTypeWrapper<Historical_Data_Var_Pop_Fields>;
  historical_data_var_samp_fields: ResolverTypeWrapper<Historical_Data_Var_Samp_Fields>;
  historical_data_variance_fields: ResolverTypeWrapper<Historical_Data_Variance_Fields>;
  import_asset_file: ResolverTypeWrapper<Import_Asset_File>;
  import_asset_file_aggregate: ResolverTypeWrapper<Import_Asset_File_Aggregate>;
  import_asset_file_aggregate_bool_exp: Import_Asset_File_Aggregate_Bool_Exp;
  import_asset_file_aggregate_bool_exp_count: Import_Asset_File_Aggregate_Bool_Exp_Count;
  import_asset_file_aggregate_fields: ResolverTypeWrapper<Import_Asset_File_Aggregate_Fields>;
  import_asset_file_aggregate_order_by: Import_Asset_File_Aggregate_Order_By;
  import_asset_file_arr_rel_insert_input: Import_Asset_File_Arr_Rel_Insert_Input;
  import_asset_file_avg_fields: ResolverTypeWrapper<Import_Asset_File_Avg_Fields>;
  import_asset_file_avg_order_by: Import_Asset_File_Avg_Order_By;
  import_asset_file_bool_exp: Import_Asset_File_Bool_Exp;
  import_asset_file_constraint: Import_Asset_File_Constraint;
  import_asset_file_inc_input: Import_Asset_File_Inc_Input;
  import_asset_file_insert_input: Import_Asset_File_Insert_Input;
  import_asset_file_max_fields: ResolverTypeWrapper<Import_Asset_File_Max_Fields>;
  import_asset_file_max_order_by: Import_Asset_File_Max_Order_By;
  import_asset_file_min_fields: ResolverTypeWrapper<Import_Asset_File_Min_Fields>;
  import_asset_file_min_order_by: Import_Asset_File_Min_Order_By;
  import_asset_file_mutation_response: ResolverTypeWrapper<Import_Asset_File_Mutation_Response>;
  import_asset_file_on_conflict: Import_Asset_File_On_Conflict;
  import_asset_file_order_by: Import_Asset_File_Order_By;
  import_asset_file_pk_columns_input: Import_Asset_File_Pk_Columns_Input;
  import_asset_file_select_column: Import_Asset_File_Select_Column;
  import_asset_file_set_input: Import_Asset_File_Set_Input;
  import_asset_file_stddev_fields: ResolverTypeWrapper<Import_Asset_File_Stddev_Fields>;
  import_asset_file_stddev_order_by: Import_Asset_File_Stddev_Order_By;
  import_asset_file_stddev_pop_fields: ResolverTypeWrapper<Import_Asset_File_Stddev_Pop_Fields>;
  import_asset_file_stddev_pop_order_by: Import_Asset_File_Stddev_Pop_Order_By;
  import_asset_file_stddev_samp_fields: ResolverTypeWrapper<Import_Asset_File_Stddev_Samp_Fields>;
  import_asset_file_stddev_samp_order_by: Import_Asset_File_Stddev_Samp_Order_By;
  import_asset_file_stream_cursor_input: Import_Asset_File_Stream_Cursor_Input;
  import_asset_file_stream_cursor_value_input: Import_Asset_File_Stream_Cursor_Value_Input;
  import_asset_file_sum_fields: ResolverTypeWrapper<Import_Asset_File_Sum_Fields>;
  import_asset_file_sum_order_by: Import_Asset_File_Sum_Order_By;
  import_asset_file_update_column: Import_Asset_File_Update_Column;
  import_asset_file_updates: Import_Asset_File_Updates;
  import_asset_file_var_pop_fields: ResolverTypeWrapper<Import_Asset_File_Var_Pop_Fields>;
  import_asset_file_var_pop_order_by: Import_Asset_File_Var_Pop_Order_By;
  import_asset_file_var_samp_fields: ResolverTypeWrapper<Import_Asset_File_Var_Samp_Fields>;
  import_asset_file_var_samp_order_by: Import_Asset_File_Var_Samp_Order_By;
  import_asset_file_variance_fields: ResolverTypeWrapper<Import_Asset_File_Variance_Fields>;
  import_asset_file_variance_order_by: Import_Asset_File_Variance_Order_By;
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
  labels_stream_cursor_input: Labels_Stream_Cursor_Input;
  labels_stream_cursor_value_input: Labels_Stream_Cursor_Value_Input;
  labels_sum_fields: ResolverTypeWrapper<Labels_Sum_Fields>;
  labels_update_column: Labels_Update_Column;
  labels_updates: Labels_Updates;
  labels_var_pop_fields: ResolverTypeWrapper<Labels_Var_Pop_Fields>;
  labels_var_samp_fields: ResolverTypeWrapper<Labels_Var_Samp_Fields>;
  labels_variance_fields: ResolverTypeWrapper<Labels_Variance_Fields>;
  liabilities: ResolverTypeWrapper<Liabilities>;
  liabilities_aggregate: ResolverTypeWrapper<Liabilities_Aggregate>;
  liabilities_aggregate_bool_exp: Liabilities_Aggregate_Bool_Exp;
  liabilities_aggregate_bool_exp_bool_and: Liabilities_Aggregate_Bool_Exp_Bool_And;
  liabilities_aggregate_bool_exp_bool_or: Liabilities_Aggregate_Bool_Exp_Bool_Or;
  liabilities_aggregate_bool_exp_count: Liabilities_Aggregate_Bool_Exp_Count;
  liabilities_aggregate_fields: ResolverTypeWrapper<Liabilities_Aggregate_Fields>;
  liabilities_aggregate_order_by: Liabilities_Aggregate_Order_By;
  liabilities_arr_rel_insert_input: Liabilities_Arr_Rel_Insert_Input;
  liabilities_avg_fields: ResolverTypeWrapper<Liabilities_Avg_Fields>;
  liabilities_avg_order_by: Liabilities_Avg_Order_By;
  liabilities_bool_exp: Liabilities_Bool_Exp;
  liabilities_constraint: Liabilities_Constraint;
  liabilities_inc_input: Liabilities_Inc_Input;
  liabilities_insert_input: Liabilities_Insert_Input;
  liabilities_max_fields: ResolverTypeWrapper<Liabilities_Max_Fields>;
  liabilities_max_order_by: Liabilities_Max_Order_By;
  liabilities_min_fields: ResolverTypeWrapper<Liabilities_Min_Fields>;
  liabilities_min_order_by: Liabilities_Min_Order_By;
  liabilities_mutation_response: ResolverTypeWrapper<Liabilities_Mutation_Response>;
  liabilities_obj_rel_insert_input: Liabilities_Obj_Rel_Insert_Input;
  liabilities_on_conflict: Liabilities_On_Conflict;
  liabilities_order_by: Liabilities_Order_By;
  liabilities_pk_columns_input: Liabilities_Pk_Columns_Input;
  liabilities_select_column: Liabilities_Select_Column;
  liabilities_select_column_liabilities_aggregate_bool_exp_bool_and_arguments_columns: Liabilities_Select_Column_Liabilities_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  liabilities_select_column_liabilities_aggregate_bool_exp_bool_or_arguments_columns: Liabilities_Select_Column_Liabilities_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  liabilities_set_input: Liabilities_Set_Input;
  liabilities_stddev_fields: ResolverTypeWrapper<Liabilities_Stddev_Fields>;
  liabilities_stddev_order_by: Liabilities_Stddev_Order_By;
  liabilities_stddev_pop_fields: ResolverTypeWrapper<Liabilities_Stddev_Pop_Fields>;
  liabilities_stddev_pop_order_by: Liabilities_Stddev_Pop_Order_By;
  liabilities_stddev_samp_fields: ResolverTypeWrapper<Liabilities_Stddev_Samp_Fields>;
  liabilities_stddev_samp_order_by: Liabilities_Stddev_Samp_Order_By;
  liabilities_stream_cursor_input: Liabilities_Stream_Cursor_Input;
  liabilities_stream_cursor_value_input: Liabilities_Stream_Cursor_Value_Input;
  liabilities_sum_fields: ResolverTypeWrapper<Liabilities_Sum_Fields>;
  liabilities_sum_order_by: Liabilities_Sum_Order_By;
  liabilities_update_column: Liabilities_Update_Column;
  liabilities_updates: Liabilities_Updates;
  liabilities_var_pop_fields: ResolverTypeWrapper<Liabilities_Var_Pop_Fields>;
  liabilities_var_pop_order_by: Liabilities_Var_Pop_Order_By;
  liabilities_var_samp_fields: ResolverTypeWrapper<Liabilities_Var_Samp_Fields>;
  liabilities_var_samp_order_by: Liabilities_Var_Samp_Order_By;
  liabilities_variance_fields: ResolverTypeWrapper<Liabilities_Variance_Fields>;
  liabilities_variance_order_by: Liabilities_Variance_Order_By;
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
  notifications_stream_cursor_input: Notifications_Stream_Cursor_Input;
  notifications_stream_cursor_value_input: Notifications_Stream_Cursor_Value_Input;
  notifications_sum_fields: ResolverTypeWrapper<Notifications_Sum_Fields>;
  notifications_update_column: Notifications_Update_Column;
  notifications_updates: Notifications_Updates;
  notifications_var_pop_fields: ResolverTypeWrapper<Notifications_Var_Pop_Fields>;
  notifications_var_samp_fields: ResolverTypeWrapper<Notifications_Var_Samp_Fields>;
  notifications_variance_fields: ResolverTypeWrapper<Notifications_Variance_Fields>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  recurring: ResolverTypeWrapper<Recurring>;
  recurring_aggregate: ResolverTypeWrapper<Recurring_Aggregate>;
  recurring_aggregate_bool_exp: Recurring_Aggregate_Bool_Exp;
  recurring_aggregate_bool_exp_avg: Recurring_Aggregate_Bool_Exp_Avg;
  recurring_aggregate_bool_exp_bool_and: Recurring_Aggregate_Bool_Exp_Bool_And;
  recurring_aggregate_bool_exp_bool_or: Recurring_Aggregate_Bool_Exp_Bool_Or;
  recurring_aggregate_bool_exp_corr: Recurring_Aggregate_Bool_Exp_Corr;
  recurring_aggregate_bool_exp_corr_arguments: Recurring_Aggregate_Bool_Exp_Corr_Arguments;
  recurring_aggregate_bool_exp_count: Recurring_Aggregate_Bool_Exp_Count;
  recurring_aggregate_bool_exp_covar_samp: Recurring_Aggregate_Bool_Exp_Covar_Samp;
  recurring_aggregate_bool_exp_covar_samp_arguments: Recurring_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  recurring_aggregate_bool_exp_max: Recurring_Aggregate_Bool_Exp_Max;
  recurring_aggregate_bool_exp_min: Recurring_Aggregate_Bool_Exp_Min;
  recurring_aggregate_bool_exp_stddev_samp: Recurring_Aggregate_Bool_Exp_Stddev_Samp;
  recurring_aggregate_bool_exp_sum: Recurring_Aggregate_Bool_Exp_Sum;
  recurring_aggregate_bool_exp_var_samp: Recurring_Aggregate_Bool_Exp_Var_Samp;
  recurring_aggregate_fields: ResolverTypeWrapper<Recurring_Aggregate_Fields>;
  recurring_aggregate_order_by: Recurring_Aggregate_Order_By;
  recurring_arr_rel_insert_input: Recurring_Arr_Rel_Insert_Input;
  recurring_avg_fields: ResolverTypeWrapper<Recurring_Avg_Fields>;
  recurring_avg_order_by: Recurring_Avg_Order_By;
  recurring_bool_exp: Recurring_Bool_Exp;
  recurring_constraint: Recurring_Constraint;
  recurring_inc_input: Recurring_Inc_Input;
  recurring_insert_input: Recurring_Insert_Input;
  recurring_labels: ResolverTypeWrapper<Recurring_Labels>;
  recurring_labels_aggregate: ResolverTypeWrapper<Recurring_Labels_Aggregate>;
  recurring_labels_aggregate_bool_exp: Recurring_Labels_Aggregate_Bool_Exp;
  recurring_labels_aggregate_bool_exp_count: Recurring_Labels_Aggregate_Bool_Exp_Count;
  recurring_labels_aggregate_fields: ResolverTypeWrapper<Recurring_Labels_Aggregate_Fields>;
  recurring_labels_aggregate_order_by: Recurring_Labels_Aggregate_Order_By;
  recurring_labels_arr_rel_insert_input: Recurring_Labels_Arr_Rel_Insert_Input;
  recurring_labels_avg_fields: ResolverTypeWrapper<Recurring_Labels_Avg_Fields>;
  recurring_labels_avg_order_by: Recurring_Labels_Avg_Order_By;
  recurring_labels_bool_exp: Recurring_Labels_Bool_Exp;
  recurring_labels_constraint: Recurring_Labels_Constraint;
  recurring_labels_inc_input: Recurring_Labels_Inc_Input;
  recurring_labels_insert_input: Recurring_Labels_Insert_Input;
  recurring_labels_max_fields: ResolverTypeWrapper<Recurring_Labels_Max_Fields>;
  recurring_labels_max_order_by: Recurring_Labels_Max_Order_By;
  recurring_labels_min_fields: ResolverTypeWrapper<Recurring_Labels_Min_Fields>;
  recurring_labels_min_order_by: Recurring_Labels_Min_Order_By;
  recurring_labels_mutation_response: ResolverTypeWrapper<Recurring_Labels_Mutation_Response>;
  recurring_labels_on_conflict: Recurring_Labels_On_Conflict;
  recurring_labels_order_by: Recurring_Labels_Order_By;
  recurring_labels_pk_columns_input: Recurring_Labels_Pk_Columns_Input;
  recurring_labels_select_column: Recurring_Labels_Select_Column;
  recurring_labels_set_input: Recurring_Labels_Set_Input;
  recurring_labels_stddev_fields: ResolverTypeWrapper<Recurring_Labels_Stddev_Fields>;
  recurring_labels_stddev_order_by: Recurring_Labels_Stddev_Order_By;
  recurring_labels_stddev_pop_fields: ResolverTypeWrapper<Recurring_Labels_Stddev_Pop_Fields>;
  recurring_labels_stddev_pop_order_by: Recurring_Labels_Stddev_Pop_Order_By;
  recurring_labels_stddev_samp_fields: ResolverTypeWrapper<Recurring_Labels_Stddev_Samp_Fields>;
  recurring_labels_stddev_samp_order_by: Recurring_Labels_Stddev_Samp_Order_By;
  recurring_labels_stream_cursor_input: Recurring_Labels_Stream_Cursor_Input;
  recurring_labels_stream_cursor_value_input: Recurring_Labels_Stream_Cursor_Value_Input;
  recurring_labels_sum_fields: ResolverTypeWrapper<Recurring_Labels_Sum_Fields>;
  recurring_labels_sum_order_by: Recurring_Labels_Sum_Order_By;
  recurring_labels_update_column: Recurring_Labels_Update_Column;
  recurring_labels_updates: Recurring_Labels_Updates;
  recurring_labels_var_pop_fields: ResolverTypeWrapper<Recurring_Labels_Var_Pop_Fields>;
  recurring_labels_var_pop_order_by: Recurring_Labels_Var_Pop_Order_By;
  recurring_labels_var_samp_fields: ResolverTypeWrapper<Recurring_Labels_Var_Samp_Fields>;
  recurring_labels_var_samp_order_by: Recurring_Labels_Var_Samp_Order_By;
  recurring_labels_variance_fields: ResolverTypeWrapper<Recurring_Labels_Variance_Fields>;
  recurring_labels_variance_order_by: Recurring_Labels_Variance_Order_By;
  recurring_max_fields: ResolverTypeWrapper<Recurring_Max_Fields>;
  recurring_max_order_by: Recurring_Max_Order_By;
  recurring_min_fields: ResolverTypeWrapper<Recurring_Min_Fields>;
  recurring_min_order_by: Recurring_Min_Order_By;
  recurring_mutation_response: ResolverTypeWrapper<Recurring_Mutation_Response>;
  recurring_obj_rel_insert_input: Recurring_Obj_Rel_Insert_Input;
  recurring_on_conflict: Recurring_On_Conflict;
  recurring_order_by: Recurring_Order_By;
  recurring_pk_columns_input: Recurring_Pk_Columns_Input;
  recurring_select_column: Recurring_Select_Column;
  recurring_select_column_recurring_aggregate_bool_exp_avg_arguments_columns: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  recurring_select_column_recurring_aggregate_bool_exp_bool_and_arguments_columns: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  recurring_select_column_recurring_aggregate_bool_exp_bool_or_arguments_columns: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  recurring_select_column_recurring_aggregate_bool_exp_corr_arguments_columns: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  recurring_select_column_recurring_aggregate_bool_exp_covar_samp_arguments_columns: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  recurring_select_column_recurring_aggregate_bool_exp_max_arguments_columns: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Max_Arguments_Columns;
  recurring_select_column_recurring_aggregate_bool_exp_min_arguments_columns: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Min_Arguments_Columns;
  recurring_select_column_recurring_aggregate_bool_exp_stddev_samp_arguments_columns: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  recurring_select_column_recurring_aggregate_bool_exp_sum_arguments_columns: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  recurring_select_column_recurring_aggregate_bool_exp_var_samp_arguments_columns: Recurring_Select_Column_Recurring_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  recurring_set_input: Recurring_Set_Input;
  recurring_stddev_fields: ResolverTypeWrapper<Recurring_Stddev_Fields>;
  recurring_stddev_order_by: Recurring_Stddev_Order_By;
  recurring_stddev_pop_fields: ResolverTypeWrapper<Recurring_Stddev_Pop_Fields>;
  recurring_stddev_pop_order_by: Recurring_Stddev_Pop_Order_By;
  recurring_stddev_samp_fields: ResolverTypeWrapper<Recurring_Stddev_Samp_Fields>;
  recurring_stddev_samp_order_by: Recurring_Stddev_Samp_Order_By;
  recurring_stream_cursor_input: Recurring_Stream_Cursor_Input;
  recurring_stream_cursor_value_input: Recurring_Stream_Cursor_Value_Input;
  recurring_sum_fields: ResolverTypeWrapper<Recurring_Sum_Fields>;
  recurring_sum_order_by: Recurring_Sum_Order_By;
  recurring_update_column: Recurring_Update_Column;
  recurring_updates: Recurring_Updates;
  recurring_var_pop_fields: ResolverTypeWrapper<Recurring_Var_Pop_Fields>;
  recurring_var_pop_order_by: Recurring_Var_Pop_Order_By;
  recurring_var_samp_fields: ResolverTypeWrapper<Recurring_Var_Samp_Fields>;
  recurring_var_samp_order_by: Recurring_Var_Samp_Order_By;
  recurring_variance_fields: ResolverTypeWrapper<Recurring_Variance_Fields>;
  recurring_variance_order_by: Recurring_Variance_Order_By;
  revenues: ResolverTypeWrapper<Revenues>;
  revenues_aggregate: ResolverTypeWrapper<Revenues_Aggregate>;
  revenues_aggregate_bool_exp: Revenues_Aggregate_Bool_Exp;
  revenues_aggregate_bool_exp_bool_and: Revenues_Aggregate_Bool_Exp_Bool_And;
  revenues_aggregate_bool_exp_bool_or: Revenues_Aggregate_Bool_Exp_Bool_Or;
  revenues_aggregate_bool_exp_count: Revenues_Aggregate_Bool_Exp_Count;
  revenues_aggregate_fields: ResolverTypeWrapper<Revenues_Aggregate_Fields>;
  revenues_aggregate_order_by: Revenues_Aggregate_Order_By;
  revenues_arr_rel_insert_input: Revenues_Arr_Rel_Insert_Input;
  revenues_avg_fields: ResolverTypeWrapper<Revenues_Avg_Fields>;
  revenues_avg_order_by: Revenues_Avg_Order_By;
  revenues_bool_exp: Revenues_Bool_Exp;
  revenues_constraint: Revenues_Constraint;
  revenues_inc_input: Revenues_Inc_Input;
  revenues_insert_input: Revenues_Insert_Input;
  revenues_max_fields: ResolverTypeWrapper<Revenues_Max_Fields>;
  revenues_max_order_by: Revenues_Max_Order_By;
  revenues_min_fields: ResolverTypeWrapper<Revenues_Min_Fields>;
  revenues_min_order_by: Revenues_Min_Order_By;
  revenues_mutation_response: ResolverTypeWrapper<Revenues_Mutation_Response>;
  revenues_obj_rel_insert_input: Revenues_Obj_Rel_Insert_Input;
  revenues_on_conflict: Revenues_On_Conflict;
  revenues_order_by: Revenues_Order_By;
  revenues_pk_columns_input: Revenues_Pk_Columns_Input;
  revenues_select_column: Revenues_Select_Column;
  revenues_select_column_revenues_aggregate_bool_exp_bool_and_arguments_columns: Revenues_Select_Column_Revenues_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  revenues_select_column_revenues_aggregate_bool_exp_bool_or_arguments_columns: Revenues_Select_Column_Revenues_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  revenues_set_input: Revenues_Set_Input;
  revenues_stddev_fields: ResolverTypeWrapper<Revenues_Stddev_Fields>;
  revenues_stddev_order_by: Revenues_Stddev_Order_By;
  revenues_stddev_pop_fields: ResolverTypeWrapper<Revenues_Stddev_Pop_Fields>;
  revenues_stddev_pop_order_by: Revenues_Stddev_Pop_Order_By;
  revenues_stddev_samp_fields: ResolverTypeWrapper<Revenues_Stddev_Samp_Fields>;
  revenues_stddev_samp_order_by: Revenues_Stddev_Samp_Order_By;
  revenues_stream_cursor_input: Revenues_Stream_Cursor_Input;
  revenues_stream_cursor_value_input: Revenues_Stream_Cursor_Value_Input;
  revenues_sum_fields: ResolverTypeWrapper<Revenues_Sum_Fields>;
  revenues_sum_order_by: Revenues_Sum_Order_By;
  revenues_update_column: Revenues_Update_Column;
  revenues_updates: Revenues_Updates;
  revenues_var_pop_fields: ResolverTypeWrapper<Revenues_Var_Pop_Fields>;
  revenues_var_pop_order_by: Revenues_Var_Pop_Order_By;
  revenues_var_samp_fields: ResolverTypeWrapper<Revenues_Var_Samp_Fields>;
  revenues_var_samp_order_by: Revenues_Var_Samp_Order_By;
  revenues_variance_fields: ResolverTypeWrapper<Revenues_Variance_Fields>;
  revenues_variance_order_by: Revenues_Variance_Order_By;
  smallint: ResolverTypeWrapper<Scalars['smallint']['output']>;
  smallint_comparison_exp: Smallint_Comparison_Exp;
  status_data: ResolverTypeWrapper<Status_Data>;
  status_data_aggregate: ResolverTypeWrapper<Status_Data_Aggregate>;
  status_data_aggregate_fields: ResolverTypeWrapper<Status_Data_Aggregate_Fields>;
  status_data_avg_fields: ResolverTypeWrapper<Status_Data_Avg_Fields>;
  status_data_bool_exp: Status_Data_Bool_Exp;
  status_data_constraint: Status_Data_Constraint;
  status_data_inc_input: Status_Data_Inc_Input;
  status_data_insert_input: Status_Data_Insert_Input;
  status_data_max_fields: ResolverTypeWrapper<Status_Data_Max_Fields>;
  status_data_min_fields: ResolverTypeWrapper<Status_Data_Min_Fields>;
  status_data_mutation_response: ResolverTypeWrapper<Status_Data_Mutation_Response>;
  status_data_on_conflict: Status_Data_On_Conflict;
  status_data_order_by: Status_Data_Order_By;
  status_data_pk_columns_input: Status_Data_Pk_Columns_Input;
  status_data_select_column: Status_Data_Select_Column;
  status_data_set_input: Status_Data_Set_Input;
  status_data_stddev_fields: ResolverTypeWrapper<Status_Data_Stddev_Fields>;
  status_data_stddev_pop_fields: ResolverTypeWrapper<Status_Data_Stddev_Pop_Fields>;
  status_data_stddev_samp_fields: ResolverTypeWrapper<Status_Data_Stddev_Samp_Fields>;
  status_data_stream_cursor_input: Status_Data_Stream_Cursor_Input;
  status_data_stream_cursor_value_input: Status_Data_Stream_Cursor_Value_Input;
  status_data_sum_fields: ResolverTypeWrapper<Status_Data_Sum_Fields>;
  status_data_update_column: Status_Data_Update_Column;
  status_data_updates: Status_Data_Updates;
  status_data_var_pop_fields: ResolverTypeWrapper<Status_Data_Var_Pop_Fields>;
  status_data_var_samp_fields: ResolverTypeWrapper<Status_Data_Var_Samp_Fields>;
  status_data_variance_fields: ResolverTypeWrapper<Status_Data_Variance_Fields>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamp: ResolverTypeWrapper<Scalars['timestamp']['output']>;
  timestamp_comparison_exp: Timestamp_Comparison_Exp;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']['output']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  transaction_accounts: ResolverTypeWrapper<Transaction_Accounts>;
  transaction_accounts_aggregate: ResolverTypeWrapper<Transaction_Accounts_Aggregate>;
  transaction_accounts_aggregate_bool_exp: Transaction_Accounts_Aggregate_Bool_Exp;
  transaction_accounts_aggregate_bool_exp_avg: Transaction_Accounts_Aggregate_Bool_Exp_Avg;
  transaction_accounts_aggregate_bool_exp_corr: Transaction_Accounts_Aggregate_Bool_Exp_Corr;
  transaction_accounts_aggregate_bool_exp_corr_arguments: Transaction_Accounts_Aggregate_Bool_Exp_Corr_Arguments;
  transaction_accounts_aggregate_bool_exp_count: Transaction_Accounts_Aggregate_Bool_Exp_Count;
  transaction_accounts_aggregate_bool_exp_covar_samp: Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp;
  transaction_accounts_aggregate_bool_exp_covar_samp_arguments: Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  transaction_accounts_aggregate_bool_exp_max: Transaction_Accounts_Aggregate_Bool_Exp_Max;
  transaction_accounts_aggregate_bool_exp_min: Transaction_Accounts_Aggregate_Bool_Exp_Min;
  transaction_accounts_aggregate_bool_exp_stddev_samp: Transaction_Accounts_Aggregate_Bool_Exp_Stddev_Samp;
  transaction_accounts_aggregate_bool_exp_sum: Transaction_Accounts_Aggregate_Bool_Exp_Sum;
  transaction_accounts_aggregate_bool_exp_var_samp: Transaction_Accounts_Aggregate_Bool_Exp_Var_Samp;
  transaction_accounts_aggregate_fields: ResolverTypeWrapper<Transaction_Accounts_Aggregate_Fields>;
  transaction_accounts_aggregate_order_by: Transaction_Accounts_Aggregate_Order_By;
  transaction_accounts_arr_rel_insert_input: Transaction_Accounts_Arr_Rel_Insert_Input;
  transaction_accounts_avg_fields: ResolverTypeWrapper<Transaction_Accounts_Avg_Fields>;
  transaction_accounts_avg_order_by: Transaction_Accounts_Avg_Order_By;
  transaction_accounts_bool_exp: Transaction_Accounts_Bool_Exp;
  transaction_accounts_constraint: Transaction_Accounts_Constraint;
  transaction_accounts_inc_input: Transaction_Accounts_Inc_Input;
  transaction_accounts_insert_input: Transaction_Accounts_Insert_Input;
  transaction_accounts_max_fields: ResolverTypeWrapper<Transaction_Accounts_Max_Fields>;
  transaction_accounts_max_order_by: Transaction_Accounts_Max_Order_By;
  transaction_accounts_min_fields: ResolverTypeWrapper<Transaction_Accounts_Min_Fields>;
  transaction_accounts_min_order_by: Transaction_Accounts_Min_Order_By;
  transaction_accounts_mutation_response: ResolverTypeWrapper<Transaction_Accounts_Mutation_Response>;
  transaction_accounts_on_conflict: Transaction_Accounts_On_Conflict;
  transaction_accounts_order_by: Transaction_Accounts_Order_By;
  transaction_accounts_pk_columns_input: Transaction_Accounts_Pk_Columns_Input;
  transaction_accounts_select_column: Transaction_Accounts_Select_Column;
  transaction_accounts_select_column_transaction_accounts_aggregate_bool_exp_avg_arguments_columns: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  transaction_accounts_select_column_transaction_accounts_aggregate_bool_exp_corr_arguments_columns: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  transaction_accounts_select_column_transaction_accounts_aggregate_bool_exp_covar_samp_arguments_columns: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  transaction_accounts_select_column_transaction_accounts_aggregate_bool_exp_max_arguments_columns: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Max_Arguments_Columns;
  transaction_accounts_select_column_transaction_accounts_aggregate_bool_exp_min_arguments_columns: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Min_Arguments_Columns;
  transaction_accounts_select_column_transaction_accounts_aggregate_bool_exp_stddev_samp_arguments_columns: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  transaction_accounts_select_column_transaction_accounts_aggregate_bool_exp_sum_arguments_columns: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  transaction_accounts_select_column_transaction_accounts_aggregate_bool_exp_var_samp_arguments_columns: Transaction_Accounts_Select_Column_Transaction_Accounts_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  transaction_accounts_set_input: Transaction_Accounts_Set_Input;
  transaction_accounts_stddev_fields: ResolverTypeWrapper<Transaction_Accounts_Stddev_Fields>;
  transaction_accounts_stddev_order_by: Transaction_Accounts_Stddev_Order_By;
  transaction_accounts_stddev_pop_fields: ResolverTypeWrapper<Transaction_Accounts_Stddev_Pop_Fields>;
  transaction_accounts_stddev_pop_order_by: Transaction_Accounts_Stddev_Pop_Order_By;
  transaction_accounts_stddev_samp_fields: ResolverTypeWrapper<Transaction_Accounts_Stddev_Samp_Fields>;
  transaction_accounts_stddev_samp_order_by: Transaction_Accounts_Stddev_Samp_Order_By;
  transaction_accounts_stream_cursor_input: Transaction_Accounts_Stream_Cursor_Input;
  transaction_accounts_stream_cursor_value_input: Transaction_Accounts_Stream_Cursor_Value_Input;
  transaction_accounts_sum_fields: ResolverTypeWrapper<Transaction_Accounts_Sum_Fields>;
  transaction_accounts_sum_order_by: Transaction_Accounts_Sum_Order_By;
  transaction_accounts_update_column: Transaction_Accounts_Update_Column;
  transaction_accounts_updates: Transaction_Accounts_Updates;
  transaction_accounts_var_pop_fields: ResolverTypeWrapper<Transaction_Accounts_Var_Pop_Fields>;
  transaction_accounts_var_pop_order_by: Transaction_Accounts_Var_Pop_Order_By;
  transaction_accounts_var_samp_fields: ResolverTypeWrapper<Transaction_Accounts_Var_Samp_Fields>;
  transaction_accounts_var_samp_order_by: Transaction_Accounts_Var_Samp_Order_By;
  transaction_accounts_variance_fields: ResolverTypeWrapper<Transaction_Accounts_Variance_Fields>;
  transaction_accounts_variance_order_by: Transaction_Accounts_Variance_Order_By;
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
  transaction_attachments_stream_cursor_input: Transaction_Attachments_Stream_Cursor_Input;
  transaction_attachments_stream_cursor_value_input: Transaction_Attachments_Stream_Cursor_Value_Input;
  transaction_attachments_sum_fields: ResolverTypeWrapper<Transaction_Attachments_Sum_Fields>;
  transaction_attachments_update_column: Transaction_Attachments_Update_Column;
  transaction_attachments_updates: Transaction_Attachments_Updates;
  transaction_attachments_var_pop_fields: ResolverTypeWrapper<Transaction_Attachments_Var_Pop_Fields>;
  transaction_attachments_var_samp_fields: ResolverTypeWrapper<Transaction_Attachments_Var_Samp_Fields>;
  transaction_attachments_variance_fields: ResolverTypeWrapper<Transaction_Attachments_Variance_Fields>;
  transaction_labels: ResolverTypeWrapper<Transaction_Labels>;
  transaction_labels_aggregate: ResolverTypeWrapper<Transaction_Labels_Aggregate>;
  transaction_labels_aggregate_bool_exp: Transaction_Labels_Aggregate_Bool_Exp;
  transaction_labels_aggregate_bool_exp_count: Transaction_Labels_Aggregate_Bool_Exp_Count;
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
  transaction_labels_stream_cursor_input: Transaction_Labels_Stream_Cursor_Input;
  transaction_labels_stream_cursor_value_input: Transaction_Labels_Stream_Cursor_Value_Input;
  transaction_labels_sum_fields: ResolverTypeWrapper<Transaction_Labels_Sum_Fields>;
  transaction_labels_sum_order_by: Transaction_Labels_Sum_Order_By;
  transaction_labels_update_column: Transaction_Labels_Update_Column;
  transaction_labels_updates: Transaction_Labels_Updates;
  transaction_labels_var_pop_fields: ResolverTypeWrapper<Transaction_Labels_Var_Pop_Fields>;
  transaction_labels_var_pop_order_by: Transaction_Labels_Var_Pop_Order_By;
  transaction_labels_var_samp_fields: ResolverTypeWrapper<Transaction_Labels_Var_Samp_Fields>;
  transaction_labels_var_samp_order_by: Transaction_Labels_Var_Samp_Order_By;
  transaction_labels_variance_fields: ResolverTypeWrapper<Transaction_Labels_Variance_Fields>;
  transaction_labels_variance_order_by: Transaction_Labels_Variance_Order_By;
  transactions: ResolverTypeWrapper<Transactions>;
  transactions_aggregate: ResolverTypeWrapper<Transactions_Aggregate>;
  transactions_aggregate_bool_exp: Transactions_Aggregate_Bool_Exp;
  transactions_aggregate_bool_exp_avg: Transactions_Aggregate_Bool_Exp_Avg;
  transactions_aggregate_bool_exp_corr: Transactions_Aggregate_Bool_Exp_Corr;
  transactions_aggregate_bool_exp_corr_arguments: Transactions_Aggregate_Bool_Exp_Corr_Arguments;
  transactions_aggregate_bool_exp_count: Transactions_Aggregate_Bool_Exp_Count;
  transactions_aggregate_bool_exp_covar_samp: Transactions_Aggregate_Bool_Exp_Covar_Samp;
  transactions_aggregate_bool_exp_covar_samp_arguments: Transactions_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  transactions_aggregate_bool_exp_max: Transactions_Aggregate_Bool_Exp_Max;
  transactions_aggregate_bool_exp_min: Transactions_Aggregate_Bool_Exp_Min;
  transactions_aggregate_bool_exp_stddev_samp: Transactions_Aggregate_Bool_Exp_Stddev_Samp;
  transactions_aggregate_bool_exp_sum: Transactions_Aggregate_Bool_Exp_Sum;
  transactions_aggregate_bool_exp_var_samp: Transactions_Aggregate_Bool_Exp_Var_Samp;
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
  transactions_select_column_transactions_aggregate_bool_exp_avg_arguments_columns: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  transactions_select_column_transactions_aggregate_bool_exp_corr_arguments_columns: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  transactions_select_column_transactions_aggregate_bool_exp_covar_samp_arguments_columns: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  transactions_select_column_transactions_aggregate_bool_exp_max_arguments_columns: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Max_Arguments_Columns;
  transactions_select_column_transactions_aggregate_bool_exp_min_arguments_columns: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Min_Arguments_Columns;
  transactions_select_column_transactions_aggregate_bool_exp_stddev_samp_arguments_columns: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  transactions_select_column_transactions_aggregate_bool_exp_sum_arguments_columns: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  transactions_select_column_transactions_aggregate_bool_exp_var_samp_arguments_columns: Transactions_Select_Column_Transactions_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  transactions_set_input: Transactions_Set_Input;
  transactions_stddev_fields: ResolverTypeWrapper<Transactions_Stddev_Fields>;
  transactions_stddev_order_by: Transactions_Stddev_Order_By;
  transactions_stddev_pop_fields: ResolverTypeWrapper<Transactions_Stddev_Pop_Fields>;
  transactions_stddev_pop_order_by: Transactions_Stddev_Pop_Order_By;
  transactions_stddev_samp_fields: ResolverTypeWrapper<Transactions_Stddev_Samp_Fields>;
  transactions_stddev_samp_order_by: Transactions_Stddev_Samp_Order_By;
  transactions_stream_cursor_input: Transactions_Stream_Cursor_Input;
  transactions_stream_cursor_value_input: Transactions_Stream_Cursor_Value_Input;
  transactions_sum_fields: ResolverTypeWrapper<Transactions_Sum_Fields>;
  transactions_sum_order_by: Transactions_Sum_Order_By;
  transactions_update_column: Transactions_Update_Column;
  transactions_updates: Transactions_Updates;
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
  user_settings_stream_cursor_input: User_Settings_Stream_Cursor_Input;
  user_settings_stream_cursor_value_input: User_Settings_Stream_Cursor_Value_Input;
  user_settings_update_column: User_Settings_Update_Column;
  user_settings_updates: User_Settings_Updates;
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
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_update_column: Users_Update_Column;
  users_updates: Users_Updates;
  uuid: ResolverTypeWrapper<Scalars['uuid']['output']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars['String']['output'];
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
  account_info_stream_cursor_input: Account_Info_Stream_Cursor_Input;
  account_info_stream_cursor_value_input: Account_Info_Stream_Cursor_Value_Input;
  account_info_sum_fields: Account_Info_Sum_Fields;
  account_info_updates: Account_Info_Updates;
  account_info_var_pop_fields: Account_Info_Var_Pop_Fields;
  account_info_var_samp_fields: Account_Info_Var_Samp_Fields;
  account_info_variance_fields: Account_Info_Variance_Fields;
  all_active_accounts: All_Active_Accounts;
  all_active_accounts_aggregate: All_Active_Accounts_Aggregate;
  all_active_accounts_aggregate_fields: All_Active_Accounts_Aggregate_Fields;
  all_active_accounts_avg_fields: All_Active_Accounts_Avg_Fields;
  all_active_accounts_bool_exp: All_Active_Accounts_Bool_Exp;
  all_active_accounts_max_fields: All_Active_Accounts_Max_Fields;
  all_active_accounts_min_fields: All_Active_Accounts_Min_Fields;
  all_active_accounts_order_by: All_Active_Accounts_Order_By;
  all_active_accounts_stddev_fields: All_Active_Accounts_Stddev_Fields;
  all_active_accounts_stddev_pop_fields: All_Active_Accounts_Stddev_Pop_Fields;
  all_active_accounts_stddev_samp_fields: All_Active_Accounts_Stddev_Samp_Fields;
  all_active_accounts_stream_cursor_input: All_Active_Accounts_Stream_Cursor_Input;
  all_active_accounts_stream_cursor_value_input: All_Active_Accounts_Stream_Cursor_Value_Input;
  all_active_accounts_sum_fields: All_Active_Accounts_Sum_Fields;
  all_active_accounts_var_pop_fields: All_Active_Accounts_Var_Pop_Fields;
  all_active_accounts_var_samp_fields: All_Active_Accounts_Var_Samp_Fields;
  all_active_accounts_variance_fields: All_Active_Accounts_Variance_Fields;
  assets: Assets;
  assets_aggregate: Assets_Aggregate;
  assets_aggregate_bool_exp: Assets_Aggregate_Bool_Exp;
  assets_aggregate_bool_exp_avg: Assets_Aggregate_Bool_Exp_Avg;
  assets_aggregate_bool_exp_bool_and: Assets_Aggregate_Bool_Exp_Bool_And;
  assets_aggregate_bool_exp_bool_or: Assets_Aggregate_Bool_Exp_Bool_Or;
  assets_aggregate_bool_exp_corr: Assets_Aggregate_Bool_Exp_Corr;
  assets_aggregate_bool_exp_corr_arguments: Assets_Aggregate_Bool_Exp_Corr_Arguments;
  assets_aggregate_bool_exp_count: Assets_Aggregate_Bool_Exp_Count;
  assets_aggregate_bool_exp_covar_samp: Assets_Aggregate_Bool_Exp_Covar_Samp;
  assets_aggregate_bool_exp_covar_samp_arguments: Assets_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  assets_aggregate_bool_exp_max: Assets_Aggregate_Bool_Exp_Max;
  assets_aggregate_bool_exp_min: Assets_Aggregate_Bool_Exp_Min;
  assets_aggregate_bool_exp_stddev_samp: Assets_Aggregate_Bool_Exp_Stddev_Samp;
  assets_aggregate_bool_exp_sum: Assets_Aggregate_Bool_Exp_Sum;
  assets_aggregate_bool_exp_var_samp: Assets_Aggregate_Bool_Exp_Var_Samp;
  assets_aggregate_fields: Assets_Aggregate_Fields;
  assets_aggregate_order_by: Assets_Aggregate_Order_By;
  assets_arr_rel_insert_input: Assets_Arr_Rel_Insert_Input;
  assets_avg_fields: Assets_Avg_Fields;
  assets_avg_order_by: Assets_Avg_Order_By;
  assets_bool_exp: Assets_Bool_Exp;
  assets_inc_input: Assets_Inc_Input;
  assets_insert_input: Assets_Insert_Input;
  assets_max_fields: Assets_Max_Fields;
  assets_max_order_by: Assets_Max_Order_By;
  assets_min_fields: Assets_Min_Fields;
  assets_min_order_by: Assets_Min_Order_By;
  assets_mutation_response: Assets_Mutation_Response;
  assets_obj_rel_insert_input: Assets_Obj_Rel_Insert_Input;
  assets_on_conflict: Assets_On_Conflict;
  assets_order_by: Assets_Order_By;
  assets_pk_columns_input: Assets_Pk_Columns_Input;
  assets_set_input: Assets_Set_Input;
  assets_stddev_fields: Assets_Stddev_Fields;
  assets_stddev_order_by: Assets_Stddev_Order_By;
  assets_stddev_pop_fields: Assets_Stddev_Pop_Fields;
  assets_stddev_pop_order_by: Assets_Stddev_Pop_Order_By;
  assets_stddev_samp_fields: Assets_Stddev_Samp_Fields;
  assets_stddev_samp_order_by: Assets_Stddev_Samp_Order_By;
  assets_stream_cursor_input: Assets_Stream_Cursor_Input;
  assets_stream_cursor_value_input: Assets_Stream_Cursor_Value_Input;
  assets_sum_fields: Assets_Sum_Fields;
  assets_sum_order_by: Assets_Sum_Order_By;
  assets_updates: Assets_Updates;
  assets_var_pop_fields: Assets_Var_Pop_Fields;
  assets_var_pop_order_by: Assets_Var_Pop_Order_By;
  assets_var_samp_fields: Assets_Var_Samp_Fields;
  assets_var_samp_order_by: Assets_Var_Samp_Order_By;
  assets_variance_fields: Assets_Variance_Fields;
  assets_variance_order_by: Assets_Variance_Order_By;
  bigint: Scalars['bigint']['output'];
  bigint_comparison_exp: Bigint_Comparison_Exp;
  bpchar: Scalars['bpchar']['output'];
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
  categories_stream_cursor_input: Categories_Stream_Cursor_Input;
  categories_stream_cursor_value_input: Categories_Stream_Cursor_Value_Input;
  categories_sum_fields: Categories_Sum_Fields;
  categories_updates: Categories_Updates;
  categories_var_pop_fields: Categories_Var_Pop_Fields;
  categories_var_samp_fields: Categories_Var_Samp_Fields;
  categories_variance_fields: Categories_Variance_Fields;
  date: Scalars['date']['output'];
  date_comparison_exp: Date_Comparison_Exp;
  expenses: Expenses;
  expenses_aggregate: Expenses_Aggregate;
  expenses_aggregate_bool_exp: Expenses_Aggregate_Bool_Exp;
  expenses_aggregate_bool_exp_bool_and: Expenses_Aggregate_Bool_Exp_Bool_And;
  expenses_aggregate_bool_exp_bool_or: Expenses_Aggregate_Bool_Exp_Bool_Or;
  expenses_aggregate_bool_exp_count: Expenses_Aggregate_Bool_Exp_Count;
  expenses_aggregate_fields: Expenses_Aggregate_Fields;
  expenses_aggregate_order_by: Expenses_Aggregate_Order_By;
  expenses_arr_rel_insert_input: Expenses_Arr_Rel_Insert_Input;
  expenses_avg_fields: Expenses_Avg_Fields;
  expenses_avg_order_by: Expenses_Avg_Order_By;
  expenses_bool_exp: Expenses_Bool_Exp;
  expenses_inc_input: Expenses_Inc_Input;
  expenses_insert_input: Expenses_Insert_Input;
  expenses_max_fields: Expenses_Max_Fields;
  expenses_max_order_by: Expenses_Max_Order_By;
  expenses_min_fields: Expenses_Min_Fields;
  expenses_min_order_by: Expenses_Min_Order_By;
  expenses_mutation_response: Expenses_Mutation_Response;
  expenses_obj_rel_insert_input: Expenses_Obj_Rel_Insert_Input;
  expenses_on_conflict: Expenses_On_Conflict;
  expenses_order_by: Expenses_Order_By;
  expenses_pk_columns_input: Expenses_Pk_Columns_Input;
  expenses_set_input: Expenses_Set_Input;
  expenses_stddev_fields: Expenses_Stddev_Fields;
  expenses_stddev_order_by: Expenses_Stddev_Order_By;
  expenses_stddev_pop_fields: Expenses_Stddev_Pop_Fields;
  expenses_stddev_pop_order_by: Expenses_Stddev_Pop_Order_By;
  expenses_stddev_samp_fields: Expenses_Stddev_Samp_Fields;
  expenses_stddev_samp_order_by: Expenses_Stddev_Samp_Order_By;
  expenses_stream_cursor_input: Expenses_Stream_Cursor_Input;
  expenses_stream_cursor_value_input: Expenses_Stream_Cursor_Value_Input;
  expenses_sum_fields: Expenses_Sum_Fields;
  expenses_sum_order_by: Expenses_Sum_Order_By;
  expenses_updates: Expenses_Updates;
  expenses_var_pop_fields: Expenses_Var_Pop_Fields;
  expenses_var_pop_order_by: Expenses_Var_Pop_Order_By;
  expenses_var_samp_fields: Expenses_Var_Samp_Fields;
  expenses_var_samp_order_by: Expenses_Var_Samp_Order_By;
  expenses_variance_fields: Expenses_Variance_Fields;
  expenses_variance_order_by: Expenses_Variance_Order_By;
  float8: Scalars['float8']['output'];
  float8_comparison_exp: Float8_Comparison_Exp;
  gauge_data: Gauge_Data;
  gauge_data_aggregate: Gauge_Data_Aggregate;
  gauge_data_aggregate_fields: Gauge_Data_Aggregate_Fields;
  gauge_data_avg_fields: Gauge_Data_Avg_Fields;
  gauge_data_bool_exp: Gauge_Data_Bool_Exp;
  gauge_data_inc_input: Gauge_Data_Inc_Input;
  gauge_data_insert_input: Gauge_Data_Insert_Input;
  gauge_data_max_fields: Gauge_Data_Max_Fields;
  gauge_data_min_fields: Gauge_Data_Min_Fields;
  gauge_data_mutation_response: Gauge_Data_Mutation_Response;
  gauge_data_on_conflict: Gauge_Data_On_Conflict;
  gauge_data_order_by: Gauge_Data_Order_By;
  gauge_data_pk_columns_input: Gauge_Data_Pk_Columns_Input;
  gauge_data_set_input: Gauge_Data_Set_Input;
  gauge_data_stddev_fields: Gauge_Data_Stddev_Fields;
  gauge_data_stddev_pop_fields: Gauge_Data_Stddev_Pop_Fields;
  gauge_data_stddev_samp_fields: Gauge_Data_Stddev_Samp_Fields;
  gauge_data_stream_cursor_input: Gauge_Data_Stream_Cursor_Input;
  gauge_data_stream_cursor_value_input: Gauge_Data_Stream_Cursor_Value_Input;
  gauge_data_sum_fields: Gauge_Data_Sum_Fields;
  gauge_data_updates: Gauge_Data_Updates;
  gauge_data_var_pop_fields: Gauge_Data_Var_Pop_Fields;
  gauge_data_var_samp_fields: Gauge_Data_Var_Samp_Fields;
  gauge_data_variance_fields: Gauge_Data_Variance_Fields;
  groups: Groups;
  groups_aggregate: Groups_Aggregate;
  groups_aggregate_fields: Groups_Aggregate_Fields;
  groups_avg_fields: Groups_Avg_Fields;
  groups_bool_exp: Groups_Bool_Exp;
  groups_inc_input: Groups_Inc_Input;
  groups_insert_input: Groups_Insert_Input;
  groups_max_fields: Groups_Max_Fields;
  groups_min_fields: Groups_Min_Fields;
  groups_mutation_response: Groups_Mutation_Response;
  groups_on_conflict: Groups_On_Conflict;
  groups_order_by: Groups_Order_By;
  groups_pk_columns_input: Groups_Pk_Columns_Input;
  groups_set_input: Groups_Set_Input;
  groups_stddev_fields: Groups_Stddev_Fields;
  groups_stddev_pop_fields: Groups_Stddev_Pop_Fields;
  groups_stddev_samp_fields: Groups_Stddev_Samp_Fields;
  groups_stream_cursor_input: Groups_Stream_Cursor_Input;
  groups_stream_cursor_value_input: Groups_Stream_Cursor_Value_Input;
  groups_sum_fields: Groups_Sum_Fields;
  groups_updates: Groups_Updates;
  groups_var_pop_fields: Groups_Var_Pop_Fields;
  groups_var_samp_fields: Groups_Var_Samp_Fields;
  groups_variance_fields: Groups_Variance_Fields;
  historical_data: Historical_Data;
  historical_data_aggregate: Historical_Data_Aggregate;
  historical_data_aggregate_fields: Historical_Data_Aggregate_Fields;
  historical_data_avg_fields: Historical_Data_Avg_Fields;
  historical_data_bool_exp: Historical_Data_Bool_Exp;
  historical_data_inc_input: Historical_Data_Inc_Input;
  historical_data_insert_input: Historical_Data_Insert_Input;
  historical_data_max_fields: Historical_Data_Max_Fields;
  historical_data_min_fields: Historical_Data_Min_Fields;
  historical_data_mutation_response: Historical_Data_Mutation_Response;
  historical_data_on_conflict: Historical_Data_On_Conflict;
  historical_data_order_by: Historical_Data_Order_By;
  historical_data_pk_columns_input: Historical_Data_Pk_Columns_Input;
  historical_data_set_input: Historical_Data_Set_Input;
  historical_data_stddev_fields: Historical_Data_Stddev_Fields;
  historical_data_stddev_pop_fields: Historical_Data_Stddev_Pop_Fields;
  historical_data_stddev_samp_fields: Historical_Data_Stddev_Samp_Fields;
  historical_data_stream_cursor_input: Historical_Data_Stream_Cursor_Input;
  historical_data_stream_cursor_value_input: Historical_Data_Stream_Cursor_Value_Input;
  historical_data_sum_fields: Historical_Data_Sum_Fields;
  historical_data_updates: Historical_Data_Updates;
  historical_data_var_pop_fields: Historical_Data_Var_Pop_Fields;
  historical_data_var_samp_fields: Historical_Data_Var_Samp_Fields;
  historical_data_variance_fields: Historical_Data_Variance_Fields;
  import_asset_file: Import_Asset_File;
  import_asset_file_aggregate: Import_Asset_File_Aggregate;
  import_asset_file_aggregate_bool_exp: Import_Asset_File_Aggregate_Bool_Exp;
  import_asset_file_aggregate_bool_exp_count: Import_Asset_File_Aggregate_Bool_Exp_Count;
  import_asset_file_aggregate_fields: Import_Asset_File_Aggregate_Fields;
  import_asset_file_aggregate_order_by: Import_Asset_File_Aggregate_Order_By;
  import_asset_file_arr_rel_insert_input: Import_Asset_File_Arr_Rel_Insert_Input;
  import_asset_file_avg_fields: Import_Asset_File_Avg_Fields;
  import_asset_file_avg_order_by: Import_Asset_File_Avg_Order_By;
  import_asset_file_bool_exp: Import_Asset_File_Bool_Exp;
  import_asset_file_inc_input: Import_Asset_File_Inc_Input;
  import_asset_file_insert_input: Import_Asset_File_Insert_Input;
  import_asset_file_max_fields: Import_Asset_File_Max_Fields;
  import_asset_file_max_order_by: Import_Asset_File_Max_Order_By;
  import_asset_file_min_fields: Import_Asset_File_Min_Fields;
  import_asset_file_min_order_by: Import_Asset_File_Min_Order_By;
  import_asset_file_mutation_response: Import_Asset_File_Mutation_Response;
  import_asset_file_on_conflict: Import_Asset_File_On_Conflict;
  import_asset_file_order_by: Import_Asset_File_Order_By;
  import_asset_file_pk_columns_input: Import_Asset_File_Pk_Columns_Input;
  import_asset_file_set_input: Import_Asset_File_Set_Input;
  import_asset_file_stddev_fields: Import_Asset_File_Stddev_Fields;
  import_asset_file_stddev_order_by: Import_Asset_File_Stddev_Order_By;
  import_asset_file_stddev_pop_fields: Import_Asset_File_Stddev_Pop_Fields;
  import_asset_file_stddev_pop_order_by: Import_Asset_File_Stddev_Pop_Order_By;
  import_asset_file_stddev_samp_fields: Import_Asset_File_Stddev_Samp_Fields;
  import_asset_file_stddev_samp_order_by: Import_Asset_File_Stddev_Samp_Order_By;
  import_asset_file_stream_cursor_input: Import_Asset_File_Stream_Cursor_Input;
  import_asset_file_stream_cursor_value_input: Import_Asset_File_Stream_Cursor_Value_Input;
  import_asset_file_sum_fields: Import_Asset_File_Sum_Fields;
  import_asset_file_sum_order_by: Import_Asset_File_Sum_Order_By;
  import_asset_file_updates: Import_Asset_File_Updates;
  import_asset_file_var_pop_fields: Import_Asset_File_Var_Pop_Fields;
  import_asset_file_var_pop_order_by: Import_Asset_File_Var_Pop_Order_By;
  import_asset_file_var_samp_fields: Import_Asset_File_Var_Samp_Fields;
  import_asset_file_var_samp_order_by: Import_Asset_File_Var_Samp_Order_By;
  import_asset_file_variance_fields: Import_Asset_File_Variance_Fields;
  import_asset_file_variance_order_by: Import_Asset_File_Variance_Order_By;
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
  labels_stream_cursor_input: Labels_Stream_Cursor_Input;
  labels_stream_cursor_value_input: Labels_Stream_Cursor_Value_Input;
  labels_sum_fields: Labels_Sum_Fields;
  labels_updates: Labels_Updates;
  labels_var_pop_fields: Labels_Var_Pop_Fields;
  labels_var_samp_fields: Labels_Var_Samp_Fields;
  labels_variance_fields: Labels_Variance_Fields;
  liabilities: Liabilities;
  liabilities_aggregate: Liabilities_Aggregate;
  liabilities_aggregate_bool_exp: Liabilities_Aggregate_Bool_Exp;
  liabilities_aggregate_bool_exp_bool_and: Liabilities_Aggregate_Bool_Exp_Bool_And;
  liabilities_aggregate_bool_exp_bool_or: Liabilities_Aggregate_Bool_Exp_Bool_Or;
  liabilities_aggregate_bool_exp_count: Liabilities_Aggregate_Bool_Exp_Count;
  liabilities_aggregate_fields: Liabilities_Aggregate_Fields;
  liabilities_aggregate_order_by: Liabilities_Aggregate_Order_By;
  liabilities_arr_rel_insert_input: Liabilities_Arr_Rel_Insert_Input;
  liabilities_avg_fields: Liabilities_Avg_Fields;
  liabilities_avg_order_by: Liabilities_Avg_Order_By;
  liabilities_bool_exp: Liabilities_Bool_Exp;
  liabilities_inc_input: Liabilities_Inc_Input;
  liabilities_insert_input: Liabilities_Insert_Input;
  liabilities_max_fields: Liabilities_Max_Fields;
  liabilities_max_order_by: Liabilities_Max_Order_By;
  liabilities_min_fields: Liabilities_Min_Fields;
  liabilities_min_order_by: Liabilities_Min_Order_By;
  liabilities_mutation_response: Liabilities_Mutation_Response;
  liabilities_obj_rel_insert_input: Liabilities_Obj_Rel_Insert_Input;
  liabilities_on_conflict: Liabilities_On_Conflict;
  liabilities_order_by: Liabilities_Order_By;
  liabilities_pk_columns_input: Liabilities_Pk_Columns_Input;
  liabilities_set_input: Liabilities_Set_Input;
  liabilities_stddev_fields: Liabilities_Stddev_Fields;
  liabilities_stddev_order_by: Liabilities_Stddev_Order_By;
  liabilities_stddev_pop_fields: Liabilities_Stddev_Pop_Fields;
  liabilities_stddev_pop_order_by: Liabilities_Stddev_Pop_Order_By;
  liabilities_stddev_samp_fields: Liabilities_Stddev_Samp_Fields;
  liabilities_stddev_samp_order_by: Liabilities_Stddev_Samp_Order_By;
  liabilities_stream_cursor_input: Liabilities_Stream_Cursor_Input;
  liabilities_stream_cursor_value_input: Liabilities_Stream_Cursor_Value_Input;
  liabilities_sum_fields: Liabilities_Sum_Fields;
  liabilities_sum_order_by: Liabilities_Sum_Order_By;
  liabilities_updates: Liabilities_Updates;
  liabilities_var_pop_fields: Liabilities_Var_Pop_Fields;
  liabilities_var_pop_order_by: Liabilities_Var_Pop_Order_By;
  liabilities_var_samp_fields: Liabilities_Var_Samp_Fields;
  liabilities_var_samp_order_by: Liabilities_Var_Samp_Order_By;
  liabilities_variance_fields: Liabilities_Variance_Fields;
  liabilities_variance_order_by: Liabilities_Variance_Order_By;
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
  notifications_stream_cursor_input: Notifications_Stream_Cursor_Input;
  notifications_stream_cursor_value_input: Notifications_Stream_Cursor_Value_Input;
  notifications_sum_fields: Notifications_Sum_Fields;
  notifications_updates: Notifications_Updates;
  notifications_var_pop_fields: Notifications_Var_Pop_Fields;
  notifications_var_samp_fields: Notifications_Var_Samp_Fields;
  notifications_variance_fields: Notifications_Variance_Fields;
  query_root: {};
  recurring: Recurring;
  recurring_aggregate: Recurring_Aggregate;
  recurring_aggregate_bool_exp: Recurring_Aggregate_Bool_Exp;
  recurring_aggregate_bool_exp_avg: Recurring_Aggregate_Bool_Exp_Avg;
  recurring_aggregate_bool_exp_bool_and: Recurring_Aggregate_Bool_Exp_Bool_And;
  recurring_aggregate_bool_exp_bool_or: Recurring_Aggregate_Bool_Exp_Bool_Or;
  recurring_aggregate_bool_exp_corr: Recurring_Aggregate_Bool_Exp_Corr;
  recurring_aggregate_bool_exp_corr_arguments: Recurring_Aggregate_Bool_Exp_Corr_Arguments;
  recurring_aggregate_bool_exp_count: Recurring_Aggregate_Bool_Exp_Count;
  recurring_aggregate_bool_exp_covar_samp: Recurring_Aggregate_Bool_Exp_Covar_Samp;
  recurring_aggregate_bool_exp_covar_samp_arguments: Recurring_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  recurring_aggregate_bool_exp_max: Recurring_Aggregate_Bool_Exp_Max;
  recurring_aggregate_bool_exp_min: Recurring_Aggregate_Bool_Exp_Min;
  recurring_aggregate_bool_exp_stddev_samp: Recurring_Aggregate_Bool_Exp_Stddev_Samp;
  recurring_aggregate_bool_exp_sum: Recurring_Aggregate_Bool_Exp_Sum;
  recurring_aggregate_bool_exp_var_samp: Recurring_Aggregate_Bool_Exp_Var_Samp;
  recurring_aggregate_fields: Recurring_Aggregate_Fields;
  recurring_aggregate_order_by: Recurring_Aggregate_Order_By;
  recurring_arr_rel_insert_input: Recurring_Arr_Rel_Insert_Input;
  recurring_avg_fields: Recurring_Avg_Fields;
  recurring_avg_order_by: Recurring_Avg_Order_By;
  recurring_bool_exp: Recurring_Bool_Exp;
  recurring_inc_input: Recurring_Inc_Input;
  recurring_insert_input: Recurring_Insert_Input;
  recurring_labels: Recurring_Labels;
  recurring_labels_aggregate: Recurring_Labels_Aggregate;
  recurring_labels_aggregate_bool_exp: Recurring_Labels_Aggregate_Bool_Exp;
  recurring_labels_aggregate_bool_exp_count: Recurring_Labels_Aggregate_Bool_Exp_Count;
  recurring_labels_aggregate_fields: Recurring_Labels_Aggregate_Fields;
  recurring_labels_aggregate_order_by: Recurring_Labels_Aggregate_Order_By;
  recurring_labels_arr_rel_insert_input: Recurring_Labels_Arr_Rel_Insert_Input;
  recurring_labels_avg_fields: Recurring_Labels_Avg_Fields;
  recurring_labels_avg_order_by: Recurring_Labels_Avg_Order_By;
  recurring_labels_bool_exp: Recurring_Labels_Bool_Exp;
  recurring_labels_inc_input: Recurring_Labels_Inc_Input;
  recurring_labels_insert_input: Recurring_Labels_Insert_Input;
  recurring_labels_max_fields: Recurring_Labels_Max_Fields;
  recurring_labels_max_order_by: Recurring_Labels_Max_Order_By;
  recurring_labels_min_fields: Recurring_Labels_Min_Fields;
  recurring_labels_min_order_by: Recurring_Labels_Min_Order_By;
  recurring_labels_mutation_response: Recurring_Labels_Mutation_Response;
  recurring_labels_on_conflict: Recurring_Labels_On_Conflict;
  recurring_labels_order_by: Recurring_Labels_Order_By;
  recurring_labels_pk_columns_input: Recurring_Labels_Pk_Columns_Input;
  recurring_labels_set_input: Recurring_Labels_Set_Input;
  recurring_labels_stddev_fields: Recurring_Labels_Stddev_Fields;
  recurring_labels_stddev_order_by: Recurring_Labels_Stddev_Order_By;
  recurring_labels_stddev_pop_fields: Recurring_Labels_Stddev_Pop_Fields;
  recurring_labels_stddev_pop_order_by: Recurring_Labels_Stddev_Pop_Order_By;
  recurring_labels_stddev_samp_fields: Recurring_Labels_Stddev_Samp_Fields;
  recurring_labels_stddev_samp_order_by: Recurring_Labels_Stddev_Samp_Order_By;
  recurring_labels_stream_cursor_input: Recurring_Labels_Stream_Cursor_Input;
  recurring_labels_stream_cursor_value_input: Recurring_Labels_Stream_Cursor_Value_Input;
  recurring_labels_sum_fields: Recurring_Labels_Sum_Fields;
  recurring_labels_sum_order_by: Recurring_Labels_Sum_Order_By;
  recurring_labels_updates: Recurring_Labels_Updates;
  recurring_labels_var_pop_fields: Recurring_Labels_Var_Pop_Fields;
  recurring_labels_var_pop_order_by: Recurring_Labels_Var_Pop_Order_By;
  recurring_labels_var_samp_fields: Recurring_Labels_Var_Samp_Fields;
  recurring_labels_var_samp_order_by: Recurring_Labels_Var_Samp_Order_By;
  recurring_labels_variance_fields: Recurring_Labels_Variance_Fields;
  recurring_labels_variance_order_by: Recurring_Labels_Variance_Order_By;
  recurring_max_fields: Recurring_Max_Fields;
  recurring_max_order_by: Recurring_Max_Order_By;
  recurring_min_fields: Recurring_Min_Fields;
  recurring_min_order_by: Recurring_Min_Order_By;
  recurring_mutation_response: Recurring_Mutation_Response;
  recurring_obj_rel_insert_input: Recurring_Obj_Rel_Insert_Input;
  recurring_on_conflict: Recurring_On_Conflict;
  recurring_order_by: Recurring_Order_By;
  recurring_pk_columns_input: Recurring_Pk_Columns_Input;
  recurring_set_input: Recurring_Set_Input;
  recurring_stddev_fields: Recurring_Stddev_Fields;
  recurring_stddev_order_by: Recurring_Stddev_Order_By;
  recurring_stddev_pop_fields: Recurring_Stddev_Pop_Fields;
  recurring_stddev_pop_order_by: Recurring_Stddev_Pop_Order_By;
  recurring_stddev_samp_fields: Recurring_Stddev_Samp_Fields;
  recurring_stddev_samp_order_by: Recurring_Stddev_Samp_Order_By;
  recurring_stream_cursor_input: Recurring_Stream_Cursor_Input;
  recurring_stream_cursor_value_input: Recurring_Stream_Cursor_Value_Input;
  recurring_sum_fields: Recurring_Sum_Fields;
  recurring_sum_order_by: Recurring_Sum_Order_By;
  recurring_updates: Recurring_Updates;
  recurring_var_pop_fields: Recurring_Var_Pop_Fields;
  recurring_var_pop_order_by: Recurring_Var_Pop_Order_By;
  recurring_var_samp_fields: Recurring_Var_Samp_Fields;
  recurring_var_samp_order_by: Recurring_Var_Samp_Order_By;
  recurring_variance_fields: Recurring_Variance_Fields;
  recurring_variance_order_by: Recurring_Variance_Order_By;
  revenues: Revenues;
  revenues_aggregate: Revenues_Aggregate;
  revenues_aggregate_bool_exp: Revenues_Aggregate_Bool_Exp;
  revenues_aggregate_bool_exp_bool_and: Revenues_Aggregate_Bool_Exp_Bool_And;
  revenues_aggregate_bool_exp_bool_or: Revenues_Aggregate_Bool_Exp_Bool_Or;
  revenues_aggregate_bool_exp_count: Revenues_Aggregate_Bool_Exp_Count;
  revenues_aggregate_fields: Revenues_Aggregate_Fields;
  revenues_aggregate_order_by: Revenues_Aggregate_Order_By;
  revenues_arr_rel_insert_input: Revenues_Arr_Rel_Insert_Input;
  revenues_avg_fields: Revenues_Avg_Fields;
  revenues_avg_order_by: Revenues_Avg_Order_By;
  revenues_bool_exp: Revenues_Bool_Exp;
  revenues_inc_input: Revenues_Inc_Input;
  revenues_insert_input: Revenues_Insert_Input;
  revenues_max_fields: Revenues_Max_Fields;
  revenues_max_order_by: Revenues_Max_Order_By;
  revenues_min_fields: Revenues_Min_Fields;
  revenues_min_order_by: Revenues_Min_Order_By;
  revenues_mutation_response: Revenues_Mutation_Response;
  revenues_obj_rel_insert_input: Revenues_Obj_Rel_Insert_Input;
  revenues_on_conflict: Revenues_On_Conflict;
  revenues_order_by: Revenues_Order_By;
  revenues_pk_columns_input: Revenues_Pk_Columns_Input;
  revenues_set_input: Revenues_Set_Input;
  revenues_stddev_fields: Revenues_Stddev_Fields;
  revenues_stddev_order_by: Revenues_Stddev_Order_By;
  revenues_stddev_pop_fields: Revenues_Stddev_Pop_Fields;
  revenues_stddev_pop_order_by: Revenues_Stddev_Pop_Order_By;
  revenues_stddev_samp_fields: Revenues_Stddev_Samp_Fields;
  revenues_stddev_samp_order_by: Revenues_Stddev_Samp_Order_By;
  revenues_stream_cursor_input: Revenues_Stream_Cursor_Input;
  revenues_stream_cursor_value_input: Revenues_Stream_Cursor_Value_Input;
  revenues_sum_fields: Revenues_Sum_Fields;
  revenues_sum_order_by: Revenues_Sum_Order_By;
  revenues_updates: Revenues_Updates;
  revenues_var_pop_fields: Revenues_Var_Pop_Fields;
  revenues_var_pop_order_by: Revenues_Var_Pop_Order_By;
  revenues_var_samp_fields: Revenues_Var_Samp_Fields;
  revenues_var_samp_order_by: Revenues_Var_Samp_Order_By;
  revenues_variance_fields: Revenues_Variance_Fields;
  revenues_variance_order_by: Revenues_Variance_Order_By;
  smallint: Scalars['smallint']['output'];
  smallint_comparison_exp: Smallint_Comparison_Exp;
  status_data: Status_Data;
  status_data_aggregate: Status_Data_Aggregate;
  status_data_aggregate_fields: Status_Data_Aggregate_Fields;
  status_data_avg_fields: Status_Data_Avg_Fields;
  status_data_bool_exp: Status_Data_Bool_Exp;
  status_data_inc_input: Status_Data_Inc_Input;
  status_data_insert_input: Status_Data_Insert_Input;
  status_data_max_fields: Status_Data_Max_Fields;
  status_data_min_fields: Status_Data_Min_Fields;
  status_data_mutation_response: Status_Data_Mutation_Response;
  status_data_on_conflict: Status_Data_On_Conflict;
  status_data_order_by: Status_Data_Order_By;
  status_data_pk_columns_input: Status_Data_Pk_Columns_Input;
  status_data_set_input: Status_Data_Set_Input;
  status_data_stddev_fields: Status_Data_Stddev_Fields;
  status_data_stddev_pop_fields: Status_Data_Stddev_Pop_Fields;
  status_data_stddev_samp_fields: Status_Data_Stddev_Samp_Fields;
  status_data_stream_cursor_input: Status_Data_Stream_Cursor_Input;
  status_data_stream_cursor_value_input: Status_Data_Stream_Cursor_Value_Input;
  status_data_sum_fields: Status_Data_Sum_Fields;
  status_data_updates: Status_Data_Updates;
  status_data_var_pop_fields: Status_Data_Var_Pop_Fields;
  status_data_var_samp_fields: Status_Data_Var_Samp_Fields;
  status_data_variance_fields: Status_Data_Variance_Fields;
  subscription_root: {};
  timestamp: Scalars['timestamp']['output'];
  timestamp_comparison_exp: Timestamp_Comparison_Exp;
  timestamptz: Scalars['timestamptz']['output'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  transaction_accounts: Transaction_Accounts;
  transaction_accounts_aggregate: Transaction_Accounts_Aggregate;
  transaction_accounts_aggregate_bool_exp: Transaction_Accounts_Aggregate_Bool_Exp;
  transaction_accounts_aggregate_bool_exp_avg: Transaction_Accounts_Aggregate_Bool_Exp_Avg;
  transaction_accounts_aggregate_bool_exp_corr: Transaction_Accounts_Aggregate_Bool_Exp_Corr;
  transaction_accounts_aggregate_bool_exp_corr_arguments: Transaction_Accounts_Aggregate_Bool_Exp_Corr_Arguments;
  transaction_accounts_aggregate_bool_exp_count: Transaction_Accounts_Aggregate_Bool_Exp_Count;
  transaction_accounts_aggregate_bool_exp_covar_samp: Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp;
  transaction_accounts_aggregate_bool_exp_covar_samp_arguments: Transaction_Accounts_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  transaction_accounts_aggregate_bool_exp_max: Transaction_Accounts_Aggregate_Bool_Exp_Max;
  transaction_accounts_aggregate_bool_exp_min: Transaction_Accounts_Aggregate_Bool_Exp_Min;
  transaction_accounts_aggregate_bool_exp_stddev_samp: Transaction_Accounts_Aggregate_Bool_Exp_Stddev_Samp;
  transaction_accounts_aggregate_bool_exp_sum: Transaction_Accounts_Aggregate_Bool_Exp_Sum;
  transaction_accounts_aggregate_bool_exp_var_samp: Transaction_Accounts_Aggregate_Bool_Exp_Var_Samp;
  transaction_accounts_aggregate_fields: Transaction_Accounts_Aggregate_Fields;
  transaction_accounts_aggregate_order_by: Transaction_Accounts_Aggregate_Order_By;
  transaction_accounts_arr_rel_insert_input: Transaction_Accounts_Arr_Rel_Insert_Input;
  transaction_accounts_avg_fields: Transaction_Accounts_Avg_Fields;
  transaction_accounts_avg_order_by: Transaction_Accounts_Avg_Order_By;
  transaction_accounts_bool_exp: Transaction_Accounts_Bool_Exp;
  transaction_accounts_inc_input: Transaction_Accounts_Inc_Input;
  transaction_accounts_insert_input: Transaction_Accounts_Insert_Input;
  transaction_accounts_max_fields: Transaction_Accounts_Max_Fields;
  transaction_accounts_max_order_by: Transaction_Accounts_Max_Order_By;
  transaction_accounts_min_fields: Transaction_Accounts_Min_Fields;
  transaction_accounts_min_order_by: Transaction_Accounts_Min_Order_By;
  transaction_accounts_mutation_response: Transaction_Accounts_Mutation_Response;
  transaction_accounts_on_conflict: Transaction_Accounts_On_Conflict;
  transaction_accounts_order_by: Transaction_Accounts_Order_By;
  transaction_accounts_pk_columns_input: Transaction_Accounts_Pk_Columns_Input;
  transaction_accounts_set_input: Transaction_Accounts_Set_Input;
  transaction_accounts_stddev_fields: Transaction_Accounts_Stddev_Fields;
  transaction_accounts_stddev_order_by: Transaction_Accounts_Stddev_Order_By;
  transaction_accounts_stddev_pop_fields: Transaction_Accounts_Stddev_Pop_Fields;
  transaction_accounts_stddev_pop_order_by: Transaction_Accounts_Stddev_Pop_Order_By;
  transaction_accounts_stddev_samp_fields: Transaction_Accounts_Stddev_Samp_Fields;
  transaction_accounts_stddev_samp_order_by: Transaction_Accounts_Stddev_Samp_Order_By;
  transaction_accounts_stream_cursor_input: Transaction_Accounts_Stream_Cursor_Input;
  transaction_accounts_stream_cursor_value_input: Transaction_Accounts_Stream_Cursor_Value_Input;
  transaction_accounts_sum_fields: Transaction_Accounts_Sum_Fields;
  transaction_accounts_sum_order_by: Transaction_Accounts_Sum_Order_By;
  transaction_accounts_updates: Transaction_Accounts_Updates;
  transaction_accounts_var_pop_fields: Transaction_Accounts_Var_Pop_Fields;
  transaction_accounts_var_pop_order_by: Transaction_Accounts_Var_Pop_Order_By;
  transaction_accounts_var_samp_fields: Transaction_Accounts_Var_Samp_Fields;
  transaction_accounts_var_samp_order_by: Transaction_Accounts_Var_Samp_Order_By;
  transaction_accounts_variance_fields: Transaction_Accounts_Variance_Fields;
  transaction_accounts_variance_order_by: Transaction_Accounts_Variance_Order_By;
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
  transaction_attachments_stream_cursor_input: Transaction_Attachments_Stream_Cursor_Input;
  transaction_attachments_stream_cursor_value_input: Transaction_Attachments_Stream_Cursor_Value_Input;
  transaction_attachments_sum_fields: Transaction_Attachments_Sum_Fields;
  transaction_attachments_updates: Transaction_Attachments_Updates;
  transaction_attachments_var_pop_fields: Transaction_Attachments_Var_Pop_Fields;
  transaction_attachments_var_samp_fields: Transaction_Attachments_Var_Samp_Fields;
  transaction_attachments_variance_fields: Transaction_Attachments_Variance_Fields;
  transaction_labels: Transaction_Labels;
  transaction_labels_aggregate: Transaction_Labels_Aggregate;
  transaction_labels_aggregate_bool_exp: Transaction_Labels_Aggregate_Bool_Exp;
  transaction_labels_aggregate_bool_exp_count: Transaction_Labels_Aggregate_Bool_Exp_Count;
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
  transaction_labels_stream_cursor_input: Transaction_Labels_Stream_Cursor_Input;
  transaction_labels_stream_cursor_value_input: Transaction_Labels_Stream_Cursor_Value_Input;
  transaction_labels_sum_fields: Transaction_Labels_Sum_Fields;
  transaction_labels_sum_order_by: Transaction_Labels_Sum_Order_By;
  transaction_labels_updates: Transaction_Labels_Updates;
  transaction_labels_var_pop_fields: Transaction_Labels_Var_Pop_Fields;
  transaction_labels_var_pop_order_by: Transaction_Labels_Var_Pop_Order_By;
  transaction_labels_var_samp_fields: Transaction_Labels_Var_Samp_Fields;
  transaction_labels_var_samp_order_by: Transaction_Labels_Var_Samp_Order_By;
  transaction_labels_variance_fields: Transaction_Labels_Variance_Fields;
  transaction_labels_variance_order_by: Transaction_Labels_Variance_Order_By;
  transactions: Transactions;
  transactions_aggregate: Transactions_Aggregate;
  transactions_aggregate_bool_exp: Transactions_Aggregate_Bool_Exp;
  transactions_aggregate_bool_exp_avg: Transactions_Aggregate_Bool_Exp_Avg;
  transactions_aggregate_bool_exp_corr: Transactions_Aggregate_Bool_Exp_Corr;
  transactions_aggregate_bool_exp_corr_arguments: Transactions_Aggregate_Bool_Exp_Corr_Arguments;
  transactions_aggregate_bool_exp_count: Transactions_Aggregate_Bool_Exp_Count;
  transactions_aggregate_bool_exp_covar_samp: Transactions_Aggregate_Bool_Exp_Covar_Samp;
  transactions_aggregate_bool_exp_covar_samp_arguments: Transactions_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  transactions_aggregate_bool_exp_max: Transactions_Aggregate_Bool_Exp_Max;
  transactions_aggregate_bool_exp_min: Transactions_Aggregate_Bool_Exp_Min;
  transactions_aggregate_bool_exp_stddev_samp: Transactions_Aggregate_Bool_Exp_Stddev_Samp;
  transactions_aggregate_bool_exp_sum: Transactions_Aggregate_Bool_Exp_Sum;
  transactions_aggregate_bool_exp_var_samp: Transactions_Aggregate_Bool_Exp_Var_Samp;
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
  transactions_stream_cursor_input: Transactions_Stream_Cursor_Input;
  transactions_stream_cursor_value_input: Transactions_Stream_Cursor_Value_Input;
  transactions_sum_fields: Transactions_Sum_Fields;
  transactions_sum_order_by: Transactions_Sum_Order_By;
  transactions_updates: Transactions_Updates;
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
  user_settings_stream_cursor_input: User_Settings_Stream_Cursor_Input;
  user_settings_stream_cursor_value_input: User_Settings_Stream_Cursor_Value_Input;
  user_settings_updates: User_Settings_Updates;
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
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_updates: Users_Updates;
  uuid: Scalars['uuid']['output'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean']['input'];
  ttl?: Scalars['Int']['input'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Account_InfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['account_info'] = ResolversParentTypes['account_info']> = {
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['assets']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  expense?: Resolver<Maybe<ResolversTypes['expenses']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  liability?: Resolver<Maybe<ResolversTypes['liabilities']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recurrings?: Resolver<Array<ResolversTypes['recurring']>, ParentType, ContextType, Partial<Account_InfoRecurringsArgs>>;
  recurringsByAccountTo?: Resolver<Array<ResolversTypes['recurring']>, ParentType, ContextType, Partial<Account_InfoRecurringsByAccountToArgs>>;
  recurringsByAccountTo_aggregate?: Resolver<
    ResolversTypes['recurring_aggregate'],
    ParentType,
    ContextType,
    Partial<Account_InfoRecurringsByAccountTo_AggregateArgs>
  >;
  recurrings_aggregate?: Resolver<ResolversTypes['recurring_aggregate'], ParentType, ContextType, Partial<Account_InfoRecurrings_AggregateArgs>>;
  revenue?: Resolver<Maybe<ResolversTypes['revenues']>, ParentType, ContextType>;
  transaction_accounts?: Resolver<Array<ResolversTypes['transaction_accounts']>, ParentType, ContextType, Partial<Account_InfoTransaction_AccountsArgs>>;
  transaction_accounts_aggregate?: Resolver<
    ResolversTypes['transaction_accounts_aggregate'],
    ParentType,
    ContextType,
    Partial<Account_InfoTransaction_Accounts_AggregateArgs>
  >;
  transactions?: Resolver<Array<ResolversTypes['transactions']>, ParentType, ContextType, Partial<Account_InfoTransactionsArgs>>;
  transactionsByAccountTo?: Resolver<Array<ResolversTypes['transactions']>, ParentType, ContextType, Partial<Account_InfoTransactionsByAccountToArgs>>;
  transactionsByAccountTo_aggregate?: Resolver<
    ResolversTypes['transactions_aggregate'],
    ParentType,
    ContextType,
    Partial<Account_InfoTransactionsByAccountTo_AggregateArgs>
  >;
  transactions_aggregate?: Resolver<ResolversTypes['transactions_aggregate'], ParentType, ContextType, Partial<Account_InfoTransactions_AggregateArgs>>;
  type?: Resolver<ResolversTypes['bpchar'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_aggregate'] = ResolversParentTypes['account_info_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['account_info_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['account_info']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_aggregate_fields'] = ResolversParentTypes['account_info_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['account_info_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Account_Info_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['account_info_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['account_info_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['account_info_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['account_info_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['account_info_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['account_info_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['account_info_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['account_info_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['account_info_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_avg_fields'] = ResolversParentTypes['account_info_avg_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_max_fields'] = ResolversParentTypes['account_info_max_fields'],
> = {
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_min_fields'] = ResolversParentTypes['account_info_min_fields'],
> = {
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_mutation_response'] = ResolversParentTypes['account_info_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['account_info']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_stddev_fields'] = ResolversParentTypes['account_info_stddev_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_stddev_pop_fields'] = ResolversParentTypes['account_info_stddev_pop_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_stddev_samp_fields'] = ResolversParentTypes['account_info_stddev_samp_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_sum_fields'] = ResolversParentTypes['account_info_sum_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_var_pop_fields'] = ResolversParentTypes['account_info_var_pop_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_var_samp_fields'] = ResolversParentTypes['account_info_var_samp_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Info_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['account_info_variance_fields'] = ResolversParentTypes['account_info_variance_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_AccountsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts'] = ResolversParentTypes['all_active_accounts'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_aggregate'] = ResolversParentTypes['all_active_accounts_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['all_active_accounts_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['all_active_accounts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_aggregate_fields'] = ResolversParentTypes['all_active_accounts_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['all_active_accounts_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<All_Active_Accounts_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['all_active_accounts_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['all_active_accounts_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['all_active_accounts_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['all_active_accounts_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['all_active_accounts_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['all_active_accounts_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['all_active_accounts_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['all_active_accounts_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['all_active_accounts_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_avg_fields'] = ResolversParentTypes['all_active_accounts_avg_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_max_fields'] = ResolversParentTypes['all_active_accounts_max_fields'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_min_fields'] = ResolversParentTypes['all_active_accounts_min_fields'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_stddev_fields'] = ResolversParentTypes['all_active_accounts_stddev_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_stddev_pop_fields'] = ResolversParentTypes['all_active_accounts_stddev_pop_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_stddev_samp_fields'] = ResolversParentTypes['all_active_accounts_stddev_samp_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_sum_fields'] = ResolversParentTypes['all_active_accounts_sum_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_var_pop_fields'] = ResolversParentTypes['all_active_accounts_var_pop_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_var_samp_fields'] = ResolversParentTypes['all_active_accounts_var_samp_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type All_Active_Accounts_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['all_active_accounts_variance_fields'] = ResolversParentTypes['all_active_accounts_variance_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['assets'] = ResolversParentTypes['assets']> = {
  account_info?: Resolver<ResolversTypes['account_info'], ParentType, ContextType>;
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  balance_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  import_asset_files?: Resolver<Array<ResolversTypes['import_asset_file']>, ParentType, ContextType, Partial<AssetsImport_Asset_FilesArgs>>;
  import_asset_files_aggregate?: Resolver<
    ResolversTypes['import_asset_file_aggregate'],
    ParentType,
    ContextType,
    Partial<AssetsImport_Asset_Files_AggregateArgs>
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_aggregate'] = ResolversParentTypes['assets_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['assets_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['assets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_aggregate_fields'] = ResolversParentTypes['assets_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['assets_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Assets_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['assets_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['assets_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['assets_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['assets_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['assets_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['assets_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['assets_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['assets_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['assets_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_avg_fields'] = ResolversParentTypes['assets_avg_fields'],
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_max_fields'] = ResolversParentTypes['assets_max_fields'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  balance_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_min_fields'] = ResolversParentTypes['assets_min_fields'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  balance_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_mutation_response'] = ResolversParentTypes['assets_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['assets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_stddev_fields'] = ResolversParentTypes['assets_stddev_fields'],
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_stddev_pop_fields'] = ResolversParentTypes['assets_stddev_pop_fields'],
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_stddev_samp_fields'] = ResolversParentTypes['assets_stddev_samp_fields'],
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_sum_fields'] = ResolversParentTypes['assets_sum_fields'],
> = {
  balance?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_var_pop_fields'] = ResolversParentTypes['assets_var_pop_fields'],
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_var_samp_fields'] = ResolversParentTypes['assets_var_samp_fields'],
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Assets_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['assets_variance_fields'] = ResolversParentTypes['assets_variance_fields'],
> = {
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigintScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bigint'], any> {
  name: 'bigint';
}

export interface BpcharScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bpchar'], any> {
  name: 'bpchar';
}

export type CategoriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['categories'] = ResolversParentTypes['categories']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  assets?: Resolver<Array<ResolversTypes['assets']>, ParentType, ContextType, Partial<CategoriesAssetsArgs>>;
  assets_aggregate?: Resolver<ResolversTypes['assets_aggregate'], ParentType, ContextType, Partial<CategoriesAssets_AggregateArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  expenses?: Resolver<Array<ResolversTypes['expenses']>, ParentType, ContextType, Partial<CategoriesExpensesArgs>>;
  expenses_aggregate?: Resolver<ResolversTypes['expenses_aggregate'], ParentType, ContextType, Partial<CategoriesExpenses_AggregateArgs>>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  liabilities?: Resolver<Array<ResolversTypes['liabilities']>, ParentType, ContextType, Partial<CategoriesLiabilitiesArgs>>;
  liabilities_aggregate?: Resolver<ResolversTypes['liabilities_aggregate'], ParentType, ContextType, Partial<CategoriesLiabilities_AggregateArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurrings?: Resolver<Array<ResolversTypes['recurring']>, ParentType, ContextType, Partial<CategoriesRecurringsArgs>>;
  recurrings_aggregate?: Resolver<ResolversTypes['recurring_aggregate'], ParentType, ContextType, Partial<CategoriesRecurrings_AggregateArgs>>;
  revenues?: Resolver<Array<ResolversTypes['revenues']>, ParentType, ContextType, Partial<CategoriesRevenuesArgs>>;
  revenues_aggregate?: Resolver<ResolversTypes['revenues_aggregate'], ParentType, ContextType, Partial<CategoriesRevenues_AggregateArgs>>;
  transactions?: Resolver<Array<ResolversTypes['transactions']>, ParentType, ContextType, Partial<CategoriesTransactionsArgs>>;
  transactions_aggregate?: Resolver<ResolversTypes['transactions_aggregate'], ParentType, ContextType, Partial<CategoriesTransactions_AggregateArgs>>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_aggregate'] = ResolversParentTypes['categories_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['categories_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['categories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_aggregate_fields'] = ResolversParentTypes['categories_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['categories_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Categories_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['categories_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['categories_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['categories_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['categories_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['categories_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['categories_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['categories_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['categories_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['categories_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_avg_fields'] = ResolversParentTypes['categories_avg_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_max_fields'] = ResolversParentTypes['categories_max_fields'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_min_fields'] = ResolversParentTypes['categories_min_fields'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_mutation_response'] = ResolversParentTypes['categories_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['categories']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_stddev_fields'] = ResolversParentTypes['categories_stddev_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_stddev_pop_fields'] = ResolversParentTypes['categories_stddev_pop_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_stddev_samp_fields'] = ResolversParentTypes['categories_stddev_samp_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_sum_fields'] = ResolversParentTypes['categories_sum_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_var_pop_fields'] = ResolversParentTypes['categories_var_pop_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_var_samp_fields'] = ResolversParentTypes['categories_var_samp_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Categories_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['categories_variance_fields'] = ResolversParentTypes['categories_variance_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['date'], any> {
  name: 'date';
}

export type ExpensesResolvers<ContextType = any, ParentType extends ResolversParentTypes['expenses'] = ResolversParentTypes['expenses']> = {
  account_info?: Resolver<ResolversTypes['account_info'], ParentType, ContextType>;
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_aggregate'] = ResolversParentTypes['expenses_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['expenses_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['expenses']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_aggregate_fields'] = ResolversParentTypes['expenses_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['expenses_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Expenses_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['expenses_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['expenses_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['expenses_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['expenses_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['expenses_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['expenses_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['expenses_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['expenses_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['expenses_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_avg_fields'] = ResolversParentTypes['expenses_avg_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_max_fields'] = ResolversParentTypes['expenses_max_fields'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_min_fields'] = ResolversParentTypes['expenses_min_fields'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_mutation_response'] = ResolversParentTypes['expenses_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['expenses']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_stddev_fields'] = ResolversParentTypes['expenses_stddev_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_stddev_pop_fields'] = ResolversParentTypes['expenses_stddev_pop_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_stddev_samp_fields'] = ResolversParentTypes['expenses_stddev_samp_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_sum_fields'] = ResolversParentTypes['expenses_sum_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_var_pop_fields'] = ResolversParentTypes['expenses_var_pop_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_var_samp_fields'] = ResolversParentTypes['expenses_var_samp_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Expenses_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['expenses_variance_fields'] = ResolversParentTypes['expenses_variance_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Float8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['float8'], any> {
  name: 'float8';
}

export type Gauge_DataResolvers<ContextType = any, ParentType extends ResolversParentTypes['gauge_data'] = ResolversParentTypes['gauge_data']> = {
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  sensor_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  ts?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_aggregate'] = ResolversParentTypes['gauge_data_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['gauge_data_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['gauge_data']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_aggregate_fields'] = ResolversParentTypes['gauge_data_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['gauge_data_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Gauge_Data_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['gauge_data_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['gauge_data_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['gauge_data_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['gauge_data_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['gauge_data_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['gauge_data_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['gauge_data_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['gauge_data_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['gauge_data_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_avg_fields'] = ResolversParentTypes['gauge_data_avg_fields'],
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_max_fields'] = ResolversParentTypes['gauge_data_max_fields'],
> = {
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  sensor_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  ts?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_min_fields'] = ResolversParentTypes['gauge_data_min_fields'],
> = {
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  sensor_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  ts?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_mutation_response'] = ResolversParentTypes['gauge_data_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['gauge_data']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_stddev_fields'] = ResolversParentTypes['gauge_data_stddev_fields'],
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_stddev_pop_fields'] = ResolversParentTypes['gauge_data_stddev_pop_fields'],
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_stddev_samp_fields'] = ResolversParentTypes['gauge_data_stddev_samp_fields'],
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_sum_fields'] = ResolversParentTypes['gauge_data_sum_fields'],
> = {
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_var_pop_fields'] = ResolversParentTypes['gauge_data_var_pop_fields'],
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_var_samp_fields'] = ResolversParentTypes['gauge_data_var_samp_fields'],
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Gauge_Data_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['gauge_data_variance_fields'] = ResolversParentTypes['gauge_data_variance_fields'],
> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupsResolvers<ContextType = any, ParentType extends ResolversParentTypes['groups'] = ResolversParentTypes['groups']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_aggregate'] = ResolversParentTypes['groups_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['groups_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['groups']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_aggregate_fields'] = ResolversParentTypes['groups_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['groups_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Groups_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['groups_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['groups_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['groups_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['groups_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['groups_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['groups_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['groups_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['groups_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['groups_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_avg_fields'] = ResolversParentTypes['groups_avg_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_max_fields'] = ResolversParentTypes['groups_max_fields'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_min_fields'] = ResolversParentTypes['groups_min_fields'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_mutation_response'] = ResolversParentTypes['groups_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['groups']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_stddev_fields'] = ResolversParentTypes['groups_stddev_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_stddev_pop_fields'] = ResolversParentTypes['groups_stddev_pop_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_stddev_samp_fields'] = ResolversParentTypes['groups_stddev_samp_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_sum_fields'] = ResolversParentTypes['groups_sum_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_var_pop_fields'] = ResolversParentTypes['groups_var_pop_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_var_samp_fields'] = ResolversParentTypes['groups_var_samp_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Groups_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['groups_variance_fields'] = ResolversParentTypes['groups_variance_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_DataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data'] = ResolversParentTypes['historical_data'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  sensor_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  ts?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  zambretti?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_aggregate'] = ResolversParentTypes['historical_data_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['historical_data_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['historical_data']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_aggregate_fields'] = ResolversParentTypes['historical_data_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['historical_data_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Historical_Data_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['historical_data_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['historical_data_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['historical_data_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['historical_data_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['historical_data_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['historical_data_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['historical_data_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['historical_data_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['historical_data_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_avg_fields'] = ResolversParentTypes['historical_data_avg_fields'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_max_fields'] = ResolversParentTypes['historical_data_max_fields'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  sensor_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  ts?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  zambretti?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_min_fields'] = ResolversParentTypes['historical_data_min_fields'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  sensor_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  ts?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  zambretti?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_mutation_response'] = ResolversParentTypes['historical_data_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['historical_data']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_stddev_fields'] = ResolversParentTypes['historical_data_stddev_fields'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_stddev_pop_fields'] = ResolversParentTypes['historical_data_stddev_pop_fields'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_stddev_samp_fields'] = ResolversParentTypes['historical_data_stddev_samp_fields'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_sum_fields'] = ResolversParentTypes['historical_data_sum_fields'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_var_pop_fields'] = ResolversParentTypes['historical_data_var_pop_fields'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_var_samp_fields'] = ResolversParentTypes['historical_data_var_samp_fields'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historical_Data_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['historical_data_variance_fields'] = ResolversParentTypes['historical_data_variance_fields'],
> = {
  absolute_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  relative_pressure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_FileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file'] = ResolversParentTypes['import_asset_file'],
> = {
  asset?: Resolver<ResolversTypes['assets'], ParentType, ContextType>;
  asset_id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactions?: Resolver<Array<ResolversTypes['transactions']>, ParentType, ContextType, Partial<Import_Asset_FileTransactionsArgs>>;
  transactions_aggregate?: Resolver<ResolversTypes['transactions_aggregate'], ParentType, ContextType, Partial<Import_Asset_FileTransactions_AggregateArgs>>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_aggregate'] = ResolversParentTypes['import_asset_file_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['import_asset_file_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['import_asset_file']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_aggregate_fields'] = ResolversParentTypes['import_asset_file_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['import_asset_file_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Import_Asset_File_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['import_asset_file_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['import_asset_file_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['import_asset_file_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['import_asset_file_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['import_asset_file_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['import_asset_file_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['import_asset_file_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['import_asset_file_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['import_asset_file_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_avg_fields'] = ResolversParentTypes['import_asset_file_avg_fields'],
> = {
  asset_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_max_fields'] = ResolversParentTypes['import_asset_file_max_fields'],
> = {
  asset_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_min_fields'] = ResolversParentTypes['import_asset_file_min_fields'],
> = {
  asset_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_mutation_response'] = ResolversParentTypes['import_asset_file_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['import_asset_file']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_stddev_fields'] = ResolversParentTypes['import_asset_file_stddev_fields'],
> = {
  asset_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_stddev_pop_fields'] = ResolversParentTypes['import_asset_file_stddev_pop_fields'],
> = {
  asset_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_stddev_samp_fields'] = ResolversParentTypes['import_asset_file_stddev_samp_fields'],
> = {
  asset_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_sum_fields'] = ResolversParentTypes['import_asset_file_sum_fields'],
> = {
  asset_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_var_pop_fields'] = ResolversParentTypes['import_asset_file_var_pop_fields'],
> = {
  asset_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_var_samp_fields'] = ResolversParentTypes['import_asset_file_var_samp_fields'],
> = {
  asset_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Import_Asset_File_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['import_asset_file_variance_fields'] = ResolversParentTypes['import_asset_file_variance_fields'],
> = {
  asset_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LabelsResolvers<ContextType = any, ParentType extends ResolversParentTypes['labels'] = ResolversParentTypes['labels']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurring_labels?: Resolver<Array<ResolversTypes['recurring_labels']>, ParentType, ContextType, Partial<LabelsRecurring_LabelsArgs>>;
  recurring_labels_aggregate?: Resolver<ResolversTypes['recurring_labels_aggregate'], ParentType, ContextType, Partial<LabelsRecurring_Labels_AggregateArgs>>;
  transaction_labels?: Resolver<Array<ResolversTypes['transaction_labels']>, ParentType, ContextType, Partial<LabelsTransaction_LabelsArgs>>;
  transaction_labels_aggregate?: Resolver<
    ResolversTypes['transaction_labels_aggregate'],
    ParentType,
    ContextType,
    Partial<LabelsTransaction_Labels_AggregateArgs>
  >;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_aggregate'] = ResolversParentTypes['labels_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['labels_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['labels']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_aggregate_fields'] = ResolversParentTypes['labels_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['labels_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Labels_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['labels_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['labels_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['labels_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['labels_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['labels_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['labels_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['labels_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['labels_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['labels_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_avg_fields'] = ResolversParentTypes['labels_avg_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_max_fields'] = ResolversParentTypes['labels_max_fields'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_min_fields'] = ResolversParentTypes['labels_min_fields'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_mutation_response'] = ResolversParentTypes['labels_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['labels']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_stddev_fields'] = ResolversParentTypes['labels_stddev_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_stddev_pop_fields'] = ResolversParentTypes['labels_stddev_pop_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_stddev_samp_fields'] = ResolversParentTypes['labels_stddev_samp_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_sum_fields'] = ResolversParentTypes['labels_sum_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_var_pop_fields'] = ResolversParentTypes['labels_var_pop_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_var_samp_fields'] = ResolversParentTypes['labels_var_samp_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Labels_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['labels_variance_fields'] = ResolversParentTypes['labels_variance_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiabilitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['liabilities'] = ResolversParentTypes['liabilities']> = {
  account_info?: Resolver<ResolversTypes['account_info'], ParentType, ContextType>;
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_aggregate'] = ResolversParentTypes['liabilities_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['liabilities_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['liabilities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_aggregate_fields'] = ResolversParentTypes['liabilities_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['liabilities_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Liabilities_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['liabilities_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['liabilities_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['liabilities_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['liabilities_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['liabilities_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['liabilities_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['liabilities_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['liabilities_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['liabilities_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_avg_fields'] = ResolversParentTypes['liabilities_avg_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_max_fields'] = ResolversParentTypes['liabilities_max_fields'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_min_fields'] = ResolversParentTypes['liabilities_min_fields'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_mutation_response'] = ResolversParentTypes['liabilities_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['liabilities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_stddev_fields'] = ResolversParentTypes['liabilities_stddev_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_stddev_pop_fields'] = ResolversParentTypes['liabilities_stddev_pop_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_stddev_samp_fields'] = ResolversParentTypes['liabilities_stddev_samp_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_sum_fields'] = ResolversParentTypes['liabilities_sum_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_var_pop_fields'] = ResolversParentTypes['liabilities_var_pop_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_var_samp_fields'] = ResolversParentTypes['liabilities_var_samp_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Liabilities_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['liabilities_variance_fields'] = ResolversParentTypes['liabilities_variance_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
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
  delete_assets?: Resolver<Maybe<ResolversTypes['assets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AssetsArgs, 'where'>>;
  delete_assets_by_pk?: Resolver<Maybe<ResolversTypes['assets']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Assets_By_PkArgs, 'id'>>;
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
  delete_expenses_by_pk?: Resolver<Maybe<ResolversTypes['expenses']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Expenses_By_PkArgs, 'id'>>;
  delete_gauge_data?: Resolver<
    Maybe<ResolversTypes['gauge_data_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Gauge_DataArgs, 'where'>
  >;
  delete_gauge_data_by_pk?: Resolver<
    Maybe<ResolversTypes['gauge_data']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Gauge_Data_By_PkArgs, 'id' | 'ts'>
  >;
  delete_groups?: Resolver<Maybe<ResolversTypes['groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_GroupsArgs, 'where'>>;
  delete_groups_by_pk?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Groups_By_PkArgs, 'id'>>;
  delete_historical_data?: Resolver<
    Maybe<ResolversTypes['historical_data_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Historical_DataArgs, 'where'>
  >;
  delete_historical_data_by_pk?: Resolver<
    Maybe<ResolversTypes['historical_data']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Historical_Data_By_PkArgs, 'id' | 'ts'>
  >;
  delete_import_asset_file?: Resolver<
    Maybe<ResolversTypes['import_asset_file_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Import_Asset_FileArgs, 'where'>
  >;
  delete_import_asset_file_by_pk?: Resolver<
    Maybe<ResolversTypes['import_asset_file']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Import_Asset_File_By_PkArgs, 'id'>
  >;
  delete_labels?: Resolver<Maybe<ResolversTypes['labels_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_LabelsArgs, 'where'>>;
  delete_labels_by_pk?: Resolver<Maybe<ResolversTypes['labels']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Labels_By_PkArgs, 'id'>>;
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
  delete_recurring?: Resolver<
    Maybe<ResolversTypes['recurring_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_RecurringArgs, 'where'>
  >;
  delete_recurring_by_pk?: Resolver<Maybe<ResolversTypes['recurring']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Recurring_By_PkArgs, 'id'>>;
  delete_recurring_labels?: Resolver<
    Maybe<ResolversTypes['recurring_labels_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Recurring_LabelsArgs, 'where'>
  >;
  delete_recurring_labels_by_pk?: Resolver<
    Maybe<ResolversTypes['recurring_labels']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Recurring_Labels_By_PkArgs, 'label_id' | 'recurring_id'>
  >;
  delete_revenues?: Resolver<
    Maybe<ResolversTypes['revenues_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_RevenuesArgs, 'where'>
  >;
  delete_revenues_by_pk?: Resolver<Maybe<ResolversTypes['revenues']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Revenues_By_PkArgs, 'id'>>;
  delete_status_data?: Resolver<
    Maybe<ResolversTypes['status_data_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Status_DataArgs, 'where'>
  >;
  delete_status_data_by_pk?: Resolver<
    Maybe<ResolversTypes['status_data']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Status_Data_By_PkArgs, 'pin' | 'sensor_name'>
  >;
  delete_transaction_accounts?: Resolver<
    Maybe<ResolversTypes['transaction_accounts_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Transaction_AccountsArgs, 'where'>
  >;
  delete_transaction_accounts_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_accounts']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Transaction_Accounts_By_PkArgs, 'id'>
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
    RequireFields<Mutation_RootDelete_Transaction_Attachments_By_PkArgs, 'attachment_id' | 'transaction_id'>
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
    RequireFields<Mutation_RootDelete_Transaction_Labels_By_PkArgs, 'label_id' | 'transaction_id'>
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
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UsersArgs, 'where'>>;
  delete_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Users_By_PkArgs, 'id'>>;
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
  insert_assets_one?: Resolver<Maybe<ResolversTypes['assets']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Assets_OneArgs, 'object'>>;
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
  insert_expenses_one?: Resolver<Maybe<ResolversTypes['expenses']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Expenses_OneArgs, 'object'>>;
  insert_gauge_data?: Resolver<
    Maybe<ResolversTypes['gauge_data_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Gauge_DataArgs, 'objects'>
  >;
  insert_gauge_data_one?: Resolver<
    Maybe<ResolversTypes['gauge_data']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Gauge_Data_OneArgs, 'object'>
  >;
  insert_groups?: Resolver<
    Maybe<ResolversTypes['groups_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_GroupsArgs, 'objects'>
  >;
  insert_groups_one?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Groups_OneArgs, 'object'>>;
  insert_historical_data?: Resolver<
    Maybe<ResolversTypes['historical_data_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Historical_DataArgs, 'objects'>
  >;
  insert_historical_data_one?: Resolver<
    Maybe<ResolversTypes['historical_data']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Historical_Data_OneArgs, 'object'>
  >;
  insert_import_asset_file?: Resolver<
    Maybe<ResolversTypes['import_asset_file_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Import_Asset_FileArgs, 'objects'>
  >;
  insert_import_asset_file_one?: Resolver<
    Maybe<ResolversTypes['import_asset_file']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Import_Asset_File_OneArgs, 'object'>
  >;
  insert_labels?: Resolver<
    Maybe<ResolversTypes['labels_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_LabelsArgs, 'objects'>
  >;
  insert_labels_one?: Resolver<Maybe<ResolversTypes['labels']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Labels_OneArgs, 'object'>>;
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
  insert_recurring?: Resolver<
    Maybe<ResolversTypes['recurring_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_RecurringArgs, 'objects'>
  >;
  insert_recurring_labels?: Resolver<
    Maybe<ResolversTypes['recurring_labels_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Recurring_LabelsArgs, 'objects'>
  >;
  insert_recurring_labels_one?: Resolver<
    Maybe<ResolversTypes['recurring_labels']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Recurring_Labels_OneArgs, 'object'>
  >;
  insert_recurring_one?: Resolver<Maybe<ResolversTypes['recurring']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Recurring_OneArgs, 'object'>>;
  insert_revenues?: Resolver<
    Maybe<ResolversTypes['revenues_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_RevenuesArgs, 'objects'>
  >;
  insert_revenues_one?: Resolver<Maybe<ResolversTypes['revenues']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Revenues_OneArgs, 'object'>>;
  insert_status_data?: Resolver<
    Maybe<ResolversTypes['status_data_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Status_DataArgs, 'objects'>
  >;
  insert_status_data_one?: Resolver<
    Maybe<ResolversTypes['status_data']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Status_Data_OneArgs, 'object'>
  >;
  insert_transaction_accounts?: Resolver<
    Maybe<ResolversTypes['transaction_accounts_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Transaction_AccountsArgs, 'objects'>
  >;
  insert_transaction_accounts_one?: Resolver<
    Maybe<ResolversTypes['transaction_accounts']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Transaction_Accounts_OneArgs, 'object'>
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
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UsersArgs, 'objects'>>;
  insert_users_one?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Users_OneArgs, 'object'>>;
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
  update_account_info_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['account_info_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Account_Info_ManyArgs, 'updates'>
  >;
  update_assets?: Resolver<Maybe<ResolversTypes['assets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AssetsArgs, 'where'>>;
  update_assets_by_pk?: Resolver<Maybe<ResolversTypes['assets']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Assets_By_PkArgs, 'pk_columns'>>;
  update_assets_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['assets_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Assets_ManyArgs, 'updates'>
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
  update_categories_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['categories_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Categories_ManyArgs, 'updates'>
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
  update_expenses_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['expenses_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Expenses_ManyArgs, 'updates'>
  >;
  update_gauge_data?: Resolver<
    Maybe<ResolversTypes['gauge_data_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Gauge_DataArgs, 'where'>
  >;
  update_gauge_data_by_pk?: Resolver<
    Maybe<ResolversTypes['gauge_data']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Gauge_Data_By_PkArgs, 'pk_columns'>
  >;
  update_gauge_data_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['gauge_data_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Gauge_Data_ManyArgs, 'updates'>
  >;
  update_groups?: Resolver<Maybe<ResolversTypes['groups_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_GroupsArgs, 'where'>>;
  update_groups_by_pk?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Groups_By_PkArgs, 'pk_columns'>>;
  update_groups_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['groups_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Groups_ManyArgs, 'updates'>
  >;
  update_historical_data?: Resolver<
    Maybe<ResolversTypes['historical_data_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Historical_DataArgs, 'where'>
  >;
  update_historical_data_by_pk?: Resolver<
    Maybe<ResolversTypes['historical_data']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Historical_Data_By_PkArgs, 'pk_columns'>
  >;
  update_historical_data_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['historical_data_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Historical_Data_ManyArgs, 'updates'>
  >;
  update_import_asset_file?: Resolver<
    Maybe<ResolversTypes['import_asset_file_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Import_Asset_FileArgs, 'where'>
  >;
  update_import_asset_file_by_pk?: Resolver<
    Maybe<ResolversTypes['import_asset_file']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Import_Asset_File_By_PkArgs, 'pk_columns'>
  >;
  update_import_asset_file_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['import_asset_file_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Import_Asset_File_ManyArgs, 'updates'>
  >;
  update_labels?: Resolver<Maybe<ResolversTypes['labels_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_LabelsArgs, 'where'>>;
  update_labels_by_pk?: Resolver<Maybe<ResolversTypes['labels']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Labels_By_PkArgs, 'pk_columns'>>;
  update_labels_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['labels_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Labels_ManyArgs, 'updates'>
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
  update_liabilities_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['liabilities_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Liabilities_ManyArgs, 'updates'>
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
  update_notifications_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['notifications_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Notifications_ManyArgs, 'updates'>
  >;
  update_recurring?: Resolver<
    Maybe<ResolversTypes['recurring_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_RecurringArgs, 'where'>
  >;
  update_recurring_by_pk?: Resolver<
    Maybe<ResolversTypes['recurring']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Recurring_By_PkArgs, 'pk_columns'>
  >;
  update_recurring_labels?: Resolver<
    Maybe<ResolversTypes['recurring_labels_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Recurring_LabelsArgs, 'where'>
  >;
  update_recurring_labels_by_pk?: Resolver<
    Maybe<ResolversTypes['recurring_labels']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Recurring_Labels_By_PkArgs, 'pk_columns'>
  >;
  update_recurring_labels_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['recurring_labels_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Recurring_Labels_ManyArgs, 'updates'>
  >;
  update_recurring_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['recurring_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Recurring_ManyArgs, 'updates'>
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
  update_revenues_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['revenues_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Revenues_ManyArgs, 'updates'>
  >;
  update_status_data?: Resolver<
    Maybe<ResolversTypes['status_data_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Status_DataArgs, 'where'>
  >;
  update_status_data_by_pk?: Resolver<
    Maybe<ResolversTypes['status_data']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Status_Data_By_PkArgs, 'pk_columns'>
  >;
  update_status_data_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['status_data_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Status_Data_ManyArgs, 'updates'>
  >;
  update_transaction_accounts?: Resolver<
    Maybe<ResolversTypes['transaction_accounts_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Transaction_AccountsArgs, 'where'>
  >;
  update_transaction_accounts_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_accounts']>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Transaction_Accounts_By_PkArgs, 'pk_columns'>
  >;
  update_transaction_accounts_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['transaction_accounts_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Transaction_Accounts_ManyArgs, 'updates'>
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
    RequireFields<Mutation_RootUpdate_Transaction_Attachments_By_PkArgs, 'pk_columns'>
  >;
  update_transaction_attachments_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['transaction_attachments_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Transaction_Attachments_ManyArgs, 'updates'>
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
    RequireFields<Mutation_RootUpdate_Transaction_Labels_By_PkArgs, 'pk_columns'>
  >;
  update_transaction_labels_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['transaction_labels_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Transaction_Labels_ManyArgs, 'updates'>
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
  update_transactions_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['transactions_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Transactions_ManyArgs, 'updates'>
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
  update_user_settings_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['user_settings_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_User_Settings_ManyArgs, 'updates'>
  >;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UsersArgs, 'where'>>;
  update_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Users_By_PkArgs, 'pk_columns'>>;
  update_users_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['users_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Users_ManyArgs, 'updates'>
  >;
};

export type NotificationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['notifications'] = ResolversParentTypes['notifications']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  read_status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_aggregate'] = ResolversParentTypes['notifications_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['notifications_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['notifications']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_aggregate_fields'] = ResolversParentTypes['notifications_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['notifications_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Notifications_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['notifications_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['notifications_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['notifications_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['notifications_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['notifications_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['notifications_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['notifications_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['notifications_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['notifications_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_avg_fields'] = ResolversParentTypes['notifications_avg_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_max_fields'] = ResolversParentTypes['notifications_max_fields'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_min_fields'] = ResolversParentTypes['notifications_min_fields'],
> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_mutation_response'] = ResolversParentTypes['notifications_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['notifications']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_stddev_fields'] = ResolversParentTypes['notifications_stddev_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_stddev_pop_fields'] = ResolversParentTypes['notifications_stddev_pop_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_stddev_samp_fields'] = ResolversParentTypes['notifications_stddev_samp_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_sum_fields'] = ResolversParentTypes['notifications_sum_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_var_pop_fields'] = ResolversParentTypes['notifications_var_pop_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_var_samp_fields'] = ResolversParentTypes['notifications_var_samp_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Notifications_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['notifications_variance_fields'] = ResolversParentTypes['notifications_variance_fields'],
> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  account_info?: Resolver<Array<ResolversTypes['account_info']>, ParentType, ContextType, Partial<Query_RootAccount_InfoArgs>>;
  account_info_aggregate?: Resolver<ResolversTypes['account_info_aggregate'], ParentType, ContextType, Partial<Query_RootAccount_Info_AggregateArgs>>;
  account_info_by_pk?: Resolver<Maybe<ResolversTypes['account_info']>, ParentType, ContextType, RequireFields<Query_RootAccount_Info_By_PkArgs, 'id'>>;
  all_active_accounts?: Resolver<Array<ResolversTypes['all_active_accounts']>, ParentType, ContextType, Partial<Query_RootAll_Active_AccountsArgs>>;
  all_active_accounts_aggregate?: Resolver<
    ResolversTypes['all_active_accounts_aggregate'],
    ParentType,
    ContextType,
    Partial<Query_RootAll_Active_Accounts_AggregateArgs>
  >;
  assets?: Resolver<Array<ResolversTypes['assets']>, ParentType, ContextType, Partial<Query_RootAssetsArgs>>;
  assets_aggregate?: Resolver<ResolversTypes['assets_aggregate'], ParentType, ContextType, Partial<Query_RootAssets_AggregateArgs>>;
  assets_by_pk?: Resolver<Maybe<ResolversTypes['assets']>, ParentType, ContextType, RequireFields<Query_RootAssets_By_PkArgs, 'id'>>;
  categories?: Resolver<Array<ResolversTypes['categories']>, ParentType, ContextType, Partial<Query_RootCategoriesArgs>>;
  categories_aggregate?: Resolver<ResolversTypes['categories_aggregate'], ParentType, ContextType, Partial<Query_RootCategories_AggregateArgs>>;
  categories_by_pk?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType, RequireFields<Query_RootCategories_By_PkArgs, 'id'>>;
  expenses?: Resolver<Array<ResolversTypes['expenses']>, ParentType, ContextType, Partial<Query_RootExpensesArgs>>;
  expenses_aggregate?: Resolver<ResolversTypes['expenses_aggregate'], ParentType, ContextType, Partial<Query_RootExpenses_AggregateArgs>>;
  expenses_by_pk?: Resolver<Maybe<ResolversTypes['expenses']>, ParentType, ContextType, RequireFields<Query_RootExpenses_By_PkArgs, 'id'>>;
  gauge_data?: Resolver<Array<ResolversTypes['gauge_data']>, ParentType, ContextType, Partial<Query_RootGauge_DataArgs>>;
  gauge_data_aggregate?: Resolver<ResolversTypes['gauge_data_aggregate'], ParentType, ContextType, Partial<Query_RootGauge_Data_AggregateArgs>>;
  gauge_data_by_pk?: Resolver<Maybe<ResolversTypes['gauge_data']>, ParentType, ContextType, RequireFields<Query_RootGauge_Data_By_PkArgs, 'id' | 'ts'>>;
  groups?: Resolver<Array<ResolversTypes['groups']>, ParentType, ContextType, Partial<Query_RootGroupsArgs>>;
  groups_aggregate?: Resolver<ResolversTypes['groups_aggregate'], ParentType, ContextType, Partial<Query_RootGroups_AggregateArgs>>;
  groups_by_pk?: Resolver<Maybe<ResolversTypes['groups']>, ParentType, ContextType, RequireFields<Query_RootGroups_By_PkArgs, 'id'>>;
  historical_data?: Resolver<Array<ResolversTypes['historical_data']>, ParentType, ContextType, Partial<Query_RootHistorical_DataArgs>>;
  historical_data_aggregate?: Resolver<ResolversTypes['historical_data_aggregate'], ParentType, ContextType, Partial<Query_RootHistorical_Data_AggregateArgs>>;
  historical_data_by_pk?: Resolver<
    Maybe<ResolversTypes['historical_data']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootHistorical_Data_By_PkArgs, 'id' | 'ts'>
  >;
  import_asset_file?: Resolver<Array<ResolversTypes['import_asset_file']>, ParentType, ContextType, Partial<Query_RootImport_Asset_FileArgs>>;
  import_asset_file_aggregate?: Resolver<
    ResolversTypes['import_asset_file_aggregate'],
    ParentType,
    ContextType,
    Partial<Query_RootImport_Asset_File_AggregateArgs>
  >;
  import_asset_file_by_pk?: Resolver<
    Maybe<ResolversTypes['import_asset_file']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootImport_Asset_File_By_PkArgs, 'id'>
  >;
  labels?: Resolver<Array<ResolversTypes['labels']>, ParentType, ContextType, Partial<Query_RootLabelsArgs>>;
  labels_aggregate?: Resolver<ResolversTypes['labels_aggregate'], ParentType, ContextType, Partial<Query_RootLabels_AggregateArgs>>;
  labels_by_pk?: Resolver<Maybe<ResolversTypes['labels']>, ParentType, ContextType, RequireFields<Query_RootLabels_By_PkArgs, 'id'>>;
  liabilities?: Resolver<Array<ResolversTypes['liabilities']>, ParentType, ContextType, Partial<Query_RootLiabilitiesArgs>>;
  liabilities_aggregate?: Resolver<ResolversTypes['liabilities_aggregate'], ParentType, ContextType, Partial<Query_RootLiabilities_AggregateArgs>>;
  liabilities_by_pk?: Resolver<Maybe<ResolversTypes['liabilities']>, ParentType, ContextType, RequireFields<Query_RootLiabilities_By_PkArgs, 'id'>>;
  notifications?: Resolver<Array<ResolversTypes['notifications']>, ParentType, ContextType, Partial<Query_RootNotificationsArgs>>;
  notifications_aggregate?: Resolver<ResolversTypes['notifications_aggregate'], ParentType, ContextType, Partial<Query_RootNotifications_AggregateArgs>>;
  notifications_by_pk?: Resolver<Maybe<ResolversTypes['notifications']>, ParentType, ContextType, RequireFields<Query_RootNotifications_By_PkArgs, 'id'>>;
  recurring?: Resolver<Array<ResolversTypes['recurring']>, ParentType, ContextType, Partial<Query_RootRecurringArgs>>;
  recurring_aggregate?: Resolver<ResolversTypes['recurring_aggregate'], ParentType, ContextType, Partial<Query_RootRecurring_AggregateArgs>>;
  recurring_by_pk?: Resolver<Maybe<ResolversTypes['recurring']>, ParentType, ContextType, RequireFields<Query_RootRecurring_By_PkArgs, 'id'>>;
  recurring_labels?: Resolver<Array<ResolversTypes['recurring_labels']>, ParentType, ContextType, Partial<Query_RootRecurring_LabelsArgs>>;
  recurring_labels_aggregate?: Resolver<
    ResolversTypes['recurring_labels_aggregate'],
    ParentType,
    ContextType,
    Partial<Query_RootRecurring_Labels_AggregateArgs>
  >;
  recurring_labels_by_pk?: Resolver<
    Maybe<ResolversTypes['recurring_labels']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootRecurring_Labels_By_PkArgs, 'label_id' | 'recurring_id'>
  >;
  revenues?: Resolver<Array<ResolversTypes['revenues']>, ParentType, ContextType, Partial<Query_RootRevenuesArgs>>;
  revenues_aggregate?: Resolver<ResolversTypes['revenues_aggregate'], ParentType, ContextType, Partial<Query_RootRevenues_AggregateArgs>>;
  revenues_by_pk?: Resolver<Maybe<ResolversTypes['revenues']>, ParentType, ContextType, RequireFields<Query_RootRevenues_By_PkArgs, 'id'>>;
  status_data?: Resolver<Array<ResolversTypes['status_data']>, ParentType, ContextType, Partial<Query_RootStatus_DataArgs>>;
  status_data_aggregate?: Resolver<ResolversTypes['status_data_aggregate'], ParentType, ContextType, Partial<Query_RootStatus_Data_AggregateArgs>>;
  status_data_by_pk?: Resolver<
    Maybe<ResolversTypes['status_data']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootStatus_Data_By_PkArgs, 'pin' | 'sensor_name'>
  >;
  transaction_accounts?: Resolver<Array<ResolversTypes['transaction_accounts']>, ParentType, ContextType, Partial<Query_RootTransaction_AccountsArgs>>;
  transaction_accounts_aggregate?: Resolver<
    ResolversTypes['transaction_accounts_aggregate'],
    ParentType,
    ContextType,
    Partial<Query_RootTransaction_Accounts_AggregateArgs>
  >;
  transaction_accounts_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_accounts']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootTransaction_Accounts_By_PkArgs, 'id'>
  >;
  transaction_attachments?: Resolver<Array<ResolversTypes['transaction_attachments']>, ParentType, ContextType, Partial<Query_RootTransaction_AttachmentsArgs>>;
  transaction_attachments_aggregate?: Resolver<
    ResolversTypes['transaction_attachments_aggregate'],
    ParentType,
    ContextType,
    Partial<Query_RootTransaction_Attachments_AggregateArgs>
  >;
  transaction_attachments_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_attachments']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootTransaction_Attachments_By_PkArgs, 'attachment_id' | 'transaction_id'>
  >;
  transaction_labels?: Resolver<Array<ResolversTypes['transaction_labels']>, ParentType, ContextType, Partial<Query_RootTransaction_LabelsArgs>>;
  transaction_labels_aggregate?: Resolver<
    ResolversTypes['transaction_labels_aggregate'],
    ParentType,
    ContextType,
    Partial<Query_RootTransaction_Labels_AggregateArgs>
  >;
  transaction_labels_by_pk?: Resolver<
    Maybe<ResolversTypes['transaction_labels']>,
    ParentType,
    ContextType,
    RequireFields<Query_RootTransaction_Labels_By_PkArgs, 'label_id' | 'transaction_id'>
  >;
  transactions?: Resolver<Array<ResolversTypes['transactions']>, ParentType, ContextType, Partial<Query_RootTransactionsArgs>>;
  transactions_aggregate?: Resolver<ResolversTypes['transactions_aggregate'], ParentType, ContextType, Partial<Query_RootTransactions_AggregateArgs>>;
  transactions_by_pk?: Resolver<Maybe<ResolversTypes['transactions']>, ParentType, ContextType, RequireFields<Query_RootTransactions_By_PkArgs, 'id'>>;
  user_settings?: Resolver<Array<ResolversTypes['user_settings']>, ParentType, ContextType, Partial<Query_RootUser_SettingsArgs>>;
  user_settings_aggregate?: Resolver<ResolversTypes['user_settings_aggregate'], ParentType, ContextType, Partial<Query_RootUser_Settings_AggregateArgs>>;
  user_settings_by_pk?: Resolver<Maybe<ResolversTypes['user_settings']>, ParentType, ContextType, RequireFields<Query_RootUser_Settings_By_PkArgs, 'user_id'>>;
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, Partial<Query_RootUsersArgs>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, Partial<Query_RootUsers_AggregateArgs>>;
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsers_By_PkArgs, 'id'>>;
};

export type RecurringResolvers<ContextType = any, ParentType extends ResolversParentTypes['recurring'] = ResolversParentTypes['recurring']> = {
  accountInfoByAccountTo?: Resolver<ResolversTypes['account_info'], ParentType, ContextType>;
  account_from?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  account_info?: Resolver<ResolversTypes['account_info'], ParentType, ContextType>;
  account_to?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['float8'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  cycle_type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration_type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recurring_labels?: Resolver<Array<ResolversTypes['recurring_labels']>, ParentType, ContextType, Partial<RecurringRecurring_LabelsArgs>>;
  recurring_labels_aggregate?: Resolver<
    ResolversTypes['recurring_labels_aggregate'],
    ParentType,
    ContextType,
    Partial<RecurringRecurring_Labels_AggregateArgs>
  >;
  start_on?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transaction_type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactions?: Resolver<Array<ResolversTypes['transactions']>, ParentType, ContextType, Partial<RecurringTransactionsArgs>>;
  transactions_aggregate?: Resolver<ResolversTypes['transactions_aggregate'], ParentType, ContextType, Partial<RecurringTransactions_AggregateArgs>>;
  until_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_aggregate'] = ResolversParentTypes['recurring_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['recurring_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['recurring']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_aggregate_fields'] = ResolversParentTypes['recurring_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['recurring_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Recurring_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['recurring_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['recurring_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['recurring_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['recurring_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['recurring_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['recurring_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['recurring_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['recurring_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['recurring_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_avg_fields'] = ResolversParentTypes['recurring_avg_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cycle_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_LabelsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels'] = ResolversParentTypes['recurring_labels'],
> = {
  label?: Resolver<ResolversTypes['labels'], ParentType, ContextType>;
  label_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  recurring?: Resolver<ResolversTypes['recurring'], ParentType, ContextType>;
  recurring_id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_aggregate'] = ResolversParentTypes['recurring_labels_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['recurring_labels_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['recurring_labels']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_aggregate_fields'] = ResolversParentTypes['recurring_labels_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['recurring_labels_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Recurring_Labels_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['recurring_labels_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['recurring_labels_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['recurring_labels_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['recurring_labels_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['recurring_labels_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['recurring_labels_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['recurring_labels_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['recurring_labels_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['recurring_labels_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_avg_fields'] = ResolversParentTypes['recurring_labels_avg_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_max_fields'] = ResolversParentTypes['recurring_labels_max_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_min_fields'] = ResolversParentTypes['recurring_labels_min_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_mutation_response'] = ResolversParentTypes['recurring_labels_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['recurring_labels']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_stddev_fields'] = ResolversParentTypes['recurring_labels_stddev_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_stddev_pop_fields'] = ResolversParentTypes['recurring_labels_stddev_pop_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_stddev_samp_fields'] = ResolversParentTypes['recurring_labels_stddev_samp_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_sum_fields'] = ResolversParentTypes['recurring_labels_sum_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_var_pop_fields'] = ResolversParentTypes['recurring_labels_var_pop_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_var_samp_fields'] = ResolversParentTypes['recurring_labels_var_samp_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Labels_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_labels_variance_fields'] = ResolversParentTypes['recurring_labels_variance_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_max_fields'] = ResolversParentTypes['recurring_max_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  cycle_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start_on?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  until_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_min_fields'] = ResolversParentTypes['recurring_min_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  cycle_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start_on?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  until_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_mutation_response'] = ResolversParentTypes['recurring_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['recurring']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_stddev_fields'] = ResolversParentTypes['recurring_stddev_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cycle_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_stddev_pop_fields'] = ResolversParentTypes['recurring_stddev_pop_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cycle_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_stddev_samp_fields'] = ResolversParentTypes['recurring_stddev_samp_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cycle_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_sum_fields'] = ResolversParentTypes['recurring_sum_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  cycle_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_var_pop_fields'] = ResolversParentTypes['recurring_var_pop_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cycle_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_var_samp_fields'] = ResolversParentTypes['recurring_var_samp_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cycle_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Recurring_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['recurring_variance_fields'] = ResolversParentTypes['recurring_variance_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cycle_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  no_of_times?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevenuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['revenues'] = ResolversParentTypes['revenues']> = {
  account_info?: Resolver<ResolversTypes['account_info'], ParentType, ContextType>;
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_aggregate'] = ResolversParentTypes['revenues_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['revenues_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['revenues']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_aggregate_fields'] = ResolversParentTypes['revenues_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['revenues_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Revenues_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['revenues_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['revenues_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['revenues_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['revenues_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['revenues_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['revenues_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['revenues_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['revenues_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['revenues_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_avg_fields'] = ResolversParentTypes['revenues_avg_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_max_fields'] = ResolversParentTypes['revenues_max_fields'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_min_fields'] = ResolversParentTypes['revenues_min_fields'],
> = {
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_mutation_response'] = ResolversParentTypes['revenues_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['revenues']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_stddev_fields'] = ResolversParentTypes['revenues_stddev_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_stddev_pop_fields'] = ResolversParentTypes['revenues_stddev_pop_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_stddev_samp_fields'] = ResolversParentTypes['revenues_stddev_samp_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_sum_fields'] = ResolversParentTypes['revenues_sum_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_var_pop_fields'] = ResolversParentTypes['revenues_var_pop_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_var_samp_fields'] = ResolversParentTypes['revenues_var_samp_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Revenues_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['revenues_variance_fields'] = ResolversParentTypes['revenues_variance_fields'],
> = {
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SmallintScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['smallint'], any> {
  name: 'smallint';
}

export type Status_DataResolvers<ContextType = any, ParentType extends ResolversParentTypes['status_data'] = ResolversParentTypes['status_data']> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  pin?: Resolver<ResolversTypes['smallint'], ParentType, ContextType>;
  sensor_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stringvalue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ts?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_aggregate'] = ResolversParentTypes['status_data_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['status_data_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['status_data']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_aggregate_fields'] = ResolversParentTypes['status_data_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['status_data_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Status_Data_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['status_data_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['status_data_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['status_data_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['status_data_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['status_data_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['status_data_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['status_data_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['status_data_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['status_data_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_avg_fields'] = ResolversParentTypes['status_data_avg_fields'],
> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_max_fields'] = ResolversParentTypes['status_data_max_fields'],
> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  sensor_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stringvalue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ts?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_min_fields'] = ResolversParentTypes['status_data_min_fields'],
> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  sensor_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stringvalue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ts?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_mutation_response'] = ResolversParentTypes['status_data_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['status_data']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_stddev_fields'] = ResolversParentTypes['status_data_stddev_fields'],
> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_stddev_pop_fields'] = ResolversParentTypes['status_data_stddev_pop_fields'],
> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_stddev_samp_fields'] = ResolversParentTypes['status_data_stddev_samp_fields'],
> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_sum_fields'] = ResolversParentTypes['status_data_sum_fields'],
> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['smallint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_var_pop_fields'] = ResolversParentTypes['status_data_var_pop_fields'],
> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_var_samp_fields'] = ResolversParentTypes['status_data_var_samp_fields'],
> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Data_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['status_data_variance_fields'] = ResolversParentTypes['status_data_variance_fields'],
> = {
  doublevalue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root'],
> = {
  account_info?: SubscriptionResolver<
    Array<ResolversTypes['account_info']>,
    'account_info',
    ParentType,
    ContextType,
    Partial<Subscription_RootAccount_InfoArgs>
  >;
  account_info_aggregate?: SubscriptionResolver<
    ResolversTypes['account_info_aggregate'],
    'account_info_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootAccount_Info_AggregateArgs>
  >;
  account_info_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['account_info']>,
    'account_info_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccount_Info_By_PkArgs, 'id'>
  >;
  account_info_stream?: SubscriptionResolver<
    Array<ResolversTypes['account_info']>,
    'account_info_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccount_Info_StreamArgs, 'batch_size' | 'cursor'>
  >;
  all_active_accounts?: SubscriptionResolver<
    Array<ResolversTypes['all_active_accounts']>,
    'all_active_accounts',
    ParentType,
    ContextType,
    Partial<Subscription_RootAll_Active_AccountsArgs>
  >;
  all_active_accounts_aggregate?: SubscriptionResolver<
    ResolversTypes['all_active_accounts_aggregate'],
    'all_active_accounts_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootAll_Active_Accounts_AggregateArgs>
  >;
  all_active_accounts_stream?: SubscriptionResolver<
    Array<ResolversTypes['all_active_accounts']>,
    'all_active_accounts_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAll_Active_Accounts_StreamArgs, 'batch_size' | 'cursor'>
  >;
  assets?: SubscriptionResolver<Array<ResolversTypes['assets']>, 'assets', ParentType, ContextType, Partial<Subscription_RootAssetsArgs>>;
  assets_aggregate?: SubscriptionResolver<
    ResolversTypes['assets_aggregate'],
    'assets_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootAssets_AggregateArgs>
  >;
  assets_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['assets']>,
    'assets_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAssets_By_PkArgs, 'id'>
  >;
  assets_stream?: SubscriptionResolver<
    Array<ResolversTypes['assets']>,
    'assets_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAssets_StreamArgs, 'batch_size' | 'cursor'>
  >;
  categories?: SubscriptionResolver<Array<ResolversTypes['categories']>, 'categories', ParentType, ContextType, Partial<Subscription_RootCategoriesArgs>>;
  categories_aggregate?: SubscriptionResolver<
    ResolversTypes['categories_aggregate'],
    'categories_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootCategories_AggregateArgs>
  >;
  categories_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['categories']>,
    'categories_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootCategories_By_PkArgs, 'id'>
  >;
  categories_stream?: SubscriptionResolver<
    Array<ResolversTypes['categories']>,
    'categories_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootCategories_StreamArgs, 'batch_size' | 'cursor'>
  >;
  expenses?: SubscriptionResolver<Array<ResolversTypes['expenses']>, 'expenses', ParentType, ContextType, Partial<Subscription_RootExpensesArgs>>;
  expenses_aggregate?: SubscriptionResolver<
    ResolversTypes['expenses_aggregate'],
    'expenses_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootExpenses_AggregateArgs>
  >;
  expenses_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['expenses']>,
    'expenses_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootExpenses_By_PkArgs, 'id'>
  >;
  expenses_stream?: SubscriptionResolver<
    Array<ResolversTypes['expenses']>,
    'expenses_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootExpenses_StreamArgs, 'batch_size' | 'cursor'>
  >;
  gauge_data?: SubscriptionResolver<Array<ResolversTypes['gauge_data']>, 'gauge_data', ParentType, ContextType, Partial<Subscription_RootGauge_DataArgs>>;
  gauge_data_aggregate?: SubscriptionResolver<
    ResolversTypes['gauge_data_aggregate'],
    'gauge_data_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootGauge_Data_AggregateArgs>
  >;
  gauge_data_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['gauge_data']>,
    'gauge_data_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootGauge_Data_By_PkArgs, 'id' | 'ts'>
  >;
  gauge_data_stream?: SubscriptionResolver<
    Array<ResolversTypes['gauge_data']>,
    'gauge_data_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootGauge_Data_StreamArgs, 'batch_size' | 'cursor'>
  >;
  groups?: SubscriptionResolver<Array<ResolversTypes['groups']>, 'groups', ParentType, ContextType, Partial<Subscription_RootGroupsArgs>>;
  groups_aggregate?: SubscriptionResolver<
    ResolversTypes['groups_aggregate'],
    'groups_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootGroups_AggregateArgs>
  >;
  groups_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['groups']>,
    'groups_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootGroups_By_PkArgs, 'id'>
  >;
  groups_stream?: SubscriptionResolver<
    Array<ResolversTypes['groups']>,
    'groups_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootGroups_StreamArgs, 'batch_size' | 'cursor'>
  >;
  historical_data?: SubscriptionResolver<
    Array<ResolversTypes['historical_data']>,
    'historical_data',
    ParentType,
    ContextType,
    Partial<Subscription_RootHistorical_DataArgs>
  >;
  historical_data_aggregate?: SubscriptionResolver<
    ResolversTypes['historical_data_aggregate'],
    'historical_data_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootHistorical_Data_AggregateArgs>
  >;
  historical_data_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['historical_data']>,
    'historical_data_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootHistorical_Data_By_PkArgs, 'id' | 'ts'>
  >;
  historical_data_stream?: SubscriptionResolver<
    Array<ResolversTypes['historical_data']>,
    'historical_data_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootHistorical_Data_StreamArgs, 'batch_size' | 'cursor'>
  >;
  import_asset_file?: SubscriptionResolver<
    Array<ResolversTypes['import_asset_file']>,
    'import_asset_file',
    ParentType,
    ContextType,
    Partial<Subscription_RootImport_Asset_FileArgs>
  >;
  import_asset_file_aggregate?: SubscriptionResolver<
    ResolversTypes['import_asset_file_aggregate'],
    'import_asset_file_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootImport_Asset_File_AggregateArgs>
  >;
  import_asset_file_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['import_asset_file']>,
    'import_asset_file_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootImport_Asset_File_By_PkArgs, 'id'>
  >;
  import_asset_file_stream?: SubscriptionResolver<
    Array<ResolversTypes['import_asset_file']>,
    'import_asset_file_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootImport_Asset_File_StreamArgs, 'batch_size' | 'cursor'>
  >;
  labels?: SubscriptionResolver<Array<ResolversTypes['labels']>, 'labels', ParentType, ContextType, Partial<Subscription_RootLabelsArgs>>;
  labels_aggregate?: SubscriptionResolver<
    ResolversTypes['labels_aggregate'],
    'labels_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootLabels_AggregateArgs>
  >;
  labels_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['labels']>,
    'labels_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLabels_By_PkArgs, 'id'>
  >;
  labels_stream?: SubscriptionResolver<
    Array<ResolversTypes['labels']>,
    'labels_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLabels_StreamArgs, 'batch_size' | 'cursor'>
  >;
  liabilities?: SubscriptionResolver<Array<ResolversTypes['liabilities']>, 'liabilities', ParentType, ContextType, Partial<Subscription_RootLiabilitiesArgs>>;
  liabilities_aggregate?: SubscriptionResolver<
    ResolversTypes['liabilities_aggregate'],
    'liabilities_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootLiabilities_AggregateArgs>
  >;
  liabilities_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['liabilities']>,
    'liabilities_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLiabilities_By_PkArgs, 'id'>
  >;
  liabilities_stream?: SubscriptionResolver<
    Array<ResolversTypes['liabilities']>,
    'liabilities_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootLiabilities_StreamArgs, 'batch_size' | 'cursor'>
  >;
  notifications?: SubscriptionResolver<
    Array<ResolversTypes['notifications']>,
    'notifications',
    ParentType,
    ContextType,
    Partial<Subscription_RootNotificationsArgs>
  >;
  notifications_aggregate?: SubscriptionResolver<
    ResolversTypes['notifications_aggregate'],
    'notifications_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootNotifications_AggregateArgs>
  >;
  notifications_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['notifications']>,
    'notifications_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootNotifications_By_PkArgs, 'id'>
  >;
  notifications_stream?: SubscriptionResolver<
    Array<ResolversTypes['notifications']>,
    'notifications_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootNotifications_StreamArgs, 'batch_size' | 'cursor'>
  >;
  recurring?: SubscriptionResolver<Array<ResolversTypes['recurring']>, 'recurring', ParentType, ContextType, Partial<Subscription_RootRecurringArgs>>;
  recurring_aggregate?: SubscriptionResolver<
    ResolversTypes['recurring_aggregate'],
    'recurring_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootRecurring_AggregateArgs>
  >;
  recurring_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['recurring']>,
    'recurring_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRecurring_By_PkArgs, 'id'>
  >;
  recurring_labels?: SubscriptionResolver<
    Array<ResolversTypes['recurring_labels']>,
    'recurring_labels',
    ParentType,
    ContextType,
    Partial<Subscription_RootRecurring_LabelsArgs>
  >;
  recurring_labels_aggregate?: SubscriptionResolver<
    ResolversTypes['recurring_labels_aggregate'],
    'recurring_labels_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootRecurring_Labels_AggregateArgs>
  >;
  recurring_labels_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['recurring_labels']>,
    'recurring_labels_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRecurring_Labels_By_PkArgs, 'label_id' | 'recurring_id'>
  >;
  recurring_labels_stream?: SubscriptionResolver<
    Array<ResolversTypes['recurring_labels']>,
    'recurring_labels_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRecurring_Labels_StreamArgs, 'batch_size' | 'cursor'>
  >;
  recurring_stream?: SubscriptionResolver<
    Array<ResolversTypes['recurring']>,
    'recurring_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRecurring_StreamArgs, 'batch_size' | 'cursor'>
  >;
  revenues?: SubscriptionResolver<Array<ResolversTypes['revenues']>, 'revenues', ParentType, ContextType, Partial<Subscription_RootRevenuesArgs>>;
  revenues_aggregate?: SubscriptionResolver<
    ResolversTypes['revenues_aggregate'],
    'revenues_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootRevenues_AggregateArgs>
  >;
  revenues_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['revenues']>,
    'revenues_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRevenues_By_PkArgs, 'id'>
  >;
  revenues_stream?: SubscriptionResolver<
    Array<ResolversTypes['revenues']>,
    'revenues_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootRevenues_StreamArgs, 'batch_size' | 'cursor'>
  >;
  status_data?: SubscriptionResolver<Array<ResolversTypes['status_data']>, 'status_data', ParentType, ContextType, Partial<Subscription_RootStatus_DataArgs>>;
  status_data_aggregate?: SubscriptionResolver<
    ResolversTypes['status_data_aggregate'],
    'status_data_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootStatus_Data_AggregateArgs>
  >;
  status_data_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['status_data']>,
    'status_data_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootStatus_Data_By_PkArgs, 'pin' | 'sensor_name'>
  >;
  status_data_stream?: SubscriptionResolver<
    Array<ResolversTypes['status_data']>,
    'status_data_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootStatus_Data_StreamArgs, 'batch_size' | 'cursor'>
  >;
  transaction_accounts?: SubscriptionResolver<
    Array<ResolversTypes['transaction_accounts']>,
    'transaction_accounts',
    ParentType,
    ContextType,
    Partial<Subscription_RootTransaction_AccountsArgs>
  >;
  transaction_accounts_aggregate?: SubscriptionResolver<
    ResolversTypes['transaction_accounts_aggregate'],
    'transaction_accounts_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootTransaction_Accounts_AggregateArgs>
  >;
  transaction_accounts_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['transaction_accounts']>,
    'transaction_accounts_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransaction_Accounts_By_PkArgs, 'id'>
  >;
  transaction_accounts_stream?: SubscriptionResolver<
    Array<ResolversTypes['transaction_accounts']>,
    'transaction_accounts_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransaction_Accounts_StreamArgs, 'batch_size' | 'cursor'>
  >;
  transaction_attachments?: SubscriptionResolver<
    Array<ResolversTypes['transaction_attachments']>,
    'transaction_attachments',
    ParentType,
    ContextType,
    Partial<Subscription_RootTransaction_AttachmentsArgs>
  >;
  transaction_attachments_aggregate?: SubscriptionResolver<
    ResolversTypes['transaction_attachments_aggregate'],
    'transaction_attachments_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootTransaction_Attachments_AggregateArgs>
  >;
  transaction_attachments_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['transaction_attachments']>,
    'transaction_attachments_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransaction_Attachments_By_PkArgs, 'attachment_id' | 'transaction_id'>
  >;
  transaction_attachments_stream?: SubscriptionResolver<
    Array<ResolversTypes['transaction_attachments']>,
    'transaction_attachments_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransaction_Attachments_StreamArgs, 'batch_size' | 'cursor'>
  >;
  transaction_labels?: SubscriptionResolver<
    Array<ResolversTypes['transaction_labels']>,
    'transaction_labels',
    ParentType,
    ContextType,
    Partial<Subscription_RootTransaction_LabelsArgs>
  >;
  transaction_labels_aggregate?: SubscriptionResolver<
    ResolversTypes['transaction_labels_aggregate'],
    'transaction_labels_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootTransaction_Labels_AggregateArgs>
  >;
  transaction_labels_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['transaction_labels']>,
    'transaction_labels_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransaction_Labels_By_PkArgs, 'label_id' | 'transaction_id'>
  >;
  transaction_labels_stream?: SubscriptionResolver<
    Array<ResolversTypes['transaction_labels']>,
    'transaction_labels_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransaction_Labels_StreamArgs, 'batch_size' | 'cursor'>
  >;
  transactions?: SubscriptionResolver<
    Array<ResolversTypes['transactions']>,
    'transactions',
    ParentType,
    ContextType,
    Partial<Subscription_RootTransactionsArgs>
  >;
  transactions_aggregate?: SubscriptionResolver<
    ResolversTypes['transactions_aggregate'],
    'transactions_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootTransactions_AggregateArgs>
  >;
  transactions_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['transactions']>,
    'transactions_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransactions_By_PkArgs, 'id'>
  >;
  transactions_stream?: SubscriptionResolver<
    Array<ResolversTypes['transactions']>,
    'transactions_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootTransactions_StreamArgs, 'batch_size' | 'cursor'>
  >;
  user_settings?: SubscriptionResolver<
    Array<ResolversTypes['user_settings']>,
    'user_settings',
    ParentType,
    ContextType,
    Partial<Subscription_RootUser_SettingsArgs>
  >;
  user_settings_aggregate?: SubscriptionResolver<
    ResolversTypes['user_settings_aggregate'],
    'user_settings_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootUser_Settings_AggregateArgs>
  >;
  user_settings_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['user_settings']>,
    'user_settings_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUser_Settings_By_PkArgs, 'user_id'>
  >;
  user_settings_stream?: SubscriptionResolver<
    Array<ResolversTypes['user_settings']>,
    'user_settings_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUser_Settings_StreamArgs, 'batch_size' | 'cursor'>
  >;
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, 'users', ParentType, ContextType, Partial<Subscription_RootUsersArgs>>;
  users_aggregate?: SubscriptionResolver<
    ResolversTypes['users_aggregate'],
    'users_aggregate',
    ParentType,
    ContextType,
    Partial<Subscription_RootUsers_AggregateArgs>
  >;
  users_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['users']>,
    'users_by_pk',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_By_PkArgs, 'id'>
  >;
  users_stream?: SubscriptionResolver<
    Array<ResolversTypes['users']>,
    'users_stream',
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_StreamArgs, 'batch_size' | 'cursor'>
  >;
};

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamp'], any> {
  name: 'timestamp';
}

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type Transaction_AccountsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts'] = ResolversParentTypes['transaction_accounts'],
> = {
  account_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  account_info?: Resolver<ResolversTypes['account_info'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['float8'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['transactions'], ParentType, ContextType>;
  transaction_id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_aggregate'] = ResolversParentTypes['transaction_accounts_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['transaction_accounts_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['transaction_accounts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_aggregate_fields'] = ResolversParentTypes['transaction_accounts_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['transaction_accounts_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Transaction_Accounts_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['transaction_accounts_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['transaction_accounts_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['transaction_accounts_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['transaction_accounts_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['transaction_accounts_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['transaction_accounts_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['transaction_accounts_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['transaction_accounts_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['transaction_accounts_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_avg_fields'] = ResolversParentTypes['transaction_accounts_avg_fields'],
> = {
  account_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_max_fields'] = ResolversParentTypes['transaction_accounts_max_fields'],
> = {
  account_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_min_fields'] = ResolversParentTypes['transaction_accounts_min_fields'],
> = {
  account_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_mutation_response'] = ResolversParentTypes['transaction_accounts_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['transaction_accounts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_stddev_fields'] = ResolversParentTypes['transaction_accounts_stddev_fields'],
> = {
  account_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_stddev_pop_fields'] = ResolversParentTypes['transaction_accounts_stddev_pop_fields'],
> = {
  account_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_stddev_samp_fields'] = ResolversParentTypes['transaction_accounts_stddev_samp_fields'],
> = {
  account_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_sum_fields'] = ResolversParentTypes['transaction_accounts_sum_fields'],
> = {
  account_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_var_pop_fields'] = ResolversParentTypes['transaction_accounts_var_pop_fields'],
> = {
  account_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_var_samp_fields'] = ResolversParentTypes['transaction_accounts_var_samp_fields'],
> = {
  account_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Accounts_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_accounts_variance_fields'] = ResolversParentTypes['transaction_accounts_variance_fields'],
> = {
  account_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_AttachmentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments'] = ResolversParentTypes['transaction_attachments'],
> = {
  attachment_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['transactions'], ParentType, ContextType>;
  transaction_id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_aggregate'] = ResolversParentTypes['transaction_attachments_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['transaction_attachments_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['transaction_attachments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_aggregate_fields'] = ResolversParentTypes['transaction_attachments_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['transaction_attachments_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Transaction_Attachments_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['transaction_attachments_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['transaction_attachments_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['transaction_attachments_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['transaction_attachments_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['transaction_attachments_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['transaction_attachments_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['transaction_attachments_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['transaction_attachments_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['transaction_attachments_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_avg_fields'] = ResolversParentTypes['transaction_attachments_avg_fields'],
> = {
  attachment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_max_fields'] = ResolversParentTypes['transaction_attachments_max_fields'],
> = {
  attachment_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_min_fields'] = ResolversParentTypes['transaction_attachments_min_fields'],
> = {
  attachment_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_mutation_response'] = ResolversParentTypes['transaction_attachments_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['transaction_attachments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_stddev_fields'] = ResolversParentTypes['transaction_attachments_stddev_fields'],
> = {
  attachment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_stddev_pop_fields'] = ResolversParentTypes['transaction_attachments_stddev_pop_fields'],
> = {
  attachment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_stddev_samp_fields'] = ResolversParentTypes['transaction_attachments_stddev_samp_fields'],
> = {
  attachment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_sum_fields'] = ResolversParentTypes['transaction_attachments_sum_fields'],
> = {
  attachment_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_var_pop_fields'] = ResolversParentTypes['transaction_attachments_var_pop_fields'],
> = {
  attachment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_var_samp_fields'] = ResolversParentTypes['transaction_attachments_var_samp_fields'],
> = {
  attachment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Attachments_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_attachments_variance_fields'] = ResolversParentTypes['transaction_attachments_variance_fields'],
> = {
  attachment_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_LabelsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels'] = ResolversParentTypes['transaction_labels'],
> = {
  label?: Resolver<ResolversTypes['labels'], ParentType, ContextType>;
  label_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['transactions'], ParentType, ContextType>;
  transaction_id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_aggregate'] = ResolversParentTypes['transaction_labels_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['transaction_labels_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['transaction_labels']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_aggregate_fields'] = ResolversParentTypes['transaction_labels_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['transaction_labels_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Transaction_Labels_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['transaction_labels_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['transaction_labels_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['transaction_labels_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['transaction_labels_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['transaction_labels_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['transaction_labels_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['transaction_labels_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['transaction_labels_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['transaction_labels_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_avg_fields'] = ResolversParentTypes['transaction_labels_avg_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_max_fields'] = ResolversParentTypes['transaction_labels_max_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_min_fields'] = ResolversParentTypes['transaction_labels_min_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_mutation_response'] = ResolversParentTypes['transaction_labels_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['transaction_labels']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_stddev_fields'] = ResolversParentTypes['transaction_labels_stddev_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_stddev_pop_fields'] = ResolversParentTypes['transaction_labels_stddev_pop_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_stddev_samp_fields'] = ResolversParentTypes['transaction_labels_stddev_samp_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_sum_fields'] = ResolversParentTypes['transaction_labels_sum_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_var_pop_fields'] = ResolversParentTypes['transaction_labels_var_pop_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_var_samp_fields'] = ResolversParentTypes['transaction_labels_var_samp_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transaction_Labels_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transaction_labels_variance_fields'] = ResolversParentTypes['transaction_labels_variance_fields'],
> = {
  label_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['transactions'] = ResolversParentTypes['transactions']> = {
  accountInfoByAccountTo?: Resolver<ResolversTypes['account_info'], ParentType, ContextType>;
  account_from?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  account_info?: Resolver<ResolversTypes['account_info'], ParentType, ContextType>;
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_to?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['float8'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['categories']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  client_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mandate_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recurring?: Resolver<Maybe<ResolversTypes['recurring']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  transaction_accounts?: Resolver<Array<ResolversTypes['transaction_accounts']>, ParentType, ContextType, Partial<TransactionsTransaction_AccountsArgs>>;
  transaction_accounts_aggregate?: Resolver<
    ResolversTypes['transaction_accounts_aggregate'],
    ParentType,
    ContextType,
    Partial<TransactionsTransaction_Accounts_AggregateArgs>
  >;
  transaction_attachment?: Resolver<Maybe<ResolversTypes['transaction_attachments']>, ParentType, ContextType>;
  transaction_date?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  transaction_labels?: Resolver<Array<ResolversTypes['transaction_labels']>, ParentType, ContextType, Partial<TransactionsTransaction_LabelsArgs>>;
  transaction_labels_aggregate?: Resolver<
    ResolversTypes['transaction_labels_aggregate'],
    ParentType,
    ContextType,
    Partial<TransactionsTransaction_Labels_AggregateArgs>
  >;
  transaction_type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_aggregate'] = ResolversParentTypes['transactions_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['transactions_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['transactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_aggregate_fields'] = ResolversParentTypes['transactions_aggregate_fields'],
> = {
  avg?: Resolver<Maybe<ResolversTypes['transactions_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Transactions_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['transactions_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['transactions_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['transactions_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['transactions_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['transactions_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['transactions_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['transactions_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['transactions_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['transactions_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_avg_fields'] = ResolversParentTypes['transactions_avg_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_max_fields'] = ResolversParentTypes['transactions_max_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  client_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mandate_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  transaction_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_min_fields'] = ResolversParentTypes['transactions_min_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  account_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  client_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mandate_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  transaction_date?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_mutation_response'] = ResolversParentTypes['transactions_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['transactions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_stddev_fields'] = ResolversParentTypes['transactions_stddev_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_stddev_pop_fields'] = ResolversParentTypes['transactions_stddev_pop_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_stddev_samp_fields'] = ResolversParentTypes['transactions_stddev_samp_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_sum_fields'] = ResolversParentTypes['transactions_sum_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_var_pop_fields'] = ResolversParentTypes['transactions_var_pop_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_var_samp_fields'] = ResolversParentTypes['transactions_var_samp_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Transactions_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['transactions_variance_fields'] = ResolversParentTypes['transactions_variance_fields'],
> = {
  account_from?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  account_to?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  import_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurring_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transaction_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_SettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_settings'] = ResolversParentTypes['user_settings']> = {
  darkMode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  langKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Settings_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings_aggregate'] = ResolversParentTypes['user_settings_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_settings_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user_settings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Settings_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings_aggregate_fields'] = ResolversParentTypes['user_settings_aggregate_fields'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<User_Settings_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['user_settings_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_settings_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Settings_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings_max_fields'] = ResolversParentTypes['user_settings_max_fields'],
> = {
  langKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Settings_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings_min_fields'] = ResolversParentTypes['user_settings_min_fields'],
> = {
  langKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Settings_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['user_settings_mutation_response'] = ResolversParentTypes['user_settings_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user_settings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_setting?: Resolver<Maybe<ResolversTypes['user_settings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate'],
> = {
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Users_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields'],
> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields'],
> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response'],
> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
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
  all_active_accounts?: All_Active_AccountsResolvers<ContextType>;
  all_active_accounts_aggregate?: All_Active_Accounts_AggregateResolvers<ContextType>;
  all_active_accounts_aggregate_fields?: All_Active_Accounts_Aggregate_FieldsResolvers<ContextType>;
  all_active_accounts_avg_fields?: All_Active_Accounts_Avg_FieldsResolvers<ContextType>;
  all_active_accounts_max_fields?: All_Active_Accounts_Max_FieldsResolvers<ContextType>;
  all_active_accounts_min_fields?: All_Active_Accounts_Min_FieldsResolvers<ContextType>;
  all_active_accounts_stddev_fields?: All_Active_Accounts_Stddev_FieldsResolvers<ContextType>;
  all_active_accounts_stddev_pop_fields?: All_Active_Accounts_Stddev_Pop_FieldsResolvers<ContextType>;
  all_active_accounts_stddev_samp_fields?: All_Active_Accounts_Stddev_Samp_FieldsResolvers<ContextType>;
  all_active_accounts_sum_fields?: All_Active_Accounts_Sum_FieldsResolvers<ContextType>;
  all_active_accounts_var_pop_fields?: All_Active_Accounts_Var_Pop_FieldsResolvers<ContextType>;
  all_active_accounts_var_samp_fields?: All_Active_Accounts_Var_Samp_FieldsResolvers<ContextType>;
  all_active_accounts_variance_fields?: All_Active_Accounts_Variance_FieldsResolvers<ContextType>;
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
  gauge_data?: Gauge_DataResolvers<ContextType>;
  gauge_data_aggregate?: Gauge_Data_AggregateResolvers<ContextType>;
  gauge_data_aggregate_fields?: Gauge_Data_Aggregate_FieldsResolvers<ContextType>;
  gauge_data_avg_fields?: Gauge_Data_Avg_FieldsResolvers<ContextType>;
  gauge_data_max_fields?: Gauge_Data_Max_FieldsResolvers<ContextType>;
  gauge_data_min_fields?: Gauge_Data_Min_FieldsResolvers<ContextType>;
  gauge_data_mutation_response?: Gauge_Data_Mutation_ResponseResolvers<ContextType>;
  gauge_data_stddev_fields?: Gauge_Data_Stddev_FieldsResolvers<ContextType>;
  gauge_data_stddev_pop_fields?: Gauge_Data_Stddev_Pop_FieldsResolvers<ContextType>;
  gauge_data_stddev_samp_fields?: Gauge_Data_Stddev_Samp_FieldsResolvers<ContextType>;
  gauge_data_sum_fields?: Gauge_Data_Sum_FieldsResolvers<ContextType>;
  gauge_data_var_pop_fields?: Gauge_Data_Var_Pop_FieldsResolvers<ContextType>;
  gauge_data_var_samp_fields?: Gauge_Data_Var_Samp_FieldsResolvers<ContextType>;
  gauge_data_variance_fields?: Gauge_Data_Variance_FieldsResolvers<ContextType>;
  groups?: GroupsResolvers<ContextType>;
  groups_aggregate?: Groups_AggregateResolvers<ContextType>;
  groups_aggregate_fields?: Groups_Aggregate_FieldsResolvers<ContextType>;
  groups_avg_fields?: Groups_Avg_FieldsResolvers<ContextType>;
  groups_max_fields?: Groups_Max_FieldsResolvers<ContextType>;
  groups_min_fields?: Groups_Min_FieldsResolvers<ContextType>;
  groups_mutation_response?: Groups_Mutation_ResponseResolvers<ContextType>;
  groups_stddev_fields?: Groups_Stddev_FieldsResolvers<ContextType>;
  groups_stddev_pop_fields?: Groups_Stddev_Pop_FieldsResolvers<ContextType>;
  groups_stddev_samp_fields?: Groups_Stddev_Samp_FieldsResolvers<ContextType>;
  groups_sum_fields?: Groups_Sum_FieldsResolvers<ContextType>;
  groups_var_pop_fields?: Groups_Var_Pop_FieldsResolvers<ContextType>;
  groups_var_samp_fields?: Groups_Var_Samp_FieldsResolvers<ContextType>;
  groups_variance_fields?: Groups_Variance_FieldsResolvers<ContextType>;
  historical_data?: Historical_DataResolvers<ContextType>;
  historical_data_aggregate?: Historical_Data_AggregateResolvers<ContextType>;
  historical_data_aggregate_fields?: Historical_Data_Aggregate_FieldsResolvers<ContextType>;
  historical_data_avg_fields?: Historical_Data_Avg_FieldsResolvers<ContextType>;
  historical_data_max_fields?: Historical_Data_Max_FieldsResolvers<ContextType>;
  historical_data_min_fields?: Historical_Data_Min_FieldsResolvers<ContextType>;
  historical_data_mutation_response?: Historical_Data_Mutation_ResponseResolvers<ContextType>;
  historical_data_stddev_fields?: Historical_Data_Stddev_FieldsResolvers<ContextType>;
  historical_data_stddev_pop_fields?: Historical_Data_Stddev_Pop_FieldsResolvers<ContextType>;
  historical_data_stddev_samp_fields?: Historical_Data_Stddev_Samp_FieldsResolvers<ContextType>;
  historical_data_sum_fields?: Historical_Data_Sum_FieldsResolvers<ContextType>;
  historical_data_var_pop_fields?: Historical_Data_Var_Pop_FieldsResolvers<ContextType>;
  historical_data_var_samp_fields?: Historical_Data_Var_Samp_FieldsResolvers<ContextType>;
  historical_data_variance_fields?: Historical_Data_Variance_FieldsResolvers<ContextType>;
  import_asset_file?: Import_Asset_FileResolvers<ContextType>;
  import_asset_file_aggregate?: Import_Asset_File_AggregateResolvers<ContextType>;
  import_asset_file_aggregate_fields?: Import_Asset_File_Aggregate_FieldsResolvers<ContextType>;
  import_asset_file_avg_fields?: Import_Asset_File_Avg_FieldsResolvers<ContextType>;
  import_asset_file_max_fields?: Import_Asset_File_Max_FieldsResolvers<ContextType>;
  import_asset_file_min_fields?: Import_Asset_File_Min_FieldsResolvers<ContextType>;
  import_asset_file_mutation_response?: Import_Asset_File_Mutation_ResponseResolvers<ContextType>;
  import_asset_file_stddev_fields?: Import_Asset_File_Stddev_FieldsResolvers<ContextType>;
  import_asset_file_stddev_pop_fields?: Import_Asset_File_Stddev_Pop_FieldsResolvers<ContextType>;
  import_asset_file_stddev_samp_fields?: Import_Asset_File_Stddev_Samp_FieldsResolvers<ContextType>;
  import_asset_file_sum_fields?: Import_Asset_File_Sum_FieldsResolvers<ContextType>;
  import_asset_file_var_pop_fields?: Import_Asset_File_Var_Pop_FieldsResolvers<ContextType>;
  import_asset_file_var_samp_fields?: Import_Asset_File_Var_Samp_FieldsResolvers<ContextType>;
  import_asset_file_variance_fields?: Import_Asset_File_Variance_FieldsResolvers<ContextType>;
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
  recurring?: RecurringResolvers<ContextType>;
  recurring_aggregate?: Recurring_AggregateResolvers<ContextType>;
  recurring_aggregate_fields?: Recurring_Aggregate_FieldsResolvers<ContextType>;
  recurring_avg_fields?: Recurring_Avg_FieldsResolvers<ContextType>;
  recurring_labels?: Recurring_LabelsResolvers<ContextType>;
  recurring_labels_aggregate?: Recurring_Labels_AggregateResolvers<ContextType>;
  recurring_labels_aggregate_fields?: Recurring_Labels_Aggregate_FieldsResolvers<ContextType>;
  recurring_labels_avg_fields?: Recurring_Labels_Avg_FieldsResolvers<ContextType>;
  recurring_labels_max_fields?: Recurring_Labels_Max_FieldsResolvers<ContextType>;
  recurring_labels_min_fields?: Recurring_Labels_Min_FieldsResolvers<ContextType>;
  recurring_labels_mutation_response?: Recurring_Labels_Mutation_ResponseResolvers<ContextType>;
  recurring_labels_stddev_fields?: Recurring_Labels_Stddev_FieldsResolvers<ContextType>;
  recurring_labels_stddev_pop_fields?: Recurring_Labels_Stddev_Pop_FieldsResolvers<ContextType>;
  recurring_labels_stddev_samp_fields?: Recurring_Labels_Stddev_Samp_FieldsResolvers<ContextType>;
  recurring_labels_sum_fields?: Recurring_Labels_Sum_FieldsResolvers<ContextType>;
  recurring_labels_var_pop_fields?: Recurring_Labels_Var_Pop_FieldsResolvers<ContextType>;
  recurring_labels_var_samp_fields?: Recurring_Labels_Var_Samp_FieldsResolvers<ContextType>;
  recurring_labels_variance_fields?: Recurring_Labels_Variance_FieldsResolvers<ContextType>;
  recurring_max_fields?: Recurring_Max_FieldsResolvers<ContextType>;
  recurring_min_fields?: Recurring_Min_FieldsResolvers<ContextType>;
  recurring_mutation_response?: Recurring_Mutation_ResponseResolvers<ContextType>;
  recurring_stddev_fields?: Recurring_Stddev_FieldsResolvers<ContextType>;
  recurring_stddev_pop_fields?: Recurring_Stddev_Pop_FieldsResolvers<ContextType>;
  recurring_stddev_samp_fields?: Recurring_Stddev_Samp_FieldsResolvers<ContextType>;
  recurring_sum_fields?: Recurring_Sum_FieldsResolvers<ContextType>;
  recurring_var_pop_fields?: Recurring_Var_Pop_FieldsResolvers<ContextType>;
  recurring_var_samp_fields?: Recurring_Var_Samp_FieldsResolvers<ContextType>;
  recurring_variance_fields?: Recurring_Variance_FieldsResolvers<ContextType>;
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
  smallint?: GraphQLScalarType;
  status_data?: Status_DataResolvers<ContextType>;
  status_data_aggregate?: Status_Data_AggregateResolvers<ContextType>;
  status_data_aggregate_fields?: Status_Data_Aggregate_FieldsResolvers<ContextType>;
  status_data_avg_fields?: Status_Data_Avg_FieldsResolvers<ContextType>;
  status_data_max_fields?: Status_Data_Max_FieldsResolvers<ContextType>;
  status_data_min_fields?: Status_Data_Min_FieldsResolvers<ContextType>;
  status_data_mutation_response?: Status_Data_Mutation_ResponseResolvers<ContextType>;
  status_data_stddev_fields?: Status_Data_Stddev_FieldsResolvers<ContextType>;
  status_data_stddev_pop_fields?: Status_Data_Stddev_Pop_FieldsResolvers<ContextType>;
  status_data_stddev_samp_fields?: Status_Data_Stddev_Samp_FieldsResolvers<ContextType>;
  status_data_sum_fields?: Status_Data_Sum_FieldsResolvers<ContextType>;
  status_data_var_pop_fields?: Status_Data_Var_Pop_FieldsResolvers<ContextType>;
  status_data_var_samp_fields?: Status_Data_Var_Samp_FieldsResolvers<ContextType>;
  status_data_variance_fields?: Status_Data_Variance_FieldsResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamp?: GraphQLScalarType;
  timestamptz?: GraphQLScalarType;
  transaction_accounts?: Transaction_AccountsResolvers<ContextType>;
  transaction_accounts_aggregate?: Transaction_Accounts_AggregateResolvers<ContextType>;
  transaction_accounts_aggregate_fields?: Transaction_Accounts_Aggregate_FieldsResolvers<ContextType>;
  transaction_accounts_avg_fields?: Transaction_Accounts_Avg_FieldsResolvers<ContextType>;
  transaction_accounts_max_fields?: Transaction_Accounts_Max_FieldsResolvers<ContextType>;
  transaction_accounts_min_fields?: Transaction_Accounts_Min_FieldsResolvers<ContextType>;
  transaction_accounts_mutation_response?: Transaction_Accounts_Mutation_ResponseResolvers<ContextType>;
  transaction_accounts_stddev_fields?: Transaction_Accounts_Stddev_FieldsResolvers<ContextType>;
  transaction_accounts_stddev_pop_fields?: Transaction_Accounts_Stddev_Pop_FieldsResolvers<ContextType>;
  transaction_accounts_stddev_samp_fields?: Transaction_Accounts_Stddev_Samp_FieldsResolvers<ContextType>;
  transaction_accounts_sum_fields?: Transaction_Accounts_Sum_FieldsResolvers<ContextType>;
  transaction_accounts_var_pop_fields?: Transaction_Accounts_Var_Pop_FieldsResolvers<ContextType>;
  transaction_accounts_var_samp_fields?: Transaction_Accounts_Var_Samp_FieldsResolvers<ContextType>;
  transaction_accounts_variance_fields?: Transaction_Accounts_Variance_FieldsResolvers<ContextType>;
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
