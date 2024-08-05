import React from 'react'
import Business from './Business'
import { Box, SimpleGrid } from '@chakra-ui/react'

function BusinessList({businesses}){
    return ( 
    <Box className="business-list" maxWidth="1200px" margin="auto" bgColor='white' width='100%'>
        <SimpleGrid spacing={4} templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} p="2%">
        {businesses.map((business,index) => <Business business={business} key={index} />)}
        </SimpleGrid>
    </Box>
    )
}

export default BusinessList