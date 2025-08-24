import { GameSymbolsEnum } from "./game-symbols.enum";
import { MultiplierColorsEnum } from "./multiplier-colors.type";

export interface MultiplierModel {
  name: GameSymbolsEnum.ZEUS;
  color: MultiplierColorsEnum;
  value: number;
  isMultiplies: boolean;
}
