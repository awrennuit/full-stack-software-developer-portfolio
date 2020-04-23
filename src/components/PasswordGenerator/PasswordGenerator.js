import React, { useState } from 'react';
import './PasswordGenerator.css';

export default function PasswordGenerator() {

  // Store local state and variables
  const [length, setLength] = useState(10);
  const [charset, setCharset] = useState('abcdefghijklmnopqrstuvwxyz');
  const [uniquePassword, setUniquePassword] = useState('');
  const notChar = /^[a-zA-Z0-9]/;
  let tempPassword = '';

  // Check if a specific symbol is used two times in a row and skip it if true
  const checkDupe = char => {
    switch(char){
      case char:
        if(tempPassword[tempPassword.length-1] === char){
          return false;
        }
        return true;
      default:
        return true;
    }
  }

  // Create unique password
  const generatePassword = () => {
    let randomCharset = charset.split(``);

    for(let i=0; tempPassword.length<length; i++) {
      if(i === randomCharset.length){
        i = 0;
      }
      else{
        randomCharset.sort(() => Math.random() - 0.5);
        if(!randomCharset[i].match(notChar)){
          if(checkDupe(randomCharset[i])){
            tempPassword += randomCharset[i];
          }
        }
        else{
          tempPassword += randomCharset[i];
        }
      }
    }
    setUniquePassword(tempPassword);
  }

  // Add characters to selected set when checked, remove them when unchecked
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
      }
      else if(!charset.includes('#;:`~!@#$%^&*()+={}[]/\\?')){ // Fix bug: adds \\ even though it only logs \
        setCharset(charset + char.value);
      }
    }
    else if(!char.checked){
      setCharset(charset.replace(char.value, ''));
    }
  }

  // Assure length cannot be lower than 2 or higher than 50
  const handleLengthChange = e => e.target.value <= 50 && e.target.value >= 2 ? setLength(+e.target.value) : '';

  return(
    <div className="password-background">
      <div className="password-full-container">
        <h1 className="password-heading">Password Generator</h1>
{JSON.stringify(charset)}
        <div className="password-checkbox-container">
          <input type="checkbox" value={`ABCDEFGHIJKLMNOPQRSTUVWXYZ`} onChange={handleCheck} />
          <span className="password-span">Add uppercase?</span>
        </div>
        <div className="password-text-container">
          <textarea className="password-textarea" value={`ABCDEFGHIJKLMNOPQRSTUVWXYZ`} readOnly></textarea>
        </div>
        <hr className="password-hr" />

        <div className="password-checkbox-container">
          <input type="checkbox" value={`abcdefghijklmnopqrstuvwxyz`} onChange={handleCheck} defaultChecked />
          <span className="password-span">Add lowercase?</span>
        </div>
        <div className="password-text-container">
          <textarea className="password-textarea" value={`abcdefghijklmnopqrstuvwxyz`} readOnly></textarea>
        </div>
        <hr className="password-hr" />

        <div className="password-checkbox-container">
          <input type="checkbox" id="numbers" value={`1234567890`} onChange={handleCheck} />
          <span className="password-span">Add numbers?</span>
        </div>
        <div className="password-text-container">
          <textarea className="password-textarea" value={`1234567890`} readOnly></textarea>
        </div>
        <hr className="password-hr" />

        <div className="password-checkbox-container">
          <input type="checkbox" id="dash" value={`-_`} onChange={handleCheck} />
          <span className="password-span">Add dash & underscore?</span>
        </div>
        <div className="password-text-container">
          <textarea className="password-textarea" value={`-_`} readOnly></textarea>
        </div>
        <hr className="password-hr" />

        <div className="password-checkbox-container">
          <input type="checkbox" id="symbols" value={'#;:`~!@#$%^&*()+={}[]/\\?'} onChange={handleCheck} />
          <span className="password-span">Add other symbols?</span>
        </div>
        <div className="password-text-container">
          <textarea className="password-textarea" value={'#;:`~!@#$%^&*()+={}[]/\\?'} readOnly></textarea>
        </div>
        <hr className="password-hr" />

        <input 
          className="password-length-input"
          type="number" 
          min="2" 
          max="50" 
          value={length} 
          id="length"
          onChange={handleLengthChange} />
        <div>
          <button className="generate" onClick={generatePassword}>Generate</button>
        </div>

        <hr className="password-hr" />

        <div>
          <p className="password-output-heading">Your unique ID is:</p>
          <p className="password-output">{uniquePassword}</p>
        </div>

      </div>
    </div>
  );
}