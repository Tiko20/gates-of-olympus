import { FC } from "react";
import { SquareModel } from "../models/square-model";

export const Square: FC<SquareModel> = ({ id, isDeleted }) => {
  return (
    <div
      style={{
        width: "100px",
        boxSizing: "border-box",
        height: "100px",
        border: "1px solid gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        color: isDeleted ? "red" : "black",
      }}
    >
      {!isDeleted ? id : "deleted"}
    </div>
  );
};
