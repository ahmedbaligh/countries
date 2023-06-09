import { Button, Container, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

export function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <Container
      as="header"
      flexDir="row"
      justifyContent="space-between"
      py={8}
      bg={useColorModeValue('white', 'blue.700')}
      shadow="md"
      pos="relative"
      zIndex="banner"
    >
      <Heading>Where in the World ?</Heading>

      <Button bg="transparent" leftIcon={<FontAwesomeIcon icon={faMoon} fontSize={20} />} onClick={toggleColorMode}>
        Dark Mode
      </Button>
    </Container>
  );
}
