"use client";

import React from "react";
import Link from "next/link";
import styles from "./active-link.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink: React.FC<Props> = ({ path, text }) => {
  const pathname = usePathname();
  return (
    <Link
      key={text}
      className={`${styles.link} ${
        pathname === path ? styles["active-link"] : ""
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};
