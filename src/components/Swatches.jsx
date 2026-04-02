import { useState } from 'react';
import { swatchList } from '../utils/swatches';
import Header from './Header';

export default function Swatches() {
  const [isBgWhite, setIsBgWhite] = useState(true);

  const copySwatch = i => {
    document.getElementById(`swatch-${i}`).focus();
    document.getElementById(`swatch-${i}`).select();
    document.execCommand('copy');
  };

  return (
    <>
      <Header />
      <main className="swatches">
        <button
          className="swatches__toggle-btn"
          onClick={() => setIsBgWhite(!isBgWhite)}
        >
          <span
            className={
              isBgWhite
                ? 'swatches__toggle-icon'
                : 'swatches__toggle-icon swatches__toggle-icon--active'
            }
          ></span>
          <span className="a11y">Toggle light/dark mode</span>
        </button>
        <article
          className={`swatches__container${
            isBgWhite ? ' swatches__container--white' : ''
          }`}
        >
          <h1 className="a11y">Swatch gallery</h1>
          {swatchList.map((item, i) => (
            <section
              key={i}
              className="swatches__box"
              onClick={() => copySwatch(i)}
              style={{
                background: `linear-gradient(${item.dir}, ${item.a}, ${item.b})`,
              }}
              title={`Swatch #${i + 1}\n${item.a} & ${item.b}`}
            >
              <label htmlFor={`swatch-${i}`} className="a11y">
                Click to copy the CSS code for this swatch
              </label>
              <input
                id={`swatch-${i}`}
                className="a11y"
                type="text"
                value={`linear-gradient(${item.dir}, ${item.a}, ${item.b})`}
                readOnly
              />
            </section>
          ))}
        </article>
      </main>
    </>
  );
}
