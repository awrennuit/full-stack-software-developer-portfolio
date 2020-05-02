import React from 'react';
import './Skills.css';

export default function Skills() {

  return(
    <>
      <div className="skill-flex">
        <div className="skill-group">
          <div className="skill-container">
            <img height="50" src="images/icons/html.svg" alt="html logo" />
            <p>HTML</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/css.svg" alt="css logo" />
            <p>CSS</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/javascript.png" alt="javascript logo" />
            <p>JavaScript</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/typescript.png" alt="typescript logo" />
            <p>TypeScript</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/react.svg" alt="react logo" />
            <p>React</p>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-container">
            <img height="50" src="images/icons/angular.svg" alt="angular logo" />
            <p>Angular</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/redux.svg" alt="redux logo" />
            <p>Redux</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/redux-saga.svg" alt="redux-saga logo" />
            <p>Redux-Saga</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/node.svg" alt="node.js logo" />
            <p>Node.js</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/postgresql.svg" alt="postgresql logo" />
            <p>PostgreSQL</p>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-container">
            <img height="50" src="images/icons/Git.svg" alt="git logo" />
            <p>Git</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/github.svg" alt="github logo" />
            <p>GitHub</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/firebase.svg" alt="firebase logo" />
            <p>Firebase</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/bootstrap.svg" alt="bootstrap logo" />
            <p>Bootstrap</p>
          </div>
          <div className="skill-container">
            <img height="50" src="images/icons/material-ui.svg" alt="material-ui logo" />
            <p>Material-UI</p>
          </div>
        </div>
      </div>
    </>
  );
}