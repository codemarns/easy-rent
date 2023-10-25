import React from "react";
import cn from "classnames";
import { Button } from "..";
import { Section } from "@/app/common";
import { heroStyles } from "@/app/styles";

type Title = {
  first_line: string;
  last_line: string;
};

type ImageOwner = {
  url: string;
  name: string;
};

type Hero = {
  title: Title;
  message: string;
  // image: string;
  image_owner: ImageOwner;
};

type HeroProps = {
  data: Hero;
  image_position?: "left" | "right";
};

export const Hero: React.FC<HeroProps> = (props) => {
  const { data, image_position = "right" } = props;
  const { title, message, image_owner } = data || {};

  const { root, container, column } = heroStyles;

  return (
    <Section id="hero" className={cn(root.base, "bg_image")}>
      <Section
        size="lg"
        type="inner"
        id="hero-container-inner"
        className={container.base}
      >
        <div
          className={cn(
            column.details.base,
            image_position === "right" ? column.order[1] : column.order[2]
          )}
        >
          <div className={column.details.inner.base}>
            <h1 className={column.details.inner.title.base}>
              <span className={column.details.inner.title.first_line}>
                {title.first_line}
              </span>
              <span className={column.details.inner.title.last_line}>
                {title.last_line}
              </span>
            </h1>
            <p className={column.details.inner.message.base}>{message}</p>
            <Button
              size="xl"
              color="warning"
              corner="rounded"
              label="Rent Now"
              iconPosition="right"
              iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              className={column.details.inner.cta.base}
            />
          </div>
        </div>

        <div
          className={cn(
            column.image.base,
            image_position === "right" ? column.order[2] : column.order[1],
            "bg_image"
          )}
        >
          <p className={column.image.image_owner.base}>
            <a href={image_owner.url}>Image by {image_owner.name}</a> on Freepik
          </p>
        </div>
      </Section>
    </Section>
  );
};
