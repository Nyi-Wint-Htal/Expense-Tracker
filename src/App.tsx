import { useState } from "react";
import NavBar from "./components/NavBar";
import AddExpense from "./pages/AddExpense";
import Home from "./pages/Home";

function App() {
  const [showAddPage, setShowAddPage] = useState(false);
  return (
    <>
      <NavBar setShowAddPage={() => setShowAddPage(true)} />
      <Home />
      <AddExpense
        showAddPage={showAddPage}
        setShowAddPage={() => setShowAddPage(false)}
      />
    </>
  );
}

export default App;
