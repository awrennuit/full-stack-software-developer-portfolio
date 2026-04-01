import { useState } from 'react';
import { feelingsList } from '../../../utils/dungeonRush';

export default function Feeling({ getRandomNumber }) {
  const [feeling, setFeeling] = useState({ roll: null, value: null });

  const rollFeeling = () => {
    const roll = getRandomNumber(1, feelingsList.length);

    setFeeling({
      roll: roll,
      value: feelingsList[roll - 1],
    });
  };

  return (
    <section className="album-idea-generator__card">
      <h2>feeling/emotion</h2>
      <div className="album-idea-generator__content-top">
        <p>(1d{feelingsList.length})</p>
        <button className="album-idea-generator__btn" onClick={rollFeeling}>
          {!feeling.value ? 'roll' : 'reroll'}
        </button>
      </div>
      {feeling.value && (
        <p>
          <strong>{feeling.value}</strong> ({feeling.roll})
        </p>
      )}
    </section>
  );
}
