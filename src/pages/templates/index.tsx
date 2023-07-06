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
import Body from "@/components/common/Body";
import SideNav from "@/components/navbar/sideNav";
import Card from "@/pages/templates/templateCard";
import { useGetAllTemplatesQuery } from "@/redux/api/templates/templateApi";
import { ITemplate } from "../../types/template.types";
import Link from "next/link";

const Templates = () => {
  const { data: templates, isLoading: loadingData } = useGetAllTemplatesQuery();
  console.log(templates);

  return (
    <Body>
      <Flex
        w="full"
        pb="50px"
        pt="25px"
        align="flex-start"
        // gap={{ base: "0px", xl: "25px" }}
      >
        <Box w={{ xl: "20%" }} display={{ base: "none", xl: "initial" }}>
          <VStack align="flex-start" fontSize="15px" className="fixedNavPane">
            <SideNav />
          </VStack>
        </Box>

        <VStack
          align="flex-start"
          spacing={{ base: "30px", xl: "20px" }}
          pt={{ base: "10px", xl: "30px" }}
          w={{ base: "full", xl: "80%" }}
        >
          <Box w="full" pb={{ base: "0px", xl: "80px" }}>
            <HStack
              w={{ base: "full", xl: "76%" }}
              justify="space-between"
              position={{ base: "static", xl: "fixed" }}
              top={{ base: "0px", xl: "65px" }}
              bg="dark.900"
              pt={{ base: "0px", xl: "60px" }}
              zIndex="1"
            >
              <Text fontSize="22px" fontWeight="bold">
                Contract Templates
              </Text>

              <Link href="/templates/new">
                <Button
                  rounded={30}
                  px="15px"
                  py="10px"
                  bg="dark.300"
                  h="40px"
                  borderWidth="1px"
                  borderColor="white"
                  display={{ base: "none", xl: "initial" }}
                >
                  <HStack
                    w="full"
                    justify="center"
                    spacing="5px"
                    fontSize="14px"
                  >
                    <Text>Create A New Template</Text>
                    <ArrowForwardIcon fontSize="20px" />
                  </HStack>
                </Button>

                <Center
                  borderRadius="50%"
                  border="1px"
                  color="white"
                  w="30px"
                  h="30px"
                  display={{ base: "flex", xl: "none" }}
                >
                  <AddIcon fontSize="12px" />
                </Center>
              </Link>
            </HStack>
          </Box>

          <Tabs w="full">
            <Box
              w="100%"
              className="overflow"
              overflowY={{ base: "auto", md: "initial" }}
            >
              <TabList
                w={{ base: "full", xl: "76%" }}
                position={{ base: "static", xl: "fixed" }}
                top={{ base: "0px", xl: "165px" }}
                bg="dark.900"
                pt={{ base: "0px", xl: "20px" }}
                zIndex="1"
                borderColor="grey.900"
              >
                <Tab
                  fontSize="14px"
                  _selected={{
                    color: "white",
                    borderColor: "grey.100",
                  }}
                  minW="max-content"
                  fontWeight="medium"
                >
                  All
                </Tab>

                <Tab
                  fontSize="14px"
                  _selected={{
                    color: "white",
                    borderColor: "grey.100",
                  }}
                  minW="max-content"
                  fontWeight="medium"
                >
                  Freelancer
                </Tab>

                <Tab
                  fontSize="14px"
                  _selected={{
                    color: "white",
                    borderColor: "grey.100",
                  }}
                  minW="max-content"
                  fontWeight="medium"
                >
                  Client
                </Tab>
              </TabList>
            </Box>
            <TabPanels>
              <TabPanel px="0" pt="20px" w="full">
                <VStack w="full" spacing="30px">
                  {templates?.map((template: ITemplate) => {
                    return (
                      <Card
                        key={template.slug}
                        title={template.title}
                        user="freelancer"
                        slug={template.slug}
                        created={new Date(
                          template?.createdAt as Date
                        ).toDateString()}
                      />
                    );
                  })}

                  <Card user="freelancer" />
                  <Card user="client" />
                  <Card user="freelancer" />
                  <Card user="client" />
                  <Card user="freelancer" />
                  <Card user="client" />
                  <Card user="freelancer" />
                  <Card user="client" />
                  <Card user="freelancer" />
                  <Card user="client" />
                  <Card user="freelancer" />
                  <Card user="client" />
                </VStack>
              </TabPanel>

              <TabPanel px="0" pt="20px" w="full">
                <VStack w="full" spacing="30px">
                  <Card user="freelancer" />
                  <Card user="freelancer" />
                  <Card user="freelancer" />
                </VStack>
              </TabPanel>

              <TabPanel px="0" pt="20px" w="full">
                <VStack w="full" spacing="30px">
                  <Card user="client" />
                  <Card user="client" />
                  <Card user="client" />
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
