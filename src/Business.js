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
  Skeleton,
} from "@chakra-ui/react";
import React from "react";

function Business({ business, isLoading }) {
  const openNow = business.currentOpeningHours.openNow;

  return (
    <>
      <div className="business">
        <Skeleton isLoaded={!isLoading}>
          <Card
            width="280x"
            height="400px"
            m={2}
            onClick={() => {
              window.open(business.googleMapsUri);
            }}
          >
            <CardBody display="flex" flexDirection="column" alignItems="center">
              <HStack width="100%" justifyContent="space-between">
                <Box>
                  <Badge colorScheme={openNow ? "green" : "red"}>
                    {openNow ? "Open" : "Closed"}
                  </Badge>
                </Box>
                <Box>
                  <Badge variant="outline" colorScheme="yellow">
                    {business.priceLevel}
                  </Badge>
                </Box>
              </HStack>

              <Box
                position="relative"
                width="200px"
                height="200px"
                overflow="hidden"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={business.photoUrl}
                  objectFit="cover"
                  alt={`Photo of ${business.displayName}`}
                  borderRadius="lg"
                />
              </Box>

              <Heading size="md" textAlign="center">
                {business.displayName.text}
              </Heading>
              <HStack
                divider={<StackDivider borderColor="gray.200" />}
                mt="6"
                spacing="2"
              >
                <Box>
                  <Text fontSize="xs" noOfLines={4} width="100%">
                    {business.shortFormattedAddress}
                  </Text>
                </Box>
                <Box>
                  <Badge>{business.types[0]}</Badge>
                  <Text fontSize="xs">{business.rating} ⭐</Text>
                  <Text fontSize="xs" ml={1}>
                    {business.userRatingCount} reviews
                  </Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>
        </Skeleton>
      </div>
    </>
  );
}

export default Business;
