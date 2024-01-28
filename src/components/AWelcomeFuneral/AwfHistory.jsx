import { Link } from 'react-router-dom';
import { awfPosts } from '../../utils/aWelcomeFuneral';
import AwfHeader from './AwfHeader';

export default function AwfHistory() {
  return (
    <div className="awf-history">
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
