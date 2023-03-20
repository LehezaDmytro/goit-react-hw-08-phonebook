import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLogin } from 'redux/auth/authSelectors';

const PublicRoute = () => {
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="home" />;
  }

  return <Outlet />;
};

export default PublicRoute;
