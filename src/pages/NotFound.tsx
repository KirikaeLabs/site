import { type FC, useEffect, useState } from 'react';
import { SEO } from '../utils/SEO';
import '../styles/pages/NotFound.css';

export const NotFound: FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; animationDuration: string }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDuration: `${Math.random() * 15 + 5}s`
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <>
      <SEO
        title="404 - Page Not Found | Kirikae Labs"
        description="The page you're looking for cannot be found. Return to Kirikae Labs's home page."
      />
      <main className="not-found">
        <div className="particles">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDuration: particle.animationDuration
              }}
            />
          ))}
        </div>
        <div className="not-found__container">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Page Not Found</h2>
          <p className="not-found__description">
            The page you're looking for has been moved, deleted, or never existed.
          </p>
        </div>
      </main>
    </>
  );
};

export default NotFound;
