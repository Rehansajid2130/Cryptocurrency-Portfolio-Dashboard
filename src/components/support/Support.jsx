import { Box, Button, Checkbox, Container, Icon, Input,Text } from '@chakra-ui/react'
import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoChatbubble } from "react-icons/io5";
import img2 from "../../assets/images/Shapes2.svg"

const Support = () => {
  return (
    <Container w={'full'} display={'flex'} flexDirection={'column'} marginTop={4}
    gap={2}
    >
      <Box display={'flex'} >
      <Box  w={"40%"}  padding={8}>
        <Box >
          <Icon as={CiMail} color={"#5F00D9"} fontSize={30} />
        </Box>
        <Box fontSize={"32px"} fontWeight={500}>
          <h1 >Contact Us</h1>
        </Box>
        <Box fontSize={"14px"} color={"#535D66"}>
          <span>Have a question or just want to know more? Feel free to reach out to us.</span>
        </Box>
      </Box>
      <Box bg={'white'} padding={"24px"} gap={"10px"} display={'flex'} flexDirection={"column"} borderRadius={"16px"} border={"1px solid #EEEEF4"} >
        <Box fontSize={"14px"} fontWeight={500}>
          <span>You will receive response within 24 hours of time of submit.
          </span>
        </Box>
        <Box display={'flex'} flexDirection={"column"} gap={2}
  >
          <Box display={'flex'} w={'full'} gap={5} >
            <Box w={"50%"} fontSize={"12px"} fontWeight={500}>
              <Box><span>Name</span></Box>
              <Box>    <Input border={"2px solid #EEEEF4"} borderRadius={"8px"} />       </Box>
            </Box>

            <Box w={"50%"}  fontSize={"12px"} fontWeight={500}>
              <Box>
                <span>Surname</span>
              </Box>
              <Box> <Input border={"2px solid #EEEEF4"} borderRadius={"8px"} /></Box>
            </Box>
          </Box>

          <Box w={'full'}  fontSize={"12px"} fontWeight={500}>
            <Box>
              <span>Email</span>
            </Box>
            <Box>
              <Input type='email' border={"2px solid #EEEEF4"} borderRadius={"8px"}/>
            </Box>
          </Box>
          <Box>
            <Box  fontSize={"12px"} fontWeight={500}><span>Message</span></Box>
            <Box> <textarea name="Message" rows={3} id="" width="100%" cols={60}
            style={{
              backgroundColor : "white",
              border: "2px solid #EEEEF4",
              borderRadius: "16px"
            }}
            ></textarea> </Box>
          </Box>
          <Box>
            <Checkbox.Root >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label  fontSize={"12px"} fontWeight={500}>I agree with <span color='#5F00D9'>Terms & Conditions.</span></Checkbox.Label>
            </Checkbox.Root>
          </Box>
          <Box w={'full'} fontSize={"14px"} fontWeight={500} gap={5} display={'flex'} flexDirection={"column" }>

          <Box 
          ><Button w={'full'} bg={"#5F00D9"} color={"white"} borderRadius={"10px"}>Send a Message</Button></Box>
          <Box><Button w={'full'} bg={"#EEEEF4"}  borderRadius={"10px"} >Book a Meeting</Button></Box>

          </Box>
        </Box>
      </Box>
          </Box>
          <Box display={'flex'} flexDirection={"row"} alignItems={"center"} 
          w={"full"} 
          >
      <Box w={"40%"} paddingLeft={10} >
        <Box> <Icon as={IoChatbubble} color={"#5F00D9"} fontSize={25}/> </Box>
        <Box> <Text  fontSize ={"24px"} fontWeight={500}>Live Chat</Text></Box>
        <Box><Text fontSize={"12px"} color={"#535D66"} >Don't have time to wait for the answer? Chat with us now.</Text></Box>
      </Box>
      <Box  w={"50%"} bg={"#5F00D9"} padding={6} borderRadius={"16px"} display={'flex'} flexDirection={'column'} gap={2}  bgImage={`url(${img2})`}> 
       <Box  fontSize ={"12px"} color={"#5F00D9"} alignItems={"center"}  display={"flex"}justifyContent={'center'} w={20} bg={"white"} fontWeight={500} borderRadius={"16px"}><span>  Chatbot</span></Box>
       <Box><Text fontSize={"16px"} color={"white"} fontWeight={500}>Chat with us now</Text></Box>
      </Box>
          </Box>
    </Container>
  )
}

export default Support

