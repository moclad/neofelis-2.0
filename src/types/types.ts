export interface ISession {
  user: {
    name: string;
    email: string;
    image: string;
  };
  id: number;
  expires: string;
  token: string;
}

export interface IToken {
  id: number;
  email: string;
  name: string;
  picture: string;
}

export interface IUser {
  id: number;
  name: string;
  image: string;
  email: string;
}

export interface ISelectOptions {
  label: string;
  value: number;
}

export interface ITransactionInput {
  description?: string;
  category_id: number;
  amount: number;
  transaction_date: Date;
  destiny_account: number;
  source_account: number;
  labels: number[];
}
