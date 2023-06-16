import { Button, Image, Container, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export function CountryDetails() {
  const { countryID } = useParams();

  return (
    <Container flex={1} py="14" gap={{ base: 20, lg: 16 }}>
      <Button
        leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
        bg={useColorModeValue('white', 'blue.700')}
        shadow="sm"
        w="32"
        borderRadius="sm"
        fontWeight="300"
      >
        Back
      </Button>

      <Flex gap={[12, null, null, '24']} align={{ lg: 'center' }} flexDir={['column', null, 'row']}>
        <Image src="https://flagcdn.com/jo.svg" alt="Belgium" minW="0" flex={1} />

        <Flex minW="0" flex={1} flexDir="column" gap="8">
          <Heading as="h2" size="lg">
            Belgium
          </Heading>

          <Flex justify="space-between" gap={{ base: 8, lg: 14 }} flexDir={['column', null, null, 'row']}>
            <Flex flexDir="column" gap="1.5">
              <CountryDetail label="Native Name" value="Belgiē" />
              <CountryDetail label="Population" value="11,319,51" />
              <CountryDetail label="Region" value="Europe" />
              <CountryDetail label="Sub Region" value="Western Europe" />
              <CountryDetail label="Capital" value="Brussels" />
            </Flex>

            <Flex flexDir="column" gap="1.5">
              <CountryDetail label="Top Level Doamn" value=".be" />
              <CountryDetail label="Currencies" value="Euro" />
              <CountryDetail label="Languages" value="Dutch, French, German" />
            </Flex>
          </Flex>

          <Flex
            gap="4"
            align={['flex-start', null, null, 'center']}
            flexDir={['column', null, null, 'row']}
            mt={{ base: 4, lg: 8 }}
          >
            <Heading fontWeight="600" as="h3" size="sm">
              Border Countries:
            </Heading>

            <Flex gap="2" flexWrap="wrap">
              {[1, 2, 3].map((_, i) => (
                <BorderCountryButton key={i}>France</BorderCountryButton>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

const CountryDetail = ({ label, value }) => (
  <Text fontSize={{ base: 'sm', lg: 'md' }} fontWeight="600">
    {label}:{' '}
    <Text as="span" fontWeight="300">
      {value}
    </Text>
  </Text>
);

const BorderCountryButton = ({ children }) => (
  <Button
    bg={useColorModeValue('white', 'blue.700')}
    shadow="sm"
    borderRadius="sm"
    fontWeight="300"
    minWidth={{ base: 24, lg: '28' }}
    h="8"
    fontSize={{ base: 'sm', lg: 'md' }}
  >
    {children}
  </Button>
);

/* 
  flex-basis: auto;
  flex-shrink: 1;
  flex-grow: 0;

  flex: 0 1 auto;

  flex: 1;
  flex: 1 1 0%;
*/
