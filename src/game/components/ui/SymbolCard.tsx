import { FC } from "react";
import { symbolsImagesConfig } from "../../configs/symbols-images.config";
import { SymbolModelModel } from "../../models/symbol.model";
import styles from "../../styles/symbol-card.module.css";

interface SymbolCardProps {
  square: SymbolModelModel;
}

const SymbolCard: FC<SymbolCardProps> = ({ square }) => {
  return (
    <div className={styles["symbol-card"]}>
      {square.isDeleted ? (
        <div className={styles["boom"]}></div>
      ) : (
        <img
          src={symbolsImagesConfig[square.name]}
          alt={square.name}
          className={styles["symbol-card-image"]}
        />
      )}
    </div>
  );
};

export default SymbolCard;
