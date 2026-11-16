import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import { projects } from '@/data/projects';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  return project
    ? { title: project.title, description: project.description }
    : { title: 'Proyecto no encontrado' };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();

  return (
    <div className="shell page-content">
      <Link href="/projects" className="text-link">
        <FiArrowLeft /> Volver a proyectos
      </Link>
      <article>
        <p className="eyebrow detail-category">{project.category}</p>
        <h1 className="detail-title">{project.title}</h1>
        <div className="project-meta">
          <span>{project.role}</span>
          {project.period && <span>{project.period}</span>}
        </div>
        <figure>
          <div className="detail-cover">
            <Image
              src={project.image}
              alt={`Portada ilustrativa de ${project.title}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          <figcaption className="image-note">{project.imageNote}</figcaption>
        </figure>
        <p className="detail-copy">{project.description}</p>
        <section className="detail-section">
          <h2>Mi participación</h2>
          <ul className="project-highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {project.technologies.length > 0 && (
          <section className="detail-section">
            <h2>Tecnologías utilizadas</h2>
            <div className="skills">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>
        )}
        <div className="hero-actions">
          {project.demoUrl && (
            <a
              className="button button-primary"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver demo <FiArrowUpRight />
            </a>
          )}
          {project.githubUrl && (
            <a
              className="button button-quiet"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código <FiArrowUpRight />
            </a>
          )}
          <Link href="/contact" className="text-link">
            Conversemos sobre este proyecto <FiArrowUpRight />
          </Link>
        </div>
      </article>
    </div>
  );
}
