import { GameSymbolsEnum } from "./game-symbols.enum";

export interface SymbolModelModel {
  name: Exclude<GameSymbolsEnum, GameSymbolsEnum.MULTIPLIER>;
  isDeleted: boolean;
}
