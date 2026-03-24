import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';
import BriefIntroduction from './sections/BriefIntroduction';
import CommonGear from './sections/CommonGear';
import Inspiration from './sections/Inspiration';
import MoreRecommendations from './sections/MoreRecommendations';
import MyMethod from './sections/MyMethod';
import ThankYou from './sections/ThankYou';
import MusicHeader from '../MusicHeader';

export default function DungeonSynth() {
  const location = useLocation();

  useEffect(() => {
    const hash = location?.hash;
    const $el = hash && document.getElementById(hash.slice(1));

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if ($el)
      $el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
  }, [location?.hash]);

  return (
    <div className="u-music-container dungeon-synth">
      <Helmet>
        <title>a dungeon synth primer</title>
        <link rel="canonical" href="https://www.awrennuit.com/dungeon-synth" />
        <meta
          name="description"
          content="A brief Dungeon Synth primer, including common gear and how to make make the music. Written by Aveline Baudelaire aka Wooden Vessels."
        />
        <meta
          name="keywords"
          content="dungeon synth, how to make dungeon synth, how do i make dungeon synth, dungeon synth gear, dungeon synth intro, dungeon synth introduction, dungeon synth basics, dungeon synth primer, dungeon synth gear, dungeon synth history, dungeon rush, wooden vessels, aveline baudelaire"
        />
      </Helmet>
      <MusicHeader />
      <div className="u-music-container__inner">
        <header>
          <div className="dungeon-synth__title-container">
            <h1>
              a dungeon synth primer <span>by Aveline Baudelaire</span>
            </h1>
          </div>
          <nav>
            <h2 className="dungeon-synth__nav-title">jump to section</h2>
            <Link to="/dungeon-synth#intro">I. introduction</Link>
            <Link to="/dungeon-synth#recs">II. recommendations</Link>
            <Link to="/dungeon-synth#gear">III. common gear</Link>
            <Link to="/dungeon-synth#inspiration">IV. inspiration</Link>
            <Link to="/dungeon-synth#method">V. my method</Link>
            <Link to="/dungeon-synth#thanks">VI. final thoughts</Link>
          </nav>
          <AudioPlayer />
        </header>
        <main>
          <section>
            <h3 id="intro">I. a brief introduction</h3>
            <BriefIntroduction />
          </section>

          <section>
            <h3 id="recs">II. more recommendations</h3>
            <MoreRecommendations />
          </section>

          <section>
            <h3 id="gear">III. common gear</h3>
            <CommonGear />
          </section>

          <section>
            <h3 id="inspiration">IV. inspiration</h3>
            <Inspiration />
          </section>

          <section>
            <h3 id="method">V. my method</h3>
            <MyMethod />
          </section>

          <section>
            <h3 id="thanks">VI. thank you!</h3>
            <ThankYou />
          </section>
        </main>
      </div>
    </div>
  );
}
