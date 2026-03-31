export default function NumInstrments({
  getRandomNumber,
  numInstruments,
  setNumInstruments,
}) {
  const rollInstruments = () => {
    const rollOne = getRandomNumber(1, 3);
    const rollTwo = getRandomNumber(1, 3);
    const rollThree = getRandomNumber(1, 3);
    const sum = rollOne + rollTwo + rollThree;

    setNumInstruments({
      rollOne: rollOne,
      rollTwo: rollTwo,
      rollThree: rollThree,
      total: sum,
    });
  };

  return (
    <section className="album-idea-generator__card">
      <h2>number of instruments/patches</h2>
      <div className="album-idea-generator__content-top">
        <p>(3d3)</p>
        <button className="album-idea-generator__btn" onClick={rollInstruments}>
          {!numInstruments.total ? 'roll' : 'reroll'}
        </button>
      </div>
      {numInstruments.total && (
        <p>
          <strong>{numInstruments.total}</strong> = {numInstruments.rollOne} +{' '}
          {numInstruments.rollTwo} + {numInstruments.rollThree}
        </p>
      )}
    </section>
  );
}
