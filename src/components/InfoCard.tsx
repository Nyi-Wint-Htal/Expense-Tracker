type InfoCardProps = {
  title: string;
  icon: string;
  amount: number;
  quantity: number;
  quantityIdentifier: string;
};

const InfoCard = ({
  title,
  icon,
  amount,
  quantity,
  quantityIdentifier,
}: InfoCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-5 transition-all bg-white border border-slate-200 shadow-sm rounded-3xl hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-800 dark:border-slate-700">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
          {title}
        </span>
        <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-xl dark:bg-indigo-500/20">
          <i
            className={`fa-solid ${icon} text-indigo-600 dark:text-indigo-400`}
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold tracking-tight">
        ${amount.toLocaleString()}
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {quantity}{" "}
        {quantity === 1
          ? quantityIdentifier.replace(/s$/, "")
          : quantityIdentifier}
      </p>
    </div>
  );
};

export default InfoCard;
