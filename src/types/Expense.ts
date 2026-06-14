export type Category = "Food" | "Transportation" | "Entertainment" | "Shopping";

export interface Expense {
  color: string;
  title: string;
  date: string;
  category: Category;
  amount: number;
}
