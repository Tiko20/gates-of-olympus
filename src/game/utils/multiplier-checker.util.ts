import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const multiplierCheckerUtil = (board: GameBoardModel): GameBoardModel => {
  return board.map((row) =>
    row.map((cell) => {
      if (cell && cell.name === GameSymbolsEnum.MULTIPLIER) {
        return { ...cell, isMultiplies: true };
      }
      return cell;
    })
  );
};
//feature
