import { Button, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { IoMdDownload } from "react-icons/io";
import { TbArrowBarToUp } from "react-icons/tb";


const PortfolioSection = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      display={"flex"}
      width={"85%"}
      backgroundColor={"white"}
      padding={5}
      borderRadius={15}
    >
      <HStack gap={10}>
        <VStack alignItems={"flex-start"}>
          <Text fontSize={12} fontWeight={500} color={"#535D66"} >
            Total Portfolio Value
          </Text>
          <Text fontSize={19} fontWeight={600}>
            ₹ 112,312.24
          </Text>
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Text fontSize={12} fontWeight={500} color={"#535D66"} >
            Wallet Balances
          </Text>
          <HStack gap={7}>
            <HStack>

            <Text fontSize={19} fontWeight={600}>
              22.39401000
            </Text>
            <span
              style={{
                fontSize: "9px",
                fontWeight: "600",
                backgroundColor: "#F3F3F7",
                borderRadius: "4px",
                padding: "2px 4px 2px 4px",
                color: "#797E82",
              }}
            >
              BTC
            </span>
                </HStack>
              <HStack>

            <Text fontSize={19} fontWeight={600}>
              ₹ 1,300.00
            </Text>
            <span
              style={{
                fontSize: "9px",
                fontWeight: "600",
                backgroundColor: "#F3F3F7",
                borderRadius: "4px",
                padding: "2px 4px 2px 4px",
                color: "#797E82",
              }}
            >
              PKR
            </span>
              </HStack>
          </HStack>
        </VStack>
      </HStack>

      <HStack>
        <Button
        backgroundColor={"#5F00D9"} color={"white"}
        padding={"10px 16px 10px 16px"} borderRadius={"10px"}
      
        >
             <Icon as={IoMdDownload} />
            Deposit
            </Button>

        <Button
        backgroundColor={"#5F00D9"} color={"white"}
        padding={"10px 16px 10px 16px"} borderRadius={"10px"}
       
        >
            <Icon as={TbArrowBarToUp} />
        Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;

