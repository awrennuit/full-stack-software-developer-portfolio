import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Feeling from './Feeling';
import Intro from './Intro';
import KeyAndMode from './KeyAndMode';
import Length from './Length';
import NumInstruments from './NumInstruments';
import Structure from './Structure';
import Style from '../AlbumIdeaGenerator/Style';
import Tempo from './Tempo';
import TimeSignature from './TimeSignature';
import TypeInstruments from './TypeInstruments';

export default function SongIdeaGenerator() {
  const [numInstruments, setNumInstruments] = useState({
    rollOne: null,
    rollTwo: null,
    rollThree: null,
    total: null,
  });

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="u-music-container album-idea-generator">
      <Helmet>
        <title>song idea generator</title>
        <link
          rel="canonical"
          href="https://www.awrennuit.com/song-idea-generator"
        />
        <meta
          name="description"
          content="A dungeon synth & fantasy song idea generator heavily inspired by Bartizanier’s Dungeon Rushes. Created by Aveline Baudelaire aka Wooden Vessels."
        />
        <meta
          name="keywords"
          content="dungeon synth, fantasy song idea generator, dungeon synth idea generator, fantasy story idea generator, dungeon rush, dungeon shamble, wooden vessels, aveline baudelaire"
        />
      </Helmet>
      <div className="album-idea-generator__inner">
        <header>
          <div className="album-idea-generator__title-container">
            <h1>
              song idea generator <span>by Aveline Baudelaire</span>
            </h1>
          </div>
        </header>
        <main>
          <article>
            <Intro />
            <KeyAndMode getRandomNumber={getRandomNumber} />
            <TimeSignature getRandomNumber={getRandomNumber} />
            <Tempo getRandomNumber={getRandomNumber} />
            <Length getRandomNumber={getRandomNumber} />
            <Structure getRandomNumber={getRandomNumber} />
            <Feeling getRandomNumber={getRandomNumber} />
            <Style getRandomNumber={getRandomNumber} />
            <NumInstruments
              getRandomNumber={getRandomNumber}
              numInstruments={numInstruments}
              setNumInstruments={setNumInstruments}
            />
            <TypeInstruments
              getRandomNumber={getRandomNumber}
              numInstruments={numInstruments.total}
            />
          </article>
        </main>
      </div>
    </div>
  );
}
