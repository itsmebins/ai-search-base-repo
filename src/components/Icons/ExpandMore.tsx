import React from "react";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({
  color = "currentColor",
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
  );
};

export const ExpandMore = React.memo(Icon);
