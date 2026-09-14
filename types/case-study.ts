export interface CaseStudySection {
  title: string;
  content: string | string[];
}

export interface CaseStudyArchitectureLayer {
  name: string;
  description: string;
  technologies: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client?: string;
  role: string;
  timeline: string;
  technologies: string[];
  problem: CaseStudySection;
  solution: CaseStudySection;
  architecture: CaseStudyArchitectureLayer[];
  challenges: CaseStudySection[];
  results: CaseStudySection[];
  lessons: string[];
  heroImage?: string;
  liveUrl?: string;
  repoUrl?: string;
}
