import { GameSymbolsEnum } from "./game-symbols.enum";

export interface SymbolModel {
  name: Exclude<GameSymbolsEnum, GameSymbolsEnum.ZEUS>;
  isDeleted: boolean;
}
