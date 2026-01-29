import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
    
  return (
    <Flex w="100%" h="100vh" bg="white">
      <Box>
        <Sidebar  />
      </Box>

      <Box flex="1" display="flex" flexDirection="column" bg="#F3F3F7">
        <Navbar/>
        <Box flex="1" overflow="auto">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;

