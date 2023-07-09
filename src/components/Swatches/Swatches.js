import React, { useEffect, useState } from 'react';
import { swatchList } from '../../utils/swatches';
import Header from '../Header/Header';
import './Swatches.css';

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

  const copySwatch = (i) => {
    document.getElementById(`swatch-${i}`).focus();
    document.getElementById(`swatch-${i}`).select();
    document.execCommand('copy');
  };

  return (
    <>
      <Header />
      <div
        className="swatch-wrapper"
        style={
          isBgWhite ? { backgroundColor: '#fff' } : { backgroundColor: '#000' }
        }
      >
        <button
          className="swatch-toggle-btn"
          style={{ top: `${btnPos}px` }}
          onClick={() => setIsBgWhite(!isBgWhite)}
        >
          <span
            className={
              isBgWhite
                ? 'swatch-toggle-icon--inactive'
                : 'swatch-toggle-icon--active'
            }
          ></span>
        </button>
        {swatchList.map((item, i) => (
          <div
            key={i}
            className="swatch-box"
            onClick={() => copySwatch(i)}
            style={{
              background: `linear-gradient(${item.dir}, ${item.a}, ${item.b})`,
            }}
            title={`Swatch #${i + 1}\n${item.a} & ${item.b}`}
          >
            <input
              id={`swatch-${i}`}
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
