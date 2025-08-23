import { GameBoardModel } from "../models/game-board.model";

export const boardCleaner = (board: GameBoardModel) => {
  // Count all symbols
  const counts: Record<string, number> = {};

  board.flat().forEach((cell) => {
    counts[cell.name] = (counts[cell.name] || 0) + 1;
  });

  // Find symbols with >= 8
  const symbolsToRemove = new Set(
    Object.entries(counts)
      .filter(([, value]) => value >= 8)
      .map(([key]) => key)
  );

  // Return new board with removed cells (null instead of symbol)
  return board.map((row) =>
    row.filter((cell) => !symbolsToRemove.has(cell.name))
  );
};
