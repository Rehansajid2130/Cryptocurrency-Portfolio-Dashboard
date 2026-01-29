import { Box, Button, Card, Container, Icon, Tag } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

import { Link, Tabs } from "@chakra-ui/react"
import TransactionTable from './TransactionTable';

const Transaction = () => {

    const tabs = [
        {
            text: "All",
            count: 349
        },
        {
            text: "Deposit",
            count: 114
        },
        {
            text: "Withdraw",
            count: 213
        },
        {
            text: "Trade",
            count: 22
        },
    ]
    return (
        <Container display={'flex'} flexDirection={'column'} padding={"30px 90px 40px 90px"} >
            <Box display={'flex'} w={"100%"} height={"fit-content"} flexDirection={'column'} >
                <Box display={'flex'} justifyContent={'flex-end'} w={"100%"}>
                    <Button bgColor={"#5F00D9"} color={'white'}
                        borderRadius={10} fontSize={12} padding={"8px 14px 8px 14px"} marginBottom={4} 
                    ><Icon as={MdOutlineFileDownload} />
                        Export CSV
                    </Button>
                </Box >

                <Box bgColor={'white'} borderRadius={13} padding={3}>
                    <Tabs.Root defaultValue="members">
                        <Tabs.List  >
                            {tabs.map((tabs) => {
                                return (
                                    <Tabs.Trigger key={tabs.text} value={tabs.text} padding="20px" _selected={{
                                        color: "black",
                                        fontWeight: "600",
                                    }} >
                                        <Link unstyled href={`#&{tabs.text}`} display={'flex'} gap={2} flexDirection={'row'} alignContent={'center'}>
                                            {tabs.text}
                                            <Tag.Root padding={"4px 6px 4px 6px"} bgColor={"#F3F3F7"} color={"#797E82"} border={"0px"} 
                                            borderRadius={'full'}>
                                                <Tag.Label>

                                                    {tabs.count}
                                                </Tag.Label>
                                            </Tag.Root>
                                        </Link>
                                    </Tabs.Trigger>
                                )
                            })}
                        </Tabs.List>
                        <Tabs.Content value="members">Manage your team members</Tabs.Content>
                        <Tabs.Content value="projects">Manage your projects</Tabs.Content>
                    </Tabs.Root>
                    <TransactionTable />
                </Box>
            </Box>
        </Container>
    )
}

export default Transaction

