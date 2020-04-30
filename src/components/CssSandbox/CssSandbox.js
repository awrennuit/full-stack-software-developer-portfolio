import React, { useState, useEffect } from 'react';
import './CssSandbox.css';
import Header from '../Header/Header';

export default function CssSandbox() {

  // sets height & width
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(300);

  // sets blur
  const [blur, setBlur] = useState(0);
  // const [blurType, setBlurType] = useState('px');

  // sets background color
  const [bgRed, setBgRed] = useState(255);
  const [bgGreen, setBgGreen] = useState(255);
  const [bgBlue, setBgBlue] = useState(255);
  const [bgColor, setBgColor] = useState(`rgb(${bgRed}, ${bgGreen}, ${bgBlue})`);

  //sets border
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderType, setBorderType] = useState('solid');
  const [borderRed, setBorderRed] = useState(125);
  const [borderGreen, setBorderGreen] = useState(125);
  const [borderBlue, setBorderBlue] = useState(125);
  const [borderColor, setBorderColor] = useState(`rgb(${borderRed}, ${borderGreen}, ${borderBlue})`);

  // sets border radius
  const [borderRadius, setBorderRadius] = useState(0);
  const [borderRadiusType, setBorderRadiusType] = useState('px');

  // sets box shadow
  const [boxRed, setBoxRed] = useState(125);
  const [boxGreen, setBoxGreen] = useState(125);
  const [boxBlue, setBoxBlue] = useState(125);
  const [boxColor, setBoxColor] = useState(`rgb(${boxRed}, ${boxGreen}, ${boxBlue})`);
  const [boxInset, setBoxInset] = useState('');
  const [boxOffsetX, setBoxOffsetX] = useState(0);
  const [boxOffsetY, setBoxOffsetY] = useState(0);
  const [boxBlur, setBoxBlur] = useState(0);
  const [boxSpread, setBoxSpread] = useState(0);

  // sets rotation
  const[rotation, setRotation] = useState(0);

  useEffect(()=>{
    setBgColor(`rgb(${bgRed}, ${bgGreen}, ${bgBlue})`);
  }, [bgRed, bgGreen, bgBlue]);

  useEffect(()=>{
    setBorderColor(`rgb(${borderRed}, ${borderGreen}, ${borderBlue})`);
  }, [borderRed, borderGreen, borderBlue]);

  useEffect(()=>{
    setBoxColor(`rgb(${boxRed}, ${boxGreen}, ${boxBlue})`);
  }, [boxRed, boxGreen, boxBlue]);

  return(
    <div className="box-shadow-container">
      <Header />

      <div 
        className="test-div"
        style={{
          backgroundColor:bgColor,
          filter:`blur(${blur}px)`,
          border:`${borderWidth}px solid ${borderColor}`,
          borderRadius:`${borderRadius}${borderRadiusType}`,
          boxShadow:`${boxInset} ${boxOffsetX}px ${boxOffsetY}px ${boxBlur}px ${boxSpread}px ${boxColor}`,
          height:`${height}px`,
          margin:"20% auto 0 auto",
          transform:`rotate(${rotation}deg)`,
          width:`${width}px`
        }}
      >
        <h1>^ TOP ^</h1>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        height <input type="range" value={height} min={50} max={400} step={1} onChange={e=>setHeight(e.target.value)} />
        <br />
        width <input type="range" value={width} min={50} max={400} step={1} onChange={e=>setWidth(e.target.value)} />
      </div>
      <br />
      <br />
      <div>
        <p>background color</p>
        red <input type="range" value={bgRed} min={0} max={255} step={1} onChange={e=>setBgRed(e.target.value)} />
        <br />
        green <input type="range" value={bgGreen} min={0} max={255} step={1} onChange={e=>setBgGreen(e.target.value)} />
        <br />
        blue <input type="range" value={bgBlue} min={0} max={255} step={1} onChange={e=>setBgBlue(e.target.value)} />
      </div>
      <br />
      <br />
      <div>
        blur <input type="range" value={blur} min={0} max={60} step={1} onChange={e=>setBlur(e.target.value)} />
        {/* <br />
        px <input type="radio" name="blurType" value='px' onChange={e=>setBlurType(e.target.value)} defaultChecked />
        <br />
        em <input type="radio" name="blurType" value='em' onChange={e=>setBlurType(e.target.value)} /> */}
      </div>
      <br />
      <br />
      <div>
        <p>border</p>
        width <input type="range" value={borderWidth} min={0} max={50} step={1} onChange={e=>setBorderWidth(e.target.value)} />
        <br />
        {/* type <input type="range" value={borderType} min={0} max={255} step={1} onChange={e=>setBorderType(e.target.value)} /> */}
        <br />
        red <input type="range" value={borderRed} min={0} max={255} step={1} onChange={e=>setBorderRed(e.target.value)} />
        <br />
        green <input type="range" value={borderGreen} min={0} max={255} step={1} onChange={e=>setBorderGreen(e.target.value)} />
        <br />
        blue <input type="range" value={borderBlue} min={0} max={255} step={1} onChange={e=>setBorderBlue(e.target.value)} />
      </div>
      <br />
      <br />
      <div>
        <p>border radius</p>
        width <input type="range" value={borderRadius} min={0} max={100} step={1} onChange={e=>setBorderRadius(e.target.value)} />
        <br />
        px <input type="radio" name="borderRadiusType" value='px' onChange={e=>setBorderRadiusType(e.target.value)} defaultChecked />
        <br />
        % <input type="radio" name="borderRadiusType" value='%' onChange={e=>setBorderRadiusType(e.target.value)} />
      </div>
      <br />
      <br />
      <div>
        <p>box shadow color</p>
        box red<input type="range" value={boxRed} min={0} max={255} step={1} onChange={e=>setBoxRed(e.target.value)} />
        <br />
        box green<input type="range" value={boxGreen} min={0} max={255} step={1} onChange={e=>setBoxGreen(e.target.value)} />
        <br />
        box blue<input type="range" value={boxBlue} min={0} max={255} step={1} onChange={e=>setBoxBlue(e.target.value)} />
      </div>
      <br />
      <br />
      <div>
        <p>box shadow parameters</p>
        inset <input type="checkbox" onChange={e=>{e.target.checked ? setBoxInset('inset') : setBoxInset('')}} />
        <br />
        x offset <input type="range" value={boxOffsetX} min={-100} max={100} step={1} onChange={e=>setBoxOffsetX(e.target.value)} />
        <br />
        y offset <input type="range" value={boxOffsetY} min={-100} max={100} step={1} onChange={e=>setBoxOffsetY(e.target.value)} />
        <br />
        blur <input type="range" value={boxBlur} min={0} max={100} step={1} onChange={e=>setBoxBlur(e.target.value)} />
        <br />
        spread <input type="range" value={boxSpread} min={-100} max={100} step={1} onChange={e=>setBoxSpread(e.target.value)} />
      </div>
      <br />
      <br />
      <div>
        rotation <input type="range" value={rotation} min={0} max={360} step={1} onChange={e=>setRotation(e.target.value)} />
      </div>
    </div>
  );
}