import React from "react";

export const Timeline: React.FC = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Milestones</h2>
      <ul className="space-y-4 text-sm text-neutral-400">
        <li>
          <span className="text-white font-medium">2026</span> — Advanced Cloud &amp; DevOps Engineering
        </li>
        <li>
          <span className="text-white font-medium">2024</span> — Full-Stack Web Development
        </li>
      </ul>
    </div>
  );
};
