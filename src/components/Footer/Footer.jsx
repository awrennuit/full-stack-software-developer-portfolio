import { footerIconData } from '../../utils/footerIconData';
import './Footer.css';
import FooterIcons from './FooterIcons';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>&#169; {new Date().getFullYear()} awren nuit</p>
      </div>
      <div className="footer-icons">
        {footerIconData.map((info, i) => (
          <FooterIcons
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
