import { SquareModel } from "../models/game-board.model";
import { WinningSymbolResult } from "./get-winning-symbols.util";

export const boardCheckerUtil = (
  board: SquareModel[][],
  gameSymbols: WinningSymbolResult[]
): SquareModel[][] => {
  const keys = gameSymbols.map(obj => Object.keys(obj)[0]);

  return board.map(row =>
    row.map(cell => {
      if (cell && keys.includes(cell.name)) {
        return { ...cell, isDeleted: true };
      }
      return cell;
    })
  );
};
