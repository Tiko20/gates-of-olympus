import { symbolsValuesConfig } from "../configs/symbols-values.config";
import { WinningSymbolResult } from "./get-winning-symbols.util";

export const calculateTotalValueUtil = (winningResult: WinningSymbolResult[]) => {
  let totalResult = 0;
  Object.values(winningResult).forEach((symbol) => {
    Object.entries(symbol).forEach(([key, count]) => {
      totalResult +=
        symbolsValuesConfig[key as keyof typeof symbolsValuesConfig] * count;
    });
  });
  return totalResult;
};
