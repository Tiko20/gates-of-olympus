import { GAME_SYMBOLS_ARRAY } from "../constants/constants";
import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const generateSymbol = (): GameSymbolsEnum => {
  const symbol =
    GAME_SYMBOLS_ARRAY[Math.floor(Math.random() * GAME_SYMBOLS_ARRAY.length)];

  if (symbol !== GameSymbolsEnum.ZEUS) return symbol;

  return Math.random() > 0.8 ? symbol : generateSymbol();
};
