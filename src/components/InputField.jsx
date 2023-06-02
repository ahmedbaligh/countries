import { Flex, Input } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function InputField({ placeholder, value, onInputChange, ...props }) {
  return (
    <Flex
      className="search"
      gap={4}
      bg="white"
      p={3}
      align="center"
      boxShadow="md"
      m={5}
      justify="center"
      {...props}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={20} color="gray" />

      <Input
        border="none"
        id="search"
        placeholder={placeholder}
        borderRadius={5}
        variant="unstyled"
        value={value}
        onChange={onInputChange}
      />
    </Flex>
  );
}
