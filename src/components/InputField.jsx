import { Flex, Input, useColorModeValue } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export function InputField({ placeholder, value, onInputChange, ...props }) {
  return (
    <Flex
      gap="6"
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
      <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="1rem" color={useColorModeValue('gray', 'white')} />

      <Input
        border="none"
        fontSize="inherit"
        fontWeight="inherit"
        p="0"
        _placeholder={{ color: useColorModeValue('gray.600', 'white'), opacity: 0.8 }}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        _focusVisible={{}}
      />
    </Flex>
  );
}
