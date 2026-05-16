import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-400 transition hover:bg-white/5 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
