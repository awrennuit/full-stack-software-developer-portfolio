import GradientTypeRadio from './GradientTypeRadio';

export default function GradientType({ gradientType, setGradientType }) {
  return (
    <div className="gradient-type">
      <GradientTypeRadio
        checkVal="linear"
        gradientType={gradientType}
        radioLabel="Linear"
        radioVal="linear"
        setGradientType={setGradientType}
      />
      <GradientTypeRadio
        checkVal="radial"
        gradientType={gradientType}
        radioLabel="Radial"
        radioVal="radial"
        setGradientType={setGradientType}
      />
    </div>
  );
}
