import React from "react";
import { useHistory } from "react-router-dom";

export default function HeaderBtn(props) {
  const history = useHistory();
  const location = history.location.pathname;

  return (
    <button
      className={location === props.url ? "header-btn-here" : "header-btn"}
      onClick={location !== props.url ? () => history.push(props.url) : ""}
    >
      <span className="header-btn-corner-one"></span>
      <span className="header-btn-corner-two"></span>
      {props.label}
    </button>
  );
}
