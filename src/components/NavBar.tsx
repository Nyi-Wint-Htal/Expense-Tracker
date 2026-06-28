import logo from "../assets/SpendWiseIcon.png";
import { supabase } from "../supabase-client";

type NavBarProps = {
  setShowAddPage: () => void;
  setDarkMode: () => void;
};

const NavBar = ({ setShowAddPage, setDarkMode }: NavBarProps) => {
  const logout = async () => {
    await supabase.auth.signOut();
  };
  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 border-b border-white/20 bg-white/70 backdrop-blur-xl dark:bg-slate-900/70 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600">
            <img src={logo} alt="SpendWise Logo" className="size-8" />
          </div>
          <div>
            <h1 className="text-sm font-bold">SpendWise</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Track smarter
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={setDarkMode}
            className="flex items-center justify-center w-10 h-10 transition-colors rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
          <button
            onClick={setShowAddPage}
            className="px-4 py-2 text-sm font-semibold text-white transition-transform shadow-lg rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 shadow-indigo-500/20 hover:scale-105"
          >
            + Add
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm font-semibold text-white transition-transform shadow-lg rounded-xl bg-linear-to-r from-pink-500 to-red-600 shadow-red-500/20 hover:scale-105"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
