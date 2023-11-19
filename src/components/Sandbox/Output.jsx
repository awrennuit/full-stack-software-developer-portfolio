import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Output({
  bgColor,
  blur,
  borderColor,
  borderRadius,
  borderRadiusType,
  borderStyle,
  borderWidth,
  boxBlur,
  boxColor,
  boxInset,
  boxOffsetX,
  boxOffsetY,
  boxSpread,
  height,
  rotation,
  selectText,
  setShowDialog,
  showDialog,
  width,
}) {
  const closeRef = useRef(null);
  const copyRef = useRef(null);

  useEffect(() => {
    if (showDialog) {
      setTimeout(() => copyRef.current.focus(), 300);
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscPress);
      document.addEventListener('keydown', handleTabPress);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscPress);
      document.removeEventListener('keydown', handleTabPress);
    };
  }, [showDialog]);

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') selectText('dialog-description');
  };

  const handleEscPress = (e) => {
    if (e.key === 'Escape') setShowDialog(!showDialog);
  };

  const handleTabPress = (e) => {
    if (e.key !== 'Tab') return;

    if (document.activeElement === copyRef.current) {
      e.preventDefault();
      closeRef.current.focus();
    } else if (document.activeElement === closeRef.current) {
      e.preventDefault();
      copyRef.current.focus();
    }
  };

  return createPortal(
    <aside
      className={`output${showDialog ? ' output--open' : ''}`}
      onClick={() => setShowDialog(!showDialog)}
    >
      <dialog
        className="output__dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="dialog-title">Here's Your CSS</h3>
        <div
          id="dialog-description"
          ref={copyRef}
          className="output__content"
          onClick={() => selectText('dialog-description')}
          onKeyDown={handleEnterPress}
          tabIndex={0}
        >
          <p>
            <span>.my-class {'{'}</span>
            <span>&nbsp;&nbsp;background-color: {bgColor};</span>
            {+blur !== 0 ? <span>&nbsp;&nbsp;blur: {blur}px;</span> : ''}
            {+borderWidth !== 0 ? (
              <span>
                &nbsp;&nbsp;border: {borderWidth}px {borderStyle} {borderColor};
              </span>
            ) : (
              ''
            )}
            {+borderRadius !== 0 ? (
              <span>
                &nbsp;&nbsp;border-radius: {borderRadius}
                {borderRadiusType};
              </span>
            ) : (
              ''
            )}
            {+boxOffsetX !== 0 ||
            +boxOffsetY !== 0 ||
            +boxBlur !== 0 ||
            +boxSpread !== 0 ? (
              <span>
                &nbsp;&nbsp;box-shadow: {boxInset} {boxOffsetX}px {boxOffsetY}
                px {boxBlur}px {boxSpread}px {boxColor};
              </span>
            ) : (
              ''
            )}
            <span>&nbsp;&nbsp;height: {height}px;</span>
            {+rotation !== 0 ? (
              <span>&nbsp;&nbsp;transform: rotate({rotation}deg);</span>
            ) : (
              ''
            )}
            <span>&nbsp;&nbsp;width: {width}px;</span>
            <span>{'}'}</span>
          </p>
        </div>
        <button
          ref={closeRef}
          className="output__btn"
          onClick={() => setShowDialog(!showDialog)}
        >
          Got It
        </button>
      </dialog>
    </aside>,
    document.body
  );
}
