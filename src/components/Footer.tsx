import { personalInfo } from '@/lib/data';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 relative overflow-hidden">
      {/* Luz de fondo sutil (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 hover:scale-125 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-purple-400 hover:scale-125 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}