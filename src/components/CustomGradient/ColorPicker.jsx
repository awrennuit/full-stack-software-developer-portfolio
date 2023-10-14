export default function ColorPicker({ color, isToolbarOpen, setColor }) {
  return (
    <div
      className={`color-picker ${
        isToolbarOpen ? 'color-picker--inactive' : ''
      }`}
    >
      <label className="a11y" htmlFor="color-input">
        Pick a color
      </label>
      <input
        id="color-input"
        className="color-picker__input"
        onChange={(e) => setColor(e.target.value)}
        type="color"
        value={color}
      />
      <p className="color-picker__value">{color}</p>
    </div>
  );
}
