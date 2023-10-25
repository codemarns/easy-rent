import React from "react";
import cn from "classnames";
import { sectionStyles } from "@/app/styles";

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  type?: "inner" | "outer";
  size?: "sm" | "md" | "lg" | "xl";
};

export const Section: React.FC<SectionProps> = (props) => {
  const { id, className, type = "outer", size = "xl", children } = props;

  const { root } = sectionStyles;

  return (
    <section
      id={id + "-section"}
      className={cn(
        { [id + "-section"]: id },
        className,
        root.base,
        root.size[size],
        root.type[type]
      )}
    >
      {children}
    </section>
  );
};
