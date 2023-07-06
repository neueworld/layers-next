import { ArrowUpIcon } from "@chakra-ui/icons";
import {
  HStack,
  VStack,
  Text,
  Flex,
  Box,
  Image,
  Center,
  Avatar,
  AvatarBadge,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import globeIcon from "@/assets/svgs/globe.svg";
import lineIcon from "@/assets/svgs/line.svg";
import locationIcon from "@/assets/svgs/location.svg";
import snowIcon from "@/assets/svgs/snow.svg";
import BasicCard from "@/components/cards/BasicCard";
import Body from "@/components/common/Body";
import SideNav from "@/components/navbar/sideNav";
import NextImage from "next/image";

const Client = () => {
  return (
    <Body>
      <Flex
        w="full"
        pb="50px"
        pt="25px"
        align="flex-start"
        // gap={{ base: "0px", xl: "25px" }}
      >
        <Box w={{ xl: "20%" }} display={{ base: "none", xl: "initial" }}>
          <VStack align="flex-start" fontSize="15px" className="fixedNavPane">
            <SideNav />
          </VStack>
        </Box>

        <VStack
          w={{ base: "full", xl: "80%" }}
          pt={{ base: "50px", xl: "40px" }}
          spacing="50px"
        >
          <Flex
            direction={{ base: "column", xl: "row" }}
            px={{ base: "20px", xl: "50px" }}
            pb={{ base: "20px", xl: "initial" }}
            pt={{ base: "20px", xl: "initial" }}
            align={{ base: "flex-start", xl: "center" }}
            w="full"
            gap={{ base: "15px", xl: "30px", "2xl": "60px" }}
            bg="dark.400"
            borderRadius="10px"
            h={{ base: "full", xl: "140px" }}
            fontSize="14px"
            borderBottomWidth="2px"
            borderColor="grey.300"
          >
            <VStack
              w={{ base: "full", xl: "initial" }}
              align={{ base: "center", xl: "flex-start" }}
            >
              <Box
                pt={{ base: "0px", xl: "40px" }}
                mt={{ base: "-60px", xl: "0px" }}
              >
                <Avatar size="2xl">
                  <AvatarBadge
                    borderColor="primary.700"
                    borderWidth="5px"
                    bg="primary.700"
                    boxSize="40px"
                  />
                </Avatar>
              </Box>
            </VStack>

            <Text fontSize="32px" fontWeight="bold">
              Vineet Yadav
            </Text>

            <HStack>
              <Image
                as={NextImage}
                alt="icon"
                src={locationIcon}
                w={{ base: "24px", xl: "15px" }}
              />
              <Text>Fairfax, US</Text>
            </HStack>
            <HStack>
              <Image
                as={NextImage}
                alt="icon"
                src={globeIcon}
                w={{ base: "24px", xl: "15px" }}
              />
              <Text as="u">www.vineetyadav.com</Text>
            </HStack>
            <VStack align="flex-start" spacing="0px" lineHeight="16px">
              <Text fontSize="12px" color="grey.600">
                Completed Jobs
              </Text>
              <Text>202</Text>
            </VStack>
            <VStack align="flex-start" spacing="0px" lineHeight="16px">
              <Text fontSize="12px" color="grey.600">
                Hired Talent
              </Text>
              <Text>202</Text>
            </VStack>
          </Flex>

          <Flex
            direction={{ base: "column", xl: "row" }}
            gap="30px"
            w="full"
            align="flex-start"
            alignItems="stretch"
          >
            <VStack spacing="5px" w="full" align="flex-start">
              <Text
                fontSize="12px"
                fontWeight="bold"
                color="grey.300"
                textTransform="uppercase"
              >
                About Vinnet
              </Text>

              <VStack
                align="flex-start"
                justify="space-between"
                w="full"
                h="full"
                pt={{ base: "20px", xl: "30px" }}
                pl={{ base: "20px", xl: "30px" }}
                borderRadius="15px"
                bg="dark.400"
                borderBottomWidth="2px"
                borderColor="grey.300"
              >
                <Box pr="30px">
                  <Text
                    fontWeight="bold"
                    textTransform="capitalize"
                    color="primary.100"
                  >
                    Web3 talent manager
                  </Text>
                  <Text fontSize="14px">
                    Lörem ipsum posedut togände euroläväskap: därför att vid.
                    Teratos fjärrnyckel fastän nonade. Plasotödat nin men dudat
                    jag espegt. Supralärade duska. Prese äsade bess susk. Tresm
                    duguvis, deck antiv autogt. Lörem ipsum posedut togände
                    euroläväskap: därför att vid. Teratos fjärrnyckel fastän
                    nonade. Plasotödat nin men dudat jag espegt. Supralärade
                    duska. Prese äsade bess susk. Tresm duguvis, deck antiv
                    autogt.
                  </Text>
                </Box>

                <HStack justify="flex-end" w="full" pr="8px" pb="8px">
                  <Center borderRadius="50%" bg="primary.400" w="30px" h="30px">
                    <Image as={NextImage} alt="icon" src={lineIcon} w="16px" />
                  </Center>
                </HStack>
              </VStack>
            </VStack>

            <VStack spacing="5px" w="full" align="flex-start">
              <Text fontSize="12px" fontWeight="bold" color="grey.300">
                SKILLS HIRED
              </Text>

              <VStack
                align="flex-start"
                justify="space-between"
                w="full"
                h="full"
                pt={{ base: "20px", xl: "30px" }}
                pl={{ base: "20px", xl: "30px" }}
                borderRadius="15px"
                bg="dark.400"
                borderBottomWidth="2px"
                borderColor="grey.300"
              >
                <Wrap spacingX="15px" spacingY="10px" pr="50px" fontSize="14px">
                  <WrapItem>
                    <Center
                      py="5px"
                      px="10px"
                      borderRadius="10px"
                      border="1px"
                      borderColor="white"
                    >
                      <Text>Frontend</Text>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center
                      py="5px"
                      px="10px"
                      borderRadius="10px"
                      border="1px"
                      borderColor="white"
                    >
                      <Text>UI/UX</Text>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center
                      py="5px"
                      px="10px"
                      borderRadius="10px"
                      border="1px"
                      borderColor="white"
                    >
                      <Text>React.Js</Text>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center
                      py="5px"
                      px="10px"
                      borderRadius="10px"
                      border="1px"
                      borderColor="white"
                    >
                      <Text>Web3</Text>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center
                      py="5px"
                      px="10px"
                      borderRadius="10px"
                      border="1px"
                      borderColor="white"
                    >
                      <Text>Blockchain</Text>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center
                      py="5px"
                      px="10px"
                      borderRadius="10px"
                      border="1px"
                      borderColor="white"
                    >
                      <Text>Visual Design</Text>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center
                      py="5px"
                      px="10px"
                      borderRadius="10px"
                      border="1px"
                      borderColor="white"
                    >
                      <Text>Motion Graphics</Text>
                    </Center>
                  </WrapItem>
                </Wrap>

                <HStack justify="flex-end" w="full" pr="8px" pb="8px">
                  <Center borderRadius="50%" bg="primary.400" w="30px" h="30px">
                    <Image alt="line" as={NextImage} src={lineIcon} w="16px" />
                  </Center>
                </HStack>
              </VStack>
            </VStack>
          </Flex>

          <VStack
            align="flex-start"
            borderRadius="15px"
            bg="dark.400"
            // p='30px'
            p={{ base: "20px", xl: "30px" }}
            w="full"
            spacing="30px"
            borderBottomWidth="2px"
            borderColor="grey.300"
          >
            <Text fontWeight="bold">Open Jobs</Text>

            <Flex className="overflow" overflowY="hidden" w="full">
              <HStack spacing="30px">
                <Box
                  borderRadius="10px"
                  bg="grey.300"
                  w="300px"
                  fontSize="14px"
                >
                  <Box bg="black" h="140px" borderTopRadius="10px" />
                  <VStack p="15px" align="flex-start" spacing="10px">
                    <Text fontWeight="bold" textTransform="uppercase">
                      Neue World - UI/UX
                    </Text>
                    <Text>
                      Lörem ipsum posedut togände euroläväskap: därför att vid.
                      Teratos fjärrnyckel fastän nonade. Plasotödat nin men
                      dudat jag espegt.
                    </Text>
                    <HStack spacing="2px" pb="10px">
                      <ArrowUpIcon fontSize="22px" transform="rotate(45deg)" />
                      <Text as="u">View Job</Text>
                    </HStack>
                  </VStack>
                </Box>

                <Box
                  borderRadius="10px"
                  bg="grey.300"
                  w="300px"
                  fontSize="14px"
                >
                  <Box bg="black" h="140px" borderTopRadius="10px" />
                  <VStack p="15px" align="flex-start" spacing="10px">
                    <Text fontWeight="bold" textTransform="uppercase">
                      Neue World - UI/UX
                    </Text>
                    <Text>
                      Lörem ipsum posedut togände euroläväskap: därför att vid.
                      Teratos fjärrnyckel fastän nonade. Plasotödat nin men
                      dudat jag espegt.
                    </Text>
                    <HStack spacing="2px" pb="10px">
                      <ArrowUpIcon fontSize="22px" transform="rotate(45deg)" />
                      <Text as="u">View Job</Text>
                    </HStack>
                  </VStack>
                </Box>

                <Box
                  borderRadius="10px"
                  bg="grey.300"
                  w="300px"
                  fontSize="14px"
                >
                  <Box bg="black" h="140px" borderTopRadius="10px" />
                  <VStack p="15px" align="flex-start" spacing="10px">
                    <Text fontWeight="bold" textTransform="uppercase">
                      Neue World - UI/UX
                    </Text>
                    <Text>
                      Lörem ipsum posedut togände euroläväskap: därför att vid.
                      Teratos fjärrnyckel fastän nonade. Plasotödat nin men
                      dudat jag espegt.
                    </Text>
                    <HStack spacing="2px" pb="10px">
                      <ArrowUpIcon fontSize="22px" transform="rotate(45deg)" />
                      <Text as="u">View Job</Text>
                    </HStack>
                  </VStack>
                </Box>

                <Box
                  borderRadius="10px"
                  bg="grey.300"
                  w="300px"
                  fontSize="14px"
                >
                  <Box bg="black" h="140px" borderTopRadius="10px" />
                  <VStack p="15px" align="flex-start" spacing="10px">
                    <Text fontWeight="bold" textTransform="uppercase">
                      Neue World - UI/UX
                    </Text>
                    <Text>
                      Lörem ipsum posedut togände euroläväskap: därför att vid.
                      Teratos fjärrnyckel fastän nonade. Plasotödat nin men
                      dudat jag espegt.
                    </Text>
                    <HStack spacing="2px" pb="10px">
                      <ArrowUpIcon fontSize="22px" transform="rotate(45deg)" />
                      <Text as="u">View Job</Text>
                    </HStack>
                  </VStack>
                </Box>
              </HStack>
            </Flex>
          </VStack>
        </VStack>
      </Flex>
    </Body>
  );
};

export default Client;
