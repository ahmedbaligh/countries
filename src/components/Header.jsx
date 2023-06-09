import { Button, Container, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Container
      as="header"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      py={8}
      bg={useColorModeValue('white', 'blue.700')}
      shadow="md"
      pos="relative"
      zIndex="banner"
    >
      <Text as="h1" fontSize="3xl" fontWeight="800">
        Where in the World?
      </Text>

      <Button
        bg="transparent"
        leftIcon={<FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faMoonSolid} fontSize={20} />}
        onClick={toggleColorMode}
      >
        Dark Mode
      </Button>
    </Container>
  );
}
