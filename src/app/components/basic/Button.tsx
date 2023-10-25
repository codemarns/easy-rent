import React from "react";
import cn from "classnames";
import { Icon } from "./Icon";
import { buttonStyles } from "@/app/styles";
import { DefaultColorEnum, SizeEnum } from "@/app/shared";

type TButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  iconPath?: string;
  iconPosition?: "left" | "right";
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  layout?: "auto" | "block";
  type?: "button" | "reset" | "submit";
  variant?: "solid" | "outline" | "ghost";
  corner?: "flat" | "soft-edge" | "rounded";
  size?: keyof typeof SizeEnum;
  color?: keyof typeof DefaultColorEnum;
};

export const Button: React.FC<TButtonProps> = (props) => {
  const {
    className,
    iconPath,
    label,
    children,
    id = "button",
    size = "md",
    layout = "auto",
    type = "button",
    color = "primary",
    variant = "solid",
    corner = "soft-edge",
    iconPosition = "left",
    disabled = false,
    loading = false,
    ...restProps
  } = props;

  const { root } = buttonStyles;

  const baseClasses = cn(
    "cm-button",
    root.base,
    root.sizes[size],
    root.corners[corner],
    root.variants[variant].colors[color].base,
    disabled || loading
      ? [root.cursors.disable, root.variants[variant].colors[color].disable]
      : [root.cursors.default, root.variants[variant].colors[color].default],
    {
      [root.block.base]: layout === "block",
      [root.widthSizes[size]]: !(label || children),
    },
    className
  );

  const newColor = variant === "solid" ? "white" : color;

  return (
    <button
      {...restProps}
      id={id}
      type={type}
      className={baseClasses}
      aria-disabled={disabled || loading}
      aria-label={label}
    >
      {iconPosition === "left" && iconPath && (
        <Icon
          path={iconPath}
          color={newColor}
          className={cn({ [root.icon.base]: loading })}
        />
      )}

      {loading ? "Loading..." : label || children}

      {iconPosition === "right" && iconPath && (
        <Icon
          path={iconPath}
          color={newColor}
          className={cn({ [root.icon.base]: loading })}
        />
      )}
    </button>
  );
};
