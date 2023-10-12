import { footerIconData } from '../utils/footerIconData';
import FooterIcon from './FooterIcon';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&#169; {new Date().getFullYear()} awren nuit</p>
      <ul className="footer__icon-container">
        {footerIconData.map((info, i) => (
          <li key={i}>
            <FooterIcon
              alt={info.alt}
              height={info.height}
              href={info.href}
              rel={info.rel}
              src={info.src}
              target={info.target}
              width={info.width}
            />
          </li>
        ))}
      </ul>
    </footer>
  );
}
