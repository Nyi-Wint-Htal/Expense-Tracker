type AddExpenseProps = {
  showAddPage: boolean;
  setShowAddPage: () => void;
};

const AddExpense = ({ showAddPage, setShowAddPage }: AddExpenseProps) => {
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
            className="border bg-gray-300"
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="amount">Amount($)</label>
            <input
              type="text"
              name="amount"
              id="amount"
              className="border bg-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category-choice">Category</label>
            <select id="category-choice" name="categories">
              <option value="">Food</option>
              <option value="volvo">Transport</option>
              <option value="saab">Entertainment</option>
              <option value="mercedes">Shopping</option>
              <option value="audi">Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            className="border bg-gray-300"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={setShowAddPage}>Cancel</button>
          <button>Add Expense</button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
