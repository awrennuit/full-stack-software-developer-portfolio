import { Fragment, useEffect, useState } from 'react';
import { instrumentList } from '../../../utils/dungeonRush';

export default function TypeInstruments({ getRandomNumber, numInstruments }) {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    if (instruments.length <= numInstruments) return;

    setInstruments(prev => prev.slice(0, numInstruments));
    // eslint-disable-next-line
  }, [numInstruments]);

  const resetAll = () => setInstruments([]);

  const rollInstrument = (i = null) => {
    const num = getRandomNumber(1, instrumentList.length);
    const duplicates = instruments.filter(
      c => c.result === instrumentList[num - 1],
    );
    let existingData = [...instruments];

    if (duplicates.length > 0) {
      rollInstrument(i);
    } else if (i !== null) {
      existingData[i] = { roll: num, result: instrumentList[num - 1] };
      setInstruments(existingData);
    } else {
      setInstruments(instruments => [
        ...instruments,
        { roll: num, result: instrumentList[num - 1] },
      ]);
    }
  };

  return (
    <section className="album-idea-generator__card">
      <h2>instruments to use</h2>
      <div className="album-idea-generator__content-top">
        <p>
          (1d{instrumentList.length}, max {numInstruments})
        </p>
        {instruments.length === 0 ? (
          <button
            className="album-idea-generator__btn"
            onClick={() => rollInstrument()}
          >
            roll
          </button>
        ) : (
          <button className="album-idea-generator__btn" onClick={resetAll}>
            reset
          </button>
        )}
      </div>
      {instruments.length > 0 && (
        <ul>
          {instruments.map((c, i) => (
            <Fragment key={i}>
              <li>
                {i + 1}. {c.result}. ({c.roll}){' '}
                <button
                  className="album-idea-generator__btn"
                  onClick={() => rollInstrument(i)}
                >
                  reroll
                </button>
              </li>
              {instruments.length === i + 1 && i < numInstruments - 1 && (
                <li key={i}>
                  <button
                    className="album-idea-generator__btn"
                    onClick={() => rollInstrument()}
                  >
                    roll
                  </button>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      )}
    </section>
  );
}
