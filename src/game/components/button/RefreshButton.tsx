import { FC } from "react";
import "./style/refreshButton.css";

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
      className={`refresh-button ${
        isDisabled && "refresh-button-disabled-state"
      }`}
    ></button>
  );
};
