import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../stylesheets/password-generator.css';
import Header from './Header';
import PasswordSection from './PasswordSection';

export default function PasswordGenerator() {
  // Store local state and variables
  const [length, setLength] = useState(10);
  const [charset, setCharset] = useState('abcdefghijklmnopqrstuvwxyz');
  const [uniquePassword, setUniquePassword] = useState('');
  const notChar = /^[a-zA-Z0-9]/;
  let tempPassword = '';

  // Check if a specific symbol is used two times in a row and skip it if true
  const checkDupe = (char) => {
    switch (char) {
      case char:
        if (tempPassword[tempPassword.length - 1] === char) {
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  // Create unique password
  const generatePassword = () => {
    let randomCharset = charset.split(``);

    if (!charset) {
      setUniquePassword('Check at least one option!');
    } else {
      for (let i = 0; tempPassword.length < length; i++) {
        if (i === randomCharset.length) {
          i = 0;
        } else {
          randomCharset.sort(() => Math.random() - 0.5);
          if (!randomCharset[i].match(notChar)) {
            if (checkDupe(randomCharset[i])) {
              tempPassword += randomCharset[i];
            }
          } else {
            tempPassword += randomCharset[i];
          }
        }
      }
      setUniquePassword(tempPassword);
    }
  };

  // Add characters to selected set when checked, remove them when unchecked
  const handleCheck = (e) => {
    const char = e.target;
    if (char.checked) {
      if (!charset.includes(`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)) {
        setCharset(charset + char.value);
      } else if (!charset.includes(`abcdefghijklmnopqrstuvwxyz`)) {
        setCharset(charset + char.value);
      } else if (!charset.includes(`1234567890`)) {
        setCharset(charset + char.value);
      } else if (!charset.includes(`-_`)) {
        setCharset(charset + char.value);
      } else if (!charset.includes('#;:`~!@#$%^&*()+={}[]/\\?')) {
        setCharset(charset + char.value);
      }
    } else if (!char.checked) {
      setCharset(charset.replace(char.value, ''));
    }
  };

  // Assure length cannot be lower than 2 or higher than 50
  const handleLengthChange = (e) =>
    e.target.value <= 50 && e.target.value >= 2
      ? setLength(+e.target.value)
      : '';

  return (
    <>
      <Helmet>
        <title>
          password generator - awren nuit's software engineering portfolio
        </title>
        <link
          rel="canonical"
          href="http://www.awrennuit.com/#/password-generator"
        />
        <meta
          name="description"
          content="A password generator developed by full stack software awren nuit. It's a free & easy way to create secure passwords."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, Password generator, awren, awren nuit"
        />
      </Helmet>
      <Header />
      <div className="password-background">
        <div className="password-full-container">
          <h1 className="password-heading">Password Generator</h1>
          <PasswordSection
            symbolType="uppercase"
            handleCheck={handleCheck}
            value="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          />
          <PasswordSection
            symbolType="lowercase"
            handleCheck={handleCheck}
            value="abcdefghijklmnopqrstuvwxyz"
          />
          <PasswordSection
            symbolType="numbers"
            handleCheck={handleCheck}
            value="1234567890"
          />
          <PasswordSection
            symbolType="dash & underscore"
            handleCheck={handleCheck}
            value="-_"
          />
          <PasswordSection
            symbolType="other symbols"
            handleCheck={handleCheck}
            value="#;:`~!@#$%^&*()+={}[]/\\?"
          />

          <input
            className="password-length-input"
            type="number"
            min="2"
            max="50"
            value={length}
            id="length"
            onChange={handleLengthChange}
          />
          <div>
            <button className="generate" onClick={generatePassword}>
              Generate
            </button>
          </div>

          <hr className="password-hr" />

          <div>
            <p className="password-output-heading">Your unique ID is:</p>
            <p className="password-output">{uniquePassword}</p>
          </div>
        </div>
      </div>
    </>
  );
}
