import { FC } from "react";
import "./style/multiplierSymbol.css";

const multipliers = [2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 50, 100, 250, 500];

// Color pattern
const colors = ["green", "red", "purple", "red"];

interface MultiplierSymbolProps {
  value: number;
  size?: number;
}

export const MultiplierSymbol: FC<MultiplierSymbolProps> = ({
  value,
}) => {
  return (
    <div className="multipliers-container">
      <div
        key={value}
        className="multiplier"
        style={{ backgroundColor: "purple"}}

        // style={{ backgroundColor: colors[index % colors.length] }}
      >
        x{value}
      </div>
    </div>
  );
};
