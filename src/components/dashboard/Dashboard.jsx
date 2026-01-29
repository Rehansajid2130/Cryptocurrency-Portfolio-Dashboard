import React from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

import PortfolioSection from "./PortfolioSection";
import PriceSection from "./PriceSection";
import Transactions from "./Transactions";
import InfoCard from "./InfoCard";

import img1 from "../../assets/images/Shapes1.png";
import img2 from "../../assets/images/Shapes2.svg";

function DashboardContent( ) {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={3}
      py={3}
    >
      <GridItem colSpan={2} display="flex" justifyContent="center">
        <PortfolioSection />
      </GridItem>

      <GridItem>
        <PriceSection />
      </GridItem>

      <GridItem>
        <Transactions />
      </GridItem>
    <Box w={"100%"} display={"flex"} justifyContent={"flex-end"}> 

      <GridItem bg="white" p="20px" w={"85%"} borderRadius="15px" bgImage={`url(${img1})`}>
        <InfoCard
          imgurl={img1}
          text="Learn more about Loans – Keep your Bitcoin, access it's value without selling it"
          tag="loans"
         
        />
      </GridItem>
    </Box >
    <Box display={"flex"} justifyContent={"flex-start"} >

      <GridItem bg="white" p="20px" w={"85%"}borderRadius="15px" bgImage={`url(${img2})`} bgColor={"#5F00D9"}>
        <InfoCard
          imgurl={img2}
          text="Learn more about our real estate, mortgage, and corporate account services"
          tag="Contact"
        />
      </GridItem>
          </Box>
    </Grid>
  );
}

export default function Dashboard() {
  return (
    <Flex w="100%" >
     
        <Box >
          <DashboardContent />
        </Box>
     
    </Flex>
  );
}

