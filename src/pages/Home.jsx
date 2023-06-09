import { useState, useEffect } from 'react';
import { Grid, Box } from '@chakra-ui/react';
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
  const [search, setSearch] = useState('');
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

  return (
    <Box>
      <InputField
        placeholder="Type a keyword to search with"
        value={search}
        onInputChange={e => setSearch(e.target.value)}
      />

      <SelectMenu
        placeholder="Filter By Region"
        options={regions}
        value={selectedRegion}
        onChange={handleDropdownClick}
      />

      <Grid templateColumns="repeat(4, 1fr)" gap="20" bgColor="gray.800">
        {countries.map(country => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </Grid>
    </Box>
  );
}
