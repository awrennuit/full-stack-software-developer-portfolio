export default function AwfPost({ post }) {
  return (
    <article className="awf-post">
      <p className="awf-post__date">{post.date}</p>
      <h2 className="awf-post__heading">{post.title}</h2>
      {post.content.map((content, i) => (
        <div className="awf-post__block" key={i}>
          {content.heading && (
            <h3 className="awf-post__subheading">{content.heading}</h3>
          )}
          {content.paragraphs.map((paragraph, j) => (
            <p className="awf-post__paragraph" key={j}>
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </article>
  );
}
