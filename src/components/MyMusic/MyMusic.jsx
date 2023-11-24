import { Helmet } from 'react-helmet';
import EmbeddedMusic from '../EmbeddedMusic';
import SummaryAwren from './SummaryAwren';
import SummaryChrysanthemum from './SummaryChrysanthemum';
import SummaryGloomthread from './SummaryGloomthread';
import SummaryWoodenVessels from './SummaryWoodenVessels';

export default function MyMusic() {
  return (
    <div className="u-music-container music">
      <Helmet>
        <title>my music</title>
        <link rel="canonical" href="http://www.awrennuit.com/#/my-music" />
        <meta
          name="description"
          content="I'm a musician. All of my musical projects live here. Learn about the music I make while you listen to it."
        />
        <meta
          name="keywords"
          content="awren, chrysanthemum, gloomthread, wooden vessels, aveline baudelaire"
        />
      </Helmet>
      <main className="u-music-container__inner">
        <h1>my music</h1>
        <p className="u-music-container__content-block">
          greetings and welcome to a compendium of my music and a brief history
          of my solo projects. i grew up playing violin in the school orchestra.
          around 2008 i started making my own music. in 2009 i released my first
          album,{' '}
          <a
            className="u-music-container__link"
            href="https://cavebirdrecords.bandcamp.com/album/a-wren-ep"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Wren
          </a>
          . it's instrumental black metal. since then i've expanded my projects
          to include:
        </p>

        <ul>
          <li>awren: atmospheric black metal</li>
          <li>chrysanthemum: (mostly improvised) ambient guitar</li>
          <li>Gloomthread: funeral doom</li>
          <li>Wooden Vessels: dungeon synth</li>
        </ul>

        <p className="u-music-container__content-block">
          you can listen to all of my albums in the player below. there's a
          little dropdown so you can change the album.
        </p>

        <EmbeddedMusic />
        <SummaryAwren />
        <SummaryChrysanthemum />
        <SummaryGloomthread />
        <SummaryWoodenVessels />
      </main>
    </div>
  );
}
