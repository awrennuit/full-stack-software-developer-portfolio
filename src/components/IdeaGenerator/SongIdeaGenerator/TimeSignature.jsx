import { useState } from 'react';
import { timeSignatureList } from '../../../utils/dungeonRush';

export default function TimeSignature({ getRandomNumber }) {
  const [timeSignature, setTimeSignature] = useState(null);

  const rollTimeSignature = () => {
    const roll =
      timeSignatureList[getRandomNumber(1, timeSignatureList.length) - 1];

    setTimeSignature(roll);
  };

  return (
    <section className="album-idea-generator__card">
      <h2>time signature</h2>
      <div className="album-idea-generator__content-top">
        <p>(favors conventional)</p>
        <button
          className="album-idea-generator__btn"
          onClick={rollTimeSignature}
        >
          {!timeSignature ? 'roll' : 'reroll'}
        </button>
      </div>
      {timeSignature && (
        <p>
          <strong>{timeSignature}</strong>
        </p>
      )}
    </section>
  );
}
