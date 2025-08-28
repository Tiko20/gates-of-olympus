import { FC, useEffect, useState } from "react";
import styles from "../../styles/total-banner.module.css";

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
    if (finalScore === 0) {
      setDisplayedScore(0);
      return;
    }

    let start: number | null = null;
    const startValue = displayedScore; // continue from current value
    const diff = finalScore - startValue;
    const duration = 300;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayedScore(Math.floor(startValue + diff * progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
