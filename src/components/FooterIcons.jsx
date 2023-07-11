export default function FooterIcons(props) {
  return (
    <a href={props.href} target={props.target} rel={props.rel}>
      <img
        src={props.src}
        alt={props.alt}
        height={props.height}
        width={props.width}
        loading="lazy"
      />
    </a>
  );
}
