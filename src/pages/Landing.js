import React from 'react';
import {
  Box,
  Text,
  SimpleGrid,
  Button,
  Center,
  HStack,
  Image,
  Progress,
  VStack,
  Heading,
  Divider,
} from '@chakra-ui/react';
import image1 from './image.svg';
import instagram from './insta.png';
import github from './github.png';
import linkedIn from './linkedIn.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import frontend from './frontend.svg';
import backend from './backend.svg';
import prodesign from './prodesign.svg';
import vote from './vote.png';
import pharm from './saelpharm.png';

function Landing() {
  return (
    <Box w={{ base: '90%', md: '60%', lg: '70%' }} mx="auto">
      <SimpleGrid
        pt={{ base: 1, md: 10, lg: 10 }}
        minChildWidth="160px"
        spacing={10}
      >
        <Box>
          <Text textStyle="herotext" textAlign="left" pt="30%">
            Hi👋🏾, I'm Alex
          </Text>
          <Text textStyle="herotextsub" textAlign="left" pt={3}>
            I am a <b>Software Engineer</b> primarily focused on{' '}
            <b>Web Development</b>. Although I occasionally dabble in{' '}
            <b>Mobile development</b> as well, My main goal is to build scalable
            and high-quality products.
            <Box pt={6}>
              <HStack spacing="50px">
                <Box as="a" href="https://www.github.com/alxzndr2019">
                  <Image src={github} />
                </Box>
                <Box
                  as="a"
                  href="https://www.linkedin.com/in/ohioze-omiunu-2b2968169/"
                >
                  <Image src={linkedIn} />
                </Box>
                <Box as="a" href="https://www.instagram.com/alx.zndr/">
                  <Image src={instagram} />
                </Box>
                <Box as="a" href="https://www.twitter.com/its_alxjnr/">
                  <Image src={twitter} />
                </Box>
                <Box as="a" href="https://web.facebook.com/oomiunu">
                  <Image src={facebook} />
                </Box>
              </HStack>
            </Box>
          </Text>
        </Box>
        <Box>
          <Image h="90%" pt="30%" src={image1} alt="" />
        </Box>
      </SimpleGrid>

      <Center pt={10}>
        <Text textStyle="wwd" pb="10">
          What I do😤
        </Text>
      </Center>

      <Box w="100%" bg="fade.100" boxShadow="lg" borderRadius={20}>
        <SimpleGrid minChildWidth="160px" spacing={10} p={20}>
          <Box p={{ base: 2, md: 10, lg: 10 }}>
            <Image src={prodesign} />

            <Text
              textStyle="herotextsub"
              textAlign={{ base: 'center', md: 'left', lg: 'left' }}
              pt={3}
            >
              <b>Product Design</b>
              <Box pt={6}>
                <p>
                  I design efficient and user-friendly interfaces and
                  experiences for products, optimizing every element of the
                  design to enhance user experience, boost productivity, and
                  align with the product's goals.
                </p>
              </Box>
            </Text>
          </Box>
          <Box pt={12}>
            <Image src={frontend} />

            <Text
              textStyle="herotextsub"
              textAlign={{ base: 'center', md: 'left', lg: 'left' }}
              pt={3}
            >
              <b>Frontend Development</b>
              <Box pt={6}>
                <p>
                  I create exceptional UIs for your product using React.js,
                  leveraging the latest developments and vast ecosystem of
                  libraries to develop responsive, feature-rich, and efficient
                  components. My expertise in React's virtual DOM enhances UI
                  performance and creates a seamless and intuitive user
                  experience that elevates your product to the next level
                </p>
              </Box>
            </Text>
          </Box>
          <Box>
            <Image src={backend} />

            <Text
              textStyle="herotextsub"
              textAlign={{ base: 'center', md: 'left', lg: 'left' }}
              pt={3}
            >
              <b>Backend Development</b>
              <Box pt={6}>
                <p>
                  I use Node.js, Express, and MongoDB to create a secure and
                  scalable backend for your product. I prioritize security by
                  implementing industry-standard practices like input
                  validation, authentication, and encryption. With my expertise
                  in backend development and these technologies, I can build an
                  efficient and tailored backend to suit your needs.
                </p>
              </Box>
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box>
        <Center p={10}>
          <Text textStyle="wwd">Skills</Text>
        </Center>
        <SimpleGrid minChildWidth="160px" spacing={10}>
          <Box>
            <Text textAlign="left">
              <b>React Js</b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={95} />
            <Box h={10} />
            <Text textAlign="left">
              <b>Next.js</b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={95} />
            <Box h={10} />
            <Text textAlign="left">
              <b>SCSS</b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={95} />
            <Box h={10} />
            <Text textAlign="left">
              <b>Tailwind</b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={95} />
            <Box h={10} />
            <Text textAlign="left">
              <b>React Query</b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={95} />
            <Box h={10} />
            <Text textAlign="left">
              <b>Redux Toolkit</b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={95} />
            <Box h={10} />
            <Text textAlign="left">
              <b>TypeScript</b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={95} />
            <Box h={10} />
            <Text textAlign="left">
              <b>ChakraUI </b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={100} />
            <Box h={10} />
            <Text textAlign="left">
              <b>Express</b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={100} />
            <Box h={10} />
            <Text textAlign="left">
              <b>Node </b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={100} />
            <Box h={10} />
            <Text textAlign="left">
              <b>UI/UX </b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={70} />
            <Box h={10} />
            <Text textAlign="left">
              <b>Git </b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={100} />
            <Box h={10} />
            <Text textAlign="left">
              <b>MongoDB </b>
            </Text>
            <Progress colorScheme="purple" size="lg" value={80} />
          </Box>
        </SimpleGrid>
      </Box>
      {/* <Box pb={2}>
        <Center p={10}>
          <Text textStyle="wwd">Projects</Text>
        </Center>
      </Box>
      <Box pb={2}>
        <Center p={10}>
          <Text textStyle="wwd">Projects</Text>
        </Center>
      </Box> */}

      <Box>
        <Center>
          <Text fontSize="sm">POWERED BY ALXZNDR</Text>
        </Center>
      </Box>
    </Box>
  );
}

export default Landing;
