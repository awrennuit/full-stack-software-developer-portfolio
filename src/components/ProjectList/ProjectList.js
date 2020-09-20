import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProjectList.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {

  const history = useHistory();
  
  return(
    <>
      <Header />
      <div className="project-container">
        <div className="project-card-center">
          <ProjectCard
            altText="homebody app's homepage"
            appUrl={() => window.open('https://htg2020-homebody.web.app/', '_blank')}
            codeUrl="https://github.com/AwrenNuit/HTG-WorkoutApp-2020"
            descriptionLineOne="Women Who Code weekend virtual hackathon"
            descriptionLineTwo="project conceived and built by a team of five"
            image="images/screenshots/homebody.png"
            title="Homebody"
          />
          <ProjectCard
            altText="set timer page"
            appUrl={() => history.push('/timer')}
            codeUrl="https://github.com/AwrenNuit/countdown-timer"
            descriptionLineOne="Constructed to gain a better"
            descriptionLineTwo="understanding of time"
            image="images/screenshots/timer.png"
            title="Countdown Timer"
          />
          <ProjectCard
            altText="alumni tracker table"
            codeUrl="https://github.com/AwrenNuit/alum-tracker"
            descriptionLineOne="Basic solution to track which events Prime"
            descriptionLineTwo="Digital Academy alumni are attending"
            image="images/screenshots/tracker.png"
            oneButton={true}
            title="Alumni Tracker"
          />
          <ProjectCard
            altText="password generator main page"
            appUrl={()=>history.push('/password-generator')}
            codeUrl="https://github.com/AwrenNuit/unique-id-generator"
            descriptionLineOne="An exercise in basic password"
            descriptionLineTwo="and ID generation"
            image="images/screenshots/password.png"
            title="Password Generator"
          />
          <ProjectCard
            altText="pixel art main page"
            appUrl={()=>history.push('/abstract-art')}
            codeUrl="https://github.com/AwrenNuit/abstract-pixel-art"
            descriptionLineOne="Fusing my love for both"
            descriptionLineTwo="experimental art and technology"
            image="images/screenshots/art.png"
            title="Abstract Pixel Art"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}