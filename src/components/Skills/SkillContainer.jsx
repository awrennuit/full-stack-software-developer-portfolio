export default function SkillContainer({ imageUrl, label }) {
  return (
    <figure className="skill-container">
      <img height="50" width="50" src={imageUrl} alt="" loading="lazy" />
      <figcaption>{label}</figcaption>
    </figure>
  );
}
