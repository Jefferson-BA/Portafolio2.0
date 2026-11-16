'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import HeroBackground from './HeroBackground';
import ProfileCard from '@/components/profile/ProfileCard';
import { personalInfo, socialLinks } from '@/data/profile';

interface MinimalistHeroProps {
  mainText: string;
  readMoreLink: string;
  overlayText: { part1: string; part2: string };
  locationText: string;
}

const icons = {
  linkedin: FiLinkedin,
  github: FiGithub,
  instagram: FiInstagram,
  whatsapp: FaWhatsapp,
};

// Adaptación del componente proporcionado: mantiene la navegación global y
// usa superficies translúcidas para conservar visible el fondo LetterGlitch.
export default function MinimalistHero({
  mainText,
  readMoreLink,
  overlayText,
  locationText,
}: MinimalistHeroProps) {
  const reducedMotion = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: { opacity: 1, y: reducedMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
    },
  });

  return (
    <section className="hero minimalist-hero" aria-labelledby="hero-title">
      <HeroBackground />
      <div className="minimalist-shade" />
      <div className="shell minimalist-topline">
        <p className="eyebrow">
          <span className="status-dot" />
          PORTAFOLIO PERSONAL
        </p>
        <span className="eyebrow">DISEÑO · DESARROLLO · TECNOLOGÍA</span>
      </div>

      <div className="shell minimalist-grid">
        <motion.div {...reveal(0.2)} className="minimalist-intro">
          <p className="eyebrow">DE LA IDEA A LA EXPERIENCIA</p>
          <p className="minimalist-description">{mainText}</p>
          <Link href={readMoreLink} className="text-link">
            Más sobre mí <FiArrowUpRight />
          </Link>
          {personalInfo.cvUrl && (
            <a href={personalInfo.cvUrl} className="minimalist-cv" download>
              <FiDownload />
              Descargar CV
            </a>
          )}
        </motion.div>

        <motion.div className="minimalist-visual" {...reveal(0)}>
          <ProfileCard />
        </motion.div>

        <motion.div {...reveal(0.35)} className="minimalist-heading">
          <p className="eyebrow">HOLA, SOY</p>
          <h1 id="hero-title">
            <span>
              {overlayText.part1}
              <span className="heading-dot">.</span>
            </span>
            <span className="minimalist-surname">{overlayText.part2}</span>
          </h1>
          <p className="minimalist-role">{personalInfo.title}</p>
          <Link href="#proyectos" className="button button-primary">
            Explorar proyectos <FiArrowUpRight />
          </Link>
        </motion.div>
      </div>

      <motion.div {...reveal(0.45)} className="shell minimalist-bottom">
        <div
          className="minimalist-socials"
          role="group"
          aria-label="Redes sociales y correo"
        >
          {socialLinks
            .filter((social) => social.url)
            .map((social) => {
              const Icon = icons[social.platform];
              return (
                <a
                  href={social.url}
                  key={social.platform}
                  aria-label={`Visitar mi perfil de ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Enviar un correo electrónico"
          >
            <FiMail aria-hidden="true" />
          </a>
        </div>
        <a className="minimalist-scroll" href="#proyectos">
          <FiArrowDown aria-hidden="true" />
          Sigue explorando
        </a>
        <p className="minimalist-location">
          <FiMapPin aria-hidden="true" />
          {locationText}
        </p>
      </motion.div>
    </section>
  );
}
