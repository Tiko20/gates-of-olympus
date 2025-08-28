import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const gameSymbolsSets = new Set<GameSymbolsEnum>([
  GameSymbolsEnum.BLUE_GEM,
  GameSymbolsEnum.GREEN_GEM,
  GameSymbolsEnum.PURPLE_GEM,
  GameSymbolsEnum.YELLOW_GEM,
  GameSymbolsEnum.RED_GEM,
  GameSymbolsEnum.RING,
  GameSymbolsEnum.GOBLET,
  GameSymbolsEnum.MULTIPLIER,
  GameSymbolsEnum.CROWN,
  GameSymbolsEnum.HOURGLASS,
]);
export const GAME_SYMBOLS_ARRAY = Array.from(gameSymbolsSets);

export const weightedMultipliers: { value: number; probability: number }[] = [
  { value: 2, probability: 0.5 },
  { value: 10, probability: 0.25 },
  { value: 50, probability: 0.15 },
  { value: 100, probability: 0.05 },
  { value: 250, probability: 0.03 },
  { value: 500, probability: 0.015 },
  { value: 1000, probability: 0.005 },
];


