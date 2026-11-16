import Link from 'next/link';
import { FiArrowDown, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { personalInfo } from '@/lib/data';
import Portrait from '@/components/Portrait';
import HeroBackground from '@/components/HeroBackground';
import ProjectGallery from '@/components/ProjectGallery';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroBackground />
        <div className="hero-shade" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              PORTAFOLIO PERSONAL
            </p>
            <h1>
              Hola, soy
              <br />
              <span>{personalInfo.name}</span>
              <span className="heading-dot">.</span>
            </h1>
            <p className="hero-role">{personalInfo.title}</p>
            <p className="hero-description">{personalInfo.description}</p>
            <div className="hero-actions">
              <Link href="#proyectos" className="button button-primary">
                Explorar proyectos <FiArrowUpRight />
              </Link>
              {personalInfo.cvUrl ? (
                <a
                  href={personalInfo.cvUrl}
                  className="button button-quiet"
                  download
                >
                  Descargar CV <FiDownload />
                </a>
              ) : (
                <Link href="/about" className="button button-quiet">
                  Conoce mi perfil <FiArrowUpRight />
                </Link>
              )}
            </div>
          </div>
          <Portrait />
        </div>
        <div className="shell hero-bottom">
          <a href="#proyectos">
            <FiArrowDown /> Sigue explorando
          </a>
          <span>IDEAS · CÓDIGO · EXPERIENCIAS</span>
        </div>
      </section>
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
