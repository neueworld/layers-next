import { AddIcon, ArrowBackIcon, CheckIcon } from "@chakra-ui/icons";
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
  Switch,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import { object, string, array } from "yup";
import Body from "@/components/common/Body";
import SideNav from "@/components/navbar/sideNav";
import NextImage from "next/image";
import eyeIcon from "@/assets/svgs/eyeicon.svg";
import uploadIcon from "@/assets/svgs/upload.svg";
import ethIcon from "@/assets/svgs/eth.svg";
import { useState } from "react";

const AccountSettings = () => {
  const [checkedItems, setCheckedItems] = useState(false);

  const InitialValues = {
    title: "",
    users: [{ email: "" }],
  };

  const templateSchema = object().shape({
    title: string().required("Enter a title for the template"),
    users: array().of(
      object().shape({
        heading: string().required("Heading is required"),
        content: array().of(
          object().shape({
            description: string().required("Work description is required"),
          })
        ),
      })
    ),
  });

  return (
    <Body>
      <Formik
        initialValues={InitialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Flex
              w="full"
              pb="50px"
              pt="20px"
              align="flex-start"
              gap={{ base: "0px", xl: "25px" }}
            >
              <VStack
                w={{ xl: "20%" }}
                align="flex-start"
                pt="10px"
                fontSize="15px"
                display={{ base: "none", xl: "initial" }}
              >
                <SideNav />
              </VStack>

              <VStack
                align="flex-start"
                spacing={{ base: "30px", xl: "20px" }}
                pt={{ base: "10px", xl: "30px" }}
                w={{ base: "full", xl: "80%" }}
              >
                <HStack>
                  <Text fontSize="22px" fontWeight="bold">
                    Settings
                  </Text>
                </HStack>

                <Tabs w="full">
                  <Box
                    w="100%"
                    className="overflow"
                    overflowY={{ base: "auto", md: "initial" }}
                  >
                    <TabList w={{ base: "max-content", xl: "full" }}>
                      <Tab
                        fontSize="14px"
                        _selected={{
                          color: "white",
                          borderColor: "grey.100",
                        }}
                        minW="max-content"
                        fontWeight="medium"
                      >
                        Account
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
                        Privacy & Security
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
                        Notifications
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
                        Wallet
                      </Tab>
                    </TabList>
                  </Box>

                  <TabPanels w="full">
                    <TabPanel px="0" pt="30px" w="full">
                      <VStack
                        align="flex-start"
                        spacing={{ base: "30px", xl: "30px" }}
                        w="full"
                      >
                        <Flex
                          w="full"
                          direction={{ base: "column", xl: "row" }}
                          gap={{ base: "20px", xl: "70px" }}
                          align="flex-start"
                          pb="40px"
                          borderBottomWidth="2px"
                          borderRadius="15px"
                          borderColor="grey.500"
                          bg="dark.400"
                          p="30px"
                        >
                          <VStack
                            w="300px"
                            align="flex-start"
                            spacing="3px"
                            color="grey.600"
                          >
                            <Text fontSize="18px" fontWeight="500">
                              Your account Info
                            </Text>
                            <Text fontSize="12px">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </Text>
                          </VStack>

                          <VStack
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing="5px"
                            color="#FFFFFF"
                          >
                            <Text fontSize="13px" fontWeight="500">
                              First Name
                            </Text>

                            <Field
                              as={Input}
                              id={`$title`}
                              name={`$title`}
                              type="text"
                              variant="outline"
                              fontSize="14px"
                              focusBorderColor="primary.700"
                              borderWidth="1px"
                              color="white"
                              _placeholder={{
                                color: "grey",
                                fontSize: "13px",
                              }}
                              placeholder="Set template name"
                              onChange={(e: { target: { value: string } }) => {
                                setFieldValue(`$title`, e.target.value);
                              }}
                            />

                            <Box pt="10px">
                              <Text fontSize="13px" fontWeight="500">
                                Last Name
                              </Text>
                            </Box>

                            <Field
                              as={Input}
                              id={`$title`}
                              name={`$title`}
                              type="text"
                              variant="outline"
                              fontSize="14px"
                              focusBorderColor="primary.700"
                              borderWidth="1px"
                              color="white"
                              _placeholder={{
                                color: "grey",
                                fontSize: "13px",
                              }}
                              placeholder="Set template name"
                              onChange={(e: { target: { value: string } }) => {
                                setFieldValue(`$title`, e.target.value);
                              }}
                            />
                          </VStack>

                          <VStack
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing="5px"
                            color="#FFFFFF"
                          >
                            <Text fontSize="13px" fontWeight="500">
                              Email Address
                            </Text>

                            <Field
                              as={Input}
                              id={`$title`}
                              name={`$title`}
                              type="text"
                              variant="outline"
                              fontSize="14px"
                              focusBorderColor="primary.700"
                              borderWidth="1px"
                              color="white"
                              _placeholder={{
                                color: "grey",
                                fontSize: "13px",
                              }}
                              placeholder="Set template name"
                              onChange={(e: { target: { value: string } }) => {
                                setFieldValue(`$title`, e.target.value);
                              }}
                            />
                          </VStack>
                        </Flex>

                        <Flex
                          w="full"
                          direction={{ base: "column", xl: "row" }}
                          gap={{ base: "20px", xl: "70px" }}
                          align="flex-start"
                          pb="40px"
                          borderBottomWidth="2px"
                          borderRadius="15px"
                          borderColor="grey.500"
                          bg="dark.400"
                          p="30px"
                        >
                          <VStack
                            w="300px"
                            align="flex-start"
                            spacing="3px"
                            color="grey.600"
                          >
                            <Text fontSize="18px" fontWeight="500">
                              Region & Language
                            </Text>
                            <Text fontSize="12px">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </Text>
                          </VStack>

                          <VStack
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing="5px"
                            color="#FFFFFF"
                          >
                            <Text fontSize="13px" fontWeight="500">
                              Country
                            </Text>

                            <Field
                              as={Input}
                              id={`$title`}
                              name={`$title`}
                              type="text"
                              variant="outline"
                              fontSize="14px"
                              focusBorderColor="primary.700"
                              borderWidth="1px"
                              color="white"
                              _placeholder={{
                                color: "grey",
                                fontSize: "13px",
                              }}
                              placeholder="Set template name"
                              onChange={(e: { target: { value: string } }) => {
                                setFieldValue(`$title`, e.target.value);
                              }}
                            />

                            <Box pt="10px">
                              <Text fontSize="13px" fontWeight="500">
                                Postal Code
                              </Text>
                            </Box>

                            <Field
                              as={Input}
                              id={`$title`}
                              name={`$title`}
                              type="text"
                              variant="outline"
                              fontSize="14px"
                              focusBorderColor="primary.700"
                              borderWidth="1px"
                              color="white"
                              _placeholder={{
                                color: "grey",
                                fontSize: "13px",
                              }}
                              placeholder="Set template name"
                              onChange={(e: { target: { value: string } }) => {
                                setFieldValue(`$title`, e.target.value);
                              }}
                            />
                          </VStack>

                          <VStack
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing="5px"
                            color="#FFFFFF"
                          >
                            <Text fontSize="13px" fontWeight="500">
                              State
                            </Text>

                            <Field
                              as={Input}
                              id={`$title`}
                              name={`$title`}
                              type="text"
                              variant="outline"
                              fontSize="14px"
                              focusBorderColor="primary.700"
                              borderWidth="1px"
                              color="white"
                              _placeholder={{
                                color: "grey",
                                fontSize: "13px",
                              }}
                              placeholder="Set template name"
                              onChange={(e: { target: { value: string } }) => {
                                setFieldValue(`$title`, e.target.value);
                              }}
                            />
                          </VStack>
                        </Flex>

                        <HStack
                          w="full"
                          justify={{ base: "center", xl: "flex-end" }}
                        >
                          <Button
                            rounded={30}
                            px="15px"
                            h="45px"
                            bg="primary.700"
                          >
                            <HStack w="full" justify="center" spacing="5px">
                              <Text>Save Changes</Text>
                              <Center
                                borderRadius="50%"
                                border="2px"
                                color="white"
                                p="1px"
                              >
                                <CheckIcon fontSize="11px" />
                              </Center>
                            </HStack>
                          </Button>
                        </HStack>
                      </VStack>
                    </TabPanel>

                    <TabPanel px="0" pt="30px" w="full">
                      <VStack
                        align="flex-start"
                        spacing={{ base: "30px", xl: "30px" }}
                        w="full"
                      >
                        <Flex
                          w="full"
                          direction={{ base: "column", xl: "row" }}
                          gap={{ base: "20px", xl: "70px" }}
                          align="flex-start"
                          pb="40px"
                          borderBottomWidth="2px"
                          borderRadius="15px"
                          borderColor="grey.500"
                          bg="dark.400"
                          p="30px"
                        >
                          <VStack
                            w="300px"
                            align="flex-start"
                            spacing="3px"
                            color="grey.600"
                          >
                            <Text fontSize="18px" fontWeight="500">
                              Change your password
                            </Text>
                            <Text fontSize="12px">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </Text>
                          </VStack>

                          <VStack
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing="5px"
                            color="#FFFFFF"
                          >
                            <Text fontSize="13px" fontWeight="500">
                              Current Password
                            </Text>

                            <InputGroup>
                              <Field
                                as={Input}
                                id={`$title`}
                                name={`$title`}
                                type="password"
                                variant="outline"
                                fontSize="14px"
                                focusBorderColor="primary.700"
                                borderWidth="1px"
                                color="white"
                                _placeholder={{
                                  color: "grey",
                                  fontSize: "13px",
                                }}
                                placeholder="Set template name"
                                onChange={(e: {
                                  target: { value: string };
                                }) => {
                                  setFieldValue(`$title`, e.target.value);
                                }}
                              />

                              <InputRightElement>
                                <Image
                                  as={NextImage}
                                  alt="icon"
                                  src={eyeIcon}
                                  w="15px"
                                />
                              </InputRightElement>
                            </InputGroup>

                            <Box pt="10px">
                              <Text fontSize="13px" fontWeight="500">
                                New Password
                              </Text>
                            </Box>

                            <InputGroup>
                              <Field
                                as={Input}
                                id={`$title`}
                                name={`$title`}
                                type="password"
                                variant="outline"
                                fontSize="14px"
                                focusBorderColor="primary.700"
                                borderWidth="1px"
                                color="white"
                                _placeholder={{
                                  color: "grey",
                                  fontSize: "13px",
                                }}
                                placeholder="Set template name"
                                onChange={(e: {
                                  target: { value: string };
                                }) => {
                                  setFieldValue(`$title`, e.target.value);
                                }}
                              />

                              <InputRightElement>
                                <Image
                                  as={NextImage}
                                  alt="icon"
                                  src={eyeIcon}
                                  w="15px"
                                />
                              </InputRightElement>
                            </InputGroup>
                          </VStack>

                          <VStack
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing="5px"
                            color="#FFFFFF"
                          >
                            <Text fontSize="13px" fontWeight="500">
                              Confirm New Password
                            </Text>

                            <InputGroup>
                              <Field
                                as={Input}
                                id={`$title`}
                                name={`$title`}
                                type="password"
                                variant="outline"
                                fontSize="14px"
                                focusBorderColor="primary.700"
                                borderWidth="1px"
                                color="white"
                                _placeholder={{
                                  color: "grey",
                                  fontSize: "13px",
                                }}
                                placeholder="Set template name"
                                onChange={(e: {
                                  target: { value: string };
                                }) => {
                                  setFieldValue(`$title`, e.target.value);
                                }}
                              />

                              <InputRightElement>
                                <Image
                                  as={NextImage}
                                  alt="icon"
                                  src={eyeIcon}
                                  w="15px"
                                />
                              </InputRightElement>
                            </InputGroup>
                          </VStack>
                        </Flex>

                        <Flex
                          w="full"
                          direction={{ base: "column", xl: "row" }}
                          gap={{ base: "20px", xl: "70px" }}
                          align="flex-start"
                          pb="40px"
                          borderBottomWidth="2px"
                          borderRadius="15px"
                          borderColor="grey.500"
                          bg="dark.400"
                          p="30px"
                        >
                          <VStack
                            w="300px"
                            align="flex-start"
                            spacing="3px"
                            color="grey.600"
                          >
                            <Text fontSize="18px" fontWeight="500">
                              Two-factor authentication
                            </Text>
                            <Text fontSize="12px">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </Text>
                          </VStack>

                          <HStack
                            w={{ base: "full", xl: "300px" }}
                            justify={{ base: "initial", xl: "flex-end" }}
                          >
                            <Text fontSize="13px" fontWeight="500">
                              Disabled
                            </Text>
                            <Switch
                              size="md"
                              colorScheme="purple"
                              onChange={(e) =>
                                setCheckedItems(e.target.checked)
                              }
                            />
                            <Text fontSize="13px" fontWeight="500">
                              Enabled
                            </Text>
                          </HStack>

                          <VStack
                            display={checkedItems ? "flex" : "none"}
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing="5px"
                            color="#FFFFFF"
                          >
                            <Text fontSize="13px" fontWeight="500">
                              Enter Verification code to disable
                            </Text>

                            <InputGroup>
                              <Field
                                as={Input}
                                id={`$title`}
                                name={`$title`}
                                type="password"
                                variant="outline"
                                fontSize="14px"
                                focusBorderColor="primary.700"
                                borderWidth="1px"
                                color="white"
                                _placeholder={{
                                  color: "grey",
                                  fontSize: "13px",
                                }}
                                placeholder="Set template name"
                                onChange={(e: {
                                  target: { value: string };
                                }) => {
                                  setFieldValue(`$title`, e.target.value);
                                }}
                              />

                              <InputRightElement>
                                <Image
                                  as={NextImage}
                                  alt="icon"
                                  src={eyeIcon}
                                  w="15px"
                                />
                              </InputRightElement>
                            </InputGroup>
                          </VStack>
                        </Flex>

                        <HStack
                          w="full"
                          justify={{ base: "center", xl: "flex-end" }}
                        >
                          <Button
                            rounded={30}
                            px="15px"
                            h="45px"
                            bg="primary.700"
                          >
                            <HStack w="full" justify="center" spacing="5px">
                              <Text>Save Changes</Text>
                              <Center
                                borderRadius="50%"
                                border="2px"
                                color="white"
                                p="1px"
                              >
                                <CheckIcon fontSize="11px" />
                              </Center>
                            </HStack>
                          </Button>
                        </HStack>
                      </VStack>
                    </TabPanel>

                    <TabPanel px="0" pt="30px" w="full">
                      <VStack
                        align="flex-start"
                        spacing={{ base: "30px", xl: "30px" }}
                        w="full"
                      >
                        <Flex
                          w="full"
                          direction={{ base: "column", xl: "row" }}
                          gap={{ base: "20px", xl: "70px" }}
                          align="flex-start"
                          pb="40px"
                          borderBottomWidth="2px"
                          borderRadius="15px"
                          borderColor="grey.500"
                          bg="dark.400"
                          p="30px"
                        >
                          <VStack
                            w="300px"
                            align="flex-start"
                            spacing="3px"
                            color="grey.600"
                          >
                            <Text fontSize="18px" fontWeight="500">
                              Notifications
                            </Text>
                            <Text fontSize="12px">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </Text>
                          </VStack>

                          <VStack
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing={{ base: "20px", xl: "40px" }}
                            color="white"
                          >
                            <Box>
                              <Text
                                fontSize="14px"
                                fontWeight="500"
                                color="grey.600"
                              >
                                You&apos;ve been invited to a job
                              </Text>
                              <HStack pt="10px">
                                <Text fontSize="13px" fontWeight="500">
                                  Off
                                </Text>
                                <Switch
                                  size="md"
                                  colorScheme="purple"
                                  onChange={(e) =>
                                    setCheckedItems(e.target.checked)
                                  }
                                />
                                <Text fontSize="13px" fontWeight="500">
                                  Send to email
                                </Text>
                              </HStack>
                            </Box>

                            <Box>
                              <Text
                                fontSize="14px"
                                fontWeight="500"
                                color="grey.600"
                              >
                                You received a new payment
                              </Text>
                              <HStack pt="10px">
                                <Text fontSize="13px" fontWeight="500">
                                  Off
                                </Text>
                                <Switch
                                  size="md"
                                  colorScheme="purple"
                                  onChange={(e) =>
                                    setCheckedItems(e.target.checked)
                                  }
                                />
                                <Text fontSize="13px" fontWeight="500">
                                  Send to email
                                </Text>
                              </HStack>
                            </Box>

                            <Box>
                              <Text
                                fontSize="14px"
                                fontWeight="500"
                                color="grey.600"
                              >
                                Approval requested
                              </Text>
                              <HStack pt="10px">
                                <Text fontSize="13px" fontWeight="500">
                                  Off
                                </Text>
                                <Switch
                                  size="md"
                                  colorScheme="purple"
                                  onChange={(e) =>
                                    setCheckedItems(e.target.checked)
                                  }
                                />
                                <Text fontSize="13px" fontWeight="500">
                                  Send to email
                                </Text>
                              </HStack>
                            </Box>
                          </VStack>

                          <VStack
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing={{ base: "20px", xl: "40px" }}
                            color="white"
                          >
                            <Box>
                              <Text
                                fontSize="14px"
                                fontWeight="500"
                                color="grey.600"
                              >
                                Career help daily digest
                              </Text>
                              <HStack pt="10px">
                                <Text fontSize="13px" fontWeight="500">
                                  Off
                                </Text>
                                <Switch
                                  size="md"
                                  colorScheme="purple"
                                  onChange={(e) =>
                                    setCheckedItems(e.target.checked)
                                  }
                                />
                                <Text fontSize="13px" fontWeight="500">
                                  Send to email
                                </Text>
                              </HStack>
                            </Box>

                            <Box>
                              <Text
                                fontSize="14px"
                                fontWeight="500"
                                color="grey.600"
                              >
                                New Contract offer
                              </Text>
                              <HStack pt="10px">
                                <Text fontSize="13px" fontWeight="500">
                                  Off
                                </Text>
                                <Switch
                                  size="md"
                                  colorScheme="purple"
                                  onChange={(e) =>
                                    setCheckedItems(e.target.checked)
                                  }
                                />
                                <Text fontSize="13px" fontWeight="500">
                                  Send to email
                                </Text>
                              </HStack>
                            </Box>

                            <Box>
                              <Text
                                fontSize="14px"
                                fontWeight="500"
                                color="grey.600"
                              >
                                New Job offer
                              </Text>
                              <HStack pt="10px">
                                <Text fontSize="13px" fontWeight="500">
                                  Off
                                </Text>
                                <Switch
                                  size="md"
                                  colorScheme="purple"
                                  onChange={(e) =>
                                    setCheckedItems(e.target.checked)
                                  }
                                />
                                <Text fontSize="13px" fontWeight="500">
                                  Send to email
                                </Text>
                              </HStack>
                            </Box>
                          </VStack>
                        </Flex>

                        <HStack
                          w="full"
                          justify={{ base: "center", xl: "flex-end" }}
                        >
                          <Button
                            rounded={30}
                            px="15px"
                            h="45px"
                            bg="primary.700"
                          >
                            <HStack w="full" justify="center" spacing="5px">
                              <Text>Save Changes</Text>
                              <Center
                                borderRadius="50%"
                                border="2px"
                                color="white"
                                p="1px"
                              >
                                <CheckIcon fontSize="11px" />
                              </Center>
                            </HStack>
                          </Button>
                        </HStack>
                      </VStack>
                    </TabPanel>

                    <TabPanel px="0" pt="30px" w="full">
                      <VStack
                        align="flex-start"
                        spacing={{ base: "30px", xl: "30px" }}
                        w="full"
                      >
                        <Flex
                          w="full"
                          direction="column"
                          gap="10px"
                          align="flex-start"
                          pb="40px"
                          borderBottomWidth="2px"
                          borderRadius="15px"
                          borderColor="grey.500"
                          bg="dark.400"
                          p="30px"
                        >
                          <Box
                            w="full"
                            pb="40px"
                            borderBottomWidth="1px"
                            borderColor="grey.500"
                            color="grey.600"
                          >
                            <Text fontSize="13px" fontWeight="500">
                              All earnings on Layers
                            </Text>
                            <Flex
                              direction={{ base: "column", xl: "row" }}
                              align="flex-start"
                              w="full"
                              gap={{ base: "15px", xl: "80px" }}
                            >
                              <HStack
                                fontSize="24px"
                                fontWeight="700"
                                color="white"
                              >
                                <Image
                                  as={NextImage}
                                  alt="icon"
                                  src={ethIcon}
                                />
                                <Text>0.0008</Text>
                                <Text textTransform="uppercase">eth</Text>
                              </HStack>
                              <VStack
                                color="white"
                                spacing="0px"
                                align="flex-start"
                              >
                                <Text fontSize="12px">Refferals</Text>
                                <HStack fontWeight="700" color="white">
                                  <Text>0.0008</Text>
                                  <Text textTransform="uppercase">eth</Text>
                                </HStack>
                              </VStack>
                              <VStack
                                color="white"
                                spacing="0px"
                                align="flex-start"
                              >
                                <Text fontSize="12px">All Other Earnings</Text>
                                <HStack fontWeight="700" color="white">
                                  <Text>0.0008</Text>
                                  <Text textTransform="uppercase">eth</Text>
                                </HStack>
                              </VStack>
                              <VStack
                                color="white"
                                spacing="0px"
                                align="flex-start"
                              >
                                <Text fontSize="12px">
                                  Earnings through the comunity
                                </Text>
                                <HStack fontWeight="700" color="white">
                                  <Text>0.0008</Text>
                                  <Text textTransform="uppercase">eth</Text>
                                </HStack>
                              </VStack>
                            </Flex>
                          </Box>

                          <Box w="full">
                            <Text
                              fontSize="13px"
                              fontWeight="500"
                              color="grey.600"
                            >
                              All Wallet activities
                            </Text>
                            <VStack
                              w="full"
                              align="flex-start"
                              color="white"
                              spacing="15px"
                              mt="10px"
                            >
                              <Flex
                                direction={{ base: "column", xl: "row" }}
                                gap={{ base: "8px", xl: "0px" }}
                                align="center"
                                w="full"
                              >
                                <Box w={{ base: "full", xl: "28%" }}>
                                  <Text fontSize="15px" fontWeight="500">
                                    Payment received
                                  </Text>
                                </Box>

                                <HStack w={{ base: "full", xl: "36%" }}>
                                  <Box w="60%">
                                    <HStack
                                      fontWeight="500"
                                      fontSize="14px"
                                      color="white"
                                    >
                                      <Text>0.0008</Text>
                                      <Text textTransform="uppercase">eth</Text>
                                    </HStack>
                                  </Box>
                                  <Box w="40%">
                                    <Text fontSize="14px" color="grey.100">
                                      Client
                                    </Text>
                                  </Box>
                                </HStack>
                                <HStack w={{ base: "full", xl: "36%" }}>
                                  <Box w="60%">
                                    <Text fontSize="14px" color="grey.100">
                                      27 Jun 2023
                                    </Text>
                                  </Box>
                                  <Box w="40%">
                                    <Button
                                      rounded={30}
                                      px="13px"
                                      h="19px"
                                      fontSize="13px"
                                      bg="primary.700"
                                    >
                                      <Text>Confirm</Text>
                                    </Button>
                                  </Box>
                                </HStack>
                              </Flex>

                              <Flex
                                direction={{ base: "column", xl: "row" }}
                                gap={{ base: "8px", xl: "0px" }}
                                align="center"
                                w="full"
                              >
                                <Box w={{ base: "full", xl: "28%" }}>
                                  <Text fontSize="15px" fontWeight="500">
                                    Payment received
                                  </Text>
                                </Box>

                                <HStack w={{ base: "full", xl: "36%" }}>
                                  <Box w="60%">
                                    <HStack
                                      fontWeight="500"
                                      fontSize="14px"
                                      color="white"
                                    >
                                      <Text>0.0008</Text>
                                      <Text textTransform="uppercase">eth</Text>
                                    </HStack>
                                  </Box>
                                  <Box w="40%">
                                    <Text fontSize="14px" color="grey.100">
                                      Client
                                    </Text>
                                  </Box>
                                </HStack>
                                <HStack w={{ base: "full", xl: "36%" }}>
                                  <Box w="60%">
                                    <Text fontSize="14px" color="grey.100">
                                      27 Jun 2023
                                    </Text>
                                  </Box>
                                  <Box w="40%">
                                    <Button
                                      rounded={30}
                                      px="13px"
                                      h="19px"
                                      fontSize="13px"
                                      bg="primary.700"
                                    >
                                      <Text>Confirm</Text>
                                    </Button>
                                  </Box>
                                </HStack>
                              </Flex>

                              <Flex
                                direction={{ base: "column", xl: "row" }}
                                gap={{ base: "8px", xl: "0px" }}
                                align="center"
                                w="full"
                              >
                                <Box w={{ base: "full", xl: "28%" }}>
                                  <Text fontSize="15px" fontWeight="500">
                                    Payment received
                                  </Text>
                                </Box>

                                <HStack w={{ base: "full", xl: "36%" }}>
                                  <Box w="60%">
                                    <HStack
                                      fontWeight="500"
                                      fontSize="14px"
                                      color="white"
                                    >
                                      <Text>0.0008</Text>
                                      <Text textTransform="uppercase">eth</Text>
                                    </HStack>
                                  </Box>
                                  <Box w="40%">
                                    <Text fontSize="14px" color="grey.100">
                                      Client
                                    </Text>
                                  </Box>
                                </HStack>
                                <HStack w={{ base: "full", xl: "36%" }}>
                                  <Box w="60%">
                                    <Text fontSize="14px" color="grey.100">
                                      27 Jun 2023
                                    </Text>
                                  </Box>
                                  <Box w="40%">
                                    <Button
                                      rounded={30}
                                      px="13px"
                                      h="19px"
                                      fontSize="13px"
                                      bg="primary.700"
                                    >
                                      <Text>Confirm</Text>
                                    </Button>
                                  </Box>
                                </HStack>
                              </Flex>
                            </VStack>
                          </Box>
                        </Flex>

                        <Flex
                          w="full"
                          direction={{ base: "column", xl: "row" }}
                          gap={{ base: "20px", xl: "70px" }}
                          align="flex-start"
                          pb="40px"
                          borderBottomWidth="2px"
                          borderRadius="15px"
                          borderColor="grey.500"
                          bg="dark.400"
                          p="30px"
                        >
                          <VStack
                            w="300px"
                            align="flex-start"
                            spacing="3px"
                            color="grey.600"
                          >
                            <Text fontSize="18px" fontWeight="500">
                              Wallet Address
                            </Text>
                            <Text fontSize="12px">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </Text>
                          </VStack>

                          <VStack
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing="5px"
                            color="#FFFFFF"
                          >
                            <Text fontSize="13px" fontWeight="500">
                              Etherium Miannet
                            </Text>

                            <Field
                              as={Input}
                              id={`$title`}
                              name={`$title`}
                              type="text"
                              variant="outline"
                              fontSize="14px"
                              focusBorderColor="primary.700"
                              borderWidth="1px"
                              color="white"
                              _placeholder={{
                                color: "grey",
                                fontSize: "13px",
                              }}
                              placeholder="Set template name"
                              onChange={(e: { target: { value: string } }) => {
                                setFieldValue(`$title`, e.target.value);
                              }}
                            />
                          </VStack>
                        </Flex>

                        <Flex
                          w="full"
                          direction={{ base: "column", xl: "row" }}
                          gap={{ base: "20px", xl: "70px" }}
                          align="flex-start"
                          pb="40px"
                          borderBottomWidth="2px"
                          borderRadius="15px"
                          borderColor="grey.500"
                          bg="dark.400"
                          p="30px"
                        >
                          <VStack
                            w="300px"
                            align="flex-start"
                            spacing="3px"
                            color="grey.600"
                          >
                            <Text fontSize="18px" fontWeight="500">
                              Tax Document
                            </Text>
                            <Text fontSize="12px">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </Text>
                          </VStack>

                          <VStack
                            w={{ base: "full", xl: "300px" }}
                            align="flex-start"
                            spacing="5px"
                            color="#FFFFFF"
                          >
                            <Text fontSize="13px" fontWeight="500">
                              W-8 Form
                            </Text>

                            <InputGroup>
                              <Field
                                as={Input}
                                id={`$title`}
                                name={`$title`}
                                type="text"
                                variant="outline"
                                fontSize="14px"
                                focusBorderColor="primary.700"
                                borderWidth="1px"
                                color="white"
                                _placeholder={{
                                  color: "grey",
                                  fontSize: "13px",
                                }}
                                placeholder="Set template name"
                                onChange={(e: {
                                  target: { value: string };
                                }) => {
                                  setFieldValue(`$title`, e.target.value);
                                }}
                              />

                              <InputRightElement>
                                <Image
                                  as={NextImage}
                                  alt="icon"
                                  src={uploadIcon}
                                  w="15px"
                                />
                              </InputRightElement>
                            </InputGroup>
                          </VStack>
                        </Flex>

                        <HStack
                          w="full"
                          justify={{ base: "center", xl: "flex-end" }}
                        >
                          <Button
                            rounded={30}
                            px="15px"
                            h="45px"
                            bg="primary.700"
                          >
                            <HStack w="full" justify="center" spacing="5px">
                              <Text>Save Changes</Text>
                              <Center
                                borderRadius="50%"
                                border="2px"
                                color="white"
                                p="1px"
                              >
                                <CheckIcon fontSize="11px" />
                              </Center>
                            </HStack>
                          </Button>
                        </HStack>
                      </VStack>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </VStack>
            </Flex>
          </Form>
        )}
      </Formik>
    </Body>
  );
};

export default AccountSettings;
