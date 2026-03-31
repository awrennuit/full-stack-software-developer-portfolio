import { useState } from 'react';

export default function Length({ getRandomNumber }) {
  const [tempo, setTempo] = useState({
    rollOne: null,
    rollTwo: null,
    rollThree: null,
    rollFour: null,
    rollFive: null,
    rollSix: null,
    rollSeven: null,
    rollEight: null,
    rollNine: null,
    total: null,
  });

  const rollTempo = () => {
    const rollOne = getRandomNumber(1, 20);
    const rollTwo = getRandomNumber(1, 20);
    const rollThree = getRandomNumber(1, 20);
    const rollFour = getRandomNumber(1, 20);
    const rollFive = getRandomNumber(1, 20);
    const rollSix = getRandomNumber(1, 20);
    const rollSeven = getRandomNumber(1, 20);
    const rollEight = getRandomNumber(1, 20);
    const rollNine = getRandomNumber(1, 20);
    const sum =
      rollOne +
      rollTwo +
      rollThree +
      rollFour +
      rollFive +
      rollSix +
      rollSeven +
      rollEight +
      rollNine;

    setTempo({
      rollOne: rollOne,
      rollTwo: rollTwo,
      rollThree: rollThree,
      rollFour: rollFour,
      rollFive: rollFive,
      rollSix: rollSix,
      rollSeven: rollSeven,
      rollEight: rollEight,
      rollNine: rollNine,
      total: sum,
    });
  };

  return (
    <section className="album-idea-generator__card">
      <h2>song tempo</h2>
      <div className="album-idea-generator__content-top">
        <p>(9d20)</p>
        <button className="album-idea-generator__btn" onClick={rollTempo}>
          {!tempo.total ? 'roll' : 'reroll'}
        </button>
      </div>
      {tempo.total && (
        <p>
          <strong>{tempo.total}</strong> BPM ({tempo.rollOne} + {tempo.rollTwo}{' '}
          + {tempo.rollThree} + {tempo.rollFour} + {tempo.rollFive} +{' '}
          {tempo.rollSix} + {tempo.rollSeven} + {tempo.rollEight} +{' '}
          {tempo.rollNine})
        </p>
      )}
    </section>
  );
}
