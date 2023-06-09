import { useState } from 'react';
import { Grid, Box } from '@chakra-ui/react';

import countries from '../all.json';

import CountryCard from '../components/CountryCard';
import { InputField } from '../components/InputField';

export function Home() {
  const [search, setSearch] = useState('');

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
