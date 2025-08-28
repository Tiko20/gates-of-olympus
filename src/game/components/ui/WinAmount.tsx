import { FC } from "react";
import styles from "../../styles/win-amount.module.css";

interface WinAmountProps {
  amount: number;
}

export const WinAmount: FC<WinAmountProps> = ({ amount }) => {
  return (
    <div className={styles["win-amount-container"]}>
      <span className={styles["win-amount-text"]}>
        {amount ? `$${amount.toFixed(2)}` : "Good Luck!"}
      </span>
    </div>
  );
};
