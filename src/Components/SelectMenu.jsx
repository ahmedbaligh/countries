import { Select, Box } from "@chakra-ui/react";

export const SelectMenu = ({
  options,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <Select
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      w="250px"
      size="md"
      bg="blue.800"
      borderColor="blue.800"
      color="white"
      _hover={{ bg: "blue.700", borderColor: "blue.700" }}
      {...props}
    >
      {options.map((option) => (
        <Box as="option" key={option.value} value={option.value} color="black">
          {option.label}
        </Box>
      ))}
    </Select>
  );
};
