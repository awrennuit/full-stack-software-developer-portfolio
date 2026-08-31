import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
        <title>dungeon synth: what it is & how to make it | a primer</title>
        <link rel="canonical" href="https://www.awrennuit.com/dungeon-synth" />
        <meta
          name="description"
          content="What is dungeon synth? Learn its history, sound, common gear, sources of inspiration, and how to make it. Written by Aveline Baudelaire of Wooden Vessels."
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
              dungeon synth: what it is & how to make it{' '}
              <span>a primer by Aveline Baudelaire</span>
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
          <section id="intro">
            <h2>I. what is dungeon synth?</h2>
            <BriefIntroduction />
          </section>

          <section id="recs">
            <h2>II. dungeon synth recommendations</h2>
            <MoreRecommendations />
          </section>

          <section id="gear">
            <h2>III. dungeon synth gear</h2>
            <CommonGear />
          </section>

          <section id="inspiration">
            <h2>IV. dungeon synth inspiration</h2>
            <Inspiration />
          </section>

          <section id="method">
            <h2>V. how i make dungeon synth</h2>
            <MyMethod />
          </section>

          <section id="thanks">
            <h2>VI. closing thoughts</h2>
            <ThankYou />
          </section>
        </main>
      </div>
    </div>
  );
}
