import PropTypes from 'prop-types';
import { Input, Heading } from '@chakra-ui/react';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <>
      <Heading as="h2" size="sm" mb="1">
        Find contacts by name
      </Heading>
      <Input
        mb="5"
        size="sm"
        boxShadow="base"
        type="text"
        onChange={onFilterChange}
        value={filter}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
