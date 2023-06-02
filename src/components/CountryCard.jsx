import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

function CountryCard(props) {
  return (
    <Box borderWidth="0.25px" bgColor={"gray.600"}>
      <Image src={props.country.flag} ult="" w="100%" maxH={"300px"} />

      <Text
        display={"flex"}
        justifyContent={"center"}
        mt={2}
        fontSize="4xl"
        fontWeight="500"
        lineHeight="short"
        color="white"
      >
        {props.country.name}!
      </Text>

      <Text
        display={"flex"}
        justifyContent={"center"}
        mt={2}
        fontSize="xl"
        fontWeight="Nunito Sans"
        lineHeight="short"
        color="white"
      >
        Population: {props.country.population}
      </Text>

      <Text
        display={"flex"}
        justifyContent={"center"}
        mt={2}
        fontSize="xl"
        fontWeight="Nunito Sans"
        lineHeight="short"
        color="white"
      >
        Region: {props.country.region}
      </Text>

      <Text
        display={"flex"}
        justifyContent={"center"}
        mt={2}
        fontSize="xl"
        fontWeight="Nunito Sans"
        lineHeight="short"
        color="white"
      >
        Capital: {props.country.capital}
      </Text>
    </Box>
  );
}

export default CountryCard;
