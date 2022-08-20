export default function Slider({
  maxValue,
  minValue,
  setVariable,
  sliderLabel,
  stepValue,
  variableName,
}) {
  return (
    <div className="sandbox-item-flex">
      <label>{sliderLabel}</label>
      <div className="sandbox-input">
        <input
          type="range"
          value={variableName}
          min={minValue}
          max={maxValue}
          step={stepValue}
          onChange={(e) => setVariable(e.target.value)}
        />
      </div>
    </div>
  );
}
