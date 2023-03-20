import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from 'redux/auth/authSelectors';

import { Progress } from '@chakra-ui/react';

const PrevateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Progress size="xs" isIndeterminate />;
  }

  if (!isLogin && !token) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
};

export default PrevateRoute;
