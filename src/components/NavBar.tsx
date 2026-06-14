import logo from "../assets/SpendWiseIcon.png";

type NavBarProps = {
  setShowAddPage: () => void;
};

const NavBar = ({ setShowAddPage }: NavBarProps) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between min-w-full border-b-2 h-fit ">
        <div className="flex flex-row items-center justify-center gap-x-3">
          <img src={logo} alt="SpendWise Logo" className="w-15" />
          <h1>SpendWise</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-3">
          <i className="fa-solid fa-circle-half-stroke"></i>
          <button className="px-3 py-2 border" onClick={setShowAddPage}>
            + Add Expense
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
