import type { NextConfig } from 'next';

const isDevelopment = process.env.NODE_ENV === 'development';
// The portfolio stays statically rendered. Next's bootstrap and animation styles
// require inline content; eval is permitted only by the development server.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDevelopment ? ' ws: wss:' : ''}`,
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "form-action 'self'",
].join('; ');

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [360, 640, 750, 1080, 1440, 1920],
    imageSizes: [64, 128, 256, 384],
    localPatterns: [
      { pathname: '/images/**', search: '' },
      { pathname: '/projects/**', search: '' },
    ],
    remotePatterns: [],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'none'; sandbox;",
  },
};

export default nextConfig;
