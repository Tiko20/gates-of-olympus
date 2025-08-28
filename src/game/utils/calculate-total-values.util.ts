import { gameSymbolsValuesConfig } from "../configs/game-symbols-values.config";
import { WinningSymbolResult } from "./get-winning-symbols.util";

export const calculateTotalValueUtil = (
  winningResult: WinningSymbolResult[]
) => {
  let totalResult = 0;
  Object.values(winningResult).forEach((symbol) => {
    Object.entries(symbol).forEach(([key, count]) => {
      totalResult +=
        gameSymbolsValuesConfig[key as keyof typeof gameSymbolsValuesConfig]
          .value * count;
    });
  });
  return totalResult;
};
