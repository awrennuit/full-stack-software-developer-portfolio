export default function Slider({
  maxValue,
  minValue,
  setVariable,
  sliderLabel,
  stepValue,
  variableName,
}) {
  return (
    <div className="slider">
      <label htmlFor={sliderLabel}>{sliderLabel}</label>
      <input
        id={sliderLabel}
        type="range"
        value={variableName}
        min={minValue}
        max={maxValue}
        step={stepValue}
        onChange={(e) => setVariable(e.target.value)}
      />
    </div>
  );
}
