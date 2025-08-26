import { FC } from "react";
import { GameBoardModel } from "../../models/game-board.model";
import { Square } from "../square/Square";
import "./style/board.css";

export interface BoardProps {
  board: GameBoardModel;
}

export const Board: FC<BoardProps> = ({ board }) => {
  return (
    <div className="board-wrapper">
      {board.map((column, colIndex) => (
        <div className="board-column" key={colIndex}>
          {column.map((square, sqIndex) => (
            <Square square={square} key={sqIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};
