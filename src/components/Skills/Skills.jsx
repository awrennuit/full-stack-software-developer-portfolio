import { techUsed } from '../../utils/techUsed';
import '../../stylesheets/skills.css';
import SkillContainer from './SkillContainer';

export default function Skills() {
  return (
    <div className="skill-main-container">
      <h2 className="skill-heading">
        <span>These are what I work with the most...</span>
      </h2>
      <div className="skill-flex">
        <div className="skill-group">
          {/* TODO: map through rowOne */}
          <SkillContainer imageUrl="images/icons/html.svg" label="HTML" />
          <SkillContainer imageUrl="images/icons/css.svg" label="CSS" />
          <SkillContainer imageUrl="images/icons/react.svg" label="React" />
          <SkillContainer imageUrl="images/icons/vue.png" label="Vue" />
        </div>
        <div className="skill-group">
          {/* TODO: map through rowTwo */}
          <SkillContainer imageUrl="images/icons/node.svg" label="Node.js" />
          <SkillContainer
            imageUrl="images/icons/rails.png"
            label="Ruby on Rails"
          />
          <SkillContainer
            imageUrl="images/icons/postgresql.svg"
            label="PostgreSQL"
          />
          <SkillContainer
            imageUrl="images/icons/firebase.svg"
            label="Firebase"
          />
        </div>
      </div>
    </div>
  );
}
