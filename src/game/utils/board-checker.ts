import { GameBoardModel } from "../models/game-board.model";
import { WinningSymbolResult } from "./get-winning-symbols";

export const boardChecker = (
  board: GameBoardModel,
  gameSymbols: WinningSymbolResult[]
) => {
  const keys = gameSymbols.map((obj) => Object.keys(obj)[0]);

  return board.map((row) =>
    row.map((cell) =>
      keys.includes(cell.name) ? { ...cell, isDeleted: true } : cell
    )
  );
};
