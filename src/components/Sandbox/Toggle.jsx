export default function Toggle({
  isChecked = false,
  setVariable,
  toggleId = '',
  toggleLabel,
  toggleName,
  toggleType,
  toggleValue,
}) {
  return (
    <label className="toggle">
      <input
        id={toggleId ? toggleId : null}
        defaultChecked={isChecked}
        name={toggleName}
        type={toggleType}
        value={toggleValue}
        onChange={e =>
          toggleType === 'checkbox'
            ? e.target.checked
              ? setVariable(e.target.value)
              : setVariable('')
            : setVariable(e.target.value)
        }
      />
      {toggleLabel}
    </label>
  );
}
