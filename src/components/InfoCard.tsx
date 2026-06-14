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
    <>
      <div className="flex flex-col items-center justify-start p-5 border">
        <div className="flex flex-row items-center justify-between">
          <h1>{title}</h1>
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <h2>${amount}</h2>
        <p className="flex flex-row gap-x-3">
          {quantity}
          {quantityIdentifier}
        </p>
      </div>
    </>
  );
};

export default InfoCard;
