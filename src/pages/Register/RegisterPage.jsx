import { useDispatch } from 'react-redux';
import { singUp } from 'redux/auth/authOperations';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = data => {
    dispatch(singUp(data));
  };
  return <RegisterForm onHandleSubmit={onHandleSubmit} />;
};

export default RegisterPage;
