import React from "react";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerStyles } from "@/app/styles";

export const Nav = () => {
  const pathname = usePathname();

  const { root } = headerStyles;
  const nav = root.container.nav;

  return (
    <nav className={nav.base}>
      <ul className={nav.ul.base}>
        <li className={nav.ul.li.base}>
          <Link
            replace
            href={"/"}
            className={cn(
              nav.ul.li.link.base,
              pathname === "/" ? nav.ul.li.link.active : nav.ul.li.link.inactive
            )}
          >
            Home
          </Link>
        </li>

        <li className={nav.ul.li.base}>
          <Link
            replace
            href={"/pages/about"}
            className={cn(
              nav.ul.li.link.base,
              pathname === "/pages/about"
                ? nav.ul.li.link.active
                : nav.ul.li.link.inactive
            )}
          >
            About
          </Link>
        </li>

        <li className={nav.ul.li.base}>
          <Link
            replace
            href={"/pages/rents"}
            className={cn(
              nav.ul.li.link.base,
              pathname === "/pages/rents"
                ? nav.ul.li.link.active
                : nav.ul.li.link.inactive
            )}
          >
            Rents
          </Link>
        </li>
      </ul>
    </nav>
  );
};
