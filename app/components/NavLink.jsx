import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-2 font-display text-sm font-bold text-ink-soft transition hover:bg-accent-pale hover:text-accent-deep"
    >
      {title}
    </Link>
  );
};

export default NavLink;
