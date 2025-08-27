import { FC } from "react";
import styles from "../../styles/multiplierSymbol.module.css";
import { MultiplierModel } from "../../models/multiplier.model";
import { MultiplierGradients } from "../../configs/multiplier-gradients";

interface MultiplierSymbolProps {
  square: MultiplierModel;
}

export const MultiplierSymbol: FC<MultiplierSymbolProps> = ({ square }) => {
  return (
    <div className={styles["multipliers-container"]}>
      <div
        className={styles["multiplier"]}
        style={{
          backgroundImage: MultiplierGradients[square.color],
        }}
      >
        X{square.value}
      </div>
    </div>
  );
};
