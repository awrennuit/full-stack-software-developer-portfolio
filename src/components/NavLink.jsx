import { Link, useLocation } from 'react-router-dom';

export default function HeaderBtn({ label, url }) {
  const location = useLocation();
  const isCurPage = location.pathname === url;

  return (
    <Link
      className={`nav-link${isCurPage ? ' nav-link--current' : ''}`}
      to={location.pathname !== url ? url : '#'}
      tabIndex={isCurPage ? '-1' : '0'}
    >
      {label}
    </Link>
  );
}
