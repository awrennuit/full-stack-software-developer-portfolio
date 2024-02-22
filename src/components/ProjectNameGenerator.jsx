import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { firstWord, secondWord } from '../utils/dungeonSynthNameList';
import MusicHeader from './MusicHeader';

export default function ProjectNameGenerator() {
  const [projectName, setProjectName] = useState(null);

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max + 1);
  };

  const generateName = () => {
    const firstNum = getRandomNumber(firstWord.length);
    const secondNum = getRandomNumber(secondWord.length);
    const wordOne = firstWord[firstNum - 1];
    const wordTwo = secondWord[secondNum - 1];

    setProjectName(`${wordOne} ${wordTwo}`);
  };

  return (
    <div className="u-music-container project-name-generator">
      <Helmet>
        <title>dungeon synth project name generator</title>
        <link
          rel="canonical"
          href="http://www.awrennuit.com/#/project-name-generator"
        />
        <meta
          name="description"
          content="A dungeon synth project name generator using the traditional two-word naming convention. Created by Aveline Baudelaire aka Wooden Vessels."
        />
        <meta
          name="keywords"
          content="dungeon synth, band name generator, dungeon synth name generator, dungeon synth project name generator, project name generator, dungeon rush, wooden vessels, aveline baudelaire"
        />
      </Helmet>
      <MusicHeader />
      <div className="project-name-generator__inner">
        <header>
          <div className="project-name-generator__title-container">
            <h1>
              dungeon synth project name generator{' '}
              <span>by Aveline Baudelaire</span>
            </h1>
          </div>
        </header>
        <main>
          <article>
            <button
              className="project-name-generator__btn"
              onClick={generateName}
            >
              {projectName ? 'reroll' : 'roll'}
            </button>
            {projectName && <p>{projectName}</p>}
          </article>
        </main>
      </div>
    </div>
  );
}
