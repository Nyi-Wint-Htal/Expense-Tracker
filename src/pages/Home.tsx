import Category from "../components/Category";
import ExpensesContainer from "../components/ExpensesContainer";
import InfoCard from "../components/InfoCard";

const Home = () => {
  return (
    <>
      <div className="px-3 py-5">
        <div className="grid grid-cols-2">
          <InfoCard
            title="Total Spent"
            icon="fa-wallet"
            amount={500}
            quantity={10}
            quantityIdentifier="expenses"
          />
          <InfoCard
            title="Food"
            icon="fa-utensils"
            amount={100}
            quantity={2}
            quantityIdentifier="items"
          />
          <InfoCard
            title="Transport"
            icon="fa-bus"
            amount={160}
            quantity={3}
            quantityIdentifier="items"
          />
          <InfoCard
            title="Entertainment"
            icon="fa-film"
            amount={27}
            quantity={2}
            quantityIdentifier="items"
          />
        </div>
        <ExpensesContainer quantity={10} />
        <Category />
      </div>
    </>
  );
};

export default Home;
