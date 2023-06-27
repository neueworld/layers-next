import Head from "next/head";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Text,
  VStack,
  Center,
  HStack,
  Image,
  Button,
} from "@chakra-ui/react";
import NextImage from "next/image";
import mainLogo from "@/assets/svgs/Layerslogo.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      direction="column"
      bgImage="/layersmain.png"
      bgColor="#8E0DFF"
      bgRepeat="none"
      bgPos="center"
      bgSize="cover"
    >
      <VStack
        w="full"
        justify="center"
        h="full"
        spacing={{ base: "15px", xl: "10px" }}
      >
        <Text
          fontSize={{ base: "40px", xl: "60px" }}
          fontWeight="bold"
          fontFamily="Aqsa"
          lineHeight={{ base: "45px", xl: "70px" }}
          textAlign="center"
          w={{ base: "full", xl: "900px" }}
        >
          The page you're looking for does not exist
        </Text>

        <Text
          w={{ base: "full", xl: "650px" }}
          fontSize="16px"
          textAlign="center"
          lineHeight={{ base: "15px", xl: "initial" }}
        >
          Don’t worry, we’ll help you get back to your FREELANCE space
        </Text>

        <Link href="/dashboard">
          <Center
            mt="50px"
            p="15px"
            h="35px"
            borderRadius="50px"
            borderWidth="1px"
            borderColor="white"
            bg="white"
          >
            <Text fontSize="14px" fontWeight="500" color="primary.700">
              Take me there
            </Text>
          </Center>
        </Link>
      </VStack>
    </Flex>
  );
};

export default NotFound;
