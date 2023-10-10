import { Link, useLocation } from 'react-router-dom';

export default function HeaderBtn({ label, url }) {
  const location = useLocation();

  return (
    <Link
      className={location.pathname === url ? 'header-btn-here' : 'header-btn'}
      to={location.pathname !== url ? url : '#'}
    >
      <span className="header-btn-corner-one"></span>
      <span className="header-btn-corner-two"></span>
      {label}
    </Link>
  );
}
