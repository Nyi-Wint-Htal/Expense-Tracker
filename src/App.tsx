import { useState } from "react";
import NavBar from "./components/NavBar";
import AddExpense from "./pages/AddExpense";
import Home from "./pages/Home";
import type { Expense } from "./types/Expense";

function App() {
  const [showAddPage, setShowAddPage] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  return (
    <>
      <NavBar setShowAddPage={() => setShowAddPage(true)} />
      <Home data={expenses} />
      <AddExpense
        showAddPage={showAddPage}
        setShowAddPage={() => setShowAddPage(false)}
        setExpense={(expense) => {
          setExpenses((prevExpenses) => [...prevExpenses, expense]);
        }}
      />
    </>
  );
}

export default App;
