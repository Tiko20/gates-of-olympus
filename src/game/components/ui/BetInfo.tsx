import { FC } from "react";
import styles from "../../styles/betInfo.module.css";

interface BetInfoProps {
  bet: number;
  credit: number;
}

export const BetInfo: FC<BetInfoProps> = ({ bet, credit }) => {
  return (
    <div className={styles["bet-info-container"]}>
      <div className="bet-info-item">
        <span className="label">Credit:</span>
        <span className="value">${credit.toFixed(2)}</span>
      </div>
      <div className="bet-info-item">
        <span className="label">Bet:</span>
        <span className="value">${bet.toFixed(2)}</span>
      </div>
    </div>
  );
};
