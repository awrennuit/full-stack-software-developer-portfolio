import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../stylesheets/landing.css';

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>Full Stack Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Full Stack Software Engineer portfolio for awren nuit. awren does front end and back end development using technologies like React, Vue, Node.js, and Ruby on Rails."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, awren, awren nuit"
        />
      </Helmet>
      <div className="main-container">
        <div className="landing-container">
          <p>Hi there!</p>
          <p>
            I'm&nbsp;
            <span className="landing-name">awren nuit</span>.
          </p>
          <p>I bring ideas to reality.</p>
          <div className="landing-btn-container">
            <Link className="landing-button" to="/about">
              Go
            </Link>
            <span className="landing-box-lg"></span>
            <span className="landing-box-sm"></span>
          </div>
        </div>
      </div>
    </>
  );
}
