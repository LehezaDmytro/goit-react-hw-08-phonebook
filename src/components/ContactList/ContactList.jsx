import PropTypes from 'prop-types';
import { Button, UnorderedList, ListItem, Flex } from '@chakra-ui/react';

export const ContactList = ({ filteredContacts, deleteItem }) => {
  return (
    <UnorderedList>
      {filteredContacts.map(contact => {
        return (
          <ListItem key={contact.id} mb="1">
            <Flex justifyContent="space-between">
              {contact.name}: {contact.number}
              <Button
                ml="2"
                colorScheme="green"
                size="xs"
                boxShadow="base"
                type="button"
                onClick={() => deleteItem(contact.id)}
              >
                Delete
              </Button>
            </Flex>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
