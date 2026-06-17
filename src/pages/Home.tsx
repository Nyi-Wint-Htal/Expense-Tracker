import { useContext } from "react";
import Categories from "../components/Categories";
import ExpensesContainer from "../components/ExpensesContainer";
import InfoCard from "../components/InfoCard";
import type { Category } from "../types/Expense";
import { ExpenseContext } from "../context/ExpenseContext";

const Home = () => {
  const expenseContext = useContext(ExpenseContext);
  if (!expenseContext) return null;
  const { expenses } = expenseContext;
  const getCategoryStats = (category: Category) => {
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

  const totalAmt = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  const numTotalExpenses = expenses.length;
  const foodStats = getCategoryStats("Food");
  const transportStats = getCategoryStats("Transportation");
  const entertainmentStats = getCategoryStats("Entertainment");

  return (
    <>
      <div className="flex flex-col px-3 py-5 gap-y-5">
        <div className="grid grid-cols-2 gap-x-5 gap-y-5">
          <InfoCard
            title="Total Spent"
            icon="fa-wallet"
            amount={totalAmt}
            quantity={numTotalExpenses}
            quantityIdentifier="expenses"
          />
          <InfoCard
            title="Food"
            icon="fa-utensils"
            amount={foodStats.total}
            quantity={foodStats.count}
            quantityIdentifier="items"
          />
          <InfoCard
            title="Transport"
            icon="fa-bus"
            amount={transportStats.total}
            quantity={transportStats.count}
            quantityIdentifier="items"
          />
          <InfoCard
            title="Entertainment"
            icon="fa-film"
            amount={entertainmentStats.total}
            quantity={entertainmentStats.count}
            quantityIdentifier="items"
          />
        </div>
        <ExpensesContainer data={expenses} />
        <Categories expenses={expenses} />
      </div>
    </>
  );
};

export default Home;
