import { useContext, useEffect, useState } from "react";
import type { Expense } from "../types/Expense";
import { categoryColors } from "../types/Expense";
import { ExpenseContext } from "../context/ExpenseContext";
import EditExpense from "../pages/EditExpense";

type ExpenseProps = Expense;

const SingleExpense = ({ id, title, date, category, amount }: ExpenseProps) => {
  const [showEditPage, setShowEditPage] = useState(false);
  useEffect(() => {
    if (showEditPage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showEditPage]);
  const expenseContext = useContext(ExpenseContext);
  if (!expenseContext) return null;
  const { expenses, setExpenses } = expenseContext;

  const handleDeleteExpense = (expenseId: string) => {
    const newExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(newExpenses);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 transition bg-white border shadow-sm group rounded-2xl border-slate-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center gap-3">
          <div
            className={`w-4 h-4  rounded-full`}
            style={{ backgroundColor: categoryColors[category] }}
          ></div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-slate-500">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500">{category}</span>
          <span className="font-bold">฿{amount}</span>
          <div className="flex gap-2 transition duration-150 opacity-100 md:opacity-0 md:group-hover:opacity-100">
            <button
              className="text-indigo-400 transition-colors md:text-slate-500 hover:text-indigo-400"
              onClick={() => setShowEditPage(true)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              className="text-red-500 transition-colors md:text-slate-500 md:hover:text-red-500"
              onClick={() => handleDeleteExpense(id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <EditExpense
        showEditPage={showEditPage}
        setShowEditPage={() => setShowEditPage(false)}
        title={title}
        id={id}
        amount={amount.toString()}
        category={category}
        date={date}
      />
    </>
  );
};

export default SingleExpense;
