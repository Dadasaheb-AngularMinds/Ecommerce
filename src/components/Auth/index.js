import { useLocation, Navigate, Outlet } from 'react-router-dom';
import Cookie from 'js-cookie';

const RequireAuth = () => {
  const location = useLocation();
  const isAuthenticated = () => {
    const token = Cookie.get('token');
    return !!token;
  };
  const content = isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="login" replace />
  );
  return content;
};
export default RequireAuth;
