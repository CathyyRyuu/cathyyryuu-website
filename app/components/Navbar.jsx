"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-20 border-b border-white/10 bg-[#08090b]/85 backdrop-blur-xl'>
      <div className='section-shell flex items-center justify-between py-4'>
        <Link href={"/"} className='text-sm font-semibold uppercase tracking-[0.32em] text-white'>
          Cathy Liu
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button aria-label="Open menu" onClick={() => setNavbarOpen(true)} className='flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:border-sky-300 hover:text-white'>
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button aria-label="Close menu" onClick={() => setNavbarOpen(false)} className='flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:border-sky-300 hover:text-white'>
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
