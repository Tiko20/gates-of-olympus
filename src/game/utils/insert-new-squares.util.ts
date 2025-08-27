import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";
import { generateSymbolUtil } from "./generate-symbol.util";
import { getMultiplierColorAndValueUtil } from "./get-multiplier-color-and-value.util";

export const insertNewSquares = (board: GameBoardModel): GameBoardModel => {
  const filterBoard = board.map((col) => col.filter(Boolean));
  return filterBoard.map((col, _) => {
    const newCol = [...col];
    while (newCol.length < 5) {
      const symbol = generateSymbolUtil();
      if (symbol === GameSymbolsEnum.ZEUS) {
        const multi = getMultiplierColorAndValueUtil();
        newCol.unshift({
          name: symbol,
          color: multi.color,
          value: multi.value,
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
