import { useState } from 'react';

export default function Songs({ getRandomNumber }) {
  const [songs, setSongs] = useState({
    rollOne: null,
    rollTwo: null,
    total: null,
  });

  const rollSongs = () => {
    const rollOne = getRandomNumber(1, 6);
    const rollTwo = getRandomNumber(1, 6);

    setSongs({
      rollOne: rollOne,
      rollTwo: rollTwo,
      total: rollOne + rollTwo,
    });
  };

  return (
    <div className="album-idea-generator__card">
      <h2>number of songs</h2>
      <div className="album-idea-generator__content-top">
        <p>(2d6)</p>
        <button className="album-idea-generator__btn" onClick={rollSongs}>
          {!songs.total ? 'roll' : 'reroll'}
        </button>
      </div>
      {songs.total && (
        <p>
          <strong>{songs.total}</strong> = {songs.rollOne} + {songs.rollTwo}
        </p>
      )}
    </div>
  );
}
