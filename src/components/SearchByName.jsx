import { Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const searchPlaceholder = "Search for a country ...";
export function SearchByName() {
  const [query, setQuery] = useState("");

  return (
    <Flex className="search" w="40vw" gap={2}>
      <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={30} />
      <Input
        id="search"
        placeholder={searchPlaceholder}
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </Flex>
  );
}
