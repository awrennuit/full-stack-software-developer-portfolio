import { awfPosts } from '../../utils/aWelcomeFuneral';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AwfHeader from './AwfHeader';

export default function AwfHistory() {
  return (
    <div className="awf-history">
      <Helmet>
        <title>a welcome funeral - history</title>
        <link
          rel="canonical"
          href="http://www.awrennuit.com/#/a-welcome-funeral/history"
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
        <article className="awf-history__inner">
          <ul className="awf-history__list">
            {awfPosts.map((post) => (
              <li className="awf-history__list-item" key={post.slug}>
                <Link
                  className="awf-history__link"
                  to={`/a-welcome-funeral/${post.slug}`}
                >
                  <span className="awf-history__date">{post.date}</span>
                  <span className="awf-history__title">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </div>
  );
}
