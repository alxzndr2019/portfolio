import React from 'react';
import {
  Box,
  Text,
  Flex,
  Spacer
  
} from '@chakra-ui/react';

function Header(){
  return (
   <Box w={{base:"100%", md:"60%", lg:"70%"}}  mx="auto" mb={5}>
        <Flex>
  
 <Box  >
     <Text textStyle ="logo" p={5}>Alexander</Text>
 </Box>
    <Spacer />
    <Box  h="10" >
        <Flex>
            <Box  p={2}>
                 <Text textStyle ="navitem" p={5} >About</Text>
            </Box>
           
            <Spacer/>
            <Box  p={2}>
                <Text textStyle ="navitem" p={5} >Skills</Text>
            </Box>
            <Spacer/>
            <Box as="a"  p={2}>
                <Text textStyle ="navitem" p={5} >Projects</Text>
            </Box>
        </Flex>
    </Box>
  </Flex>
   </Box>
  );
}

export default Header;
