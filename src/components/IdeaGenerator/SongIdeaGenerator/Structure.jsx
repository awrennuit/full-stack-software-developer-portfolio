import { useState } from 'react';
import { songStructure } from '../../../utils/dungeonRush';

export default function Structure({ getRandomNumber }) {
  const [structure, setStructure] = useState({ roll: null, value: null });

  const rollStructure = () => {
    const roll = getRandomNumber(1, songStructure.length);

    setStructure({
      roll: roll,
      value: songStructure[roll - 1],
    });
  };

  return (
    <section className="album-idea-generator__card">
      <h2>song structure</h2>
      <div className="album-idea-generator__content-top">
        <p>(1d{songStructure.length})</p>
        <button className="album-idea-generator__btn" onClick={rollStructure}>
          {!structure.value ? 'roll' : 'reroll'}
        </button>
      </div>
      {structure.value && (
        <p>
          <strong>{structure.value}</strong> ({structure.roll})
        </p>
      )}
    </section>
  );
}
