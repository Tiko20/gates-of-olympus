import { multiplierSymbolValues } from "../configs/multiplier-symbol-values";
import { MultiplierColorsEnum } from "../models/multiplier-colors.type";

export const getMultiplierColorAndValueUtil = (): {
  color: MultiplierColorsEnum;
  value: number;
} => {
  const rand = Math.random();
  let color: MultiplierColorsEnum;
  
  if (rand < 0.01) color = MultiplierColorsEnum.RED;
  else if (rand < 0.13) color = MultiplierColorsEnum.PURPLE;
  else if (rand < 0.25) color = MultiplierColorsEnum.BLUE;
  else color = MultiplierColorsEnum.GREEN;

  const values = multiplierSymbolValues[color];
  const value = values[Math.floor(Math.random() * values.length)];

  return { color, value };
};
