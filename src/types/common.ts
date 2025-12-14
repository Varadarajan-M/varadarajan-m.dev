export type NavLinkProps = {
  href: string;
  label: string;
  type: "link" | "cta_link";
  onClick?: () => void;
  className?: string;
};

export type Project = {
  type: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  github: string;
  size: "small" | "large";
  features?: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Skill = {
  name: string;
  level: number;
};
