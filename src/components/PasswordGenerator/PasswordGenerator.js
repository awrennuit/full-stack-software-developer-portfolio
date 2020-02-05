import React, { useState } from 'react';
import './PasswordGenerator.css';

export default function PasswordGenerator() {

  const [length, setLength] = useState(10);
  const [charset, setCharset] = useState('abcdefghijklmnopqrstuvwxyz');
  const [tempID, setTempID] = useState('');
  const notChar = /^[a-zA-Z0-9]/;

  const handleCheck = e => {
    const char = e.target
    if(char.checked){
      if(!charset.includes(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)){
        setCharset(charset + char.value);
      }
      else if(!charset.includes(`abcdefghijklmnopqrstuvwxyz`)){
        setCharset(charset + char.value);
      }
      else if(!charset.includes(`1234567890`)){
        setCharset(charset + char.value);
      }
      else if(!charset.includes(`-_`)){
        setCharset(charset + char.value);
      }else if(!charset.includes('#;:`~!@#$%^&*()+={}[]/?\\')){
        setCharset(charset + char.value);
      }
    }
    else if(!char.checked){
      setCharset(charset.replace(char.value, ''));
    }
  }


  const handleLengthChange = e => e.target.value <= 50 && e.target.value >= 2 ? setLength(+e.target.value) : '';

  return(
    <div className="password-background">
      {JSON.stringify(charset)}
      <div className="password-full-container">
        <h1 className="password-heading">Password Generator</h1>

        <input type="checkbox" value={`ABCDEFGHIJKLMNOPQRSTUVWXYZ`} onChange={handleCheck} />
        <span className="password-span">Add uppercase?</span>
        <div>
          <textarea className="password-textarea" value={`ABCDEFGHIJKLMNOPQRSTUVWXYZ`} readOnly></textarea>
        </div>
        <hr className="password-hr" />

        <input type="checkbox" value={`abcdefghijklmnopqrstuvwxyz`} onChange={handleCheck} defaultChecked />
        <span className="password-span">Add lowercase?</span>
        <div>
          <textarea className="password-textarea" value={`abcdefghijklmnopqrstuvwxyz`} readOnly></textarea>
        </div>
        <hr className="password-hr" />

        <input type="checkbox" id="numbers" value={`1234567890`} onChange={handleCheck} />
        <span className="password-span">Add numbers?</span>
        <div>
          <textarea className="password-textarea" value={`1234567890`} readOnly></textarea>
        </div>
        <hr className="password-hr" />

        <input type="checkbox" id="dash" value={`-_`} onChange={handleCheck} />
        <span className="password-span">Add dash & underscore?</span>
        <div>
          <textarea className="password-textarea" value={`-_`} readOnly></textarea>
        </div>
        <hr className="password-hr" />

        <input type="checkbox" id="symbols" value={'#;:`~!@#$%^&*()+={}[]/?\\'} onChange={handleCheck} />
        <span className="password-span">Add other symbols?</span>
        <div>
          <textarea className="password-textarea" value={'#;:`~!@#$%^&*()+={}[]/?\\'} readOnly></textarea>
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