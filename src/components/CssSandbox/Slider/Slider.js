import React from "react";

export default function Slider(props) {
  return (
    <div className="sandbox-item-flex">
      <label>{props.sliderLabel}</label>
      <div className="sandbox-input">
        <input
          type="range"
          value={props.variableName}
          min={props.minValue}
          max={props.maxValue}
          step={props.stepValue}
          onChange={(e) => props.setVariable(e.target.value)}
        />
      </div>
    </div>
  );
}
