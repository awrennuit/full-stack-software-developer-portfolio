import React, {} from 'react';
import 'Abstract.css';

export default function Abstract() {

    return(
      <>
        <h1>Choose Your Palette</h1>
        <div class="row">
            <div class="column">
                <input type="radio" id="dark" name="colors" />  
                <label>Dark</label>
            </div>
            <div class="column">
                <input type="radio" id="colorful" name="colors" />
                <label>Colorful</label>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <input type="radio" id="darker" name="colors" />
                <label>Darker</label>
            </div>
            <div class="column">
                <input type="radio" id="vaporwave" name="colors" />
                <label>Vaporwave</label>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <input type="radio" id="darkest" name="colors" />
                <label>Darkest</label>
            </div>
            <div class="column">
                <input type="radio" id="neon" name="colors" />
                <label>Neon</label>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <button id="sad-btn"><span class="one">&#187;</span><span class="two">&#187;</span><span class="three">&#187;</span><span class="four">&#187;</span>ACCEPT SADNESS.<span class="four">&#171;</span><span class="three">&#171;</span><span class="two">&#171;</span><span class="one">&#171;</span></button>
            </div>
            <div class="column">
                <button id="psych-btn"><span class="one">&#187;</span><span class="two">&#187;</span><span class="three">&#187;</span><span class="four">&#187;</span>ACCEPT PSYCHEDELICS.<span class="four">&#171;</span><span class="three">&#171;</span><span class="two">&#171;</span><span class="one">&#171;</span></button>
            </div>
        </div>
        <div id="output">
            
        </div>
      </>
    );
}