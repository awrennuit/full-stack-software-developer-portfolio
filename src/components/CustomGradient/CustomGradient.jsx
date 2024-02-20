import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import GradientToolbar from './GradientToolbar';
import SimplePicker from './SimplePicker';

export default function CustomGradient() {
  const [colorOne, setColorOne] = useState('');
  const [colorTwo, setColorTwo] = useState('');
  const [gradient, setGradient] = useState('');
  const [gradientDirection, setGradientDirection] = useState('right');
  const [gradientType, setGradientType] = useState('linear');
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);

  useEffect(() => {
    setColorOne(
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    );
    setColorTwo(
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    );
  }, []);

  useEffect(() => {
    switch (gradientType) {
      case 'linear':
        setGradient(
          `linear-gradient(to ${gradientDirection}, ${colorOne}, ${colorTwo})`
        );
        break;
      case 'radial':
        setGradient(`radial-gradient(${colorOne}, ${colorTwo})`);
        break;
      default:
        break;
    }
  }, [colorOne, colorTwo, gradientType, gradientDirection]);

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
        <title>
          gradient maker - awren nuit’s software engineering portfolio
        </title>
        <link
          rel="canonical"
          href="http://www.awrennuit.com/#/gradient-maker"
        />
        <meta
          name="description"
          content="A gradient generator developed by full stack software awren nuit. It’s a free & easy way to create beautiful backgrounds."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, Gradient, Gradients, Gradient maker, Gradient generator, Background gradient, awren, awren nuit"
        />
      </Helmet>
      <Header />
      <div className="custom-gradient" style={{ background: `${gradient}` }}>
        <SimplePicker
          colorOne={colorOne}
          colorTwo={colorTwo}
          isToolbarOpen={isToolbarOpen}
          setColorOne={setColorOne}
          setColorTwo={setColorTwo}
        />
        <button
          className={`custom-gradient__toolbar-btn${
            isToolbarOpen ? ' custom-gradient__toolbar-btn--hidden' : ''
          }`}
          onClick={() => setIsToolbarOpen(true)}
          title="Open advanced controls"
        >
          &#10137;
          <span className="a11y">Open advanced controls</span>
        </button>

        <GradientToolbar
          colorOne={colorOne}
          colorTwo={colorTwo}
          gradient={gradient}
          gradientDirection={gradientDirection}
          gradientType={gradientType}
          isToolbarOpen={isToolbarOpen}
          selectText={selectText}
          setColorOne={setColorOne}
          setColorTwo={setColorTwo}
          setGradientDirection={setGradientDirection}
          setGradientType={setGradientType}
          setIsToolbarOpen={setIsToolbarOpen}
        />
      </div>
    </>
  );
}
