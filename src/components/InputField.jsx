import { Flex, Input, useColorModeValue } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function InputField({ placeholder, value, onInputChange, ...props }) {
  return (
    <Flex
      className="search"
      gap={4}
      p={3}
      align="center"
      boxShadow="md"
      m={5}
      justify="center"
      {...props}
      bg={useColorModeValue("gray.100", "blue.700")}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={20} color="gray" />

      <Input
        border="none"
        id="search"
        placeholder={placeholder}
        borderRadius={5}
        value={value}
        onChange={onInputChange}
      />
    </Flex>
  );
}
