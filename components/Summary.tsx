import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Spacer,
  HStack,
  Circle,
  Button,
  StackDivider,
  VStack,
  Square,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";

const Summary = () => {
  const router = useRouter();
  const [page, setPage] = useState(false);
  console.log(router.pathname);
  console.log(router.pathname === `/liabilities`);
  useEffect(() => {
    router.pathname === `/liabilities` && setPage(!page);
    // eslint-disable-next-line
  }, []);

  return (
    <Box w='100%' mb={6} borderRadius='3xl' overflow='hidden'>
      <Flex
        bg={page ? "#767687" : "blues.900"}
        alignItems='center'
        p={6}
        color='white'
      >
        <HStack>
          <Text mr='1px'>{page ? "Liabilities" : "Assets"}</Text>
          <HiQuestionMarkCircle color='#9898ad' />
        </HStack>
        <Spacer />
        <Text>June 12, 2021</Text>
      </Flex>
      <Flex bg='white' alignItems='center' p={7}>
        <Flex alignItems='center'>
          <Heading as='h2' size='lg' mr={2} color='texts.800'>
            ₱{!page ? "200,000.00" : "20,000.00"}
          </Heading>
          <Text color='signs.900'>^888%</Text>
        </Flex>
        {!page && (
          <>
            <Spacer />
            <Text color='texts.800' p={1} bg='bgs.900' borderRadius='3xl'>
              ₱8,888,888/m
            </Text>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Summary;
