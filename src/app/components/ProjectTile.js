"use client";

import Image from 'next/image';

const ProjectTile = ({ role, projectName, projectLogo, url, className }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <li 
      className={className}
      onClick={handleClick}
    >
      <Image 
        src={projectLogo} 
        width={50} 
        height={50} 
        alt="project logo" 
        className="aspect-square rounded-full mr-2 bg-background border-2 border-[#362a3f] p-1" 
      />
      <div className="flex flex-col">
        <span>{role}</span>
        <span className="font-bold text-left">{projectName}</span>
      </div>
    </li>
  );
};

export default ProjectTile;
