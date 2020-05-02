import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Projects() {

  const history = useHistory();
  return(
    <>
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