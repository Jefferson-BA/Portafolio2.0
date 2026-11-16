'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FiUser } from 'react-icons/fi';
import { personalInfo } from '@/data/profile';
import { useDeferredVisual } from '@/hooks/useDeferredVisual';

const Lanyard = dynamic(() => import('./Lanyard'), { ssr: false });

export default function ProfileCard() {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const enabled = useDeferredVisual(ref);

  return (
    <figure
      ref={ref}
      className="profile-card"
      aria-label={`Credencial de ${personalInfo.fullName}`}
      data-ready={ready ? '' : undefined}
    >
      <div className="profile-card-stage">
        <div className="profile-card-fallback" aria-hidden="true">
          {personalInfo.avatar ? (
            <Image
              src={personalInfo.avatar}
              alt=""
              fill
              priority
              unoptimized
              sizes="(max-width: 700px) 280px, 380px"
              className="profile-card-image"
            />
          ) : (
            <div className="profile-card-empty">
              <FiUser />
              <span>Tu foto, aquí</span>
            </div>
          )}
        </div>
        <div className="profile-card-scene">
          {enabled && (
            <Lanyard
              unbounded
              frontImage={personalInfo.avatar || undefined}
              imageFit="contain"
              cardColor="#142238"
              strapColor="#89bfff"
              finish="glossy"
              metal="silver"
              orientation="portrait"
              size={0.76}
              strapLength={0.12}
              cornerRadius={0.35}
              damping={0.75}
              breeze={0}
              intro={false}
              onReady={() => setReady(true)}
            />
          )}
        </div>
      </div>
      <figcaption className="profile-card-caption">
        <span className="eyebrow">{personalInfo.name} · WEB Y MÓVIL</span>
        <span>{ready ? '' : 'Mi perfil, en primera persona.'}</span>
      </figcaption>
    </figure>
  );
}
