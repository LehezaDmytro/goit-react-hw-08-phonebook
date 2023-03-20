import PropTypes from 'prop-types';

import { FormLabel, Input, Button, Box, Heading } from '@chakra-ui/react';

export const RegisterForm = ({ onHandleSubmit }) => {
  const submitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onHandleSubmit({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    form.reset();
  };

  return (
    <Box textAlign="center" p="3">
      <Box
        maxW="450"
        mx="auto"
        borderWidth="1px"
        borderRadius="lg"
        p="10"
        boxShadow="dark-lg"
      >
        <Heading as="h2" size="lg" mb="3">
          Register Form
        </Heading>
        <form onSubmit={submitForm}>
          <FormLabel mb="0" htmlFor="name">
            Name
          </FormLabel>
          <Input
            mb="5"
            size="sm"
            boxShadow="base"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormLabel mb="0" htmlFor="email">
            Email
          </FormLabel>
          <Input
            size="sm"
            mb="5"
            boxShadow="base"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <FormLabel mb="0" htmlFor="password">
            Password
          </FormLabel>
          <Input
            size="sm"
            mb="5"
            boxShadow="base"
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
          <Button colorScheme="green" boxShadow="base" type="submit">
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

RegisterForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
