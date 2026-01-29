import { Heading, HStack, Icon} from '@chakra-ui/react'
import React from 'react'
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from '@/components/ui/menu'

import { CgProfile} from "react-icons/cg";
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const {pathname} = useLocation();
  
  const title = pathname === "/transaction" ? "Transaction" : pathname === "/"? "Dashboard": "Dashboard" ;
  return (
    <HStack height={'fit-content'} width={"100%"} background={'white'}
    justifyContent={'space-between'} padding={"15px 70px 15px 70px"} >
           <Heading fontSize={"26px"} fontWeight={600}>
          {title}
           </Heading>
           <MenuRoot>
            <MenuTrigger>
                <Icon as={ CgProfile } size={"2xl"}/>
            </MenuTrigger>
            <MenuContent>
              <MenuItem>Profile  </MenuItem>
              <MenuItem>Setting  </MenuItem>
              <MenuItem>Logout  </MenuItem>
            </MenuContent>
           </MenuRoot>
    </HStack>

  )
}

export default Navbar

