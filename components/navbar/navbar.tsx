import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/active-link";

const navigation = [
  { title: "About", route: "/about" },
  { title: "Pricing", route: "/pricing" },
  { title: "Contact", route: "/contact" },
];

export const Navbar = async () => {
  return (
    <nav className="flex p-2 m-2 rounded">
      <Link className="mr-2 flex flex-1" href="/about">
        <span>Home</span>
      </Link>
      {navigation.map((item) => (
        <ActiveLink key={item.title} path={item.route} text={item.title} />
      ))}
    </nav>
  );
};
