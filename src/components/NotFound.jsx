import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const mainRef = useRef(null);
  const backRef = useRef(null);
  const frontRef = useRef(null);

  useEffect(() => {
    createGrass(backRef.current, 200, {
      heightRange: 90,
      heightMin: 60,
      speedMin: 3,
      widthRange: 2,
    });

    createGrass(mainRef.current);

    createGrass(frontRef.current, 150, {
      heightRange: 80,
      heightMin: 60,
      speedRange: 1,
      widthMin: 2,
      widthRange: 4,
    });
  }, []);

  const createGrass = (container, count = 300, options = {}) => {
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const $blade = document.createElement('div');

      $blade.className = 'blade';

      const angle = Math.random() * 10 + 2 + 'deg';
      const delay = i * 0.015 + 's';
      const height =
        (options.heightMin || 80) +
        Math.random() * (options.heightRange || 120);
      const speed =
        (options.speedMin || 2) + Math.random() * (options.speedRange || 2);
      const width =
        (options.widthMin || 1) + Math.random() * (options.widthRange || 3);

      $blade.style.setProperty('--angle', angle);
      $blade.style.setProperty('--delay', delay);
      $blade.style.setProperty('--height', `${height}px`);
      $blade.style.setProperty('--speed', `${speed}s`);
      $blade.style.setProperty('--width', `${width}px`);

      container.appendChild($blade);
    }
  };

  return (
    <main className="not-found">
      <h1>You must be lost.</h1>
      <Link to="/about">Let’s get you back on your way.</Link>
      <div className="grass grass--back" ref={backRef}></div>
      <div className="grass" ref={mainRef}></div>
      <div className="grass grass--front" ref={frontRef}></div>
    </main>
  );
}
