import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo } from '@/lib/data';
export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.fullName} | Portafolio`,
    template: `%s | ${personalInfo.fullName}`,
  },
  description: personalInfo.description,
  authors: [{ name: personalInfo.fullName }],
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    title: `${personalInfo.fullName} | Portafolio`,
    description: personalInfo.description,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
