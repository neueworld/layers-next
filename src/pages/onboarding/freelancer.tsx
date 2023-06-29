import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Nav from "@/components/navbar/mainNav";

import EyeIcon from "@/assets/svgs/eyeicon.svg";
import MailIcon from "@/assets/svgs/mailicon.svg";
import MailOrangeIcon from "@/assets/svgs/mailorange.svg";
import SignupIcon1 from "@/assets/svgs/signupicon1.svg";
import SignupIcon2 from "@/assets/svgs/signupicon2.svg";
import SignupIcon3 from "@/assets/svgs/signupicon3.svg";
import WelcomePic from "@/assets/svgs/welcomepic.svg"; //Don't export png pictures are svgs. are always heavier. //TODO @alex
import NextImage from "next/image";
import { useUser } from "@thirdweb-dev/react";
import { useUpdateUserInfoMutation } from "@/redux/api/users/userApi";
import { useRouter } from "next/router";

const Freelancer = () => {
  const { user } = useUser();
  const router = useRouter();
  const greyColor = "grey.400";
  const primaryColor = "primary.700";

  const [progressBar, setProgressBar] = useState([
    greyColor,
    "one",
    "Sign up as a freelancer",
    "flex",
    "none",
    greyColor,
    "none",
  ]);

  const handleProgressBar = () => {
    setProgressBar([
      "white",
      "two",
      "Setup your layers account",
      "none",
      "flex",
      "grey.400",
      "none",
    ]);
  };

  const newContainerWidth = "calc(85vw / 3)";
  const newContainerHeight = "calc(100vh - 60px)";

  const handleSecondProgressBar = () => {
    setProgressBar([
      "white",
      "Three",
      "Verify your account",
      "none",
      "none",
      "white",
      "flex",
    ]);
  };

  const interests = [
    "Design",
    "Web3",
    "Writing",
    "Mobile",
    "Marketing",
    "Finance",
    "Research",
    "Literature",
  ];

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const [updateUserInfo, { isLoading, isSuccess }] =
    useUpdateUserInfoMutation();

  useEffect(() => {
    if (isSuccess) {
      router.push("/onboarding/setup");
    }
  }, [isSuccess, router]);

  return (
    <Container bg="dark.900" minH="100vh" maxW="100vw" p="0" m="0">
      <Nav />
      <Flex w="full" minH={{ base: "full", xl: newContainerHeight }}>
        <Flex direction={{ base: "column", xl: "row" }} align="center" w="full">
          <VStack
            w={{ base: "full", xl: "40%" }}
            h="full"
            align="flex-start"
            // spacing="60px"
            px={{ base: "20px", xl: "initial" }}
            py={{ base: "30px", "2xl": "80px" }}
            justify="space-between"
            bg={{
              base: "dark.400",
              xl: "linear-gradient(270deg, #020202 -3.75%, rgba(2, 2, 2, 0) 71.62%)",
            }}
          >
            <Box pl="40px" display={{ base: "none", xl: "initial" }}>
              <Text
                fontWeight="500"
                w={{ base: "320px", "2xl": "430px" }}
                fontSize={{ base: "initial", "2xl": "22px" }}
              >
                TRUSTED BY WORLD LEADING BLOCKCHAIN FREELANCERS AND CLIENTS
              </Text>
            </Box>

            <Box
              display={{ base: "none", xl: "initial" }}
              w="full"
              h="50%"
              // bgImg={WelcomePic}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPos="center"
              className="freelancerBg"
            >
              <Box
                w="full"
                h="full"
                bgGradient="linear-gradient(270deg, #020202 -3.75%, rgba(2, 2, 2, 0) 71.62%)"
              />
            </Box>

            <VStack w="full" align="flex-start" pl={{ xl: "40px" }}>
              <VStack align="flex-start" spacing="3px">
                <HStack>
                  <Box
                    minW={{ base: newContainerWidth, xl: "90px" }}
                    h="4px"
                    bg=" white"
                  />
                  <Box
                    minW={{ base: newContainerWidth, xl: "90px" }}
                    h="4px"
                    bg={progressBar[0]}
                  />
                  <Box
                    minW={{ base: newContainerWidth, xl: "90px" }}
                    h="4px"
                    bg={progressBar[5]}
                  />
                </HStack>

                <Text
                  textTransform="uppercase"
                  color="grey.100"
                  fontWeight="500"
                  fontSize="12px"
                >
                  step {progressBar[1]}
                </Text>
              </VStack>

              <VStack
                align="flex-start"
                spacing="3px"
                color="grey.600"
                w={{ base: "full", xl: "400px" }}
              >
                <Text
                  fontWeight="500"
                  fontSize={{ base: "initial", "2xl": "22px" }}
                >
                  {progressBar[2]}
                </Text>
                <Text
                  fontSize={{ base: "13px", "2xl": "14px" }}
                  lineHeight="16px"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </Text>
              </VStack>
            </VStack>
          </VStack>

          <Flex
            w={{ base: "full", xl: "60%" }}
            align="flex-start"
            justify="center"
            gap="30px"
            direction="column"
            pl={{ xl: "90px" }}
            px={{ base: "20px", xl: "90px" }}
            display={progressBar[3]}
          >
            <VStack
              align="flex-start"
              spacing="5px"
              w={{ base: "full", xl: "500px" }}
            >
              <Text color="grey.600" fontSize={{ base: "14px", "2xl": "16px" }}>
                Welcome to Layers
              </Text>
              <HStack w="full" fontSize={{ base: "initial", "2xl": "18px" }}>
                <Text as="span">
                  Hello
                  {"  "}
                  <Text as="span" color="primary.400">
                    {/* @ts-ignore */}
                    {user?.data.fullname}{" "}
                  </Text>
                  <Text as="span"> , What are you interested in?</Text>
                </Text>
              </HStack>
            </VStack>

            <SimpleGrid
              columns={{ base: 2, xl: 3 }}
              spacing="20px"
              w={{ base: "full", xl: "500px", "2xl": "700px" }}
              fontSize="14px"
              fontWeight="medium"
            >
              {interests.map((interest) => {
                return (
                  <VStack
                    key={interest}
                    _hover={{ borderColor: primaryColor, borderWidth: "1px" }}
                    bg={greyColor}
                    borderRadius="5px"
                    borderColor={
                      selectedInterests.includes(interest)
                        ? primaryColor
                        : greyColor
                    }
                    borderWidth="1px"
                    p="10px"
                    align="flex-start"
                    justify="space-between"
                    onClick={() => {
                      if (!selectedInterests.includes(interest)) {
                        setSelectedInterests((i) => [interest, ...i]);
                      } else {
                        setSelectedInterests(
                          selectedInterests.filter((item) => item !== interest)
                        );
                      }
                    }}
                  >
                    <Image
                      alt="icon"
                      as={NextImage}
                      src={SignupIcon1}
                      w="30px"
                    />
                    <Text>{interest}</Text>
                  </VStack>
                );
              })}
            </SimpleGrid>

            <HStack
              w={{ base: "full", xl: "500px", "2xl": "700px" }}
              justify={{ base: "center", xl: "flex-end" }}
              pb={{ base: "50px", xl: "initial" }}
            >
              <Button
                isLoading={isLoading}
                rounded={30}
                px="15px"
                w={{ base: "full", xl: "initial" }}
                h="45px"
                bg="primary.700"
                onClick={() => {
                  updateUserInfo({
                    walletAddress: user?.address,
                    interests: selectedInterests,
                  });
                }}
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
          </Flex>

          <Flex
            w={{ base: "full", xl: "60%" }}
            align="flex-start"
            justify="center"
            gap="20px"
            direction="column"
            pl={{ xl: "90px" }}
            px={{ base: "20px", xl: "90px" }}
            display={progressBar[6]}
            pb={{ base: "50px", xl: "initial" }}
          >
            <Image alt="icon" as={NextImage} src={MailOrangeIcon} />
            <Text color="grey.600" fontSize={{ base: "14px", "2xl": "16px" }}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </Text>
            </VStack>

            <Text color="primary.700" fontSize="14px">
              Resend email
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Freelancer;
