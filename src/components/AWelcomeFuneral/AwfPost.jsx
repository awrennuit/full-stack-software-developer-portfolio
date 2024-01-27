import { useEffect, useState } from 'react';
import { awfPosts } from '../../utils/aWelcomeFuneral';
import { useParams } from 'react-router-dom';
import AwfHeader from './AwfHeader';

export default function AwfPost() {
  const { slug } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost(awfPosts.find((p) => p.slug === slug));
  }, [slug]);

  return (
    <div className="awf-post">
      <AwfHeader />
      <main>
        <article className="awf-post__inner">
          <div className="awf-post__heading-container">
            <h2 className="awf-post__heading">{post?.title}</h2>
            <p className="awf-post__date">{post?.date}</p>
          </div>
          {post?.content?.map((content, i) => (
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
      </main>
    </div>
  );
}
