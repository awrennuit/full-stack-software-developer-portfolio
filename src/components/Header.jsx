import { headerLinks } from '../utils/headerLinks';
import HeaderBtn from './HeaderBtn';
import '../stylesheets/header.css';

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
