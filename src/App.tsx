import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AddExpense from "./pages/AddExpense";
import Home from "./pages/Home";
import type { Expense } from "./types/Expense";
import { ExpenseContext } from "./context/ExpenseContext";
import { supabase } from "./supabase-client";
import Auth from "./pages/Auth";
import type { Session } from "@supabase/supabase-js";

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseError, setExpenseError] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      const currentSession = await supabase.auth.getSession();
      setSession(currentSession.data.session);
    };
    fetchSession();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (!session) {
          setExpenses([]);
          setExpenseError("");
        }
      },
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  const [darkMode, setDarkMode] = useState(() => {
    const darkModeData = localStorage.getItem("darkMode");
    return darkModeData ? JSON.parse(darkModeData) : true;
  });
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
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (!session) {
      return;
    }

    const fetchExpenses = async () => {
      setExpenseError("");
      const { error, data } = await supabase
        .from("expenses")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: true });

      if (error) {
        setExpenseError(error.message);
        return;
      }
      setExpenses(data);
    };
    fetchExpenses();
  }, [session]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen text-black transition-colors duration-300 ease-out bg-white dark:bg-slate-900 dark:text-white ">
        {session ? (
          <ExpenseContext.Provider value={{ expenses, setExpenses }}>
            <NavBar
              setShowAddPage={() => setShowAddPage(true)}
              setDarkMode={() => setDarkMode(!darkMode)}
            />
            {expenseError && (
              <div className="mx-3 mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300">
                {expenseError}
              </div>
            )}
            <Home />
            <AddExpense
              showAddPage={showAddPage}
              setShowAddPage={() => setShowAddPage(false)}
              setExpense={(expense) => {
                setExpenses((prevExpenses) => [...prevExpenses, expense]);
              }}
            />
          </ExpenseContext.Provider>
        ) : (
          <Auth />
        )}
      </div>
    </div>
  );
}

export default App;
