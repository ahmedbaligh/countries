import { Flex, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function InputField({ placeholder }) {
  return (
    <Flex
      className="search"
      w="40vw"
      gap={4}
      bg="white"
      p={3}
      align="center"
      boxShadow="md"
      m={5}
      justify="center"
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={20} color="gray" />

      <Input
        border="none"
        id="search"
        placeholder={placeholder}
        borderRadius={5}
        w="80%"
        variant="unstyled"
      />
    </Flex>
  );
}
