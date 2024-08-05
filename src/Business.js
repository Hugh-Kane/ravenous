import { Box, Card, CardBody, HStack, Heading, Image, Stack, Text, StackDivider } from '@chakra-ui/react'
import React from 'react'

function Business ({business}) {
    return (
        <>
        <div className="business">
        <Card>
            <CardBody>
                <Box
                        position="relative" 
                        width="200px" 
                        height="200px" 
                        overflow="hidden" 
                    >
                    <Image 
                        src={business.imageSrc}
                        objectFit='cover'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                />
                </Box>
            <Heading size='md'>{business.name}</Heading>
            <HStack divider={<StackDivider borderColor='gray.200' />} mt='6' spacing='2'>
                <Box>
                    <Text fontSize='xs'>{business.address}</Text>
                    <Text fontSize='xs'>{business.city}</Text>
                    <Text fontSize='xs'>{business.state}</Text>
                    <Text fontSize='xs'>{business.zipcode}</Text>
                </Box>
                <Box>
                    <Text fontSize='xs'>{business.category}</Text>
                    <Text fontSize='xs'>{business.rating} ⭐</Text>
                    <Text fontSize='xs'>{business.reviewCount} reviews</Text>
                </Box>
            </HStack>
            </CardBody>
        </Card>
        </div>
        </>
    )
}

export default Business