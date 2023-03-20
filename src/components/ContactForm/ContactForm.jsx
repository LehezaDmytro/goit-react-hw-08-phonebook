import PropTypes from 'prop-types';
import { FormLabel, Input, Button } from '@chakra-ui/react';

export const ContactForm = ({ onHandleSubmit }) => {
  const submitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onHandleSubmit(form.elements.name.value, form.elements.number.value);
    form.reset();
  };

  return (
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
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormLabel mb="0" htmlFor="tel">
        Number
      </FormLabel>
      <Input
        size="sm"
        mb="5"
        boxShadow="base"
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button colorScheme="green" boxShadow="base" type="submit">
        Add contact
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
