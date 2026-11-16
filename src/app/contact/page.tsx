import type { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import SocialLinks from '@/components/SocialLinks';
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Conecta con Jefferson Bautista Aguilera para conversar sobre proyectos.',
};

export default function ContactPage() {
  const contacts = [
    {
      label: 'Correo electrónico',
      href: `mailto:${personalInfo.email}`,
      text: personalInfo.email,
      Icon: FiMail,
    },
    {
      label: 'Teléfono',
      href: personalInfo.phoneHref,
      text: personalInfo.phone,
      Icon: FiPhone,
    },
  ];
  return (
    <div className="shell page-content contact-page">
      <p className="eyebrow">03 / CONECTEMOS</p>
      <h1>
        Una conversación.
        <br />
        <span>Muchas posibilidades.</span>
      </h1>
      <p className="page-intro">
        Para una nueva idea, un proyecto o una oportunidad, este es el punto de
        partida.
      </p>
      <p className="contact-location">
        <FiMapPin />
        {personalInfo.location}
      </p>
      <div className="contact-options">
        {contacts.map(({ label, href, text, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('https:') ? '_blank' : undefined}
            rel={href.startsWith('https:') ? 'noopener noreferrer' : undefined}
          >
            <Icon />
            <div>
              <span className="eyebrow">{label}</span>
              <h2>{text}</h2>
            </div>
            <FiArrowUpRight />
          </a>
        ))}
      </div>
      <SocialLinks />
    </div>
  );
}
