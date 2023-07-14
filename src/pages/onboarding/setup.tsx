import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
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
  Select,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReachLink from 'next/link';
// import { Link as ReachLink } from 'react-router-dom';

import globeIcon from '@/assets/svgs/globe.svg';
import locationIcon from '@/assets/svgs/location.svg';
import ProfileIcon from '@/assets/svgs/welcomeprofilepic.svg';
import Body from '@/components/common/Body';
import NextImage from 'next/image';
import { useUpdateUserInfoMutation } from '@/redux/api/users/userApi';
import { Formik, Form, Field } from 'formik';
import { useUser } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';

const SignUp = () => {
  const [action, setAction] = useState('flex');

  const [section, setSection] = useState([
    'finish setting up your account',
    '50%',
    'flex',
    'none',
  ]);

  const [address, setAddress] = useState('Add your location');
  const [portfolio, setPortfolio] = useState('Add portfolio link');

  const handlePrevSection = () => {
    if (section[0] === 'finish setting up your account') {
      router.push('/onboarding/freelancer');
    } else {
      // setSection(["add your skills", "85%", "none", "flex"]);
      setSection(['finish setting up your account', '50%', 'flex', 'none']);
    }
  };

  const showActionButton = () => {
    setAction('flex');
  };

  const hideActionButton = () => {
    setAction('none');
  };

  const initialValuesA = {
    skills: [''],
    location: '',
    portfolio: '',
  };

  const [updateUserInfo, { isLoading, isSuccess, data }] =
    useUpdateUserInfoMutation();

  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push('/dashboard');
      console.log(data);
    }
  }, [isSuccess, router]);

  const handleNextSection = () => {
    // @ts-ignore
    if (user?.data.userType === 'client') {
      router.push('/dashboard');
    } else {
      setSection(['add your skills', '85%', 'none', 'flex']);
    }
  };

  console.log(user?.data);

  interface Country {
    value: string;
    label: string;
  }

  const countries: Country[] = [
    { value: 'UI/UX', label: 'UI/UX' },
    { value: 'Frontend', label: 'Frontend' },
    { value: 'React.Js', label: 'React.Js' },
    { value: 'Web3', label: 'Web3' },
    { value: 'Blockchain', label: 'Blockchain' },
    { value: 'Visual design', label: 'Visual design' },
    { value: 'Motion graphics', label: 'Motion graphics' },
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
        <Box as="span">Add</Box>{' '}
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
        h={{ base: 'full', xl: 'calc(100vh - 60px)' }}
        py={{ base: '50px', '2xl': 'initial' }}
      >
        <Formik
          onSubmit={(values) => {
            console.log(values, 'submit');

            const skills: string[] = [];

            selectedItems.forEach((item) => skills.push(item.value));

            console.log(skills);

            updateUserInfo({
              walletAddress: user?.address,
              skills: skills,
              location: values.location,
              portfolio: values.portfolio,
            });
          }}
          initialValues={initialValuesA}
        >
          {({ values }) => (
            <Form>
              <Flex
                bg="grey.400"
                align="center"
                direction={{ base: 'column', xl: 'row' }}
                borderRadius="30px"
                p={{ base: '25px', xl: '40px', '2xl': '70px' }}
                gap="50px"
                pb={{ base: '60px', '2xl': '90px' }}
              >
                <VStack
                  align="flex-start"
                  w={{ base: 'full', xl: '300px' }}
                  spacing="20px"
                >
                  <VStack align="flex-start" spacing="5px" color="grey.600">
                    <Text
                      fontWeight="500"
                      lineHeight={{ base: '19px', '2xl': '24px' }}
                      fontSize={{ base: '18px', '2xl': '24px' }}
                    >
                      Welcome to Layers, Vineet
                    </Text>

                    <Text
                      fontSize={{ base: '14px', xl: '13px' }}
                      lineHeight="14px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </VStack>

                  <VStack align="flex-start" spacing="5px" w="full">
                    <Text
                      fontSize={{ base: '14px', xl: '13px' }}
                      fontWeight="500"
                      textTransform="uppercase"
                    >
                      {section[0]}
                    </Text>
                    <Box w="full" h="2px" bg="white" borderRadius="10px">
                      <Box w={section[1]} h="full" bg="primary.700" />
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
                        as={Field}
                        variant="filled"
                        borderRadius="10px"
                        placeholder="Add location"
                        name="location"
                        _placeholder={{
                          fontSize: '14px',
                        }}
                        w="full"
                        size="md"
                        type="tel"
                      />

                      <InputRightElement>
                        <Image
                          as={NextImage}
                          alt="icon"
                          src={ProfileIcon}
                          w="15px"
                        />
                      </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                      <Input
                        as={Field}
                        name="portfolio"
                        variant="filled"
                        borderRadius="10px"
                        placeholder="Add portfolio link"
                        _placeholder={{
                          fontSize: '14px',
                        }}
                        w="full"
                        size="md"
                        type="url"
                      />

                      <InputRightElement>
                        <Image
                          as={NextImage}
                          alt="icon"
                          src={globeIcon}
                          w="15px"
                        />
                      </InputRightElement>
                    </InputGroup>
                    {/* <Select
                  variant="filled"
                  placeholder="Select option"
                  _placeholder={{
                    fontSize: '14px',
                  }}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select> */}
                    <HStack
                      w="full"
                      justify={{ base: 'center', xl: 'space-between' }}
                    >
                      <HStack
                        cursor="pointer"
                        onClick={() => {
                          handlePrevSection();
                        }}
                        _hover={{
                          color: 'primary.700',
                          transition: '0.2s ease-in-out',
                        }}
                        // display={section[3] === "flex" ? "flex" : "none"}
                        w="max-content"
                      >
                        <ChevronLeftIcon />
                        <Text fontSize="14px" fontWeight="medium">
                          Back
                        </Text>
                      </HStack>

                      <Button
                        rounded={25}
                        px="15px"
                        w={{ base: 'full', xl: 'initial' }}
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
                    <Box mt="-15px" mb="-25px">
                      <CUIAutoComplete
                        createItemRenderer={customCreateItemRender}
                        label="Choose preferred work locations"
                        labelStyleProps={{
                          display: 'none',
                          pt: '0px',
                        }}
                        placeholder="Type here to add skills"
                        onCreateItem={handleCreateItem}
                        items={pickerItems}
                        toggleButtonStyleProps={{
                          display: 'none',
                        }}
                        tagStyleProps={{
                          display: 'none',
                        }}
                        inputStyleProps={{
                          rounded: '10px',
                          w: '300px',
                          variant: 'filled',
                          borderRadius: '10px',
                          _placeholder: {
                            fontSize: '14px',
                            fontWeight: 'medium',
                          },
                          _hover: {
                            bg: 'grey.500',
                          },
                          size: 'md',
                          bg: 'grey.500',
                          mb: '0px',
                        }}
                        listStyleProps={{
                          rounded: '10px',
                          bg: 'dark.400',
                          px: '15px',
                          fontSize: '14px',
                        }}
                        listItemStyleProps={{
                          _hover: { bg: 'dark.400' },
                          m: '0px',
                          borderBottom: '1px',
                          borderColor: 'grey.400',
                        }}
                        highlightItemBg="dark.400"
                        selectedItems={selectedItems}
                        onSelectedItemsChange={(changes) =>
                          handleSelectedItemsChange(changes.selectedItems)
                        }
                      />
                    </Box>

                    <HStack
                      w="full"
                      // justifyContent={{ base: "center", xl: "flex-end" }}
                      justifyContent={{ base: 'center', xl: 'space-between' }}
                    >
                      <HStack
                        cursor="pointer"
                        onClick={() => {
                          handlePrevSection();
                        }}
                        _hover={{
                          color: 'primary.700',
                          transition: '0.2s ease-in-out',
                        }}
                        // display={section[3] === "flex" ? "flex" : "none"}
                        w="max-content"
                      >
                        <ChevronLeftIcon />
                        <Text fontSize="14px" fontWeight="medium">
                          Back
                        </Text>
                      </HStack>

                      <Button
                        type="submit"
                        rounded={25}
                        px="15px"
                        h="40px"
                        w={{ base: 'full', xl: 'initial' }}
                        bg="primary.700"
                        display={action}
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
                </VStack>

                <VStack
                  align="flex-start"
                  spacing="15px"
                  w={{ base: 'full', xl: 'initial' }}
                >
                  <VStack align="flex-start" spacing="-15px">
                    <Box pl="30px">
                      <Avatar size="xl">
                        <AvatarBadge
                          borderWidth="2px"
                          bg="tomato"
                          boxSize="30px"
                        />
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
                      w={{ base: 'full', xl: '350px' }}
                    >
                      <Text fontWeight="bold" fontSize="18px">
                        Vinnet
                      </Text>

                      <HStack spacing="20px" w="full">
                        <HStack>
                          <Image
                            as={NextImage}
                            src={locationIcon}
                            w={{ base: '12px', xl: '15px' }}
                          />

                          <Text
                            color="grey.300"
                            fontWeight="medium"
                            fontSize={{ base: '11px', xl: '13px' }}
                            w={{ base: '100px', xl: '150px' }}
                          >
                            {values.location}
                          </Text>
                        </HStack>

                        <HStack>
                          <Image
                            as={NextImage}
                            alt="icon"
                            src={globeIcon}
                            w={{ base: '12px', xl: '15px' }}
                          />
                          <Text
                            noOfLines={3}
                            color="grey.300"
                            fontWeight="medium"
                            fontSize={{ base: '11px', xl: '13px' }}
                            // maxW={{ base: 'max-content' }}
                            w="100px"
                          >
                            {values.portfolio}
                          </Text>
                        </HStack>
                      </HStack>
                    </VStack>
                  </VStack>

                  <VStack
                    align="flex-start"
                    spacing="5px"
                    w={{ base: 'full', xl: '350px' }}
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
                      display={selectedItems.length !== 0 ? 'flex' : 'none'}
                    >
                      <Wrap
                        spacingX="10px"
                        spacingY="10px"
                        pr={{ xl: '50px' }}
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
            </Form>
          )}
        </Formik>
      </Flex>
    </Body>
  );
};

export default SignUp;
