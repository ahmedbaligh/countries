import { Select, Box, useColorModeValue } from '@chakra-ui/react';

export const SelectMenu = ({ options, placeholder, value, onChange, ...props }) => {
  return (
    <Select
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      w="250px"
      h="14"
      size="md"
      bg={useColorModeValue('white', 'blue.700')}
      borderColor={useColorModeValue('white', 'blue.700')}
      color={useColorModeValue('black', 'white')}
      shadow="sm"
      _hover={{ bg: useColorModeValue('gray.100', 'gray.700'), borderColor: useColorModeValue('gray.100', 'gray.700') }}
      {...props}
    >
      {options.map(option => (
        <Box as="option" key={option.value} value={option.value} color="inherit">
          {option.label}
        </Box>
      ))}
    </Select>
  );
};
