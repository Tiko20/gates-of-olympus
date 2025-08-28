import { GameSymbolsEnum } from "./game-symbols.enum";

export interface MultiplierModel {
  name: GameSymbolsEnum.MULTIPLIER;
  value: number;
  isMultiplies: boolean;
}
