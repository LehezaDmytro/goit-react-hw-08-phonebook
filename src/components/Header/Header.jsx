import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from '../Header/Header.module.css';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { isUserLogin } from 'redux/auth/authSelectors';

import { ImAddressBook } from 'react-icons/im';
import { Flex, Spacer, Box, Heading, ButtonGroup } from '@chakra-ui/react';

export const Header = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <Box borderWidth="1px" borderRadius="lg" p="2" mb="2" boxShadow="lg">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="lg">
            Phonebook
            <ImAddressBook className={styles.iconBook} />
          </Heading>
        </Box>
        <Spacer />
        {!isLogin && (
          <ButtonGroup gap="2">
            <Box
              className={styles.navLinkBox}
              py="2"
              px="3"
              background="teal"
              borderRadius="lg"
              fontWeight="500"
              textColor="white"
            >
              <NavLink to="/register" className={styles.navLink}>
                Sign Up
              </NavLink>
            </Box>
            <Box
              py="2"
              px="3"
              background="teal"
              borderRadius="lg"
              fontWeight="500"
              textColor="white"
            >
              <NavLink to="/login" className={styles.navLink}>
                Log in
              </NavLink>
            </Box>
          </ButtonGroup>
        )}
        {isLogin && <UserMenu />}
      </Flex>
    </Box>
  );
};
