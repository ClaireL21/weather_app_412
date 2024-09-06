import { useState } from 'react'
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react"
import { Text, Container, VStack, Box } from '@chakra-ui/react'
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
          Welcome to the App
        </Text>
        <VStack mt='24px'>
          <Heading>Philadelphia</Heading>
          <Text fontSize='8xl' padding='1' mt='-10'>61°</Text>
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
