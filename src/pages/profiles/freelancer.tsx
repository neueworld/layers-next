import {
  HStack,
  VStack,
  Text,
  Flex,
  Box,
  Image,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Avatar,
  AvatarBadge,
  Circle,
  Divider,
  Switch,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react";
import {
  AddIcon,
  InfoOutlineIcon,
  MinusIcon,
  ArrowUpIcon,
} from "@chakra-ui/icons";
import globeIcon from "@/assets/svgs/globe.svg";
import locationIcon from "@/assets/svgs/location.svg";
import lineIcon from "@/assets/svgs/line.svg";
import snowIcon from "@/assets/svgs/snow.svg";
import BasicCard from "@/components/cards/BasicCard";
import Body from "@/components/common/Body";
import SideNav from "@/components/navbar/sideNav";

import type { FormikErrors, FormikTouched, FormikValues } from "formik";
import { Field, Form, Formik } from "formik";
import NextImage from "next/image";
import { useState } from "react";

const Freelancer = () => {
  const [checkedItems, setCheckedItems] = useState(false);

  const InitialValues: { introduction: String } = {
    introduction: "",
  };

  return (
    <Body>
      <Box pb="50px" w="full">
        <Formik
          initialValues={InitialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            errors,
            touched,
            values,
            setFieldValue,
            setFieldTouched,
            isValid,
          }) => (
            <Form>
              <Flex
                w="full"
                pb="50px"
                pt="25px"
                align="flex-start"
                // gap={{ base: "0px", xl: "25px" }}
              >
                <Box
                  w={{ xl: "20%" }}
                  display={{ base: "none", xl: "initial" }}
                >
                  <VStack
                    align="flex-start"
                    fontSize="15px"
                    className="fixedNavPane"
                  >
                    <SideNav />
                  </VStack>
                </Box>

                <VStack
                  w={{ base: "full", xl: "80%" }}
                  pt={{ base: "50px", xl: "40px" }}
                  spacing="50px"
                >
                  <Flex
                    direction={{ base: "column", xl: "row" }}
                    px={{ base: "20px", xl: "50px" }}
                    pb={{ base: "20px", xl: "initial" }}
                    pt={{ base: "20px", xl: "initial" }}
                    align={{ base: "flex-start", xl: "center" }}
                    w="full"
                    gap={{ base: "15px", xl: "30px", "2xl": "60px" }}
                    bg="dark.400"
                    borderRadius="10px"
                    h={{ base: "full", xl: "140px" }}
                    fontSize="14px"
                    borderBottomWidth="2px"
                    borderColor="grey.300"
                  >
                    <VStack
                      w={{ base: "full", xl: "initial" }}
                      align={{ base: "center", xl: "flex-start" }}
                    >
                      <Box
                        pt={{ base: "0px", xl: "40px" }}
                        mt={{ base: "-60px", xl: "0px" }}
                      >
                        <Avatar size="2xl">
                          <AvatarBadge
                            borderColor="primary.700"
                            borderWidth="5px"
                            bg="primary.700"
                            boxSize="40px"
                          />
                        </Avatar>
                      </Box>
                    </VStack>

                    <Text fontSize="32px" fontWeight="bold">
                      Vineet Yadav
                    </Text>

                    <HStack>
                      <Image
                        alt="location"
                        as={NextImage}
                        src={locationIcon}
                        w={{ base: "24px", xl: "15px" }}
                      />
                      <Text>Tallin, Estonia</Text>
                    </HStack>
                    <HStack>
                      <Image
                        src={globeIcon}
                        w={{ base: "24px", xl: "15px" }}
                        as={NextImage}
                      />
                      <Text as="u">www.vineetyadav.com</Text>
                    </HStack>
                    <VStack align="flex-start" spacing="0px" lineHeight="16px">
                      <HStack spacing="5px">
                        <Circle
                          size="8px"
                          bg={checkedItems ? "green" : "primary.400"}
                        />
                        <Text>Accepting new clients</Text>
                        <Switch
                          size="md"
                          colorScheme="purple"
                          onChange={(e) => setCheckedItems(e.target.checked)}
                        />
                      </HStack>
                    </VStack>
                  </Flex>

                  <Tabs w="full">
                    <TabList borderColor="grey.900">
                      <Tab
                        fontSize="14px"
                        _selected={{
                          color: "white",
                          borderColor: "white",
                        }}
                      >
                        About
                      </Tab>
                      <Tab
                        fontSize="14px"
                        _selected={{
                          color: "white",
                          borderColor: "white",
                        }}
                      >
                        Works
                      </Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel px="0" w="full">
                        <VStack w="full" align="flex-start">
                          <Accordion allowToggle m="0px" w="full">
                            <VStack w="full" align="flex-start">
                              <AccordionItem
                                w="full"
                                borderRadius="20px"
                                px={{ md: "40px", base: 4 }}
                                pb={{ md: "40px", base: 6 }}
                                pt={{ md: "30px", base: 4 }}
                                bg="dark.400"
                                color="white"
                                mb="24px"
                                border="1px"
                                borderColor="grey.500"
                                // borderBottomWidth='2px'
                                // borderColor='grey.300'
                              >
                                {({ isExpanded }) => (
                                  <Box w="full">
                                    <VStack
                                      align="flex-start"
                                      spacing="10px"
                                      w="full"
                                    >
                                      <AccordionButton
                                        _hover={{ bg: "none" }}
                                        w="full"
                                        p={0}
                                      >
                                        <VStack spacing="10px" w="full">
                                          <HStack
                                            fontSize="20px"
                                            fontWeight="bold"
                                            justify="space-between"
                                            w="full"
                                            pr="5px"
                                          >
                                            <HStack>
                                              <Text>
                                                Add your introduction{" "}
                                              </Text>
                                            </HStack>

                                            <Box
                                              display={{
                                                base: "initial",
                                                md: "none",
                                              }}
                                            >
                                              {isExpanded ? (
                                                <MinusIcon fontSize="20px" />
                                              ) : (
                                                <AddIcon fontSize="20px" />
                                              )}
                                            </Box>
                                          </HStack>

                                          <HStack
                                            w="full"
                                            spacing="35px"
                                            justify="space-between"
                                            align="flex-start"
                                            display={{
                                              base: "none",
                                              md: "flex",
                                            }}
                                          >
                                            <HStack
                                              lineHeight="20px"
                                              spacing="15px"
                                            >
                                              <Box>
                                                <InfoOutlineIcon />
                                              </Box>

                                              <Text
                                                textAlign="start"
                                                fontSize="14px"
                                              >
                                                Lörem ipsum posedut togände
                                                euroläväskap: därför att vid.
                                                Teratos fjärrnyckel fastän
                                                nonade. Plasotödat nin men dudat
                                                jag espegt.
                                              </Text>
                                            </HStack>

                                            <Box>
                                              {isExpanded ? (
                                                <Box
                                                  border="1px"
                                                  borderColor="white"
                                                  w="30px"
                                                  h="30px"
                                                  borderRadius="50%"
                                                  p="auto"
                                                >
                                                  <MinusIcon fontSize="12px" />
                                                </Box>
                                              ) : (
                                                <Box
                                                  border="1px"
                                                  borderColor="white"
                                                  w="30px"
                                                  h="30px"
                                                  borderRadius="50%"
                                                >
                                                  <AddIcon fontSize="12px" />
                                                </Box>
                                              )}
                                            </Box>
                                          </HStack>
                                        </VStack>
                                      </AccordionButton>

                                      {!isExpanded &&
                                      values.introduction &&
                                      values.introduction !== "" ? (
                                        <>
                                          <Divider my={0} bg="grey.500" />
                                          <Text
                                            w="full"
                                            fontSize={{ md: "14px", base: 12 }}
                                            pt="15px"
                                            color="white"
                                          >
                                            {values.introduction}
                                          </Text>
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </VStack>

                                    <AccordionPanel px="0" pb="0" pt="15px">
                                      <VStack
                                        w="full"
                                        align="flex-start"
                                        spacing="20px"
                                      >
                                        <HStack
                                          lineHeight="20px"
                                          spacing="15px"
                                          align="flex-start"
                                          display={{ base: "flex", md: "none" }}
                                          w="full"
                                        >
                                          <Box pt="10px">
                                            <InfoOutlineIcon fontSize="20px" />
                                          </Box>

                                          <Text
                                            textAlign="start"
                                            fontSize="14px"
                                          >
                                            Lörem ipsum posedut togände
                                            euroläväskap: därför att vid.
                                            Teratos fjärrnyckel fastän nonade.
                                            Plasotödat nin men dudat jag espegt.
                                          </Text>
                                        </HStack>

                                        <Field
                                          as={Textarea}
                                          id="introduction"
                                          name="introduction"
                                          type="text"
                                          variant="filled"
                                          fontSize="16px"
                                          borderWidth="1px"
                                          color="white"
                                          borderRadius="16px"
                                          h={{ base: "400px", xl: "160px" }}
                                          p="20px"
                                          focusBorderColor="black"
                                          onChange={(e: {
                                            target: { value: string };
                                          }) => {
                                            setFieldValue(
                                              "introduction",
                                              e.target.value
                                            );
                                          }}
                                        />
                                      </VStack>
                                    </AccordionPanel>
                                  </Box>
                                )}
                              </AccordionItem>{" "}
                            </VStack>
                          </Accordion>
                        </VStack>
                      </TabPanel>

                      <TabPanel w="full" px="0">
                        Test
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </VStack>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Body>
  );
};

export default Freelancer;
