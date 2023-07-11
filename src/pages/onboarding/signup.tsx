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
  useColorMode,
} from "@chakra-ui/react";

import ReachLink from "next/link";
// import { Link as ReachLink } from 'react-router-dom';
import globeIcon from "@/assets/svgs/globe.svg";
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
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import Link from "next/link";
import { useRouter } from "next/router";

const Client = () => {
  const { colorMode } = useColorMode();
  const [section, setSection] = useState(["flex", "none"]);
  const { query } = useRouter();
  const userType = query.usertype;

  console.log("\x1b[31m%s\x1b[0m", "signup.tsx line:39 query", query, userType);

  const [val, setVal] = useState("");

  const handleNextSection = () => {
    setSection(["none", "flex"]);
  };

  const address = useAddress();

  const RegisterSchema = object().shape({
    fullname: string().required("Please provide a fullname"),
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

  interface Country {
    value: string;
    label: string;
  }

  const countries: Country[] = [
    { value: "uI/UX", label: "UI/UX" },
    { value: "frontend", label: "Frontend" },
    { value: "react.Js", label: "React.Js" },
    { value: "web3", label: "Web3" },
    { value: "blockchain", label: "Blockchain" },
    { value: "visual design", label: "Visual design" },
    { value: "motion graphics", label: "Motion graphics" },
  ];

  const [pickerItems, setPickerItems] = useState<Country[]>(countries);
  const [selectedItems, setSelectedItems] = useState<Country[]>([]);

  const handleCreateItem = (item: Country) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems: Country[] | any) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  const customCreateItemRender = (value: any) => {
    return (
      <Text>
        <Box as="span">Add</Box>{" "}
        <Box as="span" bg="green" fontWeight="bold">
          &quot;{value}&quot;
        </Box>
      </Text>
    );
  };

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
              values.userType = userType as string;

              registerUser(values).unwrap();
            }}
            initialValues={{
              fullname: "",
              email: "",
              walletAddress: address,
              userType: userType as string,
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


            <VStack
              align="flex-start"
              spacing="10px"
              w="full"
              display={section[3]}
            >
              <CUIAutoComplete
                createItemRenderer={customCreateItemRender}
                label="Choose preferred work locations"
                labelStyleProps={{
                  display: "none",
                  pt: "0px",
                }}
                placeholder="
                Type here to add skills"
                onCreateItem={handleCreateItem}
                items={pickerItems}
                toggleButtonStyleProps={{
                  display: "none",
                }}
                tagStyleProps={{
                  display: "none",
                }}
                inputStyleProps={{
                  rounded: "10px",
                  w: "300px",
                  variant: "filled",
                  borderRadius: "10px",
                  _placeholder: {
                    fontSize: "14px",
                    fontWeight: "medium",
                  },
                  _hover: {
                    bg: "grey.500",
                  },
                  size: "md",
                  bg: "grey.500",
                  mb: "0px",
                }}
                listStyleProps={{
                  rounded: "10px",
                  bg: "dark.400",
                  px: "15px",
                  fontSize: "14px",
                }}
                listItemStyleProps={{
                  _hover: { bg: "dark.400" },
                  m: "0px",
                  borderBottom: "1px",
                  borderColor: "grey.400",
                }}
                highlightItemBg="dark.400"
                selectedItems={selectedItems}
                onSelectedItemsChange={(changes) =>
                  handleSelectedItemsChange(changes.selectedItems)
                }
              />
              {/* <InputGroup>
                <Input
                  variant='filled'
                  borderRadius='10px'
                  placeholder='Add location'
                  _placeholder={{
                    fontSize: "14px",
                  }}
                  w='full'
                  size='md'
                />

                <InputRightElement>
                  <Popover onOpen={hideActionButton} onClose={showActionButton}>
                    <PopoverTrigger>
                      <ChevronDownIcon w='14px' />
                    </PopoverTrigger>

                    <PopoverContent
                      w='300px'
                      ml='-260px'
                      mt='10px'
                      borderRadius='10px'
                      bg='dark.400'
                    >
                      <PopoverBody>
                        <VStack alignItems='flex-start' overflowX='hidden' className='overflow'>
                          <VStack
                            alignItems='flex-start'
                            fontSize='13px'
                            py='10px'
                            h='150px'
                            w='full'
                          >
                            <Text borderBottom='1px' borderColor='grey.400' w='full'>
                              Test
                            </Text>
                            <Text borderBottom='1px' borderColor='grey.400' w='full'>
                              Test
                            </Text>
                            <Text borderBottom='1px' borderColor='grey.400' w='full'>
                              Test
                            </Text>
                            <Text borderBottom='1px' borderColor='grey.400' w='full'>
                              Test
                            </Text>
                            <Text borderBottom='1px' borderColor='grey.400' w='full'>
                              Test
                            </Text>
                            <Text borderBottom='1px' borderColor='grey.400' w='full'>
                              Test
                            </Text>
                            <Text borderBottom='1px' borderColor='grey.400' w='full'>
                              Test
                            </Text>
                          </VStack>
                        </VStack>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </InputRightElement>
              </InputGroup> */}

              <HStack w="full" justify={{ base: "center", xl: "flex-end" }}>
                <Link as={ReachLink} href="/" h="40px" textDecoration="none">
                  <Button
                    rounded={25}
                    px="15px"
                    h="40px"
                    w={{ base: "full", xl: "initial" }}
                    bg="primary.700"
                    display={action}
                    mt="-20px"
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
                </Link>
              </HStack>
            </VStack>
          </VStack>

          <VStack
            align="flex-start"
            spacing="15px"
            w={{ base: "full", xl: "initial" }}
          >
            <VStack align="flex-start" spacing="-15px">
              <Box pl="30px">
                <Avatar size="xl">
                  <AvatarBadge borderWidth="2px" bg="purple" boxSize="30px" />
                </Avatar>
              </Box>

              <VStack
                borderRadius="10px"
                borderWidth="1px"
                borderColor="grey.500"
                align="flex-start"
                px="20px"
                pb="20px"
                pt="30px"
                spacing="20px"
                w={{ base: "full", xl: "350px" }}
              >
                <Text fontWeight="bold" fontSize="18px">
                  Vinnet
                </Text>

                <HStack spacing="20px" w="full">
                  <HStack>
                    <Image
                      as={NextImage}
                      alt="icon"
                      src={locationIcon}
                      w="15px"
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


            <VStack
              align="flex-start"
              spacing="5px"
              w={{ base: "full", xl: "350px" }}
              display={section[3]}
            >
              <Text fontSize="11px" fontWeight="700" color="grey.300">
                ADDED SKILLS
              </Text>

              <VStack
                borderRadius="10px"
                borderWidth="1px"
                borderColor="grey.500"
                align="flex-start"
                p="20px"
                display={selectedItems.length !== 0 ? "flex" : "none"}
              >
                <Wrap
                  spacingX="10px"
                  spacingY="10px"
                  pr={{ xl: "50px" }}
                  fontSize="13px"
                >
                  {selectedItems.map((item, value) => {
                    return (
                      <WrapItem key={value}>
                        <Center
                          py="5px"
                          px="10px"
                          borderRadius="30px"
                          border="1px"
                          borderColor="white"
                        >
                          <Text>{item.label}</Text>
                        </Center>
                      </WrapItem>
                    );
                  })}
                </Wrap>
              </VStack>
            </VStack>
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
