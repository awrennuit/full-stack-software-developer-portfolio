import { footerIconData } from '../utils/footerIconData';
import FooterIcon from './FooterIcon';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>&#169; {new Date().getFullYear()} awren nuit</p>
      </div>
      <div className="footer__icon-container">
        {footerIconData.map((info, i) => (
          <FooterIcon
            alt={info.alt}
            height={info.height}
            href={info.href}
            key={i}
            rel={info.rel}
            src={info.src}
            target={info.target}
            width={info.width}
          />
        ))}
      </div>
    </div>
  );
}
