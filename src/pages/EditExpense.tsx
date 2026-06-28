import { useContext, useState } from "react";
import type { ExpenseForm } from "../types/ExpenseForm";
import type { Category } from "../types/Expense";
import { ExpenseContext } from "../context/ExpenseContext";
import { supabase } from "../supabase-client";

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
  const [errorMessage, setErrorMessage] = useState("");
  if (!expenseContext) return null;
  const { setExpenses } = expenseContext;

  const handleEditExpense = async () => {
    setErrorMessage("");
    if (!formData.title || !formData.amount) {
      setErrorMessage("Please enter a title and amount.");
      return;
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error } = await supabase
      .from("expenses")
      .update({
        title: formData.title,
        amount: Number(formData.amount),
        category: formData.category,
        date: formData.date,
      })
      .eq("id", id)
      .eq("user_id", user?.id);

    if (error) {
      setErrorMessage(error.message);
      return;
    }
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id
          ? {
              ...expense,
              title: formData.title,
              amount: Number(formData.amount),
              category: formData.category,
              date: formData.date,
            }
          : expense,
      ),
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
          <button
            onClick={setShowEditPage}
            className="flex items-center justify-center w-8 h-8 transition-colors rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {errorMessage && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300">
            {errorMessage}
          </div>
        )}
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
            className="px-4 py-2 font-medium transition-colors duration-150 border rounded-xl border-slate-200 hover:bg-slate-100 hover:text-black"
            onClick={setShowEditPage}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700"
            onClick={handleEditExpense}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditExpense;
