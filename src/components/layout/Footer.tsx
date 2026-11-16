import Link from 'next/link';
import { personalInfo, socialLinks } from '@/data/profile';
import { FiArrowUpRight } from 'react-icons/fi';
export default function Footer() {
  return (
    <footer className="site-footer shell">
      <Link className="wordmark" href="/">
        j<span>.</span>
      </Link>
      <p>
        © {new Date().getFullYear()} {personalInfo.name}
      </p>
      <div>
        {socialLinks
          .filter((social) => social.url)
          .map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name} <FiArrowUpRight />
            </a>
          ))}
        <Link href="/contact">
          Conectemos <FiArrowUpRight />
        </Link>
      </div>
    </footer>
  );
}
