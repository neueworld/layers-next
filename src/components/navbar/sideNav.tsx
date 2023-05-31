import { Text, VStack, HStack, Center, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
  const [activeClass, setActiveClass] = useState("");

  const handleClick = () => {
    setActiveClass("contracts");
  };

  const handleClick2 = () => {
    setActiveClass("templates");
  };

  const location = useRouter();

  return (
    <VStack
      w='full'
      align='flex-start'
      spacing='5px'
      fontSize='15px'
      display={{ base: "none", xl: "initial" }}
      color='grey.300'
    >
      <Box
        color={
          location.pathname.includes("dashboard") ||
          location.pathname == "/" ||
          location.pathname.includes("contract")
            ? "primary.400"
            : ""
        }
        // className={activeClass === 'contracts' ? 'navLink' : ''}
      >
        <Link href='/dashboard'>
          <Text
            fontWeight='medium'
            // onClick={handleClick}
            _hover={{ color: "primary.400", transition: "0.2s ease-in-out" }}
          >
            My Contracts
          </Text>
        </Link>
      </Box>

      <HStack align='flex-end'>
        <Text fontWeight='medium'>Discover</Text>
        <Center opacity='0.6' bgColor='grey.300' rounded={6} px='5px' h='18px'>
          <Text fontSize='10px' color='white'>
            Coming Soon
          </Text>
        </Center>
      </HStack>

      <Box
        color={`${location.pathname.includes("templates") && "primary.400"}`}
        // onClick={handleClick2}
        // className={activeClass === 'templates' ? 'navLink' : ''}
        // className="navLink"
      >
        <Link href='/templates'>
          <Text
            fontWeight='medium'
            _hover={{
              color: "primary.400",
              transition: "0.2s ease-in-out",
            }}
            _active={{
              color: "primary.400",
            }}
          >
            Explore Templates
          </Text>
        </Link>
      </Box>

      <HStack align='flex-end'>
        <Text fontWeight='medium'>Messages</Text>
        <Center opacity='0.6' bgColor='grey.300' rounded={6} px='5px' h='18px'>
          <Text fontSize='10px' color='white'>
            Coming Soon
          </Text>
        </Center>
      </HStack>

      <HStack align='flex-end'>
        <Text fontWeight='medium'>Invoices</Text>
        <Center opacity='0.6' bgColor='grey.300' rounded={6} px='5px' h='18px'>
          <Text fontSize='10px' color='white'>
            Coming Soon
          </Text>
        </Center>
      </HStack>

      <Text fontWeight='medium' opacity='0.6'>
        Settings
      </Text>
    </VStack>
  );
};

export default SideNav;
