import { useContext, useState } from "react";
import type { ExpenseForm } from "../types/ExpenseForm";
import type { Category, Expense } from "../types/Expense";
import { ExpenseContext } from "../context/ExpenseContext";

type EditExpenseProps = {
  showEditPage: boolean;
  setShowEditPage: () => void;
  id: string;
  title: string;
  date: string;
  category: Category;
  amount: string;
};

const EditExpense = ({
  showEditPage,
  setShowEditPage,
  id,
  title,
  date,
  category,
  amount,
}: EditExpenseProps) => {
  const initialFormData: ExpenseForm = {
    title: title,
    amount: amount,
    category: category,
    date: date,
  };
  const expenseContext = useContext(ExpenseContext);
  const [formData, setFormData] = useState<ExpenseForm>(initialFormData);
  if (!expenseContext) return null;
  const { setExpenses } = expenseContext;

  const handleAddExpense = () => {
    const updatedExpense: Expense = {
      id,
      title: formData.title,
      amount: Number(formData.amount),
      category: formData.category,
      date: formData.date,
    };
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => {
        return expense.id === id ? updatedExpense : expense;
      }),
    );
    setShowEditPage();
  };

  if (!showEditPage) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/15 backdrop-blur-[2px] z-10 ">
      <div className="w-[90%] flex flex-col gap-y-3 max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h1 className="text-xl font-bold">Edit Expense</h1>
            <p className="text-sm text-slate-500">Update an existing expense</p>
          </div>
          <svg
            height="15"
            width="15"
            viewBox="0 0 10 10"
            className="rounded-full w-5 h-5 p-0.5 hover:bg-black/20"
            onClick={setShowEditPage}
          >
            <path stroke="black" d="M 0 0 L 10 10 M 0 10 L 10 0" />
          </svg>
        </div>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
            className="inputStyle"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <div className="flex flex-col">
            <label htmlFor="amount">Amount(฿)</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={(e) => {
                setFormData({ ...formData, amount: e.target.value });
              }}
              className="inputStyle"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category-choice">Category</label>
            <select
              className="inputStyle"
              id="category-choice"
              name="categories"
              value={formData.category}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  category: e.target.value as Category,
                });
              }}
            >
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={(e) => {
              setFormData({ ...formData, date: e.target.value });
            }}
            className="inputStyle"
          />
        </div>
        <div className="flex justify-end gap-x-3">
          <button
            className="px-4 py-2 font-medium border rounded-xl border-slate-200 hover:bg-slate-100 hover:text-black"
            onClick={setShowEditPage}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700"
            onClick={handleAddExpense}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditExpense;
