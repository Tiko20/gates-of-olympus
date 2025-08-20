import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const gameSymbolsSets = new Set<GameSymbolsEnum>([
  GameSymbolsEnum.BLUE_GEM,
  GameSymbolsEnum.GREEN_GEM,
  GameSymbolsEnum.PURPLE_GEM,
  GameSymbolsEnum.YELLOW_GEM,
  GameSymbolsEnum.RING,
  GameSymbolsEnum.HOURGLASS,
  GameSymbolsEnum.GOBLET,
  GameSymbolsEnum.ZEUS,
]);

export const gameSymbolsArray = Array.from(gameSymbolsSets);
