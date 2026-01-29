import {
  Container,
  Stack,
  VStack,
  Text,
  HStack,
  Flex,
  Grid,
  Icon,
  Button,
  Box
} from "@chakra-ui/react";
import React from "react";
import { FaRupeeSign } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";

const Transactions = () => {
  const transaction = [
    {
      id: 1,
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: 2,
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: 3,
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <Container bgColor={"white"} width={"85%"} 
   padding={5}  borderRadius={15}
    >
      <Stack>
        <HStack>
          <Text fontSize={12} fontWeight={500} color={"#535D66"}>
            Recent Transactions
          </Text>
        </HStack>

        <Stack display={"flex"} justifyContent={"space-between"} gap={5} >
          {transaction.map((transaction) => {
            return (
                  <Stack key={transaction.id} display={"flex"} flexDirection={"row"} 
             justifyContent={"space-between"}
             >
                <HStack alignItems={"center"} gap={3}>
                  <Grid backgroundColor={"#F3F3F7"} padding={"15px"} borderRadius={"full"} placeItems={"center"}> 
                    <Icon as={transaction.icon} fontSize={13} />
                  </Grid>
                  <HStack>
                    <VStack alignItems={"flex-start"} justifyContent={"flex-start"} gap={0}>
                      <Text fontSize={14} fontWeight={500}>{transaction.text}</Text>
                      <Text fontSize={12} fontWeight={500} color={"#535D66"}>{transaction.timestamp}</Text>
                    </VStack>
                  </HStack>
                </HStack>
                <HStack fontWeight={500} fontSize={14}>{transaction.amount}</HStack>

              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <Stack padding={3.5}>
        <Button backgroundColor={"#EEEEF4"} borderRadius={"10px"} padding={"16px 10px 16px 10px"} >
            View All
        </Button>
      </Stack>
    </Container>
  );
};

export default Transactions;

