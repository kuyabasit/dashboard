import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const SideNav = () => {
  return (
    <Flex
      as='aside'
      pos='absolute'
      left={0}
      top={0}
      bottom={0}
      w='15vw'
      h='100vh'
      p='2rem'
      bgColor='#F2F4F9'
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <Box h='100%'>
        <Box p={2} mb={4}>
          <Image src='/bmw-logo.svg' alt='bmw-logo' width={170} height={60} />
        </Box>

        <VStack as='nav'>
          <Link color='texts.800' href='/assets'>
            <a>Assets</a>
          </Link>
          <Link href='/liabilities'>
            <a>Liabilities</a>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SideNav;
