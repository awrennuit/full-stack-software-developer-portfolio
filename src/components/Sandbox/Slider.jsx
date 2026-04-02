export default function Slider({
  maxValue,
  minValue,
  setVariable,
  sliderLabel,
  stepValue,
  variableName,
}) {
  return (
    <label className="slider">
      {sliderLabel}
      <input
        min={minValue}
        max={maxValue}
        step={stepValue}
        type="range"
        value={variableName}
        onChange={e => setVariable(e.target.value)}
      />
    </label>
  );
}
