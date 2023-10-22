import { Link, useLocation } from 'react-router-dom';

export default function HeaderBtn({ label, url }) {
  const location = useLocation();
  const isCurPage = location.pathname === url;

  return (
    <Link
      className={`header-btn${isCurPage ? ' header-btn--current' : ''}
      `}
      to={location.pathname !== url ? url : '#'}
      tabIndex={isCurPage ? '-1' : '0'}
    >
      <span className="header-btn__corner-one"></span>
      <span className="header-btn__corner-two"></span>
      {label}
    </Link>
  );
}
