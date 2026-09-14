export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  year: number | string;
  technologies: string[];
  image?: string;
  href?: string;
  featured?: boolean;
}

export interface WorkCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

export interface WorkGridProps {
  projects: Project[];
  className?: string;
}
