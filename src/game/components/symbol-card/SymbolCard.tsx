import { FC } from "react";
import "./style/symbolCard.css";
import { SymbolModel } from "../../models/symbol.model";
import { symbolsImages } from "../../configs/symbols-images.config";

interface SymbolCardProps {
  square: SymbolModel;
}

const SymbolCard: FC<SymbolCardProps> = ({ square }) => {
  return (
    <div className="symbol-card">
      {square.isDeleted ? (
        <div className="boom"></div>
      ) : (
        <img
          src={symbolsImages[square.name]}
          alt={square.name}
          className="symbol-card-image"
        />
      )}
    </div>
  );
};

export default SymbolCard;
