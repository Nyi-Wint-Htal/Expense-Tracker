import type { Category } from "./Expense";

export interface ExpenseForm {
  title: string;
  amount: string;
  category: Category;
  date: string;
}
