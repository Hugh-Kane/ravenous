import { Button, Divider, HStack, Stack, Box } from '@chakra-ui/react'
import React, {useState} from 'react'

function Filter() {
    const [filter,setFilter] = useState("bestMatch")

    function handleClick (event) {
        const {name} = event.target
        setFilter(name)
        alert(JSON.stringify(filter,"",2))

    }
    return (
        <Stack bgColor='white'  height="100px" alignContent={"center"} justifyContent={"center"} align='center'>
            <Box width='auto'>
            <HStack>
                <Button
                    bgColor={'white'}
                    name="bestMatch"
                    onClick={handleClick}
                    >
                    Best Match
                </Button>
                <Button
                    bgColor={'white'}
                    name="highyRated"
                    onClick={handleClick}
                    >
                    Highly Rated
                </Button>
                    
                <Button
                    bgColor={'white'}
                    name="mostViewed"
                    onClick={handleClick}
                    >
                    Most Viewed
                </Button>
            
            </HStack>
            <Divider/>
            </Box>
            
        </Stack>
    )
}

export default Filter