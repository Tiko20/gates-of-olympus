import { gameSymbolsValuesConfig } from "../configs/game-symbols-values.config";
import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const generateSymbolUtil = (): GameSymbolsEnum => {
  const rand = Math.random();
  let cumulative = 0;

  for (const [symbol, { probability }] of Object.entries(
    gameSymbolsValuesConfig
  ) as [GameSymbolsEnum, { value: number; probability: number }][]) {
    cumulative += probability;
    if (rand < cumulative) return symbol;
  }

  // fallback in case of rounding errors
  return GameSymbolsEnum.BLUE_GEM;
};
