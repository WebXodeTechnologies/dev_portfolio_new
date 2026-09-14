import React from "react";
import { CaseStudy } from "@/types/case-study";

interface CaseStudyHeroProps {
  caseStudy: Partial<CaseStudy>;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ caseStudy }) => {
  return (
    <div className="py-12 border-b border-neutral-800">
      <h1 className="text-3xl sm:text-5xl font-bold text-white">{caseStudy.title}</h1>
      {caseStudy.subtitle && (
        <p className="mt-4 text-xl text-neutral-400">{caseStudy.subtitle}</p>
      )}
    </div>
  );
};
