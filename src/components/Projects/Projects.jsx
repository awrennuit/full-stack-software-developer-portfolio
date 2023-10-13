import { allProjects } from '../../utils/allProjects';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>projects - awren nuit's software engineering portfolio</title>
        <link rel="canonical" href="http://awrennuit.com/#/projects" />
        <meta
          name="description"
          content="Full stack software engineer awren nuit's past personal projects. Most projects have a link to both the source code and a demo."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, Password Generator, awren, awren nuit"
        />
      </Helmet>
      <Header />
      <main className="projects">
        <ul className="projects__list-container">
          {allProjects.map((card, i) => (
            <li key={i} className="projects__list-item">
              <ProjectCard
                altText={card.altText}
                appUrl={card.appUrl}
                codeUrl={card.codeUrl}
                description={card.description}
                externalAppUrl={card.externalAppUrl}
                image={card.image}
                oneButton={card.oneButton}
                title={card.title}
              />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
