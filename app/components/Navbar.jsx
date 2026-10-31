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
    title: "My Work",
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
    <nav className='fixed top-0 left-0 right-0 z-20 border-b-2 border-dashed border-line bg-paper/85 backdrop-blur-md'>
      <div className='section-shell flex items-center justify-between py-4'>
        <Link href={"/"} className='flex items-center gap-2 font-display text-lg font-bold tracking-wide text-ink'>
          <span aria-hidden className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent-deep bg-accent text-sm text-paper-soft'>C</span>
          Cathy Liu
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button aria-label="Open menu" onClick={() => setNavbarOpen(true)} className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-line bg-paper-soft text-ink-soft transition hover:border-accent hover:text-accent-deep'>
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button aria-label="Close menu" onClick={() => setNavbarOpen(false)} className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-line bg-paper-soft text-ink-soft transition hover:border-accent hover:text-accent-deep'>
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
