import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { passwordData } from '../utils/passwordData';
import Header from './Header';

export default function PasswordGenerator() {
  const [charset, setCharset] = useState(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
  );
  const [length, setLength] = useState(20);
  const [uniquePassword, setUniquePassword] = useState('');
  const isAlphaNumeric = /^[a-zA-Z0-9]/;

  const handleChange = e => {
    const newVal = e.target.value;

    if (charset.includes(newVal)) setCharset(charset.replace(newVal, ''));
    else setCharset(prev => prev + newVal);
  };

  const handleLengthChange = e => {
    const newVal = e.target.value;

    if (newVal >= 50) setLength(50);
    else if (newVal <= 2) setLength(2);
    else setLength(newVal);
  };

  const isDupe = (char, tempPassword) => {
    if (tempPassword[tempPassword.length - 1] === char) return true;

    return false;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!charset) {
      setUniquePassword('12345 - the same as my luggage');

      return;
    }

    const randomCharset = charset.split(``);
    let tempPassword = '';

    for (let i = 0; tempPassword.length < length; i++) {
      // ensure we do not run out of characters
      if (i === randomCharset.length) {
        i = 0;

        continue;
      }

      // randomize on each iteration
      randomCharset.sort(() => Math.random() - 0.5);

      if (randomCharset[i].match(isAlphaNumeric)) {
        tempPassword += randomCharset[i];

        continue;
      }

      // do not allow two special characters in a row
      if (!isDupe(randomCharset[i], tempPassword)) {
        tempPassword += randomCharset[i];
      }
    }

    setUniquePassword(tempPassword);
  };

  return (
    <>
      <Helmet>
        <title>
          password generator - awren nuit’s software engineering portfolio
        </title>
        <link
          rel="canonical"
          href="https://www.awrennuit.com/password-generator"
        />
        <meta
          name="description"
          content="A password generator developed by full stack software engineer awren nuit. It’s a free & easy way to create secure passwords."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, Password generator, awren, awren nuit"
        />
      </Helmet>
      <Header />
      <main className="password">
        <article className="password__inner">
          <h1>Password Generator</h1>
          <form name="password-form" onSubmit={handleSubmit}>
            {passwordData.map(p => (
              <label key={p.id}>
                <input
                  checked={charset.includes(p.value)}
                  type="checkbox"
                  value={p.value}
                  onChange={handleChange}
                />
                {p.value}
              </label>
            ))}
            <label className="password__length">
              <input
                max="50"
                min="2"
                type="number"
                value={length}
                onChange={handleLengthChange}
              />
              characters
            </label>
            <button type="submit">Generate</button>
          </form>

          <div className="password__output">
            <h2>Your unique ID</h2>
            <p>{uniquePassword}</p>
          </div>
        </article>
      </main>
    </>
  );
}
