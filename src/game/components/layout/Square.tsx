import { FC } from "react";
import { SquareModel } from "../../models/game-board.model";
import { GameSymbolsEnum } from "../../models/game-symbols.enum";
import styles from "../../styles/square.module.css";
import { MultiplierSymbol } from "../ui/MultiplierSymbol";
import SymbolCard from "../ui/SymbolCard";
interface SquareProps {
  square: SquareModel;
}

export const Square: FC<SquareProps> = ({ square }) => {
  return (
    <div className={styles["square"]}>
      {square &&
        (square.name === GameSymbolsEnum.MULTIPLIER ? (
          <MultiplierSymbol square={square} />
        ) : (
          <SymbolCard square={square} />
        ))}
    </div>
  );
};
