import { GameSymbolsEnum } from "./game-symbols.enum";

export interface SquareModel {
  id: GameSymbolsEnum;
  col: number;
  row: number;
  isDeleted: boolean;
}
