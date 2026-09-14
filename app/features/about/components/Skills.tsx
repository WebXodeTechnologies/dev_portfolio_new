import React from "react";
import { TECH_STACK } from "@/lib/constants";

export const Skills: React.FC = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Technical Stack</h2>
      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
