import { useState } from 'react';
import { albumTheme } from '../../../utils/dungeonRush';

export default function Theme({ getRandomNumber }) {
  const [theme, setTheme] = useState({ roll: null, result: null });

  const rollTheme = () => {
    const num = getRandomNumber(1, albumTheme.length);

    setTheme({ roll: num, result: albumTheme[num - 1] });
  };
  return (
    <div className="album-idea-generator__card">
      <h2>album story & theme</h2>
      <div className="album-idea-generator__content-top">
        <p>(1d{albumTheme?.length})</p>
        <button className="album-idea-generator__btn" onClick={rollTheme}>
          {!theme.result ? 'roll' : 'reroll'}
        </button>
      </div>
      {theme.result && (
        <p>
          {theme.result}. ({theme.roll})
        </p>
      )}
    </div>
  );
}
