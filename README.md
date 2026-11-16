# Portafolio de Jefferson

**Ejecutar:** `npm ci` y `npm run dev` → http://localhost:3000.

**Compilar:** `npm run build`. En PowerShell puedes usar `npm.cmd`.

## Estructura

- `src/app/`: páginas, rutas, estilos globales y metadatos.
- `src/components/layout/`: navbar y pie de página.
- `src/components/home/`: presentación y fondo del inicio.
- `src/components/profile/`: foto y credencial 3D.
- `src/components/projects/`: tarjetas y carrusel de proyectos.
- `src/components/contact/`: redes sociales.
- `src/components/effects/`: efecto de letras del fondo.
- `src/data/`: contenido editable, separado de la interfaz.
- `src/types/project.ts`: estructura de un proyecto.
- `src/hooks/`: carga diferida de efectos; `src/lib/`: validación compartida.

## Dónde editar

- **Perfil, correo y teléfono:** `src/data/profile.ts` → `personalInfo` (`phoneHref` usa `tel:+519XXXXXXXX`).
- **Redes:** mismo archivo → `socialLinks[].url` (también puedes usar los valores de `personalInfo.github` y `personalInfo.linkedin`). WhatsApp: `https://wa.me/519XXXXXXXX`.
- **Proyectos:** `src/data/projects.ts` → títulos, descripciones, `demoUrl`, `githubUrl` e `image`.
- **Capturas:** `public/projects/`; usa rutas como `/projects/archivo.png` en `image`.
- **Foto:** `public/images/jefferson.png`; ruta en `personalInfo.avatar`.
- **CV:** `public/cv-jefferson.pdf`; ruta en `personalInfo.cvUrl`.
- **Dominio:** `NEXT_PUBLIC_SITE_URL` en `.env.local`.
- **Colores:** variables al inicio de `src/app/globals.css`. Fondo 3D en `src/components/home/HeroBackground.tsx`; cinta y tarjeta en `src/components/profile/ProfileCard.tsx`.

Los enlaces vacíos no generan botones. Las redes pendientes muestran «Pronto».

## Verificar y mantener

`npm test` (Node 22.18+), `npm run build` y `npm audit`. Versiona `package-lock.json` para instalaciones reproducibles.

Las animaciones se cargan al acercarse a la vista, pausan fuera de pantalla y liberan sus recursos al cambiar de página. La credencial descansa cuando no se usa; el fondo decorativo se limita a 30 fps.

Las cabeceras y los permisos de imágenes se configuran en `next.config.ts`; las imágenes actuales son locales. La CSP mantiene la generación estática y permite el arranque inline de Next.js: no es una CSP estricta con nonces. Sirve la web pública por HTTPS.
