import { MultiplierModel } from "./multiplier.model";
import { SymbolModel } from "./symbol.model";

export type GameBoardModel = (SymbolModel | MultiplierModel)[][];
