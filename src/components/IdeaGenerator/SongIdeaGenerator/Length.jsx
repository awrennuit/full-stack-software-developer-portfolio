import { useState } from 'react';

export default function Length({ getRandomNumber }) {
  const [length, setLength] = useState({
    isFirstThreeHigher: false,
    rollOne: null,
    rollTwo: null,
    rollThree: null,
    rollFour: null,
    min: null,
    max: null,
  });

  const rollLength = () => {
    const rollOne = getRandomNumber(1, 6);
    const rollTwo = getRandomNumber(1, 6);
    const sumOne = (rollOne + rollTwo) / 2;

    let rollThree = getRandomNumber(1, 6);
    let rollFour = getRandomNumber(1, 6);
    let sumTwo = (rollThree + rollFour) / 2;

    while (sumOne === sumTwo) {
      rollThree = getRandomNumber(1, 5);
      rollFour = getRandomNumber(1, 5);
      sumTwo = (rollThree + rollFour) / 2;
    }

    const isFirstThreeHigher = sumOne > sumTwo ? true : false;

    setLength({
      isFirstThreeHigher: isFirstThreeHigher,
      rollOne: rollOne,
      rollTwo: rollTwo,
      rollThree: rollThree,
      rollFour: rollFour,
      min: isFirstThreeHigher ? sumTwo : sumOne,
      max: isFirstThreeHigher ? sumOne : sumTwo,
    });
  };

  return (
    <section className="album-idea-generator__card">
      <h2>song length</h2>
      <div className="album-idea-generator__content-top">
        <p>(2d6 / 2)</p>
        <button className="album-idea-generator__btn" onClick={rollLength}>
          {!length.min ? 'roll' : 'reroll'}
        </button>
      </div>
      {length.min && (
        <p>
          <strong>{length.min}</strong> minute{length.min !== 1 && 's'} to{' '}
          <strong>{length.max}</strong> minutes (
          {length.isFirstThreeHigher ? (
            <>
              {length.rollThree} + {length.rollFour} & {length.rollOne} +{' '}
              {length.rollTwo}
            </>
          ) : (
            <>
              {length.rollOne} + {length.rollTwo} & {length.rollThree} +{' '}
              {length.rollFour}
            </>
          )}
          )
        </p>
      )}
    </section>
  );
}
