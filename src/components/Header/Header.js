import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

export default function Header() {

  const history = useHistory();
  const [red, setRed] = useState(50);
  const [green, setGreen] = useState(50);
  const [blue, setBlue] = useState(65);
  const [bg, setBg] = useState('');

  useEffect(()=>{
    document.body.style = `background: ${bg};`;
  }, [bg]);

  useEffect(()=>{
    setBg(`rgb(${red}, ${green}, ${blue})`);
  }, [red, green, blue]);

  const changeBackground = dir => {
    switch(dir){
      case 'up':
        if(blue < 255){
          setRed(red + 5);
          setGreen(green + 5);
          setBlue(blue + 5);
        }
        break;
      case 'down':
        if(red > 0){
          setRed(red - 5);
          setGreen(green - 5);
          setBlue(blue - 5);
        }
        break;
      default:
        break;
    }
  }

  return(
    <div className="header">
      {/* <h1 className="home-heading" onClick={()=>(history.push('/'))}>Awren Nuit</h1>
      <div className="header-grid">
        <span className="resume-link" onClick={()=>(history.push('/resume'))}>View My Resume</span>
        <a className="github-link" href="https://github.com/AwrenNuit" target="_blank" rel="noopener noreferrer">
          <span>Checkout My GitHub</span>
        </a>
        <a className="email-link" href = "mailto: awren.nuit@gmail.com" rel="noopener noreferrer">
        <span>Email Me</span>
        </a>
      </div> */}
      <div>
        <div style={{marginBottom:"10px"}}>
          <button className="header-bg-btn" onClick={()=>changeBackground('up')}>&and;</button>
        </div>
        <div>
          <button className="header-bg-btn" onClick={()=>changeBackground('down')}>&or;</button>
        </div>
      </div>
      <div className="header-nav" style={{float:"right"}}>
        <button className="header-btn">Portfolio</button>
        <button className="header-btn">About</button>
        <button className="header-btn" onClick={()=>history.push(`/css-sandbox`)}>CSS Sandbox</button>
      </div>
    </div>
  );
}