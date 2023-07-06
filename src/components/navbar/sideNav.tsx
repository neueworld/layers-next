import {
  Text,
  VStack,
  HStack,
  Center,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import BasicCard from "@/components/cards/BasicCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NextImage from "next/image";
import snowIcon from "@/assets/svgs/snow.svg";
import profileIcon from "@/assets/svgs/profile.svg";
import { profile } from "console";
// import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
  const location = useRouter();

  return (
    <VStack
      w="full"
      align="flex-start"
      spacing="25px"
      fontSize="15px"
      display={{ base: "none", xl: "initial" }}
      color="grey.300"
      fontFamily="Aqsa"
    >
      <VStack w="full" align="flex-start" spacing="5px">
        <Box
          color={
            location.pathname.includes("dashboard") ||
            location.pathname.includes("contract")
              ? "primary.700"
              : ""
          }
        >
          <Link href="/dashboard">
            <Text
              fontWeight="medium"
              _hover={{ color: "primary.700", transition: "0.2s ease-in-out" }}
            >
              My Contracts
            </Text>
          </Link>
        </Box>

        <HStack align="flex-end">
          <Text fontWeight="medium">Discover</Text>
          <Center
            opacity="0.6"
            bgColor="grey.300"
            rounded={6}
            px="5px"
            h="18px"
          >
            <Text fontSize="10px" color="white">
              Coming Soon
            </Text>
          </Center>
        </HStack>

        <Box
          color={`${location.pathname.includes("templates") && "primary.700"}`}
        >
          <Link href="/templates">
            <Text
              fontWeight="medium"
              _hover={{
                color: "primary.700",
                transition: "0.2s ease-in-out",
              }}
              _active={{
                color: "primary.700",
              }}
            >
              Explore Templates
            </Text>
          </Link>
        </Box>

        <HStack align="flex-end">
          <Text fontWeight="medium">Messages</Text>
          <Center
            opacity="0.6"
            bgColor="grey.300"
            rounded={6}
            px="5px"
            h="18px"
          >
            <Text fontSize="10px" color="white">
              Coming Soon
            </Text>
          </Center>
        </HStack>

        <HStack align="flex-end">
          <Text fontWeight="medium">Invoices</Text>
          <Center
            opacity="0.6"
            bgColor="grey.300"
            rounded={6}
            px="5px"
            h="18px"
          >
            <Text fontSize="10px" color="white">
              Coming Soon
            </Text>
          </Center>
        </HStack>

        <Box
          color={`${location.pathname.includes("accounts") && "primary.700"}`}
        >
          <Link href="/accounts">
            <Text
              fontWeight="medium"
              _hover={{
                color: "primary.700",
                transition: "0.2s ease-in-out",
              }}
              _active={{
                color: "primary.700",
              }}
            >
              Settings
            </Text>
          </Link>
        </Box>

        <Box pt="10px">
          <Link href="/profiles/client">
            <HStack
              w="full"
              justify="center"
              spacing="3px"
              pl="7px"
              pr="15px"
              py="4px"
              bg="secondary.500"
              rounded={30}
            >
              <Image
                w="28px"
                as={NextImage}
                alt="profile button"
                src={profileIcon}
              />
              <Text
                fontSize="13px"
                fontWeight="500"
                fontFamily="Aqsa"
                color="dark.900"
              >
                Vineet
              </Text>
            </HStack>
          </Link>
        </Box>
      </VStack>

      <Box w="100%" fontFamily="Inter">
        <BasicCard variant="dark" py="30px">
          <Image as={NextImage} alt="snow" src={snowIcon} />
          <Text
            textTransform="capitalize"
            fontSize={{ md: 14, base: 16 }}
            fontWeight="medium"
            my={2}
            color="primary.200"
          >
            Layers Tip
          </Text>
          <Text color="primary.200" fontSize={{ md: 12, base: 14 }}>
            Review the contract carefully to ensure it meets your needs, make
            changes directly in the fields on the right, and send it for review
            with just a few clicks. By following these pro tips, you can quickly
            approve contracts and ensure that all necessary changes have been
            made.
          </Text>
        </BasicCard>
      </Box>
    </VStack>
  );
};

export default SideNav;
