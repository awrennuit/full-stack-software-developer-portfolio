import { awfPosts } from '../../utils/aWelcomeFuneral';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
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
      <Helmet>
        <title>a welcome funeral</title>
        <link
          rel="canonical"
          href="http://www.awrennuit.com/#/a-welcome-funeral/a-little-intro"
        />
        <meta
          name="description"
          content="a welcome funeral for society. a place where free thought and radical ideas reign supreme"
        />
        <meta
          name="keywords"
          content="a welcome funeral, awelcomefuneral, oddities, anomalies, philosophy, free thought, radical ideas, aveline baudelaire"
        />
      </Helmet>
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
