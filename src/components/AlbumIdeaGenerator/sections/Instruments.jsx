import { useState } from 'react';

export default function Instruments({ getRandomNumber }) {
  const [instruments, setInstruments] = useState({
    rollOne: null,
    rollTwo: null,
    total: null,
  });

  const rollInstruments = () => {
    const rollOne = getRandomNumber(1, 4);
    const rollTwo = getRandomNumber(1, 4);

    setInstruments({
      rollOne: rollOne,
      rollTwo: rollTwo,
      total: rollOne + rollTwo + 1,
    });
  };

  return (
    <div className="album-idea-generator__card">
      <h2>number of instruments</h2>
      <div className="album-idea-generator__content-top">
        <p>(2d4 + 1)</p>
        <button className="album-idea-generator__btn" onClick={rollInstruments}>
          {!instruments.total ? 'roll' : 'reroll'}
        </button>
      </div>
      {instruments.total && (
        <p>
          <strong>{instruments.total}</strong> = {instruments.rollOne} +{' '}
          {instruments.rollTwo} + 1
        </p>
      )}
    </div>
  );
}
