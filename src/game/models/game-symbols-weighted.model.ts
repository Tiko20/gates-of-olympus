import { GameSymbolsEnum } from "./game-symbols.enum";

// Model for value with probability
export interface ValueWithProbabilityModel {
  value: number;
  probability: number;
}

// Record type for all game symbols
export type GameSymbolsWeightedConfig = Record<
  GameSymbolsEnum,
  ValueWithProbabilityModel
>;