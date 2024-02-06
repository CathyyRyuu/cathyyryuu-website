import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between mx-auto">
        <span className="text-center">LOGO</span>
        <p className="text-slate-600 text-center">
          &copy; {currentYear} All Rights Reserved.
        </p>
        <p className="text-slate-600 text-center">
          Created with Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
