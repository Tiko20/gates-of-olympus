import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const multiplierChecker = (board: GameBoardModel): GameBoardModel => {
  return board.map((row) =>
    row.map((cell) => {
      if (cell.name === GameSymbolsEnum.ZEUS) {
        return { ...cell, isMultiplies: true };
      }
      return cell;
    })
  );
};
//feature
