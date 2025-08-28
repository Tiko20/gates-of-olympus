import { MultiplierModel } from "./multiplier.model";
import { SymbolModelModel } from "./symbol.model";

export type SquareType = SymbolModelModel | MultiplierModel;
export type SquareModel = SquareType | null;
export type GameBoardModel = SquareModel[][];
