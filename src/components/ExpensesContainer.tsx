import SingleExpense from "./SingleExpense";
import type { Category, Expense } from "../types/Expense";
import { useState } from "react";

type ExpensesContainerProps = {
  data: Expense[];
};

const ExpensesContainer = ({ data }: ExpensesContainerProps) => {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<Category | "All">("All");
  const categories: { name: Category; icon: string }[] = [
    { name: "Food", icon: "fa-utensils" },
    { name: "Transportation", icon: "fa-bus" },
    { name: "Entertainment", icon: "fa-film" },
    { name: "Shopping", icon: "fa-basket-shopping" },
    { name: "Other", icon: "fa-layer-group" },
  ];

  const filteredData = data.filter((expense) => {
    const matchesSearch = expense.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTab = tab === "All" || expense.category === tab;
    return matchesSearch && matchesTab;
  });

  return (
    <>
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Expenses</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {data.length} transactions
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 bg-white border shadow-sm rounded-2xl border-slate-200 dark:bg-slate-800 dark:border-slate-700">
          <i className="fa-solid fa-magnifying-glass text-slate-400"></i>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            id="search"
            placeholder="Search expenses..."
            className="w-full bg-transparent outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="flex gap-2 pb-1 overflow-visible overflow-x-auto scrollbar-none">
          <span
            onClick={() => {
              setTab("All");
            }}
            className={tab === "All" ? "tabStyleActive" : "tabStyle"}
          >
            All
          </span>
          {categories.map((category) => (
            <span
              key={category.name}
              onClick={() => {
                setTab(category.name);
              }}
              className={
                tab === category.name ? "tabStyleIconActive" : "tabStyleIcon"
              }
            >
              <i className={`fa-solid ${category.icon}`}></i>
              {category.name}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {filteredData.length === 0 ? (
            <div className="p-8 text-center border border-dashed rounded-3xl border-slate-300 dark:border-slate-700">
              <i className="text-3xl fa-solid fa-wallet text-slate-400"></i>
              <p className="mt-3 text-slate-500">No expenses yet</p>
            </div>
          ) : (
            filteredData.map((expense) => (
              <SingleExpense
                key={expense.id}
                id={expense.id}
                title={expense.title}
                category={expense.category}
                amount={expense.amount}
                date={expense.date}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ExpensesContainer;
