import React from "react";
import Slider from "../Slider/Slider";

export default function PropertyTab(props) {
  return (
    <div className="sandbox-item-container">
      <div
        className={props.classClicked}
        onClick={() => {
          props.classClicked === "sandbox-item-heading"
            ? props.setClassClicked("sandbox-dimensions-heading-clicked")
            : props.setClassClicked("sandbox-item-heading");

          props.classShow === "sandbox-hide"
            ? props.setClassShow("sandbox-dimensions-show")
            : props.setClassShow("sandbox-hide");
        }}
      >
        <span className="sandbox-btn-arrow"></span>
        <span className="sandbox-btn-text">{props.heading}</span>
      </div>
      <div className={props.classShow}>
        {/* implement numberOfSliders prop, conditionally render sliders based on that */}
        <Slider
          maxValue={props.sliderOneMaxValue}
          minValue={props.sliderOneMinValue}
          setVariable={props.sliderOneSetVariable}
          sliderLabel={props.sliderOneLabel}
          stepValue={props.sliderOneStepValue}
          variableName={props.sliderOneVariable}
        />
        <Slider
          maxValue={props.sliderTwoMaxValue}
          minValue={props.sliderTwoMinValue}
          setVariable={props.sliderTwoSetVariable}
          sliderLabel={props.sliderTwoLabel}
          stepValue={props.sliderTwoStepValue}
          variableName={props.sliderTwoVariable}
        />
      </div>
    </div>
  );
}
