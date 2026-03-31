import { Helmet } from 'react-helmet-async';
import Challenge from './Challenge';
import Instruments from './Instruments';
import Intro from './Intro';
import Length from './Length';
import Songs from './Songs';
import Style from './Style';
import Theme from './Theme';

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
          href="https://www.awrennuit.com/album-idea-generator"
        />
        <meta
          name="description"
          content="A dungeon synth & fantasy album idea generator heavily inspired by Bartizanier’s Dungeon Rushes. Created by Aveline Baudelaire aka Wooden Vessels."
        />
        <meta
          name="keywords"
          content="dungeon synth, fantasy album idea generator, dungeon synth idea generator, fantasy story idea generator, dungeon rush, wooden vessels, aveline baudelaire"
        />
      </Helmet>
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
            <section className="album-idea-generator__card">
              <h2>time to complete the album</h2>
              <p>
                <strong>28</strong> days
              </p>
            </section>
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
