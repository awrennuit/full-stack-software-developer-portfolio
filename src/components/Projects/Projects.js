import React from 'react';
import { useHistory } from 'react-router-dom';
import './Projects.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Projects() {

  const history = useHistory();
  
  return(
    <>
      <Header />
      <div className="project-container">
        <div className="project-card-center">
          <div className="project-card">
            <img
              src="images/screenshots/homebody.png"
              alt="homebody app's homepage"
              height="300"
              width="400"
            />
            <div className="project-overlay">
              <h2>Homebody</h2>
              <p>
                Women Who Code weekend virtual hackathon 
                <br />
                project conceived and built by a team of five
              </p>
              <button
                className="project-btn-code"
                onClick={()=>window.open('https://github.com/AwrenNuit/HTG-WorkoutApp-2020', '_blank')}
              >
                View Code
              </button>
              <button
                className="project-btn-app"
                onClick={()=>window.open('https://htg2020-homebody.web.app/', '_blank')}
              >
                View App
              </button>
            </div>
          </div>

          <div className="project-card">
            <img src="images/screenshots/timer.png" alt="set timer page" height="300" width="400" />
            <div className="project-overlay">
              <h2>Countdown Timer</h2>
              <p>
                Constructed to gain a better
                <br />
                understanding of time
              </p>
              <button
                className="project-btn-code"
                onClick={()=>window.open('https://github.com/AwrenNuit/countdown-timer', '_blank')}
              >
                View Code
              </button>
              <button
                className="project-btn-app"
                onClick={()=>history.push('/timer')}
              >
                View App
              </button>
            </div>
          </div>

          <div className="project-card">
            <img src="images/screenshots/tracker.png" alt="alumni tracker table" height="300" width="400" />
            <div className="project-overlay">
              <h2>Alumni Tracker</h2>
              <p>
                Basic solution to track which events Prime 
                <br />
                Digital Academy alumni are attending
              </p>
              <button
                className="project-btn-code-tracker"
                onClick={()=>window.open('https://github.com/AwrenNuit/alum-tracker', '_blank')}
              >
                View Code
              </button>
            </div>
          </div>

          <div className="project-card">
            <img src="images/screenshots/password.png" alt="password generator main page" height="300" width="400" />
            <div className="project-overlay">
              <h2>Password Generator</h2>
              <p>
                An exercise in basic password 
                <br />
                and ID generation
              </p>
              <button
                className="project-btn-code"
                onClick={()=>window.open('https://github.com/AwrenNuit/unique-id-generator', '_blank')}
              >
                View Code
              </button>
              <button
                className="project-btn-app"
                onClick={()=>history.push('/password-generator')}
              >
                View App
              </button>
            </div>
          </div>

          <div className="project-card">
            <img src="images/screenshots/art.png" alt="pixel art main page" height="300" width="400" />
            <div className="project-overlay">
              <h2>Abstract Pixel Art</h2>
              <p>
                Fusing my love for both 
                <br />
                experimental art and technology
              </p>
              <button
                className="project-btn-code"
                onClick={()=>window.open('https://github.com/AwrenNuit/abstract-pixel-art', '_blank')}
              >
                View Code
              </button>
              <button
                className="project-btn-app"
                onClick={()=>history.push('/abstract-art')}
              >
                View App
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}