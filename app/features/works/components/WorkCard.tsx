import React from "react";
import Link from "next/link";
import { WorkCardProps } from "@/types/project";

export const WorkCard: React.FC<WorkCardProps> = ({ project, className = "" }) => {
  return (
    <div
      className={`group border border-neutral-800 bg-neutral-950 p-6 rounded-sm transition-colors hover:border-neutral-600 ${className}`}
    >
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="text-xl font-semibold text-white group-hover:text-neutral-200">
        <Link href={`/case-studies/${project.slug}`}>{project.title}</Link>
      </h3>
      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
