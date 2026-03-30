import { useState } from 'react';
import { abstractOptions, hexOptions } from '../utils/abstractOptions';
import Header from './Header';

export default function Abstract() {
  const [art, setArt] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const randomizeMatrix = () => {
    let divs = [];

    for (let i = 0; i < 30; i++) {
      divs.push(
        <div className="abstract__output-row" key={i}>
          {randomizeSpan()}
        </div>,
      );
    }

    return divs;
  };

  const randomizeSpan = () => {
    const colors = hexOptions[selectedOption];

    let spans = [];

    for (let i = 0; i < 30; i++) {
      colors.sort(() => Math.random() - 0.5);
      spans.push(
        <span
          style={{ backgroundColor: colors[0] }}
          className="abstract__output-block"
          key={i}
        ></span>,
      );
    }

    return spans;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!selectedOption) return;

    setArt('');

    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        setArt(randomizeMatrix());
      }, 10);
    }
  };

  return (
    <>
      <Header />
      <main className="abstract">
        <h1>Choose Your Palette</h1>
        <form name="abstract-form" onSubmit={handleSubmit}>
          <div className="abstract__options-container">
            {abstractOptions.map(option => (
              <label key={option.id}>
                {option.label}
                <input
                  type="radio"
                  id={option.id}
                  checked={selectedOption === option.id}
                  name="colors"
                  value={option.id}
                  onChange={e => setSelectedOption(e.target.value)}
                />
              </label>
            ))}
          </div>
          <button disabled={!selectedOption} type="submit">
            generate
          </button>
        </form>
        {art && <div className="abstract__output">{art}</div>}
      </main>
    </>
  );
}
