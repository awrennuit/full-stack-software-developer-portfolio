import { Link } from 'react-router-dom';

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
        <a
          className={`project-card__btn ${
            !oneButton ? 'project-card__btn--code' : 'project-card__btn--single'
          }`}
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
        {!oneButton ? (
          appUrl ? (
            <Link
              className="project-card__btn project-card__btn--app"
              to={appUrl}
            >
              View App
            </Link>
          ) : (
            <a
              className="project-card__btn project-card__btn--app"
              href={externalAppUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View App
            </a>
          )
        ) : null}
      </div>
    </div>
  );
}
