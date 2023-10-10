export default function ContactInfo({
  ariaLabel,
  className,
  href,
  label,
  method,
  rel,
  target,
}) {
  return (
    <li className={`contact-info-block ${className}`}>
      <label htmlFor={className}>{method}:&nbsp;</label>
      <a
        id={className}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel ? ariaLabel : null}
      >
        {label}
      </a>
    </li>
  );
}
