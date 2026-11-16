import type { Project } from '@/types';

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
  avatar: '', // Copia tu foto a public/images/jefferson.jpg y usa '/images/jefferson.jpg'.
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
export const socialLinks = [
  {
    platform: 'linkedin',
    name: 'LinkedIn',
    description: 'Mi perfil profesional',
    url: personalInfo.linkedin,
  },
  {
    platform: 'github',
    name: 'GitHub',
    description: 'Código y proyectos',
    url: personalInfo.github,
  },
  {
    platform: 'instagram',
    name: 'Instagram',
    description: 'Mi lado más personal',
    url: '',
  },
  {
    platform: 'whatsapp',
    name: 'WhatsApp',
    description: 'Conversemos directamente',
    url: '',
  },
] as const;

export const projects: Project[] = [
  {
    slug: 'chiru-riders',
    title: 'Chiru Riders',
    category: 'Experiencia laboral · CHIRU S.A.C.',
    role: 'Desarrollador móvil (frontend)',
    period: '5 de enero — 5 de abril de 2026',
    description:
      'Aplicación móvil para el sector marketplace. Desarrollé interfaces con React Native y Expo, integrando navegación, autenticación, consulta de pedidos y geolocalización.',
    image: '/projects/chiru-riders.svg',
    imageNote:
      'Portada ilustrativa del proyecto; no es una captura de la aplicación.',
    technologies: ['React Native', 'Expo', 'API REST', 'Git', 'GitHub'],
    highlights: [
      'Desarrollo de interfaces móviles con React Native y Expo.',
      'Navegación entre pantallas y autenticación de usuarios.',
      'Integración de API REST para consultar pedidos e información de usuarios, y actualizar los estados del servicio.',
      'Geolocalización para visualizar pedidos cercanos.',
      'Control de versiones con Git y GitHub.',
    ],
    featured: true,
  },
  {
    slug: 'edtech',
    title: 'EdTech',
    category: 'Proyecto académico · Educación',
    role: 'Desarrollador full stack',
    description:
      'Plataforma de preparación preuniversitaria para estudiantes de cuarto y quinto de secundaria y egresados. Incluye simulacros con diagnóstico, cuadernillos de práctica y asistencia personalizada con inteligencia artificial.',
    image: '/projects/edtech.svg',
    imageNote:
      'Portada ilustrativa del proyecto; no es una captura de la plataforma.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
    ],
    highlights: [
      'Desarrollo de una plataforma para estudiantes que se preparan para postular a universidades.',
      'Autenticación y gestión de cinco roles.',
      'Simulacros con diagnóstico y biblioteca de cuadernillos de práctica.',
      'Asistencia con inteligencia artificial según las preferencias del estudiante.',
    ],
    featured: true,
  },
  {
    slug: 'hoja-de-parra-spitz',
    title: 'Hoja de Parra Spitz',
    category: 'Proyecto académico · Gastronomía',
    role: 'Desarrollador full stack',
    description:
      'Sistema web de gestión para un restaurante buffet, enfocado en reservas, pagos y procesos operativos. Incluye herramientas administrativas y reportes de ventas.',
    image: '/projects/hoja-de-parra.svg',
    imageNote:
      'Portada ilustrativa del proyecto; no es una captura del sistema.',
    technologies: [], // El CV no especifica el stack de este proyecto.
    highlights: [
      'Gestión de reservas y optimización de procesos operativos del restaurante.',
      'Integración de una pasarela de pagos para las transacciones de los clientes.',
      'Funcionalidades administrativas para la gestión del negocio.',
      'Generación de reportes de ventas.',
    ],
    featured: true,
  },
  {
    slug: 'wasiok',
    title: 'Wasiok',
    category: 'Proyecto académico · Alojamientos',
    role: 'Desarrollador full stack',
    description:
      'Plataforma de búsqueda de alojamientos que conecta a propietarios de habitaciones con estudiantes y personas que buscan vivir en otras ciudades. Participé en el desarrollo frontend y backend.',
    image: '/projects/wasiok.svg',
    imageNote:
      'Portada ilustrativa del proyecto; no es una captura de la plataforma.',
    technologies: [], // El CV no especifica el stack de este proyecto.
    highlights: [
      'Conexión entre propietarios de habitaciones y personas que buscan alojamiento en otras ciudades.',
      'Funcionalidades para facilitar la búsqueda de habitaciones y consultar opciones de alojamiento.',
      'Participación en el desarrollo frontend y backend de la plataforma.',
    ],
    featured: true,
  },
];
