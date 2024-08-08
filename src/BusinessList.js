import React from 'react'
import Business from './Business'
import { Box, SimpleGrid } from '@chakra-ui/react'

function BusinessList({businesses}){
    return ( 
    <Box className="business-list" maxWidth="1200px" margin="auto" bgColor='white' width='100%'>
        <SimpleGrid 
            spacing={4} 
            //templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} 
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            /*
                base: 1 column (mobile) 
                sm: 2 columns (small tablets) 
                md: 3 columns (large tablets/small desktops) 
                lg: 4 columns (large desktops)
            */
            justifyItems="center"
            p="4">
        {businesses.map((business,index) => <Business business={business} key={index} />)}
        </SimpleGrid>
    </Box>
    )
}

export default BusinessList