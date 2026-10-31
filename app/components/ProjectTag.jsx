import React from 'react';

const ProjectTag = ({ name, onClick, isSelected}) => {
  const buttonStyles = isSelected
  ? 'toggle-active'
  : 'toggle-idle'
  return (
    <button className={`${buttonStyles} toggle cursor-pointer whitespace-nowrap px-5 py-2 text-sm`}
    onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
