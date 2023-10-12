export default function ProjectCard({
  altText,
  appUrl,
  codeUrl,
  description,
  externalAppUrl,
  image,
  oneButton,
  title,
}) {
  return (
    <div className="project-card" tabIndex={0}>
      <img src={image} alt={altText} />
      <div className="project-card__overlay">
        <h2>{title}</h2>
        <p>{description}</p>
        <button
          className={`project-card__btn ${
            !oneButton ? 'project-card__btn--code' : 'project-card__btn--single'
          }`}
          onClick={() => window.open(codeUrl, '_blank')}
        >
          View Code
        </button>
        {!oneButton ? (
          <button
            className="project-card__btn project-card__btn--app"
            onClick={appUrl ? appUrl : externalAppUrl}
          >
            View App
          </button>
        ) : null}
      </div>
    </div>
  );
}
