import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AddExpense from "./pages/AddExpense";
import Home from "./pages/Home";
import type { Expense } from "./types/Expense";
import { ExpenseContext } from "./context/ExpenseContext";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showAddPage, setShowAddPage] = useState(false);
  useEffect(() => {
    if (showAddPage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAddPage]);
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    } catch (error) {
      console.log(error);
    }
  }, [expenses]);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen text-black transition-colors duration-300 ease-out bg-white dark:bg-slate-900 dark:text-white ">
        <ExpenseContext.Provider value={{ expenses, setExpenses }}>
          <NavBar
            setShowAddPage={() => setShowAddPage(true)}
            setDarkMode={() => setDarkMode(!darkMode)}
          />
          <Home />
          <AddExpense
            showAddPage={showAddPage}
            setShowAddPage={() => setShowAddPage(false)}
            setExpense={(expense) => {
              setExpenses((prevExpenses) => [...prevExpenses, expense]);
            }}
          />
        </ExpenseContext.Provider>
      </div>
    </div>
  );
}

export default App;
