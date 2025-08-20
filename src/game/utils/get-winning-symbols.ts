import { GameSymbolsEnum } from "../models/game-symbols.enum";
import { SquareModel } from "../models/square-model";

export type WinningSymbolResult = Record<GameSymbolsEnum, number>;

export const getWinningSymbols = (board: SquareModel[][]) => {
  const gameSymbolsDefaultValues: WinningSymbolResult = {
    blueGem: 0,
    greenGem: 0,
    yellowGem: 0,
    purpleGem: 0,
    goblet: 0,
    ring: 0,
    hourglass: 0,
    zeus: 0,
  };

  board.forEach((row, rowIndex) => {
    row.forEach((square, index) => {
      if (square.id in gameSymbolsDefaultValues) {
        gameSymbolsDefaultValues[square.id]++;
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
const gameSymbols = {
  blueGem: "💎 Blue Gem",
  greenGem: "💚 Green Gem",
  yellowGem: "💛 Yellow Gem",
  purpleGem: "💜 Purple Gem",
  goblet: "🍷 Goblet",
  ring: "💍 Ring",
  hourglass: "⏳ Hourglass",
  zeus: "⚡ Zeus",
  //   scatter: "🌩️ Scatter (Lightning Bolt)"
};
