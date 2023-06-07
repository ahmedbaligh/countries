import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

function CountryCard({ country }) {
  return (
    <Box bg="blue.800" borderRadius="md" pb="16">
      <Image
        src={country.flags.svg}
        alt={country.flags.alt}
        w="full"
        h="52"
        objectFit="cover"
      />

      <Flex
        flexDirection="column"
        gap="2"
        px="8"
        pt="6"
        color="white"
        fontWeight="600"
      >
        <Text as="h2" fontSize="2xl" fontWeight="800" mb="4">
          {country.name.common}
        </Text>

        <Text>
          Population: {""}
          <Text as="span" fontWeight="300">
            {country.population.toLocaleString()}
          </Text>
        </Text>

        <Text>
          Region: {""}
          <Text as="span" fontWeight="300">
            {country.region}
          </Text>
        </Text>

        <Text>
          Capital: {""}
          <Text as="span" fontWeight="300">
            {country.capital}
          </Text>
        </Text>
      </Flex>
    </Box>
  );
}

export default CountryCard;
