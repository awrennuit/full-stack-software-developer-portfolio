import { awfPosts } from '../../utils/aWelcomeFuneral';
import AwfPost from './AwfPost';

export default function AWelcomeFuneral() {
  return (
    // TODO: load by :slug
    <main className="a-welcome-funeral">
      {awfPosts.map((post, i) => (
        <AwfPost key={i} post={post} />
      ))}
    </main>
  );
}
