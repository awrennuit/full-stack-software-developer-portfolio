import { useState } from 'react';
import { modeList, noteNames } from '../../../utils/dungeonRush';

export default function KeyAndMode({ getRandomNumber }) {
  const [key, setKey] = useState({ roll: null, value: null });
  const [mode, setMode] = useState({ roll: null, value: null });

  const rollKey = () => {
    const roll = getRandomNumber(1, noteNames.length);

    setKey({
      roll: roll,
      value: noteNames[roll - 1],
    });
  };

  const rollMode = () => {
    const roll = getRandomNumber(1, modeList.length);

    setMode({
      roll: roll,
      value: modeList[roll - 1],
    });
  };

  const rollKeyAndMode = () => {
    rollKey();
    rollMode();
  };

  return (
    <section className="album-idea-generator__card">
      <h2>key & mode</h2>
      <div className="album-idea-generator__content-top">
        <p>
          (1d{noteNames.length}, 1d{modeList.length})
        </p>
        <button className="album-idea-generator__btn" onClick={rollKeyAndMode}>
          {!key.value ? 'roll' : 'reroll'}
        </button>
      </div>
      {key.value && (
        <p>
          <strong>
            {key.value} {mode.value}
          </strong>{' '}
          ({key.roll}, {mode.roll})
        </p>
      )}
    </section>
  );
}
