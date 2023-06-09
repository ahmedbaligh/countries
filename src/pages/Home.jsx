import { useState, useEffect } from 'react';
import { Grid, Flex, Container } from '@chakra-ui/react';
import axios from 'axios';

import CountryCard from '../components/CountryCard';
import { InputField } from '../components/InputField';
import { SelectMenu } from '../components/SelectMenu';

const regions = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' }
];

export function Home() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleDropdownClick = e => {
    setSelectedRegion(e.target.value);
  };

  useEffect(() => {
    async function getCountries() {
      const result = await axios.get('https://restcountries.com/v3.1/all');

      setCountries(result.data);
    }

    getCountries();
  }, []);

  const filteredCountries = countries.filter(country => {
    const region = regions.find(region => region.value === selectedRegion);

    const includesName = country.name.common.toLowerCase().includes(searchQuery.toLowerCase().trim());
    const inRegion = region ? region.label === country.region : true;

    return includesName && inRegion;
  });

  return (
    <Container py="12" gap="16" bg="gray.100">
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

      <Grid templateColumns="repeat(4, 1fr)" gap="20">
        {filteredCountries.map(country => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </Grid>
    </Container>
  );
}
