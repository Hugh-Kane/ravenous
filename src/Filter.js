import { Button, Divider, HStack, Stack, Box } from "@chakra-ui/react";
import React, { useState } from "react";

function Filter({ onClick, searchTerm }) {
  return (
    <Stack
      bgColor="white"
      height="100px"
      alignContent={"center"}
      justifyContent={"center"}
      align="center"
    >
      <Box width="auto">
        <HStack>
          <Button
            bgColor={searchTerm.filter === "bestMatch" ? "gray.200" : "white"}
            name="bestMatch"
            onClick={onClick}
          >
            Best Match
          </Button>
          <Button
            bgColor={searchTerm.filter === "openNow" ? "gray.200" : "white"}
            name="openNow"
            onClick={onClick}
          >
            Open Now
          </Button>

          <Button
            bgColor={searchTerm.filter === "budget" ? "gray.200" : "white"}
            name="budget"
            onClick={onClick}
          >
            Save Me Some $$$
          </Button>
        </HStack>
        <Divider />
      </Box>
    </Stack>
  );
}

export default Filter;
