import React, { useState } from 'react';
import './PasswordGenerator.css';

export default function PasswordGenerator() {

  const [length, setLength] = useState(0);
  const [charset, setCharset] = useState('');
  const [tempID, setTempID] = useState('');
  const notChar = /^[a-zA-Z0-9]/;


  return(
    <div id="full-container">
      <h1>Password Generator</h1>

      <input type="checkbox" id="up-alphabet" />
      <span>Add uppercase?</span>
      <div>
        <textarea id="up-alphabet-display" readonly>ABCDEFGHIJKLMNOPQRSTUVWXYZ</textarea>
      </div>
      <hr />

      <input type="checkbox" id="lo-alphabet" checked />
      <span>Add lowercase?</span>
      <div>
        <textarea id="lo-alphabet-display" readonly>abcdefghijklmnopqrstuvwxyz</textarea>
      </div>
      <hr />

      <input type="checkbox" id="numbers" />
      <span>Add numbers?</span>
      <div>
        <textarea id="numbers-display" readonly>1234567890</textarea>
      </div>
      <hr />

      <input type="checkbox" id="dash" />
      <span>Add dash & underscore?</span>
      <div>
        <textarea id="dash-display" readonly>-_</textarea>
      </div>
      <hr />

      <input type="checkbox" id="symbols" />
      <span>Add other symbols?</span>
      <div>
        <textarea id="symbols-display" readonly>#;:`~!@#$%^&*()+={}[]/?\</textarea>
      </div>
      <hr />

      <input 
        type="number" 
        min="2" 
        max="50" 
        value="10" 
        id="length"
        onChange={(event)=>setLength(event.target.value)} />
      <div>
        <button id="generate">Generate</button>
      </div>
      <hr />
      
      <div>
        <p id="output">Your unique ID is: </p>
      </div>
    </div>
  );
}