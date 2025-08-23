import { FC } from "react";
import "./style/square.css";
import { GameSymbolsEnum } from "../../models/game-symbols.enum";
import { MultiplierSymbol } from "../multiplier-symbols/MultiplierSymbol";
import SymbolCard from "../symbol-card/SymbolCard";
import { SymbolModel } from "../../models/symbol.model";
import { MultiplierModel } from "../../models/multiplier.model";

interface SquareProps {
  square: SymbolModel | MultiplierModel;
}

export const Square: FC<SquareProps> = ({ square }) => {
  return (
    <div className="square">
      {square.name === GameSymbolsEnum.ZEUS ? (
        <MultiplierSymbol square={square} />
      ) : (
        <SymbolCard square={square} />
      )}
    </div>
  );
};
