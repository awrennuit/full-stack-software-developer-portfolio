import '../../stylesheets/home.css';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import About from './About';
import Skills from '../Skills/Skills';
import Footer from '../Footer';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>about - awren nuit's software engineering portfolio</title>
        <meta
          name="description"
          content="More details about full stack software engineer awren nuit, including personal background and frequently-used technologies."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, awren, awren nuit"
        />
      </Helmet>
      <Header />
      <main className="main-container">
        <About />
        <br />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
