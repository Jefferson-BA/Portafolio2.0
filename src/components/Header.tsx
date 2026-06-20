import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import { FiHome, FiFolder, FiUser, FiMail } from 'react-icons/fi';

export default function Header() {
  return (
    // Contenedor 'fixed' para que flote sobre el contenido, centrado y con un margen superior
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 pointer-events-none">
      
      {/* La "Píldora" de navegación con Glassmorphism avanzado */}
      <header className="pointer-events-auto bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 rounded-full px-6 py-3 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)]">
        <nav className="flex items-center gap-6 sm:gap-10">
          
          {/* Logo animado */}
          <Link 
            href="/" 
            className="text-xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform"
          >
            {/* Si tu nombre es largo, puedes usar .split(' ')[0] para mostrar solo el primer nombre, o dejarlo normal */}
            {personalInfo.name}
          </Link>

          {/* Lista de enlaces interactivos */}
          <ul className="flex items-center gap-1 sm:gap-2">
            <li>
              <Link 
                href="/" 
                className="group flex items-center gap-2 px-3 py-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all font-medium text-sm"
              >
                <FiHome className="text-lg group-hover:scale-110 transition-transform" /> 
                <span className="hidden md:inline">Inicio</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="group flex items-center gap-2 px-3 py-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all font-medium text-sm"
              >
                <FiFolder className="text-lg group-hover:scale-110 transition-transform" /> 
                <span className="hidden md:inline">Proyectos</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="group flex items-center gap-2 px-3 py-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all font-medium text-sm"
              >
                <FiUser className="text-lg group-hover:scale-110 transition-transform" /> 
                <span className="hidden md:inline">Sobre Mí</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="group flex items-center gap-2 px-3 py-2 rounded-full text-gray-600 hover:text-purple-600 hover:bg-purple-50/80 transition-all font-medium text-sm"
              >
                <FiMail className="text-lg group-hover:scale-110 transition-transform" /> 
                <span className="hidden md:inline">Contacto</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}