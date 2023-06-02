import { Box } from "@chakra-ui/react";
import React from "react";
import countries from "../countries";

import CountryCard from "../components/CountryCard";

export function Home() {
  return (
    <Box display="flex" alignItems="flex-start">
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </Box>
  );
}
