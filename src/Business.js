import {
  Box,
  Card,
  CardBody,
  HStack,
  VStack,
  Heading,
  Image,
  Text,
  Tooltip,
  StackDivider,
  Badge,
  Skeleton,
} from "@chakra-ui/react";
import React from "react";

function Business({ business, isLoading }) {
  const openNow = business.currentOpeningHours?.openNow ?? null;

  return (
    <Card
      //width="100%"
      //maxWidth="280px"
      width={{ base: "300px", sm: "280px" }}
      //height={{ base: "auto", sm: "400px" }}
      height="auto"
      //height="400px"
      //minHeight="400px"
      m={2}
      onClick={() => {
        window.open(business.googleMapsUri);
      }}
    >
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <VStack spacing={3} align="stretch">
          <HStack width="100%" justifyContent="space-between">
            <Skeleton isLoaded={!isLoading}>
              <Box>
                {openNow !== null && (
                  <Badge colorScheme={openNow ? "green" : "red"}>
                    {openNow ? "Open" : "Closed"}
                  </Badge>
                )}
              </Box>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <Box>
                <Badge variant="outline" colorScheme="yellow">
                  {business.priceLevel}
                </Badge>
              </Box>
            </Skeleton>
          </HStack>
          <Skeleton isLoaded={!isLoading}>
            <Tooltip
              label={business.displayName.text}
              aria-label={business.displayName.text}
              placement="top"
            >
              <Heading size="sm" textAlign="center" noOfLines={1}>
                {business.displayName.text}
              </Heading>
            </Tooltip>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Box
              position="relative"
              width="100%"
              paddingBottom="100%"
              overflow="hidden"
            >
              <Image
                src={business.photoUrl}
                alt={`Photo of ${business.displayName}`}
                objectFit="cover"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                borderRadius="lg"
              />
            </Box>
          </Skeleton>
        </VStack>
        <VStack spacing={2} align="stretch" mt={4}>
          <Skeleton isLoaded={!isLoading}>
            <Tooltip
              label={business.shortFormattedAddress}
              aria-label={business.shortFormattedAddress}
              placement="top"
            >
              <Text fontSize="xs" noOfLines={1}>
                {business.shortFormattedAddress}
              </Text>
            </Tooltip>
          </Skeleton>
          <HStack justifyContent="space-between">
            <Skeleton isLoaded={!isLoading}>
              <Badge>{business.types[0]}</Badge>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <HStack spacing={1}>
                <Text fontSize="xs">{business.rating} ⭐</Text>
                <Text fontSize="xs">({business.userRatingCount})</Text>
              </HStack>
            </Skeleton>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default Business;
