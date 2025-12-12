
export interface Department {
  id: string;
  name: string;
  iconName: string;
  description: string;
  image: string;
}

export interface StoreStat {
  label: string;
  value: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface CompanyDetail {
  label: string;
  value: string;
}

export type DocType = 'balance' | 'income';

export interface FinancialDoc {
  id: string;
  year: string;
  type: DocType;
  title: string;
  url: string;
}
