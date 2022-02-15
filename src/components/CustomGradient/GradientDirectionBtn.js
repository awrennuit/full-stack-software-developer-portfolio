export default function GradientDirectionBtn({
  arrowClass,
  direction,
  gradientDirection,
  setGradientDirection,
}) {
  return(
    <button
      className={`gradient-tools-dir-btn ${gradientDirection === direction ? "gradient-tools-dir--active" : ""}`}
      onClick={() => setGradientDirection(direction)}
    >
      <span className={arrowClass}>&#10137;</span>
    </button>
  );
}