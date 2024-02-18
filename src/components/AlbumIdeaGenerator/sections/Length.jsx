import { useState } from 'react';

export default function Length({ getRandomNumber }) {
  const [length, setLength] = useState({
    isFirstThreeHigher: false,
    rollOne: null,
    rollTwo: null,
    rollThree: null,
    rollFour: null,
    rollFive: null,
    rollSix: null,
    min: null,
    max: null,
  });

  const rollLength = () => {
    const rollOne = getRandomNumber(1, 20);
    const rollTwo = getRandomNumber(1, 20);
    const rollThree = getRandomNumber(1, 20);
    const sumOne = rollOne + rollTwo + rollThree;

    let rollFour = getRandomNumber(1, 20);
    let rollFive = getRandomNumber(1, 20);
    let rollSix = getRandomNumber(1, 20);
    let sumTwo = rollFour + rollFive + rollSix;

    while (sumOne === sumTwo) {
      rollFour = getRandomNumber(1, 20);
      rollFive = getRandomNumber(1, 20);
      rollSix = getRandomNumber(1, 20);
      sumTwo = rollFour + rollFive + rollSix;
    }

    const isFirstThreeHigher = sumOne > sumTwo ? true : false;

    setLength({
      isFirstThreeHigher: isFirstThreeHigher,
      rollOne: rollOne,
      rollTwo: rollTwo,
      rollThree: rollThree,
      rollFour: rollFour,
      rollFive: rollFive,
      rollSix: rollSix,
      min: isFirstThreeHigher ? sumTwo : sumOne,
      max: isFirstThreeHigher ? sumOne : sumTwo,
    });
  };

  return (
    <div className="album-idea-generator__card">
      <h2>album length</h2>
      <div className="album-idea-generator__content-top">
        <p>(3d20)</p>
        <button className="album-idea-generator__btn" onClick={rollLength}>
          {!length.min ? 'roll' : 'reroll'}
        </button>
      </div>
      {length.min && (
        <p>
          <strong>{length.min}</strong> minutes to <strong>{length.max}</strong>{' '}
          minutes (
          {length.isFirstThreeHigher ? (
            <>
              {length.rollFour} + {length.rollFive} + {length.rollSix} &{' '}
              {length.rollOne} + {length.rollTwo} + {length.rollThree}
            </>
          ) : (
            <>
              {length.rollOne} + {length.rollTwo} + {length.rollThree} &{' '}
              {length.rollFour} + {length.rollFive} + {length.rollSix}
            </>
          )}
          )
        </p>
      )}
    </div>
  );
}
