import { type FC } from 'react';
import { Section } from '../common/Section';
import { ComponentCard } from '../common/ComponentCard';
import '../../styles/components/sections/Services.css';

interface CoreComponent {
  title: string;
  subtitle: string;
  description: string;
  noteSubtitle: string;
  note: string;
}

const coreComponents: CoreComponent[] = [
{
  title: 'UCHIKOMI',
  subtitle: 'Precision is carved through repeated structural impact.',
  description:
    'Structural telemetry for autonomous software evolution.',
  noteSubtitle: 'What you get',
  note:
    'A machine-verifiable map of risk, complexity and change.'
},
{
  title: 'HOROS',
  subtitle: 'Start simple. Build deliberately.',
  description:
    'Project scaffolding for modern C development.',
  noteSubtitle: 'What you get',
  note:
    'Ready-to-build foundations for native, web and bare-metal software.'
},
  {
    title: 'Projeto do Savio',
    subtitle: 'Ele vai criar frase de efeito maneira',
    description:
      'Uma descrição legal do projeto',
    noteSubtitle: 'Coming soon',
    note:
      'O que o o usuário ganha?'
  },
 {
    title: 'Projeto do Savio 2',
    subtitle: 'Ele vai criar outra frase de efeito maneira',
    description:
      'Uma descrição legal do projeto',
    noteSubtitle: 'Coming soon',
    note:
      'O que o o usuário ganha?'
  }
];

const Services: FC = () => {
  return (
    <article id="services" title="Services" className="services"> 

      <Section title="Build What You're Missing" className="services__infrastructure">
        <div className="services__grid">
          {coreComponents.map((component, index) => (
            <ComponentCard
              key={index}
              title={component.title}
              subtitle={component.subtitle}
              description={component.description}
              noteSubtitle={component.noteSubtitle}
              note={component.note}
            />
          ))}
        </div>
      </Section>

      <div className="services__cta">
        <h3>See Something Missing?</h3>
        <p>
          That's usually where our projects begin.          
          <br />
          <strong>If the tool doesn't exist, we build it.</strong>
        </p>
      </div>
    </article>
  );
};

export default Services;
