import { FC, useEffect, useState } from "react";
import styles from "../../styles/totalBanner.module.css";

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
    <div className={styles["total-amount-banner"]}>
      <div className={styles["tumble-win-title"]}>tumble win</div>
      <div className={styles["tumble-win-badge"]}>
        {displayedScore ? "$ " + displayedScore : "Gates of Olympus"}
      </div>
    </div>
  );
};
