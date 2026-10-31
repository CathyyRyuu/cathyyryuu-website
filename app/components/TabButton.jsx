import React from 'react';
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children}) => {
  const buttonClasses = active
    ? 'toggle-active'
    : 'toggle-idle'
  return (
    <button
      onClick={selectTab}
      className={`toggle relative px-4 py-2 text-sm ${buttonClasses}`}
    >
      <p>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className='absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-accent'
      ></motion.div>
    </button>
  )
}

export default TabButton;
