import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = data => {
    dispatch(logIn(data));
  };
  return <LoginForm onHandleSubmit={onHandleSubmit} />;
};

export default LoginPage;
