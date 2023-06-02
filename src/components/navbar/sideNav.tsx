import { Text, VStack, HStack, Center, Box, Image } from "@chakra-ui/react";
import BasicCard from "@/components/cards/BasicCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NextImage from "next/image";
import snowIcon from "@/assets/svgs/snow.svg";
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
      spacing='25px'
      fontSize='15px'
      display={{ base: "none", xl: "initial" }}
      color='grey.300'
    >
      <VStack w='full' align='flex-start' spacing='5px'>
        <Box
          color={
            location.pathname.includes("dashboard") || location.pathname.includes("contract")
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

      <Box w='95%'>
        <BasicCard variant='dark' py='30px'>
          <Image as={NextImage} alt='snow' src={snowIcon} />
          <Text
            textTransform='capitalize'
            fontSize={{ md: 14, base: 16 }}
            fontWeight='medium'
            my={2}
            color='primary.200'
          >
            Layers Tip
          </Text>
          <Text color='primary.200' fontSize={{ md: 12, base: 14 }}>
            Review the contract carefully to ensure it meets your needs, make changes directly in
            the fields on the right, and send it for review with just a few clicks. By following
            these pro tips, you can quickly approve contracts and ensure that all necessary changes
            have been made.
          </Text>
        </BasicCard>
      </Box>
    </VStack>
  );
};

export default SideNav;
