import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectCard from '@/components/projects/ProjectCard';
export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora los proyectos de Jefferson en una galería interactiva.',
};
export default function ProjectsPage() {
  return (
    <div className="shell page-content">
      <p className="eyebrow">01 / PORTAFOLIO</p>
      <h1>
        Ideas que toman <span>forma.</span>
      </h1>
      <p className="page-intro">
        Una mirada a cada proyecto. Explora el carrusel y descubre los detalles.
      </p>
      <ProjectGallery />
      {projects.length > 0 && (
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index < 2}
            />
          ))}
        </div>
      )}
    </div>
  );
}
