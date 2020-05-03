import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

export default function Projects() {

  const history = useHistory();
  return(
    <>
      <Header />
      <div className="project-card">
        <img src="images/avatar.jpg" alt="react timer" width="300" />
        <div className="project-overlay">
          <h1>React Timer</h1>
          <button onClick={()=>history.pushState('/timer')}>View Here</button>
        </div>
      </div>
    </>
  );
}