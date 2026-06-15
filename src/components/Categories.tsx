const Category = () => {
  return (
    <>
      <div>
        <h1>By category</h1>
        <div className="flex items-center justify-center min-w-full">
          <svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            className="border"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#ddd"
              strokeWidth="12"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="orange"
              strokeWidth="12"
              strokeDasharray="251.3"
              strokeDashoffset="70"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Category;
