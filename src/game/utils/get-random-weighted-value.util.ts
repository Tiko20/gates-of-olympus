import { weightedMultipliers } from "../constants/constants";

export const getRandomWeightedValueUtils = (): number => {
  const rand = Math.random();
  let cumulative = 0;
  

  for (const { value, probability } of weightedMultipliers) {
    cumulative += probability;
    if (rand < cumulative) return value;
  }

  // Fallback
  return weightedMultipliers[0].value;
};