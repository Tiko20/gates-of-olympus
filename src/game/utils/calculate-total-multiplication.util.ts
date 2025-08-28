import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const calculateTotalMultiplicationUtil = (board: GameBoardModel) => {
  let totalResult = 0;
  board.forEach((col) => {
    col.forEach((symbol) => {
      if (symbol && symbol.name === GameSymbolsEnum.MULTIPLIER) {
        totalResult += symbol.value;
      }
    });
  });
  return totalResult;
};
