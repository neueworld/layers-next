import { AddIcon, ArrowBackIcon, CheckIcon } from "@chakra-ui/icons";
import {
  HStack,
  VStack,
  Text,
  Flex,
  Input,
  Button,
  Center,
  Switch,
} from "@chakra-ui/react";
import Body from "@/components/common/Body";
import Link from "next/link";
import { Form, Formik, Field } from "formik";
import { object, string, array } from "yup";
import { useState } from "react";

const Settings = () => {
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
              pt={{ base: "20px", xl: "50px" }}
              pb="50px"
              align="flex-start"
              gap={{ base: "10px", xl: "30px" }}
              direction={{ base: "column", xl: "row" }}
            >
              <HStack w={{ base: "full", xl: "20%" }}>
                <ArrowBackIcon w="14px" />
                <Link href="/templates">
                  <Text fontSize="13px">Back to Contract Templates</Text>
                </Link>
              </HStack>

              <VStack
                align="flex-start"
                spacing={{ base: "30px", xl: "40px" }}
                w={{ base: "full", xl: "80%" }}
              >
                <Flex
                  direction={{ base: "column", xl: "row" }}
                  gap="20px"
                  w="full"
                  justify="space-between"
                >
                  <Text fontSize="22px" fontWeight="bold">
                    Template Settings
                  </Text>

                  <Button
                    rounded={30}
                    px="15px"
                    h="45px"
                    bg="primary.400"
                    w={{ base: "full", xl: "initial" }}
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
                </Flex>

                <Flex
                  w="full"
                  direction={{ base: "column", xl: "row" }}
                  gap={{ base: "20px", xl: "70px" }}
                  align="flex-start"
                  pb="40px"
                  borderBottomWidth="2px"
                >
                  <VStack
                    w="300px"
                    align="flex-start"
                    spacing="3px"
                    color="grey.600"
                  >
                    <Text fontSize="18px" fontWeight="500">
                      Settings
                    </Text>
                    <Text fontSize="12px">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </VStack>

                  <VStack
                    w={{ base: "full", xl: "300px" }}
                    align="flex-start"
                    spacing="5px"
                    color="#FFFFFF"
                  >
                    <Text fontSize="13px" fontWeight="500">
                      Set template name
                    </Text>

                    <Field
                      as={Input}
                      id={`$title`}
                      name={`$title`}
                      type="text"
                      variant="filled"
                      fontSize="14px"
                      focusBorderColor="primary.400"
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
                >
                  <VStack
                    w={{ xl: "300px" }}
                    align="flex-start"
                    spacing="3px"
                    color="grey.600"
                  >
                    <Text fontSize="18px" fontWeight="500">
                      Privacy
                    </Text>
                    <Text fontSize="12px">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </VStack>

                  <Flex
                    w={{ base: "full", xl: "initial" }}
                    direction={{ base: "column", xl: "row" }}
                    align="flex-start"
                    gap={{ base: "20px", xl: "50px" }}
                  >
                    <HStack>
                      <Text fontSize="13px" fontWeight="500">
                        Public
                      </Text>
                      <Switch
                        size="md"
                        colorScheme="red"
                        onChange={(e) => setCheckedItems(e.target.checked)}
                      />
                      <Text fontSize="13px" fontWeight="500">
                        Selected users
                      </Text>
                    </HStack>

                    {/* {checkedItems && ( */}
                    <VStack
                      display={checkedItems ? "flex" : "none"}
                      w={{ base: "full", xl: "300px" }}
                      align="flex-start"
                      spacing="5px"
                      color="#FFFFFF"
                    >
                      <Text fontSize="13px" fontWeight="500">
                        Enter email here to share with
                      </Text>

                      <Field
                        as={Input}
                        id={`$email`}
                        name={`$email`}
                        type="email"
                        variant="filled"
                        fontSize="14px"
                        focusBorderColor="primary.400"
                        borderWidth="1px"
                        color="white"
                        _placeholder={{
                          color: "grey",
                          fontSize: "13px",
                        }}
                        placeholder="Enter email address"
                        // onChange={(e: { target: { value: string } }) => {
                        //   setFieldValue(`$title`, e.target.value);
                        // }}
                      />

                      <HStack w="full" justify="flex-end" pt="10px">
                        <Button
                          rounded={15}
                          px="15px"
                          h="40px"
                          borderStyle="dashed"
                          borderWidth="1px"
                          bgColor="#1E1E1E"
                          borderColor="primary.400"
                          w={{ base: "full", xl: "initial" }}
                        >
                          <HStack
                            w="full"
                            justify="center"
                            spacing="8px"
                            color="primary.400"
                          >
                            <Text fontSize="14px" fontWeight="300">
                              Add new user
                            </Text>
                            <Center
                              borderRadius="3px"
                              border="2px"
                              color="primary.400"
                              p="3px"
                            >
                              <AddIcon fontSize="8px" fontWeight="500" />
                            </Center>
                          </HStack>
                        </Button>
                      </HStack>
                    </VStack>
                    {/* )} */}
                  </Flex>
                </Flex>
              </VStack>
            </Flex>
          </Form>
        )}
      </Formik>
    </Body>
  );
};

export default Settings;
