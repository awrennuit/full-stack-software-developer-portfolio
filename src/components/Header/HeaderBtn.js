import React from "react";
import { useHistory } from "react-router-dom";

export default function HeaderBtn({ label, url }) {
  const history = useHistory();
  const location = history.location.pathname;

  return (
    <button
      className={location === url ? "header-btn-here" : "header-btn"}
      onClick={() => (location !== url ? history.push(url) : null)}
    >
      <span className="header-btn-corner-one"></span>
      <span className="header-btn-corner-two"></span>
      {label}
    </button>
  );
}
