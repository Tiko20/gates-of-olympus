import { FC } from "react";
import { GameBoardModel } from "../../models/game-board.model";
import styles from "../../styles/board.module.css";
import { Square } from "./Square";

export interface BoardProps {
  board: GameBoardModel;
}

export const Board: FC<BoardProps> = ({ board }) => {
  return (
    <div className={styles["board-wrapper"]}>
      {board.map((column, colIndex) => (
        <div className={styles["board-column"]} key={colIndex}>
          {column.map((square, sqIndex) => (
            <Square square={square} key={sqIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};
