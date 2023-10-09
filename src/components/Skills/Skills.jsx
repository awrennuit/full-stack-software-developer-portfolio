import { techUsed } from '../../utils/techUsed';
import '../../stylesheets/skills.css';
import SkillContainer from './SkillContainer';

export default function Skills() {
  return (
    <div className="skill-main-container">
      <h2 className="skill-heading">
        Tech I use regularly...
      </h2>
      <div className="skill-flex">
        <div className="skill-group">
          {techUsed.rowOne.map((tech, i) => (
            <SkillContainer
              key={i}
              imageUrl={tech.imageUrl}
              label={tech.label}
            />
          ))}
        </div>
        <div className="skill-group">
          {techUsed.rowTwo.map((tech, i) => (
            <SkillContainer
              key={i}
              imageUrl={tech.imageUrl}
              label={tech.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
