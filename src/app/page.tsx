import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import { FiArrowRight, FiUser } from 'react-icons/fi';
// Importamos tu imagen local para asegurar un Score de 100 en LCP
import avatarLocal from './avatar.jpg'; 

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Luces de fondo animadas (Blobs) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] animate-pulse -z-10 pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[100px] animate-pulse delay-700 -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-24 animate-fade-in-up">
          <div className="relative w-40 h-40 mx-auto mb-8">
            {/* Anillo giratorio de gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow blur-md opacity-70"></div>
            <Image
              src={avatarLocal}
              alt={personalInfo.name}
              fill
              className="rounded-full object-cover border-4 border-white relative z-10"
              priority
              sizes="160px"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
            {personalInfo.title}
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {personalInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Ver Proyectos <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-semibold shadow-sm hover:shadow-md hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              <FiUser /> Sobre Mí
            </Link>
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Proyectos Destacados
            </h2>
            <Link href="/projects" className="hidden sm:flex items-center text-blue-600 hover:text-blue-800 font-medium group">
              Ver todos <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects" className="inline-flex items-center text-blue-600 font-medium">
              Ver todos los proyectos <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}