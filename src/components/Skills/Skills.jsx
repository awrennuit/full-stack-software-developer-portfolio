import { techUsed } from '../../utils/techUsed';
import SkillContainer from './SkillContainer';

export default function Skills() {
  return (
    <section className="skills">
      <span className="skills__decoration"></span>
      <h2 className="skills_heading">Tech I use regularly...</h2>
      <ul className="skills__list">
        {techUsed.rowOne.map((tech, i) => (
          <li key={i}>
            <SkillContainer imageUrl={tech.imageUrl} label={tech.label} />
          </li>
        ))}
      </ul>
      <ul className="skills__list">
        {techUsed.rowTwo.map((tech, i) => (
          <li key={i}>
            <SkillContainer imageUrl={tech.imageUrl} label={tech.label} />
          </li>
        ))}
      </ul>
    </section>
  );
}
