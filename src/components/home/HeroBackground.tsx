'use client';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { useDeferredVisual } from '@/hooks/useDeferredVisual';
const LetterGlitch = dynamic(
  () => import('@/components/effects/LetterGlitch'),
  { ssr: false },
);
export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useDeferredVisual(ref);
  return (
    <div ref={ref} className="hero-background" aria-hidden="true">
      {enabled && (
        <LetterGlitch
          glitchColors={['#89bfff', '#a5d3ff', '#517eaf']}
          baseColor="#7299c2"
          backgroundColor="#0c1423"
          baseOpacity={0.38}
          fontSize={16}
          spacing={1.4}
          density={0.7}
          glitchAmount={0.22}
          speed={0.45}
          flow={0.25}
          edgeFade={0.2}
          centerFade={0.1}
          interactive
          clickEffect="burst"
          dpr={1}
        />
      )}
    </div>
  );
}
