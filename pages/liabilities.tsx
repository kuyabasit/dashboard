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
import React from "react";
import Quote from "../components/Quote";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { FaFilter } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import Portfolio from "../components/PortfolioItem";
import Summary from "../components/Summary";
import RightPanel from "../components/RightPanel";

const liabilities = [
  {
    id: 1,
    logoType: "realesttate-icon",
    company: "Eastwest Bank",
    alType: "Personal Loan",
    amount: "35,000.00",
  },
  {
    id: 2,
    logoType: "realesttate-icon",
    company: "BF Resort Village",
    alType: "Family Home Mortgage",
    amount: "7,500,000.00",
  },
  {
    id: 3,
    logoType: "consumer-debt",
    company: "BPI Amore Visa",
    alType: "Credit Card Debt",
    amount: "10,000.00",
  },
];

const Assets = () => {
  return (
    <Flex direction='column'>
      <Quote />
      <Grid h='100%' flexGrow={1} templateColumns='repeat(2, 1fr)' gap={6}>
        <Box>
          <Summary />
          <Box bg='white' p={6} borderRadius='3xl'>
            <Flex alignItems='center' mb={6}>
              <Text>Your Liabilities</Text>
              <Spacer />
              <HStack>
                <Circle size='40px' bg='bgs.900' color='texts.900'>
                  <FaFilter />
                </Circle>
                <Button
                  leftIcon={<IoMdAdd />}
                  bg='#f1863e'
                  variant='solid'
                  borderRadius='3xl'
                  color='white'
                >
                  Add
                </Button>
              </HStack>
            </Flex>
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={6}
              align='stretch'
            >
              {liabilities.map((portfolio) => (
                <Portfolio key={portfolio.id} portfolio={portfolio} />
              ))}
            </VStack>
          </Box>
        </Box>
        <RightPanel />
      </Grid>
    </Flex>
  );
};

export default Assets;
