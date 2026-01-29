import { Container, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'

const InfoCard = ({text , tag}) => {
  
  return (
    <Container
  >
        <Stack >
            <Stack>
            <Tag.Root 
            backgroundColor={"#5F00D9"} width={"fit-content"} 
            color={'white'} padding={1} borderRadius={20}>
        <Tag.Label>{tag}</Tag.Label>
      </Tag.Root>
            </Stack>
            <Stack>

            <Text fontWeight={500}>
            {text}
            </Text>
            </Stack>
        </Stack>
    </Container>
  )
}

export default InfoCard

