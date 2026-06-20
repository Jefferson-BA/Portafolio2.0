import Image from 'next/image';
import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import avatarLocal from '../avatar.jpg';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-16 relative z-10 animate-fade-in-up">
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="md:flex flex-row">
            
            <div className="md:w-1/2 relative h-[400px] md:h-auto overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
              <Image
                src={avatarLocal} 
                alt={personalInfo.name}
                fill
                priority 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center bg-gradient-to-br from-white/50 to-blue-50/30">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
                Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mí</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
                {personalInfo.title}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Soy un desarrollador apasionado por crear soluciones web innovadoras y eficientes. Me especializo en tecnologías modernas como Next.js, React y TypeScript.
                </p>
                <p>
                  Mi objetivo es transformar ideas complejas en interfaces de usuario intuitivas y experiencias digitales excepcionales, aplicando siempre las mejores prácticas de optimización y SEO.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="bg-white/80 p-4 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Tecnologías</h3>
                  <p className="text-blue-600 text-sm font-medium">React, Next.js, TS</p>
                </div>
                <div className="bg-white/80 p-4 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Enfoque</h3>
                  <p className="text-purple-600 text-sm font-medium">UX/UI & SEO</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}