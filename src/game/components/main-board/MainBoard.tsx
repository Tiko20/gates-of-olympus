import { useCallback, useState } from "react";
import "./style/mainBoard.css";
import { createBoard } from "../../utils/create-board";
import { SquareModel } from "../../models/square-model";
import { getWinningSymbols } from "../../utils/get-winning-symbols";
import { boardChecker } from "../../utils/board-checker";
import { boardCleaner } from "../../utils/board-cleaner";
import { insertNewSquares } from "../../utils/insert-new-squares";
import { Square } from "../square/Square";
import { gameImages } from "../../constants/constants";
import { RefreshButton } from "../RefreshButton";

export const MainBoard = () => {
  const board = createBoard();
  const [mainBoard, setMainBoard] = useState(board);
  const [isProcessingBoard, setIsProcessingBoard] = useState(false);

  const onRefreshBoard = useCallback(() => {
    const runCycle = (currentBoard: SquareModel[][]) => {
      const winningSymbols = getWinningSymbols(currentBoard);

      if (!winningSymbols.length) {
        setIsProcessingBoard(false);
        return;
      }

      // Step 1: highlight winners
      setTimeout(() => {
        const checkedBoard = boardChecker(currentBoard, winningSymbols);
        setMainBoard(checkedBoard);

        // Step 2: clean board
        setTimeout(() => {
          const cleanedBoard = boardCleaner(checkedBoard);
          setMainBoard(cleanedBoard);

          // Step 3: insert new squares
          setTimeout(() => {
            const nextBoard = insertNewSquares(cleanedBoard);
            setMainBoard(nextBoard);

            // 🔁 Run again if new winners exist
            runCycle(nextBoard);
          }, 600);
        }, 400);
      }, 200);
    };

    setIsProcessingBoard(true);
    setMainBoard(board);
    runCycle(board);
  }, [board]);

  return (
    <div className="main-board-container">
      <div className="board-wrapper">
        {mainBoard.map((column, colIndex) => (
          <div className="board-column" key={colIndex}>
            {column.map((square, sqIndex) => (
              <div className="square-wrapper" key={sqIndex}>
                <Square
                  imgSRC={gameImages[square.id]}
                  isDeleted={square.isDeleted}
                  name={square.id}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="refresh-button-container">
        <RefreshButton
          isDisabled={isProcessingBoard}
          onRefresh={onRefreshBoard}
        />
      </div>
    </div>
  );
};
