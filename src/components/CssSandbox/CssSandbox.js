import React, { useState, useEffect } from 'react';
import './CssSandbox.css';
import Header from '../Header/Header';

export default function CssSandbox() {

  // sets height & width
  const [dimensionsClicked, setDimensionsClicked] = useState('sandbox-item-heading');
  const [dimensionsShow, setDimensionsShow] = useState('sandbox-hide');
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
  const [borderStyle, setBorderStyle] = useState('none');
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
    <>
      <Header />
      <div className="sandbox-grid">
        <div>
          <div 
            className="test-div"
            style={{
              backgroundColor:bgColor,
              filter:`blur(${blur}px)`,
              border:`${borderWidth}px ${borderStyle} ${borderColor}`,
              borderRadius:`${borderRadius}${borderRadiusType}`,
              boxShadow:`${boxInset} ${boxOffsetX}px ${boxOffsetY}px ${boxBlur}px ${boxSpread}px ${boxColor}`,
              height:`${height}px`,
              margin:"0 auto",
              transform:`rotate(${rotation}deg)`,
              width:`${width}px`
            }}
          >
            <h1>^ TOP ^</h1>
          </div>
        </div>

        <div className="sandbox-slider-container">
          <h3>Properties</h3>

          <div className="sandbox-item-container">
            <p 
              className={dimensionsClicked}
              onClick={()=>{
                        dimensionsClicked === 'sandbox-item-heading' ? setDimensionsClicked('sandbox-clicked') : setDimensionsClicked('sandbox-item-heading');
                        dimensionsShow === 'sandbox-hide' ? setDimensionsShow('sandbox-show') : setDimensionsShow('sandbox-hide');
                        }
                      }
            >
              {dimensionsShow === 'sandbox-hide' ? <span>&or;</span> : <span>&and;</span>} Dimensions
            </p>
            <div className={dimensionsShow}>
              <div className="sandbox-item-flex">
                  <label>Height</label>
                <div className="sandbox-input">
                  <input type="range" value={height} min={50} max={400} step={1} onChange={e=>setHeight(e.target.value)} />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Width</label>
                <div className="sandbox-input">
                  <input type="range" value={width} min={50} max={400} step={1} onChange={e=>setWidth(e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          <div className="sandbox-item-container">
            <p className="sandbox-item-heading">&or; BG Color</p>
            <div className="sandbox-item-flex">
              <label>Red</label>
              <div className="sandbox-input">
                <input type="range" value={bgRed} min={0} max={255} step={1} onChange={e=>setBgRed(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Green</label>
              <div className="sandbox-input">
                <input type="range" value={bgGreen} min={0} max={255} step={1} onChange={e=>setBgGreen(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Blue</label>
              <div className="sandbox-input">
                <input type="range" value={bgBlue} min={0} max={255} step={1} onChange={e=>setBgBlue(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="sandbox-item-container">
            <p className="sandbox-item-heading">&or; Blur</p>
            <div className="sandbox-item-flex">
              <label>Blur</label>
              <div className="sandbox-input">
                <input type="range" value={blur} min={0} max={60} step={1} onChange={e=>setBlur(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="sandbox-item-container">
            <p className="sandbox-item-heading">&or; Border</p>
            <label>
              <input type="radio" name="borderStyle" value='none' onChange={e=>setBorderStyle(e.target.value)} defaultChecked />
              None
            </label>
            <br />
            <label>
              <input type="radio" name="borderStyle" value='solid' onChange={e=>setBorderStyle(e.target.value)} />
              Solid
            </label>
            <br />
            <label>
              <input type="radio" name="borderStyle" value='dashed' onChange={e=>setBorderStyle(e.target.value)} />
              Dashed
            </label>
            <br />
            <label>
              <input type="radio" name="borderStyle" value='dotted' onChange={e=>setBorderStyle(e.target.value)} />
              Dotted
            </label>
            <br />
            <label>
              <input type="radio" name="borderStyle" value='double' onChange={e=>setBorderStyle(e.target.value)} />
              Double
            </label>
            <br />
            <label>
              <input type="radio" name="borderStyle" value='groove' onChange={e=>setBorderStyle(e.target.value)} />
              Groove
            </label>
            <br />
            <label>
              <input type="radio" name="borderStyle" value='ridge' onChange={e=>setBorderStyle(e.target.value)} />
              Ridge
            </label>
            <br />
            <label>
              <input type="radio" name="borderStyle" value='inset' onChange={e=>setBorderStyle(e.target.value)} />
              Inset
            </label>
            <br />
            <label>
              <input type="radio" name="borderStyle" value='outset' onChange={e=>setBorderStyle(e.target.value)} />
              Outset
            </label>
            <br />
            <div className="sandbox-item-flex">
              <label>Width</label>
              <div className="sandbox-input">
                <input type="range" value={borderWidth} min={0} max={50} step={1} onChange={e=>setBorderWidth(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Red</label>
              <div className="sandbox-input">
                <input type="range" value={borderRed} min={0} max={255} step={1} onChange={e=>setBorderRed(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Green</label>
              <div className="sandbox-input">
                <input type="range" value={borderGreen} min={0} max={255} step={1} onChange={e=>setBorderGreen(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Blue</label>
              <div className="sandbox-input">
                <input type="range" value={borderBlue} min={0} max={255} step={1} onChange={e=>setBorderBlue(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="sandbox-item-container">
            <p className="sandbox-item-heading">&or; Border Radius</p>
            <div className="sandbox-item-flex">
              <label>Width</label>
              <div className="sandbox-input">
                <input type="range" value={borderRadius} min={0} max={100} step={1} onChange={e=>setBorderRadius(e.target.value)} />
              </div>
            </div>
            <label>
              <input type="radio" name="borderRadiusType" value='px' onChange={e=>setBorderRadiusType(e.target.value)} defaultChecked />
              px
            </label>
            <br />
            <label>
              <input type="radio" name="borderRadiusType" value='%' onChange={e=>setBorderRadiusType(e.target.value)} />
              %
            </label>
          </div>

          <div className="sandbox-item-container">
            <p className="sandbox-item-heading">&or; Box Shadow</p>
            <div>
              <label>
                <input type="checkbox" onChange={e=>{e.target.checked ? setBoxInset('inset') : setBoxInset('')}} />
                Inset
              </label>
            </div>
              <br />
            <div className="sandbox-item-flex">
              <label>X-Offset</label>
              <div className="sandbox-input">
                <input type="range" value={boxOffsetX} min={-100} max={100} step={1} onChange={e=>setBoxOffsetX(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Y-Offset</label>
              <div className="sandbox-input">
                <input type="range" value={boxOffsetY} min={-100} max={100} step={1} onChange={e=>setBoxOffsetY(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Blur</label>
              <div className="sandbox-input">
                <input type="range" value={boxBlur} min={0} max={100} step={1} onChange={e=>setBoxBlur(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Spread</label>
              <div className="sandbox-input">
                <input type="range" value={boxSpread} min={-100} max={100} step={1} onChange={e=>setBoxSpread(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Red</label>
              <div className="sandbox-input">
                <input type="range" value={boxRed} min={0} max={255} step={1} onChange={e=>setBoxRed(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Green</label>
              <div className="sandbox-input">
                <input type="range" value={boxGreen} min={0} max={255} step={1} onChange={e=>setBoxGreen(e.target.value)} />
              </div>
            </div>
            <div className="sandbox-item-flex">
              <label>Blue</label>
              <div className="sandbox-input">
                <input type="range" value={boxBlue} min={0} max={255} step={1} onChange={e=>setBoxBlue(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="sandbox-item-container">
            <p className="sandbox-item-heading">&or; Rotation</p>
            <div className="sandbox-item-flex">
              <label>Rotate</label>
              <div className="sandbox-input">
                <input type="range" value={rotation} min={0} max={360} step={1} onChange={e=>setRotation(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}