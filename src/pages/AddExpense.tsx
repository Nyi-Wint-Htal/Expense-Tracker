import { useState } from "react";
import type { ExpenseForm } from "../types/ExpenseForm";
import type { Category, Expense } from "../types/Expense";

type AddExpenseProps = {
  showAddPage: boolean;
  setShowAddPage: () => void;
  setExpense: (expense: Expense) => void;
};

const AddExpense = ({
  showAddPage,
  setShowAddPage,
  setExpense,
}: AddExpenseProps) => {
  const initialFormData: ExpenseForm = {
    title: "",
    amount: "",
    category: "Food",
    date: "",
  };
  const [formData, setFormData] = useState<ExpenseForm>(initialFormData);
  const handleAddExpense = () => {
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title: formData.title,
      amount: Number(formData.amount),
      category: formData.category,
      date: formData.date,
    };
    setExpense(newExpense);
    setFormData(initialFormData);
    setShowAddPage();
  };

  if (!showAddPage) return null;
  return (
    <div className="absolute top-0 min-w-screen min-h-screen flex items-center justify-center bg-black/15  backdrop-blur-[2px]">
      <div className="w-[90%] h-fit border p-5 bg-white">
        <div className="flex flex-row justify-between border-b">
          <h1>Add Expense</h1>
          <svg
            height="15"
            width="15"
            viewBox="0 0 10 10"
            className="rounded-full w-5 h-5 p-0.5 hover:bg-black/20"
            onClick={setShowAddPage}
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
            className="border bg-gray-300"
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="amount">Amount($)</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={(e) => {
                setFormData({ ...formData, amount: e.target.value });
              }}
              className="border bg-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category-choice">Category</label>
            <select
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
            className="border bg-gray-300"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={setShowAddPage}>Cancel</button>
          <button onClick={handleAddExpense}>Add Expense</button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
