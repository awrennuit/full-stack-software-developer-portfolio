import React from 'react';
import './Abstract.css';

export default function Abstract() {

    return(
      <div className="abstract-container">
        <h1 className="abstract-heading">Choose Your Palette</h1>
        <center>
          <div className="abstract-row">
              <div className="abstract-column">
                  <input type="radio" id="dark" name="colors" />  
                  <label className="abstract-label">Dark</label>
              </div>
              <div className="abstract-column">
                  <input type="radio" id="colorful" name="colors" />
                  <label className="abstract-label">Colorful</label>
              </div>
          </div>
          <div className="abstract-row">
              <div className="abstract-column">
                  <input type="radio" id="darker" name="colors" />
                  <label className="abstract-label">Darker</label>
              </div>
              <div className="abstract-column">
                  <input type="radio" id="vaporwave" name="colors" />
                  <label className="abstract-label">Vaporwave</label>
              </div>
          </div>
          <div className="abstract-row">
              <div className="abstract-column">
                  <input type="radio" id="darkest" name="colors" />
                  <label className="abstract-label">Darkest</label>
              </div>
              <div className="abstract-column">
                  <input type="radio" id="neon" name="colors" />
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
            
        </div>
      </div>
    );
}