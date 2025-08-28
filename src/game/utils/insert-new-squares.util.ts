import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";
import { generateSymbolUtil } from "./generate-symbol.util";
import { getMultiplierValueUtil } from "./get-multiplier-value.util";

export const insertNewSquares = (board: GameBoardModel): GameBoardModel => {
  const filterBoard = board.map((col) => col.filter(Boolean));
  return filterBoard.map((col, _) => {
    const newCol = [...col];
    while (newCol.length < 5) {
      const symbol = generateSymbolUtil();
      if (symbol === GameSymbolsEnum.MULTIPLIER) {
        const multi = getMultiplierValueUtil();
        newCol.unshift({
          name: symbol,
          value: multi,
          isMultiplies: false,
        });
      } else {
        newCol.unshift({
          name: symbol,
          isDeleted: false,
        });
      }
    }
    return newCol;
  });
};
