import { SquareModel } from "../models/square-model";
import { WinningSymbolResult } from "./get-winning-symbols";

export const boardChecker = (
  board: SquareModel[][],
  gameSymbols: WinningSymbolResult[]
) => {
  const keys = gameSymbols.map((obj) => Object.keys(obj)[0]);

  return board.map((row) =>
    row.map((cell) =>
      keys.includes(cell.id) ? { ...cell, isDeleted: true } : cell
    )
  );
};
