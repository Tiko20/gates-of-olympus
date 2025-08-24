import { useCallback, useState } from "react";
import "./style/mainBoard.css";
import { createBoard } from "../../utils/create-board";
import { getWinningSymbols } from "../../utils/get-winning-symbols";
import { boardChecker } from "../../utils/board-checker";
import { boardCleaner } from "../../utils/board-cleaner";
import { insertNewSquares } from "../../utils/insert-new-squares";
import { Square } from "../square/Square";
import { RefreshButton } from "../RefreshButton";
import { GameBoardModel } from "../../models/game-board.model";
import { calculateTotalValue } from "../../utils/calculate-total-values";
import { calculateTotalMultiplication } from "../../utils/calculate-total-multiplication";

export const MainBoard = () => {
  const board = createBoard();
  const [mainBoard, setMainBoard] = useState<GameBoardModel>(board);
  const [isProcessingBoard, setIsProcessingBoard] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [totalMultiplication, setTotalMultiplication] = useState(0);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const onRefreshBoard = useCallback(() => {
    const runCycle = async (
      currentBoard: GameBoardModel
    ): Promise<GameBoardModel> => {
      const winningSymbols = getWinningSymbols(currentBoard);

      if (!winningSymbols.length) {
        return currentBoard; // 🚨 stop recursion
      }

      // Step 1: highlight winners
      await delay(200);
      const checkedBoard = boardChecker(currentBoard, winningSymbols);
      setMainBoard(checkedBoard);
      setTotalValue((v) => v + calculateTotalValue(winningSymbols));

      // Step 2: clean board
      await delay(400);
      const cleanedBoard = boardCleaner(checkedBoard);
      setMainBoard(cleanedBoard);

      // Step 3: insert new squares
      await delay(600);
      const nextBoard = insertNewSquares(cleanedBoard);
      setMainBoard(nextBoard);

      // 🔁 loop again
      return runCycle(nextBoard);
    };

    (async () => {
      setIsProcessingBoard(true);
      setTotalValue(0);
      setTotalMultiplication(0);
      setMainBoard(board);

      // run cascade until no more winners
      const finalBoard = await runCycle(board);
      // ✅ only now apply multiplier
      await delay(500);
      setTotalMultiplication(calculateTotalMultiplication(finalBoard));
      setIsProcessingBoard(false);
    })();
  }, [board]);

  const finalScore =
    totalMultiplication > 0 ? totalValue * totalMultiplication : totalValue;

  return (
    <div className="main-board-container">
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
        {finalScore}
      </h2>
      <div className="board-wrapper">
        {mainBoard.map((column, colIndex) => (
          <div className="board-column" key={colIndex}>
            {column.map((square, sqIndex) => (
              <Square square={square} key={sqIndex} />
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
