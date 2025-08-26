import { FC } from "react";
import "./style/square.css";
import { GameSymbolsEnum } from "../../models/game-symbols.enum";
import { MultiplierSymbol } from "../multiplier-symbols/MultiplierSymbol";
import SymbolCard from "../symbol-card/SymbolCard";
import { SquareModel } from "../../models/game-board.model";

interface SquareProps {
  square: SquareModel;
}

export const Square: FC<SquareProps> = ({ square }) => {
  return (
    <div className="square">
      {square &&
        (square.name === GameSymbolsEnum.ZEUS ? (
          <MultiplierSymbol square={square} />
        ) : (
          <SymbolCard square={square} />
        ))}
    </div>
  );
};
