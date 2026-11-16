'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiArrowUpRight } from 'react-icons/fi';
const links = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/contact', label: 'Contacto' },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link className="wordmark" href="/" aria-label="Jefferson, inicio">
          j<span>.</span>
        </Link>
        <nav aria-label="Navegación principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ||
                (link.href === '/projects' && pathname.startsWith('/projects/'))
                  ? 'active'
                  : ''
              }
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-contact" href="/contact">
          Conectemos <FiArrowUpRight />
        </Link>
      </div>
    </header>
  );
}
