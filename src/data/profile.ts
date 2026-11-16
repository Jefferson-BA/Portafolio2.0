import { safeExternalUrl } from '@/lib/links';

// Contenido basado en CV.pdf. Añadir enlaces solo cuando estén confirmados.
export const personalInfo = {
  name: 'Jefferson',
  fullName: 'Jefferson Bautista Aguilera',
  title: 'Desarrollador full stack y móvil',
  description:
    'Estudiante de Diseño y Desarrollo de Software en TECSUP. Desarrollo aplicaciones web y móviles, conectando interfaces, servicios web y bases de datos para resolver necesidades reales.',
  bio: 'Soy estudiante del sexto ciclo de Diseño y Desarrollo de Software en TECSUP, con experiencia en aplicaciones web y móviles. Trabajo en el desarrollo frontend y backend, la integración de API REST, el manejo de PostgreSQL con TypeORM y el despliegue de aplicaciones. Me caracterizan el trabajo en equipo, la resolución de problemas y la adaptación a nuevas tecnologías.',
  email: 'jefferson.ig.ig@gmail.com',
  phone: '+51 902 543 392',
  phoneHref: 'tel:+51902543392',
  location: 'Santa Anita, Lima, Perú',
  github: '',
  linkedin: 'https://www.linkedin.com/in/jefferson-bautista-aguilera',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  avatar: '/images/jefferson.png',
  cvUrl: '/cv-jefferson.pdf',
  skills: [
    'React',
    'Next.js',
    'Astro',
    'TypeScript',
    'Tailwind CSS',
    'React Native',
    'Expo',
    'Node.js',
    'PostgreSQL',
    'TypeORM',
    'API REST',
    'Git',
    'GitHub',
    'Figma',
  ],
  education: {
    institution: 'TECSUP',
    degree: 'Diseño y Desarrollo de Software',
    period: '2024 — actualidad',
    detail: 'Estudiante del sexto ciclo',
  },
  additional: [
    {
      title: 'Inglés intermedio',
      description: 'CONVERSA · Estudios en curso',
    },
    { title: 'Voluntariado', description: 'Equipo Solidario · TECSUP · 2025' },
  ],
};

// Pega las URL completas de tus perfiles. Los campos vacíos muestran una
// tarjeta de reserva en la sección de redes y se omiten en el pie de página.
export const socialLinks = (
  [
    {
      platform: 'linkedin',
      name: 'LinkedIn',
      description: 'Mi perfil profesional',
      url: 'https://www.linkedin.com/in/jefferson-bautista-aguilera/',
    },
    {
      platform: 'github',
      name: 'GitHub',
      description: 'Código y proyectos',
      url: 'https://github.com/Jefferson-BA',
    },
    {
      platform: 'instagram',
      name: 'Instagram',
      description: 'Mi lado más personal',
      url: 'https://www.instagram.com/jefferson1ba',
    },
    {
      platform: 'whatsapp',
      name: 'WhatsApp',
      description: 'Conversemos directamente',
      url: 'https://wa.me/51902543392',
    },
  ] as const
).map((link) => ({ ...link, url: safeExternalUrl(link.url) || '' }));
