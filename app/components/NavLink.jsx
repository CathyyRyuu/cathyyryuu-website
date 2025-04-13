import React from 'react';
import Link from "next/link";

const NavLink = ({ href, title}) => {
  return (
    <Link 
      href={href} 
      className='rounded-md px-2 py-2 text-md font-medium text-gray-300 uppercase hover:bg-gray-700 hover:text-white'
    >
      {title}
    </Link>
  );
};

export default NavLink;