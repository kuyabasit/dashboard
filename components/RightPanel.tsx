import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaChartPie } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";

const monthlyStats = [
  {
    month: "Jun 2022",
    current: {
      balance: "888,880.00",
      net: "888",
    },
    monthly: {
      balance: "888,880.00",
      net: "888",
    },
  },
  {
    month: "May 2022",
    current: {
      balance: "888,880.00",
      net: "888",
    },
    monthly: {
      balance: "888,880.00",
      net: "888",
    },
  },
  {
    month: "Apr 2022",
    current: {
      balance: "888,880.00",
      net: "888",
    },
    monthly: {
      balance: "888,880.00",
      net: "888",
    },
  },
];

const RightPanel = () => {
  return (
    <Tabs
      size='md'
      isFitted
      variant='solid-rounded'
      colorScheme='white'
      defaultIndex={1}
    >
      <TabList p={1} bg='bgs.900' borderRadius='full' mb={3}>
        <Tab p={4} _selected={{ color: "oranges.900", bg: "white" }}>
          <HStack>
            <FaChartPie />
            <Text>Charts</Text>
          </HStack>
        </Tab>
        <Tab p={4} _selected={{ color: "oranges.900", bg: "white" }}>
          <HStack>
            <VscThreeBars />
            <Text>Monthly Overview</Text>
          </HStack>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Coming soon...</p>
        </TabPanel>
        <TabPanel bg='white' borderRadius='3xl' color='texts.800' p={6}>
          {monthlyStats.map((mon) => {
            return (
              <Box key={mon.month}>
                <Heading size='md' mb={6}>
                  {mon.month}
                </Heading>
                <Flex mb='14'>
                  <Box>
                    <Text mb={4}>Current Balance</Text>
                    <Text>Monthly Balance</Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Flex alignItems='center' mb={4}>
                      <Heading as='h2' size='md' mr={2} color='texts.800'>
                        ₱{mon.current.balance}
                      </Heading>
                      <Text color='signs.900'>^{mon.current.net}%</Text>
                    </Flex>
                    <Flex alignItems='center'>
                      <Heading as='h2' size='md' mr={2} color='texts.800'>
                        ₱{mon.monthly.balance}
                      </Heading>
                      <Text color='signs.900'>^{mon.monthly.net}%</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RightPanel;
