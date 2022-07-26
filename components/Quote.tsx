import { Flex, Box, Spacer, Text, Icon, HStack } from "@chakra-ui/react";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { RiShareFill } from "react-icons/ri";

const Quote = () => {
  return (
    <Flex
      borderRadius='2xl'
      p={5}
      bg='white'
      justifyContent='center'
      alignItems='center'
      mb={6}
    >
      <Text fontWeight='thin' fontSize='sm' color='texts.800'>
        There are two types of people: ones who tell their money where to go and
        ones who wonder where it went. <b color='#333333'>- Dave Ramsey</b>
      </Text>
      <Spacer />
      <HStack>
        <FaHeart color='9898ad' />
        <RiShareFill color='9898ad' />
      </HStack>
    </Flex>
  );
};

export default Quote;
