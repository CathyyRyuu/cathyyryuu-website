import React from 'react';

const ProjectTag = ({ name, onClick, isSelected}) => {
  const buttonStyles = isSelected
  ? 'border-sky-300 bg-sky-300/10 text-white'
  : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white'
  return (
    <button className={`${buttonStyles} cursor-pointer whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold transition`}
    onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
