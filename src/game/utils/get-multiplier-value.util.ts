import { weightedMultipliers } from "../constants/constants";

export const getMultiplierValueUtil = (): number => {
  // Define values with their probabilities

  const rand = Math.random();
  let cumulative = 0;

  for (const { value, probability } of weightedMultipliers) {
    cumulative += probability;
    if (rand < cumulative) {
      return value;
    }
  }

  // Fallback (in case of rounding errors)
  return weightedMultipliers[0].value;
};
