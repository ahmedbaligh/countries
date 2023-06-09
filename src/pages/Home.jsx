import { useState, useEffect } from 'react';
import { Grid, Box } from '@chakra-ui/react';
import axios from 'axios';

import CountryCard from '../components/CountryCard';
import { InputField } from '../components/InputField';

export function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

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

      <Grid templateColumns="repeat(4, 1fr)" gap="20" bgColor="gray.800">
        {countries.map(country => (
          <CountryCard key={country.id} country={country} />
        ))}
      </Grid>
    </Box>
  );
}
