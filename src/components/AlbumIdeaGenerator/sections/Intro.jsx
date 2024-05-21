export default function Intro() {
  return (
    <div className="album-idea-generator__intro-container">
      <p className="u-music-container__content-block album-idea-generator__intro">
        <em>heavily</em> inspired by{' '}
        <a
          className="u-music-container__link"
          href="https://bartizanchill.bandcamp.com/music"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bartizanier’s
        </a>{' '}
        periodic{' '}
        <a
          className="u-music-container__link"
          href="https://dungeonsynth.proboards.com/thread/1085/dungeon-rush-open-challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dungeon Rush
        </a>{' '}
        challenges, this is a tool to help you get going on your next album. i
        often find it hard to create without setting some parameters and a
        deadline beforehand...which is why i love Dungeon Rushes so much.
      </p>
      <p className="u-music-container__content-block album-idea-generator__intro">
        this tool provides structure such as a deadline, how many instruments or
        patches to use, how many songs to have, and/or how long the album should
        be. it also chooses a style or aesthetic, a theme or story, and has some
        additional optional restrictions.
      </p>
      <p className="u-music-container__content-block album-idea-generator__intro">
        use it purely for inspiration. follow it to the letter. or anything in
        between. if you’re really ambitious you can get some friends involved,
        too. happy music-making! 💜
      </p>
    </div>
  );
}
