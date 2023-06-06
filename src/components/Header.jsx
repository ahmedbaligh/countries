import {
  Button,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const value = useColorModeValue("gray.100", "blue.700");
  const { toggleColorMode } = useColorMode();
  return (
    <Flex as="header" justify="space-between" p={8} bg={value}>
      <Heading>Where in the World ?</Heading>
      <Button
        leftIcon={<FontAwesomeIcon icon={faMoon} ontSize={20} />}
        onClick={toggleColorMode}
      >
        Dark Mode
      </Button>
    </Flex>
  );
}
