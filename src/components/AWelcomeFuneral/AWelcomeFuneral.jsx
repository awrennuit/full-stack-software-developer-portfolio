import { awfPosts } from '../../utils/aWelcomeFuneral';
import AwfPost from './AwfPost';

export default function AWelcomeFuneral() {
  return (
    <div className="a-welcome-funeral">
      {awfPosts.map((post, i) => (
        <AwfPost key={i} post={post} />
      ))}
    </div>
  );
}
