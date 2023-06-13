import { Box, Button, Container, Text, useBreakpointValue, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const { toggleColorMode, colorMode } = useColorMode();
  const iconSize = useBreakpointValue([14, null, 20]);

  return (
    <Box bg={useColorModeValue('white', 'blue.700')} shadow="md" pos="relative" zIndex="banner">
      <Container as="header" flexDir="row" justifyContent="space-between" alignItems="center" py={8}>
        <Text as="h1" fontSize={['md', null, 'xl', '3xl']} fontWeight="800">
          Where in the World?
        </Text>

        <Button
          bg="transparent"
          leftIcon={<FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faMoonSolid} fontSize={iconSize} />}
          fontSize={['sm', null, 'md']}
          onClick={toggleColorMode}
        >
          Dark Mode
        </Button>
      </Container>
    </Box>
  );
}
