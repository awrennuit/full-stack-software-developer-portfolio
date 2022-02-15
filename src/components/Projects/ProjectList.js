import { useHistory } from "react-router-dom";
import "./Projects.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProjectCard from "./ProjectCard";
import { allProjects } from "../../utils/allProjects";

export default function Projects() {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="project-container">
        <div className="project-card-center">
          {allProjects.map((card, i) => (
            <ProjectCard
              altText={card.altText}
              appUrl={card.appUrl ? () => history.push(card.appUrl) : null}
              codeUrl={card.codeUrl}
              descriptionLineOne={card.descriptionLineOne}
              descriptionLineTwo={card.descriptionLineTwo}
              externalAppUrl={
                card.externalAppUrl
                  ? () => window.open(card.externalAppUrl, "_blank")
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
