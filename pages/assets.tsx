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

const assets = [
  {
    id: 1,
    logoType: "real-estate",
    company: "Paragon Place",
    alType: "Condominium",
    amount: "9,500,000.00",
    monthly: "50,000.00/m",
  },
  {
    id: 2,
    logoType: "real-estate",
    company: "BF Resort Village",
    alType: "House & Lot",
    amount: "9,500,000.00",
    monthly: "25,000.00/m",
  },
  {
    id: 3,
    logoType: "stocks",
    company: "San Miguel Corporation",
    alType: "Stocks",
    amount: "50,000.00",
  },
  {
    id: 4,
    logoType: "fund",
    company: "Pag-Ibig MP2",
    alType: "Fund",
    amount: "20,000.00",
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
              <Text>Your Assets</Text>
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
              {assets.map((portfolio) => (
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
