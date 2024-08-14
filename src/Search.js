import {
  Button,
  FormControl,
  Input,
  Stack,
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

function Search({ onChange, onClick }) {
  function handleKeyPress(event) {
    if (event.key === "enter") {
    }
  }

  return (
    <Stack
      bgColor="white"
      width="100%"
      height="150px"
      alignContent={"center"}
      justifyContent={"center"}
      align="center"
    >
      <Box
        bgColor="white"
        width="100%"
        maxWidth="800px"
        borderRadius="full"
        boxShadow="2xl"
        p={2}
      >
        <HStack
          spacing={4}
          divider={
            <Box borderLeft="1px" borderColor="gray.200" height="30px" />
          }
        >
          <Box flex={1}>
            <Input
              onChange={onChange}
              name="searchBusiness"
              variant="unstyled"
              placeholder="Search Business"
              _placeholder={{ color: "black" }}
              color="black"
              textAlign={["left", "center"]}
            />
          </Box>
          <Box>
            <Input
              onChange={onChange}
              name="location"
              variant="unstyled"
              placeholder="Where?"
              _placeholder={{ color: "black" }}
              color="black"
              textAlign={["left", "center"]}
            />
          </Box>
          <Button
            onClick={onClick}
            type="submit"
            colorScheme="red"
            borderRadius="full"
            size="lg"
            p={0}
          >
            <SearchIcon />
          </Button>
        </HStack>
      </Box>
    </Stack>
  );
}

export default Search;
