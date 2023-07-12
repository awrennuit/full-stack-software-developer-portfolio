import React, { useEffect, useState } from 'react';
import { swatchList } from '../utils/swatches';
import Header from './Header';

export default function Swatches() {
  const [btnPos, setBtnPos] = useState(80);
  const [isBgWhite, setIsBgWhite] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', btnPositionOnScroll);
  }, []);

  const btnPositionOnScroll = () => {
    if (window.scrollY >= 70) {
      setBtnPos(10);
    } else {
      for (let i = 0; i < 70; i++) {
        if (window.scrollY === i) {
          setBtnPos(80 - i);
        }
      }
    }
  };

  const copySwatch = i => {
    document.getElementById(`swatch-${i}`).focus();
    document.getElementById(`swatch-${i}`).select();
    document.execCommand('copy');
  };

  return (
    <>
      <Header />
      <div
        className="swatches"
        style={
          isBgWhite ? { backgroundColor: '#fff' } : { backgroundColor: '#000' }
        }
      >
        <button
          className="swatches__toggle-btn"
          style={{ top: `${btnPos}px` }}
          onClick={() => setIsBgWhite(!isBgWhite)}
        >
          <span
            className={
              isBgWhite
                ? 'swatches__toggle-icon'
                : 'swatches__toggle-icon swatches__toggle-icon--active'
            }
          ></span>
        </button>
        {swatchList.map((item, i) => (
          <div
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
          </div>
        ))}
      </div>
    </>
  );
}
