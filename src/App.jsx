import { useState } from 'react'
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react"
import { Text, Container, VStack, Box, SimpleGrid, Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider isResettingCSS={false} >
      <Box
        height="100vh"
        backgroundImage="url('/images/background_sky.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Text color="white" fontSize="2xl" p={4}>
        </Text>
        <VStack mt='24px'>
          <Heading fontSize='xl' fontWeight='normal' color='white' fontFamily='Playfair Display, sans-serif'>PHILADELPHIA</Heading>
          <Text fontWeight='hairline' fontSize='8xl' color='white' mt='-8'>61°</Text>
          <Text fontWeight='normal' fontSize='xl' color='white' mt='-8'>L: 58° H: 64°</Text>
          
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(100px, 1fr))'>
            <Card>
              <CardHeader>
                <Heading size='sm'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='sm'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='sm'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
          
          <Container maxW='md' bg='blue.600' color='white' centerContent>
            "md" Container
          </Container>
          <Container maxW='550px' bg='purple.600' color='white'>
            "550px" Container
          </Container>
          <Container maxW='container.sm' bg='green.400' color='#262626'>
            "container.sm" Container
          </Container>

          <Container maxW='2xl' bg='blue.600' centerContent>
            <Box padding='4' bg='white' color='black' maxW='md'>
              There are many benefits to a joint design and development system. Not only
              does it bring benefits to the design team, but it also brings benefits to
              engineering teams. It makes sure that our experiences have a consistent look
              and feel, not just in our design specs, but in production.
            </Box>
          </Container>
        </VStack>
        <Card>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  )
}

export default App
