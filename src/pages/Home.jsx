import { Grid } from "@chakra-ui/react";
import React from "react";
import countries from "../all.json";

import CountryCard from "../components/CountryCard";

export function Home() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="20" bgColor="gray.800">
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </Grid>
  );
}
