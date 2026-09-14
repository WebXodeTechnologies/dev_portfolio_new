import React from "react";
import { WorkGridProps } from "@/types/project";
import { WorkCard } from "./WorkCard";

export const WorkGrid: React.FC<WorkGridProps> = ({ projects, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {projects.map((project) => (
        <WorkCard key={project.id} project={project} />
      ))}
    </div>
  );
};
