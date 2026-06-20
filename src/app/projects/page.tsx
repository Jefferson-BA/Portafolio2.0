import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora mi colección de proyectos de desarrollo web y aplicaciones',
  openGraph: {
    title: 'Proyectos - Portafolio',
    description: 'Explora mi colección de proyectos de desarrollo web',
    images: ['/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Luces de fondo dinámicas (Blobs) coherentes con el diseño del Home */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-[120px] animate-pulse -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-400/15 rounded-full blur-[100px] animate-pulse delay-700 -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 relative z-10 animate-fade-in-up">
        {/* Título moderno con gradiente de color */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Proyectos</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12 font-light">
          Una colección de proyectos en los que he trabajado aplicando las mejores prácticas de desarrollo.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CORRECCIÓN DE LCP: Extraemos el 'index' en el map */}
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              // Pasamos true únicamente a las primeras 2 tarjetas superiores
              // Esto le indica a Next.js que realice una carga inmediata (eager/preload)
              priority={index < 2} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}