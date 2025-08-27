import { useCallback, useEffect, useMemo, useState } from "react";
import style from "../../styles/playBoard.module.css"
import { createBoardUtil } from "../../utils/create-board.util";
import { getWinningSymbols } from "../../utils/get-winning-symbols.util";
import { boardCheckerUtil } from "../../utils/board-checker.utils";
import { boardCleanerUtil } from "../../utils/board-cleaner.util";
import { insertNewSquares } from "../../utils/insert-new-squares.util";
import { RefreshButton } from "../ui/RefreshButton";
import { GameBoardModel } from "../../models/game-board.model";
import { calculateTotalValueUtil } from "../../utils/calculate-total-values.util";
import { calculateTotalMultiplicationUtil } from "../../utils/calculate-total-multiplication.util";
import { Board } from "../layout/Board";
import { TotalBanner } from "../ui/TotalBanner";
import { BetInfo } from "../ui/BetInfo";
import { WinAmount } from "../ui/WinAmount";
import Zeus from "../../assets/images/zeus.gif";
import Logo from "../../assets/images/gates-of-olympus-logo.png";

export const PlayBoard = () => {
  const amount = 100;
  const board = createBoardUtil();
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
      const checkedBoard = boardCheckerUtil(currentBoard, winningSymbols);
      setMainBoard(checkedBoard);
      setTotalValue((v) => v + calculateTotalValueUtil(winningSymbols));

      // Step 2: clean board
      await delay(400);
      const cleanedBoard = boardCleanerUtil(checkedBoard);
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
      setTotalMultiplication(calculateTotalMultiplicationUtil(finalBoard));
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
    <div className={style["container"]}>
      <div className={style["main-board-container"]}>
        <TotalBanner
          totalAmount={totalAmount}
          totalMultiplication={totalMultiplication}
        />
        <Board board={mainBoard} />
        <div className={style["bottom-section"]}>
          <BetInfo bet={amount} credit={credit} />
          <WinAmount amount={finalScore} />
          <RefreshButton
            isDisabled={isProcessingBoard}
            onRefresh={onRefreshBoard}
          />
        </div>
      </div>
      <div className={style["zeus-logo"]}>
        <div className={style["zeus-image"]}>
          <img src={Logo} alt="Zeus Logo" />
        </div>
        <div className={style["zeus-gif"]}>
          <img src={Zeus} alt="Zeus Animation" />
        </div>
      </div>
    </div>
  );
};
