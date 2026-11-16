import Image from 'next/image';
import { FiUser, FiPlus } from 'react-icons/fi';
import { personalInfo } from '@/lib/data';

export default function Portrait() {
  return (
    <div className="portrait-frame">
      <span className="portrait-corner top-left" />
      <span className="portrait-corner bottom-right" />
      {personalInfo.avatar ? (
        <Image
          src={personalInfo.avatar}
          alt={`Retrato de ${personalInfo.fullName}`}
          fill
          priority
          sizes="(max-width: 768px) 80vw, 350px"
          className="object-cover"
        />
      ) : (
        <div className="portrait-placeholder">
          <span className="portrait-orbit" />
          <span className="portrait-orbit orbit-two" />
          <div className="portrait-icon">
            <FiUser aria-hidden="true" />
            <span>
              <FiPlus aria-hidden="true" />
            </span>
          </div>
          <p>Tu foto, aquí</p>
          <span>Un espacio para conocerte.</span>
        </div>
      )}
      <div className="portrait-caption">
        <span className="status-dot" />
        {personalInfo.name}
        <span>01 / PERFIL</span>
      </div>
    </div>
  );
}
