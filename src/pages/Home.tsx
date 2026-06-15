import Categories from "../components/Categories";
import ExpensesContainer from "../components/ExpensesContainer";
import InfoCard from "../components/InfoCard";
import type { Category, Expense } from "../types/Expense";

type HomeProps = {
  data: Expense[];
};

const Home = ({ data }: HomeProps) => {
  const getCategoryStats = (category: Category) => {
    return data.reduce(
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

  const totalAmt = data.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  const numTotalExpenses = data.length;

  const foodStats = getCategoryStats("Food");
  const transportStats = getCategoryStats("Transportation");
  const entertainmentStats = getCategoryStats("Entertainment");

  return (
    <>
      <div className="px-3 py-5">
        <div className="grid grid-cols-2">
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
        <ExpensesContainer data={data} />
        <Categories />
      </div>
    </>
  );
};

export default Home;
