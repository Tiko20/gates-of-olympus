import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";
import { generateSymbol } from "./generate-symbol";
import { getMultiplierColorAndValue } from "./get-multiplier-color-and-value";

export const createBoard = (): GameBoardModel => {
  return Array.from({ length: 6 }, (_, i) =>
    Array.from({ length: 5 }, (_, j) => {
      const symbol = generateSymbol();
      if (symbol === GameSymbolsEnum.ZEUS) {
        const multiplier = getMultiplierColorAndValue();
        return {
          name: symbol,
          isMultiplies: false,
          color: multiplier.color,
          value: multiplier.value,
        };
      } else {
        return {
          name: symbol,
          isDeleted: false,
        };
      }
    })
  );
};
