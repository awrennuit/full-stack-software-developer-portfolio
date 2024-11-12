import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { storyData } from '../utils/storyData';
import Header from './Header';

export default function Stories() {
  return (
    <>
      <Helmet>
        <title>stories - awren nuit’s software engineering portfolio</title>
        <link rel="canonical" href="http://www.awrennuit.com/#/stories" />
        <meta
          name="description"
          content="Stories written by awren nuit. Includes poems, short stories, and a mock blog."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, Short stories, Stories, Mock blog, Poems, awren, awren nuit"
        />
      </Helmet>
      <Header />
      <main className="main-container stories">
        <h1>Stories</h1>
        <ul>
          {storyData.map(story => (
            <li key={story.id}>
              <Link className="u-link" to={story.route}>
                <cite>{story.title}</cite>, {story.type} ({story.year})
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
