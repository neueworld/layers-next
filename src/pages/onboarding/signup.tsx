import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { object, string } from "yup";
import Nav from "@/components/navbar/mainNav";

import locationIcon from "@/assets/svgs/location.svg";
import MailIcon from "@/assets/svgs/mailicon.svg";
import MailOrangeIcon from "@/assets/svgs/mailorange.svg";
import ClientBg from "@/assets/svgs/welcomeclientbg.svg";
import PhoneIcon from "@/assets/svgs/welcomephoneicon.svg";
import ProfileIcon from "@/assets/svgs/welcomeprofilepic.svg";
import TextInput from "@/components/onboarding/TextInput";
import {
  useRegisterUserMutation,
  useResendEmailTokenMutation,
} from "@/redux/api/users/userApi";
import NextImage from "next/image";
import Link from "next/link";

const Client = () => {
  const [section, setSection] = useState(["flex", "none"]);

  const handleNextSection = () => {
    setSection(["none", "flex"]);
  };

  const address = useAddress();

  const RegisterSchema = object().shape({
    fullname: string().required("Please provide a fullname"),
    phone: string().required("Please provide a phone number"),
    email: string().required("Please provide your email address"),
  });

  const [
    registerUser,
    { isLoading: isRegistering, isSuccess: isRegistered, error },
  ] = useRegisterUserMutation();

  const [resendEmail, { isLoading: isResending, isSuccess: isResent }] =
    useResendEmailTokenMutation();

  const [showResendBtn, setShowResendBtn] = useState(true);

  useEffect(() => {
    if (isResent) {
      setShowResendBtn(false);

      setTimeout(() => {
        setShowResendBtn(true);
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResent]);

  const toast = useToast();

  const newContainerHeight = "calc(100vh - 60px)";

  useEffect(() => {
    if (isRegistered) {
      toast({
        title: "Registration Successfull",
        description: "Check your email to verify!",
        status: "success",
        isClosable: true,
        position: "top",
      });

      console.log(error);

      handleNextSection();
    }
  }, [toast, isRegistered]);

  return (
    <Container bg="dark.900" minH="100vh" maxW="100vw" p="0" m="0">
      <Nav />
      <Flex w="full" minH={{ base: "full", xl: newContainerHeight }}>
        <Flex direction={{ base: "column", xl: "row" }} align="center" w="full">
          <VStack
            w={{ base: "full", xl: "40%" }}
            h={{ base: "400px", xl: "full" }}
            align="flex-start"
            spacing="90px"
            // bgImg={ClientBg}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center"
            mb={{ base: "30px", xl: "0px" }}
            className="clientBg"
          >
            <HStack
              align="flex-end"
              pb={{ base: "20px", xl: "80px", "2xl": "100px" }}
              px={{ base: "20px", xl: "50px" }}
              justify="space-between"
              bgGradient="linear-gradient(360deg, #000000 20.95%, rgba(0, 0, 0, 0) 80.98%)"
              w="full"
              h="full"
            >
              <VStack align="flex-start" spacing="15px">
                <Box>
                  <Text
                    fontWeight="medium"
                    fontSize={{ base: "16px", "2xl": "19px" }}
                  >
                    Vineet Yadav
                  </Text>
                  <Text fontSize="13px">Product Manager</Text>
                </Box>

                <HStack>
                  <Image
                    as={NextImage}
                    alt="icon"
                    src={locationIcon}
                    w="20px"
                  />
                  <Text fontSize={{ base: "13px", "2xl": "14px" }}>
                    Fairfax, US
                  </Text>
                </HStack>
              </VStack>

              <VStack
                align="flex-end"
                spacing="0px"
                lineHeight="18px"
                fontSize={{ base: "16px", "2xl": "19px" }}
              >
                <Text fontWeight="medium">TRUSTED BY WORLD</Text>
                <Text fontWeight="medium">LEADING CLIENTS</Text>
              </VStack>
            </HStack>
          </VStack>

          <Formik
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              values.walletAddress = address;

              registerUser(values).unwrap();
            }}
            initialValues={{
              fullname: "",
              phone: "",
              email: "",
              walletAddress: address,
            }}
          >
            {({ errors, touched, values }) => (
              <>
                <Flex
                  w={{ base: "full", xl: "60%" }}
                  // h="full"
                  align="flex-start"
                  justify="center"
                  gap="20px"
                  direction="column"
                  pl={{ xl: "90px" }}
                  px={{ base: "20px", xl: "90px" }}
                  display={section[0]}
                >
                  <Form className="buttonLink">
                    <VStack
                      align="flex-start"
                      spacing="20px"
                      w={{ base: "full", xl: "500px", "2xl": "700px" }}
                    >
                      <Text
                        color="grey.600"
                        fontSize={{ base: "14px", "2xl": "16px" }}
                      >
                        Set up your Layers Account
                      </Text>
                      <VStack w="full" spacing="20px">
                        <TextInput
                          icon={ProfileIcon}
                          name="fullname"
                          placeholder="Fullname"
                          error={errors.fullname}
                          touched={touched.fullname}
                        />
                        <TextInput
                          icon={PhoneIcon}
                          name="phone"
                          placeholder="Phone number"
                          error={errors.phone}
                          touched={touched.phone}
                        />
                        <TextInput
                          icon={MailIcon}
                          name="email"
                          placeholder="Email Address"
                          error={errors.email}
                          touched={touched.email}
                        />
                      </VStack>
                    </VStack>

                    <HStack
                      w={{ base: "full", xl: "500px", "2xl": "700px" }}
                      justify={{ base: "center", xl: "flex-end" }}
                      pb={{ base: "50px", xl: "initial" }}
                      mt={4}
                    >
                      <ConnectWallet
                        btnTitle="Connect Wallet"
                        className="customConnectButton"
                        auth={{
                          loginOptional: true,
                        }}
                      />
                      <Button
                        rounded={30}
                        px="15px"
                        type="submit"
                        h="45px"
                        bg="primary.400"
                        w={{ base: "full", xl: "initial" }}
                        isLoading={isRegistering}
                      >
                        <HStack w="full" justify="center" spacing="5px">
                          <Text fontSize="14px">Confirm</Text>

                          <Center
                            border="2px"
                            borderColor="white"
                            w="16px"
                            h="16px"
                            borderRadius="50%"
                          >
                            <ChevronRightIcon fontSize="12px" />
                          </Center>
                        </HStack>
                      </Button>
                    </HStack>
                  </Form>
                </Flex>
                <Flex
                  w={{ base: "full", xl: "60%" }}
                  align="flex-start"
                  justify="center"
                  gap="20px"
                  direction="column"
                  pl={{ xl: "90px" }}
                  px={{ base: "20px", xl: "90px" }}
                  display={section[1]}
                  pb={{ base: "50px", xl: "initial" }}
                >
                  <Image as={NextImage} alt="icon" src={MailOrangeIcon} />
                  <Text
                    color="grey.600"
                    fontSize={{ base: "14px", "2xl": "16px" }}
                  >
                    Verify your email address
                  </Text>

                  <VStack
                    align="flex-start"
                    spacing="5px"
                    color="grey.600"
                    w={{ base: "full", xl: "400px" }}
                  >
                    <Text
                      fontWeight="500"
                      w="270px"
                      lineHeight="19px"
                      fontSize={{ base: "17px", "2xl": "19px" }}
                    >
                      Click the link in your email to verify your email address
                    </Text>

                    <Text
                      fontSize="13px"
                      lineHeight="16px"
                      w={{ base: "full", xl: "400px" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut
                    </Text>
                  </VStack>

                  {showResendBtn ? (
                    <Button
                      onClick={() => resendEmail(values.email)}
                      type="button"
                      bg="transparent"
                      isLoading={isResending}
                    >
                      <Text color="primary.400" fontSize="14px">
                        Resend email
                      </Text>
                    </Button>
                  ) : (
                    <Text color="primary.400" fontSize="14px">
                      Try again after 5 minutes
                    </Text>
                  )}
                </Flex>
              </>
            )}
          </Formik>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Client;
