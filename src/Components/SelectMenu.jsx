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
      h="14"
      size="md"
      bg="white"
      borderColor="white"
      color="black"
      shadow="sm"
      _hover={{ bg: "gray.100", borderColor: "gray.100" }}
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
