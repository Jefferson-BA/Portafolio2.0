import type { Project } from '@/types/project';
import { safeExternalUrl } from '@/lib/links';

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
    demoUrl: '', // URL de la demo publicada.
    githubUrl: '', // URL del repositorio.
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
    demoUrl: '', // URL de la demo publicada.
    githubUrl: '', // URL del repositorio.
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
    demoUrl: '', // URL de la demo publicada.
    githubUrl: '', // URL del repositorio.
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
    demoUrl: '', // URL de la demo publicada.
    githubUrl: '', // URL del repositorio.
    featured: true,
  },
].map((project) => ({
  ...project,
  demoUrl: safeExternalUrl(project.demoUrl),
  githubUrl: safeExternalUrl(project.githubUrl),
}));
