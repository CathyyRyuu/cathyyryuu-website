import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col items-center gap-2 border-t border-white/10 bg-[#08090b]/95 py-5 backdrop-blur-xl'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
