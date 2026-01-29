import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineDashboard } from "react-icons/md";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Sidebar = ({inverted}) => {

    const sidebar = [
        {
          text: "Dashboard",
          link : "/",
          icon: <MdOutlineDashboard size={"20px"} />,
          key: "Dashboard",
        },
        {
          text: "Transaction",
          link : "/transaction",
          icon: <TbArrowsDoubleSwNe size={"20px"} />,
          key: "Transaction",
        },
      ];
      return (
            <VStack  width={"35vh"}background={"white"}height={"100vh"}
            boxShadow={"lg"}
              paddingTop={"30px"} display={"flex"} justifyContent={"space-between"}
              >
                <div>
    
              <Heading color={"purple.600"} fontWeight={700} fontSize={21}>
                @DOSOMECODING
              </Heading>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignContent: "flex-start",
                  width: "-webkit-fill-available",
                  paddingTop: "10px",
                }}
              >
                {sidebar.map((sidebar) => (
                 <NavLink to={sidebar.link}
                      key={sidebar.key}
                      style={({ isActive }) => ({
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        paddingLeft: "25px",
                        fontWeight: "500",
                        fontSize: "15px",
                        border: "1px solid white",
                        borderRadius: "8px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        cursor: "pointer",
                        background: isActive ? "#F3F3F7" : "transparent",
                        
                      })}
                    >
                      
                      {sidebar.icon}
                      {sidebar.text}
                      </NavLink>
                    ))}
              </div>
                  </div>
    
              <div>
                <HStack
                  // alignItems={"flex-start"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  padding={"30px"}
                  alignItems={"center"}
                  >
                  <BiSupport />
                  <NavLink to= "/support" >
                  <h1>Support</h1>
                  </NavLink>
                </HStack>
              </div>
            </VStack>
        
           );
    };

export default Sidebar

