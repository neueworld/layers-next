import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  HStack,
  VStack,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Flex,
  Box,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
// import { Link } from 'react-router-dom';

import snowIcon from "@/assets/svgs/snow.svg";
import BasicCard from "@/components/cards/BasicCard";
import Body from "@/components/common/Body";
import SideNav from "@/components/navbar/sideNav";
import Card from "@/pages/templates/templateCard";
import { useGetAllTemplatesQuery } from "@/redux/api/templates/templateApi";
import { ITemplate } from "../../types/template.types";
import Link from "next/link";
import NextImage from "next/image";

const Templates = () => {
  const { data: templates, isLoading: loadingData } = useGetAllTemplatesQuery();
  console.log(templates);

  return (
    <Body>
      <Flex w='full' pb='50px' pt='20px' align='flex-start' gap={{ base: "0px", xl: "25px" }}>
        <VStack
          w={{ xl: "20%" }}
          align='flex-start'
          pt='10px'
          fontSize='15px'
          display={{ base: "none", xl: "initial" }}
        >
          <SideNav />
        </VStack>

        <VStack
          align='flex-start'
          spacing={{ base: "30px", xl: "20px" }}
          pt={{ base: "10px", xl: "30px" }}
          w={{ base: "full", xl: "80%" }}
        >
          <HStack w='full' justify='space-between'>
            <Text fontSize='22px' fontWeight='bold'>
              Contract Templates
            </Text>

            <Link href='/templates/new'>
              <Button
                rounded={30}
                px='15px'
                py='10px'
                bg='dark.300'
                h='40px'
                borderWidth='1px'
                borderColor='white'
                display={{ base: "none", xl: "initial" }}
              >
                <HStack w='full' justify='center' spacing='5px' fontSize='14px'>
                  <Text>Create A New Template</Text>
                  <ArrowForwardIcon fontSize='20px' />
                </HStack>
              </Button>

              <Center
                borderRadius='50%'
                border='1px'
                color='white'
                w='30px'
                h='30px'
                display={{ base: "flex", xl: "none" }}
              >
                <AddIcon fontSize='12px' />
              </Center>
            </Link>
          </HStack>

          <Tabs w='full'>
            <Box w='100%' className='overflow' overflowY={{ base: "auto", md: "initial" }}>
              <TabList w={{ base: "full", xl: "full" }}>
                <Tab
                  fontSize='14px'
                  _selected={{
                    color: "white",
                    borderColor: "grey.100",
                  }}
                  minW='max-content'
                >
                  All
                </Tab>

                <Tab
                  fontSize='14px'
                  _selected={{
                    color: "white",
                    borderColor: "grey.100",
                  }}
                  minW='max-content'
                >
                  Freelancer
                </Tab>

                <Tab
                  fontSize='14px'
                  _selected={{
                    color: "white",
                    borderColor: "grey.100",
                  }}
                  minW='max-content'
                >
                  Client
                </Tab>
              </TabList>
            </Box>
            <TabPanels>
              <TabPanel px='0' pt='20px' w='full'>
                <VStack w='full' spacing='30px'>
                  {templates?.map((template: ITemplate) => {
                    return (
                      <Card
                        key={template.slug}
                        title={template.title}
                        user='freelancer'
                        slug={template.slug}
                        created={new Date(template?.createdAt as Date).toDateString()}
                      />
                    );
                  })}
                  {/* <Card user="freelancer" />
                  <Card user="client" /> */}
                </VStack>
              </TabPanel>

              <TabPanel px='0' pt='20px' w='full'>
                <VStack w='full' spacing='30px'>
                  <Card user='freelancer' />
                  <Card user='freelancer' />
                  <Card user='freelancer' />
                </VStack>
              </TabPanel>

              <TabPanel px='0' pt='20px' w='full'>
                <VStack w='full' spacing='30px'>
                  <Card user='client' />
                  <Card user='client' />
                  <Card user='client' />
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Flex>
    </Body>
  );
};

export default Templates;
