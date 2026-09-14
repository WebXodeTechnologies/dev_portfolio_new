import React from "react";
import { Project } from "@/types/project";
import { WorkCard } from "./WorkCard";

interface FeaturedWorkProps {
  project: Project;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ project }) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-white mb-6">Featured Project</h2>
      <WorkCard project={project} className="border-neutral-600" />
    </div>
  );
};
