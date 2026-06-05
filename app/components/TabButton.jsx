import React from 'react';
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children}) => {
  const buttonClasses = active
    ? 'border-sky-300 bg-sky-300/10 text-white'
    : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white'
  return (
    <button
      onClick={selectTab}
      className={`relative rounded-full border px-4 py-2 text-sm font-semibold transition ${buttonClasses}`}
    >
      <p>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className='absolute inset-x-3 bottom-1 h-px bg-sky-300'
      ></motion.div>
    </button>
  )
}

export default TabButton;
