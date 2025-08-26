import { FC, useEffect, useState } from "react";
import "./style/totalBanner.css";

interface TotalBannerProps {
  totalMultiplication: number;
  totalAmount: number;
}

export const TotalBanner: FC<TotalBannerProps> = ({
  totalAmount,
  totalMultiplication,
}) => {
  const finalScore =
    totalMultiplication > 0 ? totalMultiplication * totalAmount : totalAmount;

  const [displayedScore, setDisplayedScore] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const duration = 800; // animation duration in ms

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayedScore(Math.floor(finalScore * progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [finalScore]);

  return (
    <div className="total-amount-banner">
      <div className="tumble-win-title">tumble win</div>
      <div className="tumble-win-badge">
        {displayedScore ? "$ " + displayedScore : "Gates of Olympus"}
      </div>
    </div>
  );
};
