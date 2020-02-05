import React, { useState } from 'react';
import './PasswordGenerator.css';

export default function PasswordGenerator() {

  const [length, setLength] = useState(10);
  const [charset, setCharset] = useState('');
  const [tempID, setTempID] = useState('');
  const notChar = /^[a-zA-Z0-9]/;

  const handleLengthChange = e => e.target.value <= 50 && e.target.value >= 2 ? setLength(+e.target.value) : '';

  return(
    <div className="password-background">
      {JSON.stringify(length)}
      <div className="password-full-container">
        <h1 className="password-heading">Password Generator</h1>

        <input type="checkbox" />
        <span className="password-span">Add uppercase?</span>
        <div>
          <textarea className="password-textarea" readonly>ABCDEFGHIJKLMNOPQRSTUVWXYZ</textarea>
        </div>
        <hr className="password-hr" />

        <input type="checkbox" checked />
        <span className="password-span">Add lowercase?</span>
        <div>
          <textarea className="password-textarea" readonly>abcdefghijklmnopqrstuvwxyz</textarea>
        </div>
        <hr className="password-hr" />

        <input type="checkbox" id="numbers" />
        <span className="password-span">Add numbers?</span>
        <div>
          <textarea className="password-textarea" readonly>1234567890</textarea>
        </div>
        <hr className="password-hr" />

        <input type="checkbox" id="dash" />
        <span className="password-span">Add dash & underscore?</span>
        <div>
          <textarea className="password-textarea" readonly>-_</textarea>
        </div>
        <hr className="password-hr" />

        <input type="checkbox" id="symbols" />
        <span className="password-span">Add other symbols?</span>
        <div>
          {/* <textarea id="symbols-display" readonly>#;:`~!@#$%^&*()+={}[]/?\</textarea> */}
        </div>
        <hr className="password-hr" />

        <input 
          type="number" 
          min="2" 
          max="50" 
          value={length} 
          id="length"
          onChange={handleLengthChange} />
        <div>
          <button className="generate">Generate</button>
        </div>
        <hr className="password-hr" />

        <div>
          <p className="password-span">Your unique ID is: </p>
        </div>
      </div>
    </div>
  );
}