import React from 'react';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
const Popup = () => {
 
  return (
    <Flex flexDir="column" py="1rem" w="95%" m="0 auto" bg="white">
      <Flex w="95%" m="0 auto" justify="space-between" flexDir="column">
      {/* Insert confetti emoji below */}
        <Heading fontSize="1.2rem" mb="1rem" size="lg" color="gray.700">
          🎉 Congrats! Your extension is working! 🎉
        </Heading>
        <Text>It is powered by <Link href="chakraui.com">ChakraUI</Link> and <Link href="reactorg.com">React</Link></Text>
      </Flex>
    </Flex>
  );
};

export default Popup;
