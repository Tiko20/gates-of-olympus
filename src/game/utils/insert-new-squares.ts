import { SquareModel } from "../models/square-model";
import { generateSquare } from "./generate-square";

export const insertNewSquares = (board: SquareModel[][]): SquareModel[][] => {
  return board.map((col, _) => {
    const newCol = [...col];
    while (newCol.length < 5) {
      newCol.unshift({
        id: generateSquare(),
        isDeleted: false,
      });
    }
    return newCol;
  });
};
