import { MultiplierColorsEnum } from "../models/multiplier-colors.type";

export const MultiplierGradients: Record<MultiplierColorsEnum, string> = {
  [MultiplierColorsEnum.GREEN]:
    "linear-gradient(to right, #93F9B9, #1D976C)",

  [MultiplierColorsEnum.PURPLE]:
    "linear-gradient(to right, #E100FF, #7F00FF)",

  [MultiplierColorsEnum.RED]:
    "linear-gradient(to right, #93291E, #ED213A)",

  [MultiplierColorsEnum.BLUE]:
    "linear-gradient(to right, #2F80ED, #56CCF2)",
};