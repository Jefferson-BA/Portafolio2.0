'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiArrowUpRight, FiPause, FiPlay } from 'react-icons/fi';
import { useDeferredVisual } from '@/hooks/useDeferredVisual';
import { projects } from '@/data/projects';

const CircularCarousel = dynamic(() => import('./CircularCarousel'), {
  ssr: false,
});

const items = projects.map((project) => ({
  src: project.image,
  title: project.title,
  subtitle: project.role,
  alt: `Portada ilustrativa de ${project.title}`,
}));

export default function ProjectGallery() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useDeferredVisual(ref);
  const router = useRouter();
  const project = projects[active];
  if (!project) return null;

  return (
    <div ref={ref} className="project-gallery">
      <div className="gallery-topline">
        <span>WEB Y MÓVIL · SELECCIÓN DE PROYECTOS</span>
        <button
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? 'Pausar carrusel' : 'Reanudar carrusel'}
          aria-pressed={!playing}
        >
          {playing ? <FiPause /> : <FiPlay />}
          <span>{playing ? 'Pausar' : 'Reproducir'}</span>
        </button>
      </div>
      <div className="carousel-stage">
        {enabled ? (
          <CircularCarousel
            items={items}
            preset="cylinder"
            intro="assemble"
            cardWidth={480}
            aspectRatio={1.6}
            gap={55}
            curve={0.3}
            tilt={-7}
            autoplay={playing ? 'drift' : 'off'}
            speed={7}
            fadeColor="#0c1423"
            depthFade={0.4}
            cornerRadius={12}
            onChange={setActive}
            onItemClick={(_, index) =>
              router.push(`/projects/${projects[index].slug}`)
            }
          />
        ) : (
          <Link
            className="gallery-placeholder"
            href={`/projects/${project.slug}`}
            aria-label={`Ver ${project.title}`}
          >
            <Image
              src={project.image}
              alt={`Portada de ${project.title}`}
              fill
              sizes="(max-width: 600px) 90vw, 480px"
              className="object-contain"
            />
          </Link>
        )}
      </div>
      <div className="gallery-bottom">
        <div>
          <span className="eyebrow">
            {String(active + 1).padStart(2, '0')} /{' '}
            {String(items.length).padStart(2, '0')} · {project.category}
          </span>
          <h3>{project.title}</h3>
          <p>{project.role}</p>
        </div>
        <Link
          className="circle-link"
          href={`/projects/${project.slug}`}
          aria-label={`Ver detalles de ${project.title}`}
        >
          <FiArrowUpRight />
        </Link>
        <span className="gallery-hint">
          Arrastra para explorar ↔<br />
          Flechas para navegar · Enter para abrir
        </span>
      </div>
      <p className="template-note">
        Portadas ilustrativas de los proyectos. Selecciona una para conocer mi
        participación.
      </p>
    </div>
  );
}
