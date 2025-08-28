export const weightedMultipliersConfig: Record<
  number,
  { probability: number }
> = {
  2: { probability: 0.5 }, // 50%
  10: { probability: 0.25 }, // 25%
  50: { probability: 0.15 }, // 15%
  100: { probability: 0.05 }, // 5%
  250: { probability: 0.03 }, // 3%
  500: { probability: 0.015 }, // 1.5%
  1000: { probability: 0.005 }, // 0.5%
};
