import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const calculateTotalMultiplication = (board: GameBoardModel) => {
  let totalResult = 0;
  board.forEach((col) => {
    col.forEach((symbol) => {
      if (symbol.name === GameSymbolsEnum.ZEUS) {
        totalResult += symbol.value;
        
      }
    });
  });
  return totalResult;
};
