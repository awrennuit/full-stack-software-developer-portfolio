export default function ContactInfo(props) {
  return (
    <li className={`contact-info-block ${props.class}`}>
      <label htmlFor={props.class}>{props.method}:&nbsp;</label>
      <a
        id={props.class}
        href={props.href}
        target={props.target}
        rel={props.rel}
        aria-label={props.ariaLabel ? props.ariaLabel : null}
      >
        {props.label}
      </a>
    </li>
  );
}
