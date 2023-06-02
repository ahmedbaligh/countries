import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { InputField } from "../components/InputField";

export function Home() {
  const [search, setSearch] = useState("");

  return (
    <Box>
      <InputField
        placeholder="Type a keyword to search with"
        value={search}
        onInputChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
}
