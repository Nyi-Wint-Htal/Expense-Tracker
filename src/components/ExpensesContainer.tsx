import SingleExpense from "./SingleExpense";
import type { Expense } from "../types/Expense";

type ExpensesContainerProps = {
  data: Expense[];
};

const ExpensesContainer = ({ data }: ExpensesContainerProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row items-center justify-start">
          <h1>Expenses</h1>
          <p>{data.length}</p>
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
        {data.map((expense) => (
          <SingleExpense
            key={expense.id}
            id={expense.id}
            title={expense.title}
            category={expense.category}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </>
  );
};

export default ExpensesContainer;
