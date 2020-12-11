import React from "react";
import { headerLinks } from "../../utils/headerLinks";
import HeaderBtn from "./HeaderBtn";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-flex">
        {headerLinks.map((link, i) => (
          <HeaderBtn key={i} label={link.label} url={link.url} />
        ))}
      </div>
    </div>
  );
}
