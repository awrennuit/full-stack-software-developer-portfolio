import React, { useState } from 'react';
import './Abstract.css';

export default function Abstract() {

  const [color, setColor] = useState([]);
  const [art, setArt] = useState('');

  const randomizeMatrix = () => {
    let divs = [];
    for(let i=0; i<30; i++){
      divs.push(<div className="abstract-div" key={i}>{randomizeSpan()}</div>);
    }
    return divs;
  }

  const randomizeSpan = () => {
    let spans = [];
    for(let i=0; i<30; i++){
      color.sort(() => Math.random() - 0.5);
      spans.push(<span className={`${color[0]} abstract-span`} key={i}></span>);
    }
    return spans;
  }

  const loop = () => {
    setArt('');
    for(let i=0; i<50; i++) {
      setTimeout(() => {
        setArt(randomizeMatrix());
      }, 10);
    }
  }

    return(
      <div className="abstract-container">
        <h1 className="abstract-heading">Choose Your Palette</h1>
        <center>
          <div className="abstract-row">
            <div className="abstract-column">
              <input 
                type="radio" 
                id="dark" 
                name="colors"
                onChange={()=>{
                              setColor(['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee', 'eeeeeeee', 'eeeeeeeee', 'eeeeeeeeee'])
                            }
                          } 
              />  
              <label className="abstract-label">Dark</label>
            </div>
            <div className="abstract-column">
              <input 
                type="radio" 
                id="colorful" 
                name="colors"
                onChange={()=>{
                              setColor(['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc', 'ccccccc', 'cccccccc', 'ccccccccc', 'cccccccccc'])
                            }
                          } 
              />
              <label className="abstract-label">Colorful</label>
            </div>
          </div>
          <div className="abstract-row">
            <div className="abstract-column">
              <input 
                type="radio" 
                id="darker" 
                name="colors"
                onChange={()=>{
                              setColor(['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb', 'bbbbbbb', 'bbbbbbbb', 'bbbbbbbbb', 'bbbbbbbbbb'])
                            }
                          } 
              />
              <label className="abstract-label">Darker</label>
            </div>
            <div className="abstract-column">
              <input 
                type="radio" 
                id="vaporwave" 
                name="colors"
                onChange={()=>{
                              setColor(['d', 'dd', 'ddd', 'dddd', 'ddddd', 'dddddd', 'ddddddd', 'dddddddd', 'ddddddddd', 'dddddddddd'])
                            }
                          } 
              />
              <label className="abstract-label">Vaporwave</label>
            </div>
          </div>
          <div className="abstract-row">
            <div className="abstract-column">
              <input 
                type="radio" 
                id="darkest" 
                name="colors"
                onChange={()=>{
                              setColor(['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'])
                            }
                          } 
              />
              <label className="abstract-label">Darkest</label>
            </div>
            <div className="abstract-column">
              <input 
                type="radio" 
                id="neon" 
                name="colors"
                onChange={()=>{
                              setColor(['f', 'ff', 'fff', 'ffff', 'fffff', 'ffffff', 'fffffff', 'ffffffff', 'fffffffff', 'ffffffffff'])
                            }
                          } 
              />
              <label className="abstract-label">Neon</label>
            </div>
          </div>
          <div className="abstract-row">
            <div className="abstract-column">
              <button className="abstract-btn" id="sad-btn" onClick={loop}>
                <span className="one abstract-span">&#187;</span>
                <span className="two abstract-span">&#187;</span>
                <span className="three abstract-span">&#187;</span>
                <span className="four abstract-span">&#187;</span>
                ACCEPT SADNESS.
                <span className="four abstract-span">&#171;</span>
                <span className="three abstract-span">&#171;</span>
                <span className="two abstract-span">&#171;</span>
                <span className="one abstract-span">&#171;</span>
              </button>
            </div>
            <div className="abstract-column">
              <button className="abstract-btn" id="psych-btn" onClick={loop}>
                <span className="one abstract-span">&#187;</span>
                <span className="two abstract-span">&#187;</span>
                <span className="three abstract-span">&#187;</span>
                <span className="four abstract-span">&#187;</span>
                ACCEPT PSYCHEDELICS.
                <span className="four abstract-span">&#171;</span>
                <span className="three abstract-span">&#171;</span>
                <span className="two abstract-span">&#171;</span>
                <span className="one abstract-span">&#171;</span>
              </button>
            </div>
          </div>
        </center>
        <div className="abstract-output">
          {art}
        </div>
      </div>
    );
}