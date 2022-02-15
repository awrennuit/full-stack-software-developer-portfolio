export default function ColorPicker({ color, isMinimal, isMinimalDisplayNone, setColor }) {
  return (
    <div className={`gradient-picker ${isMinimalDisplayNone ? "gradient-picker--in-tools" : ""}`}>
      <input
        className="gradient-picker--input"
        onChange={(e) => setColor(e.target.value)}
        type="color"
        value={color}
      />
      <p className="gradient-picker--value">{color}</p>
    </div>
  );
}
