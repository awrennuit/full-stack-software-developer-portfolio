import { techUsed } from '../../utils/techUsed';
import '../../stylesheets/skills.css';
import SkillContainer from './SkillContainer';

export default function Skills() {
  return (
    <article className="skill-main-container">
      <h2 className="skill-heading">Tech I use regularly...</h2>
      <div className="skill-flex">
        <ul className="skill-group">
          {techUsed.rowOne.map((tech, i) => (
            <li>
              <SkillContainer
                key={i}
                imageUrl={tech.imageUrl}
                label={tech.label}
              />
            </li>
          ))}
        </ul>
        <ul className="skill-group">
          {techUsed.rowTwo.map((tech, i) => (
            <li>
              <SkillContainer
                key={i}
                imageUrl={tech.imageUrl}
                label={tech.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
