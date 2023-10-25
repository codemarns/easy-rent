"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "./components";
import { headerStyles } from "@/app/styles";

export const Header = () => {
  const { root } = headerStyles;

  return (
    <header className={root.base}>
      <div className={root.container.base}>
        <Link href={"/"}>
          <Image
            width={130}
            height={0}
            alt="Picture of the author"
            src="/easy-rent-high-resolution-logo-transparent.png"
          />
        </Link>

        <Nav />
      </div>
    </header>
  );
};
