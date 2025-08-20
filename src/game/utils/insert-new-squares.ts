import { SquareModel } from "../models/square-model";
import { generateSquare } from "./generate-square";

export const insertNewSquares = (board: SquareModel[][]): SquareModel[][] => {
  return board.map((col, colIndex) => {
    const newCol = [...col];

    while (newCol.length <5) {
      newCol.unshift({
        id: generateSquare(),
        row: 0, // temporary, fixed below
        col: colIndex,
        isDeleted: false,
      });
    }

    // assign correct row numbers in one go
    return newCol.map((square, rowIndex) => ({
      ...square,
      row: rowIndex,
    }));
  });
};
