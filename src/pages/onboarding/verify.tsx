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
import {
  ConnectWallet,
  useAddress,
  useLogin,
  useUser,
} from "@thirdweb-dev/react";
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
  useVerifyEmailTokenMutation,
} from "@/redux/api/users/userApi";
import NextImage from "next/image";
import { useRouter } from "next/router";

const Client = () => {
  const address = useAddress();
  const { query, push } = useRouter();
  const token = query.token;

  const RegisterSchema = object().shape({
    fullname: string().required("Please provide a fullname"),
    phone: string().required("Please provide a phone number"),
    email: string().required("Please provide your email address"),
  });

  const [
    verifyEmailToken,
    { isLoading: isRegistering, isSuccess: isRegistered },
  ] = useVerifyEmailTokenMutation();

  useEffect(() => {
    if (token) {
      verifyEmailToken(token as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const toast = useToast();
  const { login } = useLogin();
  const { isLoggedIn, user } = useUser();

  const newContainerHeight = "calc(100vh - 60px)";
  const [showConnectBtn, setShowConnectBtn] = useState(false);

  useEffect(() => {
    if (isRegistered) {
      toast({
        title: "Verification Successfull",
        description: "Welcome to layers!",
        status: "success",
        isClosable: true,
        position: "top",
      });
      if (address) {
        login();
      } else {
        setShowConnectBtn(true);
      }

      if (isLoggedIn) {
        // @ts-ignore
        if (user?.data.userType === "worker") {
          push("/onboarding/freelancer");
        } else {
          push("/onboarding/setup");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast, isRegistered, isLoggedIn]);

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

          <Flex
            w={{ base: "full", xl: "60%" }}
            align="flex-start"
            justify="center"
            gap="20px"
            direction="column"
            pl={{ xl: "90px" }}
            px={{ base: "20px", xl: "90px" }}
            // display={section[1]}
            pb={{ base: "50px", xl: "initial" }}
          >
            <Image as={NextImage} alt="icon" src={MailOrangeIcon} />
            <Text color="grey.600" fontSize={{ base: "14px", "2xl": "16px" }}>
              Verifying email
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </Text>
              {showConnectBtn && <ConnectWallet btnTitle="Sign In" />}
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Client;
