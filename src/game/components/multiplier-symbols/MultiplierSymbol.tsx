import { FC } from "react";
import "./style/multiplierSymbol.css";
import { MultiplierModel } from "../../models/multiplier.model";
import { MultiplierGradients } from "../../configs/multiplie-gradients";

interface MultiplierSymbolProps {
  square: MultiplierModel;
}

export const MultiplierSymbol: FC<MultiplierSymbolProps> = ({ square }) => {
  return (
    <div className="multipliers-container">
      <div
        className="multiplier"
        style={{ backgroundImage: MultiplierGradients[square.color] }}
      >
        x {square.value}
      </div>
    </div>
  );
};
