import { Button, Image, Container, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useFetch } from '../hooks/useFetch';

export function CountryDetails() {
  const { countryID } = useParams();

  const buttonBg = useColorModeValue('white', 'blue.700');
  const { data, isLoading } = useFetch(`https://restcountries.com/v3.1/alpha/${countryID}`);
  const countryCodes = data ? (data[0].borders ? data[0].borders.join(',') : undefined) : undefined;
  const { data: borderCountries, isLoading: isBorderCountriesLoading } = useFetch(
    `https://restcountries.com/v3.1/alpha?codes=${countryCodes}`
  );

  if (isLoading) return <p>Loading...</p>;

  const country = data[0];
  const languages = Object.keys(country.languages);
  const nativeName = country.name.nativeName[languages[0]].common;
  const currency = Object.keys(country.currencies)[0];
  const currencyName = country.currencies[currency].name;
  const formmatedLanguages = Object.values(country.languages).join(', ');

  return (
    <Container flex={1} py="14" gap={{ base: 20, lg: 16 }}>
      <Button
        as={Link}
        to="/"
        leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
        bg={buttonBg}
        shadow="sm"
        w="32"
        borderRadius="sm"
        fontWeight="300"
      >
        Back
      </Button>

      <Flex gap={[12, null, null, '24']} align={{ lg: 'center' }} flexDir={['column', null, 'row']}>
        <Image src={country.flags.png} alt="Belgium" minW="0" flex={1} />

        <Flex minW="0" flex={1} flexDir="column" gap="8">
          <Heading as="h2" size="lg">
            {country.name.common}
          </Heading>

          <Flex justify="space-between" gap={{ base: 8, lg: 14 }} flexDir={['column', null, null, 'row']}>
            <Flex flexDir="column" gap="1.5">
              <CountryDetail label="Native Name" value={nativeName} />
              <CountryDetail label="Population" value={country.population.toLocaleString()} />
              <CountryDetail label="Region" value={country.region} />
              <CountryDetail label="Sub Region" value={country.subregion} />
              <CountryDetail label="Capital" value={country.capital[0]} />
            </Flex>

            <Flex flexDir="column" gap="1.5">
              <CountryDetail label="Top Level Doamn" value={country.tld[0]} />
              <CountryDetail label="Currencies" value={currencyName} />
              <CountryDetail label="Languages" value={formmatedLanguages} />
            </Flex>
          </Flex>

          {borderCountries && (
            <Flex
              gap="4"
              align={['flex-start', null, null, 'center']}
              flexDir={['column', null, null, 'row']}
              mt={{ base: 4, lg: 8 }}
            >
              <Heading flexShrink="0" fontWeight="600" as="h3" size="sm">
                Border Countries:
              </Heading>

              <Flex gap="2" flexWrap="wrap">
                {borderCountries.map(borderCountry => (
                  <Button
                    key={borderCountry.cca2}
                    as={Link}
                    to={`/country/${borderCountry.cca2}`}
                    bg={buttonBg}
                    shadow="sm"
                    borderRadius="sm"
                    fontWeight="300"
                    minWidth={{ base: 24, lg: '28' }}
                    h="8"
                    fontSize={{ base: 'sm', lg: 'md' }}
                  >
                    {borderCountry.name.common}
                  </Button>
                ))}
              </Flex>
            </Flex>
          )}
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

/* 
  flex-basis: auto;
  flex-shrink: 1;
  flex-grow: 0;

  flex: 0 1 auto;

  flex: 1;
  flex: 1 1 0%;
*/
