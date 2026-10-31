import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-ink">
      <div className="section-shell flex flex-col gap-3 py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-base font-bold text-ink-soft">Cathy Liu</span>
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
