import React from "react";

export default function Toggle({
  setVariable,
  toggleName,
  toggleLabel,
  toggleType,
  toggleValue,
}) {
  return (
    <label>
      <input
        type={toggleType}
        name={toggleName}
        value={toggleValue}
        onChange={(e) =>
          toggleType === "checkbox"
            ? e.target.checked
              ? setVariable(e.target.value)
              : setVariable("")
            : setVariable(e.target.value)
        }
      />
      {toggleLabel}
    </label>
  );
}
