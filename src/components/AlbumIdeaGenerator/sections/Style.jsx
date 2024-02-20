import { useState } from 'react';
import { styleAesthetic } from '../../../utils/dungeonRush';

export default function Style({ getRandomNumber }) {
  const [style, setStyle] = useState({ roll: null, result: null });

  const rollStyle = () => {
    const num = getRandomNumber(1, styleAesthetic.length);

    setStyle({ roll: num, result: styleAesthetic[num - 1] });
  };
  return (
    <div className="album-idea-generator__card">
      <h2>album style & aesthetic</h2>
      <div className="album-idea-generator__content-top">
        <p>(1d{styleAesthetic?.length})</p>
        <button className="album-idea-generator__btn" onClick={rollStyle}>
          {!style.result ? 'roll' : 'reroll'}
        </button>
      </div>
      {style.result && (
        <p>
          {style.result} ({style.roll})
        </p>
      )}
    </div>
  );
}
