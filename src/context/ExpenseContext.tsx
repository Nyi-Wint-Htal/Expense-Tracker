import { createContext } from "react";
import type { Expense } from "../types/Expense";

type ExpenseContextType = {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

export const ExpenseContext = createContext<ExpenseContextType | null>(null);
