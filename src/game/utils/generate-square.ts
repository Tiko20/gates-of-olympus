import { gameSymbolsArray } from "../constants/constants";
import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const generateSquare = (): GameSymbolsEnum => {
  return gameSymbolsArray[Math.floor(Math.random() * 9)];
};
