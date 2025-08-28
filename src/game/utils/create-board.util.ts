import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";
import { generateSymbolUtil } from "./generate-symbol.util";
import { getMultiplierValueUtil } from "./get-multiplier-value.util";

export const createBoardUtil = (): Exclude<GameBoardModel, null> => {
  return Array.from({ length: 6 }, (_, i) =>
    Array.from({ length: 5 }, (_, j) => {
      const symbol = generateSymbolUtil();
      if (symbol === GameSymbolsEnum.MULTIPLIER) {
        const multiplier = getMultiplierValueUtil();
        return {
          name: symbol,
          isMultiplies: false,
          value: multiplier,
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
