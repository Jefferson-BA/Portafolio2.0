import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { socialLinks } from '@/lib/data';

const icons = {
  linkedin: FiLinkedin,
  github: FiGithub,
  instagram: FiInstagram,
  whatsapp: FaWhatsapp,
};

export default function SocialLinks() {
  return (
    <section
      className="social-section"
      id="redes"
      aria-labelledby="redes-titulo"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">SIGAMOS EN CONTACTO</p>
          <h2 id="redes-titulo">
            Más formas de <span>conectar.</span>
          </h2>
        </div>
        <p className="social-intro">
          Mi trabajo y mis ideas, también en mis redes.
        </p>
      </div>
      <div className="social-grid">
        {socialLinks.map(({ platform, name, description, url }) => {
          const Icon = icons[platform];
          const content = (
            <>
              <span className="social-icon">
                <Icon aria-hidden="true" />
              </span>
              <div className="social-copy">
                <h3>{name}</h3>
                <p>{url ? description : 'Enlace próximamente'}</p>
              </div>
              {url ? (
                <FiArrowUpRight className="social-arrow" aria-hidden="true" />
              ) : (
                <span className="social-pending">Pronto</span>
              )}
            </>
          );
          return url ? (
            <a
              className="social-card"
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar mi perfil de ${name} (se abre en una nueva pestaña)`}
            >
              {content}
            </a>
          ) : (
            <div className="social-card social-card-pending" key={platform}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
