import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@chakra-ui/react';

import { getUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {name}
      <Button
        onClick={onLogOut}
        colorScheme="teal"
        boxShadow="base"
        type="submit"
        ml="2"
      >
        Log out
      </Button>
    </div>
  );
};
