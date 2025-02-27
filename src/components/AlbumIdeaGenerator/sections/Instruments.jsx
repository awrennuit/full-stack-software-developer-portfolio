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
    const rollThree = getRandomNumber(1, 4);

    setInstruments({
      rollOne: rollOne,
      rollTwo: rollTwo,
      rollThree: rollThree,
      total: rollOne + rollTwo + rollThree,
    });
  };

  return (
    <div className="album-idea-generator__card">
      <h2>number of instruments</h2>
      <div className="album-idea-generator__content-top">
        <p>(3d4)</p>
        <button className="album-idea-generator__btn" onClick={rollInstruments}>
          {!instruments.total ? 'roll' : 'reroll'}
        </button>
      </div>
      {instruments.total && (
        <p>
          <strong>{instruments.total}</strong> = {instruments.rollOne} +{' '}
          {instruments.rollTwo} + {instruments.rollThree}
        </p>
      )}
    </div>
  );
}
