import { type FC } from 'react';
import { Section } from '../common/Section';
import '../../styles/components/sections/About.css';

export const About: FC = () => {
  return (
    <Section id="about" title="About" className="about">
      <div className="about__container">
        <p>
Kirikae Labs is an independent group of programmers who enjoy solving difficult technical problems and building software that doesn't exist yet.        </p>
        <p>
We're inspired by the early generations of software developers who weren't afraid to explore systems deeply, understand how they worked, and push them beyond their intended limits. That mindset still guides our work today.
        </p>
        <p>
We don't settle for software that merely works. We care about understanding why it works, how it can be improved, and what can be built when existing tools are no longer enough. When something is missing, we create it. When a problem looks difficult, we investigate it rather than work around it.        </p>
        <p>
Our projects span different areas of software engineering, but they share the same foundation: curiosity, technical rigor, and a genuine appreciation for well-crafted code.        </p>
        <p>
At its core, Kirikae Labs is simply a group of friends who enjoy building, learning, and tackling challenges that others might ignore.        </p>
      </div>
    </Section>
  );
};

export default About;
