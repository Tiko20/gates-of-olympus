import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const boardCleanerUtil = (board: GameBoardModel) => {
  // Count all symbols
  const counts: Record<string, number> = {};

  board.flat().forEach((cell) => {
    if (cell) {
      counts[cell.name] = (counts[cell.name] || 0) + 1;
    }
  });

  // Find symbols with >= 8
  const symbolsToRemove = new Set(
    Object.entries(counts)
      .filter(([key, value]) => value >= 8 && key !== GameSymbolsEnum.MULTIPLIER)
      .map(([key]) => key)
  );

  // Return new board with removed cells (null instead of symbol)
  return board.map((col) =>
    col.map((cell) => cell && (!symbolsToRemove.has(cell.name) ? cell : null))
  );
};
