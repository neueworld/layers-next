import {
  Box,
  HStack,
  Text,
  Center,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ConnectWallet, useAddress, useLogout } from "@thirdweb-dev/react";
import { useEffect } from "react";
// import { Link, useLocation } from 'react-router-dom';
// import ConnectWallet from '../ConnectWallet';
import LayersLogo from "@/assets/svgs/mainLogo.svg";
import LayersLogoPurple from "@/assets/svgs/logoPurple.svg";
import { AuthInterceptor } from "@/utils/AuthInterceptor";

import MobileNavigation from "./mobileNav";
import Notification from "./Notification";
import NovuHeader from "./novuNotification";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import profileIcon from "@/assets/svgs/profile.svg";

const MainNav = () => {
  const address = useAddress();

  // useEffect(() => {
  //   AuthInterceptor();
  // }, [address]);

  // const location = useLocation();
  const location = useRouter();
  const { isLoading } = useLogout();
  console.log(isLoading);

  const { colorMode } = useColorMode();

  const bg = useColorModeValue("light.500", "dark.900");
  const bgTheme = useColorModeValue("light", "dark");
  const Logo = useColorModeValue(LayersLogoPurple, LayersLogo);

  return (
    <Box
      pb={
        location.pathname.includes("contract") ||
        location.pathname.includes("onboarding")
          ? "0px"
          : "75px"
      }
    >
      <HStack
        w="full"
        justify="space-between"
        borderBottomWidth="1px"
        borderColor="#D6D6D6"
        minH="60px"
        py="15px"
        px={{ base: "20px", xl: "40px" }}
        position={
          location.pathname.includes("contract") ||
          location.pathname.includes("onboarding")
            ? "static"
            : "fixed"
        }
        top="0px"
        zIndex="2"
        bg={bg}
      >
        <Box w="33%">
          <Link href="/dashboard">
            <Image
              alt="Layers Foundation"
              src={Logo}
              // width={colorMode === "light" ? "30px" : "initial"}
            />
          </Link>
        </Box>

        {location.pathname.includes("contract") ||
        location.pathname.includes("from-template") ||
        location.pathname === "/templates/new" ||
        location.pathname.includes("escrow") ? (
          <HStack
            spacing="60px"
            w="34%"
            justify="center"
            color="grey.200"
            display={{ base: "none", xl: "flex" }}
          >
            <Box
              _hover={{
                color: "primary.700",
                transition: "0.2s ease-in-out",
              }}
              fontSize="15px"
            >
              <Link href="/dashboard">
                <Text fontWeight="medium">Layers</Text>
              </Link>
            </Box>

            <Box
              _hover={{
                color: "primary.700",
                transition: "0.2s ease-in-out",
              }}
            >
              <Link href="/templates">
                <Text fontWeight="medium">Templates</Text>
              </Link>
            </Box>

            <Box>
              <Text fontWeight="medium" fontSize="15px">
                Clients
              </Text>
            </Box>
          </HStack>
        ) : (
          ""
        )}

        {location.pathname.includes("onboarding") ? (
          <HStack
            justify="flex-end"
            w={{ base: "full", xl: "33%" }}
            fontSize="14px"
          >
            <Text as="span">
              Already have an account?{" "}
              <Text as="span" textDecor="underline" color="primary.700">
                {" "}
                Login
              </Text>
            </Text>
          </HStack>
        ) : (
          <HStack spacing="15px" w="33%" justify="flex-end">
            <Center
              w="30px"
              h="30px"
              borderRadius="50%"
              borderWidth="1px"
              borderColor="#D6D6D6"
            >
              <NovuHeader />
              {/* <Notification /> */}
            </Center>

            {/* <Box display={{ base: "none", xl: "flex" }}>
              <Link href="/profiles/freelancer">
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
                  <Image width="28" alt="profile button" src={profileIcon} />
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
            </Box> */}

            <Center
              display={{ base: "flex", xl: "none" }}
              w="30px"
              h="30px"
              borderRadius="50%"
              borderWidth="1px"
              borderColor="#D6D6D6"
            >
              <MobileNavigation />
            </Center>

            <Box display={{ base: "none", xl: "initial" }} p="0px" h="40px">
              {/* <Connect
              className="customConnectButton"
              theme="dark"
              auth={{
                loginOptional: false
              }}
            /> */}
              <ConnectWallet className="customConnectButton" theme={bgTheme} />
            </Box>
          </HStack>
        )}
      </HStack>
    </Box>
  );
};

export default MainNav;
