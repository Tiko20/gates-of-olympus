import { FC } from "react";
import "./style/square.css";
import { GameSymbolsEnum } from "../../models/game-symbols.enum";
import { MultiplierSymbol } from "../multiplier-symbols/MultiplierSymbol";
import SymbolCard from "../symbol-card/SymbolCard";

interface SquareProps {
  name: GameSymbolsEnum;
  isDeleted: boolean;
  imgSRC: string;
}

export const Square: FC<SquareProps> = ({ imgSRC, isDeleted, name }) => {
  return (
    <div className={`square ${isDeleted ? "deleted" : ""}`}>
      {name === GameSymbolsEnum.ZEUS ? (
        <MultiplierSymbol value={1000} />
      ) : (
        <SymbolCard
          imgSRC={imgSRC}
          isDeleted={isDeleted}
          name={name}
        />
      )}
    </div>
  );
};
