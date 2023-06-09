import React from 'react';
import { Box, Image, Text, Flex, Heading, useColorModeValue } from '@chakra-ui/react';

function CountryCard({ country }) {
  return (
    <Box
      shadow="md"
      borderRadius="md"
      pb="8"
      bg={useColorModeValue('white', 'blue.700')}
      color={useColorModeValue('black', 'white')}
    >
      <Image src={country.flags.svg} alt={country.flags.alt} w="full" h="36" objectFit="cover" />

      <Flex flexDirection="column" gap="2" px="6" pt="6" fontWeight="600">
        <Heading as="h2" size="md" fontWeight="800" mb="4">
          {country.name.common}
        </Heading>

        <Text>
          Population: {''}
          <Text as="span" fontWeight="300">
            {country.population.toLocaleString()}
          </Text>
        </Text>

        <Text>
          Region: {''}
          <Text as="span" fontWeight="300">
            {country.region}
          </Text>
        </Text>

        <Text>
          Capital: {''}
          <Text as="span" fontWeight="300">
            {country.capital}
          </Text>
        </Text>
      </Flex>
    </Box>
  );
}

export default CountryCard;
