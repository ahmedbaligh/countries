import { useState } from "react";
import { Grid, Container, Flex, useColorModeValue } from "@chakra-ui/react";

import CountryCard from "../components/CountryCard";
import { InputField } from "../components/InputField";
import { SelectMenu } from "../components/SelectMenu";

import { useFetch } from "../hooks/useFetch";

const regions = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" }
];

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const { data: countries, isLoading, error } = useFetch("https://restcountries.com/v3.1/all");

  const handleDropdownClick = e => {
    setSelectedRegion(e.target.value);
  };

  const filteredCountries = countries
    ? countries.filter(country => {
        const region = regions.find(region => region.value === selectedRegion);

        const includesName = country.name.common.toLowerCase().includes(searchQuery.toLowerCase().trim());
        const inRegion = region ? region.label === country.region : true;

        return includesName && inRegion;
      })
    : [];

  return (
    <Container flex={1} py="12" gap="16" bg={useColorModeValue("gray.100", "blue.800")}>
      <Flex justify="space-between">
        <InputField
          placeholder="Search for a country..."
          value={searchQuery}
          onInputChange={e => setSearchQuery(e.target.value)}
          minW="500px"
        />

        <SelectMenu
          placeholder="Filter By Region"
          options={regions}
          value={selectedRegion}
          onChange={handleDropdownClick}
        />
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap="20" bgColor="gray.800">
        {error ? (
          <p>{error.message}</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : countries.length === 0 ? (
          <p>No countries found</p>
        ) : (
          filteredCountries.map(country => <CountryCard key={country.cca2} country={country} />)
        )}
      </Grid>
    </Container>
  );
}
