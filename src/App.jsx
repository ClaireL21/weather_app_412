import { useState } from 'react'
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider isResettingCSS={false} >
    <Card>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
  </ChakraProvider>
  )
}

export default App
