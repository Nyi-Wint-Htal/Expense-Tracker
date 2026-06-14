import type { Expense } from "../types/Expense";

type ExpenseProps = Expense;

const SingleExpense = ({
  color,
  title,
  date,
  category,
  amount,
}: ExpenseProps) => {
  return (
    <>
      <div className="flex flex-row justify-between border group">
        <div className="flex flex-row items-center">
          <div className={`rounded-full ${color} w-5 h-5`}></div>
          <div className="flex flex-col">
            <h1>{title}</h1>
            <p>{date}</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <span className={`${color}`}>{category}</span>
          <span>${amount}</span>
          <div className="flex flex-row items-center invisible group-hover:visible">
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleExpense;
