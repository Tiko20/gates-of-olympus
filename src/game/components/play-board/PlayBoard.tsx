import { useCallback, useEffect, useMemo, useState } from "react";
import "./style/playBoard.css";
import { createBoard } from "../../utils/create-board";
import { getWinningSymbols } from "../../utils/get-winning-symbols";
import { boardChecker } from "../../utils/board-checker";
import { boardCleaner } from "../../utils/board-cleaner";
import { insertNewSquares } from "../../utils/insert-new-squares";
import { RefreshButton } from "../button/RefreshButton";
import { GameBoardModel } from "../../models/game-board.model";
import { calculateTotalValue } from "../../utils/calculate-total-values";
import { calculateTotalMultiplication } from "../../utils/calculate-total-multiplication";
import { Board } from "../board/Board";
import { TotalBanner } from "../total-banner/TotalBanner";
import { BetInfo } from "../bet-info/BetInfo";
import { WinAmount } from "../win-amount/WinAmount";
import Zeus from "../../assets/images/zeus.gif";
import Logo from "../../assets/images/gates-of-olympus-logo.png";

export const PlayBoard = () => {
  const amount = 100;
  const board = createBoard();
  const [credit, setCredit] = useState(10000);
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
      setCredit((value) => value - amount);
      setMainBoard(board);

      // run cascade until no more winners
      const finalBoard = await runCycle(board);
      // ✅ only now apply multiplier
      await delay(500);
      setTotalMultiplication(calculateTotalMultiplication(finalBoard));
      setIsProcessingBoard(false);
    })();
  }, [amount, board]);

  const totalAmount = useMemo(() => amount * totalValue, [amount, totalValue]);
  const finalScore = useMemo(
    () =>
      totalMultiplication > 0 ? totalMultiplication * totalAmount : totalAmount,
    [totalAmount, totalMultiplication]
  );
  useEffect(() => {
    if (!isProcessingBoard) {
      setCredit((value) => value + finalScore);
    }
  }, [finalScore, isProcessingBoard]);

  return (
    <div className="container">
      <div className="main-board-container">
        <TotalBanner
          totalAmount={totalAmount}
          totalMultiplication={totalMultiplication}
        />
        <Board board={mainBoard} />
        <div className="bottom-section">
          <BetInfo bet={amount} credit={credit} />
          <WinAmount amount={finalScore} />
          <RefreshButton
            isDisabled={isProcessingBoard}
            onRefresh={onRefreshBoard}
          />
        </div>
      </div>
      <div className="zeus-logo">
        <div className="zeus-image">
          <img src={Logo} alt="Zeus Logo" />
        </div>
        <div className="zeus-gif">
          <img src={Zeus} alt="Zeus Animation" />
        </div>
      </div>
    </div>
  );
};
