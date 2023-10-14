import ColorPicker from './ColorPicker';
import GradientDirection from './GradientDirection';
import GradientType from './GradientType';

export default function GradientToolbar({
  colorOne,
  colorTwo,
  gradient,
  gradientDirection,
  gradientType,
  isToolbarOpen,
  selectText,
  setColorOne,
  setColorTwo,
  setGradientDirection,
  setGradientType,
  setIsToolbarOpen,
}) {
  return (
    <div
      className={`gradient-toolbar
      ${isToolbarOpen ? 'gradient-toolbar--active' : ''}`}
    >
      <div className="gradient-toolbar__inner">
        <p
          className="gradient-toolbar__code"
          id="output"
          onClick={() => selectText('output')}
        >
          {gradient}
        </p>
        <button
          className="gradient-toolbar__close"
          onClick={() => setIsToolbarOpen(false)}
        >
          &times;
          <span className="a11y">Close advanced controls</span>
        </button>
        <div className="gradient-toolbar__tools-container">
          <ColorPicker color={colorOne} setColor={setColorOne} />
          <div className="gradient-toolbar__middle-tools">
            <GradientType
              gradientType={gradientType}
              setGradientType={setGradientType}
            />
            <GradientDirection
              gradientDirection={gradientDirection}
              setGradientDirection={setGradientDirection}
            />
          </div>
          <ColorPicker color={colorTwo} setColor={setColorTwo} />
        </div>
      </div>
    </div>
  );
}
