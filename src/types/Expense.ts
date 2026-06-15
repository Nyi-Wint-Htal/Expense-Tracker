export type Category =
  | "Food"
  | "Transportation"
  | "Entertainment"
  | "Shopping"
  | "Other";

export interface Expense {
  id: string;
  title: string;
  date: string;
  category: Category;
  amount: number;
}
