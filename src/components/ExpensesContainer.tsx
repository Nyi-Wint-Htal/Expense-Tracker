import SingleExpense from "./SingleExpense";

type ExpensesContainerProps = {
  quantity: number;
};

const ExpensesContainer = ({ quantity }: ExpensesContainerProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row items-center justify-start">
          <h1>Expenses</h1>
          <p>{quantity}</p>
        </div>
        <div className="flex flex-row items-center justify-start border">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search expenses..."
            className="w-full"
          />
        </div>
        <div className="flex flex-wrap w-screen gap-x-3 gap-y-2">
          <span className="tabStyle">All</span>
          <span className=" tabStyleIcon">
            <i className="fa-solid fa-utensils"></i>
            Food
          </span>
          <span className=" tabStyleIcon">
            <i className="fa-solid fa-bus"></i>
            Transportation
          </span>
          <span className=" tabStyleIcon">
            <i className="fa-solid fa-film"></i>
            Entertainment
          </span>
          <span className=" tabStyleIcon">
            <i className="fa-solid fa-basket-shopping"></i>
            Shopping
          </span>
          <span className="tabStyle">Other</span>
        </div>
        <SingleExpense
          title="Grocery"
          color="bg-green-500 text-green-900"
          category="Food"
          amount={23.99}
          date="21.4.2022"
        />
      </div>
    </>
  );
};

export default ExpensesContainer;
