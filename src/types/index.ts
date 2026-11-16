export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  role: string;
  period?: string;
  imageNote?: string;
  highlights: string[];
}
