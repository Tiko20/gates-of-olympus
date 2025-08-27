import { FC } from "react";
import styles from "../../styles/symbolCard.module.css";
import { SymbolModel } from "../../models/symbol.model";
import { symbolsImages } from "../../configs/symbols-images.config";

interface SymbolCardProps {
  square: SymbolModel;
}

const SymbolCard: FC<SymbolCardProps> = ({ square }) => {
  return (
    <div className={styles["symbol-card"]}>
      {square.isDeleted ? (
        <div className={styles["boom"]}></div>
      ) : (
        <img
          src={symbolsImages[square.name]}
          alt={square.name}
          className={styles["symbol-card-image"]}
        />
      )}
    </div>
  );
};

export default SymbolCard;
