import { Fragment, useState } from 'react';
import { special } from '../../../utils/dungeonRush';

export default function Challenge({ getRandomNumber }) {
  const [challenge, setChallenge] = useState([]);

  const resetChallenge = () => setChallenge([]);

  const rollChallenge = (i = null) => {
    const num = getRandomNumber(1, special.length);
    const duplicates = challenge.filter((c) => c.result === special[num - 1]);
    let existingData = [...challenge];

    if (duplicates.length > 0) {
      rollChallenge(i);
    } else if (i !== null) {
      existingData[i] = { roll: num, result: special[num - 1] };
      setChallenge(existingData);
    } else {
      setChallenge((challenge) => [
        ...challenge,
        { roll: num, result: special[num - 1] },
      ]);
    }
  };
  return (
    <div className="album-idea-generator__card">
      <h2>special challenges & restrictions</h2>
      <div className="album-idea-generator__content-top">
        <p>(1d{special?.length}, max three)</p>
        {challenge.length === 0 ? (
          <button
            className="album-idea-generator__btn"
            onClick={() => rollChallenge()}
          >
            roll
          </button>
        ) : (
          <button
            className="album-idea-generator__btn"
            onClick={resetChallenge}
          >
            reset
          </button>
        )}
      </div>
      {challenge.length > 0 && (
        <ul>
          {challenge.map((c, i) => (
            <Fragment key={i}>
              <li>
                {i + 1}. {c.result}. ({c.roll}){' '}
                <button
                  className="album-idea-generator__btn"
                  onClick={() => rollChallenge(i)}
                >
                  reroll
                </button>
              </li>
              {challenge.length === i + 1 && i < 2 && (
                <li key={i}>
                  <button
                    className="album-idea-generator__btn"
                    onClick={() => rollChallenge()}
                  >
                    roll
                  </button>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}
