export default function GradientTypeRadio({
  checkVal,
  gradientType,
  radioLabel,
  radioVal,
  setGradientType,
}) {
  return (
    <label className="gradient-type-radio">
      <input
        checked={gradientType === checkVal}
        onChange={(e) => setGradientType(e.target.value)}
        name="gradient-type"
        type="radio"
        value={radioVal}
      />
      {radioLabel}
    </label>
  );
}
