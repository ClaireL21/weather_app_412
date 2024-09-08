import { useState } from 'react'
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { Heading, Image } from "@chakra-ui/react"
import { Tag, TagLabel, HStack, FormControl, Flex, Stack } from '@chakra-ui/react'
import { Text, Container, VStack, Box, SimpleGrid, Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { TimeIcon, CalendarIcon } from '@chakra-ui/icons'
import { FaWind, FaCloud } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

import './App.css'

function App() {
//  const [count, setCount] = useState(0)

  return (
    
    <ChakraProvider isResettingCSS={false} >

    <Flex
      justifyContent="center"  // Center horizontally
      alignItems="center"      // Center vertically
      height="100vh"           // Full viewport height to center vertically
      bg="blue.100"            // Background color for the entire screen
    >
      <Box
        width="375px"      // Typical width of a phone
        height="667px"     // Typical height of a phone (e.g., iPhone 6/7/8)
        borderRadius="xl"  // Rounded corners to simulate a phone
        border="2px solid" // Border to outline the phone
        borderColor="gray.300"
        overflow="hidden"  // Ensure content doesn't overflow the container
        boxShadow="lg"     // Add shadow to make it pop
        bg="white"         // Background color for the phone container
        backgroundImage="url('/images/background_sky.png')"  // Replace with your image path
        backgroundSize="cover"  // Ensures the image covers the entire box
        backgroundPosition="center"  // Centers the image within the box
      >
        {/* Your app content goes here */}
        <VStack
          w="full"
          h="full"
          overflowY="auto"  // Enables vertical scrolling for the content
          spacing={4}
          px={4}  // Padding inside the VStack for better spacing
        >
          <Container mt='10px' as='section' maxWidth='4xl' justify='center'>
            <HStack spacing={2} alignItems="center">
              <Container>
                <Heading mt='50px' fontSize='xl' fontWeight='normal' color='white' fontFamily='Playfair Display, sans-serif'>
                  PHILADELPHIA
                </Heading>
                <Text fontWeight='hairline' fontSize='8xl' color='white' mt='-8'>
                  61°
                </Text>
                <Text fontWeight='normal' fontSize='xl' color='white' mt='-8'>
                  L: 58° H: 64°
                </Text>
              </Container>
              <Container mt='50px'>
                <Icon as={FaCloud} w={110} h={110} color='white' />
                <Text mt='-12px' fontWeight='normal' fontSize='lg' color='white'>
                  Partly Cloudy
                </Text>
              </Container>
            </HStack>
          </Container>

          {/* Hourly Forecast */}
          <Container mt='10px' as='section' maxWidth='4xl' justify='center'>
            <HStack spacing={2} alignItems="center">
              <TimeIcon w={5} h={5} color='white' />
              <Heading color='white' fontWeight='normal' fontSize='xl' fontFamily='Playfair Display, sans-serif'>
                Hourly Forecast
              </Heading>
            </HStack>
          </Container>

          {/* Hourly Forecast Horizontal Scroll */}
          <Container mt='10px' height='140px' as='section' maxWidth='4xl' justify='center'>
            <Box
              width="full"  // Full width of the container
              overflowX="auto"  // Enable horizontal scrolling
              height="140px"
              mb={4}
            >
              <HStack
                spacing={4}  // Space between each card
                px={2}  // Padding inside the HStack
                minWidth="max-content"
              >
                {/* Example Card */}
                <Card width='90px' height='140px' borderRadius='xl' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <Flex justifyContent='center'>
                    <CardHeader>
                      <Heading size='sm'>6 pm</Heading>
                    </CardHeader>
                  </Flex>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                      <Image src='/images/sun_icon.png' width='50px'></Image>
                    </Flex>
                    <Flex justifyContent='center'>
                      <Text>60°</Text>
                    </Flex>
                  </CardBody>
                </Card>

                {/* Repeat similar cards */}
                <Card width='90px' height='140px' borderRadius='xl' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <Flex justifyContent='center'>
                    <CardHeader>
                      <Heading size='sm'>7 pm</Heading>
                    </CardHeader>
                  </Flex>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                      <Image src='/images/sun_icon.png' width='50px'></Image>
                    </Flex>
                    <Flex justifyContent='center'>
                      <Text>59°</Text>
                    </Flex>
                  </CardBody>
                </Card>

                <Card width='90px' height='140px' borderRadius='xl' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <Flex justifyContent='center'>
                    <CardHeader>
                      <Heading size='sm'>8 pm</Heading>
                    </CardHeader>
                  </Flex>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                      <Image src='/images/white_cloud_img.png' width='50px'></Image>
                    </Flex>
                    <Flex justifyContent='center'>
                      <Text>58°</Text>
                    </Flex>
                  </CardBody>
                </Card>

                <Card width='90px' height='140px' borderRadius='xl' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <Flex justifyContent='center'>
                    <CardHeader>
                      <Heading size='sm'>9 pm</Heading>
                    </CardHeader>
                  </Flex>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                      <Image src='/images/white_cloud_img.png' width='50px'></Image>
                    </Flex>
                    <Flex justifyContent='center'>
                      <Text>55°</Text>
                    </Flex>
                  </CardBody>
                </Card>

                <Card width='90px' height='140px' borderRadius='xl' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <Flex justifyContent='center'>
                    <CardHeader>
                      <Heading size='sm'>10 pm</Heading>
                    </CardHeader>
                  </Flex>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                      <Image src='/images/white_cloud_img.png' width='50px'></Image>
                    </Flex>
                    <Flex justifyContent='center'>
                      <Text>53°</Text>
                    </Flex>
                  </CardBody>
                </Card>
                <Card width='90px' height='140px' borderRadius='xl' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <Flex justifyContent='center'>
                    <CardHeader>
                      <Heading size='sm'>11 pm</Heading>
                    </CardHeader>
                  </Flex>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                      <Image src='/images/white_cloud_img.png' width='50px'></Image>
                    </Flex>
                    <Flex justifyContent='center'>
                      <Text>55°</Text>
                    </Flex>
                  </CardBody>
                </Card>
                <Card width='90px' height='140px' borderRadius='xl' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <Flex justifyContent='center'>
                    <CardHeader>
                      <Heading size='sm'>12 am</Heading>
                    </CardHeader>
                  </Flex>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                      <Image src='/images/white_cloud_img.png' width='50px'></Image>
                    </Flex>
                    <Flex justifyContent='center'>
                      <Text>55°</Text>
                    </Flex>
                  </CardBody>
                </Card>
              </HStack>
            </Box>
          </Container>
          
          {/* 10 Day  Forecast */}
          <Container mt='10px' as='section' maxWidth='4xl' justify='center'>
            <HStack spacing={2} alignItems="center">
              <CalendarIcon w={5} h={5} color='white' />
              <Heading color='white' fontWeight='normal' fontSize='xl' fontFamily='Playfair Display, sans-serif'>
                10 Day Forecast
              </Heading>
            </HStack>
          </Container>

          {/* 10 Day Forecast Horizontal Scroll */}
          <Container mt='10px' height='140px' as='section' maxWidth='4xl' justify='center'>
            <Box
              width="full"  // Full width of the container
              overflowX="auto"  // Enable horizontal scrolling
              height="140px"
            >
              <HStack
                spacing={4}  // Space between each card
                px={2}  // Padding inside the HStack
              >
                 <Card width='122px' height='140px' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <CardHeader>
                    <Heading size='md'>Today</Heading>
                  </CardHeader>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                    <Image src='/images/sun_icon.png' width='50px'></Image>
                    </Flex>
                    <Text>Sunny 60°</Text>
                  </CardBody>
                </Card>
                <Card width='122px' height='140px' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <CardHeader>
                    <Heading size='md'>Fri 06</Heading>
                  </CardHeader>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                    <Image src='/images/sun_icon.png' width='50px'></Image>
                    </Flex>
                    <Text>Sunny 65°</Text>
                  </CardBody>
                </Card>
                <Card width='122px' height='140px' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <CardHeader>
                    <Heading size='md'>Sat 07</Heading>
                  </CardHeader>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                    <Image src='/images/white_cloud_img.png' width='50px'></Image>
                    </Flex>
                    <Text>Cloudy 62°</Text>
                  </CardBody>
                </Card>
                <Card width='122px' height='140px' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <CardHeader>
                    <Heading size='md'>Sun 08</Heading>
                  </CardHeader>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                    <Image src='/images/sun_icon.png' width='50px'></Image>
                    </Flex>
                    <Text>Sunny 64°</Text>
                  </CardBody>
                </Card>
                <Card width='122px' height='140px' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <CardHeader>
                    <Heading size='md'>Mon 09</Heading>
                  </CardHeader>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                    <Image src='/images/sun_icon.png' width='50px'></Image>
                    </Flex>
                    <Text>Sunny 60°</Text>
                  </CardBody>
                </Card>
                <Card width='122px' height='140px' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <CardHeader>
                    <Heading size='md'>Tues 10</Heading>
                  </CardHeader>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                    <Image src='/images/white_cloud_img.png' width='50px'></Image>
                    </Flex>
                    <Text>Cloudy 54°</Text>
                  </CardBody>
                </Card>
                <Card width='122px' height='140px' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <CardHeader>
                    <Heading size='md'>Wed 11</Heading>
                  </CardHeader>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                    <Image src='/images/white_cloud_img.png' width='50px'></Image>
                    </Flex>
                    <Text>Cloudy 54°</Text>
                  </CardBody>
                </Card>
                <Card width='122px' height='140px' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <CardHeader>
                    <Heading size='md'>Thu 12</Heading>
                  </CardHeader>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                    <Image src='/images/white_cloud_img.png' width='50px'></Image>
                    </Flex>
                    <Text>Cloudy 60°</Text>
                  </CardBody>
                </Card>
                <Card width='122px' height='140px' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <CardHeader>
                    <Heading size='md'>Fri 13</Heading>
                  </CardHeader>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                    <Image src='/images/sun_icon.png' width='50px'></Image>
                    </Flex>
                    <Text>Sunny 60°</Text>
                  </CardBody>
                </Card>
                <Card width='122px' height='140px' flexShrink='0' backgroundColor='whiteAlpha.800'>
                  <CardHeader>
                    <Heading size='md'>Sat 14</Heading>
                  </CardHeader>
                  <CardBody mt='-30px'>
                    <Flex justifyContent='center'>
                    <Image src='/images/sun_icon.png' width='50px'></Image>
                    </Flex>
                    <Text>Sunny 60°</Text>
                  </CardBody>
                </Card>
              </HStack>
            </Box>
          </Container>

          <Container mt='10px' as='section' maxWidth='4xl' justify='center'>
            <HStack spacing={2} alignItems="center">
              <Icon as={FaWind} w={5} h={5} color='white' />
              <Heading color='white' fontWeight='normal' fontSize='xl' fontFamily='Playfair Display, sans-serif'>
                Wind
              </Heading>
            </HStack>
          </Container>

          <Container as='section' maxWidth='4xl' justify='center'>
            <Box px={4} width='330px' height='150px'>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <Image
                  objectFit='cover'
                  maxW= '100px'
                  src='/images/Wind_map.jpg'
                  alt='Wind map'
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>8 MPH</Heading>

                    <Text py='2'>
                      Wind is blowing NorthWest 8 MPH, with 19 MPH gusts.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Box>
          </Container>

          <Container mt='10px' as='section' maxWidth='4xl' justify='center'>
            <HStack spacing={2} alignItems="center">
              <Icon as={BsStars} w={5} h={5} color='white' />
              <Heading color='white' fontWeight='normal' fontSize='xl' fontFamily='Playfair Display, sans-serif'>
                Air Quality
              </Heading>
            </HStack>
          </Container>

          <Container mb='100px' as='section' maxWidth='4xl' justify='center'>
            <Box px={4} width='330px' height='150px'>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <Image
                  objectFit='cover'
                  maxW= '100px'
                  src='/images/uv_index.jpg'
                  alt='Wind map'
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>15 Good</Heading>

                    <Text py='2'>
                      The air quality index is 15 right now, similar to yesterday's air quality at this time 
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Box>
          </Container>

        </VStack>
      </Box>
    </Flex>
    </ChakraProvider>
  );
}

export default App
