import React from 'react'
import { Box, Table,Text } from "@chakra-ui/react"

const items = [
    {
      id: "HD82NA2H1",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA2H2",
      date: "2022-06-07",
      time: "02:48 PM",
      type: {
        name: "INR Withdraw",
        tag: "Wire Transfer",
      },
      amount: "- ₹81,123.10",
      status: "Processing",
    },
    {
      id: "HD82NA2H3",
      date: "2022-06-04",
      time: "09:21 AM",
      type: {
        name: "Buy",
        tag: null,
      },
      amount: "+ 12.48513391 BTC",
      status: "Cancelled",
    },
    {
      id: "HD82NA2H4",
      date: "2022-06-03",
      time: "01:32 PM",
      type: {
        name: "Sell",
        tag: null,
      },
      amount: "- 0.36401628 BTC",
      status: "Completed",
    },
    {
      id: "HD82NA2H5",
      date: "2022-06-03",
      time: "09:02 AM",
      type: {
        name: "BTC Deposit",
        tag: null,
      },
      amount: "+ 4.13946104 BTC",
      status: "Completed",
    },
    {
      id: "HD82NA2H6",
      date: "2022-06-01",
      time: "01:56 PM",
      type: {
        name: "BTC Withdraw",
        tag: null,
      },
      amount: "- 10.00000000 BTC",
      status: "Completed",
    },
  ];

const TransactionTable = () => {

    const statusColor ={
    Pending: "#797E82",
    Processing: "#F5A50B",
    Completed: "#059669",
    Cancelled: "#DC2626",
    }
  return (
    <Box bgColor={'white'}>
         <Table.Root size="sm" bg='white' colorPalette={"black"} borderColor={"#E5E7EB"}>
      <Table.Header bg={'white'} color={'black'}>
      <Table.Row backgroundColor="black">
      <Table.ColumnHeader color="white" px={4} py={3}>ID</Table.ColumnHeader>
      <Table.ColumnHeader color="white" px={4} py={3}>Date & Time</Table.ColumnHeader>
      <Table.ColumnHeader color="white" px={4} py={3}>Type</Table.ColumnHeader>
      <Table.ColumnHeader color="white" px={4} py={3}>Amount</Table.ColumnHeader>
      <Table.ColumnHeader color="white" px={4} py={3}>Status</Table.ColumnHeader>
    </Table.Row>
      </Table.Header>
      <Table.Body bgColor={'white'} padding={"30px"} >
        {items.map((item) => (
          <Table.Row key={item.id} color={'black'} backgroundColor={"White"}
            fontWeight={500}
          >
            <Table.Cell padding={4}>{item.id}</Table.Cell>
            <Table.Cell>
                <Text>
                    {item.date}
                </Text>
                <Text fontSize={12} fontWeight={500} color={"#797E82"}>
                {item.time} 
                </Text>

            </Table.Cell>
            <Table.Cell>
                <Text>
                {item.type.name}
                    
                </Text>
                <Text  fontSize={12} fontWeight={500} color={"#797E82"}>
                    {item.type.tag}
                </Text>

            </Table.Cell>
            <Table.Cell>{item.amount}</Table.Cell>

            <Table.Cell >
                <Text backgroundColor={statusColor[item.status]}
               width={"fit-content"} color={'white'}
                padding={"3px 6px "} borderRadius={20}
                >
                {item.status}

                </Text>
                </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>

    </Box>
  )
}

export default TransactionTable

