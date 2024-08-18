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

function Search({ onChange, onSubmit }) {
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      onSubmit(event);
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
      onKeyDown={handleKeyPress}
    >
      <Box
        bgColor="white"
        width="90%"
        maxWidth="800px"
        borderRadius="full"
        boxShadow="2xl"
        p={2}
      >
        <HStack
          spacing={4}
          justifyContent="center"
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
          <Box flex={1}>
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
            onClick={onSubmit}
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
