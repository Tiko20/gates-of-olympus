import { MultiplierModel } from "./multiplier.model";
import { SymbolModel } from "./symbol.model";

export type SquareType = SymbolModel | MultiplierModel;
export type SquareModel = SquareType | null;
export type GameBoardModel = SquareModel[][];
