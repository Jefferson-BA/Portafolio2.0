import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

// 1. Meta tags específicos para la página de contacto
export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}. Hablemos sobre proyectos, colaboraciones o nuevas oportunidades.`,
  openGraph: {
    title: 'Contacto - Portafolio',
    description: 'Ponte en contacto conmigo para oportunidades laborales o proyectos.',
    url: `${personalInfo.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Ponte en Contacto
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          ¿Tienes un proyecto en mente o simplemente quieres saludar? Llena el formulario y me pondré en contacto contigo lo antes posible.
        </p>

        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
              placeholder="¿En qué te puedo ayudar?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-200"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}