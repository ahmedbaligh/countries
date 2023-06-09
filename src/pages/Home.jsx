import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

import { SelectMenu } from "../Components/SelectMenu";

const regions = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export function Home() {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleDropdownClick = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <Box>
      <SelectMenu
        placeholder="Filter By Region"
        options={regions}
        value={selectedRegion}
        onChange={handleDropdownClick}
      />
    </Box>
  );
}
