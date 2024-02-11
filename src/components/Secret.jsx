import { useEffect } from 'react';

export default function Secret() {
  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPos);
    document.addEventListener('touchmove', updateCursorPos);
  });

  const updateCursorPos = (e) => {
    if ((!e?.clientX || !e?.clientY) && !e?.touches) return;

    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    document.querySelector('.secret').style.setProperty('--cursorX', x + 'px');
    document.querySelector('.secret').style.setProperty('--cursorY', y + 'px');
  };

  return (
    <div className="secret">
      <h1>You found the secret!</h1>
    </div>
  );
}
