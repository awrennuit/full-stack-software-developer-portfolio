import React, { useState, useEffect } from 'react';
import './CssSandbox.css';
import Header from '../Header/Header';

export default function CssSandbox() {

  // sets height & width
  const [dimensionsClicked, setDimensionsClicked] = useState('sandbox-item-heading');
  const [dimensionsShow, setDimensionsShow] = useState('sandbox-hide');
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(300);

  // sets background color
  const [bgClicked, setBgClicked] = useState('sandbox-item-heading');
  const [bgShow, setBgShow] = useState('sandbox-hide');
  const [bgRed, setBgRed] = useState(255);
  const [bgGreen, setBgGreen] = useState(255);
  const [bgBlue, setBgBlue] = useState(255);
  const [bgColor, setBgColor] = useState(`rgb(${bgRed}, ${bgGreen}, ${bgBlue})`);

  // sets blur
  const [blurClicked, setBlurClicked] = useState('sandbox-item-heading');
  const [blurShow, setBlurShow] = useState('sandbox-hide');
  const [blur, setBlur] = useState(0);

  //sets border
  const [borderClicked, setBorderClicked] = useState('sandbox-item-heading');
  const [borderShow, setBorderShow] = useState('sandbox-hide');
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderStyle, setBorderStyle] = useState('none');
  const [borderRed, setBorderRed] = useState(125);
  const [borderGreen, setBorderGreen] = useState(125);
  const [borderBlue, setBorderBlue] = useState(125);
  const [borderColor, setBorderColor] = useState(`rgb(${borderRed}, ${borderGreen}, ${borderBlue})`);

  // sets border radius
  const [borderRadiusClicked, setBorderRadiusClicked] = useState('sandbox-item-heading');
  const [borderRadiusShow, setBorderRadiusShow] = useState('sandbox-hide');
  const [borderRadius, setBorderRadius] = useState(0);
  const [borderRadiusType, setBorderRadiusType] = useState('px');

  // sets box shadow
  const [boxShadowClicked, setBoxShadowClicked] = useState('sandbox-item-heading');
  const [boxShadowShow, setBoxShadowShow] = useState('sandbox-hide');
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
  const [rotationClicked, setRotationClicked] = useState('sandbox-item-heading');
  const [rotationShow, setRotationShow] = useState('sandbox-hide');
  const[rotation, setRotation] = useState(0);

  // toggles modal
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    setBgColor(`rgb(${bgRed}, ${bgGreen}, ${bgBlue})`);
  }, [bgRed, bgGreen, bgBlue]);

  useEffect(()=>{
    setBorderColor(`rgb(${borderRed}, ${borderGreen}, ${borderBlue})`);
  }, [borderRed, borderGreen, borderBlue]);

  useEffect(()=>{
    setBoxColor(`rgb(${boxRed}, ${boxGreen}, ${boxBlue})`);
  }, [boxRed, boxGreen, boxBlue]);

  const selectText = text => {
    if(document.selection){ // for IE
      const range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(text));
      range.select();
    } 
    else if(window.getSelection){
      const range = document.createRange();
      range.selectNode(document.getElementById(text));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  }

  return(
    <>
      <Header />
      <div>
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
              top:`${50 - height / 20}%`,
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
            <div 
              className={dimensionsClicked}
              onClick={()=>{
                        dimensionsClicked === 'sandbox-item-heading' ? 
                          setDimensionsClicked('sandbox-dimensions-heading-clicked') 
                        : 
                          setDimensionsClicked('sandbox-item-heading');

                        dimensionsShow === 'sandbox-hide' ? 
                          setDimensionsShow('sandbox-dimensions-show') 
                        : 
                          setDimensionsShow('sandbox-hide');
                        }
                      }
            >
              <span className="sandbox-btn-arrow"></span>
              Dimensions
            </div>
            <div className={dimensionsShow}>
              <div className="sandbox-item-flex">
                  <label>Height</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={height} 
                    min={50} 
                    max={400} 
                    step={1} 
                    onChange={e=>setHeight(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Width</label>
                <div className="sandbox-input">
                  <input 
                  type="range" 
                  value={width} 
                  min={50} 
                  max={400} 
                  step={1} 
                  onChange={e=>setWidth(e.target.value)} 
                />
                </div>
              </div>
            </div>
          </div>

          <div className="sandbox-item-container">
            <div 
              className={bgClicked}
              onClick={()=>{
                        bgClicked === 'sandbox-item-heading' ? 
                          setBgClicked('sandbox-bg-heading-clicked') 
                        : 
                          setBgClicked('sandbox-item-heading');

                        bgShow === 'sandbox-hide' ? 
                          setBgShow('sandbox-bg-show') 
                        : 
                          setBgShow('sandbox-hide');
                        }
                      }
            >
              <span className="sandbox-btn-arrow"></span>
              Background
            </div>
            <div className={bgShow}>
              <div className="sandbox-item-flex">
                <label>Red</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={bgRed} 
                    min={0} 
                    max={255} 
                    step={1} 
                    onChange={e=>setBgRed(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Green</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={bgGreen} 
                    min={0} 
                    max={255} 
                    step={1} 
                    onChange={e=>setBgGreen(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Blue</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={bgBlue} 
                    min={0} 
                    max={255} 
                    step={1} 
                    onChange={e=>setBgBlue(e.target.value)} 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sandbox-item-container">
            <div 
              className={blurClicked}
              onClick={()=>{
                        blurClicked === 'sandbox-item-heading' ? 
                          setBlurClicked('sandbox-blur-heading-clicked') 
                        : 
                          setBlurClicked('sandbox-item-heading');

                        blurShow === 'sandbox-hide' ? 
                          setBlurShow('sandbox-blur-show') 
                        : 
                          setBlurShow('sandbox-hide');
                        }
                      }
            >
              <span className="sandbox-btn-arrow"></span>
              Blur
            </div>
            <div className={blurShow}>
              <div className="sandbox-item-flex">
                <label>Blur</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={blur} 
                    min={0} 
                    max={60} 
                    step={1} 
                    onChange={e=>setBlur(e.target.value)} 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sandbox-item-container">
          <div 
              className={borderClicked}
              onClick={()=>{
                        borderClicked === 'sandbox-item-heading' ? 
                          setBorderClicked('sandbox-border-heading-clicked') 
                        : 
                          setBorderClicked('sandbox-item-heading');

                        borderShow === 'sandbox-hide' ? 
                          setBorderShow('sandbox-border-show') 
                        : 
                          setBorderShow('sandbox-hide');
                        }
                      }
            >
              <span className="sandbox-btn-arrow"></span>
              Border
            </div>
            <div className={borderShow}>





              <div className="sandbox-item-flex">
                <label style={{marginRight:"auto"}}>
                  <input 
                    type="radio" 
                    name="borderStyle" 
                    value='none' 
                    onChange={e=>setBorderStyle(e.target.value)} 
                    defaultChecked 
                  />
                  &nbsp;None
                </label>
                <label style={{marginRight:"42px"}}>
                  <input 
                    type="radio" 
                    name="borderStyle" 
                    value='solid' 
                    onChange={e=>setBorderStyle(e.target.value)} 
                  />
                  &nbsp;Solid
                </label>
              </div>
              <br />
              <div className="sandbox-item-flex">
                <label style={{marginRight:"auto"}}>
                  <input 
                    type="radio" 
                    name="borderStyle" 
                    value='dashed' 
                    onChange={e=>setBorderStyle(e.target.value)} 
                  />
                  &nbsp;Dashed
                </label>
                <label style={{marginRight:"27px"}}>
                  <input 
                    type="radio" 
                    name="borderStyle" 
                    value='dotted' 
                    onChange={e=>setBorderStyle(e.target.value)} 
                  />
                  &nbsp;Dotted
                </label>
              </div>
              <br />
              <div className="sandbox-item-flex">
                <label style={{marginRight:"auto"}}>
                  <input 
                    type="radio" 
                    name="borderStyle" 
                    value='double' 
                    onChange={e=>setBorderStyle(e.target.value)} 
                  />
                  &nbsp;Double
                </label>
                <label style={{marginRight:"25px"}}>
                  <input 
                    type="radio" 
                    name="borderStyle" 
                    value='groove' 
                    onChange={e=>setBorderStyle(e.target.value)} 
                  />
                  &nbsp;Groove
                </label>
              </div>
              <br />
              <div className="sandbox-item-flex">
                <label style={{marginRight:"auto"}}>
                  <input 
                    type="radio" 
                    name="borderStyle" 
                    value='ridge' 
                    onChange={e=>setBorderStyle(e.target.value)} 
                  />
                  &nbsp;Ridge
                </label>
                <label style={{marginRight:"43px"}}>
                  <input 
                    type="radio" 
                    name="borderStyle" 
                    value='inset' 
                    onChange={e=>setBorderStyle(e.target.value)} 
                  />
                  &nbsp;Inset
                </label>
              </div>
              <br />
              <label>
                <input 
                  type="radio" 
                  name="borderStyle" 
                  value='outset' 
                  onChange={e=>setBorderStyle(e.target.value)} 
                />
                &nbsp;Outset
              </label>
              <br />
              <br />
              <div className="sandbox-item-flex">
                <label>Width</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={borderWidth} 
                    min={0} 
                    max={50} 
                    step={1} 
                    onChange={e=>setBorderWidth(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Red</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={borderRed} 
                    min={0} 
                    max={255} 
                    step={1} 
                    onChange={e=>setBorderRed(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Green</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={borderGreen} 
                    min={0} 
                    max={255} 
                    step={1} 
                    onChange={e=>setBorderGreen(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Blue</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={borderBlue} 
                    min={0} 
                    max={255} 
                    step={1} 
                    onChange={e=>setBorderBlue(e.target.value)} 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sandbox-item-container">
            <div 
              className={borderRadiusClicked}
              onClick={()=>{
                        borderRadiusClicked === 'sandbox-item-heading' ? 
                          setBorderRadiusClicked('sandbox-border-radius-heading-clicked') 
                        : 
                          setBorderRadiusClicked('sandbox-item-heading');

                        borderRadiusShow === 'sandbox-hide' ? 
                          setBorderRadiusShow('sandbox-border-radius-show') 
                        : 
                          setBorderRadiusShow('sandbox-hide');
                        }
                      }
            >
              <span className="sandbox-btn-arrow"></span>
              Border Radius
            </div>
            <div className={borderRadiusShow}>
              <div className="sandbox-item-flex">
                <label>Width</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={borderRadius} 
                    min={0} 
                    max={100} 
                    step={1} 
                    onChange={e=>setBorderRadius(e.target.value)} 
                  />
                </div>
              </div>
              <label>
                <input 
                  type="radio" 
                  name="borderRadiusType" 
                  value='px' 
                  onChange={e=>setBorderRadiusType(e.target.value)} 
                  defaultChecked 
                />
                px
              </label>
              <br />
              <label>
                <input 
                  type="radio" 
                  name="borderRadiusType" 
                  value='%' 
                  onChange={e=>setBorderRadiusType(e.target.value)} 
                />
                %
              </label>
            </div>
          </div>

          <div className="sandbox-item-container">
            <div 
              className={boxShadowClicked}
              onClick={()=>{
                        boxShadowClicked === 'sandbox-item-heading' ? 
                          setBoxShadowClicked('sandbox-box-shadow-heading-clicked') 
                        : 
                          setBoxShadowClicked('sandbox-item-heading');

                        boxShadowShow === 'sandbox-hide' ? 
                          setBoxShadowShow('sandbox-box-shadow-show') 
                        : 
                          setBoxShadowShow('sandbox-hide');
                        }
                      }
            >
              <span className="sandbox-btn-arrow"></span>
              Box Shadow
            </div>
            <div className={boxShadowShow}>
              <div>
                <label>
                  <input 
                    type="checkbox" 
                    onChange={e=>{e.target.checked ? setBoxInset('inset') : setBoxInset('')}} 
                  />
                  Inset
                </label>
              </div>
              <br />
              <div className="sandbox-item-flex">
                <label>X-Offset</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={boxOffsetX} 
                    min={-100} 
                    max={100} 
                    step={1} 
                    onChange={e=>setBoxOffsetX(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Y-Offset</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={boxOffsetY} 
                    min={-100} 
                    max={100} 
                    step={1} 
                    onChange={e=>setBoxOffsetY(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Blur</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={boxBlur} 
                    min={0} 
                    max={100} 
                    step={1} 
                    onChange={e=>setBoxBlur(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Spread</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={boxSpread} 
                    min={-100} 
                    max={100} 
                    step={1} 
                    onChange={e=>setBoxSpread(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Red</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={boxRed} 
                    min={0} 
                    max={255} 
                    step={1} 
                    onChange={e=>setBoxRed(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Green</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={boxGreen} 
                    min={0} 
                    max={255} 
                    step={1} 
                    onChange={e=>setBoxGreen(e.target.value)} 
                  />
                </div>
              </div>
              <div className="sandbox-item-flex">
                <label>Blue</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={boxBlue} 
                    min={0} 
                    max={255} 
                    step={1} 
                    onChange={e=>setBoxBlue(e.target.value)} 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sandbox-item-container">
            <div 
              className={rotationClicked}
              onClick={()=>{
                        rotationClicked === 'sandbox-item-heading' ? 
                          setRotationClicked('sandbox-rotation-heading-clicked') 
                        : 
                          setRotationClicked('sandbox-item-heading');

                        rotationShow === 'sandbox-hide' ? 
                          setRotationShow('sandbox-rotation-show') 
                        : 
                          setRotationShow('sandbox-hide');
                        }
                      }
            >
              <span className="sandbox-btn-arrow"></span>
              Rotation
            </div>
            <div className={rotationShow}>
              <div className="sandbox-item-flex">
                <label>Rotate</label>
                <div className="sandbox-input">
                  <input 
                    type="range" 
                    value={rotation} 
                    min={0} 
                    max={360} 
                    step={1} 
                    onChange={e=>setRotation(e.target.value)} 
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <button 
              className="sandbox-btn-done"
              onClick={()=>setShowModal(!showModal)}
            >
              I'm Done
            </button>
          </div>
        </div>

        <div className="sandbox-modal-output" style={{opacity: showModal ? 1 : 0, transition: showModal ? 'opacity 0.3s' : '0.3s', visibility: showModal ? 'visible' : 'hidden'}} >
          <h3>Here's Your CSS</h3>
          <div 
            className="sandbox-modal-output-content"
            id="output"
            onClick={()=>selectText('output')}
          >
            .my-class {'{'}
              <br />
              &nbsp;&nbsp;background-color: {bgColor};
              {
                +blur !== 0 ? 
                  <>
                    <br />
                    &nbsp;&nbsp;blur: {blur}px;
                  </> 
                : 
                  ''
              }
              {
                +borderWidth !== 0 ? 
                  <>
                    <br />
                    &nbsp;&nbsp;border: {borderWidth}px {borderStyle} {borderColor};
                  </> 
                : 
                  ''
              }
              {
                +borderRadius !== 0 ? 
                  <>
                    <br />
                    &nbsp;&nbsp;borderRadius: {borderRadius}{borderRadiusType};
                  </> 
                : 
                  ''
              }
              {
                +boxOffsetX !== 0 || +boxOffsetY !== 0 || +boxBlur !== 0 || +boxSpread !== 0 ? 
                  <>
                    <br />
                    &nbsp;&nbsp;boxShadow: {boxInset} {boxOffsetX}px {boxOffsetY}px {boxBlur}px {boxSpread}px {boxColor};
                  </> 
                : 
                  ''
              }
              <br />
              &nbsp;&nbsp;height: {height}px;
              {
                +rotation !== 0 ? 
                  <>
                    <br />
                    &nbsp;&nbsp;transform: rotate({rotation}deg);
                  </> 
                : 
                  ''
              }
              <br />
              &nbsp;&nbsp;width: {width}px;
              <br />
            {'}'}
          </div>
          <div style={{textAlign:"center"}}>
            <button 
              className="sandbox-btn-modal"
              onClick={()=>setShowModal(!showModal)}
            >
              Got It
            </button>
          </div>
        </div>
      </div>
    </>
  );
}