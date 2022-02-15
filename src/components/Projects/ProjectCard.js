import "./Projects.css";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.image} alt={props.altText} height="300" width="400" />
      <div className="project-overlay">
        <h2>{props.title}</h2>
        <p>
          {props.descriptionLineOne}
          <br />
          {props.descriptionLineTwo}
        </p>
        <button
          className={
            !props.oneButton ? "project-btn-code" : "project-btn-code-single"
          }
          onClick={() => window.open(props.codeUrl, "_blank")}
        >
          View Code
        </button>
        {!props.oneButton ? (
          <button
            className="project-btn-app"
            onClick={props.appUrl ? props.appUrl : props.externalAppUrl}
          >
            View App
          </button>
        ) : null}
      </div>
    </div>
  );
}
