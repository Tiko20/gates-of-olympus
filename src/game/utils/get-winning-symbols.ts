import { GameBoardModel } from "../models/game-board.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";
export type WinningSymbolResult = Record<
  Exclude<GameSymbolsEnum, GameSymbolsEnum.ZEUS>,
  number
>;

export const getWinningSymbols = (board: GameBoardModel) => {
  const gameSymbolsDefaultValues: WinningSymbolResult = {
    blueGem: 0,
    greenGem: 0,
    yellowGem: 0,
    purpleGem: 0,
    redGem: 0,
    goblet: 0,
    ring: 0,
    crown: 0,
    hourglass: 0,
  };

  board.forEach((row, _) => {
    row.forEach((square, _) => {
      if (
        square.name in gameSymbolsDefaultValues &&
        square.name !== GameSymbolsEnum.ZEUS
      ) {
        gameSymbolsDefaultValues[square.name]++;
        return { ...square, isDeleted: true };
      }
    });
  });

  return Object.entries(gameSymbolsDefaultValues)
    .map(([key, value]) => {
      if (value >= 8) {
        return { [key]: value };
      }
      return null;
    })
    .filter(Boolean) as WinningSymbolResult[];
};
