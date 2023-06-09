import { Flex, Input, useColorModeValue } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export function InputField({ placeholder, value, onInputChange, ...props }) {
  return (
    <Flex
      gap="3"
      align="center"
      px="8"
      py="2"
      fontSize="sm"
      fontWeight="600"
      boxShadow="md"
      borderRadius="md"
      {...props}
      bg={useColorModeValue('gray.100', 'blue.700')}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="1rem" color="gray" />

      <Input
        border="none"
        fontSize="inherit"
        fontWeight="inherit"
        p="0"
        _placeholder={{ color: 'gray.600' }}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
    </Flex>
  );
}
