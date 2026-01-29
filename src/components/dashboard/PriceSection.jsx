import { Container, HStack, Text, VStack,Icon,Image, Button,Tabs, Flex  } from "@chakra-ui/react";
import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import Graph from "../../assets/images/Graph.svg"
import { FaMinusCircle } from "react-icons/fa";

import { FaPlusCircle } from "react-icons/fa";

const timestamp = ["7.55AM","8.55AM","9.55AM","10.55AM","11.55AM"]

const PriceSection = () => {
  return (
    <Container
      marginLeft={"80px"}
      width={"fit-content"}
      backgroundColor={"white"}
      padding={"20px"}
      borderRadius={"15px"}
    
    >
      <HStack justifyContent={"space-between"}>
        <VStack alignItems={"flex-start"}>

        <HStack >
          <Text fontSize={12} fontWeight={500}
          color={"#535D66"} 
          >Current Price</Text>
        </HStack>
        <HStack>
          <HStack>
            <Text fontSize={19} fontWeight={600}>₹26,670.25</Text>
          </HStack>
          <HStack color={"#059669"} gap={0}>
            <Icon as={ImArrowUpRight2} fontSize={10} />
            <Text fontSize={10} fontWeight={500}>0.04%</Text>
          </HStack>
        </HStack>
        </VStack>
        <HStack>
            <Button
             backgroundColor={"#5F00D9"} color={"white"}
             padding={"10px 16px 10px 16px"} borderRadius={"10px"}
            >
             <Icon as={FaPlusCircle}  />
                Buy
            </Button>
            <Button
             backgroundColor={"#5F00D9"} color={"white"}
             padding={"10px 16px 10px 16px"} borderRadius={"10px"}
            >
                <Icon as={FaMinusCircle} />
                Sell
            </Button>
        </HStack>
      </HStack>
      <HStack justifyContent={"flex-end"}>

        <HStack width={"fit-content"} >
        <Tabs.Root variant="enclosed" maxW="md" fitted defaultValue={"tab-1"}  justifyContent={"flex-end"} backgroundColor="#FFFFFF"> 
      <Tabs.List  backgroundColor="#F3F3F7"  _selected={{backgroundColor:"white"} }>
        <Tabs.Trigger value="tab-1">1H</Tabs.Trigger>
        <Tabs.Trigger value="tab-2">1D</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">1W</Tabs.Trigger>
        <Tabs.Trigger value="tab-4">1M</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
        </HStack>
      </HStack>
        <HStack>
        <Image src ={Graph} margin={"30px 0px 10px 0px"}/>

        </HStack>
        <HStack justifyContent={"space-between"} fontSize={12} color={"#797E82"} fontWeight={400}>
            {timestamp.map((timestamp)=>{
                return(

                    <Text key={timestamp}>
                    {timestamp}
               </Text>
            )
            })}
           
        </HStack>

    </Container>
  );
};

export default PriceSection;

