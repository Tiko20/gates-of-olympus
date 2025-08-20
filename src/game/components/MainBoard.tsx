import { useCallback, useState } from "react";
import { createBoard } from "../utils/create-board";
import { RefreshButton } from "./RefreshButton";
import { Square } from "./Square";
import { boardCleaner } from "../utils/board-cleaner";
import { getWinningSymbols } from "../utils/get-winning-symbols";
import { boardChecker } from "../utils/board-checker";
import { insertNewSquares } from "../utils/insert-new-squares";

export const MainBoard = () => {
  const board = createBoard();
  const [mainBoard, setMainBoard] = useState(board);

  const onRefreshBoard = useCallback(() => {
    // Step 0: reset board
    setMainBoard(board);

    const winningSymbols = getWinningSymbols(board);
    if (!winningSymbols.length) return;

    // Step 1: check board after  200ms
    setTimeout(() => {
      const checkedBoard = boardChecker(board, winningSymbols);
      setMainBoard(checkedBoard);

      // Step 2: clean board after  400ms
      setTimeout(() => {
        const cleanedBoard = boardCleaner(board);
        setMainBoard(cleanedBoard);

        // Step 3: insert new squares after 600ms
        setTimeout(() => {
          const finalBoard = insertNewSquares(cleanedBoard);
          setMainBoard(finalBoard);
          console.log("Final board:", finalBoard);
        }, 600);
      }, 400);
    }, 200);
  }, [board]);

  return (
    <div>
      <div
        style={{
          width: "600px",
          height: "500px",
          border: "1px solid black",
          display: "flex",
        }}
      >
        {mainBoard.map((el, index) => {
          return (
            <div
              style={{
                height: "100%",
                width: `${100 / 5}%`,
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
              key={index}
            >
              {el.map((square, ind) => (
                <Square {...square} key={ind} />
              ))}
            </div>
          );
        })}
      </div>
      <RefreshButton isDisabled={false} onRefresh={onRefreshBoard} />
    </div>
  );
};
