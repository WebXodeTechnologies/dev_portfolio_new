import React from "react";
import { CaseStudyArchitectureLayer } from "@/types/case-study";

interface ArchitectureProps {
  layers?: CaseStudyArchitectureLayer[];
}

export const Architecture: React.FC<ArchitectureProps> = ({ layers = [] }) => {
  return (
    <div className="py-8">
      <h3 className="text-xl font-semibold text-white mb-4">System Architecture</h3>
      {layers.map((layer, index) => (
        <div key={index} className="mb-4 border-l-2 border-neutral-700 pl-4">
          <h4 className="text-lg font-medium text-white">{layer.name}</h4>
          <p className="text-sm text-neutral-400">{layer.description}</p>
        </div>
      ))}
    </div>
  );
};
