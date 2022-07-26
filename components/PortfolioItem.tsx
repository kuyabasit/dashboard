import React from "react";
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
import Image from "next/image";

interface Portfolio {
  id: number;
  logoType: string;
  company: string;
  alType: string;
  amount: string;
  monthly?: string;
}

interface AppProps {
  portfolio: Portfolio;
}

const PortfolioItem = ({ portfolio }: AppProps) => {
  return (
    <>
      <Flex key={portfolio.id} alignItems='center'>
        <HStack alignItems='center'>
          <Image
            src={`/${portfolio.logoType}.svg`}
            alt='real estate'
            width={60}
            height={60}
          />
          <Box px={2}>
            <Text color='texts.800' borderRadius='3xl'>
              {portfolio.company}
            </Text>
            <Heading as='h2' size='md' color='texts.800'>
              ₱{portfolio.amount}
            </Heading>
          </Box>
        </HStack>
        <Spacer />
        <Box>
          <Text color='texts.800' p={1} borderRadius='3xl' textAlign='right'>
            {portfolio.alType}
          </Text>
          {portfolio.monthly && (
            <Text color='texts.800' p={1} bg='bgs.900' borderRadius='3xl'>
              ₱{portfolio.monthly}
            </Text>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default PortfolioItem;
