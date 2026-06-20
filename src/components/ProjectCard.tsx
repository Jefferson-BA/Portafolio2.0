import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { FiArrowRight } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
  priority?: boolean; // <-- NUEVA PROPIEDAD
}

// Recibimos priority y por defecto es false
export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white rounded-xl shadow-sm hover:-translate-y-3 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          // REEMPLAZAMOS loading="lazy" por la propiedad priority de Next.js
          priority={priority} 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-gray-50 text-gray-600 border border-gray-200 px-3 py-1 rounded-full font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
          Ver detalles <FiArrowRight className="ml-1" />
        </div>
      </div>
    </Link>
  );
}