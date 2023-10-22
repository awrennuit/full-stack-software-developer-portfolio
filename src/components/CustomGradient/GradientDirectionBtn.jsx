export default function GradientDirectionBtn({
  arrowClass,
  direction,
  label,
  gradientDirection,
  setGradientDirection,
}) {
  return (
    <button
      className={`gradient-direction-btn${
        gradientDirection === direction ? ' gradient-direction-btn--active' : ''
      }`}
      onClick={() => setGradientDirection(direction)}
    >
      <span className={arrowClass}>&#10137;</span>
      <span className="a11y">{label}</span>
    </button>
  );
}
