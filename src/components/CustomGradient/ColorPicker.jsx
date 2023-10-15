import { useId } from 'react';

export default function ColorPicker({ color, isToolbarOpen, setColor }) {
  const inputId = useId();

  return (
    <div
      className={`color-picker ${
        isToolbarOpen ? 'color-picker--inactive' : ''
      }`}
    >
      <label className="a11y" htmlFor={`${inputId}-color-input`}>
        Pick a color
      </label>
      <input
        id={`${inputId}-color-input`}
        className="color-picker__input"
        onChange={(e) => setColor(e.target.value)}
        type="color"
        value={color}
      />
      <p className="color-picker__value">{color}</p>
    </div>
  );
}
