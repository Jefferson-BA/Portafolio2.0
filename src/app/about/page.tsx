import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { personalInfo } from '@/data/profile';
import { projects } from '@/data/projects';
import ProfileCard from '@/components/profile/ProfileCard';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: personalInfo.bio,
};

export default function AboutPage() {
  const experience = projects[0];
  return (
    <div className="shell page-content">
      <p className="eyebrow">02 / UN POCO SOBRE MÍ</p>
      <div className="about-grid">
        <ProfileCard />
        <div>
          <h1>
            Detrás de
            <br />
            cada <span>idea.</span>
          </h1>
          <h2 className="about-role">{personalInfo.fullName}</h2>
          <p className="profile-location">
            {personalInfo.title} · {personalInfo.location}
          </p>
          <p className="page-intro">{personalInfo.bio}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              Explorar proyectos <FiArrowUpRight />
            </Link>
            <a
              href={personalInfo.cvUrl}
              download
              className="button button-quiet"
            >
              Descargar CV <FiDownload />
            </a>
          </div>
        </div>
      </div>
      <section className="profile-section">
        <p className="eyebrow">MI CAJA DE HERRAMIENTAS</p>
        <h2>
          De la interfaz <span>a los datos.</span>
        </h2>
        <div className="skills">
          {personalInfo.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
      <section className="profile-section profile-timeline">
        <div>
          <p className="eyebrow">EXPERIENCIA LABORAL</p>
          <h2>{experience.title}</h2>
          <p className="timeline-meta">CHIRU S.A.C. · {experience.period}</p>
          <h3>{experience.role}</h3>
          <ul className="project-highlights">
            {experience.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href={`/projects/${experience.slug}`} className="text-link">
            Conoce el proyecto <FiArrowUpRight />
          </Link>
        </div>
        <div>
          <p className="eyebrow">FORMACIÓN ACADÉMICA</p>
          <h2>{personalInfo.education.institution}</h2>
          <p className="timeline-meta">{personalInfo.education.period}</p>
          <h3>{personalInfo.education.degree}</h3>
          <p className="profile-location">{personalInfo.education.detail}</p>
          <div className="additional-info">
            {personalInfo.additional.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
