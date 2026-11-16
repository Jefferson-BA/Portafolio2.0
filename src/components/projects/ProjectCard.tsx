import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '@/types/project';
export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-image">
        <Image
          src={project.image}
          alt={`Portada ilustrativa de ${project.title}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="project-card-copy">
        <span className="eyebrow">{project.category}</span>
        <h2>
          {project.title}
          <FiArrowUpRight />
        </h2>
        <p>{project.description}</p>
        <div className="skills">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
