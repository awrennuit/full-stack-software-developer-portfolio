import { useState } from 'react';
import { dungeonVaultAlbums } from '../../utils/bandcampAlbums';
import { dungeonVaultArtists } from '../../utils/dungeonVaultArtists';
import MusicHeader from '../MusicHeader';

export default function DungeonVault() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleArtistClick = (artist) => {
    const formattedArtist = artist.replace(/\s+/g, '_').toLowerCase();

    if (!dungeonVaultAlbums[formattedArtist]) return;

    setSelectedAlbum(dungeonVaultAlbums[formattedArtist]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="u-music-container dungeon-vault">
      <MusicHeader />
      <div className="u-music-container__inner">
        <h1>dungeon vault</h1>
        <p className="u-music-container__content-block">
          a collection of some of my favorite dungeon synth artists. clicking an
          artist name will load in one of their albums. clicking on the album
          name in the player will bring you to their bandcamp page. enjoy!
        </p>

        {selectedAlbum && (
          <iframe
            className="embedded-music__player"
            style={{ height: selectedAlbum.height }}
            src={`https://bandcamp.com/EmbeddedPlayer/album=${selectedAlbum.albumId}/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/`}
            seamless
            title="Bandcamp embedded player"
          >
            <a href={selectedAlbum.link}>{selectedAlbum.linkLabel}</a>
          </iframe>
        )}

        <ul className="dungeon-vault__artist-list">
          {dungeonVaultArtists.map((artist, i) => (
            <li key={i}>
              <button
                className={`dungeon-vault__artist-btn${
                  selectedAlbum?.artist === artist
                    ? ' dungeon-vault__artist-btn--active'
                    : ''
                }
                `}
                onClick={() => handleArtistClick(artist)}
              >
                {artist}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
