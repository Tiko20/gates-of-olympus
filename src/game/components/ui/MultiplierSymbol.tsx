import { FC } from "react";
import { multiplierImagesConfig } from "../../configs/multiplier.config";
import { MultiplierModel } from "../../models/multiplier.model";
import styles from "../../styles/multiplier-symbol.module.css";

interface MultiplierSymbolProps {
  square: MultiplierModel;
}

export const MultiplierSymbol: FC<MultiplierSymbolProps> = ({ square }) => {
  return (
    <div className={styles["multipliers-container"]}>
      <div className={styles["multiplier"]}>
        <img
          src={multiplierImagesConfig[square.value]}
          alt={`total-${multiplierImagesConfig[square.value]}`}
        />
      </div>
    </div>
  );
};
