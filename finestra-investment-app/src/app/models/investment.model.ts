export interface Investment {
  id?:string;
  name: string;
  type: 'Equity' | 'Debt' | 'Mutual Fund';
  amount: number;
  purchaseDate: string;
  currentValue: number; // percentage
}