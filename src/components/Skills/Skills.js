import './Skills.css';

export default function Skills() {
  return(
    <div className="skill-main-container">
      <h2 className="skill-heading"><span>These are what I work with the most...</span></h2>
      <div className="skill-flex">
        <div className="skill-group">
          <div className="skill-container">
            <img height="50" width="50" src="images/icons/html.svg" alt="html logo" loading="lazy" />
            <p>HTML</p>
          </div>
          <div className="skill-container">
            <img height="50" width="50" src="images/icons/css.svg" alt="css logo" loading="lazy" />
            <p>CSS</p>
          </div>
          <div className="skill-container">
            <img height="50" width="50" src="images/icons/sass.png" alt="sass logo" loading="lazy" />
            <p>Sass</p>
          </div>
          <div className="skill-container">
            <img height="50" width="50" src="images/icons/javascript.png" alt="javascript logo" loading="lazy" />
            <p>JavaScript</p>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-container">
            <img height="50" width="60" src="images/icons/react.svg" alt="react logo" loading="lazy" />
            <p>React</p>
          </div>
          <div className="skill-container">
            <img height="50" width="50" src="images/icons/vue.png" alt="vue logo" loading="lazy" />
            <p>Vue</p>
          </div>
          <div className="skill-container">
            <img height="50" width="50" src="images/icons/redux.svg" alt="redux logo" loading="lazy" />
            <p>Redux</p>
          </div>
          <div className="skill-container">
            <img height="50" width="75" src="images/icons/redux-saga.svg" alt="redux-saga logo" loading="lazy" />
            <p>Redux-Saga</p>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-container">
            <img height="50" width="50" src="images/icons/node.svg" alt="node.js logo" loading="lazy" />
            <p>Node.js</p>
          </div>
          <div className="skill-container">
            <img height="50" width="50" src="images/icons/rails.png" alt="ruby on rails logo" loading="lazy" />
            <p>Ruby on Rails</p>
          </div>
          <div className="skill-container">
            <img height="50" width="50" src="images/icons/postgresql.svg" alt="postgresql logo" loading="lazy" />
            <p>PostgreSQL</p>
          </div>
          <div className="skill-container">
            <img height="50" width="50" src="images/icons/firebase.svg" alt="firebase logo" loading="lazy" />
            <p>Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
}