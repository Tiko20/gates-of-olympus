import { FC } from "react";
import { SquareModel } from "../../models/game-board.model";
import { GameSymbolsEnum } from "../../models/game-symbols.enum";
import { MultiplierSymbol } from "../ui/MultiplierSymbol";
import SymbolCard from "../ui/SymbolCard";
import styles from "../../styles/square.module.css"

interface SquareProps {
  square: SquareModel;
}

export const Square: FC<SquareProps> = ({ square }) => {
  return (
    <div className={styles["square"]}>
      {square &&
        (square.name === GameSymbolsEnum.ZEUS ? (
          <MultiplierSymbol square={square} />
        ) : (
          <SymbolCard square={square} />
        ))}
    </div>
  );
};
