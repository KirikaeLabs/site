import { type FC, useEffect, useState } from 'react';
import { Section } from '../common/Section';
import '../../styles/components/sections/Home.css';

export const Home: FC = () => {
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
    <Section id="home" className="home">
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
      <div className="home__container">
        <h1 className="home__banner">Kirikae Labs</h1>
        <h2 className="home__subtitle">why compromise on the quality of your digital tools?</h2>
        <p className="home__description">
Driven by challenges, inspired by classic software paradigms. We design pragmatic applications that put capability back in the hands of the user.        </p>
      </div>
    </Section>
  );
};

export default Home;
