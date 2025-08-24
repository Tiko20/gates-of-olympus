import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const MULTIPLIERS_VALUES = [
  2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 50, 100, 250, 500,
];

export const gameSymbolsSets = new Set<GameSymbolsEnum>([
  GameSymbolsEnum.BLUE_GEM,
  GameSymbolsEnum.GREEN_GEM,
  GameSymbolsEnum.PURPLE_GEM,
  GameSymbolsEnum.YELLOW_GEM,
  GameSymbolsEnum.RED_GEM,
  GameSymbolsEnum.RING,
  GameSymbolsEnum.GOBLET,
  GameSymbolsEnum.ZEUS,
  GameSymbolsEnum.CROWN,
  GameSymbolsEnum.HOURGLASS,
]);

export const GAME_SYMBOLS_ARRAY = Array.from(gameSymbolsSets); //todo
