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
import { ConnectWallet, useUser } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  return (
    <>
      <Head>
        <title>LAYERS</title>
        <meta
          name="description"
          content="Layers is a blockchain-based protocol that will enable freelancers and clients to work together securely and with greater transparency."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/svgs/mainLogoDark.svg" />
      </Head>
      <main>
        <Flex
          w="100vw"
          h="100vh"
          align="center"
          direction="column"
          px={{ base: "20px", xl: "40px" }}
          pt={{ base: "20px", xl: "25px" }}
          // pb={{ base: "50px", xl: "initial" }}
          bgImage="/layersmain.png"
          bgColor="#8E0DFF"
          bgRepeat="none"
          bgPos="center"
          bgSize="cover"
        >
          <HStack justify="space-between" w="full">
            <Image
              as={NextImage}
              src={mainLogo}
              w={{ base: "40%", xl: "initial" }}
            />

            <Box>
              {!user ? (
                <>
                  <ConnectWallet />
                </>
              ) : (
                <Link href="/dashboard">
                  <Button
                    bg="white"
                    color="black"
                    borderRadius="15px"
                    h="40px"
                    fontSize="16px"
                    // display={{ base: "none", xl: "flex" }}
                  >
                    Enter App
                  </Button>
                </Link>
              )}
            </Box>
          </HStack>

          <VStack
            w="full"
            justify="center"
            h="full"
            spacing={{ base: "15px", xl: "20px" }}
          >
            <Center
              p="15px"
              h="35px"
              borderRadius="50px"
              borderWidth="1px"
              borderColor="white"
            >
              <Text fontSize="14px" fontWeight="500" textTransform="uppercase">
                WELCOME TO LAYERS
              </Text>
            </Center>
            <Text
              fontSize={{ base: "40px", xl: "60px" }}
              fontWeight="bold"
              fontFamily="Bold"
              lineHeight={{ base: "40px", xl: "60px" }}
              textTransform="uppercase"
              textAlign="center"
              w={{ base: "full", xl: "900px" }}
            >
              Future of freelancing is decentralized
            </Text>
            <Text
              w={{ base: "full", xl: "650px" }}
              fontSize="14px"
              textAlign="center"
              lineHeight={{ base: "15px", xl: "initial" }}
            >
              Layers is a blockchain-based protocol that will enable freelancers
              and clients to work together securely and with greater
              transparency.
            </Text>
          </VStack>

          {/* <Box display={{ base: "flex", xl: "none" }}>
            {!user ? (
              <>
                <ConnectWallet />
              </>
            ) : (
              <Link href='/dashboard'>
                <Button
                  bg='white'
                  color='black'
                  borderRadius='20px'
                  h={{ base: "50px", xl: "40px" }}
                  fontSize='16px'
                  display={{ base: "flex", xl: "none" }}
                >
                  Enter App
                </Button>
              </Link>
            )}
          </Box> */}
        </Flex>
      </main>
    </>
  );
}
