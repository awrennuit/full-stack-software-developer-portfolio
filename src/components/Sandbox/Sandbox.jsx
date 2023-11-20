import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import PropertyTab from './PropertyTab';
import TestDiv from './TestDiv';
import Output from './Output';

export default function CssSandbox() {
  const doneRef = useRef(null);

  // sets height & width
  const [isDimensionsExpanded, setIsDimensionsExpanded] = useState(false);
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(300);

  // sets background color
  const [isBgExpanded, setIsBgExpanded] = useState(false);
  const [bgRed, setBgRed] = useState(255);
  const [bgGreen, setBgGreen] = useState(255);
  const [bgBlue, setBgBlue] = useState(255);
  const [bgColor, setBgColor] = useState(
    `rgb(${bgRed}, ${bgGreen}, ${bgBlue})`
  );

  // sets blur
  const [isBlurExpanded, setIsBlurExpanded] = useState(false);
  const [blur, setBlur] = useState(0);

  //sets border
  const [isBorderExpanded, setIsBorderExpanded] = useState(false);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderStyle, setBorderStyle] = useState('none');
  const [borderRed, setBorderRed] = useState(125);
  const [borderGreen, setBorderGreen] = useState(125);
  const [borderBlue, setBorderBlue] = useState(125);
  const [borderColor, setBorderColor] = useState(
    `rgb(${borderRed}, ${borderGreen}, ${borderBlue})`
  );

  // sets border radius
  const [isBorderRadiusExpanded, setIsBorderRadiusExpanded] = useState(false);
  const [borderRadius, setBorderRadius] = useState(0);
  const [borderRadiusType, setBorderRadiusType] = useState('px');

  // sets box shadow
  const [isBoxShadowExpanded, setIsBoxShadowExpanded] = useState(false);
  const [boxRed, setBoxRed] = useState(125);
  const [boxGreen, setBoxGreen] = useState(125);
  const [boxBlue, setBoxBlue] = useState(125);
  const [boxColor, setBoxColor] = useState(
    `rgb(${boxRed}, ${boxGreen}, ${boxBlue})`
  );
  const [boxInset, setBoxInset] = useState('');
  const [boxOffsetX, setBoxOffsetX] = useState(0);
  const [boxOffsetY, setBoxOffsetY] = useState(0);
  const [boxBlur, setBoxBlur] = useState(0);
  const [boxSpread, setBoxSpread] = useState(0);

  // sets rotation
  const [isRotationExpanded, setIsRotationExpanded] = useState(false);
  const [rotation, setRotation] = useState(0);

  // toggles dialog
  const [showDialog, setShowDialog] = useState(false);

  // property tab data
  const propertyTabList = [
    {
      heading: 'Dimensions',
      isExpanded: isDimensionsExpanded,
      setIsExpanded: setIsDimensionsExpanded,
      sliderList: [
        {
          sliderLabel: 'Height',
          sliderMaxValue: 400,
          sliderMinValue: 50,
          sliderSetVariable: setHeight,
          sliderStepValue: 1,
          sliderVariable: height,
        },
        {
          sliderLabel: 'Width',
          sliderMaxValue: 400,
          sliderMinValue: 50,
          sliderSetVariable: setWidth,
          sliderStepValue: 1,
          sliderVariable: width,
        },
      ],
    },
    {
      heading: 'Background',
      isExpanded: isBgExpanded,
      setIsExpanded: setIsBgExpanded,
      sliderList: [
        {
          sliderLabel: 'Red',
          sliderMaxValue: 255,
          sliderMinValue: 0,
          sliderSetVariable: setBgRed,
          sliderStepValue: 1,
          sliderVariable: bgRed,
        },
        {
          sliderLabel: 'Green',
          sliderMaxValue: 255,
          sliderMinValue: 0,
          sliderSetVariable: setBgGreen,
          sliderStepValue: 1,
          sliderVariable: bgGreen,
        },
        {
          sliderLabel: 'Blue',
          sliderMaxValue: 255,
          sliderMinValue: 0,
          sliderSetVariable: setBgBlue,
          sliderStepValue: 1,
          sliderVariable: bgBlue,
        },
      ],
    },
    {
      heading: 'Blur',
      isExpanded: isBlurExpanded,
      setIsExpanded: setIsBlurExpanded,
      sliderList: [
        {
          sliderLabel: 'Blur',
          sliderMaxValue: 60,
          sliderMinValue: 0,
          sliderSetVariable: setBlur,
          sliderStepValue: 1,
          sliderVariable: blur,
        },
      ],
    },
    {
      heading: 'Border',
      isExpanded: isBorderExpanded,
      setIsExpanded: setIsBorderExpanded,
      sliderList: [
        {
          sliderLabel: 'Width',
          sliderMaxValue: 50,
          sliderMinValue: 0,
          sliderSetVariable: setBorderWidth,
          sliderStepValue: 1,
          sliderVariable: borderWidth,
        },
        {
          sliderLabel: 'Red',
          sliderMaxValue: 255,
          sliderMinValue: 0,
          sliderSetVariable: setBorderRed,
          sliderStepValue: 1,
          sliderVariable: borderRed,
        },
        {
          sliderLabel: 'Green',
          sliderMaxValue: 255,
          sliderMinValue: 0,
          sliderSetVariable: setBorderGreen,
          sliderStepValue: 1,
          sliderVariable: borderGreen,
        },
        {
          sliderLabel: 'Blue',
          sliderMaxValue: 255,
          sliderMinValue: 0,
          sliderSetVariable: setBorderBlue,
          sliderStepValue: 1,
          sliderVariable: borderBlue,
        },
      ],
      toggleList: [
        {
          toggleName: 'borderStyle',
          toggleLabel: 'Solid',
          toggleType: 'radio',
          toggleValue: 'solid',
          toggleVariable: setBorderStyle,
        },
        {
          toggleName: 'borderStyle',
          toggleLabel: 'Double',
          toggleType: 'radio',
          toggleValue: 'double',
          toggleVariable: setBorderStyle,
        },
        {
          toggleName: 'borderStyle',
          toggleLabel: 'Dashed',
          toggleType: 'radio',
          toggleValue: 'dashed',
          toggleVariable: setBorderStyle,
        },
        {
          toggleName: 'borderStyle',
          toggleLabel: 'Dotted',
          toggleType: 'radio',
          toggleValue: 'dotted',
          toggleVariable: setBorderStyle,
        },
        {
          toggleName: 'borderStyle',
          toggleLabel: 'Groove',
          toggleType: 'radio',
          toggleValue: 'groove',
          toggleVariable: setBorderStyle,
        },
        {
          toggleName: 'borderStyle',
          toggleLabel: 'Ridge',
          toggleType: 'radio',
          toggleValue: 'ridge',
          toggleVariable: setBorderStyle,
        },
        {
          toggleName: 'borderStyle',
          toggleLabel: 'Inset',
          toggleType: 'radio',
          toggleValue: 'inset',
          toggleVariable: setBorderStyle,
        },
        {
          toggleName: 'borderStyle',
          toggleLabel: 'Outset',
          toggleType: 'radio',
          toggleValue: 'outset',
          toggleVariable: setBorderStyle,
        },
        {
          defaultChecked: true,
          toggleId: 'border-none',
          toggleName: 'borderStyle',
          toggleLabel: 'None',
          toggleType: 'radio',
          toggleValue: 'none',
          toggleVariable: setBorderStyle,
        },
      ],
    },
    {
      heading: 'Border Radius',
      isExpanded: isBorderRadiusExpanded,
      setIsExpanded: setIsBorderRadiusExpanded,
      sliderList: [
        {
          sliderLabel: 'Width',
          sliderMaxValue: 100,
          sliderMinValue: 0,
          sliderSetVariable: setBorderRadius,
          sliderStepValue: 1,
          sliderVariable: borderRadius,
        },
      ],
      toggleList: [
        {
          defaultChecked: true,
          toggleId: 'radius-px',
          toggleName: 'borderRadiusType',
          toggleLabel: 'px',
          toggleType: 'radio',
          toggleValue: 'px',
          toggleVariable: setBorderRadiusType,
        },
        {
          toggleName: 'borderRadiusType',
          toggleLabel: '%',
          toggleType: 'radio',
          toggleValue: '%',
          toggleVariable: setBorderRadiusType,
        },
      ],
    },
    {
      heading: 'Box Shadow',
      isExpanded: isBoxShadowExpanded,
      setIsExpanded: setIsBoxShadowExpanded,
      sliderList: [
        {
          sliderLabel: 'X-Offset',
          sliderMaxValue: 100,
          sliderMinValue: -100,
          sliderSetVariable: setBoxOffsetX,
          sliderStepValue: 1,
          sliderVariable: boxOffsetX,
        },
        {
          sliderLabel: 'Y-Offset',
          sliderMaxValue: 100,
          sliderMinValue: -100,
          sliderSetVariable: setBoxOffsetY,
          sliderStepValue: 1,
          sliderVariable: boxOffsetY,
        },
        {
          sliderLabel: 'Blur',
          sliderMaxValue: 100,
          sliderMinValue: 0,
          sliderSetVariable: setBoxBlur,
          sliderStepValue: 1,
          sliderVariable: boxBlur,
        },
        {
          sliderLabel: 'Spread',
          sliderMaxValue: 100,
          sliderMinValue: -100,
          sliderSetVariable: setBoxSpread,
          sliderStepValue: 1,
          sliderVariable: boxSpread,
        },
        {
          sliderLabel: 'Red',
          sliderMaxValue: 255,
          sliderMinValue: 0,
          sliderSetVariable: setBoxRed,
          sliderStepValue: 1,
          sliderVariable: boxRed,
        },
        {
          sliderLabel: 'Green',
          sliderMaxValue: 255,
          sliderMinValue: 0,
          sliderSetVariable: setBoxGreen,
          sliderStepValue: 1,
          sliderVariable: boxGreen,
        },
        {
          sliderLabel: 'Blue',
          sliderMaxValue: 255,
          sliderMinValue: 0,
          sliderSetVariable: setBoxBlue,
          sliderStepValue: 1,
          sliderVariable: boxBlue,
        },
      ],
      toggleList: [
        {
          toggleId: 'box-inset',
          toggleName: 'boxInset',
          toggleLabel: 'Inset',
          toggleType: 'checkbox',
          toggleValue: 'inset',
          toggleVariable: setBoxInset,
        },
      ],
    },
    {
      heading: 'Rotation',
      isExpanded: isRotationExpanded,
      setIsExpanded: setIsRotationExpanded,
      sliderList: [
        {
          sliderLabel: 'Rotate',
          sliderMaxValue: 360,
          sliderMinValue: 0,
          sliderSetVariable: setRotation,
          sliderStepValue: 1,
          sliderVariable: rotation,
        },
      ],
    },
  ];

  useEffect(() => {
    setBgColor(`rgb(${bgRed}, ${bgGreen}, ${bgBlue})`);
  }, [bgRed, bgGreen, bgBlue]);

  useEffect(() => {
    setBorderColor(`rgb(${borderRed}, ${borderGreen}, ${borderBlue})`);
  }, [borderRed, borderGreen, borderBlue]);

  useEffect(() => {
    setBoxColor(`rgb(${boxRed}, ${boxGreen}, ${boxBlue})`);
  }, [boxRed, boxGreen, boxBlue]);

  const resetValues = () => {
    document.querySelector('input[name="borderStyle"]:checked').checked = false;
    document.querySelector(
      'input[name="borderRadiusType"]:checked'
    ).checked = false;
    document.getElementById('border-none').checked = true;
    document.getElementById('radius-px').checked = true;
    document.getElementById('box-inset').checked = false;
    setHeight(200);
    setWidth(300);
    setBgRed(255);
    setBgGreen(255);
    setBgBlue(255);
    setBlur(0);
    setBorderStyle('none');
    setBorderWidth(0);
    setBorderRed(125);
    setBorderGreen(125);
    setBorderBlue(125);
    setBorderRadius(0);
    setBorderRadiusType('px');
    setBoxInset('');
    setBoxOffsetX(0);
    setBoxOffsetY(0);
    setBoxBlur(0);
    setBoxSpread(0);
    setBoxRed(125);
    setBoxGreen(125);
    setBoxBlue(125);
    setRotation(0);
  };

  const selectText = (text) => {
    if (document.selection) {
      // for IE
      const range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(text));
      range.select();
    } else if (window.getSelection) {
      const range = document.createRange();
      range.selectNode(document.getElementById(text));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  return (
    <>
      <Helmet>
        <title>css sandbox - awren nuit's software engineering portfolio</title>
        <link rel="canonical" href="http://www.awrennuit.com/#/sandbox" />
        <meta
          name="description"
          content="This is an interactive CSS sandbox! Add some styles, including box-shadow, blur, borders, and more. Copy the code to add it to your project."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, awren, awren nuit"
        />
      </Helmet>
      <Header />
      <article className="sandbox">
        <h1 className="a11y">CSS Sandbox</h1>
        <section className="sandbox__sidebar-container">
          <div className="sandbox__sidebar-header">
            <h2>Properties</h2>
            <button className="sandbox__reset-btn" onClick={resetValues}>
              Reset
            </button>
          </div>

          {propertyTabList.map((item, i) => (
            <PropertyTab
              key={i}
              heading={item.heading}
              isExpanded={item.isExpanded}
              setIsExpanded={item.setIsExpanded}
              sliderList={item.sliderList}
              toggleList={item.toggleList}
            />
          ))}

          <button
            ref={doneRef}
            className="sandbox__done-btn"
            onClick={() => setShowDialog(!showDialog)}
          >
            I'm Done
          </button>
        </section>

        <TestDiv
          backgroundColor={bgColor}
          border={`${borderWidth}px ${borderStyle} ${borderColor}`}
          borderRadius={`${borderRadius}${borderRadiusType}`}
          boxShadow={`${boxInset} ${boxOffsetX}px ${boxOffsetY}px ${boxBlur}px ${boxSpread}px ${boxColor}`}
          filter={`blur(${blur}px)`}
          height={height}
          transform={`rotate(${rotation}deg)`}
          width={`${width}px`}
        />

        <Output
          bgColor={bgColor}
          blur={blur}
          borderColor={borderColor}
          borderRadius={borderRadius}
          borderRadiusType={borderRadiusType}
          borderStyle={borderStyle}
          borderWidth={borderWidth}
          boxBlur={boxBlur}
          boxColor={boxColor}
          boxInset={boxInset}
          boxOffsetX={boxOffsetX}
          boxOffsetY={boxOffsetY}
          boxSpread={boxSpread}
          doneRef={doneRef}
          height={height}
          rotation={rotation}
          selectText={selectText}
          setShowDialog={setShowDialog}
          showDialog={showDialog}
          width={width}
        />
      </article>
      <Footer />
    </>
  );
}
