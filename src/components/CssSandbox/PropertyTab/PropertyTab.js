import React from "react";
import Slider from "../Slider/Slider";
import Toggle from "../Toggle/Toggle";

export default function PropertyTab({
  classClicked,
  classShow,
  heading,
  setClassClicked,
  setClassShow,
  sliderList,
  toggleList,
}) {
  return (
    <div className="sandbox-item-container">
      <div
        className={classClicked}
        onClick={() => {
          classClicked === "sandbox-item-heading"
            ? setClassClicked("sandbox-dimensions-heading-clicked")
            : setClassClicked("sandbox-item-heading");

          classShow === "sandbox-hide"
            ? setClassShow("sandbox-dimensions-show")
            : setClassShow("sandbox-hide");
        }}
      >
        <span className="sandbox-btn-arrow"></span>
        <span className="sandbox-btn-text">{heading}</span>
      </div>
      <div className={classShow}>
        <div className="sandbox-toggle-flex">
          {toggleList?.length > 0
            ? toggleList.map((item, i) => (
                <Toggle
                  key={i}
                  setVariable={item.toggleVariable}
                  toggleLabel={item.toggleLabel}
                  toggleName={item.toggleName}
                  toggleType={item.toggleType}
                  toggleValue={item.toggleValue}
                />
              ))
            : ""}
        </div>
        {sliderList?.length > 0
          ? sliderList.map((item, i) => (
              <Slider
                key={i}
                maxValue={item.sliderMaxValue}
                minValue={item.sliderMinValue}
                setVariable={item.sliderSetVariable}
                sliderLabel={item.sliderLabel}
                stepValue={item.sliderStepValue}
                variableName={item.sliderVariable}
              />
            ))
          : ""}
      </div>
    </div>
  );
}
