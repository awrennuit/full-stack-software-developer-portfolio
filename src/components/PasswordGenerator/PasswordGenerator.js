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
        <br />
        <textarea id="up-alphabet-display" readonly>ABCDEFGHIJKLMNOPQRSTUVWXYZ</textarea>
        <br />
        <hr />
      <input type="checkbox" id="lo-alphabet" checked />
        <span>Add lowercase?</span>
        <br />
        <textarea id="lo-alphabet-display" readonly>abcdefghijklmnopqrstuvwxyz</textarea>
        <br />
        <hr />
      <input type="checkbox" id="numbers" />
        <span>Add numbers?</span>
        <br />
        <textarea id="numbers-display" readonly>1234567890</textarea>
        <br />
        <hr />
      <input type="checkbox" id="dash" />
        <span>Add dash & underscore?</span>
        <br />
        <textarea id="dash-display" readonly>-_</textarea>
        <br />
        <hr />
      <input type="checkbox" id="symbols" />
        <span>Add other symbols?</span>
        <br />
        <textarea id="symbols-display" readonly>#;:`~!@#$%^&*()+={}[]/?\</textarea>
        <br />
        <hr />
      <input 
        type="number" 
        min="2" 
        max="50" 
        value="10" 
        id="length"
        onChange={(event)=>setLength(event.target.value)} />
      <br />
      <button id="generate">Generate</button>
      <hr />
      <div>
        <p id="output">Your unique ID is: </p>
      </div>
    </div>
  );
}