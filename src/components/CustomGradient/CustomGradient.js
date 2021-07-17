import React, { useEffect, useState } from "react";
import { gradientBtnData } from "../../utils/gradientBtnData";
import "./CustomGradient.css";
import ColorPicker from "./ColorPicker";
import Header from "../Header/Header";
import GradientDirectionBtn from "./GradientDirectionBtn";
import GradientTypeRadio from "./GradientTypeRadio";

export default function CustomGradient() {
  const [colorOne, setColorOne] = useState("");
  const [colorTwo, setColorTwo] = useState("");
  const [gradient, setGradient] = useState("");
  const [gradientDirection, setGradientDirection] = useState("right");
  const [gradientType, setGradientType] = useState("linear");
  const [isMinimal, setIsMinimal] = useState(true);
  const [isMinimalDisplayNone, setIsMinimalDisplayNone] = useState(false);

  useEffect(() => {
    setColorOne("#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"));
    setColorTwo("#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"));
  }, []);

  useEffect(() => {
    if (isMinimal) {
      setTimeout(() => setIsMinimalDisplayNone(false), 300);
    } else {
      setTimeout(() => setIsMinimalDisplayNone(true), 300);
    }
  }, [isMinimal]);

  useEffect(() => {
    switch (gradientType) {
      case "linear":
        setGradient(`linear-gradient(to ${gradientDirection}, ${colorOne}, ${colorTwo})`);
        break;
      case "radial":
        setGradient(`radial-gradient(${colorOne}, ${colorTwo})`);
        break;
      default:
        break;
    }
  }, [colorOne, colorTwo, gradientType, gradientDirection]);

  const selectText = (text) => {
    if (document.selection) { // for IE
      const range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(text));
      range.select();
    } 
    else if (window.getSelection) {
      const range = document.createRange();
      range.selectNode(document.getElementById(text));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  return (
    <>
      <Header />
      <div className="gradient-wrapper">
        <div
          className={`gradient-render ${isMinimal ? "" : "gradient-render--sm"}`}
          style={{ background: `${gradient}` }}
        ></div>

        <div
          className={`gradient-picker-wrapper
            ${isMinimal ? "gradient-picker--active" : "gradient-picker--inactive"}`}
          style={isMinimalDisplayNone ? {display:"none"} : null}
        >
          <ColorPicker color={colorOne} isMinimal={isMinimal} setColor={setColorOne} />
          <ColorPicker color={colorTwo} isMinimal={isMinimal} setColor={setColorTwo} />
        </div>
        <button className="gradient-more-btn" onClick={() => setIsMinimal(false)}></button>

        <div
          className={`gradient-tools-wrapper
            ${isMinimal ? "gradient-tools--inactive" : "gradient-tools--active"}`}
          style={isMinimalDisplayNone ? null : {display:"none"}}
        >
          <div className="gradient-tools-flex">
            <button
              className="gradient-tools-close"
              onClick={() => setIsMinimal(true)}
              title="Close toolbar"
            >
              &times;
            </button>
              <ColorPicker
                color={colorOne}
                isMinimal={isMinimal}
                isMinimalDisplayNone={isMinimalDisplayNone}
                setColor={setColorOne}
              />

              <div className="gradient-tools-type-wrapper">
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

              <div className="gradient-tools-dir-main-wrapper">
                <div className="gradient-tools-dir-wrapper">
                  {gradientBtnData.top.map((item, i) =>
                    <GradientDirectionBtn
                      key={i}
                      arrowClass={item.arrowClass}
                      direction={item.direction}
                      gradientDirection={gradientDirection}
                      setGradientDirection={setGradientDirection}
                    />
                  )}
                </div>
                <div className="gradient-tools-dir-wrapper gradient-tools-dir-wrapper--mid">
                  {gradientBtnData.mid.map((item, i) =>
                    <GradientDirectionBtn
                      key={i}
                      arrowClass={item.arrowClass}
                      direction={item.direction}
                      gradientDirection={gradientDirection}
                      setGradientDirection={setGradientDirection}
                    />
                  )}
                </div>
                <div className="gradient-tools-dir-wrapper">
                  {gradientBtnData.bot.map((item, i) =>
                    <GradientDirectionBtn
                      key={i}
                      arrowClass={item.arrowClass}
                      direction={item.direction}
                      gradientDirection={gradientDirection}
                      setGradientDirection={setGradientDirection}
                    />
                  )}
                </div>
              </div>

              <ColorPicker
                color={colorTwo}
                isMinimal={isMinimal}
                isMinimalDisplayNone={isMinimalDisplayNone}
                setColor={setColorTwo}
              />
            </div>
          <div>
            <p
              className="gradient-code"
              id="output"
              onClick={()=>selectText('output')}
            >{gradient}</p>
          </div>
        </div>
      </div>
    </>
  );
}
