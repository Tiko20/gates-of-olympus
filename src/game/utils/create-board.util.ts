import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";
import { generateSymbolUtil } from "./generate-symbol.util";
import { getMultiplierColorAndValueUtil } from "./get-multiplier-color-and-value.util";

export const createBoardUtil = (): Exclude<GameBoardModel, null> => {
  return Array.from({ length: 6 }, (_, i) =>
    Array.from({ length: 5 }, (_, j) => {
      const symbol = generateSymbolUtil();
      if (symbol === GameSymbolsEnum.ZEUS) {
        const multiplier = getMultiplierColorAndValueUtil();
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
