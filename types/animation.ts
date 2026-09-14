export interface RevealOptions {
  distance?: number;
  duration?: number;
  delay?: number;
}

export interface AnimationProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export interface TextRevealProps extends AnimationProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}
