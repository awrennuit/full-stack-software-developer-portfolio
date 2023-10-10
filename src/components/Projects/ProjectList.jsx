import { allProjects } from '../../utils/allProjects';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import '../../stylesheets/projects.css';
import Header from '../Header';
import Footer from '../Footer';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Projects - Full Stack Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Full stack software engineer awren nuit's past personal projects. Most projects have a link to both the source code and a demo."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, awren, awren nuit"
        />
      </Helmet>
      <Header />
      <div className="project-container">
        <div className="project-card-center">
          {allProjects.map((card, i) => (
            <ProjectCard
              altText={card.altText}
              appUrl={card.appUrl ? () => navigate(card.appUrl) : null}
              codeUrl={card.codeUrl}
              descriptionLineOne={card.descriptionLineOne}
              descriptionLineTwo={card.descriptionLineTwo}
              externalAppUrl={
                card.externalAppUrl
                  ? () => window.open(card.externalAppUrl, '_blank')
                  : null
              }
              image={card.image}
              key={i}
              oneButton={card.oneButton}
              title={card.title}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
