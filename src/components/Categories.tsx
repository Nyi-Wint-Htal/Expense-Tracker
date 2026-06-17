import type { Category, Expense } from "../types/Expense";
import { categoryColors } from "../types/Expense";

type CategoriesProps = {
  expenses: Expense[];
};

const Categories = ({ expenses }: CategoriesProps) => {
  const categories: Category[] = [
    "Food",
    "Transportation",
    "Entertainment",
    "Shopping",
    "Other",
  ];
  const getCategoriesStats = (category: Category) => {
    return expenses.reduce(
      (sum, expense) => {
        if (expense.category === category) {
          return { total: sum.total + expense.amount, count: sum.count + 1 };
        } else {
          return sum;
        }
      },
      { total: 0, count: 0 },
    );
  };

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );
  const circumference = 251.3;
  let accumulatedLength = 0;

  const chartData = categories.map((category) => {
    const stats = getCategoriesStats(category);
    const percent = totalExpense === 0 ? 0 : stats.total / totalExpense;
    const length = percent * circumference;
    accumulatedLength += length;
    return {
      color: categoryColors[category],
      offset: circumference - accumulatedLength,
      percent,
      stats,
    };
  });
  return (
    <div className="p-6 bg-white border shadow-sm rounded-3xl border-slate-200/80 dark:bg-slate-800 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold">Spending Breakdown</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Where your money goes
          </p>
        </div>

        <div className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full dark:bg-indigo-500/20 dark:text-indigo-400">
          ฿{totalExpense.toLocaleString()}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <svg width="220" height="220" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="12"
          />

          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={chartData[4].color}
            strokeWidth="12"
            strokeDasharray="251.3"
            strokeDashoffset={chartData[4].offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />

          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={chartData[3].color}
            strokeWidth="12"
            strokeDasharray="251.3"
            strokeDashoffset={chartData[3].offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />

          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={chartData[2].color}
            strokeWidth="12"
            strokeDasharray="251.3"
            strokeDashoffset={chartData[2].offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />

          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={chartData[1].color}
            strokeWidth="12"
            strokeDasharray="251.3"
            strokeDashoffset={chartData[1].offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />

          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={chartData[0].color}
            strokeWidth="12"
            strokeDasharray="251.3"
            strokeDashoffset={chartData[0].offset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>

        <div className="absolute text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Total Spent
          </p>
          <h3 className="text-xl font-bold">
            ฿{totalExpense.toLocaleString()}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        {categories.map((category, i) => (
          <div
            key={category}
            className="flex items-center justify-between p-3 transition rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/30 dark:hover:bg-slate-700/50"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: categoryColors[category as Category],
                }}
              />

              <span className="font-medium">{category}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">
                ฿{chartData[i].stats.total}
              </span>

              <span className="font-semibold">
                {(chartData[i].percent * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
