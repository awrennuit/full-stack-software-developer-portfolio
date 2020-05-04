import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

export default function Header() {

  const history = useHistory();
  const location = history.location.pathname;
  // const [red, setRed] = useState(50);
  // const [green, setGreen] = useState(50);
  // const [blue, setBlue] = useState(65);
  // const [bg, setBg] = useState('');

  // useEffect(()=>{
  //   document.body.style = `background: ${bg};`;
  // }, [bg]);

  // useEffect(()=>{
  //   setBg(`rgb(${red}, ${green}, ${blue})`);
  // }, [red, green, blue]);

  // const changeBackground = dir => {
  //   switch(dir){
  //     case 'up':
  //       if(blue < 255){
  //         setRed(red + 5);
  //         setGreen(green + 5);
  //         setBlue(blue + 5);
  //       }
  //       break;
  //     case 'down':
  //       if(red > 0){
  //         setRed(red - 5);
  //         setGreen(green - 5);
  //         setBlue(blue - 5);
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return(
    <div className="header">
      {/* <div>
        <div style={{marginBottom:"10px"}}>
          <button className="header-bg-btn" onClick={()=>changeBackground('up')}>&and;</button>
        </div>
        <div>
          <button className="header-bg-btn" onClick={()=>changeBackground('down')}>&or;</button>
        </div>
      </div> */}
      <div>
        <button 
          className={location === '/about' ? 'header-btn-here' : 'header-btn'}
          onClick={location !== '/about' ? ()=>(history.push('/about')) : null}>
          <span className="header-btn-corner-one"></span>
          <span className="header-btn-corner-two"></span>
          About
        </button>
        <button 
          className={location === '/projects' ? 'header-btn-here' : 'header-btn'} 
          onClick={location !== '/projects' ? ()=>(history.push('/projects')) : null}
        >
          <span className="header-btn-corner-one"></span>
          <span className="header-btn-corner-two"></span>
          Projects
        </button>
        <button 
          className={location === '/css-sandbox' ? 'header-btn-here' : 'header-btn'} 
          onClick={location !== '/css-sandbox' ? ()=>(history.push('/css-sandbox')) : ''}
        >
          <span className="header-btn-corner-one"></span>
          <span className="header-btn-corner-two"></span>
          Sandbox
        </button>
        {/* <button className="header-btn" onClick={()=>history.push('/contact')}>
          <span className="header-btn-corner-one"></span>
          <span className="header-btn-corner-two"></span>
          Contact
        </button> */}
        <button className="header-btn" onClick={()=>window.location.href="mailto:awren.nuit@gmail.com?subject=I%20Loved%20Your%20Portfolio"}>
          <span className="header-btn-corner-one"></span>
          <span className="header-btn-corner-two"></span>
          Email
        </button>
      </div>
    </div>
  );
}