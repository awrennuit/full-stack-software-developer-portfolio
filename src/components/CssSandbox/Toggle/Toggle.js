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
    <label>
      <input
        defaultChecked={isChecked}
        id={toggleId ? toggleId : null}
        name={toggleName}
        onChange={(e) =>
          toggleType === "checkbox"
            ? e.target.checked
              ? setVariable(e.target.value)
              : setVariable("")
            : setVariable(e.target.value)
        }
        type={toggleType}
        value={toggleValue}
      />
      {toggleLabel}
    </label>
  );
}
