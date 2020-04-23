import React from 'react';
import './Resume.css';

export default function Resume() {

  return(
    <div className="resume-container">
      <div className="resume-card">

        <div className="resume-section">
          <h2 className="secondary-heading">Summary</h2>
          <p> 
            Solving puzzles and creating things are what makes me feel alive. Aside from being 
            a full stack developer I am an herbalist and a musician. I am passionate about 
            Diversity & Inclusion in all its forms, especially at the intersections relating 
            to queer identities.
          </p>
        </div> 

        <div className="resume-section">
          <h2 className="secondary-heading">Technical Skills</h2>
          <div className="resume-skills-container">
            <ul className="resume-skills-column">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>React-Redux</li>
              <li>Redux-Saga</li>
              <li>Angular</li>
            </ul>
            <ul className="resume-skills-column">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST</li>
              <li>API</li>
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>
            <ul className="resume-skills-column">
              <li>HTML</li>
              <li>CSS</li>
              <li>AJAX</li>
              <li>jQuery</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
            <ul className="resume-skills-column">
              <li>JSON</li>
              <li>Ionic</li>
              <li>Material-UI</li>
              <li>Firebase</li>
              <li>MongoDB</li>
              <li>AWS S3</li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="secondary-heading">Experience</h2>

          <div className="resume-list-div">
            <h4 className="resume-subheading">Front-end Software Engineer
              <span className="resume-job-duration"> April 2020 - Present</span>
            </h4>
            <h4 className="resume-sub-subheading">Konduct Coach Learning</h4>
              <ul className="resume-ul">
                <li className="resume-li">Creating and implementing UI/UX designs with responsiveness in mind</li>
                <li className="resume-li">Collaborating remotely with a cross-country development team</li>
                <li className="resume-li">Planning and executing technical goals for each two week sprint</li>
              </ul>
          </div>

          <div className="resume-list-div">
            <h4 className="resume-subheading">Software Developer
              <span className="resume-job-duration"> March 2020 - Present</span>
            </h4>
            <h4 className="resume-sub-subheading">Freelance</h4>
            <ul className="resume-ul">
                <li className="resume-li">LeahWorks</li>
                <ul className="resume-sub-ul">
                  <li className="resume-sub-li">Constructing web presence for a therapist</li>
                  <li className="resume-sub-li">Technologies used: HTML, CSS, React, Firebase</li>
                </ul>
                <li className="resume-li">Alumni Tracker</li>
                <ul className="resume-sub-ul">
                  <li className="resume-sub-li">Built a way to track which alumni were present at which Prime Digital Academy events</li>
                  <li className="resume-sub-li">Technologies used: React, React-Redux, Firebase</li>
                </ul>
              </ul>
          </div>

          <div className="resume-list-div">
            <h4 className="resume-subheading">Full Stack Software Developer Student
              <span className="resume-job-duration"> September 2019 - February 2020</span>
            </h4>
            <h4 className="resume-sub-subheading">Prime Digital Academy</h4>
              <ul className="resume-ul">
                <li className="resume-li">Solo Project: "Scout Daily"</li>
                <ul className="resume-sub-ul">
                  <li className="resume-sub-li">Allows users to create a profile, gives daily photography prompt, and lets users view and share photos</li>
                  <li className="resume-sub-li">Encourages people to get outside, explore, and practice creative skills</li>
                  <li className="resume-sub-li">Technologies used: React, React-Redux, Redux-Saga, Axios, Node.js, SQL</li>
                </ul>
                <li className="resume-li">Group Project: "Illume Pricing"</li>
                <ul className="resume-sub-ul">
                  <li className="resume-sub-li">With a small team created an easier, automated way for small business owners to increase their profits</li>
                  <li className="resume-sub-li">The admin is able to dynamically update existing questions, user data, and industries</li>
                  <li className="resume-sub-li">Users go through a “choose your own adventure” style questions, and are provided with financial feedback based on their answers</li>
                </ul>
              </ul>
          </div>

          <div className="resume-list-div">
            <h4 className="resume-subheading">Independent Living Skills Coach
              <span className="resume-job-duration"> October 2018 - November 2019</span>
            </h4>
            <h4 className="resume-sub-subheading">Spirit Lifters</h4>
              <ul className="resume-ul">
                <li className="resume-li">Communicated effectively with a diverse adult client base to schedule and keep appointments</li>
                <li className="resume-li">Helped clients with errands and phone calls</li>
                <li className="resume-li">Aided clients with filing out and submitting county paperwork</li>
              </ul>
          </div>

          <div className="resume-list-div">
            <h4 className="resume-subheading">Resident Counselor
              <span className="resume-job-duration"> March 2017 - August 2019</span>
            </h4>
            <h4 className="resume-sub-subheading">Volunteers of America</h4>
              <ul className="resume-ul">
                <li className="resume-li">Addressed programming needs to help and support residents</li>
                <li className="resume-li">Taught clients life skills necessary for independent living</li>
                <li className="resume-li">Assisted with managing and coordinating schedules for fourteen individuals</li>
                <li className="resume-li">Administered medication to the program participants</li>
              </ul>
          </div>

          <div className="resume-list-div">
            <h4 className="resume-subheading">Sales Ambassador
              <span className="resume-job-duration"> November 2014 - March 2017</span>
            </h4>
            <h4 className="resume-sub-subheading">LUSH Cosmetics</h4>
              <ul className="resume-ul">
                <li className="resume-li">Completed customer consultations to find best products based on their needs</li>
                <li className="resume-li">Led Operations Team in ordering product, monthly inventories, and weekly shipments</li>
                <li className="resume-li">Led Training Team in developing new and existing employees</li>
              </ul>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="secondary-heading">Education</h2>

            <div className="resume-list-div">
              <h4 className="resume-subheading">Full Stack Software Engineering Certificate (2020)</h4>
              <h4 className="resume-sub-subheading">Prime Digital Academy</h4>
                <ul className="resume-ul">
                  <li className="resume-li">Created increasingly complicated full stack software programs</li>
                  <li className="resume-li">Performed public speaking, both impromptu and rehearsed</li>
                  <li className="resume-li">Communicated within a small team to build apps</li>
                  <li className="resume-li">Maintained an active GitHub account</li>
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

        <div className="resume-section">
          <h2 className="secondary-heading">Additional Projects</h2>

          <div className="resume-list-div">
            <h4 className="resume-subheading">Homebody</h4>
              <ul className="resume-ul">
                <li className="resume-li">Hack the Gap collaborative UX and developer weekend project</li>
                <li className="resume-li">Users select at-home exercise criteria, then receive workout videos</li>
                <li className="resume-li">View app HERE and source code HERE</li>
              </ul>
          </div>

          <div className="resume-list-div">
            <h4 className="resume-subheading">US State Facts</h4>
              <ul className="resume-ul">
                <li className="resume-li">Created to gain a deeper understanding with Angular and Firebase</li>
                <li className="resume-li">Facts include things like state bird, capital city, electoral votes, etc.</li>
                <li className="resume-li">View app HERE and source code HERE</li>
              </ul>
          </div>

          <div className="resume-list-div">
            <h4 className="resume-subheading">Book, Movie, and Podcast Club</h4>
              <ul className="resume-ul">
                <li className="resume-li">An effort to foster community in this age of social distancing</li>
                <li className="resume-li">Users can share their recommendations and where to find them</li>
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
              <h4 className="resume-subheading">Unique ID Generator</h4>
                <ul className="resume-ul">
                  <li className="resume-li">Built out to further my understanding of jQuery and JavaScript, and to get new secure passwords</li>
                  <li className="resume-li">Recently converted from jQuery to React</li>
                  <li className="resume-li">View app HERE and source code HERE</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}