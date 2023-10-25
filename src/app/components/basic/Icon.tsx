import React from "react";
import cn from "classnames";
import { iconStyles } from "@/app/styles";

export type IconProps = {
  className?: string;
  path: string[] | string;
  size?: "sm" | "md" | "lg" | "xl";
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "default"
    | "black"
    | "white";
};

export const Icon: React.FC<IconProps> = (props) => {
  const {
    className,
    path,
    size: propSize = "md",
    color: propColor = "default",
  } = props;

  const {
    root: { base, size, color },
  } = iconStyles;

  const newArray = Array.isArray(path);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cn(base, size[propSize], color[propColor], className)}
    >
      {newArray ? (
        path.map((newPath, index) => (
          <path
            key={index}
            d={newPath}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))
      ) : (
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
};
