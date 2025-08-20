import { generateSquare } from "./generate-square";

export const createBoard = () => {
  return Array.from({ length: 6 }, (_, i) =>
    Array.from({ length: 5 }, (_, j) => ({
      id: generateSquare(),
      row: j,
      col: i,
      isDeleted: false,
    }))
  );
};
