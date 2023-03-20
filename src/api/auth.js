import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/toast';
const { toast } = createStandaloneToast();

const aushInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const singUp = async data => {
  console.log(data);
  try {
    const { data: result } = await aushInstance.post('/users/signup', data);
    aushInstance.defaults.headers.authorization = `Bearer ${result.token}`;
    toast({
      title: 'Account created.',
      description: `Welcome ${data.name}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    return result;
  } catch ({ response }) {
    toast({
      title: 'An error occurred.',
      description: `${response.data.message || `${data.email} is not correct`}`,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }
};

export const logIn = async data => {
  try {
    const { data: result } = await aushInstance.post('/users/login', data);
    aushInstance.defaults.headers.authorization = `Bearer ${result.token}`;
    toast({
      title: 'Successful login.',
      description: `Welcome ${result.user.name}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    return result;
  } catch ({ response }) {
    toast({
      title: 'An error occurred.',
      description: `${response.data.message || `${data.email} is not correct`}`,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }
};

export const logOut = async () => {
  const { data: result } = await aushInstance.post('/users/logout');
  aushInstance.defaults.headers.authorization = '';
  return result;
};

export const getCurrent = async token => {
  try {
    aushInstance.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await aushInstance.get('/users/current');
    return data;
  } catch (error) {
    aushInstance.defaults.headers.authorization = '';
    throw error;
  }
};

export default aushInstance;