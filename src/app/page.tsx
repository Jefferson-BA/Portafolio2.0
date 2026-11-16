import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { personalInfo } from '@/data/profile';
import MinimalistHero from '@/components/home/MinimalistHero';
import ProjectGallery from '@/components/projects/ProjectGallery';
import SocialLinks from '@/components/contact/SocialLinks';

export default function Home() {
  return (
    <>
      <MinimalistHero
        mainText={personalInfo.description}
        readMoreLink="/about"
        overlayText={{ part1: personalInfo.name, part2: 'Bautista Aguilera' }}
        locationText={personalInfo.location}
      />
      <section className="shell section" id="proyectos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / EXPLORA MI TRABAJO</p>
            <h2>
              Ideas en <span>movimiento.</span>
            </h2>
          </div>
          <Link href="/projects" className="text-link">
            Ver proyectos <FiArrowUpRight />
          </Link>
        </div>
        <ProjectGallery />
      </section>
      <section className="shell about-strip">
        <p className="eyebrow">02 / DETRÁS DEL CÓDIGO</p>
        <div>
          <h2>
            Cada proyecto empieza
            <br />
            con una <span>buena idea.</span>
          </h2>
          <p>
            Trabajo con React, Next.js, React Native y API REST. En TECSUP y en
            Chiru Riders he llevado ideas a aplicaciones web y móviles, con un
            enfoque en resolver problemas y colaborar en equipo.
          </p>
          <Link href="/about" className="text-link">
            Un poco más sobre mí <FiArrowUpRight />
          </Link>
        </div>
      </section>
      <div className="shell">
        <SocialLinks />
      </div>
      <section className="shell contact-strip">
        <p className="eyebrow">¿QUÉ CONSTRUIMOS DESPUÉS?</p>
        <Link href="/contact">
          Hablemos de tu idea.
          <FiArrowUpRight />
        </Link>
      </section>
    </>
  );
}
