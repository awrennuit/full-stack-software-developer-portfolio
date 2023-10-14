import { gradientBtnData } from '../../utils/gradientBtnData';
import GradientDirectionBtn from './GradientDirectionBtn';

export default function GradientDirection({
  gradientDirection,
  setGradientDirection,
}) {
  return (
    <div className="gradient-direction">
      {gradientBtnData.map((row, i) => (
        <div key={i} className="gradient-direction__row">
          {row.map((item, j) => (
            <GradientDirectionBtn
              key={j}
              arrowClass={item.arrowClass}
              direction={item.direction}
              label={item.label}
              gradientDirection={gradientDirection}
              setGradientDirection={setGradientDirection}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
