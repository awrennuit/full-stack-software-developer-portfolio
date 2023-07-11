import { useNavigate } from 'react-router-dom';
import '../../stylesheets/projects.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProjectCard from './ProjectCard';
import { allProjects } from '../../utils/allProjects';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
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
