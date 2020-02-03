import React from 'react';
import './Resume.css';

function Resume() {

  return(
    <>
      <div>
        <h2 className="secondary-heading">Summary</h2>
        <p> 
          Solving puzzles and creating things is what makes me feel alive. Building bridges between 
          the cool & logical and the warm & emotional is how I try to approach things. Aside from 
          being a full stack developer I am an herbalist, an energy healer, and a musician. I am 
          passionate about Diversity & Inclusion in all its forms, especially at the intersections 
          relating to queer identities.
        </p>
      </div>
      <div>
        <h2 className="secondary-heading">Technical Skills</h2>
      </div>
      <div>
        <h2 className="secondary-heading">Experience</h2>
      </div>
      <div>
        <h2 className="secondary-heading">Education</h2>
          <div className="resume-list-div">
            <h4 className="resume-subheading">Full Stack Software Engineering Certificate (2020)</h4>
            <h4 className="resume-sub-subheading">Prime Digital Academy</h4>
              <ul className="resume-ul">
                <li className="resume-li">Creating increasingly complicated full stack software programs</li>
                <li className="resume-li">Performing public speaking, both impromptu and rehearsed</li>
                <li className="resume-li">Communicating within a small team to build apps</li>
                <li className="resume-li">Maintaining an active GitHub account</li>
              </ul>
          </div>
          <div className="resume-list-div">
            <h4 className="resume-subheading">Associate of Science in Integrative Health & Healing (2016)</h4>
            <h4 className="resume-sub-subheading">Anoka Ramsey Community College</h4>
            <h4 className="resume-sub-subheading">Cumulative GPA: 3.8</h4>
          </div>
          <div className="resume-list-div">
            <h4 className="resume-subheading">Associate of APplied Science in Music Business (2009)</h4>
            <h4 className="resume-sub-subheading">Minnesota School of Business</h4>
            <h4 className="resume-sub-subheading">Cumulative GPA: 3.5</h4>
          </div>
      </div>
      <div>
        <h2 className="secondary-heading">Additional Projects</h2>
          <div className="resume-list-div">
            <h4 className="resume-subheading">Change Counter (in progress)</h4>
              <ul className="resume-ul">
                <li className="resume-li">Created to help people with dyscalculia know if they have enough money to purchase an item</li>
                <li className="resume-li">Originally programmed with jQuery, in the process of switching over to React</li>
                <li className="resume-li">View app HERE and source code HERE</li>
              </ul>
          </div>
          <div className="resume-list-div">
            <h4 className="resume-subheading">Weather & Facts API</h4>
              <ul className="resume-ul">
                <li className="resume-li">Provides Minneapolis weather, number facts related to the high and low temperatures, and an "on this day" fact</li>
                <li className="resume-li">View app HERE and source code HERE</li>
              </ul>
          </div>
          <div className="resume-list-div">
            <h4 className="resume-subheading">React Countdown Timer</h4>
              <ul className="resume-ul">
                <li className="resume-li">Conceived to self-learn about Date() and how time in general works with JavaScript and React</li>
                <li className="resume-li">View app HERE and source code HERE</li>
              </ul>
          </div>
          <div className="resume-list-div">
            <h4 className="resume-subheading">Abstract Pixel Art Generator</h4>
              <ul className="resume-ul">
                <li className="resume-li">A study in computer-generated abstract art to satisfy my own curiosity</li>
                <li className="resume-li">View app HERE and source code HERE</li>
              </ul>
          </div>
          <div className="resume-list-div">
            <h4 className="resume-subheading">De-Affirmation Generator</h4>
              <ul className="resume-ul">
                <li className="resume-li">Self-teaching about randomization and database queries</li>
                <li className="resume-li">View app HERE and source code HERE</li>
              </ul>
          </div>
          <div className="resume-list-div">
            <h4 className="resume-subheading">Unique ID Generator</h4>
              <ul className="resume-ul">
                <li className="resume-li">Built out to further my understanding of jQuery and JavaScript, and to get new secure passwords</li>
                <li className="resume-li">View app HERE and source code HERE</li>
              </ul>
          </div>
      </div>
    </>
  );
}

export default Resume;