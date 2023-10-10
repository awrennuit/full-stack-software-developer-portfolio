import '../../stylesheets/projects.css';

export default function ProjectCard({
  altText,
  appUrl,
  codeUrl,
  descriptionLineOne,
  descriptionLineTwo,
  externalAppUrl,
  image,
  oneButton,
  title,
}) {
  return (
    <div className="project-card">
      <img src={image} alt={altText} height="300" width="400" />
      <div className="project-overlay">
        <h2>{title}</h2>
        <p>
          {descriptionLineOne}
          <br />
          {descriptionLineTwo}
        </p>
        <button
          className={
            !oneButton ? 'project-btn-code' : 'project-btn-code-single'
          }
          onClick={() => window.open(codeUrl, '_blank')}
        >
          View Code
        </button>
        {!oneButton ? (
          <button
            className="project-btn-app"
            onClick={appUrl ? appUrl : externalAppUrl}
          >
            View App
          </button>
        ) : null}
      </div>
    </div>
  );
}
