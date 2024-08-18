import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  StackDivider,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";

function BusinessFindMore({ onClick }) {
  return (
    <>
      <div className="businessFindMore">
        <Card width="280x" height="400px" m={2} onClick={onClick}>
          <CardBody display="flex" flexDirection="column" alignItems="center">
            <Box
              position="relative"
              width="200px"
              height="200px"
              overflow="hidden"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                isRound={true}
                variant="solid"
                colorScheme="red"
                aria-label="Done"
                fontSize="20px"
                icon={<AddIcon />}
              />
            </Box>
            <Heading size="md" textAlign="center">
              Load More Results
            </Heading>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default BusinessFindMore;
