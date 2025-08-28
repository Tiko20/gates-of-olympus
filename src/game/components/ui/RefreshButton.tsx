import { FC } from "react";
import styles from "../../styles/refresh-button.module.css";

export interface RefreshButtonProps {
  onRefresh: () => void;
  isDisabled: boolean;
}

export const RefreshButton: FC<RefreshButtonProps> = ({
  onRefresh,
  isDisabled,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onRefresh}
      className={`${styles["refresh-button"]} ${
        isDisabled && styles["refresh-button-disabled-state"]
      }`}
    ></button>
  );
};
