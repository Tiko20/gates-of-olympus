import  { FC } from "react";
import "./style/symbolCard.css";

interface SymbolCardProps {
  imgSRC: string;
  name: string;
  isDeleted?: boolean;
}

const SymbolCard: FC<SymbolCardProps> = ({
  imgSRC,
  name,
  isDeleted = false,
}) => {
  return (
    <div className="symbol-card">
      {isDeleted ? (
        <div className="boom"></div>
      ) : (
        <img src={imgSRC} alt={name} className="symbol-card-image" />
      )}
    </div>
  );
};

export default SymbolCard;
