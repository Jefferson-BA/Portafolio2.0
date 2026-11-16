'use client';
import dynamic from 'next/dynamic';
const LetterGlitch = dynamic(() => import('./LetterGlitch'), { ssr: false });
export default function HeroBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <LetterGlitch
        glitchColors={['#b9dba6', '#a5d8b2', '#6f9778']}
        baseColor="#94b39c"
        backgroundColor="#101713"
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
    </div>
  );
}
