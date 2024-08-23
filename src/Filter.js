import {
  Button,
  Divider,
  HStack,
  Stack,
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

function Filter({ onClick, searchTerm }) {
  return (
    <Stack
      bgColor="white"
      py={4}
      alignContent="center"
      justifyContent="center"
      align="center"
    >
      <Box width="100%" maxWidth="600px" px={4}>
        <Wrap spacing={2} justify="center">
          <WrapItem>
            <Button
              bgColor={searchTerm.filter === "bestMatch" ? "gray.200" : "white"}
              name="bestMatch"
              onClick={onClick}
              size="sm"
            >
              Best Match
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              bgColor={searchTerm.filter === "openNow" ? "gray.200" : "white"}
              name="openNow"
              onClick={onClick}
              size="sm"
            >
              Open Now
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              bgColor={searchTerm.filter === "budget" ? "gray.200" : "white"}
              name="budget"
              onClick={onClick}
              size="sm"
            >
              Save Me Some $$$
            </Button>
          </WrapItem>
        </Wrap>
        <Divider mt={4} />
      </Box>
    </Stack>
  );
}

export default Filter;
