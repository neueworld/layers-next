import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  Center,
  InputGroup,
  InputRightElement,
  Image,
  HStack,
  Input,
  VStack,
  Text,
  Box,
  Avatar,
  AvatarBadge,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  WrapItem,
  Wrap,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import ReachLink from "next/link";
// import { Link as ReachLink } from 'react-router-dom';
import globeIcon from "@/assets/svgs/globe.svg";
import locationIcon from "@/assets/svgs/location.svg";
import ProfileIcon from "@/assets/svgs/welcomeprofilepic.svg";
import Body from "@/components/common/Body";
import NextImage from "next/image";
import { CUIAutoComplete } from "chakra-ui-autocomplete";

const SignUp = () => {
  const [action, setAction] = useState("flex");

  const [section, setSection] = useState([
    "finish setting up your account",
    "50%",
    "flex",
    "none",
  ]);

  const [address, setAddress] = useState("Add your location");
  const [portfolio, setPortfolio] = useState("Add portfolio link");

  const [val, setVal] = useState("");

  const handleNextSection = () => {
    setSection(["add your skills", "85%", "none", "flex"]);
  };

  const showActionButton = () => {
    setAction("flex");
  };

  const hideActionButton = () => {
    setAction("none");
  };

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
    <Body>
      <Flex
        align="center"
        justify="center"
        h={{ base: "full", xl: "calc(100vh - 60px)" }}
        py={{ base: "50px", "2xl": "initial" }}
      >
        <Flex
          bg="grey.400"
          align="center"
          direction={{ base: "column", xl: "row" }}
          borderRadius="30px"
          p={{ base: "25px", xl: "40px", "2xl": "70px" }}
          gap="50px"
          pb={{ base: "60px", "2xl": "90px" }}
        >
          <VStack
            align="flex-start"
            w={{ base: "full", xl: "300px" }}
            spacing="20px"
          >
            <VStack align="flex-start" spacing="5px" color="grey.600">
              <Text
                fontWeight="500"
                lineHeight={{ base: "19px", "2xl": "24px" }}
                fontSize={{ base: "18px", "2xl": "24px" }}
              >
                Welcome to Layers, Vineet
              </Text>

              <Text fontSize={{ base: "14px", xl: "13px" }} lineHeight="14px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </VStack>

            <VStack align="flex-start" spacing="5px" w="full">
              <Text
                fontSize={{ base: "14px", xl: "13px" }}
                fontWeight="500"
                textTransform="uppercase"
              >
                {section[0]}
              </Text>
              <Box w="full" h="2px" bg="white" borderRadius="10px">
                <Box w={section[1]} h="full" bg="primary.400" />
              </Box>
            </VStack>

            <VStack
              align="flex-start"
              spacing="10px"
              w="full"
              display={section[2]}
            >
              <InputGroup>
                <Input
                  variant="filled"
                  borderRadius="10px"
                  placeholder="Your full name"
                  _placeholder={{
                    fontSize: "14px",
                  }}
                  w="full"
                  size="md"
                  type="text"
                />

                <InputRightElement>
                  <Image as={NextImage} alt="icon" src={ProfileIcon} w="15px" />
                </InputRightElement>
              </InputGroup>

              <InputGroup>
                <Input
                  variant="filled"
                  borderRadius="10px"
                  placeholder="Add location"
                  _placeholder={{
                    fontSize: "14px",
                  }}
                  w="full"
                  size="md"
                  type="tel"
                  onChange={(e: { target: { value: string } }) => {
                    setAddress(e.target.value);
                  }}
                />

                <InputRightElement>
                  <Image
                    as={NextImage}
                    alt="icon"
                    src={locationIcon}
                    w="15px"
                  />
                </InputRightElement>
              </InputGroup>

              <InputGroup>
                <Input
                  variant="filled"
                  borderRadius="10px"
                  placeholder="Add portfolio link"
                  _placeholder={{
                    fontSize: "14px",
                  }}
                  w="full"
                  size="md"
                  type="email"
                  onChange={(e: { target: { value: string } }) => {
                    setPortfolio(e.target.value);
                  }}
                />

                <InputRightElement>
                  <Image as={NextImage} alt="icon" src={globeIcon} w="15px" />
                </InputRightElement>
              </InputGroup>

              <HStack w="full" justify={{ base: "center", xl: "flex-end" }}>
                <Button
                  rounded={25}
                  px="15px"
                  w={{ base: "full", xl: "initial" }}
                  h="40px"
                  bg="primary.700"
                  onClick={handleNextSection}
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
            </VStack>

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

                    <Text
                      color="grey.300"
                      fontWeight="medium"
                      fontSize={{ base: "11px", xl: "13px" }}
                      w={{ base: "100px", xl: "150px" }}
                    >
                      {address}
                    </Text>
                  </HStack>

                  <HStack>
                    <Image
                      as={NextImage}
                      alt="icon"
                      src={globeIcon}
                      w={{ base: "12px", xl: "15px" }}
                    />
                    <Text
                      color="grey.300"
                      fontWeight="medium"
                      fontSize={{ base: "11px", xl: "13px" }}
                      w={{ base: "100px", xl: "150px" }}
                    >
                      {portfolio}
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
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
        </Flex>
      </Flex>
    </Body>
  );
};

export default SignUp;
