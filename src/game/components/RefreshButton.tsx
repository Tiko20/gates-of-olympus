import { FC } from "react";

export interface RefreshButtonProps {
  onRefresh: () => void;
  isDisabled: boolean;
}

export const RefreshButton: FC<RefreshButtonProps> = ({
  onRefresh,
  isDisabled,
}) => {
  return (
    <button disabled={isDisabled} onClick={onRefresh}>
      Refresh
    </button>
  );
};
