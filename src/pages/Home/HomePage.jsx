import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import {
  getContacts,
  getFilter,
  getError,
  getIsLoading,
} from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { addFilter } from 'redux/filterSlice';

import { Box, Heading, Flex, Progress } from '@chakra-ui/react';

const HomePage = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onHandleSubmit = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const onFilterChange = e => {
    dispatch(addFilter(e.target.value));
  };

  const filteredContacts = () => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };
  return (
    <Flex p="5" justifyContent="space-around">
      <Box
        minW="450"
        height="300"
        borderWidth="1px"
        borderRadius="lg"
        p="5"
        boxShadow="xl"
      >
        <Heading as="h2" size="md" mb="3">
          Add new contact
        </Heading>
        <ContactForm onHandleSubmit={onHandleSubmit} />
      </Box>
      <Box minW="450" borderWidth="1px" borderRadius="lg" p="5" boxShadow="xl">
        <Heading as="h2" size="md" mb="3">
          Contacts
        </Heading>
        <Filter onFilterChange={onFilterChange} filter={filter} /> <br />
        {isLoading && !error && <Progress size="xs" isIndeterminate />}
        <ContactList
          filteredContacts={filteredContacts()}
          deleteItem={deleteItem}
        />
      </Box>
    </Flex>
  );
};

export default HomePage;
