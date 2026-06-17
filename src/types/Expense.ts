export type Category =
  | "Food"
  | "Transportation"
  | "Entertainment"
  | "Shopping"
  | "Other";

export const categoryColors = {
  Food: "#F59E0B", // Amber
  Transportation: "#3B82F6", // Blue
  Entertainment: "#8B5CF6", // Purple
  Shopping: "#EC4899", // Pink
  Other: "#6B7280", // Gray
} as const;

export interface Expense {
  id: string;
  title: string;
  date: string;
  category: Category;
  amount: number;
}
