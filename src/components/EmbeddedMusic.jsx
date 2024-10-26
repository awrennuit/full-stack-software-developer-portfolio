import { useEffect, useState } from 'react';
import { bandcampAlbums } from '../utils/bandcampAlbums';

export default function EmbeddedMusic() {
  const [selectedAlbum, setSelectedAlbum] = useState({});

  useEffect(() => {
    setSelectedAlbum(bandcampAlbums['Wooden Vessels (dungeon synth)'][0]);
  }, []);

  const handleAlbumSelect = (e) => setSelectedAlbum(JSON.parse(e.target.value));

  return (
    <div className="embedded-music">
      <div className="embedded-music__select-container">
        <select
          id="music-list"
          name="my-music"
          defaultValue=""
          onChange={handleAlbumSelect}
        >
          <option value="" disabled>
            listen to an album
          </option>
          {Object.entries(bandcampAlbums).map((artist, i) => (
            <optgroup key={i} label={artist[0]}>
              {artist[1].map((album, j) => (
                <option key={j} value={JSON.stringify(album)}>
                  {album.label}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <iframe
        className="embedded-music__player"
        src={`https://bandcamp.com/EmbeddedPlayer/album=${selectedAlbum.albumId}/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/`}
        seamless
        title="Bandcamp embedded player"
      >
        <a href={selectedAlbum.link}>{selectedAlbum.linkLabel}</a>
      </iframe>
    </div>
  );
}
