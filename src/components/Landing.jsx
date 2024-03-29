import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>awren nuit’s software engineering portfolio</title>
        <link rel="canonical" href="http://www.awrennuit.com/" />
        <meta
          name="description"
          content="Full Stack Software Engineer portfolio for awren nuit. awren does front end and back end development using technologies like React, Vue, Node.js, and Ruby on Rails."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, awren, awren nuit"
        />
      </Helmet>
      <main className="landing">
        <p>Hi there!</p>
        <p>
          I’m&nbsp;
          <span className="landing__name">awren nuit</span>.
        </p>
        <p>I bring ideas to reality.</p>
        <div className="landing__btn-container">
          <Link className="landing__btn" to="/about">
            Go
          </Link>
          <span className="landing__decoration-double"></span>
          <span className="landing__decoration-single"></span>
        </div>
      </main>
    </>
  );
}
