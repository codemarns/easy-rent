import React from "react";
import cn from "classnames";
import { SizeEnum } from "@/app/shared";
import { iconFontStyles } from "@/app/styles";

type TIconFontProps = {
  className?: string;
  name: string | undefined;
  size?: keyof typeof SizeEnum;
};

export const IconFont: React.FC<TIconFontProps> = (props) => {
  const { className, name, size = "md" } = props;
  const { root } = iconFontStyles;
  return (
    <i
      className={cn(
        { ["cm-icon-" + name]: name },
        root.base,
        root.sizes[size],
        className
      )}
    />
  );
};
