import React from "react";

export default function ContactInfo(props) {
  return (
    <div className={`contact-info-block ${props.class}`}>
      <p>
        {props.method}:&nbsp;
        <a href={props.href} target={props.target} rel={props.rel}>
          {props.label}
        </a>
      </p>
    </div>
  );
}
