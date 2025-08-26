import { FC } from "react";
import "./style/winAmount.css"; 

interface WinAmountProps {
  amount: number;
}

export const WinAmount: FC<WinAmountProps> = ({ amount }) => {
  return (
    <div className="win-amount-container">
      <span className="win-amount-text">
        {amount ? `$${amount.toFixed(2)}` : "Good Luck!"}
      </span>
    </div>
  );
};
