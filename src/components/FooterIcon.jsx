export default function FooterIcon({
  alt,
  height,
  href,
  src,
  rel,
  target,
  width,
}) {
  return (
    <a className="footer-icon" href={href} target={target} rel={rel}>
      <img src={src} alt={alt} height={height} width={width} loading="lazy" />
    </a>
  );
}
