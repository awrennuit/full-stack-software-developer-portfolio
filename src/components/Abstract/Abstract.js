import React, { useState } from 'react';
import './Abstract.css';

export default function Abstract() {

  const [color, setColor] = useState([]);

  const randomizeMatrix = () => {
    let $div = '';
    for(let i=0; i<30; i++) {
      $div = $(`<div class="painting"></div>`);
      for(let j=0; j<30; j++) {
          colors.sort(() => Math.random() - 0.5);
          $div.append(`<span class="${colors[0]}"></span>`);
      }
    }
  }

  const loop = () => {
    for(let i=0; i<500; i++) {
      setTimeout(() => {
        randomizeMatrix();
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
                    onChange={()=>{
                                  setColor(['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee', 'eeeeeeee', 'eeeeeeeee', 'eeeeeeeeee'])
                                  loop();
                                }
                              } 
              />  
                  <label className="abstract-label">Dark</label>
              </div>
              <div className="abstract-column">
                  <input 
                    type="radio" 
                    id="colorful" 
                    onChange={()=>{
                                  setColor(['c', 'cc', 'ccc', 'cccc', 'ccccc', 'cccccc', 'ccccccc', 'cccccccc', 'ccccccccc', 'cccccccccc'])
                                  loop();
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
                    onChange={()=>{
                                  setColor(['b', 'bb', 'bbb', 'bbbb', 'bbbbb', 'bbbbbb', 'bbbbbbb', 'bbbbbbbb', 'bbbbbbbbb', 'bbbbbbbbbb'])
                                  loop();
                                }
                              } 
              />
                  <label className="abstract-label">Darker</label>
              </div>
              <div className="abstract-column">
                  <input 
                    type="radio" 
                    id="vaporave" 
                    onChange={()=>{
                                  setColor(['d', 'dd', 'ddd', 'dddd', 'ddddd', 'dddddd', 'ddddddd', 'dddddddd', 'ddddddddd', 'dddddddddd'])
                                  loop();
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
                    onChange={()=>{
                                  setColor(['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'])
                                  loop();
                                }
                              } 
              />
                  <label className="abstract-label">Darkest</label>
              </div>
              <div className="abstract-column">
                  <input 
                    type="radio" 
                    id="neon" 
                    onChange={()=>{
                                  setColor(['f', 'ff', 'fff', 'ffff', 'fffff', 'ffffff', 'fffffff', 'ffffffff', 'fffffffff', 'ffffffffff'])
                                  loop();
                                }
                              } 
              />
                  <label className="abstract-label">Neon</label>
              </div>
          </div>
          <div className="abstract-row">
              <div className="abstract-column">
                  <button className="abstract-btn" id="sad-btn">
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
                  <button className="abstract-btn" id="psych-btn">
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
          {color}
        </div>
      </div>
    );
}