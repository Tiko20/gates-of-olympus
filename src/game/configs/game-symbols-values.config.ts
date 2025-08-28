import { GameSymbolsWeightedConfig } from "../models/game-symbols-weighted.model";
import { GameSymbolsEnum } from "../models/game-symbols.enum";


export const gameSymbolsValuesConfig: GameSymbolsWeightedConfig = {
  [GameSymbolsEnum.BLUE_GEM]: { value: 0.05, probability: 0.2 }, // 20%
  [GameSymbolsEnum.GREEN_GEM]: { value: 0.1, probability: 0.18 }, // 18%
  [GameSymbolsEnum.RED_GEM]: { value: 0.2, probability: 0.15 }, // 15%
  [GameSymbolsEnum.YELLOW_GEM]: { value: 0.6, probability: 0.12 }, // 12%
  [GameSymbolsEnum.PURPLE_GEM]: { value: 0.8, probability: 0.1 }, // 10%
  [GameSymbolsEnum.GOBLET]: { value: 1, probability: 0.08 }, // 8%
  [GameSymbolsEnum.RING]: { value: 1.2, probability: 0.07 }, // 7%
  [GameSymbolsEnum.HOURGLASS]: { value: 1.5, probability: 0.05 }, // 5%
  [GameSymbolsEnum.CROWN]: { value: 4, probability: 0.03 }, // 3%
  [GameSymbolsEnum.MULTIPLIER]: { value: 10, probability: 0.02 }, // 2%
};
