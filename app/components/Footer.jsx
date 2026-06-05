import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 text-white">
      <div className="section-shell flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-semibold uppercase tracking-[0.28em] text-slate-300">Cathy Liu</span>
        <p>
          &copy; {currentYear} All Rights Reserved.
        </p>
        <p>
          Created with Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
