import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Button,
  Icon,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Center,
} from "@chakra-ui/react";
// import ConnectWallet from '../ConnectWallet';
import React, { useRef } from "react";

import BasicCard from "../cards/BasicCard";
import snowIcon from "@/assets/svgs/snow.svg";
import Link from "next/link";
import Image from "next/image";
import profileIcon from "@/assets/svgs/profile.svg";
import { ConnectWallet } from "@thirdweb-dev/react";

const MobileNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        as="a"
        fontSize="sm"
        fontWeight={400}
        variant="link"
        href="#"
      >
        <Icon color="#D6D6D6" w={5} h={5} as={HamburgerIcon} />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent bg="dark.400" w="full">
          <DrawerCloseButton mt="10px" w="30px" border="0px" bg="none" />
          <DrawerHeader borderBottomWidth="1px" pb="6px" borderColor="grey.400">
            <Box p="0px" h="40px">
              <ConnectWallet className="customConnectButton" theme="dark" />
            </Box>
          </DrawerHeader>

          <DrawerBody pt="40px">
            <VStack w="full">
              <VStack w="80%" spacing="40px">
                <VStack spacing="4px" fontSize="18px" color="grey.300">
                  <Box color="primary.700">
                    <Link href="/dashboard">
                      <Text
                        fontWeight="medium"
                        _hover={{
                          color: "primary.700",
                          transition: "0.2s ease-in-out",
                        }}
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

                  <Box color="primary.700" opacity="0.6">
                    <Link href="/templates">
                      <Text
                        fontWeight="medium"
                        _hover={{
                          color: "primary.700",
                          transition: "0.2s ease-in-out",
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

                  <Box color="primary.700" opacity="0.6">
                    <Link href="/accounts">
                      <Text
                        fontWeight="medium"
                        _hover={{
                          color: "primary.700",
                          transition: "0.2s ease-in-out",
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
                          width="28"
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

                <BasicCard variant="dark" px="20px" py="30px">
                  <Image alt="snow" src={snowIcon} />
                  <Text textTransform="capitalize" fontWeight="medium" my={2}>
                    Layers Tip
                  </Text>
                  <Text fontSize="14px">
                    Review the contract carefully to ensure it meets your needs,
                    make changes directly in the fields on the right, and send
                    it for review with just a few clicks. By following these pro
                    tips, you can quickly approve contracts and ensure that all
                    necessary changes have been made.
                  </Text>
                </BasicCard>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
