import { Helmet } from 'react-helmet';
import MusicHeader from '../MusicHeader';
import Instruments from './sections/Instruments';
import Songs from './sections/Songs';
import Length from './sections/Length';
import Style from './sections/Style';
import Theme from './sections/Theme';
import Challenge from './sections/Challenge';
import Intro from './sections/Intro';

export default function AlbumIdeaGenerator() {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="u-music-container album-idea-generator">
      <Helmet>
        <title>album idea generator</title>
        <link
          rel="canonical"
          href="http://www.awrennuit.com/#/album-idea-generator"
        />
        <meta
          name="description"
          content="A dungeon synth & fantasy album idea generator heavily inspired by Bartizanier's Dungeon Rushes. Created by Aveline Baudelaire aka Wooden Vessels."
        />
        <meta
          name="keywords"
          content="dungeon synth, fantasy album idea generator, dungeon synth idea generator, fantasy story idea generator, dungeon rush, wooden vessels, aveline baudelaire"
        />
      </Helmet>
      <MusicHeader />
      <div className="album-idea-generator__inner">
        <header>
          <div className="album-idea-generator__title-container">
            <h1>
              album idea generator <span>by Aveline Baudelaire</span>
            </h1>
          </div>
        </header>
        <main>
          <article>
            <Intro />
            <div className="album-idea-generator__card">
              <h2>time to complete the album</h2>
              <p>
                <strong>21</strong> days
              </p>
            </div>

            <Instruments getRandomNumber={getRandomNumber} />
            <Songs getRandomNumber={getRandomNumber} />
            <Length getRandomNumber={getRandomNumber} />
            <Style getRandomNumber={getRandomNumber} />
            <Theme getRandomNumber={getRandomNumber} />
            <Challenge getRandomNumber={getRandomNumber} />
          </article>
        </main>
      </div>
    </div>
  );
}
