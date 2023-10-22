import { useEffect } from 'react';
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
  setShowModal,
  showModal,
  width,
}) {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscPress);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscPress);
    }
  }, [showModal]);

  const handleEscPress = (e) => {
    if (e.key === 'Escape') setShowModal(!showModal);
  };

  return (
    // TODO: trap focus in dialog
    createPortal(
      <div
        className={`output ${showModal ? 'output--open' : ''}`}
        onClick={() => setShowModal(!showModal)}
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
            className="output__content"
            onClick={() => selectText('dialog-description')}
          >
            <p>
              <span>.my-class {'{'}</span>
              <span>&nbsp;&nbsp;background-color: {bgColor};</span>
              {+blur !== 0 ? <span>&nbsp;&nbsp;blur: {blur}px;</span> : ''}
              {+borderWidth !== 0 ? (
                <span>
                  &nbsp;&nbsp;border: {borderWidth}px {borderStyle}{' '}
                  {borderColor};
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
            className="output__btn"
            onClick={() => setShowModal(!showModal)}
          >
            Got It
          </button>
        </dialog>
      </div>,
      document.body
    )
  );
}
